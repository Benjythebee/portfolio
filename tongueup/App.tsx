import {
  BellRing,
  ChartLine,
  Check,
  CloudOff,
  Hourglass,
  LucideIcon,
  MoonStar,
  NotebookPen,
  ShieldCheck,
  SunMoon,
  UserRoundX
} from 'lucide-react'
import { ReactNode, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { GooglePlayBadge } from './components/GooglePlayBadge'
import { PhoneDemo } from './components/PhoneDemo'
import { SiteFooter } from './components/SiteFooter'
import { SiteHeader } from './components/SiteHeader'

type Tone = 'primary' | 'success'

const toneClasses: Record<Tone, string> = {
  primary: 'bg-primary-soft text-primary',
  success: 'bg-success-soft text-success'
}

/** Tinted rounded icon, like the app's IconBadge */
const IconBadge = ({
  icon: Icon,
  tone = 'primary'
}: {
  icon: LucideIcon
  tone?: Tone
}) => (
  <span
    className={`grid size-11 shrink-0 place-items-center rounded-[14px] ${toneClasses[tone]}`}
  >
    <Icon className="size-5" strokeWidth={2.2} />
  </span>
)

const SectionHeading = ({
  eyebrow,
  title,
  subtitle
}: {
  eyebrow: string
  title: string
  subtitle?: string
}) => (
  <div className="mx-auto max-w-2xl text-center">
    <p className="text-xs font-bold uppercase tracking-widest text-primary">
      {eyebrow}
    </p>
    <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
      {title}
    </h2>
    {subtitle && <p className="mt-3 text-lg text-ink-2">{subtitle}</p>}
  </div>
)

const Chip = ({ children }: { children: ReactNode }) => (
  <li className="inline-flex items-center gap-1.5">
    <Check className="size-4 text-success" strokeWidth={2.6} />
    {children}
  </li>
)

function App() {
  // Anchor links from other pages (/#features) land before the content renders
  useEffect(() => {
    if (location.hash) document.querySelector(location.hash)?.scrollIntoView()
  }, [])

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Privacy />
        <CallToAction />
      </main>
      <SiteFooter />
    </div>
  )
}

export default App

const Hero = () => {
  const { t } = useTranslation()
  return (
    <section className="brand-glow">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 pb-20 pt-12 sm:px-6 lg:grid-cols-[1fr_auto] lg:gap-20 lg:pt-16">
        <div className="max-w-xl max-lg:mx-auto max-lg:text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">
            {t('hero.eyebrow')}
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl lg:leading-[1.05]">
            {t('hero.titleStart')}
            <span className="text-primary">{t('hero.titleHighlight')}</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-2">
            {t('hero.subtitle')}
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:items-center">
            <GooglePlayBadge />
            <span className="text-sm text-ink-3">{t('hero.availability')}</span>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-ink-2 max-lg:justify-center">
            <Chip>{t('hero.free')}</Chip>
            <Chip>{t('hero.noAccount')}</Chip>
            <Chip>{t('hero.offline')}</Chip>
          </ul>
        </div>

        <PhoneDemo />
      </div>
    </section>
  )
}

const FEATURES: { key: string; icon: LucideIcon; tone: Tone }[] = [
  { key: 'checkIn', icon: NotebookPen, tone: 'success' },
  { key: 'catchUp', icon: Hourglass, tone: 'primary' },
  { key: 'reminders', icon: BellRing, tone: 'primary' },
  { key: 'quietHours', icon: MoonStar, tone: 'primary' },
  { key: 'progress', icon: ChartLine, tone: 'success' },
  { key: 'theme', icon: SunMoon, tone: 'primary' }
]

const Features = () => {
  const { t } = useTranslation()
  return (
    <section id="features" className="scroll-mt-16 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow={t('features.eyebrow')}
          title={t('features.title')}
          subtitle={t('features.subtitle')}
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ key, icon, tone }) => (
            <article
              key={key}
              className="rounded-[22px] border border-line bg-surface p-6 shadow-card"
            >
              <IconBadge icon={icon} tone={tone} />
              <h3 className="mt-5 text-lg font-semibold">
                {t(`features.${key}.title` as 'features.checkIn.title')}
              </h3>
              <p className="mt-2 leading-relaxed text-ink-2">
                {t(`features.${key}.body` as 'features.checkIn.body')}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

const STEPS = ['step1', 'step2', 'step3'] as const

const HowItWorks = () => {
  const { t } = useTranslation()
  return (
    <section
      id="how"
      className="scroll-mt-16 bg-surface-muted/60 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow={t('how.eyebrow')} title={t('how.title')} />
        <ol className="relative mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {/* Connector between the step numbers */}
          <span
            aria-hidden
            className="absolute left-[16.7%] right-[16.7%] top-6 hidden h-px bg-line md:block"
          />
          {STEPS.map((step, index) => (
            <li
              key={step}
              className="relative flex flex-col items-center text-center"
            >
              <span className="grid size-12 place-items-center rounded-full bg-primary text-lg font-bold text-on-primary ring-8 ring-canvas">
                {index + 1}
              </span>
              <h3 className="mt-5 text-lg font-semibold">
                {t(`how.${step}.title`)}
              </h3>
              <p className="mt-2 max-w-xs leading-relaxed text-ink-2">
                {t(`how.${step}.body`)}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

const Privacy = () => {
  const { t } = useTranslation()
  const points: { icon: LucideIcon; label: string }[] = [
    { icon: UserRoundX, label: t('hero.noAccount') },
    { icon: ShieldCheck, label: t('privacy.noTracking') },
    { icon: CloudOff, label: t('hero.offline') },
    { icon: Check, label: t('privacy.noAds') }
  ]
  return (
    <section id="privacy" className="scroll-mt-16 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[28px] bg-primary px-6 py-12 text-on-primary sm:px-12 lg:flex lg:items-center lg:gap-16 lg:py-16">
          <ShieldCheck
            aria-hidden
            className="pointer-events-none absolute -right-10 -top-10 size-64 opacity-10"
            strokeWidth={1.2}
          />
          <div className="relative max-w-xl">
            <p className="text-xs font-bold uppercase tracking-widest opacity-75">
              {t('privacy.eyebrow')}
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              {t('privacy.title')}
            </h2>
            <p className="mt-4 text-lg leading-relaxed opacity-90">
              {t('privacy.body')}
            </p>
            <a
              href="/privacy"
              className="mt-6 inline-flex rounded-full bg-on-primary/15 px-4 py-2 text-sm font-semibold transition hover:bg-on-primary/25"
            >
              {t('privacy.readPolicy')} →
            </a>
          </div>
          <ul className="relative mt-10 grid grid-cols-2 gap-3 lg:mt-0 lg:flex-1">
            {points.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-3 rounded-2xl bg-on-primary/10 px-4 py-4 font-semibold"
              >
                <Icon className="size-5 shrink-0" />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

const CallToAction = () => {
  const { t } = useTranslation()
  return (
    <section className="pb-24">
      <div className="mx-auto flex max-w-2xl flex-col items-center px-4 text-center sm:px-6">
        <img
          src="/icon-192.png"
          alt=""
          width={80}
          height={80}
          className="size-20 rounded-3xl shadow-card"
        />
        <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
          {t('cta.title')}
        </h2>
        <p className="mt-3 text-lg text-ink-2">{t('cta.body')}</p>
        <GooglePlayBadge className="mt-8" />
      </div>
    </section>
  )
}
