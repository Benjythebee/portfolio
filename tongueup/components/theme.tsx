import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react'

export type SiteTheme = 'light' | 'dark'

const STORAGE_KEY = 'tongueup-site-theme'
const darkQuery = '(prefers-color-scheme: dark)'

const savedTheme = (): SiteTheme | null => {
  try {
    const value = localStorage.getItem(STORAGE_KEY)
    return value === 'dark' || value === 'light' ? value : null
  } catch {
    return null
  }
}

// index.html already applied the theme before first paint; start from it
const initialTheme = (): SiteTheme =>
  document.documentElement.classList.contains('dark') ? 'dark' : 'light'

const ThemeContext = createContext<{
  theme: SiteTheme
  toggleTheme: () => void
}>({ theme: 'light', toggleTheme: () => {} })

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<SiteTheme>(initialTheme)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  // Follow the system theme until the visitor picks one
  useEffect(() => {
    const media = matchMedia(darkQuery)
    const onChange = (event: MediaQueryListEvent) => {
      if (!savedTheme()) setTheme(event.matches ? 'dark' : 'light')
    }
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  const toggleTheme = useCallback(() => {
    const next = theme === 'dark' ? 'light' : 'dark'
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // Not persisted; still applies for this visit
    }
    setTheme(next)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useSiteTheme = () => useContext(ThemeContext)
