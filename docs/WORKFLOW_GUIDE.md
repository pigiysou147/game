# Dify 工作流编排指南（数据分级分类助手）

## 目标
输入数据库连接（已由工具容器配置好），自动拉取表结构，并由大模型按规则进行分级分类，最后导出 Excel。

## 步骤
1. 导入 Tool：`dify/tools/db_assistant_openapi.yaml`。
2. 新建 Workflow 应用：
   - 节点 A（Tool）：`db_get_schema`
     - 无需参数，输出 JSON（包含 `database` 与 `columns`）。
   - 节点 B（LLM）：选择 Ollama / DeepSeek 模型（如 `deepseek-r1:7b`）。
     - 提示词样例：
```
你是数据分级分类专家。请根据输入的数据库结构，为每个字段生成分级与分类标签。
规则示例：
- 涉及个人身份信息(如 email、phone) 标为 level=L2, category=PII
- 金额/订单等交易信息标为 level=L1, category=FIN
- 其它默认 level=L0, category=GEN
输出 JSON: { "table.column": {"level": "L?", "category": "..."}, ... }
输入：{{A.outputs.columns}}
```
   - 节点 C（Tool）：`db_export_excel`
     - Body:
```
{
  "database": "{{A.outputs.database}}",
  "columns": {{A.outputs.columns}},
  "labels": {{B.outputs.text}}
}
```
   - 结束节点：将 C 的 `file_b64` 作为文件输出（文件名使用 `filename`）。

## 验证
- 运行工作流后应得到一个 `classification.xlsx` 文件，包含列：database, table, column, type, nullable, level, category。