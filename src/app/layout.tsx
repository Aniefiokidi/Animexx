import type { Metadata } from 'next'
import { Public_Sans, Source_Serif_4 } from 'next/font/google'
import './globals.css'

const sans = Public_Sans({ subsets: ['latin'], variable: '--font-sans', display: 'swap' })
const serif = Source_Serif_4({ subsets: ['latin'], variable: '--font-serif', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.animexx.com.ng'),
  title: 'Dr. (Amb) Aniefiok Idiong | Family Doctor in Lagos',
  description: 'Family doctor and medical consultant in Lagos, Nigeria. General practice, reproductive health, pregnancy care and medical consultations. Book on WhatsApp.',
  keywords: 'family doctor Lagos, general practitioner, medical consultant, reproductive health, prenatal care, Animexx Nigeria',
  authors: [{ name: 'Dr. (Amb) Aniefiok Idiong' }],
  icons: { icon: '/logo.png', apple: '/logo.png' },
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    title: 'Dr. (Amb) Aniefiok Idiong, Family Doctor',
    description: 'General practice, reproductive health, pregnancy care and medical consultations in Lagos. Book on WhatsApp.',
    images: ['/face.jpeg'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
