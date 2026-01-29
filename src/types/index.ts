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
