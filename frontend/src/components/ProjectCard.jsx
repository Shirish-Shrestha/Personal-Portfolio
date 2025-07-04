import { Github, ExternalLink, Clock } from "lucide-react"

const ProjectCard = ({ project }) => {
  const { title, description, image, tags, liveUrl, githubUrl, status } = project

  return (
    <div className="tech-card transition-all duration-300 h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image || "/placeholder.png"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent opacity-70"></div>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-semibold text-white mb-2 neon-text-accent">{title}</h3>
        <p className="text-gray-400 mb-4 flex-grow">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span key={index} className="px-2 py-1 text-xs font-medium bg-[#2a2a2a] text-gray-300 rounded">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex space-x-3">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-gray-400 hover:text-neon-primary transition-colors"
              >
                <Github size={16} className="mr-1" />
                Code
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-gray-400 hover:text-neon-secondary transition-colors"
              >
                <ExternalLink size={16} className="mr-1" />
                Live Demo
              </a>
            )}
          </div>
          {status === "in-progress" && (
            <div className="px-2 py-1 rounded text-xs font-medium flex items-center bg-amber-500/80 text-black">
              <Clock size={12} className="mr-1" />
              In Progress
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard