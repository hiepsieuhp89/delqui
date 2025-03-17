"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Noto_Sans_JP } from 'next/font/google';

const notoSansJP = Noto_Sans_JP({
  weight: ['100', '300', '400', '500','600', '700'],
  subsets: ['latin'],
  display: 'swap',
});
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
      className="w-[920px] max-w-[920px] h-[478px] px-16 py-20 absolute z-50 left-1/2 -translate-x-1/2 -translate-y-[132px] bg-white" 
      style={{ boxShadow: "0px 0px 40px 0px #00000033" }}
    >
        <motion.div
          className="flex flex-col h-full justify-between items-center"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={variants}
        >
          <h1 className={`text-4xl md:text-5xl ${notoSansJP.className} font-bold text-main-blue`}>DelQuiについて</h1>
          <div className="w-12 h-0.5 bg-main-blue mx-auto my-6"></div>
          <h2 className="text-lg font-poppins text-main-blue font-medium tracking-wider mb-10">ABOUT</h2>

          <div className="flex-1 h-full flex flex-col justify-between text-normal-text text-base items-center">
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
              DelQuiでは事業戦略から技術選定までトータルにサポート。
            </p>
          </div>
        </motion.div>
    </section>
  )
}

export default About

