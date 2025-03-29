"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

export default function Projects() {
  const [filter, setFilter] = useState("all")

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with product management, cart functionality, and payment integration.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      category: "fullstack",
      liveLink: "https://example.com",
      githubLink: "https://github.com/rishugoyal/ecommerce",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates and team collaboration features.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Next.js", "Firebase", "Tailwind CSS", "React Query"],
      category: "frontend",
      liveLink: "https://example.com",
      githubLink: "https://github.com/rishugoyal/task-manager",
    },
    {
      title: "Weather Dashboard",
      description: "A weather dashboard that displays current and forecasted weather data for multiple locations.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "OpenWeather API", "Chart.js", "Styled Components"],
      category: "frontend",
      liveLink: "https://example.com",
      githubLink: "https://github.com/rishugoyal/weather-app",
    },
    {
      title: "Social Media Platform",
      description: "A social media platform with user authentication, post creation, and real-time notifications.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "AWS S3"],
      category: "fullstack",
      liveLink: "https://example.com",
      githubLink: "https://github.com/rishugoyal/social-media",
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing projects and skills with a modern design.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
      category: "frontend",
      liveLink: "https://example.com",
      githubLink: "https://github.com/rishugoyal/portfolio",
    },
    {
      title: "API Service",
      description: "A RESTful API service for data processing and analytics with comprehensive documentation.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Node.js", "Express", "MongoDB", "Swagger", "JWT"],
      category: "backend",
      liveLink: "https://example.com",
      githubLink: "https://github.com/rishugoyal/api-service",
    },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "fullstack", label: "Full Stack" },
  ]

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-white dark:bg-gray-800">
        <div className="absolute inset-0 opacity-30 dark:opacity-10">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        </div>
      </div>

      <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project represents different skills and technologies I've
            mastered.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={filter === category.id ? "default" : "outline"}
              className={`rounded-full ${filter === category.id ? "" : "hover:bg-primary/10 hover:text-primary"}`}
              onClick={() => setFilter(category.id)}
            >
              {category.label}
            </Button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden group h-full flex flex-col transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                  <div className="flex gap-3">
                    <Button variant="secondary" size="sm" asChild>
                      <Link href={project.githubLink} target="_blank">
                        <Github className="mr-1 h-4 w-4" /> Code
                      </Link>
                    </Button>
                    <Button size="sm" asChild>
                      <Link href={project.liveLink} target="_blank">
                        <ExternalLink className="mr-1 h-4 w-4" /> Demo
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
              <CardContent className="p-5 sm:p-6 flex-grow flex flex-col">
                <div className="mb-2">
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs uppercase">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

