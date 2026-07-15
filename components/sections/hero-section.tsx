'use client';

import Image from 'next/image';
import { ArrowRight, Cpu, Layers3, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/use-reduced-motion';
import Button from '@/components/ui/button';
import type { Profile } from '@/types';

type HeroSectionProps = {
  profile: Profile;
};

export default function HeroSection({ profile }: HeroSectionProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="hero" className="grid items-center gap-10 py-8 lg:grid-cols-[1.1fr_0.9fr] lg:py-16">
      <motion.div initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }} animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }} transition={{ duration: 0.45, ease: 'easeOut' }}>
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary">{profile.hero.eyebrow}</p>
        <h1 className="max-w-3xl text-4xl font-semibold leading-[0.95] text-text-primary sm:text-5xl lg:text-7xl">
          {profile.hero.title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-text-secondary">
          {profile.hero.description}
        </p>
        <div className="mt-8 flex flex-wrap gap-3" role="list" aria-label="Primary actions">
          <Button href={profile.hero.primaryActionHref} className="px-6">
            {profile.hero.primaryActionLabel} <ArrowRight size={18} />
          </Button>
          <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-medium text-text-primary transition duration-200 hover:bg-background focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2" aria-label="Download the resume PDF">
            {profile.hero.resumeActionLabel}
          </a>
          <Button href={profile.hero.secondaryActionHref} variant="secondary" className="px-6">
            {profile.hero.secondaryActionLabel}
          </Button>
        </div>
        <div className="mt-8 flex flex-wrap gap-3" aria-label="Core strengths">
          {profile.hero.badges.map((item) => (
            <span key={item} className="rounded-full border border-border bg-surface px-3 py-2 text-sm text-text-secondary">
              {item}
            </span>
          ))}
        </div>
      </motion.div>

      <motion.div initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }} animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.08 }} className="space-y-4">
        <div className="overflow-hidden rounded-[28px] border border-border bg-surface shadow-soft">
          <div className="relative aspect-[4/5] w-full">
            <Image src="/images/ranz-portrait.svg" alt="Portrait of Ranz Nathaniel Vasquez" fill priority sizes="(max-width: 768px) 100vw, 45vw" className="object-cover" />
          </div>
        </div>
        <div className="rounded-[28px] border border-border bg-surface p-6 shadow-soft">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-2 text-sm text-primary">
            <Sparkles size={16} /> {profile.hero.availabilityLabel}
          </div>
          <h2 className="text-2xl font-semibold text-text-primary">{profile.hero.highlightTitle}</h2>
          <p className="mt-2 text-text-secondary">{profile.hero.highlightDescription}</p>
        </div>
        <div className="rounded-[28px] border border-border bg-background p-6 shadow-soft">
          <div className="flex items-start gap-4 border-b border-border py-4">
            <div className="rounded-2xl bg-primary/10 p-3 text-primary"><Cpu size={20} /></div>
            <div>
              <p className="text-2xl font-semibold text-text-primary">{profile.hero.stats[0].value}</p>
              <p className="mt-1 text-sm text-text-secondary">{profile.hero.stats[0].label}</p>
            </div>
          </div>
          <div className="flex items-start gap-4 py-4">
            <div className="rounded-2xl bg-accent/15 p-3 text-accent"><Layers3 size={20} /></div>
            <div>
              <p className="text-2xl font-semibold text-text-primary">{profile.hero.stats[1].value}</p>
              <p className="mt-1 text-sm text-text-secondary">{profile.hero.stats[1].label}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
