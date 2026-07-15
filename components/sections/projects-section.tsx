'use client';

import SectionHeading from '@/components/ui/section-heading';
import ProjectCard from '@/components/ui/project-card';
import type { Project } from '@/types';

export default function ProjectsSection({ projects }: { projects: Project[] }) {
  return (
    <section id="projects" className="py-16">
      <SectionHeading eyebrow="Projects" title="Selected work with measurable outcomes." />
      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
