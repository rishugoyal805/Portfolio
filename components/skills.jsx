"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Globe, Layout, Server, Smartphone } from "lucide-react"

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    const section = document.getElementById("skills")
    if (section) observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [])

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Layout,
      skills: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "HTML5/CSS3", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "Tailwind CSS", level: 90 },
      ],
    },
    {
      title: "Backend Development",
      icon: Server,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "PostgreSQL", level: 70 },
        { name: "RESTful APIs", level: 90 },
        { name: "GraphQL", level: 75 },
      ],
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      skills: [
        { name: "React Native", level: 80 },
        { name: "Expo", level: 75 },
        { name: "Mobile UI/UX", level: 85 },
      ],
    },
    {
      title: "Database",
      icon: Database,
      skills: [
        { name: "MongoDB", level: 80 },
        { name: "PostgreSQL", level: 75 },
        { name: "MySQL", level: 70 },
        { name: "Firebase", level: 85 },
        { name: "Redis", level: 65 },
      ],
    },
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "JavaScript", level: 95 },
        { name: "Python", level: 70 },
        { name: "Java", level: 60 },
        { name: "C++", level: 50 },
      ],
    },
    {
      title: "Other Skills",
      icon: Globe,
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 70 },
        { name: "CI/CD", level: 80 },
        { name: "Agile", level: 85 },
        { name: "Testing", level: 75 },
      ],
    },
  ]

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gray-50 dark:bg-gray-900">
        <div className="absolute inset-0 opacity-30 dark:opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-dot-pattern"></div>
        </div>
      </div>

      <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I have acquired a diverse range of skills throughout my career. Here are some of the technologies and tools
            I work with.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-t-4 border-t-primary/70"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div className="p-2 bg-primary/10 rounded-lg mr-3">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between mb-1">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                          <div
                            className="bg-primary h-2.5 rounded-full transition-all duration-1000 ease-out"
                            style={{
                              width: isVisible ? `${skill.level}%` : "0%",
                              transitionDelay: `${skillIndex * 100}ms`,
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}