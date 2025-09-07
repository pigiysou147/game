# 连接或部署 Dify

## 连接已有 Dify
1. 在 Dify 后台 > Settings > Model Providers 中启用 Ollama。
2. Base URL 填：
   - 若 Dify 与本 compose 在同一 Docker 网络：`http://ollama:11434`
   - 若 Dify 在其他机器：`http://<宿主IP>:11434`
3. 可选：在 Knowledge / Workflows 中使用本仓库的 Tool（见下）。

## 导入本仓库的 Tool
- 在 Dify 后台 > Tools > Import from OpenAPI，选择 `dify/tools/db_assistant_openapi.yaml`。
- 导入后，进入 Tool 详情，检查/修改服务器地址（Servers）：
  - 若 Dify 与本 compose 同网络：`http://tool_api:8000`
  - 若不在同一网络：改为 `http://<宿主IP>:8000`
- 导入后可在工作流中使用 `db_get_schema` 与 `db_export_excel`。

## 自建 Dify（可选）
参考官方文档的 docker-compose 一键部署：
- 管理台默认端口 80（或 3000，视发行版本），配置向导完成后即可使用。
- 部署后按“连接已有 Dify”的步骤配置 Ollama 与 Tool 服务器地址。