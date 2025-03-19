"use client"
import { useEffect } from "react"
import Hero from "@/components/hero"
import Programs from "@/components/programs"
import Testimonials from "@/components/testimonials"
import Teachers from "@/components/teachers"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import WhatWeOffer from "@/components/what-we-offer"
import ContactButtons from "@/components/contact-buttons"
import Stats from "@/components/stats"

export default function Home() {
  // Initialize animations on page load
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()

        const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute("href")
        if (!targetId) return

        const targetElement = document.querySelector(targetId)
        if (!targetElement) return

        window.scrollTo({
          top: targetElement.getBoundingClientRect().top + window.scrollY - 80, // Offset for navbar
          behavior: "smooth",
        })
      })
    })
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <WhatWeOffer />
        <Stats />
        <Programs />
        <Teachers />
        <Testimonials />
        <Contact />
        <ContactButtons />
      </main>
      <Footer />
    </div>
  )
}

