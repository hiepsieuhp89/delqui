"use client"

import { useEffect, useRef } from "react"
import { Noto_Sans_JP } from 'next/font/google';
const notoSansJP = Noto_Sans_JP({
  weight: ['100', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
});
export default function CompanyInformation() {

  return (
    <div className={`relative z-50 w-full bg-sub-blue text-white -mt-[350px] ${notoSansJP.className}`}>
      {/* Content container */}
      <div className="relative mx-auto max-w-4xl px-4 py-16 md:px-8" style={{ zIndex: 2 }}>
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center text-center pb-[50px]">
          <h1 className={`text-[48px] font-[700] leading-none tracking-[0.04em] text-center text-white ${notoSansJP.className}`}>
            企業情報
          </h1>
          <div className="w-10 h-[1px] bg-white my-6"></div>
          <p className={`font-medium text-lg leading-tight tracking-wider text-center text-white uppercase font-poppins`}>
            COMPANY INFORMATION
          </p>
        </div>

        {/* Company information table */}
        <div className="mx-auto" style={{ width: '900px' }}>
          {/* Company Name */}
          <div className="flex items-stretch">
            <div className="text-sm md:text-base px-5 py-6 font-bold border-b border-t border-key-blue flex items-center" style={{ width: '200px' }}>社名</div>
            <div className="text-sm md:text-base px-5 py-6 font-normal border-b border-t border-white flex items-center" style={{ width: '700px' }}>株式会社Del Quincaillerie</div>
          </div>

          {/* Established */}
          <div className="flex items-stretch">
            <div className="text-sm md:text-base px-5 py-6 font-bold border-b border-key-blue flex items-center" style={{ width: '200px' }}>設立</div>
            <div className="text-sm md:text-base px-5 py-6 font-normal border-b border-white flex items-center" style={{ width: '700px' }}>2022年1月</div>
          </div>

          {/* Headquarters */}
          <div className="flex items-stretch">
            <div className="text-sm md:text-base px-5 py-6 font-bold border-b border-key-blue flex items-center" style={{ width: '200px' }}>本社所在地</div>
            <div className="text-sm md:text-base px-5 py-6 font-normal border-b border-white flex items-center" style={{ width: '700px' }}>沖縄県石垣島</div>
          </div>

          {/* Overseas Office */}
          <div className="flex items-stretch">
            <div className="text-sm md:text-base px-5 py-6 font-bold border-b border-key-blue flex items-center" style={{ width: '200px' }}>海外駐在所</div>
            <div className="text-sm md:text-base px-5 py-6 font-normal border-b border-white flex items-center" style={{ width: '700px' }}>Ho Chi Minh City</div>
          </div>

          {/* Capital */}
          <div className="flex items-stretch">
            <div className="text-sm md:text-base px-5 py-6 font-bold border-b border-key-blue flex items-center" style={{ width: '200px' }}>資本金</div>
            <div className="text-sm md:text-base px-5 py-6 font-normal border-b border-white flex items-center" style={{ width: '700px' }}>650万円（資本準備金含む）</div>
          </div>

          {/* Business Description */}
          <div className="flex items-stretch">
            <div className="text-sm md:text-base px-5 py-6 font-bold border-b border-key-blue flex items-center" style={{ width: '200px' }}>事業内容</div>
            <div className="text-sm md:text-base px-5 py-6 font-normal border-b border-white flex items-center" style={{ width: '700px' }}>
              各種ソフトウェアの開発、モバイルアプリの開発、ITコンサルティング、自社プロダクトの開発、他
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

