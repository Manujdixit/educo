"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

export default function Hero() {
  const { ref, isVisible } = useIntersectionObserver()

  return (
    <section ref={ref} className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 overflow-hidden min-h-[90vh]">
      {/* Background Elements */}
      <div className="absolute inset-0 animated-bg opacity-30"></div>
      <div className="absolute top-20 left-10 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-green-500/30 rounded-full blur-3xl"></div>

      <div className="container px-4 sm:px-6 relative">
        <div
          className={cn(
            "grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]",
            "opacity-0 translate-y-8 transition-all duration-1000",
            isVisible && "opacity-100 translate-y-0"
          )}
        >
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl/none gradient-heading">
                Empowering Minds, Shaping Futures
              </h1>
              <p className="max-w-[600px] text-muted-foreground text-lg sm:text-lg">
                At EduCenter, we provide exceptional educational experiences that inspire curiosity, foster creativity,
                and build the foundation for lifelong learning.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Button size="lg" asChild className="relative overflow-hidden group">
                <Link href="#programs">
                  <span className="relative z-10">Explore Programs</span>
                  <div className="absolute inset-0 w-full h-full bg-white/10 transform translate-y-full group-hover:translate-y-0 transition-transform"></div>
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="relative overflow-hidden group">
                <Link href="#contact">
                  <span className="relative z-10">Contact Us</span>
                  <div className="absolute inset-0 w-full h-full bg-primary/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                </Link>
              </Button>
            </div>
          </div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              className="relative rounded-xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/images/classroom.jpg"
                width={550}
                height={550}
                alt="Students learning in a modern classroom"
                className="mx-auto aspect-video object-cover w-full lg:order-last"
                priority
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>

            {/* Floating elements */}
            <motion.div
              className="absolute -top-6 -left-6 w-16 h-16 bg-yellow-400 rounded-lg shadow-lg"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-full h-full flex items-center justify-center text-white font-bold">A+</div>
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -right-4 w-20 h-20 bg-blue-500 rounded-full shadow-lg"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-full h-full flex items-center justify-center text-white font-bold">STEM</div>
            </motion.div>
            <motion.div
              className="absolute top-1/2 -right-8 w-14 h-14 bg-green-500 rounded-lg shadow-lg"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, delay: 1, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-full h-full flex items-center justify-center text-white font-bold">Art</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-8 h-12 rounded-full border-2 border-primary/50 flex items-center justify-center">
          <div className="w-1 h-4 bg-primary rounded-full animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  )
}
