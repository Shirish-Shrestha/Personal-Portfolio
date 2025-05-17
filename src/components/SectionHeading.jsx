const SectionHeading = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-white mb-2 relative inline-block">
        {title}
        <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00ffaa] to-[#d580ff]"></span>
      </h2>
      {subtitle && <p className="text-gray-400 max-w-2xl mx-auto mt-4">{subtitle}</p>}
    </div>
  )
}

export default SectionHeading
