"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { notoSansJP } from "@/fonts"

export function MobileContact() {
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
    <section
      id="contact"
      className="md:hidden w-full"
      style={{
        backgroundImage: 'url("/images/contact-bg-mb.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col justify-center items-center w-full text-normal-text py-[60px] px-5">
        {/* Header */}
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center text-center mb-10">
          <h1 className={`text-[32px] font-bold leading-tight tracking-wider text-main-blue ${notoSansJP.className}`}>
            お問い合わせ
          </h1>
          <div className="w-8 h-[1px] bg-main-blue my-4"></div>
          <p className={`font-poppins text-base font-medium tracking-wider text-main-blue uppercase`}>
            CONTACT
          </p>
        </div>

        {/* Introduction text */}
        <div className="mb-10 text-justify text-normal-text">
          <p className={`mb-2 text-base !font-normal ${notoSansJP.className}`}>
            お客様の状況に合わせた最適なプランをご提案しております。
          </p>
          <p className={`text-base !font-normal ${notoSansJP.className}`}>まずはお気軽にお問い合わせください。</p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-5">
            <Label htmlFor="name" className={`mb-3 block text-base !font-normal ${notoSansJP.className}`}>
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

          <div className="mb-5">
            <Label htmlFor="company" className={`mb-3 block text-base !font-normal ${notoSansJP.className}`}>
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

          <div className="mb-5">
            <Label htmlFor="email" className={`mb-3 block text-base !font-normal ${notoSansJP.className}`}>
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

          <div className="mb-5">
            <Label htmlFor="phone" className={`mb-3 block text-base !font-normal ${notoSansJP.className}`}>
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

          <div className="mb-8">
            <Label htmlFor="message" className={`mb-3 block text-base !font-normal ${notoSansJP.className}`}>
              お問い合わせ内容
              <span className="ml-1 text-key-visual-required">※</span>
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="min-h-[150px] w-full rounded border border-form-list-border bg-white"
            />
          </div>

          <div className="flex justify-center">
            <Button
              type="submit"
              className={`h-[60px] w-[256px] rounded-full bg-[#2B5D8E] text-base font-bold text-white hover:bg-main-blue ${notoSansJP.className}`}
            >
              送信する
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}

