import { BatteryFull, RotateCcw, SignalHigh, Wifi } from 'lucide-react'
import { useEffect, useLayoutEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { prepareDemo, resetDemo } from '../demo'
import { currentLanguage } from '../i18n'
import { useSiteTheme } from './theme'

// Web export of the app (`npm run export:web-demo` in tongue_app), served from public/tongueup/demo
const DEMO_SRC = '/demo/index.html'

const useClock = () => {
  const format = () =>
    new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  const [time, setTime] = useState(format)
  useEffect(() => {
    const id = setInterval(() => setTime(format()), 15_000)
    return () => clearInterval(id)
  }, [])
  return time
}

/** The real app, running in an iframe inside a phone frame */
export const PhoneDemo = () => {
  const { t } = useTranslation()
  const { theme } = useSiteTheme()
  const language = currentLanguage()
  const time = useClock()
  // Bumped to remount the iframe once the app's storage has been prepared
  const [session, setSession] = useState(0)
  const [loaded, setLoaded] = useState(false)

  const restart = (reset = false) => {
    if (reset) resetDemo()
    prepareDemo({ lang: language, theme })
    setLoaded(false)
    setSession((s) => s + 1)
  }

  // The app reads language and theme from storage at startup, so restart it when they change
  useLayoutEffect(() => restart(), [language, theme])

  return (
    <div className="flex flex-col items-center gap-5">
      <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs font-semibold text-ink-2 shadow-card">
        <span className="relative flex size-2">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-60" />
          <span className="relative inline-flex size-2 rounded-full bg-success" />
        </span>
        {t('demo.live')}
      </span>

      <div className="relative rounded-[3.25rem] bg-bezel p-[11px] shadow-phone ring-1 ring-white/10">
        {/* Side buttons */}
        <span className="absolute -right-[3px] top-28 h-16 w-[3px] rounded-r bg-bezel" />
        <span className="absolute -right-[3px] top-52 h-10 w-[3px] rounded-r bg-bezel" />

        <div className="relative flex aspect-[9/19.5] w-[min(340px,calc(100vw-64px),calc((100svh-150px)*9/19.5))] min-w-[280px] flex-col overflow-hidden rounded-[2.6rem] bg-canvas">
          {/* Status bar, tinted like the top of the app's header gradient */}
          <div className="relative flex h-8 shrink-0 items-center justify-between bg-[#E6D9EA] px-6 text-[11px] font-semibold text-ink dark:bg-[#2B2435]">
            <span>{time}</span>
            <span className="absolute left-1/2 top-2 size-3.5 -translate-x-1/2 rounded-full bg-bezel" />
            <span className="flex items-center gap-1">
              <SignalHigh className="size-3.5" />
              <Wifi className="size-3.5" />
              <BatteryFull className="size-4" />
            </span>
          </div>

          <div className="relative min-h-0 flex-1">
            {session > 0 && (
              <iframe
                key={session}
                src={DEMO_SRC}
                title={t('demo.title')}
                onLoad={() => setTimeout(() => setLoaded(true), 250)}
                className="size-full border-0"
              />
            )}
            {/* Splash while the app bundle loads */}
            <div
              aria-hidden
              className={`absolute inset-0 grid place-items-center bg-canvas transition-opacity duration-500 ${
                loaded ? 'pointer-events-none opacity-0' : 'opacity-100'
              }`}
            >
              <img
                src="/icon-192.png"
                alt=""
                width={80}
                height={80}
                className="size-20 animate-pulse rounded-3xl"
              />
            </div>
          </div>

          {/* Gesture bar, on the tab bar's surface colour */}
          <div className="grid h-5 shrink-0 place-items-center bg-surface">
            <span className="h-1 w-28 rounded-full bg-ink/80" />
          </div>
        </div>
      </div>

      <div className="flex max-w-[340px] flex-col items-center gap-2 text-center">
        <p className="text-sm text-ink-2">{t('demo.hint')}</p>
        <p className="text-xs text-ink-3">{t('demo.note')}</p>
        <button
          type="button"
          onClick={() => restart(true)}
          className="mt-1 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-semibold text-primary transition hover:bg-primary-soft"
        >
          <RotateCcw className="size-4" />
          {t('demo.reset')}
        </button>
      </div>
    </div>
  )
}
