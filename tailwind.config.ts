import daisyui from 'daisyui'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'underline-red': 'hsl(7, 99%, 70%)',
        'underline-yellow': 'hsl(51, 100%, 49%)',
        'footer-font-Color': 'hsl(168, 34%, 41%)',
        'photo-font-color': 'hsl(198, 62%, 26%)',
        'graphic-font-color': 'hsl(167, 40%, 24%)',
        'neutral-dark-one': 'hsl(212, 27%, 19%)',
        'neutral-dark-two': 'hsl(213, 9%, 39%)',
        'neutral-dark-three': 'hsl(232, 10%, 55%)',
        'neutral-dark-four': 'hsl(210, 4%, 67%)',
        'color-bg-footer': 'hsl(167, 44%, 70%)',
        'color-link': 'hsl(228, 45%, 44%)',
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ['light'],
    darkTheme: 'light',
    logs: false,
  },
}

export default config
