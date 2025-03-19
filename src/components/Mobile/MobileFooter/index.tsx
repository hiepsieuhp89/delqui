"use client"

import Link from "next/link"
import { useCallback } from "react"
import { notoSansJP } from "@/fonts"
import { scroller } from "react-scroll"

export function MobileFooter() {
  // Scroll to section function
  const scrollToSection = useCallback((sectionId: string) => {
    scroller.scrollTo(sectionId, {
      duration: 1500,
      smooth: 'easeInOutQuint',
      offset: 0
    })
  }, [])

  return (
    <footer className={`md:hidden bg-normal-text text-white ${notoSansJP.className}`}>
      <div className="pt-[50px] px-[50px] pb-10 flex flex-col items-center">
        {/* Logo */}
        <div className="flex justify-center mb-10">
          <Link href="/" className="text-[40px] font-bold tracking-tight text-white">
            Del Qui
          </Link>
        </div>

        {/* Navigation - Two column layout */}
        <div className="flex justify-between w-full mb-[30px]">
          <div className="flex flex-col items-start space-y-5">
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-base font-bold hover:text-key-visual-copy transition-colors"
            >
              Del Quiについて
            </button>
            
            <button 
              onClick={() => scrollToSection('development')} 
              className="text-base font-bold hover:text-key-visual-copy transition-colors"
            >
              開発体制
            </button>
            
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-base font-bold hover:text-key-visual-copy transition-colors"
            >
              お問い合わせ
            </button>
          </div>
          
          <div className="flex flex-col items-start space-y-5">
            <button 
              onClick={() => scrollToSection('business')} 
              className="text-base font-bold hover:text-key-visual-copy transition-colors"
            >
              新規事業開発
            </button>
            
            <button 
              onClick={() => scrollToSection('company')} 
              className="text-base font-bold hover:text-key-visual-copy transition-colors"
            >
              企業情報
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-sm font-medium">© 2025 Del Qui</p>
        </div>
      </div>
    </footer>
  )
}
