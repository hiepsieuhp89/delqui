import Link from "next/link";
import { useCallback } from "react";
import { notoSansJP } from "@/fonts";
import { scroller } from "react-scroll";

export default function Footer() {
  // Hàm xử lý cuộn đến section tương tự như Header
  const scrollToSection = useCallback((sectionId: string) => {
    scroller.scrollTo(sectionId, {
      duration: 1500,
      smooth: "easeInOutQuint",
      offset: 0,
    });
  }, []);

  return (
    <footer className={`bg-normal-text text-white ${notoSansJP.className}`}>
      <div className="px-5 py-8 md:px-10 lg:px-16 xl:px-[200px] md:py-10 lg:py-12 xl:py-[60px]">
        <div className="flex flex-col justify-between space-y-8 md:flex-row md:items-center md:space-y-0">
          {/* Logo */}
          <div>
            <Link
              href="/"
              className="text-3xl md:text-4xl lg:text-5xl xl:text-[52px] font-bold tracking-tight text-white"
            >
              Del Qui
            </Link>
          </div>

          {/* Navigation */}
          <nav
            className={`flex flex-wrap justify-center gap-x-4 md:gap-x-5 lg:gap-x-6 xl:gap-x-8 gap-y-4 text-sm md:text-base font-bold md:justify-end ${notoSansJP.className}`}
          >
            <button
              onClick={() => scrollToSection("about")}
              className="hover:text-key-visual-copy transition-colors"
            >
              Del Quiについて
            </button>
            <button
              onClick={() => scrollToSection("business")}
              className="hover:text-key-visual-copy transition-colors"
            >
              新規事業開発
            </button>
            <button
              onClick={() => scrollToSection("development")}
              className="hover:text-key-visual-copy transition-colors"
            >
              開発体制
            </button>
            <button
              onClick={() => scrollToSection("company")}
              className="hover:text-key-visual-copy transition-colors"
            >
              企業情報
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-key-visual-copy transition-colors"
            >
              お問い合わせ
            </button>
          </nav>
        </div>
        {/* Copyright */}
        <div className="mt-8 md:mt-10 lg:mt-12 xl:mt-[50px]">
          <p className="text-sm md:text-base font-medium font-poppins">
            © 2025 Del Qui
          </p>
        </div>
      </div>
    </footer>
  );
}
