import './Header.css'

const links = [
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Header() {
  return (
    <>
      <div className="progress" aria-hidden="true" />
      <header className="header">
        <div className="header__pill">
          <a href="#inicio" className="header__logo">
            <span className="header__dot" />
            <span className="header_font">Blumse</span>
          </a>
          <nav>
            <ul className="header__nav">
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <a href="#contacto" className="header__cta">Hablemos</a>
        </div>
      </header>
    </>
  )
}
