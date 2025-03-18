"use client"

import Link from "next/link"
import { Noto_Sans_JP } from 'next/font/google'
import { useCallback } from "react"

const notoSansJP = Noto_Sans_JP({
  weight: ['100', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export function MobileFooter() {
  // Scroll to section function
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      window?.lenis?.scrollTo(element, {
        offset: 0,
        duration: 2.5,
      })
    }
  }, [])

  return (
    <footer className={`md:hidden bg-normal-text text-white ${notoSansJP.className}`}>
      <div className="px-6 py-12">
        {/* Logo */}
        <div className="flex justify-center mb-12">
          <Link href="/" className="text-[52px] font-bold tracking-tight text-white">
            DelQui
          </Link>
        </div>

        {/* Navigation - Two column layout */}
        <div className="grid grid-cols-2 gap-y-8 mb-16">
          <div className="flex flex-col items-start space-y-8">
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-xl font-bold hover:text-key-visual-copy transition-colors"
            >
              DelQuiについて
            </button>
            
            <button 
              onClick={() => scrollToSection('development')} 
              className="text-xl font-bold hover:text-key-visual-copy transition-colors"
            >
              開発体制
            </button>
            
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-xl font-bold hover:text-key-visual-copy transition-colors"
            >
              お問い合わせ
            </button>
          </div>
          
          <div className="flex flex-col items-start space-y-8">
            <button 
              onClick={() => scrollToSection('business')} 
              className="text-xl font-bold hover:text-key-visual-copy transition-colors"
            >
              新規事業開発
            </button>
            
            <button 
              onClick={() => scrollToSection('company')} 
              className="text-xl font-bold hover:text-key-visual-copy transition-colors"
            >
              企業情報
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-base font-medium">© 2025 DelQui</p>
        </div>
      </div>
    </footer>
  )
}
