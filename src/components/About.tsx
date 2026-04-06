'use client'

import { useState, useEffect } from 'react'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('about')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="bg-gray-50 section-padding">
      <div className="container-width">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-6 sm:mb-8">About Dr. Aniefiok Idiong</h2>
            <p className="text-medical-gray mb-5 sm:mb-6 text-base sm:text-lg leading-relaxed">
              Dr. Aniefiok Idiong is an experienced Family Doctor and medical consultant
              providing comprehensive healthcare services in Lagos, Nigeria. With specialized training
              in family medicine and extensive experience in medical consultation, Dr. Idiong focuses on primary care, women's health, and professional medical guidance.
            </p>
            <p className="text-medical-gray mb-5 sm:mb-6 text-base sm:text-lg leading-relaxed">
              Specializing in women's reproductive health, primary care, and medical consultations,
              Dr. Idiong provides personalized medical attention and professional healthcare guidance,
              with particular expertise in women's health and general practice advisory services.
            </p>
            <p className="text-medical-gray mb-7 sm:mb-8 text-base sm:text-lg leading-relaxed">
              Dr. Idiong is committed to creating a comfortable and professional environment where 
              patients can discuss their health concerns and receive quality medical care and expert 
              consultation services.
            </p>
            
            {/* Key Attributes */}
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-medical-teal rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-medical-gray font-medium">Registered Company</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-medical-emerald rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-medical-gray font-medium">Professional Services</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-medical-gold rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span style={{color: 'oklch(0.35 0.15 15)'}} className="font-medium">Quality Focused</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-medical-blue rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span style={{color: 'oklch(0.35 0.15 15)'}} className="font-medium">Client Satisfaction</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3 sm:gap-6">
              <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-white to-accent/5 rounded-xl shadow-lg card-hover border border-white/20">
                <div className="text-3xl font-bold gradient-text mb-2">10+</div>
                <div style={{color: 'oklch(0.35 0.15 15)'}} className="font-medium">Years in Business</div>
              </div>
              <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-white to-accent/5 rounded-xl shadow-lg card-hover border border-white/20">
                <div className="text-3xl font-bold gradient-text mb-2">500+</div>
                <div className="text-medical-gray font-medium">Projects Completed</div>
              </div>
            </div>
          </div>
          
          <div className={`flex justify-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              <div className="w-full max-w-md">
                <div className="bg-gradient-to-br from-white to-accent/5 rounded-2xl p-6 sm:p-8 text-center border border-accent/10 card-hover">
                  <div className="card-face mx-auto mb-6 floating-animation">
                    <img
                      src="/face.jpeg"
                      alt="Dr. Aniefiok headshot"
                      onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/face.jpg' }}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold gradient-text mb-4">Dr. Aniefiok Idiong Medical Practice</h3>
                  <p className="text-medical-gray mb-6">
                    "Excellence in business solutions, commitment to client success, and innovation in service delivery."
                  </p>
                  <div className="flex justify-center space-x-4">
                    <div className="w-12 h-12 bg-medical-gold/20 rounded-full flex items-center justify-center">
                      <span className="text-medical-gold text-xl">🎯</span>
                    </div>
                    <div className="w-12 h-12 bg-medical-teal/20 rounded-full flex items-center justify-center">
                      <span className="text-medical-teal text-xl">💼</span>
                    </div>
                    <div className="w-12 h-12 bg-medical-blue/20 rounded-full flex items-center justify-center">
                      <span className="text-medical-blue text-xl">⭐</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-16 h-12 sm:w-20 sm:h-16 bg-medical-gold rounded-full flex items-center justify-center shadow-xl floating-animation">
                 <img
                      src="/logo.png"
                      alt="Dr. Aniefiok headshot"
                      onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/face.jpg' }}
                      className="w-full h-full object-cover"
                    />
              </div>
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-10 h-10 sm:w-12 sm:h-12 bg-medical-emerald rounded-full flex items-center justify-center shadow-lg floating-animation" style={{ animationDelay: '1s' }}>
                <span className="text-white">💡</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About