"use client"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { useEffect, useRef } from "react"
import { Noto_Sans_JP, Poppins } from "next/font/google";

const notoSansJP = Noto_Sans_JP({
  weight: ['100', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const poppinsFont = Poppins({
  weight: ['500'],
  subsets: ['latin'],
  display: 'swap',
});

const NewBusinessDevelopment = () => {
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
        canvas.height = Math.min(parent.offsetHeight, 600) // Giới hạn chiều cao tối đa là 600px
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

    const numParticles = 20
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
        opacity: Math.random() * 0.3 + 0.2,
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
    <div className="relative w-full min-h-screen">
      {/* Nền hiệu ứng hạt sử dụng canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" 
      style={{ maxHeight: '600px' }} />
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center text-center pt-[300px] md:pt-[350px] lg:pt-[420px] xl:pt-[488px] mb-[40px] md:mb-[50px] lg:mb-[60px]">
          <h1 className={`text-[36px] md:text-[40px] lg:text-[44px] xl:text-[48px] font-[700] leading-none tracking-[0.04em] text-center text-white ${notoSansJP.className}`}>
            アプリ開発 <span className="mx-3 font-thin">×</span> 新規事業
          </h1>
          <div className="w-8 md:w-9 xl:w-10 h-[1px] bg-white my-4 md:my-5 xl:my-6"></div>
          <p className={`font-medium text-base md:text-lg leading-tight tracking-wider text-center text-white uppercase font-poppins`}>
            NEW BUSINESS DEVELOPMENT
          </p>
        </div>

        {/* Three Cards Section */}
        <div className="w-full flex justify-center items-center mb-[60px] md:mb-[70px] lg:mb-[80px] xl:mb-[86px] px-4 md:px-6 lg:px-8 xl:px-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[15px] md:gap-[20px] lg:gap-[25px] xl:gap-[30px] w-fit">
            <div className="relative">
              <div className="relative h-[240px] md:h-[260px] lg:h-[280px] xl:h-[300px] w-full md:w-[260px] lg:w-[320px] xl:w-[360px]">
                <Image
                  src="/images/business-card-1.png"
                  alt="Business idea concerns"
                  fill
                  draggable={false}
                  quality={100}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="absolute -left-2 md:-left-3 xl:-left-4 -bottom-2 md:-bottom-3 xl:-bottom-4 right-0 flex flex-col gap-1 md:gap-2">
                <div className={`h-7 md:h-8 xl:h-9 px-1 py-1 md:py-2 flex items-center justify-start font-bold text-normal-text text-base md:text-lg xl:text-xl bg-white w-fit ${notoSansJP.className}`}>
                  アイデアはあるけど、
                </div>
                <div className={`h-7 md:h-8 xl:h-9 px-1 py-1 md:py-2 flex items-center justify-start font-bold text-normal-text text-base md:text-lg xl:text-xl bg-white w-fit ${notoSansJP.className}`}>
                  何から始めればいいかわからない...
                </div>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="relative">
              <div className="relative h-[240px] md:h-[260px] lg:h-[280px] xl:h-[300px] w-full md:w-[260px] lg:w-[320px] xl:w-[360px]">
                <Image
                  src="/images/business-card-2.png"
                  alt="System development concerns"
                  fill
                  draggable={false}
                  quality={100}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="absolute -left-2 md:-left-3 xl:-left-4 -bottom-2 md:-bottom-3 xl:-bottom-4 right-0 flex flex-col gap-1 md:gap-2">
                <div className={`h-7 md:h-8 xl:h-9 px-1 py-1 md:py-2 flex items-center justify-start font-bold text-normal-text text-base md:text-lg xl:text-xl bg-white w-fit ${notoSansJP.className}`}>
                  システム開発の知識がないので、
                </div>
                <div className={`h-7 md:h-8 xl:h-9 px-1 py-1 md:py-2 flex items-center justify-start font-bold text-normal-text text-base md:text-lg xl:text-xl bg-white w-fit ${notoSansJP.className}`}>
                  どこに頼めばいいのか不安...
                </div>
              </div>
            </div>
            
            {/* Card 3 */}
            <div className="relative">
              <div className="relative h-[240px] md:h-[260px] lg:h-[280px] xl:h-[300px] w-full md:w-[260px] lg:w-[320px] xl:w-[360px]">
                <Image
                  src="/images/business-card-3.png"
                  alt="Idea validation concerns"
                  fill
                  draggable={false}
                  quality={100}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="absolute -left-2 md:-left-3 xl:-left-4 -bottom-2 md:-bottom-3 xl:-bottom-4 right-0 flex flex-col gap-1 md:gap-2">
                <div className={`h-7 md:h-8 xl:h-9 px-1 py-1 md:py-2 flex items-center justify-start font-bold text-normal-text text-base md:text-lg xl:text-xl bg-white w-fit ${notoSansJP.className}`}>
                  本当にこのアイデアが市場に
                </div>
                <div className={`h-7 md:h-8 xl:h-9 px-1 py-1 md:py-2 flex items-center justify-start font-bold text-normal-text text-base md:text-lg xl:text-xl bg-white w-fit ${notoSansJP.className}`}>
                  受け入れられるのか、確信が持てない...
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Support Message */}
        <div className="flex flex-col items-center text-center mb-10 md:mb-12 lg:mb-14 xl:mb-16 px-4 md:px-6">
          <p className={`text-white ${notoSansJP.className} font-bold text-xl md:text-2xl mb-3 md:mb-4`}>このような悩みを抱えているなら、</p>
          <p className={`text-white ${notoSansJP.className} font-bold text-xl md:text-2xl`}>DelQuiがお手伝いできることがあります。</p>

          {/* Arrow Icon */}
          <div className="h-[40px] md:h-[45px] xl:h-[50px] w-10 md:w-12 flex items-center justify-center relative my-6 md:my-7 xl:my-8">
            <Image src="/images/arrow.png" alt="Arrow Icon" fill draggable={false} quality={100} className="h-full w-full object-contain cursor-pointer" />
          </div>
          <div className="text-center">
            <p className={`text-key-blue text-[24px] md:text-[28px] lg:text-[30px] xl:text-[32px] font-bold ${notoSansJP.className} mb-3 md:mb-4`}>各専門分野のメンバー構成により、</p>
            <p className={`text-key-blue text-[24px] md:text-[28px] lg:text-[30px] xl:text-[32px] font-bold ${notoSansJP.className}`}>新規事業に特化したシステム開発を得意としています。</p>
          </div>
        </div>

        {/* Lean Agile Development Section */}
        <div className="relative h-[400px] md:h-[430px] lg:h-[460px] xl:h-[490px] w-[90%] md:w-[95%] lg:w-[95%] xl:w-[1290px] mb-[50px] md:mb-[60px] lg:mb-[65px] xl:mb-[70px] px-4 md:px-0">
          <div className="w-[90%] md:w-[60%] lg:w-[65%] xl:w-[750px] h-[320px] md:h-[350px] lg:h-[380px] xl:h-[400px] absolute left-0 md:left-[10%] lg:left-[130px] top-0">
            <Image
              src="/images/lean-agile.png"
              alt="Lean Agile Development"
              fill
              draggable={false}
              quality={100}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="bg-white h-[220px] md:h-[240px] lg:h-[260px] xl:h-[286px] w-[90%] md:w-[55%] lg:w-[58%] xl:w-[600px] absolute right-0 md:right-[5%] lg:right-[130px] bottom-0 p-[30px] md:p-[40px] lg:p-[45px] xl:p-[50px] flex flex-col justify-between items-start">
            <h3 className={`text-[24px] md:text-[26px] lg:text-[28px] xl:text-[30px] font-bold ${notoSansJP.className} text-main-blue mb-3 md:mb-4`}>リーン・アジャイル開発</h3>
            <p className={`text-normal-text font-normal text-sm md:text-base leading-relaxed ${notoSansJP.className}`}>
              リーンスタートアップに基づいたアジャイル開発で、初期投資を抑えながらの迅速なプロトタイプを制作。
              実際にユーザーに使ってもらい、その反応を分析することで課題や改善点を明確にします。
            </p>
          </div>
        </div>

        {/* User Behavior Research Section */}
        <div className="w-[90%] md:w-[95%] lg:w-[95%] xl:w-[1290px] relative h-[400px] md:h-[430px] lg:h-[460px] xl:h-[490px] mb-[60px] md:mb-[70px] lg:mb-[80px] xl:mb-[90px] px-4 md:px-0">
          <div className="bg-white h-[220px] md:h-[240px] lg:h-[260px] xl:h-[286px] w-[90%] md:w-[55%] lg:w-[58%] xl:w-[600px] absolute left-0 md:left-[5%] lg:left-[130px] bottom-0 p-[30px] md:p-[40px] lg:p-[45px] xl:p-[50px] flex flex-col justify-between items-start z-20">
            <h3 className={`text-[24px] md:text-[26px] lg:text-[28px] xl:text-[30px] font-bold ${notoSansJP.className} text-main-blue mb-3 md:mb-4`}>ユーザー行動調査</h3>
            <p className={`text-normal-text font-normal text-sm md:text-base leading-relaxed ${notoSansJP.className}`}>
              ユーザーの行動への理解、感情を観察して、ユーザー体験（UX）を向上させるための洞察を行います。最新技術のプロダクトは機能正解を持っていません。課題と向き合うことでユーザーにとって価値ある形にしようつなげていくのです。
            </p>
          </div>
          <div className="w-[90%] md:w-[60%] lg:w-[65%] xl:w-[750px] h-[320px] md:h-[350px] lg:h-[380px] xl:h-[400px] absolute right-0 md:right-[10%] lg:right-[130px] top-0 z-10">
            <Image
              src="/images/user-behavior-research.png"
              alt="User Behavior Research"
              fill
              draggable={false}
              quality={100}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Final Message Section */}
        <div className="flex flex-col gap-2 justify-center items-center pb-40">
          <p className={`text-white ${notoSansJP.className} font-bold text-2xl mb-4`}>私たちは、単なるシステム開発会社ではありません。</p>
          <p className={`text-white ${notoSansJP.className} font-bold text-2xl mb-2`}>お客様のビジネスパートナーとして、</p>
          <p className={`text-key-blue text-[32px] font-bold ${notoSansJP.className}`}>アイデアの具現化から、市場への投入、</p>
          <p className={`text-key-blue text-[32px] font-bold ${notoSansJP.className}`}>そしてその後のグロースまで、一貫してサポートいたします！</p>
        </div>

        {/* Dotted Wave Background at bottom */}
        <div 
        style={{
          backgroundImage: "url('/images/wave-dotted-background.png')",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
        }}
        className="w-full absolute bottom-0 left-0 right-0 h-[292px] z-0 overflow-hidden">
        </div>
      </div>
    </div>
  
  )
}

export default NewBusinessDevelopment

