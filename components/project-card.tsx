'use client';

import { motion } from 'framer-motion';

type ProjectCardProps = {
  project: {
    title: string;
    category: string;
    description: string;
    highlights: string[];
  };
  index: number;
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.35, delay: index * 0.08 }}
      className="rounded-[24px] border border-white/10 bg-white/5 p-6 shadow-soft"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-xl font-semibold text-white">{project.title}</h3>
        <span className="rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-slate-300">{project.category}</span>
      </div>
      <p className="mt-4 text-slate-400">{project.description}</p>
      <ul className="mt-4 space-y-2 text-sm text-slate-300">
        {project.highlights.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="mt-1 h-2 w-2 rounded-full bg-sky-400" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
