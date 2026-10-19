import './MockSite.css'

// Sitio de ejemplo que se usa cuando un proyecto todavía no tiene capturas.
// Usa container queries: el mismo componente se ve "mobile" dentro del
// celular y "desktop" dentro del navegador (ver MockSite.css y Devices.css).
export default function MockSite({ name, theme }) {
  const { bg, fg, accent, eyebrow, tagline, cta } = theme

  return (
    <div className="mock" style={{ '--m-bg': bg, '--m-fg': fg, '--m-accent': accent }} aria-hidden="true">
      <nav className="mock__nav">
        <strong className="mock__logo">{name}</strong>
        <ul className="mock__links">
          <li>Inicio</li>
          <li>Servicios</li>
          <li>Nosotros</li>
          <li>Contacto</li>
        </ul>
        <span className="mock__burger">
          <i />
          <i />
        </span>
      </nav>

      <section className="mock__hero">
        <div>
          <span className="mock__eyebrow">{eyebrow}</span>
          <h4 className="mock__title">{tagline}</h4>
          <div className="mock__lines">
            <i />
            <i />
          </div>
          <span className="mock__button">{cta}</span>
        </div>
        <div className="mock__image" />
      </section>

      <section className="mock__cards">
        {[0, 1, 2].map((n) => (
          <div key={n} className="mock__card">
            <span className="mock__icon" />
            <b />
            <div className="mock__lines">
              <i />
              <i />
            </div>
          </div>
        ))}
      </section>

      <section className="mock__gallery">
        {[0, 1, 2, 3, 4, 5].map((n) => (
          <span key={n} />
        ))}
      </section>

      <p className="mock__quote">“Un antes y un después para nuestro negocio.”</p>

      <section className="mock__cta">
        <h5>{cta}</h5>
        <span className="mock__button">Empezar</span>
      </section>

      <footer className="mock__footer">© {name}</footer>
    </div>
  )
}
