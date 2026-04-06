import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dr. Aniefiok Idiong - Family Doctor & Medical Consultant | Professional Healthcare',
  description: 'Dr. Aniefiok Idiong - Experienced Family Doctor and medical consultant providing primary care and professional medical consultations in Lagos, Nigeria.',
  keywords: 'family doctor, general practitioner, medical consultant, women health, professional consultation, Lagos, Nigeria, reproductive health, healthcare',
  authors: [{ name: 'Dr. Aniefiok Idiong' }],
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Dr. Aniefiok Idiong - Family Doctor & Medical Consultant',
    description: 'Dr. Aniefiok Idiong - Experienced Family Doctor and medical consultant providing specialized primary care and professional medical consultations in Lagos, Nigeria.',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={inter.className}>{children}</body>
    </html>
  )
}