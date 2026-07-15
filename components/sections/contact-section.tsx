'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type { Profile } from '@/types';

type ContactSectionProps = {
  profile: Profile;
};

export default function ContactSection({ profile }: ContactSectionProps) {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.35 }}
      className="py-12"
    >
      <div className="rounded-[36px] border border-border/80 bg-surface/95 p-8 text-center shadow-soft">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">{profile.contact.eyebrow}</p>
        <h2 className="mt-3 text-3xl font-semibold text-text-primary sm:text-4xl">
          {profile.contact.calloutTitle}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-text-secondary">
          {profile.contact.calloutDescription}
        </p>
        <a href={`mailto:${profile.contact.email}`} className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 font-medium text-white transition hover:bg-primary-hover">
          {profile.contact.email} <ArrowRight size={18} />
        </a>
      </div>
    </motion.section>
  );
}
