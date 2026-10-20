const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>© {year} Blumse</p>
        <a href="#inicio">Volver arriba ↑</a>
      </div>
    </footer>
  )
}
