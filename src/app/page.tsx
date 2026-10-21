import SiteNav from '@/components/SiteNav'
import ContactForm from '@/components/ContactForm'
import { CONTACT } from '@/components/contact-details'

const services = [
  {
    title: 'General practice',
    text: 'Check-ups, preventive care and long-term management of conditions like high blood pressure and diabetes.',
    items: ['Annual health checks', 'Physical examinations', 'Preventive screening', 'Chronic disease management', 'Health counselling'],
  },
  {
    title: 'Reproductive health',
    text: "Care for women's reproductive health, fertility concerns and family planning.",
    items: ['Fertility assessment', 'Menstrual disorders', 'Family planning', 'Preconception counselling', 'Hormonal health'],
  },
  {
    title: 'Pregnancy care',
    text: 'Care through pregnancy for the health of mother and baby.',
    items: ['Antenatal check-ups', 'Pregnancy monitoring', 'Ultrasound', 'High-risk pregnancy care', 'Delivery planning'],
  },
  {
    title: 'Medical consultations',
    text: 'A professional opinion on any health concern, and a clear plan for what to do next.',
    items: ['Medical assessment', 'Second opinions', 'Treatment planning', 'Health advice', 'Malaria diagnosis and treatment'],
  },
]

const credentials = [
  ['Bachelor of Medicine, Bachelor of Surgery (MBBS)', 'Medical degree'],
  ['Family Medicine', 'Specialist training and certification'],
  ['General Practice', 'Additional training in general medicine and common diseases'],
  ['Licensed medical practitioner', 'Member of the Nigerian Medical Association'],
  ['Malaria care', 'Extensive experience in diagnosis, treatment and prevention'],
]

const hours = [
  ['Monday to Friday', '8:00 am – 6:00 pm'],
  ['Saturday', '9:00 am – 4:00 pm'],
  ['Sunday', 'Closed'],
]

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="currentColor">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.3-.4.8-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1 2.7c.1.2 1.8 2.8 4.4 3.9 1.6.7 2.3.8 3.1.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z" />
    </svg>
  )
}

