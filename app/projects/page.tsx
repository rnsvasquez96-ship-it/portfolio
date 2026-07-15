import Link from 'next/link';
import ProjectCard from '@/components/ui/project-card';
import { siteContent } from '@/lib/content';

export default function ProjectsIndexPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 py-10 sm:px-6 lg:px-8">
      <Link href="/" className="mb-8 text-sm font-medium text-primary transition hover:text-primary-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
        ← Back to portfolio
      </Link>
      <header className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Selected work</p>
        <h1 className="mt-3 text-4xl font-semibold text-text-primary sm:text-5xl">Projects</h1>
        <p className="mt-4 text-lg leading-8 text-text-secondary">
          Each case study is content-driven so the site can grow without changing the architecture.
        </p>
      </header>
      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        {siteContent.projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </main>
  );
}
