import { SocialGraph } from '../types'

export const socialGraphData: SocialGraph = {
  nodes: [
    // Central node - Lisa (Co-founder)
    {
      id: 'lisa',
      label: 'Lisa Mega Watts',
      type: 'person',
      size: 25,
      color: '#8b5cf6',
      description: 'Co-founder & AI/ML Architect • Building the future of AI, metaverse, and decentralized systems',
      url: 'https://github.com/DavinciDreams'
    },
    // Organizations (Co-founded)
    {
      id: 'atlas',
      label: 'Atlas Foundation',
      type: 'organization',
      size: 18,
      color: '#06b6d4',
      description: 'Co-founder • Open Metaverse Infrastructure & AI/ML in 3D',
      url: 'https://github.com/AtlasFoundation'
    },
    {
      id: 'super-reality',
      label: 'Super Reality',
      type: 'organization',
      size: 18,
      color: '#10b981',
      description: 'Co-founder • Spatial AI Platform & Brain-Computer Interfaces',
      url: 'https://github.com/super-reality'
    },
    {
      id: 'tensornetics',
      label: 'Tensornetics',
      type: 'organization',
      size: 16,
      color: '#f59e0b',
      description: 'Co-founder • Non-invasive BCI, Tensors & ML for thought interpretation',
      url: 'https://github.com/Tensornetics'
    },
    {
      id: 'nexus-org',
      label: 'The Nexus',
      type: 'organization',
      size: 16,
      color: '#f43f5e',
      description: 'Co-founder • Immersive 3D Social World on Hyperfy',
      url: 'https://hyperfy.io/nexus'
    },
    {
      id: 'ethereal',
      label: 'Ethereal Engine',
      type: 'organization',
      size: 14,
      color: '#ec4899',
      description: 'Contributor • Decentralized Infrastructure & Infinite Reality Engine',
      url: 'https://github.com/EtherealEngine'
    },
    // Core Projects
    {
      id: 'digital-beings',
      label: 'Digital Beings',
      type: 'project',
      size: 14,
      color: '#8b5cf6',
      description: 'AI Platform for real-time communication networks & 3D worlds',
      url: 'https://github.com/EtherealEngine/Digital-Beings'
    },
    {
      id: 'avatar-creator',
      label: 'Avatar Creator',
      type: 'project',
      size: 13,
      color: '#06b6d4',
      description: 'Open, collaborative character creator for the open metaverse',
      url: 'https://github.com/AtlasFoundation/AvatarCreator'
    },
    {
      id: 'super-being',
      label: 'Super Being',
      type: 'project',
      size: 13,
      color: '#10b981',
      description: 'Companion Spatial Intelligence - AI that understands spaces',
      url: 'https://github.com/super-reality/SuperBeing'
    },
    {
      id: 'thoth',
      label: 'Thoth',
      type: 'project',
      size: 11,
      color: '#f59e0b',
      description: 'Multi-shot AI Pipeline Editor - Visual workflow builder',
      url: 'https://github.com/AtlasFoundation/Thoth'
    },
    {
      id: 'thales',
      label: 'Thales',
      type: 'project',
      size: 11,
      color: '#8b5cf6',
      description: 'Philosopher bot - Exploring AI reasoning & discourse',
      url: 'https://github.com/DavinciDreams/Thales'
    },
    {
      id: 'precision-ag',
      label: 'Precision Agriculture',
      type: 'project',
      size: 10,
      color: '#10b981',
      description: 'AI-powered crop yield optimization system',
      url: 'https://github.com/Tensornetics/precision-agriculture'
    },
    {
      id: 'digital-twin',
      label: 'Digital Twin Technology',
      type: 'project',
      size: 10,
      color: '#f59e0b',
      description: 'Digital twin solutions with OpenAI & NVIDIA NEMO',
      url: 'https://github.com/Tensornetics/digital-twin-technology'
    },
    {
      id: 'atlas-website',
      label: 'Atlas Website',
      type: 'project',
      size: 9,
      color: '#06b6d4',
      description: 'Atlas Foundation web platform',
      url: 'https://github.com/AtlasFoundation/Website'
    },
    {
      id: 'ee-maps',
      label: 'EE Maps',
      type: 'project',
      size: 9,
      color: '#ec4899',
      description: 'Detailed digital recreations of real-world environments',
      url: 'https://github.com/EtherealEngine/ee-maps'
    },
    {
      id: 'generous',
      label: 'Generous.rocks',
      type: 'project',
      size: 10,
      color: '#14b8a6',
      description: 'Next.js hackathon - AI-powered generosity platform',
      url: 'https://generous.rocks/about'
    },
    // Founder Skills
    {
      id: 'founder-vision',
      label: 'Founder Vision',
      type: 'skill',
      size: 10,
      color: '#8b5cf6',
      description: 'Strategic vision & company building'
    },
    {
      id: 'technical-leadership',
      label: 'Technical Leadership',
      type: 'skill',
      size: 10,
      color: '#f43f5e',
      description: 'Leading technical teams & architecture'
    },
    {
      id: 'bci',
      label: 'Brain-Computer Interfaces',
      type: 'skill',
      size: 9,
      color: '#10b981',
      description: 'NBCI & neural interpretation'
    },
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
      size: 10,
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
      size: 9,
      color: '#06b6d4'
    },
    {
      id: 'tensor-ml',
      label: 'Tensor ML',
      type: 'skill',
      size: 8,
      color: '#f59e0b',
      description: 'Tensor computations & ML'
    },
    {
      id: 'spatial-computing',
      label: 'Spatial Computing',
      type: 'skill',
      size: 8,
      color: '#14b8a6',
      description: '3D spatial understanding'
    },
    {
      id: 'web3',
      label: 'Web3/Blockchain',
      type: 'skill',
      size: 7,
      color: '#f59e0b'
    }
  ],
  edges: [
    // Lisa to Organizations (Co-founder relationships)
    { id: 'e1', source: 'lisa', target: 'atlas', weight: 5, label: 'Co-founder' },
    { id: 'e2', source: 'lisa', target: 'super-reality', weight: 5, label: 'Co-founder' },
    { id: 'e3', source: 'lisa', target: 'tensornetics', weight: 5, label: 'Co-founder' },
    { id: 'e4', source: 'lisa', target: 'nexus-org', weight: 5, label: 'Co-founder' },
    { id: 'e5', source: 'lisa', target: 'ethereal', weight: 3, label: 'Contributor' },

    // Lisa to Projects
    { id: 'e6', source: 'lisa', target: 'digital-beings', weight: 3 },
    { id: 'e7', source: 'lisa', target: 'avatar-creator', weight: 3 },
    { id: 'e8', source: 'lisa', target: 'super-being', weight: 3 },
    { id: 'e9', source: 'lisa', target: 'thoth', weight: 3 },
    { id: 'e10', source: 'lisa', target: 'thales', weight: 3 },
    { id: 'e11', source: 'lisa', target: 'precision-ag', weight: 3 },
    { id: 'e12', source: 'lisa', target: 'digital-twin', weight: 3 },
    { id: 'e13', source: 'lisa', target: 'atlas-website', weight: 2 },
    { id: 'e14', source: 'lisa', target: 'ee-maps', weight: 2 },
    { id: 'e15', source: 'lisa', target: 'generous', weight: 2 },

    // Organizations to Projects
    { id: 'e16', source: 'atlas', target: 'avatar-creator', weight: 3 },
    { id: 'e17', source: 'atlas', target: 'thoth', weight: 3 },
    { id: 'e18', source: 'atlas', target: 'atlas-website', weight: 2 },
    { id: 'e19', source: 'super-reality', target: 'super-being', weight: 3 },
    { id: 'e20', source: 'tensornetics', target: 'precision-ag', weight: 3 },
    { id: 'e21', source: 'tensornetics', target: 'digital-twin', weight: 3 },
    { id: 'e22', source: 'ethereal', target: 'digital-beings', weight: 3 },
    { id: 'e23', source: 'ethereal', target: 'ee-maps', weight: 2 },
    { id: 'e24', source: 'nexus-org', target: 'metaverse', weight: 2 },

    // Projects to Skills
    { id: 'e25', source: 'digital-beings', target: 'typescript', weight: 2 },
    { id: 'e26', source: 'digital-beings', target: 'ai', weight: 3 },
    { id: 'e27', source: 'avatar-creator', target: 'threejs', weight: 3 },
    { id: 'e28', source: 'avatar-creator', target: 'webgl', weight: 2 },
    { id: 'e29', source: 'super-being', target: 'ai', weight: 3 },
    { id: 'e30', source: 'super-being', target: 'spatial-computing', weight: 3 },
    { id: 'e31', source: 'precision-ag', target: 'ai', weight: 2 },
    { id: 'e32', source: 'digital-twin', target: 'tensor-ml', weight: 3 },
    { id: 'e33', source: 'thoth', target: 'react', weight: 2 },
    { id: 'e34', source: 'thales', target: 'nodejs', weight: 2 },
    { id: 'e35', source: 'ee-maps', target: 'threejs', weight: 2 },

    // Lisa to Founder Skills
    { id: 'e36', source: 'lisa', target: 'founder-vision', weight: 4 },
    { id: 'e37', source: 'lisa', target: 'technical-leadership', weight: 4 },
    { id: 'e38', source: 'lisa', target: 'bci', weight: 3 },
    { id: 'e39', source: 'lisa', target: 'typescript', weight: 3 },
    { id: 'e40', source: 'lisa', target: 'react', weight: 3 },
    { id: 'e41', source: 'lisa', target: 'threejs', weight: 3 },
    { id: 'e42', source: 'lisa', target: 'ai', weight: 4 },
    { id: 'e43', source: 'lisa', target: 'webgl', weight: 2 },
    { id: 'e44', source: 'lisa', target: 'nodejs', weight: 2 },
    { id: 'e45', source: 'lisa', target: 'metaverse', weight: 4 },
    { id: 'e46', source: 'lisa', target: 'tensor-ml', weight: 3 },
    { id: 'e47', source: 'lisa', target: 'spatial-computing', weight: 3 },
    { id: 'e48', source: 'lisa', target: 'web3', weight: 2 },

    // Organizations to Skills
    { id: 'e49', source: 'tensornetics', target: 'bci', weight: 3 },
    { id: 'e50', source: 'tensornetics', target: 'tensor-ml', weight: 3 },
    { id: 'e51', source: 'atlas', target: 'metaverse', weight: 3 },
    { id: 'e52', source: 'super-reality', target: 'spatial-computing', weight: 3 }
  ]
}
