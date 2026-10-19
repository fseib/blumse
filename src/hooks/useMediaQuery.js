import { useSyncExternalStore } from 'react'

// Devuelve true mientras se cumpla la media query (y se actualiza si cambia).
export function useMediaQuery(query) {
  return useSyncExternalStore(
    (onChange) => {
      const media = window.matchMedia(query)
      media.addEventListener('change', onChange)
      return () => media.removeEventListener('change', onChange)
    },
    () => window.matchMedia(query).matches,
  )
}
