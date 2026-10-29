// Prepares the localStorage the embedded web build of the app (served from /demo, same origin)
// reads through AsyncStorage, so the live demo matches the site's language and theme and opens
// with a believable history instead of an empty chart.
import type { SiteLanguage } from './i18n'
import type { SiteTheme } from './components/theme'

// Keys used by the app (tongue_app/src/context/*, src/localization.ts, card components)
const SETTINGS_KEY = '@app_tongue_patrol_settings'
const DATA_KEY = '@app_tongue_timeseries_data'
const LANGUAGE_KEY = 'settings.lang'
const APP_KEYS = [
  SETTINGS_KEY,
  DATA_KEY,
  LANGUAGE_KEY,
  'lastEntryRecord',
  'lastPeriodicEntryRecord',
  '@app_tongue_reminder_schedule_sig'
]

// Mirrors defaultSettings in tongue_app/src/context/SettingsContext.tsx
const DEFAULT_SETTINGS = {
  frequency: 1,
  notificationsEnabled: false,
  quietTime: { start: 22, end: 8 },
  quietTimeEnabled: true,
  strictTiming: false,
  reminderAnchorMinute: 8 * 60,
  theme: 'light'
}

// Enough history to fill the chart's day, week and month views
const HISTORY_HOURS = 60 * 24
// Re-seed once the visitor's own check-ins (or the last seed) are older than this
const RECENT_HOURS = 48
const HOUR_MS = 3_600_000

interface Point {
  t: number // hours since epoch
  ok: number
  nok: number
}

const hourNow = () => Math.floor(Date.now() / HOUR_MS)

// Stable pseudo-random value in [0, 1) per hour, so the sample history doesn't reshuffle on reload
const noise = (n: number) => {
  const x = Math.sin(n * 12.9898) * 43758.5453
  return x - Math.floor(x)
}

// Sparse hourly check-ins during waking hours, getting better over the window
const sampleHistory = (): Point[] => {
  const now = hourNow()
  const points: Point[] = []
  for (let t = now - HISTORY_HOURS + 1; t <= now; t++) {
    const hour = new Date(t * HOUR_MS).getHours()
    if (hour < 8 || hour >= 22) continue
    const progress = 1 - (now - t) / HISTORY_HOURS
    const ok = Math.round(noise(t) * 1.6 + progress * 1.2)
    const nok = Math.round(noise(t + 1000) * 1.4 * (1.2 - progress * 0.7))
    if (ok > 0 || nok > 0) points.push({ t, ok, nok })
  }
  return points
}

const hasRecentActivity = (data: unknown) =>
  Array.isArray(data) &&
  data.some(
    (p: Point) => p.t > hourNow() - RECENT_HOURS && (p.ok > 0 || p.nok > 0)
  )

const readJson = (key: string) => {
  try {
    return JSON.parse(localStorage.getItem(key) ?? 'null')
  } catch {
    return null
  }
}

export const prepareDemo = ({
  lang,
  theme
}: {
  lang: SiteLanguage
  theme: SiteTheme
}) => {
  try {
    const settings = readJson(SETTINGS_KEY) ?? {}
    localStorage.setItem(
      SETTINGS_KEY,
      JSON.stringify({ ...DEFAULT_SETTINGS, ...settings, theme })
    )
    localStorage.setItem(LANGUAGE_KEY, lang)
    if (!hasRecentActivity(readJson(DATA_KEY))) {
      localStorage.setItem(DATA_KEY, JSON.stringify(sampleHistory()))
    }
  } catch {
    // Storage blocked (private mode, disabled cookies): the demo still runs with its defaults
  }
}

export const resetDemo = () => {
  try {
    APP_KEYS.forEach((key) => localStorage.removeItem(key))
  } catch {
    // Nothing to reset
  }
}
