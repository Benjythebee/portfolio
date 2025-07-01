import { useMemo } from 'react'

export function useSearchParams(): Record<string, string | true> {
  return useMemo(() => {
    if (typeof window === 'undefined') return {}
    const params = new URLSearchParams(window.location.search)
    const result: Record<string, string | true> = {}
    params.forEach((value, key) => {
      // If the flag is present without a value (?flag), treat as true
      result[key] = value === '' ? true : value
    })
    // Also handle flags present without '=' (e.g., ?flag&foo=bar)
    window.location.search
      .replace(/^\?/, '')
      .split('&')
      .forEach((pair) => {
        if (pair && !pair.includes('=')) {
          result[pair] = true
        }
      })
    return result
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typeof window !== 'undefined' ? window.location.search : ''])
}
