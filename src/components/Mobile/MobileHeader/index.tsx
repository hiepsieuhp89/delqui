"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Mail } from "lucide-react"
import { notoSansJP } from "@/fonts"


export function MobileHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }

        return () => {
            document.body.style.overflow = "auto"
        }
    }, [isMenuOpen])

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
        <header className="md:hidden bg-key-visual-required z-50 fixed top-0 left-0 right-0 p-5">
            <div className="w-full flex justify-between items-center">
                <Link href="/" className="text-white font-bold text-[40px] leading-[100%]">
                    DelQui
                </Link>

                {/* Mobile menu button */}
                <button className="text-white" onClick={toggleMenu} aria-label="Toggle menu">
                    <Menu className="w-8 h-8 text-main-blue" />
                </button>
            </div>

            {/* Mobile Navigation Overlay */}
            <div
                className={`w-full flex fixed inset-0 bg-transparent transition-transform duration-300 z-50 ${isMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="h-full bg-black/40 w-[75px]">
                </div>
                <div className="w-full flex-1 flex flex-col h-full px-[30px] py-5 bg-main-blue">
                    {/* Close button */}
                    <div className="flex justify-end">
                        <button className="text-white" onClick={toggleMenu} aria-label="Close menu">
                            <X className="w-8 h-8" />
                        </button>
                    </div>

                    {/* Menu items */}
                    <nav className="flex flex-col mt-7 space-y-[30px]">
                        <button
                            className={`text-white text-base ${notoSansJP.className} text-left font-bold`}
                            onClick={() => scrollToSection("about")}
                        >
                            DelQuiについて
                        </button>
                        <button
                            className={`text-white text-base ${notoSansJP.className} text-left font-bold`}
                            onClick={() => scrollToSection("business")}
                        >
                            新規事業開発
                        </button>
                        <button
                            className={`text-white text-base ${notoSansJP.className} text-left font-bold`}
                            onClick={() => scrollToSection("development")}
                        >
                            開発体制
                        </button>
                        <button
                            className={`text-white text-base ${notoSansJP.className} text-left font-bold`}
                            onClick={() => scrollToSection("company")}
                        >
                            企業情報
                        </button>
                        <button
                            className="bg-white text-sub-blue rounded-full w-fit flex items-center justify-center gap-2 text-base font-bold h-[42px] px-[30px] py-3"
                            onClick={() => scrollToSection("contact")}
                        >
                            <span className={notoSansJP.className}>お問い合わせ</span>
                            <Mail className="h-5 w-5" />
                        </button>
                    </nav>
                </div>
            </div>
        </header>
    )
}

