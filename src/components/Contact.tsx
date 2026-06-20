import { useEffect, useState } from 'react'
import { XIcon, MailIcon, ArrowUpRight } from './icons'

// アドレスは XOR（キー0x2a）で難読化して保持。バンドル内には平文も、
// "@"=64 やドメインの連続ASCIIコード列も残らない（バイト列からパターンが消える）。
// 初期HTMLには一切含めず、マウント時に復号して実際の mailto リンクを描画するため、
// クリック不要で UX は自然。静的スクレイパー・素朴なJSコード走査の双方を無効化する。
const KEY = 0x2a
const ENC = [66, 75, 68, 75, 106, 67, 65, 94, 75, 66, 75, 68, 75, 4, 73, 69, 71]

function buildEmail(): string {
  return String.fromCharCode(...ENC.map((b) => b ^ KEY))
}

const rowClass =
  'flex items-baseline justify-between gap-5 border-b border-[#2d2d2d] py-[22px] no-underline transition-opacity duration-200 hover:opacity-65'

export default function Contact() {
  const [email, setEmail] = useState<string | null>(null)

  // マウント後（ブラウザ実行時）にのみ復号。初期HTML・SSR出力には残さない。
  useEffect(() => {
    setEmail(buildEmail())
  }, [])

  return (
    <section id="contact" className="mx-auto max-w-[560px] px-0 py-[90px] text-center">
      <div className="text-[11px] uppercase tracking-[0.36em] text-[#646464]">Contact</div>
      <h2 className="mt-4 mb-[18px] text-[clamp(24px,3vw,34px)] font-semibold tracking-[0.04em] text-[#f2f2f2]">
        ご連絡
      </h2>
      <p className="m-0 mb-10 text-[15px] font-light leading-[2] text-[#969696]">
        ご感想やお問い合わせは、以下より承ります。
      </p>

      <div className="border-t border-[#2d2d2d]">
        <a
          href={email ? `mailto:${email}` : undefined}
          className={rowClass}
        >
          <span className="inline-flex items-center gap-[9px] text-[11px] uppercase tracking-[0.28em] text-[#646464]">
            <MailIcon size={14} />
            Email
          </span>
          <span className="text-[18px] text-[#f2f2f2]">
            {/* 復号前は非改行スペースで行の高さを確保し、レイアウトシフトを防ぐ */}
            {email ?? ' '}
          </span>
        </a>
        <a href="https://x.com/iktahana" target="_blank" rel="noopener" className={rowClass}>
          <span className="inline-flex items-center gap-[9px] text-[11px] uppercase tracking-[0.28em] text-[#646464]">
            <XIcon size={14} />DM
          </span>
          <span className="text-[18px] text-[#f2f2f2]">
            @iktahana へメッセージ
            <ArrowUpRight size={13} className="ml-[6px] inline-block align-middle" />
          </span>
        </a>
      </div>

      <p className="mt-[22px] text-[13px] font-light leading-[1.9] text-[#646464]">
        確実なお返事をご希望の場合は、X のダイレクトメッセージ（DM）機能のご利用をおすすめします。
      </p>
    </section>
  )
}