export default function Home() {
  return (
    <>
      <SiteNav />
      <main>
        {/* Hero */}
        <section className="border-b" style={{ borderColor: 'var(--line)' }}>
          <div className="wrap grid items-center gap-10 py-12 sm:py-16 md:grid-cols-[1.15fr_0.85fr] md:py-20">
            <div>
              <p className="eyebrow">Family doctor · Lagos, Nigeria</p>
              <h1 className="mt-4 text-[40px] font-semibold leading-[1.05] sm:text-6xl">Dr. (Amb) Aniefiok Idiong</h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed sm:text-xl">
                Family doctor and medical consultant. General practice, women&apos;s reproductive health and pregnancy care, with personal attention and a clear plan for every patient.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a className="btn btn-wa" href={CONTACT.primary.whatsapp} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon /> Book on WhatsApp
                </a>
                <a className="btn btn-line" href="#contact">Send a message</a>
              </div>
              <p className="mt-5 text-sm" style={{ color: 'var(--muted)' }}>
                Open Monday to Saturday. Call or WhatsApp {CONTACT.primary.local}.
              </p>
            </div>
            <figure className="mx-auto w-full max-w-sm">
              <div className="overflow-hidden rounded-2xl" style={{ background: 'var(--wash)' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/face.jpeg" alt="Dr. (Amb) Aniefiok Idiong" width={800} height={800} className="aspect-[5/4] w-full object-cover" style={{ objectPosition: "center 85%" }} />
              </div>
              <figcaption className="mt-3 flex items-center justify-between gap-3 text-sm">
                <span style={{ color: 'var(--muted)' }}>Animexx Nigeria Limited</span>
                <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="font-semibold underline decoration-2 underline-offset-4" style={{ color: 'var(--ink)', textDecorationColor: 'var(--red)' }}>
                  LinkedIn profile
                </a>
              </figcaption>
            </figure>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-16 sm:py-20">
          <div className="wrap grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="eyebrow">About</p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Personal, professional care</h2>
            </div>
            <div className="grid gap-5 text-lg leading-relaxed">
              <p>
                Dr. Aniefiok Idiong is a family doctor and medical consultant practising in Lagos. Dr. Idiong&apos;s training is in family medicine and general practice, with a focus on primary care, women&apos;s health and medical consultation.
              </p>
              <p>
                Patients see Dr. Idiong for routine check-ups, ongoing care for long-term conditions, fertility and family planning, pregnancy care, and medical advice. Every visit is comfortable and confidential, with health concerns explained in plain language.
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-16 sm:py-20" style={{ background: 'var(--wash)' }}>
          <div className="wrap">
            <p className="eyebrow">Services</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">How Dr. Idiong can help</h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {services.map((s) => (
                <article key={s.title} className="rounded-2xl bg-white p-6 sm:p-8" style={{ border: '1px solid var(--line)' }}>
                  <h3 className="text-2xl font-semibold">{s.title}</h3>
                  <p className="mt-2 leading-relaxed">{s.text}</p>
                  <ul className="mt-5 grid gap-2 text-[15px]">
                    {s.items.map((i) => (
                      <li key={i} className="flex gap-3">
                        <span aria-hidden="true" className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: 'var(--red)' }} />
                        {i}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <a className="btn btn-red" href="#contact">Book a consultation</a>
              <p className="text-sm" style={{ color: 'var(--muted)' }}>Ask about fees when you book. They depend on the service.</p>
            </div>
          </div>
        </section>

        {/* Qualifications */}
        <section id="qualifications" className="py-16 sm:py-20">
          <div className="wrap grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="eyebrow">Qualifications</p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Training and registration</h2>
            </div>
            <dl className="grid" style={{ borderTop: '1.5px solid var(--ink)' }}>
              {credentials.map(([title, detail]) => (
                <div key={title} className="grid gap-1 py-4 sm:grid-cols-[1fr_1fr] sm:gap-6" style={{ borderBottom: '1px solid var(--line)' }}>
                  <dt className="font-semibold" style={{ color: 'var(--ink)' }}>{title}</dt>
                  <dd>{detail}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-16 sm:py-20" style={{ background: 'var(--wash)' }}>
          <div className="wrap grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="grid content-start gap-8">
              <div>
                <p className="eyebrow">Book a visit</p>
                <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Get in touch</h2>
                <p className="mt-3 text-lg leading-relaxed">The quickest way to book is WhatsApp. You can also call, email, or send a message with the form.</p>
              </div>
              <div className="grid gap-3">
                {[CONTACT.primary, CONTACT.secondary].map((p, i) => (
                  <div key={p.local} className="flex flex-wrap items-center justify-between gap-3 rounded-xl bg-white p-4" style={{ border: '1px solid var(--line)' }}>
                    <div>
                      <p className="text-sm" style={{ color: 'var(--muted)' }}>{i === 0 ? 'Main line' : 'Second line'} · call or WhatsApp</p>
                      <p className="text-lg font-semibold tabular-nums" style={{ color: 'var(--ink)' }}>{p.local}</p>
                    </div>
                    <div className="flex gap-2">
                      <a className="btn btn-wa px-4 py-2 text-sm" href={p.whatsapp} target="_blank" rel="noopener noreferrer"><WhatsAppIcon /> WhatsApp</a>
                      <a className="btn btn-line px-4 py-2 text-sm" href={p.tel}>Call</a>
                    </div>
                  </div>
                ))}
                <div className="rounded-xl bg-white p-4" style={{ border: '1px solid var(--line)' }}>
                  <p className="text-sm" style={{ color: 'var(--muted)' }}>Email</p>
                  {CONTACT.emails.map((e) => (
                    <a key={e} href={`mailto:${e}`} className="block text-lg font-semibold break-all" style={{ color: 'var(--ink)' }}>{e}</a>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Opening hours</h3>
                <dl className="mt-3 grid">
                  {hours.map(([d, h]) => (
                    <div key={d} className="flex justify-between gap-4 py-2" style={{ borderBottom: '1px solid var(--line)' }}>
                      <dt>{d}</dt>
                      <dd className="font-semibold tabular-nums" style={{ color: h === 'Closed' ? 'var(--muted)' : 'var(--ink)' }}>{h}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-4 text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                  In an emergency, go to the nearest hospital or call 112. Do not wait for a reply to a message.
                </p>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="py-10">
        <div className="wrap flex flex-col gap-4 text-sm sm:flex-row sm:items-center sm:justify-between" style={{ color: 'var(--muted)' }}>
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="" width={48} height={34} className="h-8 w-auto" />
            <span>© {new Date().getFullYear()} Animexx Nigeria Limited · Lagos, Nigeria</span>
          </div>
          <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">LinkedIn</a>
        </div>
      </footer>
    </>
  )
}
