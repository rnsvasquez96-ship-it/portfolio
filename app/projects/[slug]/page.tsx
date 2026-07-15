import { notFound } from 'next/navigation';
import ProjectDetailPage from '@/components/sections/project-detail-page';
import { siteContent } from '@/lib/content';

export function generateStaticParams() {
  return siteContent.projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = siteContent.projects.find((entry) => entry.slug === slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailPage project={project} allProjects={siteContent.projects} />;
}
