import { Moon, Sun } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { currentLanguage, SiteLanguage } from '../i18n'
import { useSiteTheme } from './theme'

const LANGUAGES: SiteLanguage[] = ['en', 'fr']

export const SiteHeader = () => {
  const { t, i18n } = useTranslation()
  const { theme, toggleTheme } = useSiteTheme()
  const language = currentLanguage()

  return (
    <header className="sticky top-0 z-30 border-b border-line/70 bg-canvas/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-4 sm:px-6">
        <a
          href="/"
          className="flex items-center gap-2.5 font-bold tracking-tight"
        >
          <img
            src="/icon-192.png"
            alt=""
            width={36}
            height={36}
            className="size-9 rounded-[10px]"
          />
          <span className="text-lg">{t('title')}</span>
        </a>

        <nav className="ml-auto hidden items-center gap-1 text-sm font-medium text-ink-2 md:flex">
          <a
            href="/#features"
            className="rounded-full px-3 py-2 hover:text-ink"
          >
            {t('nav.features')}
          </a>
          <a href="/#how" className="rounded-full px-3 py-2 hover:text-ink">
            {t('nav.howItWorks')}
          </a>
          <a href="/#privacy" className="rounded-full px-3 py-2 hover:text-ink">
            {t('nav.privacy')}
          </a>
        </nav>

        <div className="ml-auto flex items-center gap-2 md:ml-2">
          {/* Same look as the app's SegmentedControl */}
          <div
            role="group"
            aria-label={t('nav.language')}
            className="flex rounded-full bg-surface-muted p-1 text-xs font-semibold"
          >
            {LANGUAGES.map((lng) => (
              <button
                key={lng}
                type="button"
                aria-pressed={language === lng}
                onClick={() => i18n.changeLanguage(lng)}
                className={`rounded-full px-2.5 py-1 uppercase transition ${
                  language === lng
                    ? 'bg-surface text-primary shadow-card'
                    : 'text-ink-3 hover:text-ink-2'
                }`}
              >
                {lng}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              theme === 'dark' ? t('nav.lightTheme') : t('nav.darkTheme')
            }
            title={theme === 'dark' ? t('nav.lightTheme') : t('nav.darkTheme')}
            className="grid size-9 place-items-center rounded-full bg-surface-muted text-ink-2 transition hover:text-primary"
          >
            {theme === 'dark' ? (
              <Sun className="size-4" />
            ) : (
              <Moon className="size-4" />
            )}
          </button>
        </div>
      </div>
    </header>
  )
}
