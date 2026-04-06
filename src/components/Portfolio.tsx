'use client'

import { useState, useEffect } from 'react'

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeCategory, setActiveCategory] = useState('all')

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('portfolio')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      title: 'Medical Degree (MBBS)',
      category: 'education',
      description: 'Bachelor of Medicine, Bachelor of Surgery from recognized medical institution',
      icon: '🎓',
      gradient: 'from-medical-blue to-blue-600',
      status: 'Completed',
      year: 'Medical School'
    },
    {
      title: 'Family Medicine Specialization',
      category: 'specialization',
      description: 'Specialized training and certification in Family Medicine and general practice',
      icon: '⚕️',
      gradient: 'from-medical-teal to-teal-600',
      status: 'Certified',
      year: 'Post-Graduate'
    },
    {
      title: 'General Practice Certification',
      category: 'specialization',
      description: 'Additional training in general medicine and common disease management',
      icon: '🩺',
      gradient: 'from-medical-rose to-red-600',
      status: 'Certified',
      year: 'Additional Training'
    },
    {
      title: 'Malaria Treatment Expertise',
      category: 'specialization',
      description: 'Extensive experience in malaria diagnosis, treatment, and prevention',
      icon: '🦟',
      gradient: 'from-medical-rose to-red-600',
      status: 'Expert Level',
      year: 'Clinical Practice'
    },
    {
      title: 'Professional Registration',
      category: 'certification',
      description: 'Licensed medical practitioner registered with Nigerian Medical Association',
      icon: '📋',
      gradient: 'from-medical-gold to-yellow-600',
      status: 'Active',
      year: 'Current'
    },
    {
      title: 'Clinical Experience',
      category: 'experience',
      description: 'Years of clinical practice treating common diseases in men and women',
      icon: '🏥',
      gradient: 'from-medical-teal to-medical-blue',
      status: 'Active Practice',
      year: 'Years of Experience'
    },
    {
      title: 'Patient Care Excellence',
      category: 'practice',
      description: 'Commitment to providing compassionate and comprehensive medical care',
      icon: '💝',
      gradient: 'from-orange-500 to-red-600',
      status: 'Ongoing',
      year: 'Daily Practice'
    }
  ]

  const categories = [
    { id: 'all', name: 'All Credentials' },
    { id: 'education', name: 'Education' },
    { id: 'specialization', name: 'Specialization' },
    { id: 'certification', name: 'Certifications' },
    { id: 'experience', name: 'Experience' },
    { id: 'practice', name: 'Practice' }
  ]

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

  return (
    <section id="portfolio" className="bg-gradient-to-br from-gray-50 to-blue-50 section-padding">
      <div className="container-width">
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-5 sm:mb-6">Medical Qualifications & Specializations</h2>
          <p className="text-medical-gray text-base sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Dr. Aniefiok Idiong's medical education, family medicine specialization, and clinical expertise in primary care and general medicine
          </p>
        </div>

        {/* Category Filter */}
        <div className={`flex justify-center mb-10 sm:mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gray-100 rounded-xl p-1 flex flex-wrap justify-center gap-1 max-w-full">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm ${
                  activeCategory === category.id
                    ? 'bg-white gradient-text shadow-md'
                    : 'text-medical-gray hover:text-medical-blue'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.title} 
              className={`bg-white p-5 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-accent/10 text-center md:text-left ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-r from-white to-accent/20 rounded-2xl flex items-center justify-center mb-6 mx-auto md:mx-0`}>
                <span className="text-2xl">{project.icon}</span>
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg sm:text-xl font-bold gradient-text pr-2">
                  {project.title}
                </h3>
                <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                  project.status === 'Completed' ? 'bg-medical-gold/20 text-medical-gold' :
                  project.status === 'Ongoing' ? 'bg-blue-100 text-blue-700' :
                  project.status === 'Active' ? 'bg-purple-100 text-purple-700' :
                  'bg-gray-100 text-gray-700'
                }`}>
                  {project.status}
                </span>
              </div>
              
              <p className="text-medical-gray mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex items-center justify-between text-sm text-medical-gray">
                <span className="capitalize">{project.category}</span>
                <span>{project.year}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <div className={`mt-14 sm:mt-16 bg-gradient-to-r from-gray-100 to-gray-200 p-6 sm:p-10 rounded-2xl shadow-lg transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8 text-center">
            Company Achievements
          </h3>
          <div className="grid md:grid-cols-4 gap-6 text-gray-700">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">10+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio