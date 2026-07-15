import type { Project } from '@/types';

const project: Project = {
  title: 'SignalOS',
  slug: 'signalos',
  description: 'Led the design and implementation of a real-time operational dashboard for field teams, improving decision speed and reducing reporting friction.',
  thumbnail: '/images/signalos.png',
  gallery: ['/images/signalos-1.png', '/images/signalos-2.png'],
  overview: 'SignalOS is a product analytics workspace that helps field teams make faster decisions with live operational visibility.',
  problem: 'Field teams were relying on scattered reporting tools, which meant important decisions were delayed and context was often missing.',
  research: 'The team interviewed operations leads, reviewed reporting workflows, and mapped the friction points across the full manual reporting process.',
  solution: 'A centralized operations dashboard with live summaries, role-based views, and clear alerting made the system fast, transparent, and reliable.',
  features: ['Live operational dashboard', 'Smart reporting summaries', 'Role-based views', 'Alerting workflows'],
  techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  github: 'https://github.com',
  liveDemo: 'https://vercel.com',
  figma: 'https://figma.com',
  lessonsLearned: ['Designing for clarity reduced the cognitive load of every daily workflow.', 'Reliability and simple interactions mattered more than feature volume.'],
  challenges: ['Balancing live operational data with visual clarity.', 'Designing role-specific views without fragmenting the core layout.'],
  date: '2025',
  category: 'Platform / SaaS',
  highlights: ['React, TypeScript, analytics pipelines', 'Accessible design system and performance budgets', 'Deployment automation and observability'],
  year: '2025',
  impact: 'Reduced manual reporting time by 38% for field teams.'
};

export default project;
