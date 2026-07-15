'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/types';

type ProjectCardProps = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.35, delay: index * 0.08 }}
      whileHover={{ y: -6, scale: 1.01, boxShadow: '0 30px 70px rgba(17,24,39,0.10)' }}
      className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-border/80 bg-surface/95 shadow-soft"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-background">
        <Image
          src={project.thumbnail}
          alt={`${project.title} thumbnail`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={index < 2}
          loading={index < 2 ? 'eager' : 'lazy'}
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-xl font-semibold text-text-primary">{project.title}</h3>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-primary">{project.date}</span>
        </div>

        <p className="mt-4 flex-1 text-sm leading-7 text-text-secondary">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.techStack.slice(0, 4).map((item) => (
            <span key={item} className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-text-secondary">
              {item}
            </span>
          ))}
        </div>

        <Link
          href={`/projects/${project.slug}`}
          className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-text-primary transition group-hover:text-primary"
        >
          View Project
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </motion.article>
  );
}
