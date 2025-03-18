"use client"

import Link from "next/link"
import { Mail } from "lucide-react"
import { notoSansJP } from "@/fonts"

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      window?.lenis?.scrollTo(element, {
        offset: 0,
        duration: 2.5,
      })
    }
  }

  return (
    <header className="bg-key-visual-required z-10 p-[20px] md:p-[25px] lg:p-[28px] xl:p-[30px] md:pl-4">
      <div className="w-full flex justify-between items-center">
        <Link href="/" className="text-white font-bold text-[36px] md:text-[40px] lg:text-[46px] xl:text-[52px] font-poppins leading-[100%]">
          DelQui
        </Link>
      
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center md:gap-4 lg:gap-6 xl:gap-10">
          <button 
            onClick={() => scrollToSection('about')} 
            className={`text-white ${notoSansJP.className} font-bold md:text-base lg:text-base xl:text-lg hover:text-key-visual-copy transition-colors`}
          >
            DelQuiについて
          </button>
          <button 
            onClick={() => scrollToSection('business')} 
            className={`text-white ${notoSansJP.className} font-bold md:text-base lg:text-base xl:text-lg hover:text-key-visual-copy transition-colors`}
          >
            新規事業開発
          </button>
          <button 
            onClick={() => scrollToSection('development')} 
            className={`text-white ${notoSansJP.className} font-bold md:text-base lg:text-base xl:text-lg hover:text-key-visual-copy transition-colors`}
          >
            開発体制
          </button>
          <button 
            onClick={() => scrollToSection('company')} 
            className={`text-white ${notoSansJP.className} font-bold md:text-base lg:text-base xl:text-lg hover:text-key-visual-copy transition-colors`}
          >
            企業情報
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className={`text-white ${notoSansJP.className} font-bold md:text-base lg:text-base xl:text-lg py-2 md:py-2 lg:py-2.5 xl:py-3 flex items-center justify-center gap-2 
            h-9 md:h-9 lg:h-10 xl:h-11 w-[160px] md:w-[160px] lg:w-[180px] xl:w-[195px] max-w-[195px] bg-sub-blue hover:bg-main-blue transition-colors rounded-full`}
          >
            お問い合わせ
            <Mail className="h-4 md:h-4 lg:h-5 xl:h-5 w-4 md:w-4 lg:w-5 xl:w-5" />
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header

