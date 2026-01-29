# Lisa Mega Watts - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Vite. Showcasing projects in AI, decentralized intelligence, and spatial computing.

## 🚀 Tech Stack

- **React 19** - Latest React with improved performance
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool and dev server
- **CSS3** - Modern CSS with animations and effects

## ✨ Features

- **Responsive Design** - Works perfectly on all devices
- **Interactive Animations** - Smooth scroll, hover effects, and 3D tilts
- **Type-Safe** - Full TypeScript implementation
- **Modern UI** - Glassmorphism, gradients, and futuristic design
- **Fast Performance** - Optimized with Vite for instant HMR
- **Accessible** - Semantic HTML and proper ARIA labels

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🛠️ Project Structure

```
src/
├── components/         # React components
│   ├── About.tsx      # About section with cards
│   ├── Contact.tsx    # Contact section
│   ├── Footer.tsx     # Footer component
│   ├── Hero.tsx       # Hero/Landing section
│   ├── Navbar.tsx     # Navigation bar
│   └── Projects.tsx   # Projects showcase
├── data/              # Data files
│   └── projects.ts    # Project data
├── hooks/             # Custom React hooks
│   ├── useIntersectionObserver.ts
│   └── useScrollPosition.ts
├── types/             # TypeScript types
│   └── index.ts
├── App.tsx            # Main app component
├── main.tsx           # Entry point
└── index.css          # Global styles
```

## 🎨 Customization

### Update Projects
Edit `src/data/projects.ts` to add or modify projects:

```typescript
export const projects: Project[] = [
  {
    id: '1',
    title: 'Your Project',
    description: 'Project description',
    tags: ['React', 'TypeScript'],
    stars: 100,
    forks: 20,
    url: 'https://github.com/username/repo',
    gradient: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)'
  }
]
```

### Modify Colors
Edit CSS variables in `src/index.css`:

```css
:root {
  --primary: #8b5cf6;
  --secondary: #06b6d4;
  --accent: #f43f5e;
  /* ... */
}
```

## 📝 Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production (TypeScript compilation + Vite bundling)
- `npm run preview` - Preview production build locally

## 🚢 Deployment

### Build the project
```bash
npm run build
```

The built files will be in the `dist/` directory, ready to deploy to any static hosting service:

- **Vercel**
- **Netlify**
- **GitHub Pages**
- **Cloudflare Pages**

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

## 🎯 Key Features for Employers

This portfolio demonstrates:
- ✅ Modern React patterns (hooks, functional components)
- ✅ TypeScript best practices (strict mode, type safety)
- ✅ Performance optimization (React 19, Vite)
- ✅ Responsive design principles
- ✅ Custom hooks for reusable logic
- ✅ Component-based architecture
- ✅ Professional code organization
- ✅ Interactive UI/UX implementation

## 📧 Contact

- GitHub: [@DavinciDreams](https://github.com/DavinciDreams)
- Twitter: [@Lisa_MegaWatts](https://twitter.com/Lisa_MegaWatts)

## 📄 License

MIT © Lisa Mega Watts
