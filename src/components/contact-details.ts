// Phone numbers, emails and links shown across the site.
const line = (local: string) => {
  const intl = `234${local.slice(1)}`
  return { local, whatsapp: `https://wa.me/${intl}`, tel: `tel:+${intl}` }
}

export const CONTACT = {
  primary: line('08023042500'),
  secondary: line('08033008282'),
  emails: ['info@animexx.com.ng', 'animexx22@yahoo.co.uk'],
  linkedin: 'https://www.linkedin.com/in/dr-amb-ani-idiong-7a496428/',
}
