"use client";

import { useEffect, useRef, useState } from 'react'
import Lenis from 'lenis'
import Image from 'next/image'
import Header from "@/components/Header/index"
import Banner from "@/components/Banner/index"
import About from "@/components/About/index"
import NewBusinessDevelopment from "@/components/NewBusinessDevelopment"
import DevelopmentStructure from "@/components/DevelopmentStructure"
import CompanyInformation from "@/components/CompanyInformation"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.07,
      duration: 2.5,
      // smoothTouch: true
    })

    // Gán lenis vào window để có thể truy cập từ các component khác
    window.lenis = lenis

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    
    requestAnimationFrame(raf)

    // Thêm event listener để theo dõi vị trí scroll
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > window.innerHeight);
    };
    
    window.addEventListener('scroll', handleScroll);

    // Cleanup function
    return () => {
      lenis.destroy()
      window.lenis = undefined
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  const scrollToTop = () => {
    window.lenis?.scrollTo(0, { duration: 1.5 });
  };

  return (
    <main>
      <Header />
      <Banner />
      <section id="about">
        <About /> {/* DelQuiについて */}
      </section>
      <section id="business">
        <NewBusinessDevelopment /> {/* 新規事業開発 */}
      </section>
      <section id="development">
        <DevelopmentStructure /> {/* 開発体制 */}
      </section>
      <section id="company">
        <CompanyInformation /> {/* 企業情報 */}
      </section>
      <section id="contact">
        <Contact /> {/* お問い合わせ */}
      </section>
      <Footer />
      
      <div 
        className={`fixed bottom-0 right-4 bg-transparent cursor-pointer z-50 transition-opacity duration-200 ease-in-out ${
          showScrollTop ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={scrollToTop}
      >
        <div className="h-[50px] w-12 flex items-center justify-center relative my-8 rotate-[180deg]">
          <Image src="/images/arrow.png" alt="Arrow Icon" fill draggable={false} quality={100} className="h-full w-full object-contain cursor-pointer opacity-80 hover:opacity-100 transition-opacity hover:translate-y-1 duration-300" />
        </div>
      </div>
    </main>
  )
}

