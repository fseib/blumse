import Magnetic from './Magnetic'
import Reveal from './Reveal'
import './Contact.css'

const email = 'seibfacundo@gmail.com'
const phone = '+54 9 11 5113-9558 (Mariano)'

export default function Contact() {
  return (
    <section id="contacto" className="contact">
      <div className="contact__glow" aria-hidden="true" />
      <div className="container contact__inner">
        <Reveal>
          <p className="eyebrow">¿Tenés un proyecto en mente?</p>
        </Reveal>
        <Reveal as="h2" delay={100} className="contact__title">
          Hablemos<span className="serif contact__dot">.</span>
        </Reveal>
        <Reveal style={{ display: 'flex', flexDirection: 'column', gap: '20px' }} delay={200}>
          <Magnetic strength={0.4}>
            <a href={`mailto:${email}`} className="button button--light button--big">
              {email} <span className="button__arrow">→</span>
            </a>
          </Magnetic>
          <Magnetic strength={0.4}>
            <a href={`https://wa.me/5491151139558`} className="button button--light button--big">
              {phone} <span className="button__arrow">→</span>
            </a>
          </Magnetic>
          <p className="contact__note">Respondemos en menos de 24 horas.</p>
        </Reveal>
      </div>
    </section>
  )
}
