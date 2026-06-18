import SnowCanvas from './SnowCanvas'

export default function Excerpt() {
  return (
    <section className="relative flex flex-col items-center overflow-hidden py-[90px]">
      <SnowCanvas className="pointer-events-none absolute inset-0 z-0 h-full w-full" />

      <div className="relative z-[1] mb-[10px] text-[11px] uppercase tracking-[0.36em] text-[#646464]">
        短編 · Excerpt
      </div>
      <h3 className="relative z-[1] m-0 mb-[44px] text-[22px] font-semibold tracking-[0.12em] text-[#f2f2f2]">
        窓の外の雪
      </h3>

      <div className="relative z-[1] flex w-full justify-center">
        <div
          className="h-[clamp(400px,58vh,580px)] indent-[1em] text-start text-[20px] font-light leading-[2.15] tracking-[0.08em] text-[#c8c8c8] [writing-mode:vertical-rl] max-[760px]:h-[330px] max-[760px]:text-[14px] max-[760px]:leading-[1.95] max-[760px]:tracking-[0.02em]"
        >
          窓の外は白い雪がまた降っていた。そして、雪が庭に落ちた。野口は白い雪らは一つ一つの、人間の魂だろうかと思った。もしそうであれば、雪は死んだ者なのか、それとももうすぐ生まれるものなのか。もしみんな死んだ者なら、寂し過ぎないだろうか。白い美しい雪原の上には、きれいな雪花が溢れているように見えたが、全部は死者の怨霊である。春になると、雪は消えた。そして来年の冬になって、白い雪はもう一度舞いて戻った。このように寂しく繰り返していて、世間はこのような哀愁の輪廻である、と思った。
        </div>
      </div>
    </section>
  )
}
