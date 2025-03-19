"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { ShimmerButton } from "./magicui/shimmer-button";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems = [
    {
      label: "Boards",
      items: ["CBSE", "ICSE", "State Board", "International"],
    },
    {
      label: "Classes",
      items: [
        "Class 6",
        "Class 7",
        "Class 8",
        "Class 9",
        "Class 10",
        "Class 11",
        "Class 12",
      ],
    },
    {
      label: "Subjects",
      items: [
        "Mathematics",
        "Science",
        "English",
        "Social Studies",
        "Computer Science",
      ],
    },
    { label: "Our Teachers" },
    { label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative w-8 h-8 rounded-full bg-primary flex items-center justify-center overflow-hidden transition-transform group-hover:scale-110">
              <span className="text-lg font-bold text-primary-foreground">
                E
              </span>
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-300"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent transition-all duration-300 group-hover:tracking-wider">
              EduCenter
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 text-sm font-medium relative group">
                {item.label}
                {item.items && (
                  <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                )}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>

              {item.items && activeDropdown === item.label && (
                <div className="absolute top-full left-0 mt-1 py-2 w-48 bg-background/95 backdrop-blur-md shadow-lg rounded-lg border border-border/50">
                  {item.items.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      href={`#${subItem.toLowerCase().replace(" ", "-")}`}
                      className="block px-4 py-2 text-sm hover:bg-primary/10 transition-colors"
                    >
                      {subItem}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
           <Link href="#contact">
          <ShimmerButton className="shadow-2xl">
           
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                Get Call from our conseller
              </span>
            
          </ShimmerButton>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden fixed right-4 w-10 h-10 flex items-center justify-center z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <div className="relative w-6 h-6">
            <span
              className={cn(
                "absolute block w-6 h-0.5 bg-foreground transition-all duration-300",
                isMenuOpen ? "top-3 rotate-45" : "top-2"
              )}
            ></span>
            <span
              className={cn(
                "absolute block w-6 h-0.5 bg-foreground transition-all duration-300",
                isMenuOpen ? "opacity-0" : "top-3"
              )}
            ></span>
            <span
              className={cn(
                "absolute block w-6 h-0.5 bg-foreground transition-all duration-300",
                isMenuOpen ? "top-3 -rotate-45" : "top-4"
              )}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden fixed inset-0 bg-background z-40 transition-all duration-300 flex flex-col",
          isMenuOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-full pointer-events-none"
        )}
      >
        <div className="h-16"></div>
        <div className="container py-8 flex flex-col space-y-6">
          {navItems.map((item, index) => (
            <div key={index} className="space-y-2">
              <button
                className="text-2xl font-medium hover:text-primary transition-colors w-full text-left flex items-center justify-between"
                onClick={() =>
                  item.items &&
                  setActiveDropdown(
                    activeDropdown === item.label ? null : item.label
                  )
                }
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {item.label}
                {item.items && (
                  <ChevronDown
                    className={cn(
                      "h-6 w-6 transition-transform duration-200",
                      activeDropdown === item.label && "rotate-180"
                    )}
                  />
                )}
              </button>
              {item.items && activeDropdown === item.label && (
                <div className="pl-4 space-y-2">
                  {item.items.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      href={`#${subItem.toLowerCase().replace(" ", "-")}`}
                      className="block text-lg hover:text-primary transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                      style={{
                        transitionDelay: `${
                          (index * item.items.length + subIndex) * 30
                        }ms`,
                      }}
                    >
                      {subItem}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <ShimmerButton
            className="mt-4 w-full"
            onClick={() => setIsMenuOpen(false)}
          >
            Enroll Now
          </ShimmerButton>
        </div>
      </div>
    </header>
  );
}
