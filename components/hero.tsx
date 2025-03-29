"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  const [text, setText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [isVisible, setIsVisible] = useState(false)
  const fullText = "Full Stack Developer"

  useEffect(() => {
    setIsVisible(true)

    let timer: NodeJS.Timeout
    let charIndex = 0

    if (isTyping) {
      timer = setInterval(() => {
        if (charIndex <= fullText.length) {
          setText(fullText.substring(0, charIndex))
          charIndex++
        } else {
          setIsTyping(false)
          clearInterval(timer)
          setTimeout(() => {
            setIsTyping(true)
            charIndex = 0
          }, 2000)
        }
      }, 100)
    }

    return () => clearInterval(timer)
  }, [isTyping])

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gray-50 dark:bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-30 dark:opacity-10">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/4 -right-24 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        </div>
      </div>

      <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div
            className={`order-2 md:order-1 text-center md:text-left transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Hi, I&apos;m <span className="text-primary">Rishu Goyal</span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 h-10">
              {text}
              <span className="animate-blink">|</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto md:mx-0">
              I build exceptional and accessible digital experiences for the web. Passionate about creating solutions
              that are both functional and beautiful.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button asChild size="lg" className="rounded-full shadow-md hover:shadow-lg transition-all">
                <Link href="#contact">
                  Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full shadow-sm hover:shadow-md transition-all"
                asChild
              >
                <Link href="/RishuResume.pdf" target="_blank">
                  <Download className="mr-2 h-4 w-4" /> Resume
                </Link>
              </Button>
              <div className="flex items-center gap-3 mt-4 md:mt-6">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full shadow-sm hover:shadow-md transition-all hover:scale-110"
                  asChild
                >
                  <Link href="https://github.com/rishugoyal805" target="_blank" aria-label="GitHub">
                    <Github className="h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full shadow-sm hover:shadow-md transition-all hover:scale-110"
                  asChild
                >
                  <Link href="https://linkedin.com/in/rishu0405" target="_blank" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full shadow-sm hover:shadow-md transition-all hover:scale-110"
                  asChild
                >
                  <Link href="mailto:rishugoyal16800@gmail.com" aria-label="Email">
                    <Mail className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          <div
            className={`order-1 md:order-2 flex justify-center transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl transform -translate-x-4 translate-y-4"></div>
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-primary shadow-lg transform hover:scale-105 transition-transform duration-300">
                <img
                  src="/rishu.jpg?height=320&width=320"
                  alt="Rishu Goyal"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

