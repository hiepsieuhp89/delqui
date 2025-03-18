"use client";

import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import Header from "@/components/Header/index"
import Banner from "@/components/Banner/index"
import About from "@/components/About/index"
import NewBusinessDevelopment from "@/components/NewBusinessDevelopment"
import DevelopmentStructure from "@/components/DevelopmentStructure"
import CompanyInformation from "@/components/CompanyInformation"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Home() {
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

    // Cleanup function
    return () => {
      lenis.destroy()
      window.lenis = undefined
    }
  }, [])

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
    </main>
  )
}

