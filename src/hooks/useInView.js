import { useEffect, useRef, useState } from 'react'

// Devuelve [ref, inView]: inView pasa a true la primera vez que el elemento
// entra en pantalla (y queda así). `rootMargin` permite activarlo un poco antes,
// por ejemplo '300px' para empezar a cargar algo antes de que se vea.
export function useInView(threshold = 0.2, rootMargin = '0px') {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold, rootMargin },
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return [ref, inView]
}
