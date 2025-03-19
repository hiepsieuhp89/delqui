"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { notoSansJP } from "@/fonts"

export default function CloudBaaS({ isMobile = false }: { isMobile?: boolean }) {
  const [rotation, setRotation] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const [radius, setRadius] = useState(180)
  const [containerSize, setContainerSize] = useState(0)

  const icons = [
    {
      imagePath: "/images/basS-icon1.png",
      label: "ユーザー登録・",
      label2: "招待",
    },
    {
      imagePath: "/images/basS-icon2.png",
      label: "ログイン",
      label2: "",
    },
    {
      imagePath: "/images/basS-icon3.png",
      label: "データ",
      label2: "アクセス管理",
    },
    {
      imagePath: "/images/basS-icon4.png",
      label: "DM機能",
      label2: "",
    },
    {
      imagePath: "/images/basS-icon5.png",
      label: "サーバー・",
      label2: "ネットワーク",
    },
    {
      imagePath: "/images/basS-icon6.png",
      label: "独自の高性能",
      label2: "アクセスログ",
    },
  ]

  // Calculate positions based on the number of icons
  const calculatePosition = (index: number, totalIcons: number) => {
    const angle = (index * (360 / totalIcons) + rotation) * (Math.PI / 180)
    const x = Math.cos(angle) * radius
    const y = Math.sin(angle) * radius
    return { x, y, angle }
  }

  // Update container size on resize
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const size = Math.min(window.innerWidth * 0.4, 450)
        setContainerSize(size)

        if (window.innerWidth <= 568) {
          setRadius((isMobile ? size * 0.7 + 10 : size * 0.7))
        } else if (window.innerWidth <= 768) {
          setRadius((isMobile ? size * 0.5 + 10 : size * 0.5))
        } else {
          setRadius((isMobile ? size * 0.43 + 10 : size * 0.43)) // Giá trị mặc định cho màn hình lớn hơn
        }
      }
    }

    updateSize()
    window.addEventListener("resize", updateSize)
    return () => window.removeEventListener("resize", updateSize)
  }, [isMobile])

  // Animate rotation
  useEffect(() => {
    // Don't animate if in mobile mode
    if (isMobile) return;

    const interval = setInterval(() => {
      setRotation((prev) => (prev + 0.1) % 360)
    }, 16) // ~60fps

    return () => clearInterval(interval)
  }, [isMobile])

  return (
    <>
      {!isMobile && <div className="flex justify-center items-center transform
    !h-[320px] !lg:h-[440px] !md:h-[420px] !xl:h-[473px] ">
        <div
          ref={containerRef}
          className="relative lg:translate-y-10"
          style={{
            width: `${containerSize}px`,
            height: `${containerSize}px`,
          }}
        >
          {/* Central BaaS cloud */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
            <div className="relative w-[148px] h-[76px] md:w-[180px] md:h-[95px] lg:w-[210px] lg:h-[108px] xl:w-[230px] xl:h-[120px] z-50 flex justify-center items-center">
              <Image
                src="/images/cloud-basS.png"
                alt="Cloud BaaS"
                fill
                quality={100}
                className="object-contain h-full w-full select-none"
                draggable={false}
              />
              <h1 className="select-none absolute bottom-4 md:bottom-5 lg:bottom-6 xl:bottom-7 z-50 text-[#295A99] font-poppins text-lg md:text-xl lg:text-2xl xl:text-[28px] font-bold">BaaS</h1>
            </div>
          </div>

          {/* Orbiting icons */}
          {icons.map((item, index) => {
            const { x, y, angle } = calculatePosition(index, icons.length)
            const centerX = containerSize / 2
            const centerY = containerSize / 2

            return (
              <div key={index} className={`absolute ${isMobile ? "-left-5" : ""}`} style={{ zIndex: 20 }}>
                {/* Connecting line */}
                <motion.div
                  className="absolute z-10 origin-left h-[2px] dashed-line"
                  style={{
                    width: radius,
                    top: centerY,
                    left: centerX,
                    rotate: `${angle * (180 / Math.PI)}deg`,
                    backgroundImage: "linear-gradient(to right, transparent 50%, #3B8CCE 50%)",
                    backgroundSize: "10px 1px",
                    opacity: 0.7,
                  }}
                />

                {/* Icon */}
                <motion.div
                  className="absolute flex flex-col items-center z-50"
                  style={{
                    top: centerY + y - 30,
                    left: centerX + x - 30,
                  }}
                >
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-key-blue2
                md:w-[72px] md:h-[72px] md:border-3
                lg:w-[76px] lg:h-[76px] lg:border-3
                xl:w-20 xl:h-20 xl:border-4 rounded-full border-2 border-blue-200 flex items-center justify-center shadow-md">
                      <div className="relative w-8 h-8 md:w-9 md:h-9 lg:w-9 lg:h-9 xl:w-10 xl:h-10">
                        <Image
                          src={item.imagePath}
                          alt={item.label}
                          fill
                          className="object-contain h-full w-full"
                        />
                      </div>
                    </div>
                    <div className={`mt-1 text-center text-xs md:text-sm lg:text-base xl:text-base font-bold text-[#234C81] text-nowrap ${notoSansJP.className}`}>{item.label}</div>
                    <div className={`-mt-1 text-center text-xs md:text-sm lg:text-base xl:text-base font-bold text-[#234C81] text-nowrap ${notoSansJP.className}`}>{item.label2}</div>
                  </div>
                </motion.div>
              </div>
            )
          })}
        </div>
      </div>}
      {isMobile && <div className="w-full h-auto relative">
        <Image src="/images/baas.png" alt="Cloud BaaS" quality={100} height={1000} width={1000} draggable={false} className="object-contain h-full w-full" />
      </div>}
    </>
  )
}

