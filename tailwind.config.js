/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: 'oklch(var(--accent))',
          foreground: 'oklch(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'oklch(var(--destructive))',
          foreground: 'oklch(var(--accent-foreground))',
        },
        primary: {
          DEFAULT: 'oklch(var(--primary))',
          foreground: 'oklch(var(--primary-foreground))',
          50: 'oklch(0.95 0.05 15)',
          100: 'oklch(0.9 0.08 15)',
          500: 'oklch(var(--primary))',
          600: 'oklch(0.3 0.18 15)',
          700: 'oklch(0.25 0.2 15)',
        },
        medical: {
          blue: 'oklch(0.7 0.08 15)',
          teal: 'oklch(0.75 0.06 45)', 
          gray: 'oklch(0.6 0.01 15)',
          navy: 'oklch(0.3 0.05 15)',
          gold: '#ffffff',
          rose: 'oklch(0.75 0.05 27.325)'
        },
        background: 'oklch(var(--background))',
        foreground: 'oklch(var(--foreground))',
        muted: {
          DEFAULT: 'oklch(var(--muted))',
          foreground: 'oklch(var(--muted-foreground))',
        },
        border: 'oklch(var(--border))',
        ring: 'oklch(var(--ring))',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      }
    },
  },
  plugins: [],
}