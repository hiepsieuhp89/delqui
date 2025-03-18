"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { notoSansJP, allison } from "@/fonts"

export function MobileBanner() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [fontLoaded, setFontLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    
    document.fonts.ready.then(() => {
      if (document.fonts.check('1em Allison')) {
        setFontLoaded(true);
      } 
    });
  }, [])

  return (
    <div className="md:hidden w-full h-fit bg-key-visual-required pt-24 overflow-hidden">
      <div className="mx-auto h-full flex flex-col items-center justify-between relative">
        {/* Text section */}
        <motion.div
          className="text-white z-10 mt-[50px] w-full px-5"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="w-full flex flex-col gap-4 items-start">
            <h1 className={`w-full text-[34px] ${notoSansJP.className} font-bold leading-tight text-start`}>「すべての人」に</h1>
            <h1 className={`w-full text-[34px] ${notoSansJP.className} font-bold leading-tight text-start`}>ソフトウェア事業を。</h1>
          </div>
          <p className={`${allison.className} text-[#f8d57e] text-[40px] transform -rotate-[8deg] -mt-4`}
          >
            Software Business
            <br />
            for Everyone
          </p>
        </motion.div>

        {/* Banner image */}
        <Image
            src="/images/lightbulbs.png"
            alt="Light bulbs with one glowing idea bulb"
            height={400}
            width={400}
            quality={100}
            draggable={false}
            className="object-contain h-[292px] w-full mb-[200px]"
            priority
          />
      </div>
    </div>
  )
}

