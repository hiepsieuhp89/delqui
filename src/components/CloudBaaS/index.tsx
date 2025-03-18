"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Noto_Sans_JP } from 'next/font/google';
const notoSansJP = Noto_Sans_JP({
  weight: ['100', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});
export default function CloudBaaS() {
  const [rotation, setRotation] = useState(0)
  const [iconPositions, setIconPositions] = useState<{[key: number]: {x: number, y: number}}>({})
  const [isMobile, setIsMobile] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 })
  
  useEffect(() => {
    let animationFrameId: number;
    let lastTimestamp: number;
    
    const animate = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const deltaTime = timestamp - lastTimestamp;
      lastTimestamp = timestamp;
      
      // Điều chỉnh tốc độ xoay - càng nhỏ càng mượt
      const rotationSpeed = 0.02;
      setRotation((prev) => (prev + rotationSpeed * deltaTime) % 360);
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animationFrameId = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  useEffect(() => {
    // Kiểm tra kích thước màn hình và cập nhật kích thước container
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
      if (containerRef.current) {
        setContainerSize({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight
        })
      }
    }
    
    // Kiểm tra ngay khi component được mount
    handleResize()
    
    // Lắng nghe sự kiện resize
    window.addEventListener('resize', handleResize)
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const icons = [
    {
      imagePath: "/images/basS-icon1.png",
      label: "ユーザー登録・招待",
      angle: 0,
    },
    {
      imagePath: "/images/basS-icon2.png",
      label: "ログイン",
      angle: 60,
    },
    {
      imagePath: "/images/basS-icon3.png",
      label: "データアクセス管理",
      angle: 120,
    },
    {
      imagePath: "/images/basS-icon4.png",
      label: "DM機能",
      angle: 180,
    },
    {
      imagePath: "/images/basS-icon5.png",
      label: "サーバー・ネットワーク",
      angle: 240,
    },
    {
      imagePath: "/images/basS-icon6.png",
      label: "独自の高性能アクセスログ",
      angle: 300,
    },
  ]

  const getPosition = (angle: number) => {
    // Điều chỉnh radius dựa trên kích thước thực của container
    const radius = isMobile 
      ? Math.min(containerSize.width * 0.35, 160)
      : containerSize.width < 992 
        ? 180  // Giá trị trung gian cho màn hình md
        : containerSize.width < 1280
          ? 200 // Giá trị trung gian cho màn hình lg
          : 220 // Giữ nguyên cho xl
    const radian = ((angle + rotation) * Math.PI) / 180
    const x = radius * Math.cos(radian)
    const y = radius * Math.sin(radian)
    return { x, y }
  }
  
  // Lưu vị trí icon sau khi chúng đã di chuyển
  const updateIconPosition = (index: number, x: number, y: number) => {
    setIconPositions(prev => ({
      ...prev,
      [index]: { x, y }
    }))
  }

  return (
      <div 
        ref={containerRef}
        className="relative 
        w-full h-[320px] bg-transparent -translate-x-[5%]
        md:max-w-[420px] md:w-[420px] md:h-[420px] md:-translate-x-[8%]
        lg:max-w-[440px] lg:w-[440px] lg:h-[450px] lg:-translate-x-[9%]
        xl:max-w-[458px] xl:w-[458px] xl:h-[478px] xl:-translate-x-[10%]
        flex justify-center items-center">
        {/* Vẽ các đường kết nối theo kiểu khác */}
        <svg className="absolute inset-0 
        w-full h-full
        md:max-w-[420px] md:w-[420px]
        lg:max-w-[440px] lg:w-[440px]
        xl:max-w-[458px] xl:w-[458px] xl:h-full z-0 overflow-visible">
          {Object.entries(iconPositions).map(([indexStr, pos]) => {
            // Tọa độ của tâm container - responsive
            const centerX = containerSize.width / 2;
            const centerY = containerSize.height / 2;
            const iconSize = isMobile ? 30 : 40; // Kích thước icon responsive
            
            return (
              <line 
                key={`conn-line-${indexStr}`}
                x1={centerX} 
                y1={centerY} 
                x2={pos.x + iconSize} // Thêm offset để trỏ đến tâm icon
                y2={pos.y + iconSize}
                stroke="#93c5fd"
                strokeWidth={isMobile ? "1" : "2"}
                strokeDasharray="5,5"
              />
            );
          })}
        </svg>

        {/* Cloud BaaS Image */}
        <div className="relative w-[148px] h-[76px] md:w-[180px] md:h-[95px] lg:w-[210px] lg:h-[108px] xl:w-[230px] xl:h-[120px] z-10 flex justify-center items-center">
          <Image
            src="/images/cloud-basS.png"
            alt="Cloud BaaS"
            fill
            quality={100}
            className="object-contain h-full w-full select-none"
            draggable={false}
          />
          <h1 className="select-none absolute bottom-4 md:bottom-5 lg:bottom-6 xl:bottom-7 z-50 text-[#295A99] font-poppins text-lg md:text-xl lg:text-2xl xl:text-[28px] font-bold">BasS</h1>
        </div>

        {/* Rotating icons */}
        {icons.map((item, index) => {
          const { x, y } = getPosition(item.angle)
          const centerX = containerSize.width / 2;
          const centerY = containerSize.height / 2;
          const iconSize = isMobile 
            ? 30 
            : containerSize.width < 992 
              ? 35 
              : 40;
          
          return (
            <motion.div
              key={`icon-${index}`}
              className="absolute z-[5] select-none"
              style={{ 
                top: 0,
                left: 0,
              }}
              animate={{
                x: x + centerX - iconSize / 2,
                y: y + centerY - iconSize / 2,
                transition: { 
                  type: "spring", 
                  stiffness: 100, 
                  damping: 15,
                  mass: 1 
                },
              }}
              onUpdate={(latest) => {
                updateIconPosition(index, latest.x as number, latest.y as number);
              }}
            >
              <div className="flex flex-col items-center">
                <div className="
                bg-key-blue2
                w-16 h-16 
                md:w-[72px] md:h-[72px] md:border-3
                lg:w-[76px] lg:h-[76px] lg:border-3
                xl:w-20 xl:h-20 xl:border-4 
                rounded-full border-2 border-blue-200 flex items-center justify-center shadow-md">
                  <div className="relative w-8 h-8 md:w-9 md:h-9 lg:w-9 lg:h-9 xl:w-10 xl:h-10">
                    <Image
                      src={item.imagePath}
                      alt={item.label}
                      fill
                      className="object-contain h-full w-full"
                    />
                  </div>
                </div>
                <div className={`mt-1 md:mt-1.5 lg:mt-2 xl:mt-2 text-center text-xs md:text-sm lg:text-base xl:text-base font-bold text-[#234C81] max-w-[80px] md:max-w-[90px] lg:max-w-[95px] xl:max-w-[100px] ${notoSansJP.className}`}>{item.label}</div>
              </div>
            </motion.div>
          )
        })}
      </div>
  )
}

