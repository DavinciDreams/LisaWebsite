import './Hero.css'
import '../utils/animations.css'

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <div className="hero-label">AI Researcher &amp; Engineer</div>
        <h1 className="hero-name">Lisa Mega Watts</h1>
        <p className="hero-tagline">Decentralized Intelligence &nbsp;·&nbsp; Evolving Agents &nbsp;·&nbsp; Emergent Systems</p>
        <div className="hero-description">
          <p>
            Building at the intersection of multi-agent AI, decentralized computation, and cognitive architecture.
            Focused on systems that adapt, collaborate, and evolve beyond their initial design.
          </p>
        </div>
        <div className="hero-actions">
          <a href="#projects" className="btn-primary">View Research</a>
          <a href="#about" className="btn-secondary">About</a>
        </div>
        <div className="hero-meta">
          <span className="meta-tag">Open Source</span>
          <span className="meta-divider">·</span>
          <span className="meta-tag">Multi-Agent Systems</span>
          <span className="meta-divider">·</span>
          <span className="meta-tag">WebGL / Three.js</span>
        </div>
      </div>
    </section>
  )
}

export default Hero
