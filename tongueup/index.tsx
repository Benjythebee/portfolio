import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'

import 'tailwindcss/tailwind.css'
import './i18n'
import './global.css'
import App from './App'
import PrivacyPolicyPage from './privacy'
const container = document.getElementById('root') as HTMLDivElement
container.className = 'w-full h-full font-inter'
const root = createRoot(container)

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/privacy" element={<PrivacyPolicyPage />} />
    </Routes>
  </BrowserRouter>
)
