"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { allison, notoSansJP } from "@/fonts"

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
      <div className="mx-auto h-full flex flex-col md:flex-row items-center justify-between pb-[130px] md:pb-[100px] lg:pb-[120px] xl:pb-[130px] pr-[24px] md:pr-[30px] lg:pr-[40px] xl:pr-[54px] pl-[40px] md:pl-[80px] lg:pl-[120px] xl:pl-[160px] relative">
        <motion.div
          className="absolute left-[30px] md:left-[60px] lg:left-[90px] xl:left-[120px] text-white z-10 mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ x: textX, opacity }}
        >
          <div className="flex flex-col gap-6 md:gap-7 lg:gap-8 xl:gap-10">
            <h1
              className={`text-4xl md:text-4xl lg:text-5xl xl:text-[66px] ${notoSansJP.className} select-none leading-tight font-bold text-start -pl-10`}
              style={{ letterSpacing: "3%" }}
            >
              <span className="font-thin">「</span>
              <span className="font-bold">すべての人</span>
              <span className="font-thin">」</span>
              <span className="font-bold -ml-6">に</span>
            </h1>
            <h1
              className={`
              pl-10
              text-4xl md:text-4xl lg:text-5xl xl:text-[66px] ${notoSansJP.className} select-none font-bold leading-tight text-start`}
              style={{ letterSpacing: "3%" }}
            >
              ソフトウェア事業を。
            </h1>
          </div>
          <p
            className={`${allison.className} text-key-visual-copy text-2xl md:text-3xl lg:text-4xl xl:text-[56px] select-none transform -rotate-[8deg] pl-4 md:pl-6 lg:pl-8 xl:pl-12`}
            style={{
              letterSpacing: "3%",
            }}
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
          className="absolute right-[20px] md:right-[30px] lg:right-[40px] xl:right-[54px]"
        >
          <Image
            src="/images/lightbulbs.png"
            alt="Light bulbs with one glowing idea bulb"
            height={600}
            width={772}
            quality={100}
            draggable={false}
            className="object-contain md:max-w-[500px] lg:max-w-[650px] xl:max-w-none"
            priority
          />
        </motion.div>
      </div>
    </div>
  )
}

export default Banner

