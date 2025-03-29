"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO at TechStart",
      image: "/placeholder.svg?height=100&width=100",
      text: "Rishu is an exceptional developer who delivered our project on time and exceeded our expectations. His attention to detail and problem-solving skills are impressive.",
    },
    {
      name: "Michael Chen",
      position: "Product Manager at InnovateCorp",
      image: "/placeholder.svg?height=100&width=100",
      text: "Working with Rishu was a pleasure. He understood our requirements quickly and implemented solutions that were both elegant and efficient.",
    },
    {
      name: "Priya Sharma",
      position: "Founder of DesignHub",
      image: "/placeholder.svg?height=100&width=100",
      text: "Rishu's technical expertise combined with his eye for design made him the perfect developer for our project. He's collaborative, responsive, and delivers high-quality work.",
    },
    {
      name: "David Wilson",
      position: "CTO at GrowthLabs",
      image: "/placeholder.svg?height=100&width=100",
      text: "I've worked with many developers, but Rishu stands out for his ability to understand business needs and translate them into technical solutions. Highly recommended!",
    },
  ]

  const nextTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
      setTimeout(() => setIsAnimating(false), 500)
    }
  }

  const prevTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
      setTimeout(() => setIsAnimating(false), 500)
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-white dark:bg-gray-800">
        <div className="absolute inset-0 opacity-30 dark:opacity-10">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        </div>
      </div>

      <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What People Say</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here's what clients and colleagues have to say about working with me.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 z-10">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg"
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
            </div>

            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <Card className="border-none shadow-lg">
                      <CardContent className="p-8">
                        <div className="flex flex-col items-center text-center">
                          <div className="relative mb-6">
                            <div className="absolute -top-2 -left-2 w-full h-full bg-primary/20 rounded-full"></div>
                            <img
                              src={testimonial.image || "/placeholder.svg"}
                              alt={testimonial.name}
                              className="relative w-20 h-20 rounded-full object-cover border-4 border-white dark:border-gray-800"
                            />
                            <div className="absolute -bottom-2 -right-2 bg-primary text-white p-1 rounded-full">
                              <Quote className="h-4 w-4" />
                            </div>
                          </div>
                          <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg italic">"{testimonial.text}"</p>
                          <h4 className="font-bold text-lg">{testimonial.name}</h4>
                          <p className="text-gray-500 dark:text-gray-400">{testimonial.position}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 z-10">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg"
                onClick={nextTestimonial}
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentIndex === index ? "bg-primary w-6" : "bg-gray-300 dark:bg-gray-600"
                }`}
                onClick={() => {
                  setCurrentIndex(index)
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

