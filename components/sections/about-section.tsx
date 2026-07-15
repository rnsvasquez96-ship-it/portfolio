'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/section-heading';
import type { Profile } from '@/types';

type AboutSectionProps = {
  profile: Profile;
};

export default function AboutSection({ profile }: AboutSectionProps) {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4 }}
      className="py-16"
    >
      <SectionHeading eyebrow={profile.about.eyebrow} title={profile.about.title} />
      <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[24px] border border-border bg-surface p-8 text-text-secondary shadow-soft leading-8">
          {profile.about.description}
        </div>
        <div className="rounded-[24px] border border-border bg-background p-8 shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">{profile.about.focusLabel}</p>
          <ul className="mt-4 space-y-3 text-sm text-text-secondary">
            {profile.about.focusItems.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  );
}
