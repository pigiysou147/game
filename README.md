# DeepSeek + Dify: 数据分级分类助手（可导入 Dify 的工具与部署示例）

本仓库在现有工程基础上，新增一个可直接运行与演示的 AI 智能体方案：
- 使用免费易得的本地大模型（Ollama + DeepSeek）。
- 使用 Dify 完成模型调用、知识库配置、工作流编排。
- 提供可导入 Dify 的 Tool（OpenAPI），以及端到端示例：拉取数据库结构 → 分级分类 → 导出 Excel。

## 目录结构
- `docker-compose.yml`：一键启动 Postgres 示例库、Ollama(DeepSeek)、工具微服务。
- `tool_api/`：FastAPI 微服务，提供数据库结构拉取和 Excel 导出能力（Dify 通过 Tool 调用）。
- `sample_db/`：Postgres 初始化 SQL（示例库与数据）。
- `dify/`：可导入 Dify 的 Tool OpenAPI 规范与说明。
- `docs/`：部署与使用文档。

## 快速开始
1) 安装 Docker 与 Docker Compose。
2) 启动：
```
cd /workspace
docker compose up -d
```
3) 拉取 DeepSeek 模型（容器内）：
```
docker exec -it ollama ollama pull deepseek-r1:7b
```
4) 验证工具微服务：
```
curl "http://localhost:8000/schema"
```
5) Dify 连接与导入 Tool：见 `docs/DEPLOY_DIFY.md` 与 `docs/WORKFLOW_GUIDE.md`。

## 工作流编排要点
- Tool `db_get_schema` → LLM(DeepSeek) 产出字段级标签 JSON → Tool `db_export_excel`。
- 结果以 base64 Excel 文件输出。

## 可选课题：网页抓取优化
见 `docs/SCRAPER_OPTIMIZATION.md` 提示与思路。