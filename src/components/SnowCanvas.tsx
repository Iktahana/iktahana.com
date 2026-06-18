import { useEffect, useRef } from 'react'

type Flake = { x: number; y: number; r: number; spd: number; ph: number; o: number }

/** 元デザインの雪アニメーション（80粒・IntersectionObserverで表示中のみ描画）の移植。 */
export default function SnowCanvas({ className }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const DPR = Math.min(window.devicePixelRatio || 1, 2)
    let w = 0
    let h = 0
    let raf = 0
    let running = false
    let flakes: Flake[] = []

    const resize = () => {
      const r = canvas.getBoundingClientRect()
      w = r.width
      h = r.height
      canvas.width = Math.max(1, w * DPR)
      canvas.height = Math.max(1, h * DPR)
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0)
    }
    resize()

    flakes = Array.from({ length: 80 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.5 + 0.5,
      spd: Math.random() * 0.5 + 0.2,
      ph: Math.random() * Math.PI * 2,
      o: Math.random() * 0.45 + 0.15,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      for (const f of flakes) {
        f.y += f.spd
        f.ph += 0.008
        f.x += Math.sin(f.ph) * 0.3
        if (f.y > h + 4) {
          f.y = -4
          f.x = Math.random() * w
        }
        ctx.beginPath()
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${f.o})`
        ctx.fill()
      }
      raf = requestAnimationFrame(draw)
    }

    window.addEventListener('resize', resize)
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && !running) {
            running = true
            resize()
            draw()
          } else if (!e.isIntersecting && running) {
            running = false
            cancelAnimationFrame(raf)
          }
        }
      },
      { threshold: 0.02 },
    )
    io.observe(canvas)

    return () => {
      io.disconnect()
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(raf)
    }
  }, [])

  return <canvas ref={ref} className={className} />
}
