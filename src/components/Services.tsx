'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface Service {
  title: string
  description: string
  icon: string
  gradient: string
  features: string[]
  pricing: string
}

const Services = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeService, setActiveService] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('services')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const services: Service[] = [
    {
      title: 'General Practice Consultations',
      description: 'Comprehensive primary care and general practice consultations for routine check-ups, preventive care, and chronic disease management.',
      icon: '🌿',
      gradient: 'from-medical-blue to-blue-600',
      features: [
        'Annual Health Exams',
        'Physical Examinations',
        'Preventive Screenings',
        'Chronic Disease Management',
        'Health Counseling'
      ],
      pricing: 'Consultation fee applies'
    },
    {
      title: 'Reproductive Health Services',
      description: 'Specialized care for women\'s reproductive health issues, fertility concerns, and family planning guidance.',
      icon: '💕',
      gradient: 'from-medical-rose to-red-600',
      features: [
        'Fertility Assessment',
        'Menstrual Disorder Management',
        'Family Planning Services',
        'Preconception Counseling',
        'Hormonal Health Evaluation'
      ],
      pricing: 'Specialized consultation rates'
    },
    {
      title: 'Prenatal & Pregnancy Care',
      description: 'Complete prenatal care and monitoring throughout pregnancy to ensure the health of both mother and baby.',
      icon: '🤱',
      gradient: 'from-purple-500 to-purple-700',
      features: [
        'Prenatal Check-ups',
        'Pregnancy Monitoring',
        'Ultrasound Services',
        'High-Risk Pregnancy Care',
        'Delivery Planning'
      ],
      pricing: 'Package rates available'
    },
    {
      title: 'General Medical Consultations',
      description: 'Professional medical consultation and advisory services for various health concerns and comprehensive medical guidance.',
      icon: '🩺',
      gradient: 'from-medical-teal to-teal-600',
      features: [
        'Medical Assessment & Consultation',
        'Health Advisory Services',
        'Treatment Planning',
        'Medical Opinion & Advice',
        'Healthcare Planning'
      ],
      pricing: 'Standard consultation rates'
    }
  ]

  const handleBookConsultation = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="services" className="bg-white section-padding" aria-labelledby="services-heading">
      <div className="container-width">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 id="services-heading" className="text-4xl font-bold gradient-text mb-6">
            Medical Services
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{color: 'oklch(0.35 0.15 15)'}}>
            Comprehensive women's health care and professional medical consultation services for all your healthcare needs
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Services Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold gradient-text mb-6">Our Services</h3>
              <nav className="space-y-2" role="tablist" aria-label="Medical services">
                {services.map((service, index) => (
                  <button
                    key={service.title}
                    onClick={() => setActiveService(index)}
                    role="tab"
                    aria-selected={activeService === index}
                    aria-controls={`service-panel-${index}`}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                      activeService === index 
                        ? 'bg-gradient-to-r from-medical-blue to-medical-teal text-white shadow-lg transform scale-105'
                        : 'hover:bg-gray-100 hover:text-medical-blue text-medical-gray'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl" aria-hidden="true">{service.icon}</span>
                      <span className="font-medium text-sm">{service.title}</span>
                    </div>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Active Service Details */}
          <div className="lg:col-span-2">
            <div 
              id={`service-panel-${activeService}`}
              role="tabpanel"
              aria-labelledby={`service-tab-${activeService}`}
              className={`bg-white rounded-2xl shadow-xl p-8 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
            >
              <div className={`w-20 h-20 bg-gradient-to-r ${services[activeService].gradient} rounded-2xl flex items-center justify-center mb-6`}>
                <span className="text-3xl" aria-hidden="true">{services[activeService].icon}</span>
              </div>
              
              <h3 className="text-3xl font-bold gradient-text mb-4">
                {services[activeService].title}
              </h3>
              
              <p className="text-medical-gray text-lg mb-6 leading-relaxed">
                {services[activeService].description}
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl font-semibold gradient-text mb-4">Service Features:</h4>
                  <ul className="space-y-3">
                    {services[activeService].features.map((feature) => (
                      <li key={feature} className="flex items-center text-medical-gray">
                        <div className="w-2 h-2 bg-gradient-to-r from-white to-accent rounded-full mr-3" aria-hidden="true"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold gradient-text mb-4">Pricing:</h4>
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <p className="text-medical-gray mb-4">{services[activeService].pricing}</p>
                    <button 
                      onClick={handleBookConsultation}
                      className="w-full bg-gradient-to-r from-medical-blue to-medical-teal text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                      aria-label={`Book consultation for ${services[activeService].title}`}
                    >
                      Book Consultation
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`mt-16 bg-gradient-to-r from-gray-100 to-gray-200 p-10 rounded-2xl shadow-lg transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center text-gray-700">
            <h3 className="text-3xl font-bold mb-4 text-gray-800">Need Medical Consultation?</h3>
            <p className="text-xl mb-8 text-gray-600">
              Contact us today for professional medical consultation and comprehensive healthcare services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleBookConsultation}
                className="bg-medical-blue text-white font-semibold py-4 px-8 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                aria-label="Book a medical consultation"
              >
                Book Consultation
              </button>
              <Link 
                href="#contact"
                className="border-2 border-gray-400 text-gray-700 font-semibold py-4 px-8 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 inline-block text-center"
                aria-label="View contact information"
              >
                Contact Information
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services