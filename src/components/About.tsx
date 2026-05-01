import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import './About.css'

const focuses = [
  { label: 'Multi-Agent Systems', detail: 'Architectures where agents negotiate, specialize, and self-organize toward emergent goals.' },
  { label: 'Decentralized Compute', detail: 'Distributing intelligence across peer networks without centralized coordination.' },
  { label: 'Cognitive Architecture', detail: 'Memory, attention, and goal structures that allow agents to reason across time.' },
  { label: 'Scientific Rendering', detail: 'WebGL and Three.js pipelines for real-time visualization of complex system dynamics.' },
]

const About = () => {
  const [ref, isVisible] = useIntersectionObserver(0.1)

  return (
    <section id="about" className="about">
      <div className="container">
        <div ref={ref} className={`about-inner ${isVisible ? 'visible' : ''}`}>

          <div className="about-bio">
            <p className="about-eyebrow">Background</p>
            <h2 className="about-heading">Research at the edge<br />of intelligence and form</h2>
            <p className="about-body">
              I work at the intersection of multi-agent AI, decentralized systems, and real-time 3D.
              My research focuses on how autonomous agents develop persistent memory, negotiate shared
              representations, and produce coherent behavior without centralized control.
            </p>
            <p className="about-body">
              Outside of research I build open-source tooling — graph editors, avatar systems,
              spatial AI — that makes these ideas tangible and interactive.
            </p>
          </div>

          <div className="about-focuses">
            <p className="about-eyebrow">Research Focus</p>
            <ul className="focus-list">
              {focuses.map((f, i) => (
                <li key={i} className="focus-item" style={{ transitionDelay: `${i * 0.07}s` }}>
                  <span className="focus-label">{f.label}</span>
                  <span className="focus-detail">{f.detail}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About
