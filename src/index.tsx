import { createRoot } from 'react-dom/client'
import 'tailwindcss/tailwind.css'
import 'global.css'
import App from 'App'
const container = document.getElementById('root') as HTMLDivElement
container.className = 'w-full h-full'
const root = createRoot(container)

root.render(<App />)
