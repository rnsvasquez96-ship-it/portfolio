'use client';

'use client';

import { motion } from 'framer-motion';
import type { Insight } from '@/types';

type InsightCardProps = {
  insight: Insight;
  index: number;
};

export default function InsightCard({ insight, index }: InsightCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.35, delay: index * 0.08 }}
      className="rounded-[24px] border border-border bg-surface p-6"
    >
      <h3 className="text-xl font-semibold text-text-primary">{insight.title}</h3>
      <p className="mt-3 text-text-secondary">{insight.description}</p>
    </motion.article>
  );
}
