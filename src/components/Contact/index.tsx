"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { notoSansJP } from "@/fonts"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Form submitted:", formData)
    // Reset form after submission
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      message: "",
    })
    setIsSubmitted(true)
  }

  return (
    <div 
    style={{
      backgroundImage: 'url("/images/contact-background.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}  
    className="flex flex-col justify-center items-center w-full text-normal-text py-[60px] md:py-[80px] lg:py-[100px] xl:py-[120px]">
      <div className="relative px-4 md:px-6 lg:px-8 w-full md:w-[90%] lg:w-[80%] xl:w-[550px] max-w-[550px] mx-auto">
         <div className="flex flex-col items-center justify-center text-center pb-[30px] md:pb-[40px] lg:pb-[45px] xl:pb-[50px]">
          <h1 className={`text-[32px] md:text-[36px] lg:text-[42px] xl:text-[48px] font-[700] leading-none tracking-[0.04em] text-center text-main-blue ${notoSansJP.className}`}>
          お問い合わせ
          </h1>
          <div className="w-8 md:w-9 lg:w-10 h-[1px] bg-main-blue my-4 md:my-5 lg:my-6"></div>
          <p className={`font-medium text-base md:text-lg leading-tight tracking-wider text-center text-main-blue uppercase font-poppins`}>
          CONTACT
          </p>
        </div>

        {/* Introduction text - Only show when not submitted */}
        {!isSubmitted && (
          <div className="mb-4 md:mb-5 lg:mb-6 text-center">
            <p className="mb-2 text-sm md:text-base font-normal">お客様の状況に合わせた最適なプランをご提案しております。</p>
            <p className="text-sm md:text-base font-normal">まずはお気軽にお問い合わせください。</p>
          </div>
        )}

        {isSubmitted ? (
          <div className={`text-center text-xl font-bold text-main-blue mb-8 ${notoSansJP.className}`}>
            送信を完了しました。
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-[18px] md:mb-[20px] lg:mb-[22px]">
              <Label htmlFor="name" className="mb-1 md:mb-2 block">
                お名前
                <span className="ml-1 text-key-visual-required">※</span>
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="h-10 md:h-11 lg:h-12 w-full rounded border border-form-list-border bg-white"
              />
            </div>

            <div className="mb-[18px] md:mb-[20px] lg:mb-[22px]">
              <Label htmlFor="company" className="mb-1 md:mb-2 block">
                会社名
                <span className="ml-1 text-key-visual-required">※</span>
              </Label>
              <Input
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                className="h-10 md:h-11 lg:h-12 w-full rounded border border-form-list-border bg-white"
              />
            </div>

            <div className="mb-[18px] md:mb-[20px] lg:mb-[22px]">
              <Label htmlFor="email" className="mb-1 md:mb-2 block">
                メールアドレス
                <span className="ml-1 text-key-visual-required">※</span>
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="h-10 md:h-11 lg:h-12 w-full rounded border border-form-list-border bg-white"
              />
            </div>

            <div className="mb-[18px] md:mb-[20px] lg:mb-[22px]">
              <Label htmlFor="phone" className="mb-1 md:mb-2 block">
                電話番号
                <span className="ml-1 text-key-visual-required">※</span>
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
                className="h-10 md:h-11 lg:h-12 w-full rounded border border-form-list-border bg-white"
              />
            </div>

            <div className="mb-[30px] md:mb-[40px] lg:mb-[45px] xl:mb-[50px]">
              <Label htmlFor="message" className="mb-1 md:mb-2 block">
                お問い合わせ内容
                <span className="ml-1 text-key-visual-required">※</span>
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="min-h-[100px] md:min-h-[110px] lg:min-h-[120px] w-full rounded border border-form-list-border bg-white"
              />
            </div>

            <div className="flex justify-center">
              <Button
                type="submit"
                className="h-12 md:h-12 lg:h-14 w-48 md:w-56 lg:w-64 rounded-full bg-[#2B5D8E] text-base md:text-lg font-medium text-white hover:bg-main-blue"
              >
                送信する
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}

