import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        alabaster: '#F4F4F0',
        navy: '#0A192F',
        gold: '#D4AF37',
        'gold-light': '#E8C547',
        'gold-dark': '#B8971E',
        cream: '#F5EFE6',
        charcoal: '#1A1A2E',
        forest: '#2E865F',
        'forest-dark': '#20613F',
        'forest-light': '#3FA279',
        espresso: '#2C2A28',
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gold-radial': 'radial-gradient(circle at center, #D4AF37, #B8971E)',
      },
    },
  },
  plugins: [],
}

export default config
