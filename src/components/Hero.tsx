'use client'

import { useEffect, useState } from 'react'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)
  const linkedInUrl = 'https://www.linkedin.com/in/dr-amb-ani-idiong-7a496428/'

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="bg-gradient-to-br from-medical-blue via-medical-navy to-medical-teal text-white pt-24 relative overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/30 rounded-full floating-animation"></div>
        <div className="absolute top-60 -left-40 w-60 h-60 bg-white/20 rounded-full floating-animation" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-20 right-20 w-40 h-40 bg-accent/10 rounded-full floating-animation" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-40 left-20 w-32 h-32 bg-white/25 rounded-full floating-animation" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container-width section-padding relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="mb-6">
              <img 
                src="/logo.png" 
                alt="Dr. Aniefiok Idiong Logo" 
                className="h-16 w-auto mb-4"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-medical-gold to-white bg-clip-text text-transparent">Dr.(Amb) Aniefiok</span><br />
              <span className="text-white">Idiong</span>
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-white/90">
              Family Doctor • Medical Consultant • Professional Healthcare • Community Leader
            </p>
            <p className="text-lg mb-8 leading-relaxed text-white/80">
              Experienced Family Doctor and medical consultant providing comprehensive primary care
              and professional medical consultations for patients in Lagos, Nigeria.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                className="btn btn-gold hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Started Today
              </button>
              <button 
                className="btn border-2 border-white text-white hover:bg-white hover:text-gray-800 hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </button>
            </div>
          </div>
          <div className={`flex justify-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              <a
                href={linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-96 h-96 bg-gradient-to-br from-white to-white/20 rounded-full backdrop-blur-sm border border-white/20 floating-animation hover:scale-[1.02] transition-transform duration-300"
                aria-label="Open Dr. Aniefiok Idiong LinkedIn profile"
              >
                <div className="h-full w-full flex flex-col items-center justify-center px-8 text-center">
                  <div className="bubble-head">
                    <img
                      src="/face.jpeg"
                      alt="Dr. Aniefiok Idiong LinkedIn profile photo"
                      onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/logo.png' }}
                      className="headshot"
                    />
                  </div>
                  <div className="mt-5 text-medical-navy font-semibold text-2xl">Dr. (Amb) Aniefiok Idiong</div>
                  <p className="mt-2 text-sm text-medical-navy/90 leading-relaxed">
                    Family Doctor • Medical Consultant • Community Leader
                  </p>
                  <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#0A66C2] px-4 py-2 text-white text-sm font-medium shadow-lg">
                    <span>in</span>
                    <span>View LinkedIn Profile</span>
                  </div>
                </div>
              </a>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-medical-gold rounded-full flex items-center justify-center shadow-lg">
                <div className="text-2xl">⭐</div>
              </div>
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-[#0A66C2] rounded-full flex items-center justify-center shadow-lg">
                <div className="text-xl font-bold text-white">in</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Business indicators */}
        <div className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center">
            <div className="text-3xl font-bold text-medical-gold mb-2">10+</div>
            <div className="text-blue-200">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-medical-gold mb-2">500+</div>
            <div className="text-blue-200">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-medical-gold mb-2">100%</div>
            <div className="text-blue-200">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-medical-gold mb-2">24/7</div>
            <div className="text-blue-200">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero