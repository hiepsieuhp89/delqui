"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { notoSansJP } from "@/fonts"

const About = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true)
    }, 300)

    return () => clearTimeout(timeout)
  }, [])

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section 
      className="w-full md:w-[700px] lg:w-[800px] xl:w-[920px] max-w-[920px] h-auto md:h-auto lg:h-[450px] xl:h-[478px] px-8 md:px-10 lg:px-12 xl:px-16 py-12 md:py-14 lg:py-16 xl:py-20 relative md:absolute z-50 left-0 md:left-1/2 md:-translate-x-1/2 md:-translate-y-[100px] lg:-translate-y-[120px] xl:-translate-y-[132px] bg-white" 
      style={{ boxShadow: "0px 0px 40px 0px #00000033" }}
    >
        <motion.div
          className="flex flex-col h-full justify-between items-center"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={variants}
        >
          <h1 className={`text-3xl md:text-4xl lg:text-4xl xl:text-5xl ${notoSansJP.className} font-bold text-main-blue`}>Del Quiについて</h1>
          <div className="w-8 md:w-10 lg:w-12 h-0.5 bg-main-blue mx-auto my-4 md:my-5 lg:my-6"></div>
          <h2 className="text-base md:text-lg font-poppins text-main-blue font-medium tracking-wider mb-6 md:mb-8 lg:mb-10">ABOUT</h2>

          <div className="flex-1 h-full flex flex-col justify-between text-normal-text text-sm md:text-base items-center">
            <p className={`${notoSansJP.className} leading-relaxed`}>
              新規開発やスタートアップを加速させる、アジャイルなプロダクト開発をご提供します。
            </p>

            <div className="flex flex-col gap-1 items-center">
              <p className={`${notoSansJP.className} leading-relaxed`}>
                お客様のアイデアをスピーディに形にするため、プロトタイピングを重視。
              </p>
              <p className={`${notoSansJP.className} leading-relaxed`}>
                ノーコード/ローコード開発で、初期費用を抑えながら、市場ニーズに合わせた柔軟な改善を繰り返します。
              </p>
            </div>

            <p className={`${notoSansJP.className} leading-relaxed`}>
              Del Quiでは事業戦略から技術選定までトータルにサポート。
            </p>
          </div>
        </motion.div>
    </section>
  )
}

export default About

