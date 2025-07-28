import { Github, Linkedin, Facebook, Instagram, Twitter } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: "GitHub", icon: <Github size={18} />, url: "https://github.com/Shirish-Shrestha" },
    { name: "LinkedIn", icon: <Linkedin size={18} />, url: "https://linkedin.com/in/shirish-shrestha" },
    { name: "Facebook", icon: <Facebook size={18} />, url: "https://facebook.com/shirishshrestha25" },
    { name: "Instagram", icon: <Instagram size={18} />, url: "https://instagram.com/shirish_shresthaa" },
    { name: "Twitter", icon: <Twitter size={18} />, url: "https://twitter.com/Shirish_Stha001" },
  ]

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          {/* Copyright - Left Side */}
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-600 font-light">
              © {currentYear} Shirish Shrestha
            </p>
          </div>

          {/* Social Links - Right Side */}
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer