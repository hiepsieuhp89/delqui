"use client"
import Image from "next/image"
import { Noto_Sans_JP } from 'next/font/google';
import CloudBaaS from "../CloudBaaS";
import { useEffect, useRef } from "react";
const notoSansJP = Noto_Sans_JP({
  weight: ['100', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});
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
        canvas.height = parent.offsetHeight // Loại bỏ giới hạn 600px để canvas lấp đầy container
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
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX = -particle.speedX
        }
        if (particle.y < 0 || particle.y > canvas.height) {
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
    <div className="flex flex-col items-center justify-center relative bg-sub-blue overflow-hidden">
      {/* Nền hiệu ứng hạt sử dụng canvas - Đã sửa CSS cho canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-10" style={{ height: '80%', width: 'auto' }} />
      <div
        style={{
          backgroundImage: "url('/images/development-structure-background.png')",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
          position: "relative",
          zIndex: 20
        }}
        className={`w-full bg-white ${notoSansJP.className} h-[868px] max-h-[868px] px-[100px] relative flex-col items-center justify-center text-center`}>
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center text-center pt-[156px] pb-4">
          <h1 className={`text-[48px] font-[700] leading-none tracking-[0.04em] text-center text-white ${notoSansJP.className}`}>
            開発体制
          </h1>
          <div className="w-10 h-[1px] bg-white my-6"></div>
          <p className={`font-medium text-lg leading-tight tracking-wider text-center text-white uppercase font-poppins`}>
            DEVELOPMENT STRUCTURE
          </p>
        </div>
      </div>
      <div className="z-30 relative w-[1100px] -top-[492px] ">
        <div className="flex justify-center ">
          <div className="absolute left-1/2 -translate-x-1/2 px-[60px] w-fit py-6 flex justify-center items-center bg-key-blue2 h-20 transform -translate-y-1/2">
            <h1 className="text-[30px] font-bold text-white text-nowrap">BaaSで実現する新しい開発のカタチ</h1>
          </div>
        </div>
        <div className="flex flex-col justify-start items-center  
        px-[100px] bg-white
        h-[848px] pt-[115px]"
        style={{ boxShadow: "0px 0px 40px 0px #00000033" }}>
          <div className="flex flex-row justify-between w-full">
            <CloudBaaS />
            <div className="w-[1px] h-[477px] bg-[#B7B7B7]"></div>
            <div className="w-[319px] h-[477px] relative">
              <Image
                draggable={false}
                fill
                quality={100}
                src="/images/baas2.png"
                alt="development-structure-image"
                className="object-contain w-full h-full" />
            </div>
          </div>
          <div className="h-[50px] w-12 flex items-center justify-center relative my-8">
            <Image src="/images/arrow.png" alt="Arrow Icon" fill draggable={false} quality={100} className="h-full w-full object-contain cursor-pointer" />
          </div>
          <div className="h-[60px] w-[710px] flex items-center justify-center relative">
            <Image src="/images/development-structure-text.png" alt="Text" fill draggable={false} quality={100} className="h-full w-full object-contain cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  )
}

