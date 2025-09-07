from __future__ import annotations

import base64
import io
import os
from typing import Any, Dict, List

import pandas as pd
from fastapi import FastAPI
from pydantic import BaseModel
from sqlalchemy import create_engine, inspect
from sqlalchemy.engine import Engine

DATABASE_URL = os.getenv("DATABASE_URL", "postgresql+psycopg2://app:app@localhost:5432/appdb")

app = FastAPI(title="DB Assistant Tool API", version="0.1.0")


def get_engine() -> Engine:
    engine = create_engine(DATABASE_URL, pool_pre_ping=True)
    return engine


@app.get("/health")
def health() -> Dict[str, str]:
    return {"status": "ok"}


@app.get("/schema")
def get_schema() -> Dict[str, Any]:
    engine = get_engine()
    inspector = inspect(engine)

    database_name = engine.url.database or "appdb"
    schema_rows: List[Dict[str, Any]] = []

    for table_name in inspector.get_table_names():
        columns = inspector.get_columns(table_name)
        for col in columns:
            schema_rows.append(
                {
                    "database": database_name,
                    "table": table_name,
                    "column": col.get("name"),
                    "type": str(col.get("type")),
                    "nullable": bool(col.get("nullable", True)),
                }
            )

    return {"database": database_name, "columns": schema_rows}


class ExportRequest(BaseModel):
    database: str
    columns: List[Dict[str, Any]]
    labels: Dict[str, Dict[str, str]] | None = None


@app.post("/export_excel")
def export_excel(payload: ExportRequest) -> Dict[str, Any]:
    rows: List[Dict[str, Any]] = []
    for item in payload.columns:
        table = str(item.get("table"))
        column = str(item.get("column"))
        key = f"{table}.{column}"
        label = (payload.labels or {}).get(key, {})
        rows.append(
            {
                "database": payload.database,
                "table": table,
                "column": column,
                "type": item.get("type"),
                "nullable": item.get("nullable"),
                "level": label.get("level", ""),
                "category": label.get("category", ""),
            }
        )

    df = pd.DataFrame(rows, columns=["database", "table", "column", "type", "nullable", "level", "category"])

    bio = io.BytesIO()
    with pd.ExcelWriter(bio, engine="openpyxl") as writer:
        df.to_excel(writer, index=False, sheet_name="classification")
    bio.seek(0)

    encoded = base64.b64encode(bio.read()).decode("utf-8")
    return {"filename": "classification.xlsx", "file_b64": encoded}