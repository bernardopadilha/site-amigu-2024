/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        blue: {
          400: '#0483C7',
        },
        violet: {
          500: '#895BF3',
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
      },
      backgroundImage: {
        'hero-banner': "url('/portoHack-288.jpg')",
        background: 'url(/backgrounds/background.png)',
        background2: 'url(/backgrounds/background-2.png)',
        background4: 'url(/backgrounds/background-4.png)',
        background5: 'url(/backgrounds/background-5.png)',
        background6: 'url(/backgrounds/background-6.png)',
        background7: 'url(/backgrounds/background-7.png)',
        background8: 'url(/backgrounds/background-8.png)',
        background9: 'url(/backgrounds/background-9.png)',
        background10: 'url(/backgrounds/background-10.png)',
        background11: 'url(/backgrounds/background-11.png)',
        background12: 'url(/backgrounds/background-12.png)',
        background13: 'url(/backgrounds/background-13.png)',
        background14: 'url(/backgrounds/background-14.png)',
        background15: 'url(/backgrounds/background-15.png)',
        background16: 'url(/backgrounds/background-16.png)',
        background17: 'url(/backgrounds/background-17.png)',
        background18: 'url(/backgrounds/background-18.png)',
        'hero-banner-about': "url('/portoHack-497.jpg')",
        'hero-banner-marathons': "url('/backgrounds/background-3.png')",
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
