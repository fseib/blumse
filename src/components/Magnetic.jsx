import { useRef } from 'react'

// Hace que el contenido "siga" levemente al cursor cuando pasa cerca.
export default function Magnetic({ strength = 0.3, children }) {
  const ref = useRef(null)

  function handlePointerMove(event) {
    const rect = ref.current.getBoundingClientRect()
    const x = event.clientX - (rect.left + rect.width / 2)
    const y = event.clientY - (rect.top + rect.height / 2)
    ref.current.style.transform = `translate(${x * strength}px, ${y * strength}px)`
  }

  function handlePointerLeave() {
    ref.current.style.transform = ''
  }

  return (
    <span
      ref={ref}
      className="magnetic"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      {children}
    </span>
  )
}
