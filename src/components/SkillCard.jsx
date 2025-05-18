const SkillCard = ({ skill }) => {
  const { name, icon, color } = skill

  return (
    <div
      className="tech-card p-6 transition-all duration-300 relative group"
      style={{
        "--icon-color": color || "hsl(var(--neon-primary))",
      }}
    >
      <div className="flex flex-col items-center">
        <div className="text-5xl mb-4">{icon}</div>
        <h3 className="text-lg font-medium text-white">{name}</h3>
      </div>

      {/* Custom border glow effect that matches the icon color */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none"
        style={{
          boxShadow: `0 0 15px 2px ${color}`,
          border: `1px solid ${color}`,
        }}
      ></div>
    </div>
  )
}

export default SkillCard
