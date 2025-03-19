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
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || 'メール送信に失敗しました。')
      }
      
      // Reset form after successful submission
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        message: "",
      })
      setIsSubmitted(true)
    } catch (err) {
      console.error('Email sending error:', err)
      setError(err instanceof Error ? err.message : 'メール送信に失敗しました。')
    } finally {
      setIsSubmitting(false)
    }
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

        {/* Introduction text - Only show when not submitted */}
        {!isSubmitted && (
          <div className="mb-10 text-justify text-normal-text">
            <p className={`mb-2 text-base !font-normal ${notoSansJP.className}`}>
              お客様の状況に合わせた最適なプランをご提案しております。
            </p>
            <p className={`text-base !font-normal ${notoSansJP.className}`}>
              まずはお気軽にお問い合わせください。
            </p>
          </div>
        )}

        {isSubmitted ? (
          <div className={`text-center text-xl font-bold text-main-blue mb-8 ${notoSansJP.className}`}>
            送信を完了しました。
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="w-full">
            {error && (
              <div className="mb-5 p-3 bg-red-100 text-red-700 rounded border border-red-300">
                {error}
              </div>
            )}
            
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
                disabled={isSubmitting}
                className={`h-[60px] w-[256px] rounded-full bg-[#2B5D8E] text-base font-bold text-white hover:bg-main-blue ${notoSansJP.className} ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? '送信中...' : '送信する'}
              </Button>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}

