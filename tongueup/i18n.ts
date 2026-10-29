import en from './locales/en'
import fr from './locales/fr'
import LanguageDetector from 'i18next-browser-languagedetector'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: en
  },
  fr: {
    translation: fr
  }
} as const

export type SiteLanguage = keyof typeof resources

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    // No fixed `lng`: the detector picks ?lng=, then the saved choice, then the browser language
    supportedLngs: ['en', 'fr'],
    nonExplicitSupportedLngs: true,
    load: 'languageOnly',
    fallbackLng: 'en',
    detection: {
      order: ['querystring', 'localStorage', 'navigator'],
      lookupLocalStorage: 'tongueup-site-lang',
      caches: ['localStorage']
    },
    // React already escapes rendered values
    interpolation: {
      escapeValue: false
    },
    resources: resources
  })

/** The active language, always one of the supported ones */
export const currentLanguage = (): SiteLanguage =>
  i18n.resolvedLanguage === 'fr' ? 'fr' : 'en'

const syncHtmlLang = () => {
  document.documentElement.lang = currentLanguage()
}
i18n.on('languageChanged', syncHtmlLang)
syncHtmlLang()

export default i18n
