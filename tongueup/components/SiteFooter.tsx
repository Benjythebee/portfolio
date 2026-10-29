import { useTranslation } from 'react-i18next'

export const CONTACT_EMAIL = 'jybenlarcher@gmail.com'

export const SiteFooter = () => {
  const { t } = useTranslation()
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-ink-3 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="flex items-center gap-2.5">
          <img
            src="/icon-192.png"
            alt=""
            width={24}
            height={24}
            className="size-6 rounded-md"
          />
          <span>
            © {new Date().getFullYear()} {t('footer.madeBy')}
          </span>
        </div>
        <nav className="flex gap-5 font-medium">
          <a href="/privacy" className="hover:text-ink">
            {t('privacy_policy')}
          </a>
          <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-ink">
            {t('footer.contact')}
          </a>
        </nav>
      </div>
    </footer>
  )
}
