import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',
        'primary-hover': '#2563eb',
        accent: '#3b82f6',
        background: '#111111',
        surface: '#171717',
        'text-primary': '#f5f7fb',
        'text-secondary': '#9ca3af',
        border: '#2a2a2a'
      },
      boxShadow: {
        soft: '0 20px 60px rgba(0, 0, 0, 0.35)'
      },
      borderRadius: {
        lg: '20px'
      }
    }
  },
  plugins: []
} satisfies Config;
