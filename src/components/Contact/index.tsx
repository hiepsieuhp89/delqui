"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import { Noto_Sans_JP } from "next/font/google"
const notoSansJP = Noto_Sans_JP({
  weight: ['100', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
});
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  })

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
  }

  return (
    <div 
    style={{
      backgroundImage: 'url("/images/contact-background.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}  
    className="flex flex-col justify-center items-center w-full text-normal-text py-[120px]">
      <div className="relative px-4 md:px-8 w-[550px] max-w-[550px]">
         <div className="flex flex-col items-center justify-center text-center pb-[50px]">
          <h1 className={`text-[48px] font-[700] leading-none tracking-[0.04em] text-center text-main-blue ${notoSansJP.className}`}>
          お問い合わせ
          </h1>
          <div className="w-10 h-[1px] bg-main-blue my-6"></div>
          <p className={`font-medium text-lg leading-tight tracking-wider text-center text-main-blue uppercase font-poppins`}>
          CONTACT
          </p>
        </div>
        <div className="mb-6 text-center">
          <p className="mb-2 text-base font-normal">お客様の状況に合わせた最適なプランをご提案しております。</p>
          <p className="text-base font-normal">まずはお気軽にお問い合わせください。</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-[22px]">
            <Label htmlFor="name" className="mb-2 block">
              お名前
              <span className="ml-1 text-key-visual-required">※</span>
            </Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="h-12 w-full rounded border border-form-list-border bg-white"
            />
          </div>

          <div className="mb-[22px]">
            <Label htmlFor="company" className="mb-2 block">
              会社名
              <span className="ml-1 text-key-visual-required">※</span>
            </Label>
            <Input
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
              className="h-12 w-full rounded border border-form-list-border bg-white"
            />
          </div>

          <div className="mb-[22px]">
            <Label htmlFor="email" className="mb-2 block">
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
              className="h-12 w-full rounded border border-form-list-border bg-white"
            />
          </div>

          <div className="mb-[22px]">
            <Label htmlFor="phone" className="mb-2 block">
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
              className="h-12 w-full rounded border border-form-list-border bg-white"
            />
          </div>

          <div className="mb-[50px]">
            <Label htmlFor="message" className="mb-2 block">
              お問い合わせ内容
              <span className="ml-1 text-key-visual-required">※</span>
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="min-h-[120px] w-full rounded border border-form-list-border bg-white"
            />
          </div>

          <div className="flex justify-center">
            <Button
              type="submit"
              className="h-14 w-64 rounded-full bg-[#2B5D8E] text-lg font-medium text-white hover:bg-main-blue"
            >
              送信する
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

