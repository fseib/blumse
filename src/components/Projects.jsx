import { projects } from '../data/projects'
import { Browser, Phone } from './Devices'
import ProjectScreen from './ProjectScreen'
import Reveal from './Reveal'
import './Projects.css'

export default function Projects() {
  return (
    <section id="proyectos" className="section">
      <div className="container">
        <Reveal className="section__head">
          <div>
            <p className="eyebrow">Trabajos seleccionados</p>
            <h2 className="section__title">
              Proyectos <span className="serif">recientes</span>
            </h2>
          </div>
          <p className="projects__hint">
            Así se ven en escritorio y en celular. Entrá a cada uno para verlo funcionando.
          </p>
        </Reveal>

        <div className="projects__list">
          {projects.map((project, index) => (
            <article key={project.id} className="showcase">
              <Reveal className="showcase__info">
                <span className="showcase__index">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="showcase__title">{project.title}</h3>
                <p className="showcase__meta">
                  <span>{project.category}</span>
                  <span>{project.year}</span>
                </p>
                <p className="showcase__desc">{project.description}</p>
                <ul className="tags">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                {project.demoUrl ? (
                  <a href={project.demoUrl} target="_blank" rel="noreferrer" className="showcase__link">
                    Ver sitio en vivo <span className="button__arrow">↗</span>
                  </a>
                ) : (
                  <span className="showcase__soon">Próximamente online</span>
                )}
              </Reveal>

              <Reveal
                delay={150}
                className="showcase__stage"
                style={{ '--stage-bg': `color-mix(in srgb, ${project.theme.accent} 14%, var(--surface))` }}
              >
                <div className="showcase__browser">
                  <Browser url={project.url}>
                    <ProjectScreen project={project} variant="desktop" />
                  </Browser>
                </div>
                <div className="showcase__phone">
                  <Phone>
                    <ProjectScreen project={project} variant="mobile" />
                  </Phone>
                </div>
              </Reveal>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
