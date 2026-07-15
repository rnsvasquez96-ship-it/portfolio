'use client';

import { motion } from 'framer-motion';

type InsightCardProps = {
  insight: {
    title: string;
    description: string;
  };
  index: number;
};

export default function InsightCard({ insight, index }: InsightCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.35, delay: index * 0.08 }}
      className="rounded-[24px] border border-white/10 bg-white/5 p-6"
    >
      <h3 className="text-xl font-semibold text-white">{insight.title}</h3>
      <p className="mt-3 text-slate-400">{insight.description}</p>
    </motion.article>
  );
}
