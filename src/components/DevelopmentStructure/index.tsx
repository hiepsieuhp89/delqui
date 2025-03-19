"use client"
import Image from "next/image"
import CloudBaaS from "../CloudBaaS";
import { useEffect, useRef } from "react";
import { notoSansJP } from "@/fonts"

export default function DevelopmentStructure() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Thiết lập kích thước canvas theo kích thước của container
    const resizeCanvas = () => {
      const parent = canvas.parentElement
      if (parent) {
        canvas.width = parent.offsetWidth
        canvas.height = parent.offsetHeight
      }
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Định nghĩa các hạt
    const particles: {
      x: number
      y: number
      radius: number
      speedX: number
      speedY: number
      opacity: number
      links: number[]
    }[] = []

    const numParticles = 30 
    const maxLinks = 2 
    const linkOpacity = 0.3 

    // Tạo các hạt
    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 25 + 10,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.4 + 0.3, // Tăng độ đậm của hạt
        links: []
      })
    }

    // Tạo các kết nối giữa các hạt
    for (let i = 0; i < particles.length; i++) {
      const numLinks = Math.floor(Math.random() * maxLinks) + 1
      for (let j = 0; j < numLinks; j++) {
        const targetIndex = Math.floor(Math.random() * particles.length)
        if (targetIndex !== i && !particles[i].links.includes(targetIndex)) {
          particles[i].links.push(targetIndex)
        }
      }
    }

    // Hàm animation
    const animate = () => {
      ctx.fillStyle = "#1D2A36"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Vẽ các kết nối
      ctx.strokeStyle = "rgba(127, 196, 253, 0.3)"
      ctx.lineWidth = 1

      for (let i = 0; i < particles.length; i++) {
        const particle = particles[i]

        // Cập nhật vị trí hạt
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Giữ hạt trong canvas (hiệu ứng bounce)
        if (particle.x - particle.radius < 0) {
          particle.x = particle.radius
          particle.speedX = -particle.speedX
        } else if (particle.x + particle.radius > canvas.width) {
          particle.x = canvas.width - particle.radius
          particle.speedX = -particle.speedX
        }
        
        if (particle.y - particle.radius < 0) {
          particle.y = particle.radius
          particle.speedY = -particle.speedY
        } else if (particle.y + particle.radius > canvas.height) {
          particle.y = canvas.height - particle.radius
          particle.speedY = -particle.speedY
        }

        // Vẽ kết nối giữa các hạt
        for (const linkIndex of particle.links) {
          const linkedParticle = particles[linkIndex]
          ctx.beginPath()
          ctx.moveTo(particle.x, particle.y)
          ctx.lineTo(linkedParticle.x, linkedParticle.y)
          ctx.strokeStyle = `rgba(127, 196, 253, ${linkOpacity})`
          ctx.stroke()
        }

        // Vẽ hạt
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
    <div className="flex flex-col items-center justify-center relative !bg-transparent overflow-y-visible">
      <canvas ref={canvasRef} className="absolute inset-0 z-10" style={{ height: '92%', width: "100%" }} />
      <div
        style={{
          backgroundImage: "url('/images/development-structure-background.png')",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
          position: "relative",
          zIndex: 20
        }}
        className={`w-full bg-white ${notoSansJP.className} md:h-[700px] lg:h-[780px] xl:h-[868px] max-h-[868px] md:px-[40px] lg:px-[60px] xl:px-[100px] relative flex-col items-center justify-center text-center`}>
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center text-center md:pt-[100px] lg:pt-[130px] xl:pt-[156px] pb-4">
          <h1 className={`md:text-[36px] lg:text-[42px] xl:text-[48px] font-[700] leading-none tracking-[0.04em] text-center text-white ${notoSansJP.className}`}>
            開発体制
          </h1>
          <div className="w-10 h-[1px] bg-white my-6"></div>
          <p className={`font-medium md:text-base lg:text-lg leading-tight tracking-wider text-center text-white uppercase font-poppins`}>
            DEVELOPMENT STRUCTURE
          </p>
        </div>
      </div>
      <div className="z-30 relative md:w-[90%] lg:w-[95%] xl:w-[1100px] md:-top-[380px] lg:-top-[440px] xl:-top-[492px]">
        <div className="flex justify-center">
          <div className="absolute left-1/2 -translate-x-1/2 md:px-[30px] lg:px-[45px] xl:px-[60px] w-fit py-6 flex justify-center items-center bg-key-blue2 md:h-16 lg:h-18 xl:h-20 transform -translate-y-1/2">
            <h1 className="md:text-[20px] lg:text-[26px] xl:text-[30px] font-bold text-white text-nowrap">BaaSで実現する新しい開発のカタチ</h1>
          </div>
        </div>
        <div className="flex flex-col justify-start items-center  
        md:px-[40px] lg:px-[60px] xl:px-[100px] bg-white
        md:h-[700px] lg:h-[780px] xl:h-[848px] md:pt-[90px] lg:pt-[100px] xl:pt-[115px]"
        style={{ boxShadow: "0px 0px 40px 0px #00000033" }}>
          <div className="flex flex-row justify-between w-full">
            <CloudBaaS />
            <div className="w-[1px] md:h-[380px] lg:h-[430px] xl:h-[477px] bg-[#B7B7B7]"></div>
            <div className="md:w-[240px] lg:w-[280px] xl:w-[319px] md:h-[380px] lg:h-[430px] xl:h-[477px] relative">
              <Image
                draggable={false}
                fill
                quality={100}
                src="/images/baas2.png"
                alt="development-structure-image"
                className="object-contain w-full h-full" />
            </div>
          </div>
          <div className="h-[50px] w-12 flex items-center justify-center relative md:my-5 lg:my-6 xl:my-8">
            <Image src="/images/arrow.png" alt="Arrow Icon" fill draggable={false} quality={100} className="h-full w-full object-contain cursor-pointer" />
          </div>
          <div className="md:h-[45px] lg:h-[50px] xl:h-[60px] md:w-[500px] lg:w-[600px] xl:w-[710px] flex items-center justify-center relative">
            <Image src="/images/development-structure-text.png" alt="Text" fill draggable={false} quality={100} className="h-full w-full object-contain cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  )
}

