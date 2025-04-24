"use client"

import type React from "react"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import BackgroundWrapper from "./background-wrapper"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
    consent: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, consent: checked }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <BackgroundWrapper>
      <section id="contact-form" className="py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-light tracking-wide text-white mb-6">
              GET IN TOUCH
            </h2>
            <div className="w-16 h-px bg-white/30 mx-auto mb-8" />
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-16 tracking-wide font-light">
              Let us know how we can help. We'll respond promptly to address your plumbing needs.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-black/30 backdrop-blur-sm border border-white/10 p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="text-center">
                    <label className="block text-sm text-white/70 mb-2 tracking-wide">First Name</label>
                    <Input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="bg-white/10 border-white/10 text-white placeholder:text-white/50 h-12 text-center"
                    />
                  </div>
                  <div className="text-center">
                    <label className="block text-sm text-white/70 mb-2 tracking-wide">Last Name</label>
                    <Input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="bg-white/10 border-white/10 text-white placeholder:text-white/50 h-12 text-center"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="text-center">
                    <label className="block text-sm text-white/70 mb-2 tracking-wide">Phone</label>
                    <Input
                      type="tel"
                      name="phone"
                      placeholder="Phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-white/10 border-white/10 text-white placeholder:text-white/50 h-12 text-center"
                    />
                  </div>
                  <div className="text-center">
                    <label className="block text-sm text-white/70 mb-2 tracking-wide">Email</label>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-white/10 border-white/10 text-white placeholder:text-white/50 h-12 text-center"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <label className="block text-sm text-white/70 mb-2 tracking-wide">How can we help?</label>
                  <Textarea
                    name="message"
                    placeholder="How can we help?"
                    value={formData.message}
                    onChange={handleChange}
                    className="min-h-[120px] bg-white/10 border-white/10 text-white placeholder:text-white/50 text-center"
                  />
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Checkbox
                    id="consent"
                    checked={formData.consent}
                    onCheckedChange={handleCheckboxChange}
                    className="border-white/30 data-[state=checked]:bg-white data-[state=checked]:text-black"
                  />
                  <label htmlFor="consent" className="text-sm text-white/70 tracking-wide">
                    I agree to the terms and privacy policy
                  </label>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="w-full border border-white/30 bg-transparent text-white px-8 py-4 text-sm tracking-wide hover:bg-white hover:text-black transition-all duration-300"
                  >
                    SUBMIT
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </BackgroundWrapper>
  )
}
