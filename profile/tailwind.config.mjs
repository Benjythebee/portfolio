import tailwindBase from '../tailwind.config.mjs'
/** @type {import('tailwindcss').Config} */

export default {
  ...tailwindBase,
  content: ['./**/*.{mjs,js,ts,jsx,tsx}']
}
