"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

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
    <div className="relative w-full bg-gradient-to-br from-white to-key-blue/10 font-japanese text-normal-text">
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <svg width="100%" height="100%" className="absolute top-0 right-0 opacity-10">
          <pattern
            id="diagonalLines"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(45)"
          >
            <line x1="0" y1="0" x2="0" y2="100" stroke="#4389cc" strokeWidth="1" />
            <line x1="25" y1="0" x2="25" y2="100" stroke="#4389cc" strokeWidth="0.5" />
            <line x1="50" y1="0" x2="50" y2="100" stroke="#4389cc" strokeWidth="1" />
            <line x1="75" y1="0" x2="75" y2="100" stroke="#4389cc" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#diagonalLines)" />
        </svg>
      </div>

      {/* Content container */}
      <div className="relative mx-auto max-w-3xl px-4 py-16 md:px-8">
        {/* Title */}
        <div className="mb-12 text-center">
          <h1 className="mb-2 text-4xl font-bold">お問い合わせ</h1>
          <div className="mx-auto mb-4 h-px w-16 bg-gray-300"></div>
          <p className="text-lg tracking-wider">CONTACT</p>
        </div>

        {/* Description */}
        <div className="mb-12 text-center">
          <p className="mb-2">お客様の状況に合わせた最適なプランをご提案しております。</p>
          <p>まずはお気軽にお問い合わせください。</p>
        </div>

        {/* Contact form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name field */}
          <div>
            <Label htmlFor="name" className="mb-2 block">
              お名前
              <span className="ml-1 text-key-visual-required">*</span>
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

          {/* Company field */}
          <div>
            <Label htmlFor="company" className="mb-2 block">
              会社名
              <span className="ml-1 text-key-visual-required">*</span>
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

          {/* Email field */}
          <div>
            <Label htmlFor="email" className="mb-2 block">
              メールアドレス
              <span className="ml-1 text-key-visual-required">*</span>
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

          {/* Phone field */}
          <div>
            <Label htmlFor="phone" className="mb-2 block">
              電話番号
              <span className="ml-1 text-key-visual-required">*</span>
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

          {/* Message field */}
          <div>
            <Label htmlFor="message" className="mb-2 block">
              お問い合わせ内容
              <span className="ml-1 text-key-visual-required">*</span>
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

          {/* Submit button */}
          <div className="mt-8 flex justify-center">
            <Button
              type="submit"
              className="h-14 w-64 rounded-full bg-key-blue2 text-lg font-medium text-white hover:bg-main-blue"
            >
              送信する
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

