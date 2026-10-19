import { useEffect, useRef } from 'react'
import MockSite from './MockSite'

// Velocidad del recorrido automático, en píxeles de pantalla por segundo.
// Es la misma para todas las capturas, sin importar cuán largas sean.
const SCROLL_SPEED = 60

// Captura de página completa que se recorre sola. La duración de la animación
// (ver `.screen-scroller--auto` en Devices.css) se calcula según lo que hay
// que recorrer, para que vaya siempre a la misma velocidad.
function Capture({ src, alt }) {
  const ref = useRef(null)

  useEffect(() => {
    const img = ref.current
    const scroller = img.parentElement
    const screen = scroller.parentElement

    function update() {
      const distance = img.offsetHeight - screen.clientHeight
      if (distance > 0) {
        scroller.style.setProperty('--scroll-duration', `${distance / SCROLL_SPEED}s`)
      }
    }

    const observer = new ResizeObserver(update)
    observer.observe(img)
    observer.observe(screen)
    return () => observer.disconnect()
  }, [])

  return <img ref={ref} src={src} alt={alt} />
}

// Muestra la captura del proyecto; si no tiene, el sitio de ejemplo.
export default function ProjectScreen({ project, variant }) {
  const image = project.images?.[variant]
  const label = `${project.title} en ${variant === 'mobile' ? 'celular' : 'escritorio'}`

  if (image) {
    return <Capture src={image} alt={label} />
  }

  return <MockSite name={project.title} theme={project.theme} />
}
