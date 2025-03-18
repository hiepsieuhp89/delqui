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
  
  useEffect(() => {
    let animationFrameId: number;
    let lastTimestamp: number;
    
    const animate = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const deltaTime = timestamp - lastTimestamp;
      lastTimestamp = timestamp;
      
      // Điều chỉnh tốc độ xoay - càng nhỏ càng mượt
      const rotationSpeed = 0.03;
      setRotation((prev) => (prev + rotationSpeed * deltaTime) % 360);
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animationFrameId = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

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
    const radius = 220
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
      <div className="relative max-w-[458px] w-[458px] h-[478px] -translate-x-[10%]
      flex justify-center items-center bg-white">
        {/* Vẽ các đường kết nối theo kiểu khác */}
        <svg className="absolute inset-0 max-w-[458px] w-[458px] h-full z-0 overflow-visible">
          {Object.entries(iconPositions).map(([indexStr, pos]) => {
            // Tọa độ của tâm container
            const centerX = 250;
            const centerY = 250;
            return (
              <line 
                key={`conn-line-${indexStr}`}
                x1={centerX} 
                y1={centerY} 
                x2={pos.x + 40} // Thêm offset để trỏ đến tâm icon
                y2={pos.y + 40}
                stroke="#93c5fd"
                strokeWidth="2"
                strokeDasharray="5,5"
              />
            );
          })}
        </svg>

        {/* Cloud BaaS Image */}
        <div className="relative w-[230px] h-[120px] z-10 flex justify-center items-center">
          <Image
            src="/images/cloud-basS.png"
            alt="Cloud BaaS"
            fill
            quality={100}
            className="object-contain h-full w-full"
            draggable={false}
          />
          <h1 className="absolute bottom-7 z-50 text-[#295A99] font-poppins text-[28px] font-bold">BasS</h1>
        </div>

        {/* Rotating icons */}
        {icons.map((item, index) => {
          const { x, y } = getPosition(item.angle)
          return (
            <motion.div
              key={`icon-${index}`}
              className="absolute z-[5]"
              style={{ 
                top: 0,
                left: 0,
              }}
              animate={{
                x: x + 250 - 40, // Vị trí chính giữa container (250) + offset x - 40 (nửa width của icon)
                y: y + 250 - 40, // Vị trí chính giữa container (250) + offset y - 40 (nửa height của icon) 
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
                w-20 h-20 rounded-full border-4 border-blue-200 flex items-center justify-center shadow-md">
                  <div className="relative w-10 h-10 ">
                    <Image
                      src={item.imagePath}
                      alt={item.label}
                      fill
                      className="object-contain h-full w-full"
                    />
                  </div>
                </div>
                <div className={`mt-2 text-center text-base font-bold text-[#234C81] max-w-[100px] ${notoSansJP.className}`}>{item.label}</div>
              </div>
            </motion.div>
          )
        })}
      </div>
  )
}

