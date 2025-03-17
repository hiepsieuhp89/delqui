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
          <Link href="/about" className={`text-white ${notoSansJP.className} font-bold text-lg hover:text-key-visual-copy transition-colors`}>
            DelQuiについて
          </Link>
          <Link href="/business" className={`text-white ${notoSansJP.className} font-bold text-lg hover:text-key-visual-copy transition-colors`}>
            新規事業開発
          </Link>
          <Link href="/development" className={`text-white ${notoSansJP.className} font-bold text-lg hover:text-key-visual-copy transition-colors`}>
            開発体制
          </Link>
          <Link href="/company" className={`text-white ${notoSansJP.className} font-bold text-lg hover:text-key-visual-copy transition-colors`}>
            企業情報
          </Link>
          <Link
            href="/contact"
            className={`text-white ${notoSansJP.className} font-bold text-lg py-3 flex items-center justify-center gap-2 
            h-11 w-[195px] max-w-[195px] bg-sub-blue hover:bg-main-blue transition-colors rounded-full`}
          >
            お問い合わせ
            <Mail className="h-5 w-5" />
          </Link>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-main-blue md:hidden">
            <nav className="flex flex-col p-4">
              <Link href="/about" className={`text-white py-2 ${notoSansJP.className}`} onClick={() => setIsMenuOpen(false)}>
                DelQuiについて
              </Link>
              <Link href="/business" className={`text-white py-2 ${notoSansJP.className}`} onClick={() => setIsMenuOpen(false)}>
                新規事業開発
              </Link>
              <Link href="/development" className={`text-white py-2 ${notoSansJP.className}`} onClick={() => setIsMenuOpen(false)}>
                開発体制
              </Link>
              <Link href="/company" className={`text-white py-2 ${notoSansJP.className}`} onClick={() => setIsMenuOpen(false)}>
                企業情報
              </Link>
              <Link
                href="/contact"
                className={`text-white ${notoSansJP.className} font-bold text-lg py-3 !px-[30px] flex items-center justify-center gap-2 
                h-11`}
                onClick={() => setIsMenuOpen(false)}
              >
                お問い合わせ
                <Mail className="h-5 w-5" />
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header

