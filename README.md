# Medical Portfolio Website

A modern, responsive medical portfolio website built with Next.js, React, and TypeScript. This website is designed to showcase a healthcare professional's qualifications, specialties, services, and contact information in a professional and accessible manner.

## Features

- **Responsive Design**: Optimized for all devices (desktop, tablet, mobile)
- **Professional Medical Styling**: Clean, trustworthy design with medical-themed color palette
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Accessibility Compliant**: WCAG guidelines followed for better accessibility
- **Contact Form**: Interactive contact form for patient inquiries
- **TypeScript Support**: Type-safe development with TypeScript
- **Modern Tech Stack**: Built with Next.js 15, React 18, and Tailwind CSS

## Sections Included

1. **Navigation**: Fixed navigation bar with smooth scrolling
2. **Hero Section**: Professional introduction and call-to-action
3. **About**: Doctor's biography and key statistics
4. **Education**: Academic background and certifications
5. **Specialties**: Medical specialties and areas of expertise
6. **Services**: Detailed services offered with features
7. **Contact**: Contact form and practice information
8. **Footer**: Additional practice details and links

## Getting Started

### Prerequisites

- Node.js 18+ installed on your system
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone or download this project
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

### Building for Production

Create an optimized production build:

```bash
npm run build
npm run start
# or
yarn build
yarn start
```

## Customization Guide

### Essential Updates Required

Before deploying, you **must** update the following placeholder content:

1. **Doctor Information** (in all components):
   - Replace `[Name]`, `[Full Name]` with actual name
   - Update `[Medical Specialty]`, `[Board Certifications]`
   - Add actual years of experience and patient statistics

2. **Contact Information** (in Contact and Footer components):
   - Replace `[Medical Practice Address]`, `[Phone Number]`, `[Email Address]`
   - Update office hours
   - Add actual practice location details

3. **Education & Certifications** (in Education component):
   - Replace placeholder education entries with actual degrees
   - Update certifications and professional memberships
   - Add correct institutions, years, and locations

4. **Services & Specialties** (in Services and Specialties components):
   - Replace placeholder services with actual medical services offered
   - Update specialty descriptions
   - Customize features and service details

5. **About Section**:
   - Replace biography placeholder with actual professional bio
   - Add real statistics and experience details
   - Include actual photo (replace placeholder)

### Styling Customization

The website uses Tailwind CSS with a custom medical color palette:

- **Primary Blue**: `medical-blue` (#1e40af)
- **Teal**: `medical-teal` (#0d9488)
- **Gray**: `medical-gray` (#64748b)

To customize colors, edit [tailwind.config.js](tailwind.config.js).

### Adding Images

1. Place images in the `public/` directory
2. Update image references in components
3. Replace placeholder profile photo in the About section
4. Add any additional medical facility images as needed

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles and Tailwind imports
├── components/
│   ├── Navigation.tsx      # Navigation bar
│   ├── Hero.tsx           # Hero section
│   ├── About.tsx          # About section
│   ├── Education.tsx      # Education & certifications
│   ├── Specialties.tsx    # Medical specialties
│   ├── Services.tsx       # Services offered
│   ├── Contact.tsx        # Contact form and info
│   └── Footer.tsx         # Footer component
└── types/
    └── index.ts           # TypeScript type definitions
```

## Technology Stack

- **Framework**: Next.js 15.5.9
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Library**: React 18
- **Build Tool**: Next.js built-in bundler
- **Linting**: ESLint with TypeScript support

## SEO & Accessibility

The website includes:
- Semantic HTML structure
- Proper heading hierarchy (H1, H2, H3)
- Alt text placeholders for images
- Focus states for keyboard navigation
- ARIA labels where appropriate
- Meta tags for social sharing
- Responsive design for all screen sizes

## Security & Privacy

- Contact form includes basic validation
- No sensitive data storage (form submission needs backend integration)
- HTTPS recommended for production deployment
- Consider HIPAA compliance requirements for medical websites

## Deployment

This Next.js application can be deployed on:

- **Vercel** (recommended): Automatic deployments from Git
- **Netlify**: Static site deployment
- **AWS**: Using AWS Amplify or S3/CloudFront
- **Traditional Hosting**: Build static files with `npm run build`

### Environment Variables

For production deployment, consider setting up:
- Form submission service (e.g., Formspree, Netlify Forms)
- Analytics tracking (Google Analytics, etc.)
- Contact form email integration

### Mailtrap (recommended for local testing)

1. Create a free Mailtrap account at https://mailtrap.io/ and navigate to "Inbox" → SMTP settings.
2. Copy the SMTP credentials and create a `.env.local` file at the project root with the following keys (or copy `.env.example`):

```
SMTP_HOST=smtp.mailtrap.io
SMTP_PORT=2525
SMTP_USER=<your-mailtrap-user>
SMTP_PASS=<your-mailtrap-pass>
FROM_EMAIL=you@example.com
TO_EMAIL=office@example.com
```

3. Restart the dev server: `npm run dev` and submit the contact form — Mailtrap will capture the outgoing messages so you can inspect them safely.

Mailtrap is ideal for development because it prevents sending real emails while letting you verify message contents and headers.

## Support & Maintenance

### Regular Updates Needed:
- Update practice information as it changes
- Add new services or specialties
- Update certifications and education
- Refresh testimonials if added
- Keep dependencies updated for security

### Performance Monitoring:
- Monitor Core Web Vitals
- Test accessibility regularly
- Ensure mobile responsiveness
- Check form functionality

## Legal Considerations

**Important**: This is a template for informational purposes. Ensure compliance with:
- Medical advertising regulations in your jurisdiction
- HIPAA requirements (if applicable)
- State medical board guidelines
- Professional liability considerations
- Patient privacy requirements

## License

This project is created for educational and professional use. Modify and customize as needed for your medical practice.

---

**Note**: This website template contains placeholder content that must be replaced with actual information before deployment. Regular updates and maintenance are recommended to keep the information current and accurate.
# Animexx
