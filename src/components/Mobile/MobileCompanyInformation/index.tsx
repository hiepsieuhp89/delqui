"use client"

import { useEffect, useRef } from "react"
import { notoSansJP } from "@/fonts"

export function MobileCompanyInformation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      const parent = canvas.parentElement
      if (parent) {
        canvas.width = parent.offsetWidth
        canvas.height = Math.min(parent.offsetHeight, 600)
      }
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Define particles
    const particles: {
      x: number
      y: number
      radius: number
      speedX: number
      speedY: number
      opacity: number
      links: number[]
    }[] = []

    const numParticles = 20
    const maxLinks = 2
    const linkOpacity = 0.3

    // Create particles
    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 15 + 5,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.4 + 0.3,
        links: [],
      })
    }

    // Create connections between particles
    for (let i = 0; i < particles.length; i++) {
      const numLinks = Math.floor(Math.random() * maxLinks) + 1
      for (let j = 0; j < numLinks; j++) {
        const targetIndex = Math.floor(Math.random() * particles.length)
        if (targetIndex !== i && !particles[i].links.includes(targetIndex)) {
          particles[i].links.push(targetIndex)
        }
      }
    }

    // Animation function
    const animate = () => {
      ctx.fillStyle = "#1D2A36" // sub-blue color
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw connections
      ctx.strokeStyle = "rgba(127, 196, 253, 0.3)"
      ctx.lineWidth = 1

      for (let i = 0; i < particles.length; i++) {
        const particle = particles[i]

        // Update particle position
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Keep particles within canvas (bounce effect)
        if (particle.x - particle.radius < 0 || particle.x + particle.radius > canvas.width) {
          particle.speedX = -particle.speedX;
          // Điều chỉnh vị trí để hạt không bị kẹt ngoài rìa
          particle.x = particle.x - particle.radius < 0 ? particle.radius : canvas.width - particle.radius;
        }
        if (particle.y - particle.radius < 0 || particle.y + particle.radius > canvas.height) {
          particle.speedY = -particle.speedY;
          // Điều chỉnh vị trí để hạt không bị kẹt ngoài rìa
          particle.y = particle.y - particle.radius < 0 ? particle.radius : canvas.height - particle.radius;
        }

        // Draw connections between particles
        for (const linkIndex of particle.links) {
          const linkedParticle = particles[linkIndex]
          ctx.beginPath()
          ctx.moveTo(particle.x, particle.y)
          ctx.lineTo(linkedParticle.x, linkedParticle.y)
          ctx.strokeStyle = `rgba(127, 196, 253, ${linkOpacity})`
          ctx.stroke()
        }

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(127, 196, 253, ${particle.opacity})`
        ctx.fill()
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <section className="md:hidden relative w-full bg-sub-blue h-fit pb-[60px]" id="company">
      {/* Background particle animation */}
      <canvas 
        ref={canvasRef} 
        className="w-full absolute inset-0 top-0 z-0 h-[600px]" />
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center px-5 
      xsm:pt-[120%] pt-[430px]">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center text-center mb-10">
          <h1 className={`text-[32px] font-bold leading-tight tracking-wider text-white ${notoSansJP.className}`}>
            企業情報
          </h1>
          <div className="w-8 h-[1px] bg-white my-4"></div>
          <p className={`font-poppins text-base font-medium tracking-wider text-white uppercase`}>
            COMPANY INFORMATION
          </p>
        </div>
        {/* Company information list */}
        <div className="w-full text-white">
          {/* Company Name */}
          <div className="border-b border-white border-t py-6 flex flex-col gap-6">
            <h3 className={`text-base font-bold ${notoSansJP.className}`}>会社名</h3>
            <p className={`text-base !font-normal ${notoSansJP.className}`}>株式会社Del Qui</p>
          </div>

          {/* Established */}
          <div className="border-b border-white py-6 flex flex-col gap-6">
            <h3 className={`text-base font-bold ${notoSansJP.className}`}>設立</h3>
            <p className={`text-base !font-normal ${notoSansJP.className}`}>2022年1月</p>
          </div>

          {/* Headquarters */}
          <div className="border-b border-white py-6 flex flex-col gap-6">
            <h3 className={`text-base font-bold ${notoSansJP.className}`}>本社所在地</h3>
            <p className={`text-base !font-normal ${notoSansJP.className}`}>沖縄県石垣島</p>
          </div>

          {/* Overseas Office */}
          <div className="border-b border-white py-6 flex flex-col gap-6">
            <h3 className={`text-base font-bold ${notoSansJP.className}`}>海外駐在所</h3>
            <p className={`text-base !font-normal ${notoSansJP.className}`}>Ho Chi Minh City</p>
          </div>

          {/* Capital */}
          <div className="border-b border-white py-6 flex flex-col gap-6">
            <h3 className={`text-base font-bold ${notoSansJP.className}`}>資本金</h3>
            <p className={`text-base !font-normal ${notoSansJP.className}`}>650万円（資本準備金含む）</p>
          </div>

          {/* Business Description */}
          <div className="border-b border-white py-6 flex flex-col gap-6">
            <h3 className={`text-base font-bold ${notoSansJP.className}`}>事業内容</h3>
            <p className={`text-base !font-normal ${notoSansJP.className}`}>
              各種ソフトウェアの開発、モバイルアプリの開発、ITコンサルティング、自社プロダクトの開発、他
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

