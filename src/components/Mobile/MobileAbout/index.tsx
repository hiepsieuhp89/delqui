"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Noto_Sans_JP } from "next/font/google"

const notoSansJP = Noto_Sans_JP({
  weight: ["100", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
})

export function MobileAbout() {
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
      className="md:hidden w-[90%] max-w-[400px] mx-auto pt-[60px] pb-11 px-5 bg-white relative z-10 -top-[164px]"
      style={{ boxShadow: "0px 0px 20px 0px #00000020" }}
      id="about"
    >
      <motion.div
        className="flex flex-col h-full justify-between items-center"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={variants}
      >
        <h1 className={`text-[32px] ${notoSansJP.className} font-bold text-main-blue`}>DelQuiについて</h1>
        <div className="w-10 h-[1px] bg-main-blue mx-auto my-5"></div>
        <h2 className="text-base font-medium tracking-wider mb-10 text-main-blue">ABOUT</h2>
        <div className="flex flex-col gap-6 text-normal-text text-base">
          <p className={`${notoSansJP.className} leading-relaxed text-start text-sm font-normal`}>
            新規開発やスタートアップを加速させる、アジャイルなプロダクト開発をご提供します。
          </p>

          <div className="flex flex-col gap-3">
            <p className={`${notoSansJP.className} leading-relaxed text-start text-sm font-normal`}>
              お客様のアイデアをスピーディに形にするため、プロトタイピングを重視。
            </p>
            <p className={`${notoSansJP.className} leading-relaxed text-start text-sm font-normal`}>
              ノーコード/ローコード開発で、初期費用を抑えながら、市場ニーズに合わせた柔軟な改善を繰り返します。
            </p>
          </div>

          <p className={`${notoSansJP.className} leading-relaxed text-start text-sm font-normal`}>
            DelQuiでは事業戦略から技術選定までトータルにサポート。
          </p>
        </div>
      </motion.div>
    </section>
  )
}

