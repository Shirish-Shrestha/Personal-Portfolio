"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const Navbar = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-gray-100/50 backdrop-blur-sm border-b border-gray-200" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <a 
            href="#home" 
            className="text-gray-900 font-medium text-lg tracking-tight hover:text-gray-600 transition-colors duration-200"
          >
            Shirish Shrestha
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-normal transition-colors duration-200 relative ${
                  activeSection === link.href.substring(1)
                    ? "text-gray-900" 
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {link.name}
                {activeSection === link.href.substring(1) && (
                  <span className="absolute -bottom-1 left-0 w-full h-px bg-gray-900"></span>
                )}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 hover:text-gray-900 transition-colors duration-200"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-gray-50 border-b border-gray-200">
          <div className="container mx-auto px-6 py-8 max-w-6xl">
            <nav className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-lg font-normal transition-colors duration-200 ${
                    activeSection === link.href.substring(1)
                      ? "text-gray-900"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                  onClick={closeMenu}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar