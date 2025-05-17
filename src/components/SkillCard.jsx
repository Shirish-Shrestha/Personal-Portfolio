const SkillCard = ({ skill }) => {
  const { name, icon, level } = skill

  return (
    <div className="tech-card p-6 transition-all duration-300">
      <div className="flex flex-col items-center">
        <div className="text-5xl mb-4">{icon}</div>
        <h3 className="text-lg font-medium text-white mb-3">{name}</h3>

        <div className="w-full bg-[#2a2a2a] rounded-full h-2.5 mb-1 overflow-hidden">
          <div
            className="h-2.5 rounded-full animate-pulse-slow"
            style={{
              width: `${level}%`,
              background: `linear-gradient(90deg, hsl(var(--neon-primary)) 0%, hsl(var(--neon-secondary)) 100%)`,
            }}
          ></div>
        </div>
        <span className="text-xs text-gray-400">{level}%</span>
      </div>
    </div>
  )
}

export default SkillCard
