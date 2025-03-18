"use client"

import { useState } from "react"
import Link from "next/link"
import { Mail } from "lucide-react"
import { Noto_Sans_JP } from 'next/font/google';

const notoSansJP = Noto_Sans_JP({
  weight: ['100', '300', '400', '500','600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  
  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      window?.lenis?.scrollTo(element, {
        offset: 0,
        duration: 2.5,
      })
    }
  }

  return (
    <header className="bg-key-visual-required z-10 p-[30px] pl-4">
      <div className="w-full flex justify-between items-center">
        <Link href="/" className="text-white font-bold text-[52px] font-poppins leading-[100%]">
          DelQui
        </Link>

        {/* Mobile menu button */}
        <button className="md:hidden text-white" onClick={toggleMenu} aria-label="Toggle menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          <button 
            onClick={() => scrollToSection('about')} 
            className={`text-white ${notoSansJP.className} font-bold text-lg hover:text-key-visual-copy transition-colors`}
          >
            DelQuiについて
          </button>
          <button 
            onClick={() => scrollToSection('business')} 
            className={`text-white ${notoSansJP.className} font-bold text-lg hover:text-key-visual-copy transition-colors`}
          >
            新規事業開発
          </button>
          <button 
            onClick={() => scrollToSection('development')} 
            className={`text-white ${notoSansJP.className} font-bold text-lg hover:text-key-visual-copy transition-colors`}
          >
            開発体制
          </button>
          <button 
            onClick={() => scrollToSection('company')} 
            className={`text-white ${notoSansJP.className} font-bold text-lg hover:text-key-visual-copy transition-colors`}
          >
            企業情報
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className={`text-white ${notoSansJP.className} font-bold text-lg py-3 flex items-center justify-center gap-2 
            h-11 w-[195px] max-w-[195px] bg-sub-blue hover:bg-main-blue transition-colors rounded-full`}
          >
            お問い合わせ
            <Mail className="h-5 w-5" />
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-main-blue md:hidden">
            <nav className="flex flex-col p-4">
              <button className={`text-white py-2 ${notoSansJP.className} text-left`} onClick={() => scrollToSection('about')}>
                DelQuiについて
              </button>
              <button className={`text-white py-2 ${notoSansJP.className} text-left`} onClick={() => scrollToSection('business')}>
                新規事業開発
              </button>
              <button className={`text-white py-2 ${notoSansJP.className} text-left`} onClick={() => scrollToSection('development')}>
                開発体制
              </button>
              <button className={`text-white py-2 ${notoSansJP.className} text-left`} onClick={() => scrollToSection('company')}>
                企業情報
              </button>
              <button
                className={`text-white ${notoSansJP.className} font-bold text-lg py-3 !px-[30px] flex items-center justify-center gap-2 
                h-11 text-left`}
                onClick={() => scrollToSection('contact')}
              >
                お問い合わせ
                <Mail className="h-5 w-5" />
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header

