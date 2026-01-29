import { useState } from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { projects } from '../data/projects'
import './Projects.css'

const Projects = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  const [ref, isVisible] = useIntersectionObserver(0.1)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = (y - centerY) / 10
    const rotateY = (centerX - x) / 10

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)'
    setHoveredCard(null)
  }

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div ref={ref} className={`projects-grid ${isVisible ? 'visible' : ''}`}>
          {projects.map((project) => (
            <div
              key={project.id}
              className={`project-card ${hoveredCard === project.id ? 'hovered' : ''}`}
              onMouseMove={(e) => {
                setHoveredCard(project.id)
                handleMouseMove(e)
              }}
              onMouseLeave={handleMouseLeave}
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
