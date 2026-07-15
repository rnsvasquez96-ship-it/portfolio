'use client';

'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/section-heading';
import type { ExperienceEntry } from '@/types';

export default function ExperienceSection({ experiences }: { experiences: ExperienceEntry[] }) {
  return (
    <section id="experience" className="py-16">
      <SectionHeading eyebrow="Experience" title="Professional context that keeps product work grounded." />
      <div className="mt-8 space-y-4">
        {experiences.map((item, index) => (
          <motion.article
            key={item.role}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.3, delay: index * 0.06 }}
            className="flex flex-col gap-3 rounded-[28px] border border-border/80 bg-surface/95 p-6 shadow-soft md:flex-row md:items-center md:justify-between"
          >
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">{item.period}</p>
              <h3 className="mt-2 text-xl font-semibold text-text-primary">{item.role}</h3>
              <p className="text-sm text-text-secondary">{item.company}</p>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-text-secondary">{item.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
