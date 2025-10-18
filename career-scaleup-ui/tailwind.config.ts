import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: [
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(220, 15%, 98%)',
        foreground: 'hsl(220, 20%, 10%)',
        muted: {
          DEFAULT: 'hsl(220, 14%, 96%)',
          foreground: 'hsl(220, 9%, 46%)'
        },
        primary: {
          DEFAULT: '#1f3a5f',
          foreground: '#F2F6FA'
        },
        accent: {
          DEFAULT: '#0ea5e9',
          foreground: '#082f49'
        },
        border: 'hsl(220, 16%, 88%)'
      },
      borderRadius: {
        none: '0px'
      }
    },
  },
  plugins: [],
} satisfies Config
