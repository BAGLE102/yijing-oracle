# 觀易 · 易經占卜

以三枚銅錢法模擬六次起卦的靜態網站，包含快速起卦與可親手搖動的龜甲銅錢模式、本卦、動爻、之卦、簡要解讀，以及結果圖片下載／複製功能。

## 本機預覽

直接開啟 `index.html`，或在資料夾內啟動任意靜態 HTTP server。

## GitHub Pages

1. 將此資料夾推送至 GitHub repository。
2. 在 repository 的 **Settings → Pages** 中將 **Source** 設為 **GitHub Actions**。
3. 之後每次推送到 `main`，內建 workflow 都會自動部署。

## 說明

- 完全前端執行，不會上傳問題或占卜結果。
- 起卦使用瀏覽器 `crypto.getRandomValues()`。
- 「複製結果圖片」需要 HTTPS 或 localhost，以及支援 Clipboard API 的瀏覽器。
- 占卜內容僅供自我反思與文化體驗。
