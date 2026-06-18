import { XIcon, InstagramIcon, GitHubIcon } from './icons'

const linkBase =
  'inline-flex items-center text-[#8a8a8a] transition-colors duration-200 hover:text-[#f2f2f2]'

export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-[30px] px-0 pt-20 pb-10 text-center">
      <div>
        <div className="text-[11px] uppercase tracking-[0.42em] text-[#646464]">
          Novelist&nbsp;·&nbsp;Literary Critic
        </div>
        <h1 className="mt-4 text-[clamp(42px,6.2vw,78px)] font-bold tracking-[0.06em] text-[#f2f2f2]">
          幾田 花
        </h1>
        <div className="mt-[14px] text-[12px] tracking-[0.34em] text-[#646464]">
          IKUTA HANA — @IKTAHANA
        </div>
      </div>

      <p className="m-0 max-w-[540px] text-[clamp(15px,1.4vw,18px)] font-light leading-[2.1] text-[#969696]">
        虚ろなる幻を、言葉で描く。
      </p>

      <div className="flex items-center justify-center gap-[26px]">
        <a href="https://x.com/iktahana" target="_blank" rel="noopener" aria-label="X" className={linkBase}>
          <XIcon size={19} />
        </a>
        <a
          href="https://note.com/iktahana"
          target="_blank"
          rel="noopener"
          aria-label="note"
          className="inline-flex items-center text-[18px] tracking-[0.04em] text-[#8a8a8a] no-underline transition-colors duration-200 hover:text-[#f2f2f2]"
        >
          note
        </a>
        <a
          href="https://www.instagram.com/iktahana"
          target="_blank"
          rel="noopener"
          aria-label="Instagram"
          className={linkBase}
        >
          <InstagramIcon size={20} />
        </a>
        <a href="https://github.com/Iktahana" target="_blank" rel="noopener" aria-label="GitHub" className={linkBase}>
          <GitHubIcon size={19} />
        </a>
      </div>

      <div className="mt-[18px] flex flex-col items-center gap-3">
        <span className="text-[10px] tracking-[0.32em] text-[#505050]">SCROLL</span>
        <div className="h-[50px] w-px origin-top bg-[linear-gradient(to_bottom,#5a5a5a,transparent)]" />
      </div>
    </section>
  )
}
