"use client";

import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { GraduationCap, Users, Clock, BarChart, Sparkles, VideoIcon } from "lucide-react";

export default function WhatWeOffer() {
  const { ref, isVisible } = useIntersectionObserver();

  const features = [
    {
      title: "Personalized Learning Journey",
      description: "Experience a uniquely crafted educational path that adapts and evolves with your progress and learning style.",
      icon: GraduationCap,
    },
    {
      title: "World-Class Educators",
      description: "Learn from passionate industry experts and certified educators who bring real-world experience to every lesson.",
      icon: Users,
    },
    {
      title: "Interactive Live Sessions",
      description: "Engage in dynamic, real-time learning experiences with interactive discussions and personalized feedback.",
      icon: VideoIcon,
    },
    {
      title: "Learn at Your Pace",
      description: "Access comprehensive learning materials 24/7, with flexible scheduling that fits perfectly into your busy life.",
      icon: Clock,
    },
    {
      title: "Immersive Learning Experience",
      description: "Dive into engaging content with interactive exercises, real-world projects, and cutting-edge learning tools.",
      icon: Sparkles,
    },
  ];

  return (
    <section
      id="what-we-offer"
      ref={ref}
      className="w-full py-16 md:py-28 bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-background to-transparent opacity-80"></div>
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-background to-transparent opacity-80"></div>

      <div className="container px-4 md:px-6 relative">
        <div
          className={cn(
            "flex flex-col items-center justify-center space-y-6 text-center",
            "opacity-0 translate-y-8 transition-all duration-700",
            isVisible && "opacity-100 translate-y-0"
          )}
        >
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl gradient-heading">
            What We Offer
          </h2>
          <p className="max-w-[800px] text-muted-foreground text-lg md:text-xl">
            Embark on a transformative educational journey with our comprehensive suite of learning experiences
          </p>
        </div>

        <div
          className={cn(
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16",
            "opacity-0 translate-y-8 transition-all duration-1000 delay-200",
            isVisible && "opacity-100 translate-y-0"
          )}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={cn(
                "group relative overflow-hidden rounded-xl p-8",
                "bg-white/5 dark:bg-gray-950/30 backdrop-blur-sm",
                "border border-gray-200/10 dark:border-gray-800/30",
                "hover:bg-white/10 dark:hover:bg-gray-900/50",
                "transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl border-gray"
              )}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <feature.icon className="text-lg text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight group-hover:text-primary transition-colors">{feature.title}</h3>
                </div>
                <p className="text-muted-foreground text-md leading-relaxed group-hover:text-foreground/90 transition-colors">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}