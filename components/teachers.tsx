import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Facebook, Twitter, Linkedin } from "lucide-react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import {teachers} from "@/data/teachers_data"

export default function Teachers() {
  const { ref, isVisible } = useIntersectionObserver()

  

  return (
    <section id="teachers" ref={ref} className="w-full py-12 md:py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 animated-bg opacity-30"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-500/20 rounded-full blur-3xl"></div>

      <div className="container px-4 md:px-6 relative">
        <div
          className={cn(
            "flex flex-col items-center justify-center space-y-4 text-center",
            "opacity-0 translate-y-8 transition-all duration-700",
            isVisible && "opacity-100 translate-y-0",
          )}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl gradient-heading">Meet Our Teachers</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our passionate educators bring expertise, creativity, and dedication to every classroom.
            </p>
          </div>
        </div>

        <div
          className={cn(
            "mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-12 staggered-fade-in",
            isVisible && "visible",
          )}
        >
          <AnimatePresence>
            {teachers.map((teacher, index) => (
              <Dialog key={teacher.id}>
                <DialogTrigger asChild>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <Card className="cursor-pointer group overflow-hidden border-none shadow-lg">
                      <CardHeader className="p-0">
                        <div className="aspect-square overflow-hidden relative">
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                          >
                            <Image
                              src={teacher.image || "/placeholder.svg"}
                              alt={teacher.name}
                              width={300}
                              height={300}
                              className="h-full w-full object-cover"
                            />
                          </motion.div>
                          <motion.div
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                            transition={{ duration: 0.2 }}
                            className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                          />
                          <motion.div
                            initial={{ y: "100%" }}
                            whileHover={{ y: 0 }}
                            transition={{ duration: 0.2 }}
                            className="absolute bottom-0 left-0 w-full p-4"
                          >
                            <Button variant="secondary" className="w-full">
                              View Profile
                            </Button>
                          </motion.div>
                        </div>
                      </CardHeader>
                      <CardContent className="p-4 bg-background relative z-10">
                        <motion.div whileHover={{ color: "var(--primary)" }}>
                          <CardTitle className="text-xl">{teacher.name}</CardTitle>
                        </motion.div>
                        <CardDescription className="text-sm font-medium text-primary">{teacher.role}</CardDescription>
                        <p className="mt-2 text-sm text-muted-foreground">{teacher.shortBio}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[625px]">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="bg-background p-6 rounded-lg shadow-lg"
                  >
                    <DialogHeader>
                      <DialogTitle className="text-2xl gradient-heading">{teacher.name}</DialogTitle>
                      <DialogDescription className="text-primary font-medium">{teacher.role}</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4">
                        <div className="aspect-square overflow-hidden rounded-md shadow-lg animated-border">
                          <Image
                            src={teacher.image || "/placeholder.svg"}
                            alt={teacher.name}
                            width={200}
                            height={200}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">About</h4>
                          <p className="text-sm text-muted-foreground mb-4">{teacher.fullBio}</p>

                          <h4 className="font-semibold mb-2">Specialties</h4>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {teacher.specialties.map((specialty, index) => (
                              <Badge
                                key={index}
                                variant="secondary"
                                className="bg-primary/10 hover:bg-primary/20 transition-colors"
                              >
                                {specialty}
                              </Badge>
                            ))}
                          </div>

                          <h4 className="font-semibold mb-2">Education</h4>
                          <ul className="text-sm text-muted-foreground mb-4 list-disc pl-5">
                            {teacher.education.map((edu, index) => (
                              <li key={index}>{edu}</li>
                            ))}
                          </ul>

                          <h4 className="font-semibold mb-2">Achievements</h4>
                          <ul className="text-sm text-muted-foreground list-disc pl-5">
                            {teacher.achievements.map((achievement, index) => (
                              <li key={index}>{achievement}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="flex justify-center gap-4 pt-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="rounded-full hover:bg-blue-500/10 hover:text-blue-500 transition-colors"
                        >
                          <Facebook className="h-4 w-4" />
                          <span className="sr-only">Facebook</span>
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          className="rounded-full hover:bg-sky-500/10 hover:text-sky-500 transition-colors"
                        >
                          <Twitter className="h-4 w-4" />
                          <span className="sr-only">Twitter</span>
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          className="rounded-full hover:bg-blue-700/10 hover:text-blue-700 transition-colors"
                        >
                          <Linkedin className="h-4 w-4" />
                          <span className="sr-only">LinkedIn</span>
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                </DialogContent>
              </Dialog>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
