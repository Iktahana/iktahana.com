import { ArrowUpRight } from './icons'
import posts from '../data/posts.json'

// posts.json はビルド前に scripts/fetch-posts.mjs が note の RSS から生成する。
// CI が12時間ごとに再生成・再デプロイするため、内容は静的だが定期的に更新される。
type Post = { date: string; title: string; url: string }

export default function RecentPosts() {
  const items = posts as Post[]

  return (
    <section className="mx-auto max-w-[640px] px-3 py-[90px] text-center md:px-0">
      <div className="text-[11px] uppercase tracking-[0.36em] text-[#646464]">Recent Posts</div>
      <h2 className="mt-4 mb-10 text-[clamp(24px,3vw,34px)] font-semibold tracking-[0.04em] text-[#f2f2f2]">
        最近の投稿
      </h2>

      <div className="border-t border-[#2d2d2d] text-left">
        {items.map((p) => (
          <a
            key={p.url}
            href={p.url}
            target="_blank"
            rel="noopener"
            className="flex items-baseline gap-[22px] border-b border-[#2d2d2d] py-[22px] no-underline transition-opacity duration-200 hover:opacity-65"
          >
            <span className="min-w-[84px] whitespace-nowrap text-[12px] tracking-[0.08em] text-[#646464]">
              {p.date}
            </span>
            <span className="text-[17px] leading-[1.6] text-[#f2f2f2]">{p.title}</span>
          </a>
        ))}
      </div>

      <a
        href="https://note.com/iktahana"
        target="_blank"
        rel="noopener"
        className="mt-[34px] inline-block border-b border-[#3c3c3c] pb-[3px] text-[14px] tracking-[0.1em] text-[#969696] no-underline transition-colors duration-200 hover:border-[#f0f0f0] hover:text-[#f2f2f2]"
      >
        noteで続きを読む
        <ArrowUpRight size={13} className="ml-[6px] inline-block align-middle" />
      </a>
    </section>
  )
}
