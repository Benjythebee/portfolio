import tailwindBase from '../tailwind.config.mjs'

// Colors come from CSS variables in global.css, which mirror the app's design tokens
// (tongue_app/src/theme/tokens.ts) for both light and dark themes.
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`

/** @type {import('tailwindcss').Config} */
export default {
  ...tailwindBase,
  content: ['./index.html', './*.tsx', './components/**/*.tsx'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: token('primary'),
        'primary-soft': token('primary-soft'),
        'on-primary': token('on-primary'),
        canvas: token('canvas'),
        surface: token('surface'),
        'surface-muted': token('surface-muted'),
        ink: token('ink'),
        'ink-2': token('ink-2'),
        'ink-3': token('ink-3'),
        line: token('line'),
        success: token('success'),
        'success-soft': token('success-soft'),
        error: token('error'),
        'error-soft': token('error-soft'),
        bezel: token('bezel')
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        card: '0 3px 16px -4px rgb(var(--shadow) / 0.10)',
        phone:
          '0 40px 80px -24px rgb(var(--shadow) / 0.45), 0 12px 30px -12px rgb(var(--shadow) / 0.3)'
      }
    }
  }
}
