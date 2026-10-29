import { useTranslation } from 'react-i18next'
import { currentLanguage } from '../i18n'

export const PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=com.jybenlarcher.tongueup'

export const GooglePlayBadge = ({ className = '' }: { className?: string }) => {
  const { t } = useTranslation()
  return (
    <a
      href={`${PLAY_STORE_URL}&hl=${currentLanguage()}`}
      className={`inline-block rounded-[10px] transition hover:-translate-y-0.5 hover:shadow-card focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary ${className}`}
    >
      <img
        src={`/${t('google_play')}`}
        alt={t('google_play_alt')}
        width={189}
        height={56}
        className="h-14 w-auto"
      />
    </a>
  )
}
