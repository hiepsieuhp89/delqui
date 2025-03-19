"use client"
import { notoSansJP } from "@/fonts"

export default function CompanyInformation() {

  return (
    <div className={`relative z-50 w-full bg-transparent text-white -mt-[350px] ${notoSansJP.className}`}>
      {/* Content container */}
      <div className="relative mx-auto max-w-full px-4 py-12 md:py-14 md:px-6 lg:py-16 lg:px-8 xl:max-w-4xl" style={{ zIndex: 2 }}>
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center text-center pb-[30px] md:pb-[40px] lg:pb-[50px]">
          <h1 className={`text-[36px] md:text-[42px] lg:text-[45px] xl:text-[48px] font-[700] leading-none tracking-[0.04em] text-center text-white ${notoSansJP.className}`}>
            企業情報
          </h1>
          <div className="w-8 md:w-9 lg:w-10 h-[1px] bg-white my-5 md:my-5 lg:my-6"></div>
          <p className={`font-medium text-base md:text-lg leading-tight tracking-wider text-center text-white uppercase font-poppins`}>
            COMPANY INFORMATION
          </p>
        </div>

        {/* Company information table */}
        <div className="mx-auto w-full md:w-[95%] lg:w-[90%] xl:w-[900px]">
          {/* Company Name */}
          <div className="flex flex-row items-stretch">
            <div className="text-sm md:text-base px-3 md:px-4 lg:px-5 py-4 md:py-5 lg:py-6 font-bold border-b border-t border-key-blue flex items-center w-[25%] md:w-[28%] lg:w-[30%] xl:w-[200px]">社名</div>
            <div className="text-sm md:text-base px-3 md:px-4 lg:px-5 py-4 md:py-5 lg:py-6 font-normal border-b border-t border-white flex items-center w-[75%] md:w-[72%] lg:w-[70%] xl:w-[700px]">株式会社Del Qui</div>
          </div>

          {/* Established */}
          <div className="flex flex-row items-stretch">
            <div className="text-sm md:text-base px-3 md:px-4 lg:px-5 py-4 md:py-5 lg:py-6 font-bold border-b border-key-blue flex items-center w-[25%] md:w-[28%] lg:w-[30%] xl:w-[200px]">設立</div>
            <div className="text-sm md:text-base px-3 md:px-4 lg:px-5 py-4 md:py-5 lg:py-6 font-normal border-b border-white flex items-center w-[75%] md:w-[72%] lg:w-[70%] xl:w-[700px]">2022年1月</div>
          </div>

          {/* Headquarters */}
          <div className="flex flex-row items-stretch">
            <div className="text-sm md:text-base px-3 md:px-4 lg:px-5 py-4 md:py-5 lg:py-6 font-bold border-b border-key-blue flex items-center w-[25%] md:w-[28%] lg:w-[30%] xl:w-[200px]">本社所在地</div>
            <div className="text-sm md:text-base px-3 md:px-4 lg:px-5 py-4 md:py-5 lg:py-6 font-normal border-b border-white flex items-center w-[75%] md:w-[72%] lg:w-[70%] xl:w-[700px]">沖縄県石垣島</div>
          </div>

          {/* Overseas Office */}
          <div className="flex flex-row items-stretch">
            <div className="text-sm md:text-base px-3 md:px-4 lg:px-5 py-4 md:py-5 lg:py-6 font-bold border-b border-key-blue flex items-center w-[25%] md:w-[28%] lg:w-[30%] xl:w-[200px]">海外駐在所</div>
            <div className="text-sm md:text-base px-3 md:px-4 lg:px-5 py-4 md:py-5 lg:py-6 font-normal border-b border-white flex items-center w-[75%] md:w-[72%] lg:w-[70%] xl:w-[700px]">Ho Chi Minh City</div>
          </div>

          {/* Capital */}
          <div className="flex flex-row items-stretch">
            <div className="text-sm md:text-base px-3 md:px-4 lg:px-5 py-4 md:py-5 lg:py-6 font-bold border-b border-key-blue flex items-center w-[25%] md:w-[28%] lg:w-[30%] xl:w-[200px]">資本金</div>
            <div className="text-sm md:text-base px-3 md:px-4 lg:px-5 py-4 md:py-5 lg:py-6 font-normal border-b border-white flex items-center w-[75%] md:w-[72%] lg:w-[70%] xl:w-[700px]">650万円（資本準備金含む）</div>
          </div>

          {/* Business Description */}
          <div className="flex flex-row items-stretch">
            <div className="text-sm md:text-base px-3 md:px-4 lg:px-5 py-4 md:py-5 lg:py-6 font-bold border-b border-key-blue flex items-center w-[25%] md:w-[28%] lg:w-[30%] xl:w-[200px]">事業内容</div>
            <div className="text-sm md:text-base px-3 md:px-4 lg:px-5 py-4 md:py-5 lg:py-6 font-normal border-b border-white flex items-center w-[75%] md:w-[72%] lg:w-[70%] xl:w-[700px]">
              各種ソフトウェアの開発、モバイルアプリの開発、ITコンサルティング、自社プロダクトの開発、他
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

