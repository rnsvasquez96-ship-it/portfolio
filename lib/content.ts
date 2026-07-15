import { profile } from '@/content/profile';
import { skills } from '@/content/skills';
import { experiences } from '@/content/experience';
import { certifications } from '@/content/certifications';
import projects from '@/content/projects';

export const siteContent = {
  profile,
  skills,
  experiences,
  certifications,
  projects
} as const;

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getProjectNavigation(currentSlug?: string) {
  const index = currentSlug ? projects.findIndex((project) => project.slug === currentSlug) : -1;

  return {
    previousProject: index > 0 ? projects[index - 1] : null,
    nextProject: index >= 0 && index < projects.length - 1 ? projects[index + 1] : null
  };
}
