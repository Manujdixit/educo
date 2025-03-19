"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { cn } from "@/lib/utils"

export default function Footer() {
  const { ref, isVisible } = useIntersectionObserver()

  return (
    <footer ref={ref} className="w-full border-t bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-500/30 rounded-full blur-3xl"></div>

      <div className="container px-4 md:px-6 py-8 md:py-12 relative">
        <div
          className={cn(
            "grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 staggered-fade-in",
            isVisible && "visible",
          )}
        >
          <div className="space-y-4">
            <h3 className="text-lg font-medium">
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">EduCenter</span>
            </h3>
            <p className="text-sm text-muted-foreground">
              Empowering minds and shaping futures through innovative education since 2005.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <Facebook className="h-5 w-5" />, label: "Facebook" },
                { icon: <Twitter className="h-5 w-5" />, label: "Twitter" },
                { icon: <Instagram className="h-5 w-5" />, label: "Instagram" },
                { icon: <Youtube className="h-5 w-5" />, label: "YouTube" },
              ].map((social, index) => (
                <Link
                  key={index}
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 relative group"
                >
                  {social.icon}
                  <span className="sr-only">{social.label}</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Programs</h3>
            <ul className="space-y-2 text-sm">
              {["Early Childhood Education", "STEM Excellence", "Creative Arts", "Coding & Robotics"].map(
                (item, index) => (
                  <li key={index}>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors duration-200 relative group"
                    >
                      {item}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Resources</h3>
            <ul className="space-y-2 text-sm">
              {["Parent Portal", "Student Resources", "Academic Calendar", "Events"].map((item, index) => (
                <li key={index}>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">123 Education Lane</li>
              <li className="text-muted-foreground">Learning City, ED 12345</li>
              <li className="text-muted-foreground">(123) 456-7890</li>
              <li className="text-muted-foreground">info@educenter.com</li>
            </ul>
          </div>
        </div>
        <div
          className={cn(
            "mt-8 border-t pt-8 flex flex-col sm:flex-row justify-between items-center",
            "opacity-0 translate-y-4 transition-all duration-700 delay-500",
            isVisible && "opacity-100 translate-y-0",
          )}
        >
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} EduCenter. All rights reserved.</p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            {["Privacy Policy", "Terms of Service", "Accessibility"].map((item, index) => (
              <Link
                key={index}
                href="#"
                className="text-xs text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

