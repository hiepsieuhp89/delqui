"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { Noto_Sans_JP, Allison } from "next/font/google"
import { motion, useScroll, useTransform } from "framer-motion"

const notoSansJP = Noto_Sans_JP({
  weight: ["100", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
})

// Make sure the Allison font is properly loaded
const allison = Allison({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-allison", // Adding a CSS variable can help with debugging
})

const Banner = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const { scrollY } = useScroll()

  // Transform position based on scrollY
  const textX = useTransform(scrollY, [0, 300], [0, -100])
  const imageX = useTransform(scrollY, [0, 300], [0, 100])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="w-full h-[120vh] bg-key-visual-required overflow-x-hidden">
      <div className="mx-auto h-full flex flex-col md:flex-row items-center justify-between pb-[130px] pr-[54px] pl-[160px] relative">
        <motion.div
          className="absolute left-[120px] text-white z-10 mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ x: textX, opacity }}
        >
          <div className="flex flex-col gap-10">
            <h1
              className={`text-4xl md:text-5xl lg:text-[66px] ${notoSansJP.className} select-none font-bold leading-tight text-start -pl-10`}
              style={{ letterSpacing: "3%" }}
            >
              「すべての人」に
            </h1>
            <h1
              className={`
              pl-10
              text-4xl md:text-5xl lg:text-[66px] ${notoSansJP.className} select-none font-bold leading-tight text-start`}
              style={{ letterSpacing: "3%" }}
            >
              ソフトウェア事業を。
            </h1>
          </div>
          <p
            className={`${allison.className} text-key-visual-copy text-2xl md:text-[56px] select-none transform -rotate-[8deg] pl-12`}
            style={{ letterSpacing: "3%" }}
          >
            Software Business
            <br />
            for Everyone
          </p>
        </motion.div>

        {/* Banner img */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 50 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          style={{ x: imageX, opacity }}
          className="absolute right-[54px]"
        >
          <Image
            src="/images/lightbulbs.png"
            alt="Light bulbs with one glowing idea bulb"
            height={600}
            width={772}
            quality={100}
            draggable={false}
            className="object-contain"
            priority
          />
        </motion.div>
      </div>
    </div>
  )
}

export default Banner

