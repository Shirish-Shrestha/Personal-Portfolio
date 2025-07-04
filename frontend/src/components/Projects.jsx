import SectionHeading from "./SectionHeading"
import ProjectCarousel from "./ProjectCarousel"
import p1 from "../assets/Projects/p1.png"
import p2 from "../assets/Projects/p2.png"
import p3 from "../assets/Projects/p3.png"
import p4 from "../assets/Projects/p4.png"
import p5 from "../assets/Projects/p5.png"


const Projects = () => {
  const projects = [
    {
      title: "Bardali Creations",
      description:
        "A creative agency website for Bardali Creations, showcasing their branding, digital marketing, and software development services.",
      image: p1,
      tags: ["React", "Tailwind CSS", "Fast API"],
      liveUrl: "https://bardali.com.np/",
      status: "in-progress",
    },
    {
      title: "Tic Tac Toe Game",
      description:
        "A clean and responsive two-player Tic Tac Toe game with real-time win detection and smooth gameplay.",
      image: p2,
      tags: ["React", "Tailwind CSS"],
      liveUrl: "https://sstictactoe.netlify.app/",
      githubUrl: "https://github.com/Shirish-Shrestha/Tic-Tac-Toe",
    },
    {
      title: "Netflix Clone",
      description: "A static front-end clone of Netflix built with only HTML and CSS. Created to practice layout design, visual hierarchy, and UI consistency.",
      image: p4,
      tags: ["HTML", "CSS"],
      liveUrl: "https://ssnetclone.netlify.app/",
      githubUrl: "https://github.com/Shirish-Shrestha/Netflix-Clone",
    },
    {
      title: "Lubro Paints",
      description: "Designed and developed a sleek, responsive website for Lubro Paints, a Nepal-based manufacturer and supplier of paints and coatings. The website provides detailed information about the company, its product categories, and services, while offering a modern and intuitive user experience.",
      image: p5,
      tags: ["React", "API Integration", "Tailwind CSS"],
      liveUrl: null,
      status: "in-progress",
    },
    {
      title: "Sky Scope",
      description: "A weather application that displays current and forecasted weather data for any location.",
      image: p3,
      tags: ["API Integration","React", "Tailwind CSS"],
      githubUrl: "https://github.com/Shirish-Shrestha/SkyScope",
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

        <ProjectCarousel projects={projects} />
      </div>
    </div>
  )
}

export default Projects
