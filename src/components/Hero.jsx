import { useEffect, useRef, useState } from 'react'
import { projects } from '../data/projects'
import { Phone } from './Devices'
import Magnetic from './Magnetic'
import { useMediaQuery } from '../hooks/useMediaQuery'
import './Hero.css'

// Cada palabra se muestra con una tipografía distinta (estilos en Hero.css).
// `font` se usa para precargar la fuente antes de que aparezca.
const words = [
  { text: 'rápidos', style: 'unbounded', font: '600 1em "Unbounded"' },
  { text: 'modernos', style: 'syne', font: '800 1em "Syne"' },
  { text: 'únicos', style: 'serif', font: 'italic 400 1em "Instrument Serif"' },
  { text: 'elegantes', style: 'playfair', font: '700 1em "Playfair Display SC"' },
  { text: 'precisos', style: 'mono', font: '700 1em "Space Mono"' },
  { text: 'a medida', style: 'script', font: '700 1em "Caveat"' },
]

// Proyectos que van rotando en el celular, con la captura de su primera pantalla.
const slides = projects
  .map((project) => ({ project, image: project.images?.hero ?? project.images?.mobile }))
  .filter((slide) => slide.image)
const SLIDE_MS = 4000

export default function Hero() {
  const heroRef = useRef(null)
  const [wordIndex, setWordIndex] = useState(0)
  const word = words[wordIndex]
  const [slideIndex, setSlideIndex] = useState(0)
  const reduceMotion = useMediaQuery('(prefers-reduced-motion: reduce)')

  useEffect(() => {
    words.forEach(({ font }) => document.fonts?.load(font))
  }, [])

  useEffect(() => {
    const id = setInterval(() => setWordIndex((i) => (i + 1) % words.length), 2400)
    return () => clearInterval(id)
  }, [])

  // Al cambiar de proyecto (solo o con los puntos) se reinicia el temporizador.
  useEffect(() => {
    if (reduceMotion || slides.length < 2) return
    const id = setTimeout(() => setSlideIndex((i) => (i + 1) % slides.length), SLIDE_MS)
    return () => clearTimeout(id)
  }, [slideIndex, reduceMotion])

  // Mueve el brillo de fondo y rota el celular según la posición del cursor.
  function handlePointerMove(event) {
    const hero = heroRef.current
    const rect = hero.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width
    const y = (event.clientY - rect.top) / rect.height
    hero.style.setProperty('--mx', `${x * 100}%`)
    hero.style.setProperty('--my', `${y * 100}%`)
    hero.style.setProperty('--tilt-x', `${(0.5 - y) * 12}deg`)
    hero.style.setProperty('--tilt-y', `${(x - 0.5) * 16}deg`)
  }

  return (
    <section id="inicio" className="hero" ref={heroRef} onPointerMove={handlePointerMove}>
      <div className="hero__grid" aria-hidden="true" />
      <div className="hero__glow" aria-hidden="true" />

      <div className="container hero__inner">
        <div>
          <p className="pill">
            <span className="pill__dot" />
            Disponible para nuevos proyectos
          </p>

          <h1 className="hero__title">
            <span className="sr-only">
              Sitios web que se sienten rápidos, modernos, únicos, elegantes, precisos y a medida
            </span>
            <span className="line" style={{ '--i': 0 }} aria-hidden="true">
              <span>Sitios web</span>
            </span>
            <span className="line" style={{ '--i': 1 }} aria-hidden="true">
              <span>que se sienten</span>
            </span>
            <span className="line line--word" style={{ '--i': 2 }} aria-hidden="true">
              <span>
                <span key={wordIndex} className={`hero__word hero__word--${word.style}`}>
                  {word.text}
                </span>
              </span>
            </span>
          </h1>

          <p className="hero__lead">
            Diseñamos y desarrollamos páginas web responsive, con animaciones cuidadas y pensadas para
            convertir visitas en clientes.
          </p>

          <div className="hero__actions">
            <Magnetic>
              <a href="#proyectos" className="button">
                Ver proyectos <span className="button__arrow">→</span>
              </a>
            </Magnetic>
            <a href="#contacto" className="button button--ghost">
              Contactanos
            </a>
          </div>
        </div>

        <div className="hero__device">
          <div className="hero__tilt">
            <div className="hero__float">
              <Phone scroll="none">
                <div className="hero__slides">
                  {slides.map(({ project, image }, i) => (
                    <img
                      key={project.id}
                      src={image}
                      alt={i === slideIndex ? `${project.title} en celular` : ''}
                      className={`hero__slide ${i === slideIndex ? 'is-active' : ''}`}
                    />
                  ))}
                </div>
              </Phone>
            </div>
            {slides.length > 1 && (
              <div className="hero__dots">
                {slides.map(({ project }, i) => (
                  <button
                    key={project.id}
                    type="button"
                    className={`hero__dot ${i === slideIndex ? 'is-active' : ''}`}
                    aria-label={`Ver ${project.title}`}
                    aria-pressed={i === slideIndex}
                    onClick={() => setSlideIndex(i)}
                  />
                ))}
              </div>
            )}
            <span className="chip chip--1">
              <span className="chip__icon" style={{ background: 'var(--accent)' }} />
              Mobile first
            </span>
            <span className="chip chip--2">
              <span className="chip__icon" style={{ background: 'var(--petrol)' }} />
              Carga ultrarrápida
            </span>
            <span className="chip chip--3">
              <span className="chip__icon" style={{ background: 'var(--sand)' }} />
              Animaciones fluidas
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
