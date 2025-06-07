import { Clock } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { DarkThemeFeature } from './components/feature.darktheme'
function App() {
  const { t } = useTranslation()

  return (
    <div className="relative flex size-full flex-col overflow-hidden overflow-y-auto bg-gradient-to-tr from-fuchsia-400 to-fuchsia-50">
      <div className="px-4 pt-7 md:px-20">
        <h1 className="text-6xl font-bold drop-shadow-xl">{t('title')}</h1>
      </div>
      <div className="px-4 text-center md:px-28">
        <div className="relative flex items-center justify-center text-center">
          <div className="max-md:absolute max-md:top-1/2">
            <img
              src={'/' + t('google_play')}
              alt="TongueUp Logo"
              className="scale-[70%] cursor-pointer hover:shadow-xl md:scale-110"
            />
          </div>
          <div className="flex flex-col gap-0">
            <img
              src={`/` + t('notification_screenshot')}
              alt="screenshot"
              className="mx-auto w-4/5 min-w-[300px] md:w-fit"
            />

            <div className="flex w-full items-center gap-3 rounded-2xl border border-gray-300 bg-white/80 p-4 px-10 text-xl font-semibold text-gray-800 shadow-lg backdrop-blur-sm md:p-6 md:px-20">
              <svg
                className="size-12 text-fuchsia-500 md:size-8"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4m0 4h.01"
                />
              </svg>
              <span>{t('ui.info')}</span>
            </div>
          </div>
        </div>
      </div>
      <Features />
      {/* -----  Footer  -----*/}
      <footer className="mt-10 flex h-40 w-full items-center justify-between p-4 md:px-20">
        <a href="/privacy" className="text-sm font-bold text-gray-600">
          {t('privacy_policy')}
        </a>
      </footer>
    </div>
  )
}

export default App

const Features = () => {
  const { t } = useTranslation()
  return (
    <div className="mt-10 flex flex-col px-2 md:mt-20 md:px-4">
      <header className="px-5 md:px-20">
        <span className="text-4xl font-bold">{t('features')}:</span>
        <h3 className="font-bold text-black/60">{t('KeepItSimple')}</h3>
      </header>
      <div className="flex flex-col justify-center gap-4 text-center md:flex-row">
        <div className="flex h-60 flex-col items-center ">
          <Clock className="size-40 text-black drop-shadow-lg" />
          <h1 className="whitespace-break-spaces text-wrap  text-lg font-bold  drop-shadow-lg">
            {t('ui.reminderFeature')}
          </h1>
        </div>
        <DarkThemeFeature className="size-full md:size-80" />
        <div className="size-full md:size-96">
          <div className="rounded-3xl bg-white/20 p-8 shadow-lg backdrop-blur-md ">
            <h1 className="text-lg font-bold">{t('ui.trackYourProgress')}</h1>
            <img
              src={'/progress_graph.png'}
              alt="TongueUp Logo"
              className="w-full max-w-[600px]"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
