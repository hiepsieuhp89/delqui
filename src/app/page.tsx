"use client";

import About from "@/components/About/index";
import Banner from "@/components/Banner/index";
import CompanyInformation from "@/components/CompanyInformation";
import Contact from "@/components/Contact";
import DevelopmentStructure from "@/components/DevelopmentStructure";
import Footer from "@/components/Footer";
import Header from "@/components/Header/index";
import { MobileBanner } from "@/components/Mobile/MobileBanner";
import { MobileCompanyInformation } from '@/components/Mobile/MobileCompanyInformation';
import { MobileContact } from '@/components/Mobile/MobileContact';
import { MobileDevelopmentStructure } from '@/components/Mobile/MobileDevelopmentStructure';
import { MobileFooter } from '@/components/Mobile/MobileFooter';
import { MobileHeader } from "@/components/Mobile/MobileHeader";
import { MobileNewBusinessDevelopment } from '@/components/Mobile/MobileNewBusinessDevelopment';
import NewBusinessDevelopment from "@/components/NewBusinessDevelopment";
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [smoothScroll, setSmoothScroll] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkScreenSize();
    
    window.addEventListener('resize', checkScreenSize);

    // Initialize react-scroll
    Events.scrollEvent.register('begin', function() {
      // console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function() {
      // console.log("end", arguments);
    });

    scrollSpy.update();

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > window.innerHeight);
    };
    
    window.addEventListener('scroll', handleScroll);

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkScreenSize);
    }
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: smoothScroll ? 1500 : 0,
      smooth: smoothScroll ? 'easeInOutQuint' : false
    });
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
      <Element name="about" className="element">
        <About /> {/* Del Quiについて */}
      </Element>
      <Element name="business" className="element">
        <NewBusinessDevelopment /> {/* 新規事業開発 */}
      </Element>
      <Element name="development" className="element">
        <DevelopmentStructure /> {/* 開発体制 */}
      </Element>
      <Element name="company" className="element">
        <CompanyInformation /> {/* 企業情報 */}
      </Element>
      <Element name="contact" className="element">
        <Contact /> {/* お問い合わせ */}
      </Element>
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

