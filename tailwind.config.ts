import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';

export default {
  content: [
    './auth_style/templates/**/*.html',
  ],
  safelist: [
    // Injected by Django, and may be referenced by CSS rules
    'errorlist',
  ],
  theme: {
    fontFamily: {
      'sans': 'Nunito, sans-serif',
    },
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    logs: false,
    themes: [
      'winter',
      'dark',
    ],
  },
} satisfies Config;
