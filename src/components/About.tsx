import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import './About.css'

interface AboutCard {
  icon: string
  title: string
  description: string
}

const aboutCards: AboutCard[] = [
  {
    icon: '🤖',
    title: 'AI Researcher',
    description: 'Pushing the boundaries of multimodal models and evolving agents'
  },
  {
    icon: '🌐',
    title: 'Decentralized Systems',
    description: 'Building open infrastructure for the metaverse at Atlas Foundation'
  },
  {
    icon: '🧠',
    title: 'Spatial Intelligence',
    description: 'Creating AI companions that understand and navigate 3D worlds'
  }
]

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-grid">
          {aboutCards.map((card, index) => {
            const [ref, isVisible] = useIntersectionObserver(0.1)

            return (
              <div
                key={index}
                ref={ref}
                className={`about-card ${isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="card-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default About
