"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { Noto_Sans_JP, Poppins } from "next/font/google"
import CloudBaaS from "@/components/CloudBaaS"

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
    <section
      style={{
        backgroundImage: "url('/images/development-structure-bg-mb.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="md:hidden relative w-full py-[60px] h-[868px] px-5" id="development">
      {/* Header Section */}
      <div className="flex flex-col items-center justify-center text-center mb-[74px]">
        <h1 className={`text-[32px] font-bold leading-tight tracking-wider text-white ${notoSansJP.className}`}>
        開発体制
        </h1>
        <div className="w-8 h-[1px] bg-white my-4"></div>
        <p className={`${poppinsFont.className} text-base font-medium tracking-wider text-white uppercase`}>
        DEVELOPMENT STRUCTURE
        </p>
      </div>
      {/* Card */}
      <div className="z-30 relative w-full">
        <div className="flex justify-center">
          <div className="absolute left-1/2 -translate-x-1/2 px-[22px] w-[90%] py-4 flex justify-center items-center bg-key-blue2 transform -translate-y-1/2">
            <h1 className={`${notoSansJP.className} text-xl font-bold text-white text-center`}>BaaSで実現する新しい開発のカタチ</h1>
          </div>
        </div>
        <div className="flex flex-col justify-start items-center px-5 bg-white h-auto pt-[70px] pb-[38px]"
          style={{ boxShadow: "0px 0px 20px 0px #00000033" }}>
          <div className="flex flex-col justify-between w-full gap-8">
            <CloudBaaS />
            <div className="w-full h-[1px] bg-[#B7B7B7] mt-8"></div>
            <div className="w-full h-[308px] min-h-[308px] relative">
              <Image
                draggable={false}
                width={1000}
                height={1000}
                quality={100}
                src="/images/baas2.png"
                alt="development-structure-image"
                className="object-contain w-full h-full select-none" />
            </div>
          </div>
          <div className="h-[54px] w-[56px] flex items-center justify-center relative my-6">
            <Image src="/images/arrow.png" alt="Arrow Icon" fill draggable={false} quality={100} className="h-full w-full object-contain cursor-pointer select-none" />
          </div>
          <div className="min-h-[84px]  w-full flex items-center justify-center relative">
            <Image src="/images/development-structure-text-mb.png" alt="Text" width={1000} height={1000} draggable={false} quality={100} className="h-full w-full object-fill cursor-pointer px-[10px] select-none" />
          </div>
        </div>
      </div>
    </section>
  )
}

