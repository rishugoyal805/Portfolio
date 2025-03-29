"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

// ✅ Define TypeScript interfaces
interface GithubRepo {
  name: string
  description: string
  full_name: string
  topics?: string[]
  homepage?: string
  html_url: string
}

interface Project {
  title: string
  description: string
  image: string
  technologies: string[]
  category: string
  liveLink: string
  githubLink: string
}

export default function Projects() {
  const [filter, setFilter] = useState<string>("all")
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://api.github.com/users/rishugoyal805/repos')
        if (!response.ok) {
          throw new Error('Failed to fetch projects')
        }

        const repos: GithubRepo[] = await response.json()

        const formattedProjects: Project[] = repos.map((repo) => ({
          title: repo.name,
          description: repo.description || "No description provided",
          image: `https://opengraph.githubassets.com/1/${repo.full_name}` || "/placeholder.svg",
          technologies: repo.topics || [],
          category: getCategoryFromRepo(repo),
          liveLink: repo.homepage || `https://github.com/${repo.full_name}`,
          githubLink: repo.html_url,
        }))

        setProjects(formattedProjects)
      } catch (err: any) {
        setError(err.message || 'An unknown error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  const getCategoryFromRepo = (repo: GithubRepo): string => {
    if (repo.topics?.includes('frontend')) return "frontend"
    if (repo.topics?.includes('backend')) return "backend"
    return "fullstack"
  }

  const filteredProjects = filter === "all"
    ? projects
    : projects.filter((project) => project.category === filter)

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "fullstack", label: "Full Stack" },
  ]

  if (loading) {
    return (
      <section id="projects" className="section-padding">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
            <p className="text-gray-600 dark:text-gray-400">Loading projects...</p>
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section id="projects" className="section-padding">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
            <p className="text-red-500">Error: {error}</p>
          </div>
        </div>
      </section>
    )
  }

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
            Here are some of the projects I've worked on. Each project represents different skills and technologies I've mastered.
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
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                    e.currentTarget.src = "/placeholder.svg"
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                  <div className="flex gap-3">
                    <Button variant="secondary" size="sm" asChild>
                      <Link href={project.githubLink} target="_blank">
                        <Github className="mr-1 h-4 w-4" /> Code
                      </Link>
                    </Button>

                    {/* Conditional Demo button */}
                    <Button size="sm" asChild>
                      <Link
                        href={project.title === "Jaypee_Learning_Hub"
                          ? "https://jaypeelearninghub.great-site.net"
                          : project.liveLink}
                        target="_blank"
                      >
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
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}



// "use client"

// import { useState, useEffect } from "react"
// import { Card, CardContent } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { ExternalLink, Github } from "lucide-react"
// import Link from "next/link"

// const GITHUB_USERNAME = "rishugoyal805"  // ✅ Replace with your GitHub username

// export default function Projects() {
//   const [projects, setProjects] = useState([])
//   const [filter, setFilter] = useState("all")
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState(null)

//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`)
//         if (!res.ok) throw new Error("Failed to fetch GitHub repos")
        
//         const data = await res.json()

//         // Map GitHub data into your existing project structure
//         const mappedProjects = data.map((repo) => ({
//           title: repo.name,
//           description: repo.description || "No description available.",
//           image: "/placeholder.svg?height=300&width=500",  // You can replace with your custom image logic
//           technologies: ["GitHub", "API", "Next.js"],  // Placeholder tech stack
//           category: "frontend",  // Default category, you can map dynamically if you have repo topics
//           liveLink: repo.homepage || "#",  // Use homepage if available, otherwise #
//           githubLink: repo.html_url,
//         }))

//         setProjects(mappedProjects)
//       } catch (error) {
//         setError(error.message)
//       } finally {
//         setLoading(false)
//       }
//     }

//     fetchProjects()
//   }, [])

//   const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

//   const categories = [
//     { id: "all", label: "All Projects" },
//     { id: "frontend", label: "Frontend" },
//     { id: "backend", label: "Backend" },
//     { id: "fullstack", label: "Full Stack" },
//   ]

//   return (
//     <section id="projects" className="section-padding relative overflow-hidden">
//       <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">My GitHub Projects</h2>
//           <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
//           <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
//             Here are some of my GitHub projects, automatically fetched via GitHub API.
//           </p>
//         </div>

//         {/* Filter buttons */}
//         <div className="flex flex-wrap justify-center gap-2 mb-8">
//           {categories.map((category) => (
//             <Button
//               key={category.id}
//               variant={filter === category.id ? "default" : "outline"}
//               className={`rounded-full ${filter === category.id ? "" : "hover:bg-primary/10 hover:text-primary"}`}
//               onClick={() => setFilter(category.id)}
//             >
//               {category.label}
//             </Button>
//           ))}
//         </div>

//         {/* Loading and Error Handling */}
//         {loading ? (
//           <div className="text-center text-lg">Loading projects...</div>
//         ) : error ? (
//           <div className="text-center text-red-500">{error}</div>
//         ) : (
//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {filteredProjects.map((project, index) => (
//               <Card
//                 key={index}
//                 className="overflow-hidden group h-full flex flex-col transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl"
//               >
//                 <div className="relative overflow-hidden h-48">
//                   <img
//                     src={project.image}
//                     alt={project.title}
//                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
//                     <div className="flex gap-3">
//                       <Button variant="secondary" size="sm" asChild>
//                         <Link href={project.githubLink} target="_blank">
//                           <Github className="mr-1 h-4 w-4" /> Code
//                         </Link>
//                       </Button>
//                       {project.liveLink !== "#" && (
//                         <Button size="sm" asChild>
//                           <Link href={project.liveLink} target="_blank">
//                             <ExternalLink className="mr-1 h-4 w-4" /> Demo
//                           </Link>
//                         </Button>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//                 <CardContent className="p-5 sm:p-6 flex-grow flex flex-col">
//                   <div className="mb-2">
//                     <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs uppercase">
//                       {project.category}
//                     </span>
//                   </div>
//                   <h3 className="text-lg sm:text-xl font-semibold mb-2">{project.title}</h3>
//                   <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 flex-grow">{project.description}</p>
//                   <div className="flex flex-wrap gap-1.5 mt-auto">
//                     {project.technologies.map((tech, techIndex) => (
//                       <span key={techIndex} className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs">
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         )}
//       </div>
//     </section>
//   )
// }
