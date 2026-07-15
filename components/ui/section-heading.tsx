'use client';

import { motion } from 'framer-motion';

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
};

export default function SectionHeading({ eyebrow, title }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.35 }}
      className="space-y-3"
    >
      <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-text-secondary">{eyebrow}</p>
      <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.02em] text-text-primary sm:text-4xl">{title}</h2>
    </motion.div>
  );
}
