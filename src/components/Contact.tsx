import { useState } from 'react'
import { XIcon, ArrowUpRight } from './icons'

// アドレスは文字コードで保持し、バンドル内に平文（"hana"/"iktahana.com"/"@"）を残さない。
// さらにクリックされるまで組み立て・描画しないため、初期DOM・mailto にも一切出ない。
const USER = [104, 97, 110, 97] // hana
const DOMAIN = [105, 107, 116, 97, 104, 97, 110, 97, 46, 99, 111, 109] // iktahana.com

function buildEmail(): string {
  return String.fromCharCode(...USER) + String.fromCharCode(64) + String.fromCharCode(...DOMAIN)
}

const rowClass =
  'flex items-baseline justify-between gap-5 border-b border-[#2d2d2d] py-[22px] no-underline transition-opacity duration-200 hover:opacity-65'

export default function Contact() {
  const [email, setEmail] = useState<string | null>(null)

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
          href={email ? `mailto:${email}` : '#'}
          onClick={(e) => {
            if (!email) {
              e.preventDefault()
              setEmail(buildEmail())
            }
          }}
          className={`${rowClass} cursor-pointer`}
        >
          <span className="text-[11px] uppercase tracking-[0.28em] text-[#646464]">Email</span>
          <span className="text-[18px] text-[#f2f2f2]">
            {email ?? '［ メールアドレスを表示 ］'}
          </span>
        </a>
        <a href="https://x.com/iktahana" target="_blank" rel="noopener" className={rowClass}>
          <span className="inline-flex items-center gap-[9px] text-[11px] uppercase tracking-[0.28em] text-[#646464]">
            <XIcon size={14} />X · DM
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
