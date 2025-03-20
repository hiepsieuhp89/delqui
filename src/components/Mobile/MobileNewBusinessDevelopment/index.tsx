"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { notoSansJP } from "@/fonts"
import { MobileAbout } from "../MobileAbout"
import { motion } from "framer-motion"

export function MobileNewBusinessDevelopment() {
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
                canvas.height = window.innerHeight
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

        const numParticles = 15 // Fewer particles for mobile
        const maxLinks = 2
        const linkOpacity = 0.3

        // Create particles
        for (let i = 0; i < numParticles; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 15 + 5, // Smaller particles for mobile
                speedX: (Math.random() - 0.5) * 0.3,
                speedY: (Math.random() - 0.5) * 0.3,
                opacity: Math.random() * 0.3 + 0.2,
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

    // Animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
                duration: 0.6, 
                ease: "easeOut" 
            }
        }
    }

    const staggerChildren = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    }

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { 
            opacity: 1, 
            scale: 1,
            transition: { 
                duration: 0.5,
                ease: "easeOut"
            }
        }
    }

    return (
        <section className="md:hidden relative w-full bg-sub-blue" id="business">
            <MobileAbout />
            {/* Background particle animation */}
            <canvas ref={canvasRef} className="absolute inset-0 z-0" />

            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center pb-20 -mt-20">
                {/* Header Section */}
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                    variants={fadeInUp}
                    className="flex flex-col items-center justify-center text-center mb-10"
                >
                    <h1 className={`text-[32px] font-bold leading-tight tracking-wider text-white ${notoSansJP.className}`}>
                        アプリ開発
                        <br />
                        <span className="mx-2 font-thin uppercase">×</span> 
                        <br />
                        新規事業
                    </h1>
                    <div className="w-8 h-[1px] bg-white my-4"></div>
                    <p className={`font-poppins text-base font-medium tracking-wider text-white uppercase`}>
                        NEW BUSINESS DEVELOPMENT
                    </p>
                </motion.div>

                {/* Three Cards Section */}
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={staggerChildren}
                    className="w-full flex flex-col gap-9 mb-[50px] px-11"
                >
                    {/* Card 1 */}
                    <motion.div variants={cardVariants} className="relative">
                        <div className="relative min-h-[236px] w-full">
                            <Image
                                src="/images/business-card-1.png"
                                alt="Business idea concerns"
                                fill
                                draggable={false}
                                quality={100}
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="absolute -left-4 -bottom-2 right-0 flex flex-col gap-1">
                            <div
                                className={`px-1 py-1 flex items-center justify-start font-bold text-normal-text text-sm bg-white w-fit ${notoSansJP.className}`}
                            >
                                アイデアはあるけど、
                            </div>
                            <div
                                className={`px-1 py-1 flex items-center justify-start font-bold text-normal-text text-sm bg-white w-fit ${notoSansJP.className}`}
                            >
                                何から始めればいいかわからない...
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div variants={cardVariants} className="relative">
                        <div className="relative min-h-[236px] w-full">
                            <Image
                                src="/images/business-card-2.png"
                                alt="System development concerns"
                                fill
                                draggable={false}
                                quality={100}
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="absolute -left-4 -bottom-2 right-0 flex flex-col gap-1">
                            <div
                                className={`px-1 py-1 flex items-center justify-start font-bold text-normal-text text-sm bg-white w-fit ${notoSansJP.className}`}
                            >
                                システム開発の知識がないので、
                            </div>
                            <div
                                className={`px-1 py-1 flex items-center justify-start font-bold text-normal-text text-sm bg-white w-fit ${notoSansJP.className}`}
                            >
                                どこに頼めばいいのか不安...
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div variants={cardVariants} className="relative">
                        <div className="relative min-h-[236px] w-full">
                            <Image
                                src="/images/business-card-3.png"
                                alt="Idea validation concerns"
                                fill
                                draggable={false}
                                quality={100}
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="absolute -left-4 -bottom-2 right-0 flex flex-col gap-1">
                            <div
                                className={`px-1 py-1 flex items-center justify-start font-bold text-normal-text text-sm bg-white w-fit ${notoSansJP.className}`}
                            >
                                本当にこのアイデアが市場に
                            </div>
                            <div
                                className={`px-1 py-1 flex items-center justify-start font-bold text-normal-text text-sm bg-white w-fit ${notoSansJP.className}`}
                            >
                                受け入れられるのか、確信が持てない...
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Support Message */}
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                    variants={fadeInUp}
                    className="flex flex-col px-5 items-center text-center mb-[50px]"
                >
                    <p className={`w-full text-wrap break-words text-white ${notoSansJP.className} font-bold text-lg mb-2 text-justify`}>
                        このような悩みを抱えているなら、
                    </p>
                    <p className={`w-full text-wrap break-words text-white ${notoSansJP.className} font-bold text-lg text-justify`}>
                        Del Quiがお手伝いできることがあります。
                    </p>

                    {/* Arrow */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="flex justify-center my-[30px]"
                    >
                        <div className="relative h-10 w-10">
                            <Image
                                src="/images/arrow.png"
                                alt="Arrow down"
                                fill
                                draggable={false}
                                quality={100}
                                className="object-contain h-full w-full"
                            />
                        </div>
                    </motion.div>
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-center"
                    >
                        <p className={`text-key-blue text-[22px] font-bold text-justify ${notoSansJP.className} mb-2`}>
                            各専門分野のメンバー構成により、
                        </p>
                        <p className={`text-key-blue text-[22px] font-bold text-justify ${notoSansJP.className}`}>
                            新規事業に特化したシステム開発を得意としています。
                        </p>
                    </motion.div>
                </motion.div>

                {/* Lean Agile Development Section */}
                <div className="w-full flex flex-col items-center">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.6 }}
                        className="relative min-h-[232px] w-full"
                    >
                        <Image
                            src="/images/lean-agile.png"
                            alt="Lean Agile Development"
                            fill
                            draggable={false}
                            quality={100}
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                    <div className="-translate-y-[40px] flex justify-center">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-white p-5 pt-[30px] pb-6 w-[90%]"
                        >
                            <h3 className={`text-xl font-bold ${notoSansJP.className} text-main-blue mb-6`}>リーン・アジャイル開発</h3>
                            <p className={`text-normal-text text-justify font-normal text-base leading-relaxed ${notoSansJP.className}`}>
                                リーンスタートアップに基づいたアジャイル開発で、初期投資を抑えながらの迅速なプロトタイプを制作。
                                実際にユーザーに使ってもらい、その反応を分析することで課題や改善点を明確にします。
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* User Behavior Research Section */}
                <div className="w-full flex flex-col items-center">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.6 }}
                        className="relative min-h-[232px] w-full"
                    >
                        <Image
                            src="/images/user-behavior-research.png"
                            alt="User Behavior Research"
                            fill
                            draggable={false}
                            quality={100}
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                    <div className="-translate-y-[40px] flex justify-center">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-white p-5 pt-[30px] pb-6 w-[90%]"
                        >
                            <h3 className={`text-xl font-bold ${notoSansJP.className} text-main-blue mb-6`}>ユーザー行動調査</h3>
                            <p className={`text-normal-text text-justify font-normal text-base leading-relaxed ${notoSansJP.className}`}>
                                ユーザーの行動への理解、感情を観察して、ユーザー体験（UX）を向上させるための洞察を行います。最新技術のプロダクトは機能正解を持っていません。課題と向き合うことでユーザーにとって価値ある形にしようつなげていくのです。
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* Final Message Section */}
                <motion.p 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                    variants={staggerChildren}
                    className="inline px-5 mt-[10px] leading-[180%] text-justify"
                >
                    <motion.span variants={fadeInUp} className={`text-white ${notoSansJP.className} font-bold text-lg`}>
                        私たちは、単なるシステム開発会社ではありません。
                    </motion.span>
                    <motion.span variants={fadeInUp} className={`text-white ${notoSansJP.className} font-bold text-lg`}>
                        お客様のビジネスパートナーとして、
                    </motion.span>
                    <motion.span variants={fadeInUp} className={`text-key-blue text-[22px] font-bold ${notoSansJP.className}`}>
                        アイデアの具現化から、市場への投入、
                    </motion.span>
                    <motion.span variants={fadeInUp} className={`text-key-blue text-[22px] font-bold ${notoSansJP.className}`}>
                        そしてその後のグロースまで、一貫してサポートいたします！
                    </motion.span>
                </motion.p>
            </div>
            <div 
            style={{
                backgroundImage: "url('/images/wave-dotted-bg-mb.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
            className="w-full h-[176px] absolute bottom-0 left-0 right-0"></div>
        </section>
    )
}

