import { ExternalLink, Github } from "lucide-react"

const ProjectCard = ({ project, keyPrefix = "" }) => {
  return (
    <div key={`${keyPrefix}${project.title}`} className="group bg-white rounded-sm overflow-hidden hover:shadow-lg transition-all duration-300">
      
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden bg-gray-100">
        <img
          src={project.image || "/placeholder.png"}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-normal text-gray-900 mb-3">{project.title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, tagIndex) => (
            <span 
              key={tagIndex} 
              className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              <ExternalLink size={14} className="mr-1" />
              Live Site
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              <Github size={14} className="mr-1" />
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard