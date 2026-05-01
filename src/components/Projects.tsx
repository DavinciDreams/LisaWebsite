import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { projects } from '../data/projects'
import './Projects.css'

const Projects = () => {
  const [ref, isVisible] = useIntersectionObserver(0.05)

  return (
    <section id="projects" className="projects">
      <div className="container">
        <p className="projects-eyebrow">Work</p>
        <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '0.5rem' }}>Selected Projects</h2>
        <p className="projects-subtitle">Open-source research, tooling, and experiments.</p>

        <div ref={ref} className={`projects-grid ${isVisible ? 'visible' : ''}`}>
          {projects.map((project, index) => (
            <a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
              style={{ transitionDelay: `${index * 0.05}s` }}
            >
              <div className="project-visual">
                {project.imageUrl ? (
                  <img src={project.imageUrl} alt={project.title} className="project-img" />
                ) : (
                  <div className="project-gradient" style={{ background: project.gradient }} />
                )}
                {project.featured && <span className="badge featured">Featured</span>}
                {project.isNew && <span className="badge new">New</span>}
              </div>

              <div className="project-body">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-arrow">↗</span>
                </div>
                <p className="project-desc">{project.description}</p>
                <div className="project-footer">
                  <div className="project-tags">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <span key={i} className="tag">{tag}</span>
                    ))}
                  </div>
                  {project.stars > 0 && (
                    <span className="project-stars">{project.stars} ★</span>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
