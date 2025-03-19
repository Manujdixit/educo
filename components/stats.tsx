import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { NumberTicker } from "./magicui/number-ticker";
import { cn } from "@/lib/utils";

export default function Stats() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section
      id="stats"
      ref={ref}
      className="w-full py-12 md:py-24 relative overflow-hidden"
    >

<div className="absolute inset-0 animated-bg opacity-30"></div>
      <div className="absolute top-30 left-10 w-80 h-80 bg-blue-500/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-yellow-500/30 rounded-full blur-3xl"></div>



      <div className="container px-4 md:px-6 relative">
      {/* Stats Section */}
      <div
        className={cn(
          "mt-20 mb-40 flex flex-col items-center space-y-8",
          "opacity-0 translate-y-8 transition-all duration-1000 delay-300",
          isVisible && "opacity-100 translate-y-0"
        )}
      >
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl gradient-heading">
            Our Growing Stats
          </h1>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Discover our diverse range of educational programs designed to
            inspire and challenge students of all ages.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 w-full">
          {[
            { label: "Students Enrolled", value: 1250, suffix: "+" },
            { label: "Expert Teachers", value: 48, suffix: "" },
            { label: "Success Rate", value: 98, suffix: "%" },
            { label: "Courses Offered", value: 32, suffix: "" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-background/50 backdrop-blur-sm p-4 sm:p-6 rounded-xl shadow-md text-center transform hover:scale-105 transition-transform duration-300"
            >
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                <NumberTicker
                  value={stat.value}
                  className="whitespace-pre-wrap text-6xl sm:text-8xl font-medium tracking-tighter text-black dark:text-white"
                />
              </div>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
