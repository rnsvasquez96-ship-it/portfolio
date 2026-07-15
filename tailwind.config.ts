import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#111827',
        'primary-hover': '#1f2937',
        accent: '#1f2937',
        background: '#fafafa',
        surface: '#ffffff',
        'text-primary': '#111827',
        'text-secondary': '#6b7280',
        border: '#e5e7eb'
      },
      boxShadow: {
        soft: '0 20px 60px rgba(17, 24, 39, 0.08)'
      },
      borderRadius: {
        lg: '20px'
      }
    }
  },
  plugins: []
} satisfies Config;
