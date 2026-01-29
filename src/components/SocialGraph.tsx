import { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'
import { socialGraphData } from '../data/socialGraph'
import { GraphNode } from '../types'
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

const SocialGraph = () => {
  const svgRef = useRef<SVGSVGElement>(null)
  const [hoveredNode, setHoveredNode] = useState<GraphNode | null>(null)
  const [selectedNode, setSelectedNode] = useState<GraphNode | null>(null)

  useEffect(() => {
    if (!svgRef.current) return

    const svg = d3.select(svgRef.current)
    svg.selectAll('*').remove()

    const width = svgRef.current.clientWidth
    const height = 600

    const g = svg.append('g')

    // Zoom behavior
    const zoom = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.1, 4])
      .on('zoom', (event: d3.D3ZoomEvent<SVGSVGElement, unknown>) => {
        g.attr('transform', event.transform.toString())
      })

    svg.call(zoom as any)

    // Create simulation with proper typing
    const simulation = d3.forceSimulation<D3Node>(socialGraphData.nodes as D3Node[])
      .force('link', d3.forceLink<D3Node, D3Link>(socialGraphData.edges as D3Link[])
        .id((d: any) => d.id)
        .distance((d: any) => {
          const baseDistance = 100
          const weightFactor = (d as any).weight || 1
          return baseDistance / weightFactor
        })
      )
      .force('charge', d3.forceManyBody().strength(-300))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force('collision', d3.forceCollide().radius((d: any) => (d as D3Node).size + 10))

    // Create edges
    const link = g.append('g')
      .attr('class', 'links')
      .selectAll<SVGLineElement, D3Link>('line')
      .data(socialGraphData.edges as D3Link[])
      .enter()
      .append('line')
      .attr('stroke-width', (d: any) => Math.sqrt(d.weight || 1) * 2)
      .attr('stroke', '#4a5568')
      .attr('stroke-opacity', 0.6)

    // Create edge labels
    const linkLabel = g.append('g')
      .attr('class', 'link-labels')
      .selectAll<SVGTextElement, D3Link>('text')
      .data(socialGraphData.edges.filter((e: any) => e.label) as D3Link[])
      .enter()
      .append('text')
      .attr('font-size', '10px')
      .attr('fill', '#a0aec0')
      .attr('text-anchor', 'middle')
      .text((d: any) => d.label || '')

    // Create nodes
    const node = g.append('g')
      .attr('class', 'nodes')
      .selectAll<SVGGElement, D3Node>('g')
      .data(socialGraphData.nodes as D3Node[])
      .enter()
      .append('g')
      .attr('class', 'node')
      .style('cursor', 'pointer')
      .call(d3.drag<SVGGElement, D3Node>()
        .on('start', dragStarted)
        .on('drag', dragged)
        .on('end', dragEnded) as any
      )

    // Add circles to nodes
    node.append('circle')
      .attr('r', (d: D3Node) => d.size)
      .attr('fill', (d: D3Node) => d.color)
      .attr('stroke', '#fff')
      .attr('stroke-width', 2)
      .on('mouseenter', function(_event: MouseEvent, d: D3Node) {
        setHoveredNode(d)
        d3.select(this as SVGCircleElement)
          .transition()
          .duration(200)
          .attr('r', d.size * 1.3)
          .attr('stroke-width', 4)
      })
      .on('mouseleave', function(this: SVGCircleElement, d: D3Node) {
        if (selectedNode?.id !== d.id) {
          setHoveredNode(null)
        }
        d3.select(this)
          .transition()
          .duration(200)
          .attr('r', d.size)
          .attr('stroke-width', 2)
      })
      .on('click', (_event: MouseEvent, d: D3Node) => {
        setSelectedNode(d)
        if (d.url) {
          window.open(d.url, '_blank')
        }
      })

    // Add labels to nodes
    node.append('text')
      .attr('dy', (d: D3Node) => d.size + 15)
      .attr('text-anchor', 'middle')
      .attr('fill', '#e2e8f0')
      .attr('font-size', '11px')
      .attr('font-weight', '500')
      .style('text-shadow', '0 1px 3px rgba(0,0,0,0.5)')
      .text((d: D3Node) => d.label.length > 15 ? d.label.substring(0, 12) + '...' : d.label)

    // Add title for hover
    node.append('title')
      .text((d: D3Node) => `${d.label}\n${d.description || ''}${d.url ? '\nClick to visit' : ''}`)

    // Update positions on tick
    simulation.on('tick', () => {
      link
        .attr('x1', (d: any) => (d.source as D3Node).x)
        .attr('y1', (d: any) => (d.source as D3Node).y)
        .attr('x2', (d: any) => (d.target as D3Node).x)
        .attr('y2', (d: any) => (d.target as D3Node).y)

      linkLabel
        .attr('x', (d: any) => ((d.source as D3Node).x + (d.target as D3Node).x) / 2)
        .attr('y', (d: any) => ((d.source as D3Node).y + (d.target as D3Node).y) / 2)

      node
        .attr('transform', (d: D3Node) => `translate(${d.x},${d.y})`)
    })

    function dragStarted(event: d3.D3DragEvent<SVGGElement, D3Node, D3Node>, d: D3Node) {
      if (!event.active) simulation.alphaTarget(0.3).restart()
      d.fx = d.x
      d.fy = d.y
    }

    function dragged(event: d3.D3DragEvent<SVGGElement, D3Node, D3Node>, d: D3Node) {
      d.fx = event.x
      d.fy = event.y
    }

    function dragEnded(event: d3.D3DragEvent<SVGGElement, D3Node, D3Node>, d: D3Node) {
      if (!event.active) simulation.alphaTarget(0)
      d.fx = null
      d.fy = null
    }

    return () => {
      simulation.stop()
    }
  }, [selectedNode])

  const getNodeStats = () => {
    const types = socialGraphData.nodes.reduce((acc: Record<string, number>, node: GraphNode) => {
      acc[node.type] = (acc[node.type] || 0) + 1
      return acc
    }, {} as Record<string, number>)

    return {
      total: socialGraphData.nodes.length,
      connections: socialGraphData.edges.length,
      project: types.project || 0,
      organization: types.organization || 0,
      person: types.person || 0,
      skill: types.skill || 0
    }
  }

  const stats = getNodeStats()

  return (
    <section id="social-graph" className="social-graph-section">
      <div className="container">
        <h2 className="section-title">Social Graph</h2>
        <p className="section-subtitle">
          Interactive visualization of projects, organizations, and connections
        </p>

        <div className="graph-stats">
          <div className="stat-item">
            <span className="stat-value">{stats.total}</span>
            <span className="stat-label">Nodes</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">{stats.connections}</span>
            <span className="stat-label">Connections</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">{stats.project || 0}</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">{stats.organization || 0}</span>
            <span className="stat-label">Organizations</span>
          </div>
        </div>

        <div className="graph-container">
          <svg
            ref={svgRef}
            className="graph-svg"
            style={{ width: '100%', height: '600px' }}
          />
        </div>

        <div className="graph-legend">
          <div className="legend-item">
            <span className="legend-color" style={{ background: '#8b5cf6' }}></span>
            <span>Person</span>
          </div>
          <div className="legend-item">
            <span className="legend-color" style={{ background: '#06b6d4' }}></span>
            <span>Organization</span>
          </div>
          <div className="legend-item">
            <span className="legend-color" style={{ background: '#f43f5e' }}></span>
            <span>Project</span>
          </div>
          <div className="legend-item">
            <span className="legend-color" style={{ background: '#3178c6' }}></span>
            <span>Skill</span>
          </div>
        </div>

        {hoveredNode && (
          <div className="node-tooltip">
            <h4>{hoveredNode.label}</h4>
            <p>{hoveredNode.description}</p>
            {hoveredNode.url && (
              <a href={hoveredNode.url} target="_blank" rel="noopener noreferrer">
                Visit →
              </a>
            )}
          </div>
        )}

        <div className="graph-instructions">
          <p>🖱️ Drag nodes to reposition • Scroll to zoom • Click nodes to visit links</p>
        </div>
      </div>
    </section>
  )
}

export default SocialGraph
