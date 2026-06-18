import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // ローカル確認用（Docker 経由のブラウザからアクセスするため）。本番には影響しない。
    allowedHosts: ['host.docker.internal', 'localhost'],
  },
})
