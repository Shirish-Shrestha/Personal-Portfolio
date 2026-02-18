import { ArrowRight } from "lucide-react"
import pp3 from "../assets/pp3.jpg"

const Hero = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center pt-20 pb-16">
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-light text-gray-900 tracking-tight">
                Shirish Shrestha
              </h1>
              <div className="w-12 h-0.5 bg-gray-400"></div>
              <h2 className="text-xl text-gray-600 font-normal tracking-wide">
                Frontend Developer
              </h2>
            </div>
            
            <p className="text-gray-700 text-lg leading-relaxed max-w-md font-light">
              Crafting digital experiences through clean code and thoughtful design. 
              Focused on building accessible, performant web applications.
            </p>

            <div className="flex flex-wrap gap-6 pt-4">
              <a
                href="#projects"
                className="group inline-flex items-center text-gray-900 font-medium hover:text-gray-600 transition-colors duration-200"
              >
                View Work 
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <a
                href="/My_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 font-medium hover:text-gray-900 transition-colors duration-200 border-b border-gray-300 hover:border-gray-900"
              >
                View Resume
              </a>
              <a
                href="#contact"
                className="text-gray-600 font-medium hover:text-gray-900 transition-colors duration-200 border-b border-gray-300 hover:border-gray-900"
              >
                Get in touch
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-72 h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden bg-gray-200">
              <img 
                src={pp3} 
                alt="Shirish Shrestha" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" 
              />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Hero