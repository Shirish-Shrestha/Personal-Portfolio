import { useState } from "react"
import { ArrowRight, ChevronUp } from "lucide-react"
import ProjectCard from "./ProjectCard"
import p1 from "../assets/Projects/p1.png"
import p2 from "../assets/Projects/p2.png"
import p3 from "../assets/Projects/p3.png"
import p4 from "../assets/Projects/p4.png"
import p5 from "../assets/Projects/p5.png"

const Projects = () => {
  const [showAllProjects, setShowAllProjects] = useState(false)

  // Featured projects - always visible
  const featuredProjects = [
    {
      title: "Paint Company",
      description: "Modern website for Nepal-based paint manufacturer with product showcase.",
      image: p5,
      tags: ["React", "API Integration", "Tailwind CSS"],
      githubUrl: "https://github.com/Shirish-Shrestha/Paint-House",
      liveUrl: "liveUrl: https://bardali.com.np/",
      featured: true
    },

    {
      title: "Bardali Creations",
      description: "Creative agency website showcasing branding and digital marketing services.",
      image: p1,
      tags: ["React", "Tailwind CSS", "Fast API"],
      liveUrl: "https://bardali.com.np/",
      featured: true
    },

    {
      title: "Netflix Clone",
      description: "Static front-end clone of Netflix built with HTML and CSS for layout practice.",
      image: p4,
      tags: ["HTML", "CSS"],
      liveUrl: "https://ssnetclone.netlify.app/",
      githubUrl: "https://github.com/Shirish-Shrestha/Netflix-Clone",
      featured: true
    },
    
  ]

  // Additional projects - shown when "View More" is clicked
  const additionalProjects = [
    {
      title: "Tic Tac Toe Game",
      description: "Clean, responsive two-player game with real-time win detection.",
      image: p2,
      tags: ["React", "Tailwind CSS"],
      liveUrl: "https://sstictactoe.netlify.app/",
      githubUrl: "https://github.com/Shirish-Shrestha/Tic-Tac-Toe",
    },

    {
      title: "Sky Scope",
      description: "Weather application with current and forecasted data for any location.",
      image: p3,
      tags: ["React", "API Integration", "Tailwind CSS"],
      githubUrl: "https://github.com/Shirish-Shrestha/SkyScope",
    },

  ]

  return (
    <div className="bg-gray-50 py-20">
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-900 mb-4">Projects Work</h2>
          <div className="w-12 h-0.5 bg-gray-400 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A curated selection of projects that showcase my approach to solving problems through design and code.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        {/* Additional Projects - shown when expanded */}
        {showAllProjects && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 animate-fadeIn">
            {additionalProjects.map((project, index) => (
              <ProjectCard key={`additional-${index}`} project={project} keyPrefix="additional-" />
            ))}
          </div>
        )}

        {/* Toggle Button */}
        <div className="text-center">
          <button
            onClick={() => setShowAllProjects(!showAllProjects)}
            className="group inline-flex items-center text-gray-900 font-medium hover:text-gray-600 transition-colors duration-200"
          >
            {showAllProjects ? (
              <>
                Show Less
                <ChevronUp size={16} className="ml-2 group-hover:-translate-y-1 transition-transform duration-200" />
              </>
            ) : (
              <>
                View More Projects
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  )
}

export default Projects