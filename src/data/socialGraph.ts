import { SocialGraph } from '../types'

export const socialGraphData: SocialGraph = {
  nodes: [
    // Central node - Lisa
    {
      id: 'lisa',
      label: 'Lisa Mega Watts',
      type: 'person',
      size: 20,
      color: '#8b5cf6',
      description: 'AI Developer & Open Source Contributor',
      url: 'https://github.com/DavinciDreams'
    },
    // Organizations
    {
      id: 'atlas',
      label: 'Atlas Foundation',
      type: 'organization',
      size: 15,
      color: '#06b6d4',
      description: 'Open Metaverse Infrastructure',
      url: 'https://github.com/AtlasFoundation'
    },
    {
      id: 'ethereal',
      label: 'Ethereal Engine',
      type: 'organization',
      size: 15,
      color: '#f43f5e',
      description: 'Decentralized Infrastructure',
      url: 'https://github.com/EtherealEngine'
    },
    {
      id: 'super',
      label: 'Super Reality',
      type: 'organization',
      size: 12,
      color: '#10b981',
      description: 'Spatial AI Platform',
      url: 'https://github.com/super-reality'
    },
    // Core Projects
    {
      id: 'digital-beings',
      label: 'Digital Beings',
      type: 'project',
      size: 14,
      color: '#8b5cf6',
      description: 'AI + Real-time Communication',
      url: 'https://github.com/EtherealEngine/Digital-Beings'
    },
    {
      id: 'avatar-creator',
      label: 'Avatar Creator',
      type: 'project',
      size: 12,
      color: '#f43f5e',
      description: 'Open Metaverse Character Creator',
      url: 'https://github.com/AtlasFoundation/AvatarCreator'
    },
    {
      id: 'super-being',
      label: 'Super Being',
      type: 'project',
      size: 12,
      color: '#06b6d4',
      description: 'Spatial Intelligence AI',
      url: 'https://github.com/super-reality/SuperBeing'
    },
    {
      id: 'thoth',
      label: 'Thoth',
      type: 'project',
      size: 10,
      color: '#f59e0b',
      description: 'AI Pipeline Editor',
      url: 'https://github.com/AtlasFoundation/Thoth'
    },
    {
      id: 'thales',
      label: 'Thales',
      type: 'project',
      size: 10,
      color: '#8b5cf6',
      description: 'Philosopher AI Bot',
      url: 'https://github.com/DavinciDreams/Thales'
    },
    {
      id: 'nexus',
      label: 'The Nexus',
      type: 'project',
      size: 11,
      color: '#f43f5e',
      description: '3D Social World',
      url: 'https://hyperfy.io/nexus'
    },
    {
      id: 'generous',
      label: 'Generous.rocks',
      type: 'project',
      size: 10,
      color: '#10b981',
      description: 'AI Generosity Platform',
      url: 'https://generous.rocks/about'
    },
    // Skills/Tech
    {
      id: 'typescript',
      label: 'TypeScript',
      type: 'skill',
      size: 8,
      color: '#3178c6'
    },
    {
      id: 'react',
      label: 'React',
      type: 'skill',
      size: 8,
      color: '#61dafb'
    },
    {
      id: 'threejs',
      label: 'Three.js',
      type: 'skill',
      size: 8,
      color: '#ffffff'
    },
    {
      id: 'ai',
      label: 'AI/ML',
      type: 'skill',
      size: 9,
      color: '#8b5cf6'
    },
    {
      id: 'webgl',
      label: 'WebGL',
      type: 'skill',
      size: 7,
      color: '#f43f5e'
    },
    {
      id: 'nodejs',
      label: 'Node.js',
      type: 'skill',
      size: 7,
      color: '#68a063'
    },
    {
      id: 'metaverse',
      label: 'Metaverse',
      type: 'skill',
      size: 8,
      color: '#06b6d4'
    }
  ],
  edges: [
    // Lisa to Organizations
    { id: 'e1', source: 'lisa', target: 'atlas', weight: 3, label: 'Contributor' },
    { id: 'e2', source: 'lisa', target: 'ethereal', weight: 3, label: 'Contributor' },
    { id: 'e3', source: 'lisa', target: 'super', weight: 2, label: 'Contributor' },

    // Lisa to Projects
    { id: 'e4', source: 'lisa', target: 'digital-beings', weight: 3 },
    { id: 'e5', source: 'lisa', target: 'avatar-creator', weight: 2 },
    { id: 'e6', source: 'lisa', target: 'super-being', weight: 2 },
    { id: 'e7', source: 'lisa', target: 'thoth', weight: 2 },
    { id: 'e8', source: 'lisa', target: 'thales', weight: 3 },
    { id: 'e9', source: 'lisa', target: 'nexus', weight: 2 },
    { id: 'e10', source: 'lisa', target: 'generous', weight: 2 },

    // Organizations to Projects
    { id: 'e11', source: 'atlas', target: 'avatar-creator', weight: 2 },
    { id: 'e12', source: 'atlas', target: 'thoth', weight: 2 },
    { id: 'e13', source: 'ethereal', target: 'digital-beings', weight: 2 },
    { id: 'e14', source: 'super', target: 'super-being', weight: 2 },

    // Projects to Skills
    { id: 'e15', source: 'digital-beings', target: 'typescript', weight: 2 },
    { id: 'e16', source: 'digital-beings', target: 'ai', weight: 2 },
    { id: 'e17', source: 'avatar-creator', target: 'threejs', weight: 2 },
    { id: 'e18', source: 'avatar-creator', target: 'webgl', weight: 2 },
    { id: 'e19', source: 'super-being', target: 'ai', weight: 2 },
    { id: 'e20', source: 'thoth', target: 'react', weight: 2 },
    { id: 'e21', source: 'thales', target: 'nodejs', weight: 2 },
    { id: 'e22', source: 'nexus', target: 'metaverse', weight: 2 },
    { id: 'e23', source: 'nexus', target: 'threejs', weight: 2 },

    // Lisa to Skills
    { id: 'e24', source: 'lisa', target: 'typescript', weight: 3 },
    { id: 'e25', source: 'lisa', target: 'react', weight: 3 },
    { id: 'e26', source: 'lisa', target: 'threejs', weight: 2 },
    { id: 'e27', source: 'lisa', target: 'ai', weight: 3 },
    { id: 'e28', source: 'lisa', target: 'webgl', weight: 2 },
    { id: 'e29', source: 'lisa', target: 'nodejs', weight: 2 },
    { id: 'e30', source: 'lisa', target: 'metaverse', weight: 3 }
  ]
}
