import Link from 'next/link';
import { ArrowRight, GraduationCap, Target, Briefcase, Sparkles } from 'lucide-react';
import { experiences } from '@/content/experience';
import { skills } from '@/content/skills';
import { profile } from '@/content/profile';

export default function AboutPage() {
  return (
    <main className="flex flex-col gap-8 py-4">
      <section className="overflow-hidden rounded-[32px] border border-border bg-surface shadow-soft">
        <div className="grid gap-8 p-8 sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:p-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">{profile.aboutPage.introTitle.split(' ')[0]}</p>
            <h1 className="mt-4 text-4xl font-semibold text-text-primary sm:text-5xl">
              {profile.aboutPage.introTitle}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-text-secondary">
              {profile.aboutPage.introDescription}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/projects" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-white transition hover:bg-primary-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                Explore projects <ArrowRight size={16} />
              </Link>
              <Link href="/#contact" className="rounded-full border border-border bg-background px-5 py-3 text-sm font-medium text-text-primary transition hover:border-primary hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                {profile.hero.secondaryActionLabel}
              </Link>
            </div>
          </div>

          <div className="rounded-[24px] border border-border bg-background p-6 shadow-soft">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-primary/10 p-3 text-primary">
                <Sparkles size={18} />
              </div>
              <div>
                <p className="text-sm font-semibold text-text-primary">{profile.aboutPage.focusTitle}</p>
                <p className="text-sm text-text-secondary">{profile.aboutPage.focusDescription}</p>
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[20px] border border-border bg-surface p-4">
                <p className="text-2xl font-semibold text-text-primary">{profile.stats[0].value}</p>
                <p className="mt-1 text-sm text-text-secondary">{profile.stats[0].label}</p>
              </div>
              <div className="rounded-[20px] border border-border bg-surface p-4">
                <p className="text-2xl font-semibold text-text-primary">{profile.stats[1].value}</p>
                <p className="mt-1 text-sm text-text-secondary">{profile.stats[1].label}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[24px] border border-border bg-surface p-8 shadow-soft">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-primary/10 p-3 text-primary">
              <Briefcase size={18} />
            </div>
            <h2 className="text-2xl font-semibold text-text-primary">{profile.aboutPage.biographyTitle}</h2>
          </div>
          {profile.aboutPage.biographyParagraphs.map((paragraph, index) => (
            <p key={paragraph} className={index === 0 ? 'mt-5 text-base leading-8 text-text-secondary' : 'mt-4 text-base leading-8 text-text-secondary'}>
              {paragraph}
            </p>
          ))}
        </div>

        <div className="rounded-[24px] border border-border bg-surface p-8 shadow-soft">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-primary/10 p-3 text-primary">
              <Target size={18} />
            </div>
            <h2 className="text-2xl font-semibold text-text-primary">{profile.aboutPage.goalsTitle}</h2>
          </div>
          <ul className="mt-5 space-y-3 text-base text-text-secondary">
            {profile.aboutPage.goals.map((goal) => (
              <li key={goal} className="flex items-start gap-2"><span className="mt-2 h-2 w-2 rounded-full bg-primary" /><span>{goal}</span></li>
            ))}
          </ul>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-[24px] border border-border bg-surface p-8 shadow-soft">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-primary/10 p-3 text-primary">
              <GraduationCap size={18} />
            </div>
            <h2 className="text-2xl font-semibold text-text-primary">{profile.aboutPage.educationTitle}</h2>
          </div>
          <div className="mt-6 space-y-4">
            <div>
              <p className="text-lg font-semibold text-text-primary">{profile.aboutPage.educationDegree}</p>
              <p className="mt-1 text-sm font-medium uppercase tracking-[0.24em] text-primary">{profile.aboutPage.educationInstitution}</p>
              <p className="mt-2 text-sm leading-7 text-text-secondary">{profile.aboutPage.educationDescription}</p>
            </div>
          </div>
        </div>

        <div className="rounded-[24px] border border-border bg-surface p-8 shadow-soft">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-primary/10 p-3 text-primary">
              <Briefcase size={18} />
            </div>
            <h2 className="text-2xl font-semibold text-text-primary">{profile.aboutPage.experienceTitle}</h2>
          </div>
          <div className="mt-6 space-y-4">
            {experiences.map((item) => (
              <div key={item.role} className="rounded-[20px] border border-border bg-background p-4">
                <p className="text-lg font-semibold text-text-primary">{item.role}</p>
                <p className="mt-1 text-sm font-medium uppercase tracking-[0.24em] text-primary">{item.company}</p>
                <p className="mt-2 text-sm text-text-secondary">{item.period}</p>
                <p className="mt-3 text-sm leading-7 text-text-secondary">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-[24px] border border-border bg-surface p-8 shadow-soft">
        <h2 className="text-2xl font-semibold text-text-primary">{profile.aboutPage.skillsTitle}</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {skills.map((group) => (
            <div key={group.title} className="rounded-[20px] border border-border bg-background p-5">
              <h3 className="text-lg font-semibold text-text-primary">{group.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-text-secondary">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
