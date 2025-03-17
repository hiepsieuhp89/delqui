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
      lerp: 0.1,
      duration: 1,
      // smoothTouch: true
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    
    requestAnimationFrame(raf)

    // Cleanup function
    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <main>
      <Header />
      <Banner />
      <About />
      <NewBusinessDevelopment />
      <DevelopmentStructure />
      <CompanyInformation />
      <Contact />
      <Footer />
    </main>
  )
}

