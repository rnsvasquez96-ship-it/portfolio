import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/types';

type ProjectDetailPageProps = {
  project: Project;
  allProjects: Project[];
};

export default function ProjectDetailPage({ project, allProjects }: ProjectDetailPageProps) {
  const currentIndex = allProjects.findIndex((entry) => entry.slug === project.slug);
  const previousProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null;
  const nextProject = currentIndex >= 0 && currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : null;

  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 py-10 sm:px-6 lg:px-8">
      <Link href="/" className="mb-8 text-sm font-medium text-primary transition hover:text-primary-hover">
        ← Back to portfolio
      </Link>

      <header className="overflow-hidden rounded-[32px] border border-border bg-surface shadow-soft">
        <div className="relative aspect-[16/8] overflow-hidden bg-background">
          <Image
            src={project.thumbnail}
            alt={`${project.title} hero`}
            fill
            sizes="(max-width: 768px) 100vw, 75vw"
            priority
            className="object-cover"
          />
        </div>

        <div className="p-8 sm:p-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
              {project.category}
            </span>
            <span className="text-sm font-medium text-text-secondary">{project.date}</span>
          </div>

          <h1 className="mt-5 text-4xl font-semibold text-text-primary sm:text-5xl">{project.title}</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-text-secondary">{project.description}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.techStack.map((item) => (
              <span key={item} className="rounded-full border border-border bg-background px-3 py-2 text-sm text-text-secondary">
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.github ? (
              <a href={project.github} className="rounded-full border border-border bg-background px-5 py-3 text-sm font-medium text-text-primary transition hover:border-primary hover:text-primary">
                GitHub
              </a>
            ) : null}
            {project.liveDemo ? (
              <a href={project.liveDemo} className="rounded-full border border-border bg-background px-5 py-3 text-sm font-medium text-text-primary transition hover:border-primary hover:text-primary">
                Live Demo
              </a>
            ) : null}
            {project.figma ? (
              <a href={project.figma} className="rounded-full border border-border bg-background px-5 py-3 text-sm font-medium text-text-primary transition hover:border-primary hover:text-primary">
                Figma Prototype
              </a>
            ) : null}
          </div>
        </div>
      </header>

      <section className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[24px] border border-border bg-surface p-8 shadow-soft">
          <h2 className="text-2xl font-semibold text-text-primary">Overview</h2>
          <p className="mt-4 text-base leading-8 text-text-secondary">{project.overview}</p>
        </div>
        <div className="rounded-[24px] border border-border bg-background p-8 shadow-soft">
          <h2 className="text-2xl font-semibold text-text-primary">Problem</h2>
          <p className="mt-4 text-base leading-8 text-text-secondary">{project.problem}</p>
        </div>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="rounded-[24px] border border-border bg-surface p-8 shadow-soft">
          <h2 className="text-2xl font-semibold text-text-primary">Research</h2>
          <p className="mt-4 text-base leading-8 text-text-secondary">{project.research}</p>
        </div>
        <div className="rounded-[24px] border border-border bg-surface p-8 shadow-soft">
          <h2 className="text-2xl font-semibold text-text-primary">Solution</h2>
          <p className="mt-4 text-base leading-8 text-text-secondary">{project.solution}</p>
        </div>
      </section>

      <section className="mt-8 rounded-[24px] border border-border bg-surface p-8 shadow-soft">
        <h2 className="text-2xl font-semibold text-text-primary">Features</h2>
        <ul className="mt-4 grid gap-3 md:grid-cols-2">
          {project.features.map((feature) => (
            <li key={feature} className="rounded-[16px] border border-border bg-background p-4 text-sm text-text-secondary">
              {feature}
            </li>
          ))}
        </ul>
      </section>

      {project.gallery && project.gallery.length > 0 ? (
        <section className="mt-8 rounded-[24px] border border-border bg-surface p-8 shadow-soft">
          <h2 className="text-2xl font-semibold text-text-primary">Gallery</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {project.gallery.map((image) => (
              <div key={image} className="relative aspect-[16/10] overflow-hidden rounded-[20px] border border-border bg-background">
                <Image src={image} alt={`${project.title} gallery`} fill sizes="(max-width: 768px) 100vw, 50vw" loading="lazy" className="object-cover" />
              </div>
            ))}
          </div>
        </section>
      ) : null}

      <section className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="rounded-[24px] border border-border bg-surface p-8 shadow-soft">
          <h2 className="text-2xl font-semibold text-text-primary">Tech Stack</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.techStack.map((item) => (
              <span key={item} className="rounded-full border border-border bg-background px-3 py-2 text-sm text-text-secondary">
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="rounded-[24px] border border-border bg-surface p-8 shadow-soft">
          <h2 className="text-2xl font-semibold text-text-primary">Challenges</h2>
          <ul className="mt-4 space-y-3 text-base text-text-secondary">
            {project.challenges?.map((challenge) => (
              <li key={challenge} className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                <span>{challenge}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-8 rounded-[24px] border border-border bg-surface p-8 shadow-soft">
        <h2 className="text-2xl font-semibold text-text-primary">Lessons Learned</h2>
        <ul className="mt-4 space-y-3 text-base text-text-secondary">
          {project.lessonsLearned.map((lesson) => (
            <li key={lesson} className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
              <span>{lesson}</span>
            </li>
          ))}
        </ul>
      </section>

      {(previousProject || nextProject) ? (
        <section className="mt-12 border-t border-border pt-8">
          <div className="grid gap-4 md:grid-cols-2">
            {previousProject ? (
              <Link href={`/projects/${previousProject.slug}`} className="rounded-[24px] border border-border bg-surface p-6 shadow-soft transition hover:border-primary">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Previous Project</p>
                <h3 className="mt-3 text-xl font-semibold text-text-primary">{previousProject.title}</h3>
                <p className="mt-2 text-sm leading-7 text-text-secondary">{previousProject.description}</p>
              </Link>
            ) : null}
            {nextProject ? (
              <Link href={`/projects/${nextProject.slug}`} className="rounded-[24px] border border-border bg-surface p-6 shadow-soft transition hover:border-primary">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Next Project</p>
                <h3 className="mt-3 text-xl font-semibold text-text-primary">{nextProject.title}</h3>
                <p className="mt-2 text-sm leading-7 text-text-secondary">{nextProject.description}</p>
              </Link>
            ) : null}
          </div>
        </section>
      ) : null}
    </main>
  );
}
