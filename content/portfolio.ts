import type { Certification, ExperienceEntry, Insight, SkillGroup, Stat } from '@/types';
import projects from '@/content/projects';

export { projects };

export const insights: Insight[] = [
  {
    title: 'Systems first',
    description: 'Thoughtful architecture, clear abstractions, and scalable patterns keep products healthy as they grow.'
  },
  {
    title: 'Design discipline',
    description: 'Every interface is shaped for clarity, accessibility, and confidence from the very first interaction.'
  },
  {
    title: 'Execution quality',
    description: 'Performance budgets, testing, and observability are built in from the beginning rather than added later.'
  }
];

export const stats: Stat[] = [
  { value: '10+', label: 'Product launches and internal platforms' },
  { value: '3x', label: 'Faster iteration from disciplined systems design' },
  { value: '100%', label: 'Attention to accessibility, performance, and clarity' }
];

export const skills: SkillGroup[] = [
  {
    title: 'Product engineering',
    items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion']
  },
  {
    title: 'Systems & reliability',
    items: ['CI/CD', 'Testing', 'Performance tuning', 'API design', 'Accessibility']
  },
  {
    title: 'Hardware-aware thinking',
    items: ['Embedded concepts', 'Sensor data pipelines', 'IoT systems', 'Technical documentation']
  }
];

export const experiences: ExperienceEntry[] = [
  {
    role: 'Software Engineer',
    company: 'Northstar Labs',
    period: '2024 — Present',
    description: 'Building internal tooling and customer-facing experiences with a strong emphasis on reliability and design quality.'
  },
  {
    role: 'Product Engineering Intern',
    company: 'Helio Systems',
    period: '2023 — 2024',
    description: 'Partnered across product and engineering to ship user-facing improvements and improve operational dashboards.'
  }
];

export const certifications: Certification[] = [
  { title: 'Google UX Design Certificate', issuer: 'Google', year: '2024' },
  { title: 'AWS Cloud Practitioner', issuer: 'Amazon Web Services', year: '2023' },
  { title: 'Frontend Performance Fundamentals', issuer: 'Frontend Masters', year: '2022' }
];
