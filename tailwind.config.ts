import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#10b981',
        'primary-hover': '#059669',
        accent: '#34d399',
        background: '#f8fafc',
        surface: '#ffffff',
        'text-primary': '#0f172a',
        'text-secondary': '#64748b',
        border: '#e2e8f0'
      },
      boxShadow: {
        soft: '0 16px 48px rgba(15, 23, 42, 0.08)'
      },
      borderRadius: {
        lg: '16px'
      }
    }
  },
  plugins: []
} satisfies Config;
