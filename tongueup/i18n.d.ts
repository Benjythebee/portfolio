// Import your translation files
import en from './locales/en'

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation'
    resources: {
      translation: typeof en
    }
    // Set returnNull to false if you want to avoid null returns
    returnNull: false
  }
}
