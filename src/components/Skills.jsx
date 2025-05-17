import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaNpm, FaNode, FaFigma } from "react-icons/fa"
import {
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiVite,
  SiVisualstudiocode,
} from "react-icons/si"
import SectionHeading from "./SectionHeading"
import SkillCard from "./SkillCard"

const Skills = () => {
  const frontendSkills = [
    { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" />, level: 95 },
    { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6]" />, level: 90 },
    { name: "JavaScript", icon: <FaJs className="text-[#F7DF1E]" />, level: 85 },
    { name: "React", icon: <FaReact className="text-[#61DAFB]" />, level: 77 },
    { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" />, level: 70 },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" />, level: 80 },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" />, level: 70 },
  ]

  const toolsSkills = [
    { name: "Git", icon: <FaGitAlt className="text-[#F05032]" />, level: 85 },
    { name: "npm", icon: <FaNpm className="text-[#CB3837]" />, level: 80 },
    { name: "Vite", icon: <SiVite className="text-[#646CFF]" />, level: 80 },
    { name: "VS Code", icon: <SiVisualstudiocode className="text-[#007ACC]" />, level: 90 },
    { name: "Node.js", icon: <FaNode className="text-[#339933]" />, level: 55 },
    { name: "Figma", icon: <FaFigma className="text-[#F24E1E]" />, level: 50 },
  ]

  return (
    <div className="py-20 min-h-screen pt-24 relative">
      {/* Tech pattern background */}
      <div className="absolute inset-0 bg-tech-pattern opacity-5 z-0"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading title="My Skills" subtitle="Technologies and tools I work with to bring ideas to life" />

        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-white mb-8 text-center neon-text-primary">Development Languages</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {frontendSkills.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-white mb-8 text-center neon-text-secondary">Tools & Workflow</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {toolsSkills.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
