import { useState } from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { projects } from '../data/projects'
import './Projects.css'

const Projects = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  const [ref, isVisible] = useIntersectionObserver(0.1)

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div ref={ref} className={`projects-grid ${isVisible ? 'visible' : ''}`}>
          {projects.map((project) => (
            <div
              key={project.id}
              className={`project-card ${hoveredCard === project.id ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="project-image">
                {project.videoUrl?.includes('youtube') || project.videoUrl?.includes('youtu.be') ? (
                  <iframe
                    className="project-video"
                    src={project.videoUrl}
                    title={project.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : project.videoUrl ? (
                  <video
                    className="project-video"
                    src={project.videoUrl}
                    muted
                    loop
                    playsInline
                    onMouseEnter={(e) => e.currentTarget.play()}
                    onMouseLeave={(e) => e.currentTarget.pause()}
                  />
                ) : project.imageUrl ? (
                  <img
                    className="project-image-img"
                    src={project.imageUrl}
                    alt={project.title}
                  />
                ) : (
                  <div
                    className="project-gradient"
                    style={{ background: project.gradient }}
                  />
                )}
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="project-stats">
                  <span>⭐ {project.stars}</span>
                  <span>🍴 {project.forks}</span>
                </div>
              </div>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
