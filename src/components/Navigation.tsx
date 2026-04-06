'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const navigation = [
    { name: 'About Dr. Idiong', href: '#about' },
    { name: 'Medical Services', href: '#services' },
    { name: 'Qualifications', href: '#portfolio' },
    { name: 'Book Consultation', href: '#contact' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-xl' 
        : 'bg-white shadow-lg'
    }`}>
      <div className="container-width px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4">
          <div className={`flex items-center space-x-3 transition-all duration-300`}>
            <img 
              src="/logo.png" 
              alt="ANIMEXX NIGERIA LIMITED Logo" 
              className={`w-auto transition-all duration-300 ${
                isScrolled ? 'h-8' : 'h-10'
              }`}
            />
            <span className={`transition-all duration-300 ${
              isScrolled ? 'text-base lg:text-lg' : 'text-lg lg:text-xl'
            } font-bold gradient-text hidden sm:block`}>
             ANIMEXX NIGERIA LIMITED
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="transition-all duration-300 hover:scale-110 font-medium relative group"
                style={{color: 'oklch(0.35 0.15 15)'}}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-white to-accent transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Mobile quick actions */}
          <div className="md:hidden flex items-center gap-3">
            <Link
              href="#contact"
              className="text-xs font-semibold px-3 py-2 rounded-full bg-medical-blue text-white"
            >
              Book Appointment
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="focus:outline-none transition-colors duration-300"
              style={{color: 'oklch(0.35 0.15 15)'}}
            >
              <svg className="h-6 w-6 transform transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
          <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-80 pb-4' : 'max-h-0'
        }`}>
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block py-3 transition-colors duration-300 hover:pl-4 font-medium text-center"
              style={{color: 'oklch(0.35 0.15 15)'}}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navigation