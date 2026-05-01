import { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'
import { socialGraphData } from '../data/socialGraph'
import { GraphNode } from '../types'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import './SocialGraph.css'

interface D3Node extends GraphNode {
  x: number
  y: number
  fx: number | null
  fy: number | null
  index: number
  vx: number
  vy: number
}

interface D3Link extends d3.SimulationLinkDatum<D3Node> {
  source: D3Node | string
  target: D3Node | string
}

const TYPE_COLORS: Record<string, string> = {
  person:       '#38bdf8',
  organization: '#22d3c8',
  project:      '#64748b',
  skill:        '#0ea5e9',
}

const SocialGraph = () => {
  const svgRef = useRef<SVGSVGElement>(null)
  const [hoveredNode, setHoveredNode] = useState<GraphNode | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [graphRef, isSectionVisible] = useIntersectionObserver(0.1)

  useEffect(() => {
    if (!svgRef.current || !isSectionVisible) return

    setIsLoading(true)
    const timer = setTimeout(() => {
      initGraph()
      setIsLoading(false)
    }, 600)

    return () => clearTimeout(timer)
  }, [isSectionVisible])

  const initGraph = () => {
    if (!svgRef.current) return

    const svg = d3.select(svgRef.current)
    svg.selectAll('*').remove()

    const width = svgRef.current.clientWidth
    const height = window.innerWidth < 768 ? 400 : 580

    const g = svg.append('g')

    const zoom = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.2, 4])
      .on('zoom', (event: d3.D3ZoomEvent<SVGSVGElement, unknown>) => {
        g.attr('transform', event.transform.toString())
      })
    svg.call(zoom as any)

    const simulation = d3.forceSimulation<D3Node>(socialGraphData.nodes as D3Node[])
      .force('link', d3.forceLink<D3Node, D3Link>(socialGraphData.edges as D3Link[])
        .id((d: any) => d.id)
        .distance((d: any) => 100 / ((d as any).weight || 1))
      )
      .force('charge', d3.forceManyBody().strength(-280))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force('collision', d3.forceCollide().radius((d: any) => (d as D3Node).size + 10))

    const link = g.append('g')
      .selectAll<SVGLineElement, D3Link>('line')
      .data(socialGraphData.edges as D3Link[])
      .enter().append('line')
      .attr('stroke', 'rgba(255,255,255,0.08)')
      .attr('stroke-width', (d: any) => Math.sqrt(d.weight || 1) * 1.5)

    const node = g.append('g')
      .selectAll<SVGGElement, D3Node>('g')
      .data(socialGraphData.nodes as D3Node[])
      .enter().append('g')
      .attr('class', 'node')
      .style('cursor', 'pointer')
      .call(d3.drag<SVGGElement, D3Node>()
        .on('start', (event, d) => {
          if (!event.active) simulation.alphaTarget(0.3).restart()
          d.fx = d.x; d.fy = d.y
        })
        .on('drag', (event, d) => { d.fx = event.x; d.fy = event.y })
        .on('end', (event, d) => {
          if (!event.active) simulation.alphaTarget(0)
          d.fx = null; d.fy = null
        }) as any
      )

    node.append('circle')
      .attr('r', (d: D3Node) => d.size)
      .attr('fill', (d: D3Node) => TYPE_COLORS[d.type] ?? '#38bdf8')
      .attr('fill-opacity', 0.85)
      .attr('stroke', 'rgba(255,255,255,0.15)')
      .attr('stroke-width', 1)
      .on('mouseenter', function(_event: MouseEvent, d: D3Node) {
        setHoveredNode(d)
        d3.select(this as SVGCircleElement).transition().duration(150)
          .attr('r', d.size * 1.3).attr('stroke-width', 2)
      })
      .on('mouseleave', function(this: SVGCircleElement, d: D3Node) {
        setHoveredNode(null)
        d3.select(this).transition().duration(150)
          .attr('r', d.size).attr('stroke-width', 1)
      })
      .on('click', (_event: MouseEvent, d: D3Node) => {
        if (d.url) window.open(d.url, '_blank')
      })

    node.append('text')
      .attr('dy', (d: D3Node) => d.size + 12)
      .attr('text-anchor', 'middle')
      .attr('fill', 'rgba(232,237,242,0.7)')
      .attr('font-size', '10px')
      .attr('font-family', 'JetBrains Mono, monospace')
      .style('pointer-events', 'none')
      .text((d: D3Node) => d.label.length > 14 ? d.label.substring(0, 12) + '…' : d.label)

    simulation.on('tick', () => {
      link
        .attr('x1', (d: any) => (d.source as D3Node).x)
        .attr('y1', (d: any) => (d.source as D3Node).y)
        .attr('x2', (d: any) => (d.target as D3Node).x)
        .attr('y2', (d: any) => (d.target as D3Node).y)

      node.attr('transform', (d: D3Node) => `translate(${d.x},${d.y})`)
    })

    return () => simulation.stop()
  }

  const stats = (() => {
    const types = socialGraphData.nodes.reduce((acc: Record<string, number>, n: GraphNode) => {
      acc[n.type] = (acc[n.type] || 0) + 1
      return acc
    }, {})
    return {
      total: socialGraphData.nodes.length,
      connections: socialGraphData.edges.length,
      projects: types.project || 0,
      orgs: types.organization || 0,
    }
  })()

  return (
    <section id="social-graph" className="social-graph-section">
      <div className="container">
        <div className="section-header">
          <p className="about-eyebrow">Network</p>
          <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '0.25rem' }}>Collaboration Graph</h2>
          <p className="section-subtitle">Projects, organizations, and connections — drag to explore.</p>
        </div>

        <div className="graph-stats">
          {[
            { value: stats.total,       label: 'Nodes' },
            { value: stats.connections, label: 'Edges' },
            { value: stats.projects,    label: 'Projects' },
            { value: stats.orgs,        label: 'Orgs' },
          ].map(s => (
            <div className="stat-item" key={s.label}>
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>

        <div className="graph-container" ref={graphRef}>
          {isLoading && (
            <div className="graph-loading">
              <div className="spinner" />
              <p>Initializing graph</p>
            </div>
          )}
          <svg
            ref={svgRef}
            className={`graph-svg ${isLoading ? 'loading' : ''}`}
            style={{ width: '100%', height: window.innerWidth < 768 ? '400px' : '580px' }}
            aria-label="Collaboration network graph"
            role="img"
          />
        </div>

        <div className="graph-legend" role="list">
          {Object.entries(TYPE_COLORS).map(([type, color]) => (
            <div className="legend-item" role="listitem" key={type}>
              <span className="legend-color" style={{ background: color }} aria-hidden="true" />
              <span>{type.charAt(0).toUpperCase() + type.slice(1)}</span>
            </div>
          ))}
        </div>

        <div className="graph-instructions">
          <p>Scroll to zoom · Drag nodes · Click to open link</p>
        </div>

        {hoveredNode && (
          <div className="node-tooltip" role="tooltip" aria-live="polite">
            <h4>{hoveredNode.label}</h4>
            {hoveredNode.description && <p>{hoveredNode.description}</p>}
            {hoveredNode.url && (
              <a href={hoveredNode.url} target="_blank" rel="noopener noreferrer">
                Open ↗
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

export default SocialGraph
