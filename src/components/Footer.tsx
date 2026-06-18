import { ArrowUpRight } from './icons'

const links = [
  { label: 'GitHub', url: 'https://github.com/Iktahana' },
  { label: 'X', url: 'https://x.com/iktahana' },
  { label: 'note', url: 'https://note.com/iktahana' },
]

export default function Footer() {
  return (
    <footer className="mt-[50px] border-t border-[#2d2d2d] px-0 pt-16 pb-[72px] text-center">
      <div className="mb-9 flex justify-center gap-[34px] text-[12px] tracking-[0.16em]">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.url}
            target="_blank"
            rel="noopener"
            className="text-[#969696] no-underline transition-colors duration-200 hover:text-[#f2f2f2]"
          >
            {l.label}
            <ArrowUpRight size={13} className="ml-[6px] inline-block align-middle" />
          </a>
        ))}
      </div>
      <div className="mt-[34px] text-[10px] tracking-[0.2em] text-[#505050]">
        © 幾田 花 — IKTAHANA.COM
      </div>
    </footer>
  )
}
