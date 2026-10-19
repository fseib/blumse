import './Marquee.css'

const items = [
  'Landing pages',
  'Sitios institucionales',
  'Tiendas online',
  'Diseño responsive',
  'Animaciones',
  'SEO',
  'React',
]

// El contenido se duplica para que el desplazamiento infinito no tenga cortes.
export default function Marquee() {
  return (
    <div className="marquee">
      <div className="marquee__track">
        {[0, 1].map((copy) => (
          <ul key={copy} className="marquee__group" aria-hidden={copy === 1}>
            {items.map((item) => (
              <li key={item}>
                {item}
                <span className="marquee__star">✦</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}
