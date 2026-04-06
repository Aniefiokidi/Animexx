'use client'

import { useState, useEffect } from 'react'

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  const quickLinks = [
    { name: 'About Dr. Idiong', href: '#about' },
    { name: 'Medical Services', href: '#services' },
    { name: 'Qualifications', href: '#portfolio' },
    { name: 'Book Consultation', href: '#contact' }
  ]

  const medicalServices = [
    'General Practice Consultations',
    'Reproductive Health Services',
    'Medical Consultation Services',
    'Prenatal & Pregnancy Care',
    'Professional Medical Consultations',
    'Healthcare Advisory Services'
  ]

  const contactInfo = [
    { icon: '📍', text: 'Lagos, Nigeria' },
    { icon: '📞', text: '08023042500 | 08033008282' },
    { icon: '✉️', text: 'animexx22@yahoo.co.uk' },
    { icon: '🕒', text: 'Mon-Fri: 8AM-5PM' }
  ]

  return (
    <footer className="bg-red-200" style={{color: 'oklch(0.35 0.15 15)'}}>
      {/* Main Footer Content */}
      <div className="container-width py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Practice Information */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/logo.png" 
                alt="ANIMEXX NIGERIA LIMITED Logo" 
                className="h-12 w-auto"
              />
            <h3 className="text-2xl font-bold gradient-text bg-gradient-to-r from-red-400 to-medical-rose bg-clip-text text-transparent">
               ANIMEXX NIGERIA LIMITED
              </h3>
            </div>
            <p className="mb-6 leading-relaxed" style={{color: 'oklch(0.35 0.15 15)'}}>
              Experienced Family Doctor and medical consultant providing comprehensive primary care
              and professional medical consultation services.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 cursor-pointer">
                <span className="text-sm">📧</span>
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 cursor-pointer">
                <span className="text-sm">📱</span>
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 cursor-pointer">
                <span className="text-sm">🔗</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text--primary">Quick Navigation</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text--primary hover:text-white transition-colors duration-300 hover:pl-2 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 text--primary">Medical Services</h4>
            <ul className="space-y-3">
              {medicalServices.map((service) => (
                <li key={service} className="flex items-start">
                  <div className="w-2 h-2 bg-medical-teal rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-600 text-sm leading-relaxed">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-bold mb-6 text--primary">Contact Information</h4>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-lg mr-3">{info.icon}</span>
                  <span className="text--primary text-sm leading-relaxed">{info.text}</span>
                </div>
              ))}
            </div>

            {/* Business Hours */}
            <div className="mt-6 p-4 bg-blue-600/20 border border-blue-400/30 rounded-lg">
              <h5 className="font-bold text--primary mb-2">💼 Business Hours</h5>
              <p className="text-blue-100 text-sm">
                Professional Consulting Available<br />
                <span className="font-medium">Monday - Friday: 8AM - 5PM</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Credentials Bar */}
      <div className="border-t border-white/10">
        <div className="container-width py-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <div className="text-2xl font-bold text--primary mb-1">10+</div>
              <div className="text--primary text-sm">Years Experience</div>
            </div>
            <div className="p-4">
              <div className="text-2xl font-bold text--primary mb-1">500+</div>
              <div className="text--primary text-sm">Projects Completed</div>
            </div>
            <div className="p-4">
              <div className="text-2xl font-bold text--primary mb-1">98%</div>
              <div className="text--primary text-sm">Success Rate</div>
            </div>
            <div className="p-4">
              <div className="text-2xl font-bold text--primary mb-1">24/7</div>
              <div className="text--primary text-sm">Business Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="container-width py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text--primary text-sm mb-4 md:mb-0">
              © {currentYear} ANIMEXX NIGERIA LIMITED. All rights reserved.
            </div>
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-xs text--primary">
              <span>Licensed General Practitioner</span>
              <span className="hidden md:inline">•</span>
              <span>Medical Consultant</span>
              <span className="hidden md:inline">•</span>
              <span>Professional Healthcare Services</span>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-white/5 text-center">
            <p className="text-xs text--primary leading-relaxed">
              <strong>Medical Disclaimer:</strong> The information provided on this website is for educational purposes only. 
              Always consult with Dr. Aniefiok Idiong or a qualified healthcare provider for proper medical diagnosis and treatment. 
              This website does not provide medical advice or replace professional medical consultation.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-medical-gold to-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-40"
        aria-label="Scroll to top"
      >
        <span className="text-white text-lg">↑</span>
      </button>
    </footer>
  )
}

export default Footer