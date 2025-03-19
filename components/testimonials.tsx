"use client";

import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";
import { Marquee } from "./magicui/marquee";
import Image from "next/image";

export default function Testimonials() {
  const { ref, isVisible } = useIntersectionObserver();

  const reviews = [
    {
      name: "Priya",
      body: "The interactive lessons and personalized learning path have helped me improve my grades significantly. The platform makes studying fun!",
      img: "https://avatar.vercel.sh/priya",
    },
    {
      name: "Rajesh",
      body: "As a parent, I love how I can track my child's progress. The regular progress reports and teacher communication features are excellent.",
      img: "https://avatar.vercel.sh/rajesh",
    },
    {
      name: "Anjali",
      body: "The practice exercises and instant feedback have boosted my confidence in math. I no longer dread math homework!",
      img: "https://avatar.vercel.sh/anjali",
    },
    {
      name: "Suresh",
      body: "This platform has transformed my daughter's learning experience. The quality of content and teaching methodology is outstanding.",
      img: "https://avatar.vercel.sh/suresh",
    },
    {
      name: "Meera",
      body: "I love how I can learn at my own pace. The video lessons are clear and engaging, and the practice quizzes really help reinforce concepts.",
      img: "https://avatar.vercel.sh/meera",
    },
    {
      name: "Ramesh",
      body: "The platform's flexibility allows my kids to balance their extracurricular activities with studies. The 24/7 access is incredibly convenient.",
      img: "https://avatar.vercel.sh/ramesh",
    },
  ];

  const firstRow = reviews.slice(0, reviews.length / 2);
  const secondRow = reviews.slice(reviews.length / 2);

  const ReviewCard = ({
    img,
    name,
    body,
  }: {
    img: string;
    name: string;
    body: string;
  }) => {
    return (
      <figure
        className={cn(
          "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
          // light styles
          "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
          // dark styles
          "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
        )}
      >
        <div className="flex flex-row items-center gap-2">
          <Image
            className="rounded-full"
            width={32}
            height={32}
            alt={`${name}'s avatar`}
            src={img}
          />
          <div className="flex flex-col">
            <figcaption className="text-sm font-medium dark:text-white">
              {name}
            </figcaption>
          </div>
        </div>
        <blockquote className="mt-2 text-sm">{body}</blockquote>
      </figure>
    );
  };

  return (
    <section
      id="testimonials"
      ref={ref}
      className="w-full py-12 md:py-24 relative overflow-hidden bg-muted/30"
    >
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-background to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-background to-transparent"></div>

      <div className="container px-4 md:px-6 relative">
        <div
          className={cn(
            "flex flex-col items-center justify-center space-y-4 text-center",
            "opacity-0 translate-y-8 transition-all duration-700",
            isVisible && "opacity-100 translate-y-0"
          )}
        >
          <div className="space-y-2 mb-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl gradient-heading">
              What Students Says
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from students, parents, and educators about their experiences
              with EduCenter.
            </p>
          </div>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map((review) => (
              <ReviewCard key={review.name} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {secondRow.map((review) => (
              <ReviewCard key={review.name} {...review} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
        </div>
      </div>
    </section>
  );
}
