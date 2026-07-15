import { Project } from '@/types';
import SectionHeading from '@/components/ui/section-heading';
import ProjectCard from '@/components/ui/project-card';

export default function WorkSection({ projects }: { projects: Project[] }) {
  return (
    <section id="work" className="py-12">
      <SectionHeading eyebrow="Selected work" title="Building ambitious experiences with calm execution." />
      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
