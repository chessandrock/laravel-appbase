/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

const config = {
  content: [
    './resources/views/**/*.blade.php',
    './resources/js/**/*.js',
    './resources/js/**/*.jsx',
    './resources/js/**/*.ts',
    './resources/js/**/*.tsx'
  ],
  theme: {
    /* fontSize: {
      xs: '0.95rem',
      sm: '1rem',
      base: '1.067rem',
      lg: '1.138rem',
      xl: '1.215rem',
      '2xl': '1.296rem'
    }, */
    extend: {
      colors: {},
      fontFamily: {
        sans: ['Noto Sans', ...defaultTheme.fontFamily.sans],
        slab: ['Roboto Slab', ...defaultTheme.fontFamily.sans],
        serif: ['Noto Serif', ...defaultTheme.fontFamily.serif],
        mono: ['Noto Mono', ...defaultTheme.fontFamily.mono],
        playfair: ['PlayFair Display SC'],
        bebas: ['Bebas Neue'],
        comic: ['Comic Neue']
      }
    }
  },
  daisyui: {
    themes: ['light']
  },
  plugins: [require('daisyui'), require('@tailwindcss/forms'), require('@tailwindcss/typography')]
}

export default config
