import { useInView } from '../hooks/useInView'

// Aparece con un fade + desplazamiento cuando entra en pantalla.
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', style, children, ...rest }) {
  const [ref, inView] = useInView(0.15)

  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? 'is-visible' : ''} ${className}`}
      style={{ ...style, '--delay': `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
