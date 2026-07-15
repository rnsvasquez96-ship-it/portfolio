import type { Project } from '@/types';

const project: Project = {
  title: 'AeroSense',
  slug: 'aerosense',
  description: 'Created an edge-monitoring experience for sensor-driven systems, translating noisy hardware telemetry into clear product insights.',
  thumbnail: '/images/aerosense.png',
  gallery: ['/images/aerosense-1.png', '/images/aerosense-2.png'],
  overview: 'AeroSense turns dense sensor telemetry into a calm, understandable operational experience for hardware teams.',
  problem: 'The existing monitoring workflow was too noisy and hard to interpret when telemetry volumes increased across fleets.',
  research: 'The team reviewed real operational incidents, analyzed sensor trends, and used field feedback to improve how insight was surfaced.',
  solution: 'A focused monitoring experience surfaced anomalies clearly and helped operators identify issues faster without overwhelming them.',
  features: ['Telemetry dashboards', 'Anomaly framing', 'Historical trend overlays', 'Operator views'],
  techStack: ['React', 'Node.js', 'WebSockets', 'TypeScript'],
  github: 'https://github.com',
  liveDemo: 'https://vercel.com',
  lessonsLearned: ['Strong visual hierarchy matters more than raw data volume.', 'The best monitoring experiences reduce friction during time-sensitive events.'],
  challenges: ['Communicating noisy telemetry without overwhelming operators.', 'Designing for dynamic fleet conditions and real-time anomalies.'],
  date: '2024',
  category: 'Embedded / IoT',
  highlights: ['Embedded data handling', 'Realtime visualisation and fault detection', 'Cross-functional collaboration with manufacturing teams'],
  year: '2024',
  impact: 'Improved anomaly detection visibility across deployed hardware fleets.'
};

export default project;
