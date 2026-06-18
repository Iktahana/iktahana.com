export default function Recommendation() {
  return (
    <section className="mx-auto max-w-[1040px] px-6 py-[90px]">
      <div className="grid grid-cols-2 items-center gap-[56px] max-[760px]:grid-cols-1 max-[760px]:gap-8">
        <div>
          <div className="mb-5 text-[11px] uppercase tracking-[0.36em] text-[#646464]">
            Recommendation
          </div>
          <h2 className="mb-[26px] text-[clamp(24px,3vw,32px)] font-semibold leading-[1.5] tracking-[0.03em] text-[#f2f2f2]">
            幾田花のおすすめ
          </h2>
          <p className="m-0 text-[16px] font-light leading-[2.1] text-[#969696]">
            Wordへの不満から作り始めて、自分で執筆ツールを開発しました。ソースコードはGitHubに全公開しました。ささやかな貢献として。
          </p>
        </div>

        <div className="rounded-[10px] border border-white/12 bg-[#0c0c0c] px-10 py-[46px] text-center">
          <img src="/gen.svg" alt="幻" className="mb-[18px] inline-block w-10 opacity-90" />
          <div className="mt-2 text-[10px] uppercase tracking-[0.28em] text-[#646464]">
            Writing editor for Japanese novels
          </div>
          <p className="my-[22px] mb-7 text-[15px] font-light leading-[2] text-[#969696]">
            日本語小説のための執筆エディタ。縦書き、ルビ、文章校正、読み上げを1つにまとめました。
          </p>
          <a
            href="https://www.illusions.app"
            target="_blank"
            rel="noopener"
            className="inline-block rounded-[8px] bg-[#f0f0f0] px-7 py-3 text-[15px] font-medium text-[#080808] no-underline transition duration-200 hover:-translate-y-px hover:bg-white hover:shadow-[0_4px_24px_rgba(255,255,255,0.18)]"
          >
            illusions.app を開く
          </a>
          <div className="mt-[22px] flex items-center justify-center gap-5">
            <img src="/icons/macos.svg" alt="macOS" className="h-[18px] w-[18px] [filter:invert(0.45)]" />
            <img src="/icons/windows.svg" alt="Windows" className="h-4 w-4 [filter:invert(0.45)]" />
            <img src="/icons/linux.svg" alt="Linux" className="h-[18px] w-[18px] [filter:invert(0.45)]" />
          </div>
        </div>
      </div>
    </section>
  )
}
