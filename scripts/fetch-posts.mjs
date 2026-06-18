// note の RSS を取得し、最新記事を src/data/posts.json に焼き込む。
// ビルド前（CI / ローカル）に実行する。ブラウザではなく Node 上で取得するため CORS は無関係。
//
//   node scripts/fetch-posts.mjs
//
// 取得に失敗した場合は既存の posts.json を残して終了する（デプロイを壊さない）。

import { writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const FEED_URL = 'https://note.com/iktahana/rss'
const LIMIT = 4
const OUT = resolve(dirname(fileURLToPath(import.meta.url)), '../src/data/posts.json')

function decodeEntities(s) {
  return s
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;|&apos;/g, "'")
    .replace(/&amp;/g, '&')
    .trim()
}

function pick(block, tag) {
  const m = block.match(new RegExp(`<${tag}>([\\s\\S]*?)</${tag}>`))
  return m ? decodeEntities(m[1]) : ''
}

function formatDate(raw) {
  const d = new Date(raw)
  if (Number.isNaN(d.getTime())) return ''
  const p = (n) => String(n).padStart(2, '0')
  return `${d.getFullYear()}.${p(d.getMonth() + 1)}.${p(d.getDate())}`
}

const res = await fetch(FEED_URL, { headers: { 'User-Agent': 'iktahana-site-build' } })
if (!res.ok) throw new Error(`note RSS の取得に失敗: HTTP ${res.status}`)
const xml = await res.text()

const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)]
  .map((m) => ({
    title: pick(m[1], 'title'),
    url: pick(m[1], 'link'),
    date: formatDate(pick(m[1], 'pubDate')),
  }))
  .filter((p) => p.title && p.url)
  .slice(0, LIMIT)

if (items.length === 0) throw new Error('RSS から記事を1件も抽出できませんでした')

await writeFile(OUT, JSON.stringify(items, null, 2) + '\n', 'utf-8')
console.log(`✓ ${items.length} 件の記事を ${OUT} に書き出しました`)
for (const p of items) console.log(`  ${p.date}  ${p.title}`)
