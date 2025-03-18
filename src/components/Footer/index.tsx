import Link from "next/link"
import { Noto_Sans_JP } from "next/font/google"
import { useCallback } from "react"

const notoSansJP = Noto_Sans_JP({
  weight: ['100', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

export default function Footer() {
  // Hàm xử lý cuộn đến section tương tự như Header
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      window?.lenis?.scrollTo(element, {
        offset: 0,
        duration: 2.5,
      })
    }
  }, []);

  return (
    <footer className={`bg-normal-text text-white ${notoSansJP.className}`}>
      <div className="px-[200px] py-[60px]">
        <div className="flex flex-col justify-between space-y-8 md:flex-row md:items-center md:space-y-0">
          {/* Logo */}
          <div>
            <Link href="/" className="text-[52px] font-bold tracking-tight text-white">
              DelQui
            </Link>
          </div>

          {/* Navigation */}
          <nav className={`flex flex-wrap justify-center gap-x-8 gap-y-4 text-base font-bold md:justify-end ${notoSansJP.className}`}>
            <button onClick={() => scrollToSection('about')} className="hover:text-key-visual-copy transition-colors">
              DelQuiについて
            </button>
            <button onClick={() => scrollToSection('business')} className="hover:text-key-visual-copy transition-colors">
              新規事業開発
            </button>
            <button onClick={() => scrollToSection('development')} className="hover:text-key-visual-copy transition-colors">
              開発体制
            </button>
            <button onClick={() => scrollToSection('company')} className="hover:text-key-visual-copy transition-colors">
              企業情報
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="hover:text-key-visual-copy transition-colors"
            >
              お問い合わせ
            </button>
          </nav>
        </div>
        {/* Copyright */}
        <div className="mt-[50px]">
          <p className="text-base font-medium font-poppins">© 2025 DelQui</p>
        </div>
      </div>
    </footer>
  )
}

