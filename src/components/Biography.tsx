const entries = [
  {
    year: '2024',
    text: '日本大学芸術学部文芸学科に入学。健康上の理由により一年間休学。',
  },
  {
    year: '2025',
    text: '復学し、楊逸ゼミに参加。ダダイズム・モダニズム・新感覚派を基盤に「虚幻主義」の研究を開始。',
  },
]

export default function Biography() {
  return (
    <section className="mx-auto max-w-[980px] px-6 py-[90px]">
      <div className="grid grid-cols-[0.72fr_1fr] items-center gap-[56px] max-[760px]:grid-cols-1 max-[760px]:gap-8">
        <div className="mx-auto aspect-[3/4] w-full overflow-hidden rounded-[10px] border border-white/12 max-[760px]:max-w-[300px]">
          <img
            src="/portrait.jpg"
            alt="幾田 花（いくた はな）の肖像"
            width={1164}
            height={1600}
            loading="lazy"
            decoding="async"
            className="block h-full w-full object-cover [object-position:center_30%]"
          />
        </div>
        <div>
          <div className="text-[11px] uppercase tracking-[0.36em] text-[#646464]">Biography</div>
          <h2 className="mt-4 mb-[38px] text-[clamp(24px,3vw,34px)] font-semibold tracking-[0.04em] text-[#f2f2f2]">
            幾田 花 — Ikuta Hana
          </h2>
          <div className="flex flex-col gap-[26px] text-left">
            {entries.map((e) => (
              <div key={e.year} className="flex items-baseline gap-[22px]">
                <span className="min-w-[42px] text-[13px] text-[#646464]">{e.year}</span>
                <p className="m-0 text-[15px] font-light leading-[1.95] text-[#c8c8c8]">{e.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
