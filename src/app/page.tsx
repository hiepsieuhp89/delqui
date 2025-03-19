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
import {MobileHeader} from "@/components/Mobile/MobileHeader"
import {MobileBanner} from "@/components/Mobile/MobileBanner"
import { MobileAbout } from '@/components/Mobile/MobileAbout';
import { MobileNewBusinessDevelopment } from '@/components/Mobile/MobileNewBusinessDevelopment';
import { MobileDevelopmentStructure } from '@/components/Mobile/MobileDevelopmentStructure';
import { MobileCompanyInformation } from '@/components/Mobile/MobileCompanyInformation';
import { MobileContact } from '@/components/Mobile/MobileContact';
import { MobileFooter } from '@/components/Mobile/MobileFooter';

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkScreenSize();
    
    window.addEventListener('resize', checkScreenSize);

    // Khởi tạo Lenis cho tất cả các thiết bị
    let lenis: any = null;
    lenis = new Lenis({
      lerp: 0.07,
      duration: 2.5,
      // smoothTouch: true  // Bật tính năng smooth touch cho thiết bị di động
    })

    window.lenis = lenis

    const raf = (time: number) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    
    requestAnimationFrame(raf)

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > window.innerHeight);
    };
    
    window.addEventListener('scroll', handleScroll);

    return () => {
      if (lenis) {
        lenis.destroy()
        window.lenis = undefined
      }
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkScreenSize);
    }
  }, []) // Đã xoá isMobile từ dependencies vì Lenis sẽ hoạt động trên mọi thiết bị

  const scrollToTop = () => {
    window.lenis?.scrollTo(0, { duration: 1.5 });
  };

  if (isMobile) {
    return (
      <main className="overflow-x-hidden">
        <MobileHeader />
        <MobileBanner />
        <MobileNewBusinessDevelopment /> {/* 新規事業開発 */}
        <MobileDevelopmentStructure /> {/* 開発体制 */}
        <MobileCompanyInformation /> {/* 企業情報 */}
        <MobileContact /> {/* お問い合わせ */}
        <MobileFooter /> {/* フッター */}
        <div 
        className={`fixed bottom-0 right-4 bg-transparent cursor-pointer z-50 transition-opacity duration-200 ease-in-out ${
          showScrollTop ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={scrollToTop}
      >
        <div className="h-10 w-10 flex items-center justify-center relative my-4 rotate-[180deg]">
          <Image src="/images/arrow.png" alt="Arrow Icon" fill draggable={false} quality={100} className="h-full w-full object-contain cursor-pointer opacity-80 hover:opacity-100 transition-opacity hover:translate-y-1 duration-300" />
        </div>
      </div>
      </main>
    );
  }

  return (
    <main className="bg-sub-blue">
      <Header />
      <Banner />
      <section id="about">
        <About /> {/* Del Quiについて */}
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

