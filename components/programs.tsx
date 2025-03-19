import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";
import React from "react";

import {
  BookOpen,
  Code,
  PenTool,
  Microscope,
  Music,
  Languages,
} from "lucide-react";

 const programs = [
    {
      title: "Early Childhood Education",
      description:
        "Nurturing young minds with play-based learning and foundational skills development for ages 3-5.",
      icon: <BookOpen className="h-10 w-10 text-primary" />,
      color: "from-blue-500/80 via-blue-400/80 to-cyan-400/80",
    },
    {
      title: "STEM Excellence",
      description:
        "Hands-on science, technology, engineering, and mathematics programs for elementary and middle school students.",
      icon: <Microscope className="h-10 w-10 text-primary" />,
      color: "from-purple-500/80 via-purple-400/80 to-indigo-500/80",
    },
    {
      title: "Creative Arts",
      description:
        "Express creativity through visual arts, music, drama, and digital media courses for all ages.",
      icon: <PenTool className="h-10 w-10 text-primary" />,
      color: "from-pink-500/80 via-pink-400/80 to-rose-400/80",
    },
    {
      title: "Coding & Robotics",
      description:
        "Learn programming fundamentals and robotics engineering in our state-of-the-art tech lab.",
      icon: <Code className="h-10 w-10 text-primary" />,
      color: "from-green-500/80 via-green-400/80 to-emerald-400/80",
    },
    {
      title: "Music Academy",
      description:
        "Comprehensive music education including instrument lessons, theory, and performance opportunities.",
      icon: <Music className="h-10 w-10 text-primary" />,
      color: "from-yellow-500/80 via-yellow-400/80 to-amber-400/80",
    },
    {
      title: "Language Immersion",
      description:
        "Become fluent in Spanish, French, or Mandarin through our immersive language programs.",
      icon: <Languages className="h-10 w-10 text-primary" />,
      color: "from-red-500/80 via-red-400/80 to-orange-400/80",
    },
  ];

export default function Programs() {
  const { ref, isVisible } = useIntersectionObserver();

  
 

  return (
    <section
      id="programs"
      ref={ref}
      className="w-full py-12 md:py-24 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 animated-bg opacity-30"></div>
      <div className="absolute top-30 left-10 w-80 h-80 bg-blue-500/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-orange-500/30 rounded-full blur-3xl"></div>


      <div className="container px-4 md:px-6 relative">
     

        <div
          className={cn(
            "flex flex-col items-center justify-center space-y-4 text-center",
            "opacity-0 translate-y-8 transition-all duration-700",
            isVisible && "opacity-100 translate-y-0"
          )}
        >     

          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl gradient-heading">
              Our Programs
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover our diverse range of educational programs designed to
              inspire and challenge students of all ages.
            </p>
          </div>
        </div>

        <div
          className={cn(
            "mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12 staggered-fade-in",
            isVisible && "visible"
          )}
        >
          {programs.map((program, index) => (
            <Card
              key={index}
              className="flex flex-col h-full overflow-hidden group card-hover border-none shadow-lg"
            >
              <div
                className={`h-2 w-full bg-gradient-to-r ${program.color} transition-all duration-300 group-hover:opacity-80`}
              ></div>
              <CardHeader>
                <div className="mb-2 relative">
                  <div className="relative transform group-hover:scale-105 transition-transform duration-300 ease-in-out">
                    {program.icon}
                  </div>
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">
                  {program.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-base">
                  {program.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  className="w-full relative overflow-hidden group"
                >
                  <span className="relative z-10">Learn More</span>
                  <span
                    className={`absolute inset-0 w-full h-full bg-gradient-to-r ${program.color} opacity-0 group-hover:opacity-20 transition-opacity`}
                  ></span>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
