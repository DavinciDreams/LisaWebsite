export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  stars: number
  forks: number
  url: string
  gradient: string
  videoUrl?: string
  imageUrl?: string
}

export interface AboutCard {
  id: string
  icon: string
  title: string
  description: string
}

export interface SocialLink {
  name: string
  url: string
  icon: string
}

export interface GraphNode {
  id: string
  label: string
  type: 'person' | 'project' | 'organization' | 'skill'
  size: number
  color: string
  url?: string
  description?: string
  x?: number
  y?: number
  fx?: number | null
  fy?: number | null
  index?: number
  vx?: number
  vy?: number
}

export interface GraphEdge {
  id: string
  source: string
  target: string
  weight: number
  label?: string
}

export interface SocialGraph {
  nodes: GraphNode[]
  edges: GraphEdge[]
}
