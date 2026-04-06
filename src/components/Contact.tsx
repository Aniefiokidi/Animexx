'use client'

import { useState, useEffect } from 'react'

const Contact = () => {
  const primaryPhoneLocal = '08023042500'
  const secondaryPhoneLocal = '08033008282'
  const primaryPhoneIntl = '2348023042500'
  const secondaryPhoneIntl = '2348033008282'
  const primaryWhatsAppUrl = `https://wa.me/${primaryPhoneIntl}`
  const secondaryWhatsAppUrl = `https://wa.me/${secondaryPhoneIntl}`
  const primaryDialUrl = `tel:+${primaryPhoneIntl}`
  const secondaryDialUrl = `tel:+${secondaryPhoneIntl}`

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    preferredDate: '',
    urgency: 'routine'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
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

    const element = document.getElementById('contact')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 15000) // 15s client timeout
    try {
      console.log('Sending contact form to /api/send-email', formData)
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
        signal: controller.signal,
      })

      clearTimeout(timeoutId)

      const raw = await res.text()
      let json: any = null
      if (raw) {
        try {
          json = JSON.parse(raw)
        } catch {
          json = null
        }
      }

      if (!res.ok || !json.ok) {
        throw new Error(json?.error || `Failed to send email (HTTP ${res.status})`)
      }

      alert(`Thank you ${formData.name}! Your message was sent — Dr. Idiong's office will contact you within 24 hours.`)
      setFormData({ 
        name: '', 
        email: '', 
        phone: '', 
        message: '', 
        preferredDate: '',
        urgency: 'routine'
      })
    } catch (err: any) {
      if (err.name === 'AbortError') {
        console.error('Request aborted (timeout)')
        alert('Request timed out. Please check your network and try again.')
      } else {
        console.error('Send email error:', err)
        const msg = err?.message || String(err) || 'There was an error sending your message.'
        alert(`${msg} Please try again or contact the office directly via email or phone.`)
      }
    } finally {
      clearTimeout(timeoutId)
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="bg-gradient-to-br from-gray-50 to-blue-50 section-padding">
      <div className="container-width">
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-5 sm:mb-6">Contact Dr. Aniefiok Idiong</h2>
          <p className="text-medical-gray text-base sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Schedule your consultation or get in touch for professional primary care and women's health services
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Contact Information */}
          <div className={`transition-all duration-1000 delay-200 text-center lg:text-left ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h3 className="text-2xl sm:text-3xl font-bold gradient-text mb-6 sm:mb-8">Consultation & Contact</h3>
            
            <div className="space-y-8">
              <div className="flex items-start p-5 sm:p-6 bg-white rounded-xl shadow-lg card-hover border border-accent/10 text-left">
                <div className="w-12 h-12 bg-gradient-to-r from-white to-accent/20 rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                  <span className="text-white text-xl">📍</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-800 mb-2">Business Address</h4>
                  <p className="text-medical-gray leading-relaxed">
                    Dr. Aniefiok Idiong Medical Practice<br />
                    Business Center, Lagos<br />
                    Lagos State, Nigeria
                  </p>
                </div>
              </div>

              <div className="flex items-start p-5 sm:p-6 bg-white rounded-xl shadow-lg card-hover border border-teal-100 text-left">
                <div className="w-12 h-12 bg-gradient-to-r from-medical-teal to-medical-emerald rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                  <span className="text-white text-xl">📞</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-800 mb-2">Phone Numbers</h4>
                  <p className="text-medical-gray mb-1">
                    <span className="font-medium">Primary (WhatsApp):</span>{' '}
                    <a
                      href={primaryWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-medical-teal hover:text-medical-blue underline"
                    >
                      {primaryPhoneLocal}
                    </a>
                  </p>
                  <p className="text-medical-gray mb-1">
                    <span className="font-medium">Secondary (WhatsApp):</span>{' '}
                    <a
                      href={secondaryWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-medical-teal hover:text-medical-blue underline"
                    >
                      {secondaryPhoneLocal}
                    </a>
                  </p>
                  <p className="text-medical-gray"><span className="font-medium">Available:</span> Mon-Fri 8AM-6PM</p>
                </div>
              </div>

              <div className="flex items-start p-5 sm:p-6 bg-white rounded-xl shadow-lg card-hover border border-gold-100 text-left">
                <div className="w-12 h-12 bg-gradient-to-r from-medical-gold to-white rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                  <span className="text-white text-xl">✉️</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-800 mb-2">Email Contact</h4>
                  <p style={{color: 'oklch(0.35 0.15 15)'}}className="text-medical-gray mb-1"><span className="font-medium">Business Email:</span> info@animexx.com.ng</p>
                  <p style={{color: 'oklch(0.35 0.15 15)'}} className="mb-1"><span className="font-medium">Alternate Email:</span> animexx22@yahoo.co.uk</p>
                  <p className="text-medical-gray mb-1"><span className="font-medium">Response Time:</span> Within 24 hours</p>
                  <p className="text-medical-gray"><span className="font-medium">Available:</span> Monday - Friday</p>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="mt-8 bg-white p-5 sm:p-8 rounded-xl shadow-lg border border-gray-100">
              <h4 className="font-bold text-xl gradient-text mb-6">Business Hours</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                    <span className="font-medium text-gray-800">Monday - Friday:</span>
                    <span className="text-medical-gray">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                    <span className="font-medium text-gray-800">Saturday:</span>
                    <span className="text-medical-gray">9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                    <span className="font-medium text-gray-800">Sunday:</span>
                    <span className="text-medical-rose">Closed</span>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-4 rounded-lg">
                  <h5 className="font-bold text-medical-blue mb-2">Business Services</h5>
                  <p className="text-sm text-medical-gray">Professional business solutions available during business hours. Contact us for consultations and services.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-white p-5 sm:p-8 lg:p-10 rounded-2xl shadow-2xl border border-gray-100">
              <h3 className="text-2xl sm:text-3xl font-bold gradient-text mb-6 sm:mb-8">Get In Touch With Us</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-medical-blue mb-3">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-medical-blue focus:border-medical-blue transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-medical-blue mb-3">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-medical-blue focus:border-medical-blue transition-all duration-300"
                      placeholder="080xxxxxxxx"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-medical-blue mb-3">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-medical-blue focus:border-medical-blue transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="grid md:grid-cols-1 gap-4">
                  <div>
                    <label htmlFor="urgency" className="block text-sm font-bold text-medical-blue mb-3">
                      Priority Level
                    </label>
                    <select
                      id="urgency"
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-medical-blue focus:border-medical-blue transition-all duration-300"
                    >
                      <option value="routine">Standard</option>
                      <option value="urgent">High Priority</option>
                      <option value="emergency">Urgent</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="preferredDate" className="block text-sm font-bold text-medical-blue mb-3">
                    Preferred Contact Date
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-medical-blue focus:border-medical-blue transition-all duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-medical-blue mb-3">
                    Message & Requirements *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please describe your symptoms, medical concerns, or consultation request. Dr. Idiong's office will review your message and contact you with the next steps."
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-medical-blue focus:border-medical-blue transition-all duration-300 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full btn btn-primary text-base sm:text-lg py-3 sm:py-4 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-2xl transform hover:-translate-y-1'}`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                      Sending Request...
                    </div>
                  ) : (
                    'Send Message to Dr. Idiong'
                  )}
                </button>
              </form>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-medical-gray text-center">
                  <span className="font-medium">Professional & Confidential:</span> Your business information is secure and will only be used to provide you with the requested services.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Contact Actions */}
        <div className={`mt-12 sm:mt-16 grid md:grid-cols-3 gap-5 sm:gap-6 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center card-hover border border-medical-gold/20">
            <div className="text-3xl mb-4">💬</div>
            <h4 className="font-bold text-medical-emerald mb-3">WhatsApp Consultation</h4>
            <p className="text-medical-gray text-sm mb-4">Quick questions and appointment scheduling via WhatsApp</p>
            <div className="flex flex-col gap-3">
              <a
                href={primaryWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-medical-teal text-white hover:bg-medical-blue text-sm"
              >
                Chat Primary: {primaryPhoneLocal}
              </a>
              <a
                href={secondaryWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-medical-teal text-white hover:bg-medical-blue text-sm"
              >
                Chat Secondary: {secondaryPhoneLocal}
              </a>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg text-center card-hover border border-blue-100">
            <div className="text-3xl mb-4">📞</div>
            <h4 className="font-bold text-medical-blue mb-3">Direct Phone Call</h4>
            <p className="text-medical-gray text-sm mb-4">Speak directly with our medical team for immediate assistance</p>
            <div className="flex flex-col gap-3">
              <a href={primaryDialUrl} className="btn btn-primary text-sm">
                Call Primary: {primaryPhoneLocal}
              </a>
              <a href={secondaryDialUrl} className="btn btn-primary text-sm">
                Call Secondary: {secondaryPhoneLocal}
              </a>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg text-center card-hover border border-red-100">
            <div className="text-3xl mb-4">🚨</div>
            <h4 className="font-bold text-medical-rose mb-3">Emergency Care</h4>
            <p className="text-medical-gray text-sm mb-4">24/7 emergency medical assistance when you need it most</p>
            <button className="btn bg-red-600 text-white hover:bg-red-700 text-sm">
              Emergency Contact
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact