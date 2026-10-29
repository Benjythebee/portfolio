import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'

import 'tailwindcss/tailwind.css'
import './i18n'
import './global.css'
import App from './App'
import PrivacyPolicyPage from './privacy'
import { ThemeProvider } from './components/theme'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(
  <ThemeProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        {/* Home also answers the store listing's /support link */}
        <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
)
