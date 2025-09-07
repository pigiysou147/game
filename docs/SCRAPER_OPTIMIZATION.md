# 网页抓取流程优化思路（从 4–5s/页到 ~1–2s）

## 关键手段
- 缓存：对已抓取 URL 以内容指纹缓存 HTML→Markdown 结果，命中直接返回。
- 并发：批量抓取时控制并发度（如 5–10），减少单页等待。
- 解析器替换：优先使用 `readability-lxml` 或 `trafilatura`，性能与正文抽取效果更优。
- Markdown 转换：使用 `pandoc` 或 `markdownify` 的快速模式；避免不必要的图片下载。
- IO 优化：异步 HTTP（httpx/undetected-chromedriver-headless 仅在必要时启用）。

## 简化流程
1. GET URL（httpx，超时与重试策略）。
2. 命中缓存则跳过解析。
3. HTML 清洗 + 正文抽取（trafilatura）。
4. 转 Markdown（markdownify / pandoc）。
5. 结果入库（作为 Dify 知识库文档）。

## 度量
- 记录下载/解析/转换各环节耗时，观察瓶颈后再针对性优化。