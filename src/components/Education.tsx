'use client'

import { useState, useEffect } from 'react'

const Education = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState('education')

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('education')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const education = [
    {
      degree: 'Bachelor of Medicine',
      institution: 'University of Calabar',
      year: '2008',
      location: 'Calabar, Nigeria',
      description: 'Completed foundational medical training in clinical medicine and patient care.'
    },
    {
      degree: 'Residency in Internal Medicine',
      institution: 'Lagos University Teaching Hospital',
      year: '2008-2012',
      location: 'Lagos, Nigeria',
      description: 'Chief Resident in final year, focused on patient care excellence'
    },
    {
      degree: 'Fellowship in Specialized Medicine',
      institution: 'Advanced Medical Institute',
      year: '2013',
      location: 'Abuja, Nigeria',
      description: 'Advanced training in diagnostic procedures and patient management'
    }
  ]

  const certifications = [
    'Board Certification in Internal Medicine',
    'Advanced Cardiac Life Support (ACLS)',
    'Basic Life Support (BLS) Instructor',
    'Medical Ethics and Patient Safety Certification',
    'Continuing Medical Education (CME) - 150+ hours annually'
  ]

  const memberships = [
    'Nigerian Medical Association (NMA)',
    'Association of General and Private Medical Practitioners of Nigeria',
    'International Society of Internal Medicine',
    'Medical and Dental Consultants Association of Nigeria'
  ]

  return (
    <section id="education" className="bg-white section-padding">
      <div className="container-width">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold gradient-text mb-6">Education & Professional Credentials</h2>
          <p className="text-medical-gray text-xl max-w-3xl mx-auto leading-relaxed">
            Academic excellence and professional qualifications that ensure the highest standard of medical care
          </p>
        </div>

        {/* Tab Navigation */}
        <div className={`flex justify-center mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gray-100 rounded-xl p-1 flex space-x-1">
            <button
              onClick={() => setActiveTab('education')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === 'education'
                  ? 'bg-white gradient-text shadow-md'
                  : 'text-medical-gray hover:text-medical-blue'
              }`}
            >
              Education
            </button>
            <button
              onClick={() => setActiveTab('certifications')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === 'certifications'
                  ? 'bg-white gradient-text shadow-md'
                  : 'text-medical-gray hover:text-medical-blue'
              }`}
            >
              Certifications
            </button>
            <button
              onClick={() => setActiveTab('memberships')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === 'memberships'
                  ? 'bg-white gradient-text shadow-md'
                  : 'text-medical-gray hover:text-medical-blue'
              }`}
            >
              Memberships
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-1 gap-12">
          {/* Education Tab */}
          {activeTab === 'education' && (
            <div className="fade-in">
              <h3 className="text-2xl font-bold gradient-text mb-8 text-center">Academic Background</h3>
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div key={index} className="bg-gradient-to-r from-white to-blue-50 border-l-4 border-medical-teal pl-8 pr-6 py-6 rounded-r-xl shadow-lg card-hover">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h4 className="font-bold text-xl text-gray-800 mb-2 md:mb-0">{edu.degree}</h4>
                      <span className="text-medical-gold font-bold bg-medical-gold/10 px-3 py-1 rounded-full text-sm">
                        {edu.year}
                      </span>
                    </div>
                    <p className="text-medical-blue font-semibold text-lg mb-2">{edu.institution}</p>
                    <p className="text-medical-gray mb-3">{edu.location}</p>
                    <p className="text-gray-700 italic">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Certifications Tab */}
          {activeTab === 'certifications' && (
            <div className="fade-in">
              <h3 className="text-2xl font-bold gradient-text mb-8 text-center">Professional Certifications</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start space-x-4 p-6 bg-gradient-to-r from-white to-teal-50 rounded-xl shadow-lg card-hover border border-medical-teal/10">
                    <div className="w-6 h-6 bg-gradient-to-r from-medical-teal to-medical-emerald rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <p className="text-medical-gray font-medium leading-relaxed">{cert}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Memberships Tab */}
          {activeTab === 'memberships' && (
            <div className="fade-in">
              <h3 className="text-2xl font-bold gradient-text mb-8 text-center">Professional Memberships</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {memberships.map((membership, index) => (
                  <div key={index} className="flex items-start space-x-4 p-6 bg-gradient-to-r from-white to-blue-50 rounded-xl shadow-lg card-hover border border-medical-blue/10">
                    <div className="w-6 h-6 bg-gradient-to-r from-medical-blue to-medical-navy rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">★</span>
                    </div>
                    <p className="text-medical-gray font-medium leading-relaxed">{membership}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Achievement Highlights */}
        <div className={`mt-16 bg-gradient-to-r from-medical-blue to-medical-teal p-8 rounded-2xl shadow-2xl transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Professional Achievements
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-white">
            <div className="text-center">
              <div className="text-3xl font-bold text-medical-gold mb-2">Top 5%</div>
              <div className="text-blue-100">Medical School Ranking</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-medical-gold mb-2">15+</div>
              <div className="text--primary">Years Continuous Practice</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-medical-gold mb-2">150+</div>
              <div className="text-blue-100">CME Hours Annually</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education