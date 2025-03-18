"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { Noto_Sans_JP, Poppins } from "next/font/google"

const notoSansJP = Noto_Sans_JP({
  weight: ["100", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
})

const poppinsFont = Poppins({
  weight: ["500"],
  subsets: ["latin"],
  display: "swap",
})

export function MobileDevelopmentStructure() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      const parent = canvas.parentElement
      if (parent) {
        canvas.width = parent.offsetWidth
        canvas.height = window.innerHeight * 0.3 // Just for the top portion
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

    const numParticles = 12 // Fewer particles for mobile
    const maxLinks = 2
    const linkOpacity = 0.3

    // Create particles
    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 10 + 5, // Smaller particles for mobile
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
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX = -particle.speedX
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY = -particle.speedY
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
    <section className="md:hidden relative w-full bg-white" id="development">
      {/* Header with particle background */}
      <div className="relative w-full bg-sub-blue h-[200px] flex flex-col items-center justify-center">
        <canvas ref={canvasRef} className="absolute inset-0 z-0" />

        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          <h1 className={`text-2xl font-bold leading-tight tracking-wider text-white ${notoSansJP.className}`}>
            開発体制
          </h1>
          <div className="w-8 h-[1px] bg-white my-4"></div>
          <p className={`${poppinsFont.className} text-sm tracking-wider text-white uppercase`}>
            DEVELOPMENT STRUCTURE
          </p>
        </div>
      </div>

      {/* Blue banner */}
      <div className="relative w-full">
        <div className="bg-key-blue2 px-4 py-3 w-full">
          <h2 className={`text-lg font-bold text-white text-center ${notoSansJP.className}`}>
            BaaSで実現する新しい開発のカタチ
          </h2>
        </div>
      </div>

      {/* BaaS Diagram */}
      <div className="px-4 py-8 bg-white">
        <div className="relative w-full h-[280px]">
          <Image
            src="/images/baas1.png"
            alt="BaaS Diagram"
            fill
            draggable={false}
            quality={100}
            className="object-contain"
          />
        </div>

        {/* Comparison Chart */}
        <div className="mt-8 relative w-full h-[300px]">
          <Image
            src="/images/baas2.png"
            alt="BaaS Comparison"
            fill
            draggable={false}
            quality={100}
            className="object-contain"
          />
        </div>

        {/* Arrow */}
        <div className="flex justify-center my-6">
          <div className="relative h-[40px] w-[80px]">
            <Image
              src="/images/arrow-down-blue.png"
              alt="Arrow down"
              fill
              draggable={false}
              quality={100}
              className="object-contain"
            />
          </div>
        </div>

        {/* Bottom text */}
        <div className="text-center text-key-blue2 mt-4">
          <h3 className={`text-xl font-bold ${notoSansJP.className} mb-2`}>
            開発時間の短縮<span className="text-normal-text">と</span>
          </h3>
          <h3 className={`text-xl font-bold ${notoSansJP.className} mb-2`}>
            コスト削減<span className="text-normal-text">を実現！</span>
          </h3>
        </div>
      </div>
    </section>
  )
}

