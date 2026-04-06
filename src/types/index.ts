export interface Doctor {
  name: string
  fullName: string
  title: string
  specialty: string[]
  yearsExperience: number
  patientsHelped?: number
  bio: string
  image?: string
}

export interface Education {
  degree: string
  institution: string
  year: string
  location: string
}

export interface Certification {
  name: string
  issuingBody: string
  year?: string
}

export interface Specialty {
  title: string
  description: string
  icon?: string
}

export interface Service {
  title: string
  description: string
  features: string[]
}

export interface ContactInfo {
  address: string
  city: string
  state: string
  zipCode: string
  phone: string
  email: string
  officeHours: {
    [key: string]: string
  }
}

export interface FormData {
  name: string
  email: string
  phone?: string
  message: string
  appointmentType?: string
}