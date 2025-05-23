import { Github, Linkedin, Facebook, Instagram, Twitter } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: "GitHub", icon: <Github size={20} />, url: "https://github.com/Shirish-Shrestha" },
    { name: "LinkedIn", icon: <Linkedin size={20} />, url: "https://linkedin.com/in/shirish-shrestha" },
    { name: "Facebook", icon: <Facebook size={20} />, url: "https://facebook.com/shirishshrestha25" },
    { name: "Instagram", icon: <Instagram size={20} />, url: "https://instagram.com/shirish_shresthaa" },
    { name: "Twitter", icon: <Twitter size={20} />, url: "https://twitter.com/Shirish_Stha001" },
  ]

  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © {currentYear} Shirish Shrestha. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
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
