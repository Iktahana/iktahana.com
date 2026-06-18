import { ArrowUpRight } from './icons'

export default function Manifesto() {
  return (
    <section className="mx-auto max-w-[640px] px-3 py-[90px] text-center md:px-0">
      <div className="text-[11px] uppercase tracking-[0.36em] text-[#646464]">幻 — Illusionism</div>
      <h2 className="mt-[18px] mb-[30px] text-[clamp(28px,3.4vw,40px)] font-semibold tracking-[0.04em] text-[#f2f2f2]">
        虚幻主義
      </h2>
      <p className="m-0 text-[16px] font-light leading-[2.05] text-[#c8c8c8]">
        世界は確たる実在ではなく、絶えず揺らぐ幻影である。ダダイズム、モダニズム、新感覚派を基盤に、その感覚を「幻」の詩学へと再構築する——それが虚幻主義（Illusionism）。実在と虚構の狭間に揺蕩う、灰色の文学。
      </p>
      <a
        href="https://sense.iktahana.com"
        target="_blank"
        rel="noopener"
        className="group mt-[30px] inline-block border-b border-[#3c3c3c] pb-[3px] text-[12px] tracking-[0.16em] text-[#969696] no-underline transition-colors duration-200 hover:border-[#f0f0f0] hover:text-[#f2f2f2]"
      >
        虚幻主義について
        <ArrowUpRight size={13} className="ml-[6px] inline-block align-middle" />
      </a>
    </section>
  )
}
