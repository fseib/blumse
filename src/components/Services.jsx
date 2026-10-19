import { useEffect, useState } from 'react'
import { useInView } from '../hooks/useInView'
import Reveal from './Reveal'
import './Services.css'

// Tarjeta con un brillo que sigue al cursor.
function SpotlightCard({ className = '', delay, children }) {
  function handlePointerMove(event) {
    const card = event.currentTarget
    const rect = card.getBoundingClientRect()
    card.style.setProperty('--x', `${event.clientX - rect.left}px`)
    card.style.setProperty('--y', `${event.clientY - rect.top}px`)
  }

  return (
    <Reveal delay={delay} className={`bento__item spotlight ${className}`} onPointerMove={handlePointerMove}>
      {children}
    </Reveal>
  )
}

// Anillo de puntaje que se completa y cuenta hasta `value` al entrar en pantalla.
function ScoreRing({ value = 100 }) {
  const [ref, inView] = useInView(0.5)
  const [count, setCount] = useState(0)
  const radius = 52
  const circumference = 2 * Math.PI * radius

  useEffect(() => {
    if (!inView) return
    let frame
    const start = performance.now()
    const duration = 1600

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1)
      setCount(Math.round(value * (1 - Math.pow(1 - progress, 3))))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, value])

  return (
    <div ref={ref} className="ring">
      <svg viewBox="0 0 120 120" aria-hidden="true">
        <circle className="ring__track" cx="60" cy="60" r={radius} />
        <circle
          className="ring__value"
          cx="60"
          cy="60"
          r={radius}
          strokeDasharray={circumference}
          strokeDashoffset={circumference * (1 - count / 100)}
        />
      </svg>
      <span className="ring__number">{count}</span>
    </div>
  )
}

export default function Services() {
  return (
    <section id="servicios" className="section">
      <div className="container">
        <Reveal className="section__head">
          <div>
            <p className="eyebrow">Qué hacemos</p>
            <h2 className="section__title">
              Todo lo que tu sitio <span className="serif">necesita</span>
            </h2>
          </div>
        </Reveal>

        <div className="bento">
          <SpotlightCard className="bento__item--wide">
            <div className="demo-resize" aria-hidden="true">
              <div className="demo-resize__frame">
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>
            <div>
              <h3 className="bento__title">Se adapta a cada pantalla</h3>
              <p className="bento__text">
                Diseño mobile first: tu sitio se ve impecable en celulares, tablets y computadoras.
              </p>
            </div>
          </SpotlightCard>

          <SpotlightCard delay={100}>
            <ScoreRing />
            <div>
              <h3 className="bento__title">Rendimiento</h3>
              <p className="bento__text">Sitios livianos que cargan al instante.</p>
            </div>
          </SpotlightCard>

          <SpotlightCard>
            <div className="demo-blob" aria-hidden="true" />
            <div>
              <h3 className="bento__title">Animaciones con intención</h3>
              <p className="bento__text">Movimiento que guía la mirada sin distraer.</p>
            </div>
          </SpotlightCard>

          <SpotlightCard delay={100} className="bento__item--wide">
            <div className="demo-search" aria-hidden="true">
              <div className="demo-search__bar">
                <span className="demo-search__query">páginas web para mi negocio</span>
              </div>
              <div className="demo-search__result">
                <small>tunegocio.com</small>
                <strong>Tu Negocio | Lo que buscás, cerca tuyo</strong>
                <i />
                <i />
              </div>
            </div>
            <div>
              <h3 className="bento__title">Listo para Google</h3>
              <p className="bento__text">
                Estructura, metadatos y buenas prácticas de SEO para que te encuentren.
              </p>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  )
}
