import { ArrowRight } from "lucide-react"
import pp3 from "../assets/pp3.jpg"

const Hero = () => {
  return (
    <div className="relative flex items-center min-h-screen pt-16 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-gray-600 dark:text-white leading-tight mb-4">
              Hi, I'm <span className="text-gray-400 dark:text-gray-300">Shirish Shrestha</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl font-medium text-gray-600 dark:text-gray-300 mb-6">
              Frontend Developer
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
              I build responsive, accessible, and performant web applications with modern technologies. Passionate about
              creating exceptional user experiences through clean code and thoughtful design.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 text-white font-medium rounded-md transition-colors"
              >
                View My Work <ArrowRight size={18} className="ml-2" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-700 font-medium rounded-md transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
              <img src={pp3} alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
