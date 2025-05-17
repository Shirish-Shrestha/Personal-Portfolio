import SectionHeading from "./SectionHeading"
import ProjectCard from "./ProjectCard"

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Website",
      description:
        "A fully responsive e-commerce platform with product filtering, cart functionality, and checkout process.",
      image: "/placeholder.png?height=300&width=500",
      tags: ["React", "Redux", "Tailwind CSS", "Stripe"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/project",
    },
    {
      title: "Task Management App",
      description:
        "A productivity application for managing tasks with drag-and-drop functionality and user authentication.",
      image: "/placeholder.png?height=300&width=500",
      tags: ["React", "Firebase", "CSS Modules"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/project",
    },
    {
      title: "Weather Dashboard",
      description: "A weather application that displays current and forecasted weather data for any location.",
      image: "/placeholder.png?height=300&width=500",
      tags: ["JavaScript", "API Integration", "CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/project",
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing my projects and skills (this website).",
      image: "/placeholder.png?height=300&width=500",
      tags: ["React", "Vite", "Tailwind CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/project",
    },
    {
      title: "Recipe Finder",
      description: "An application that allows users to search for recipes based on ingredients they have.",
      image: "/placeholder.png?height=300&width=500",
      tags: ["React", "API Integration", "Styled Components"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/project",
    },
    {
      title: "Movie Database",
      description: "A web application for browsing movies and TV shows with search and filtering capabilities.",
      image: "/placeholder.png?height=300&width=500",
      tags: ["React", "Context API", "CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/project",
    },
  ]

  return (
    <div className="py-20 min-h-screen pt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="My Projects" subtitle="A selection of my recent work and personal projects" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
