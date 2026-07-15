import type { Project } from '@/types';

const project: Project = {
  title: 'PulseGrid',
  slug: 'pulsegrid',
  description: 'Built a lightweight operations console that helped teams ship faster, troubleshoot better, and maintain confidence during growth.',
  thumbnail: '/images/pulsegrid.png',
  gallery: ['/images/pulsegrid-1.png', '/images/pulsegrid-2.png'],
  overview: 'PulseGrid gives internal teams a calm, reliable way to coordinate releases and monitor rollout health.',
  problem: 'The release process was fragmented and difficult to follow at speed during periods of growth and change.',
  research: 'The team reviewed release workflows, interviewed coordinators, and looked at the points where communication broke down.',
  solution: 'A streamlined operations console made release status visible, simplified coordination, and improved decision confidence.',
  features: ['Release timeline', 'Status monitoring', 'Coordination notes', 'Operational health summaries'],
  techStack: ['React', 'Next.js', 'Supabase', 'Tailwind CSS'],
  github: 'https://github.com',
  lessonsLearned: ['Good product design helps teams stay calm under pressure.', 'Clear communication surfaces reduce operational noise.'],
  challenges: ['Keeping release coordination simple during rapid growth.', 'Maintaining trust in the operational view under shifting priorities.'],
  date: '2023',
  category: 'Product / Internal tooling',
  highlights: ['Frontend architecture and API integration', 'Design polish and interaction refinement', 'Reliable release processes and UX audits'],
  year: '2023',
  impact: 'Cut release coordination overhead for distributed teams.'
};

export default project;
