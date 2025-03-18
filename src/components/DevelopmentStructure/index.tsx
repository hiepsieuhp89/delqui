"use client"
import Image from "next/image"
import { Noto_Sans_JP } from 'next/font/google';
import CloudBaaS from "../CloudBaaS";
const notoSansJP = Noto_Sans_JP({
  weight: ['100', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});
export default function DevelopmentStructure() {
  return (
    <div 
    style={{
      backgroundImage: "url('/images/development-structure-background.png')",
      backgroundSize: "cover",
      backgroundPosition: "bottom",
      backgroundRepeat: "no-repeat",
    }}
    className={`w-full bg-white p-10 ${notoSansJP.className} h-[868px] px-[100px]`}>
      {/* Header */}
      <div className="flex justify-center ">
        <div className=" relative px-[60px] w-fit py-6 flex justify-center items-center bg-key-blue2 h-20 transform translate-y-1/2">
            <h1 className="text-[30px] font-bold text-white">BaaSで実現する新しい開発のカタチ</h1>
        </div>
      </div>
      <div className="flex justify-between w-[1100px] bg-white">
        <CloudBaaS />
      </div>

      {/* Down Arrow */}
  

      {/* Bottom Text */}
      <div className="flex justify-center">
        <div className="relative flex items-center">
          <div className="absolute -left-12 top-0 h-full w-1 bg-key-blue2"></div>
          <h2 className="text-3xl font-bold text-key-blue2">開発時間の短縮とコスト削減</h2>
          <span className="ml-2 text-3xl font-bold text-normal-text">を実現!</span>
          <div className="absolute -right-12 top-0 h-full w-1 bg-key-blue2"></div>
        </div>
      </div>
    </div>
  )
}

