'use client'

import { useState, useEffect } from 'react'

const Specialties = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredSpecialty, setHoveredSpecialty] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('specialties')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const specialties = [
    {
      title: 'Internal Medicine',
      description: 'Comprehensive diagnosis and treatment of adult diseases, focusing on prevention, diagnosis, and treatment of internal disorders.',
      icon: '🔬',
      gradient: 'from-medical-blue to-blue-600',
      features: ['Preventive Care', 'Chronic Disease Management', 'Health Screenings', 'Diagnostic Excellence']
    },
    {
      title: 'Cardiovascular Health',
      description: 'Specialized care for heart and vascular conditions, including prevention strategies and comprehensive cardiac assessments.',
      icon: '❤️',
      gradient: 'from-medical-rose to-red-600',
      features: ['Heart Disease Prevention', 'Hypertension Management', 'Cardiac Screening', 'Lifestyle Counseling']
    },
    {
      title: 'Diabetes Management',
      description: 'Expert care for diabetes patients with personalized treatment plans and continuous monitoring for optimal outcomes.',
      icon: '🩺',
      gradient: 'from-medical-emerald to-green-600',
      features: ['Blood Sugar Control', 'Insulin Management', 'Dietary Planning', 'Complication Prevention']
    },
    {
      title: 'Preventive Medicine',
      description: 'Proactive healthcare focused on disease prevention, early detection, and health promotion for long-term wellness.',
      icon: '🛡️',
      gradient: 'from-medical-gold to-white',
      features: ['Health Screenings', 'Vaccination Programs', 'Risk Assessment', 'Wellness Planning']
    },
    {
      title: 'Geriatric Care',
      description: 'Specialized medical care for older adults, addressing age-related health concerns with compassionate expertise.',
      icon: '👴',
      gradient: 'from-purple-500 to-purple-700',
      features: ['Age-Related Conditions', 'Medication Management', 'Mobility Support', 'Quality of Life']
    },
    {
      title: 'Emergency Medicine',
      description: 'Immediate medical care for urgent and life-threatening conditions with rapid assessment and treatment protocols.',
      icon: '🚨',
      gradient: 'from-orange-500 to-red-600',
      features: ['Trauma Care', 'Critical Conditions', 'Rapid Response', '24/7 Availability']
    }
  ]

  const clinicalInterests = [
    'Evidence-Based Medicine',
    'Patient Safety Protocols',
    'Medical Research',
    'Healthcare Technology',
    'Telemedicine',
    'Chronic Disease Prevention',
    'Medical Education',
    'Healthcare Quality Improvement'
  ]

  return (
    <section id="specialties" className="bg-gradient-to-br from-gray-50 to-blue-50 section-padding">
      <div className="container-width">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold gradient-text mb-6">Medical Specialties & Expertise</h2>
          <p className="text-medical-gray text-xl max-w-3xl mx-auto leading-relaxed">
            Comprehensive medical care across multiple specialties with a focus on patient-centered treatment and evidence-based medicine
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {specialties.map((specialty, index) => (
            <div 
              key={index} 
              className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredSpecialty(index)}
              onMouseLeave={() => setHoveredSpecialty(null)}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${specialty.gradient} rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
                hoveredSpecialty === index ? 'scale-110 shadow-lg' : ''
              }`}>
                <span className="text-2xl">{specialty.icon}</span>
              </div>
              <h3 className="text-xl font-bold gradient-text mb-4">
                {specialty.title}
              </h3>
              <p className="text-medical-gray mb-6 leading-relaxed">
                {specialty.description}
              </p>
              
              {/* Feature list - shown on hover */}
              <div className={`transition-all duration-300 overflow-hidden ${
                hoveredSpecialty === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="border-t border-gray-200 pt-4">
                  <h4 className="font-semibold text-medical-blue mb-3 text-sm uppercase tracking-wide">Key Focus Areas:</h4>
                  <div className="space-y-2">
                    {specialty.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-medical-teal rounded-full mr-3"></div>
                        <span className="text-medical-gray">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Clinical Interests */}
        <div className={`bg-white p-10 rounded-2xl shadow-xl border border-gray-100 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="text-3xl font-bold gradient-text mb-8 text-center">
            Areas of Clinical Interest & Research
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {clinicalInterests.map((interest, index) => (
              <div 
                key={index} 
                className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl hover:from-blue-100 hover:to-teal-100 transition-all duration-300 card-hover border border-blue-100"
              >
                <div className="w-3 h-3 bg-gradient-to-r from-medical-teal to-medical-emerald rounded-full mr-4 flex-shrink-0"></div>
                <span className="text-medical-gray font-medium text-sm">{interest}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className={`mt-16 bg-gradient-to-r from-medical-blue via-medical-navy to-medical-teal p-10 rounded-2xl shadow-2xl text-center transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="text-3xl font-bold text-white mb-6">Personalized Medical Care</h3>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Dr. Ani's multi-specialty approach ensures comprehensive healthcare tailored to your unique medical needs. 
            Experience the difference of personalized, evidence-based medicine.
          </p>
          <button 
            className="btn btn-gold hover:shadow-2xl transform hover:-translate-y-1"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Schedule Your Consultation Today
          </button>
        </div>
      </div>
    </section>
  )
}

export default Specialties