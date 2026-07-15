'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { profile } from '@/content/profile';

const iconMap = {
  Email: Mail,
  LinkedIn: Linkedin,
  GitHub: Github
};

export default function ContactPage() {
  return (
    <main className="flex flex-col gap-8 py-4">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="overflow-hidden rounded-[32px] border border-border bg-surface shadow-soft"
      >
        <div className="grid gap-8 p-8 sm:p-10 lg:grid-cols-[1.05fr_0.95fr] lg:p-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold uppercase tracking-[0.24em] text-primary">
              <Sparkles size={14} />
              {profile.contact.eyebrow}
            </div>
            <h1 className="mt-5 text-4xl font-semibold text-text-primary sm:text-5xl">
              {profile.contact.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-text-secondary">
              {profile.contact.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`mailto:${profile.contact.email}`} className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-white transition hover:bg-primary-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                {profile.contact.ctaPrimaryLabel} <ArrowRight size={16} />
              </a>
              <Link href="/projects" className="rounded-full border border-border bg-background px-5 py-3 text-sm font-medium text-text-primary transition hover:border-primary hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                {profile.contact.ctaSecondaryLabel}
              </Link>
            </div>
          </div>

          <div className="grid gap-4">
            {profile.contact.socialLinks.map((link, index) => {
              const Icon = iconMap[link.name as keyof typeof iconMap];
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.08 }}
                  className="rounded-[24px] border border-border bg-background p-5 shadow-soft transition hover:-translate-y-1 hover:border-primary"
                >
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-primary/10 p-3 text-primary">
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-text-primary">{link.name}</p>
                      <p className="mt-1 text-sm leading-7 text-text-secondary">{link.description}</p>
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </motion.section>

      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.section
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35, delay: 0.1 }}
          className="rounded-[24px] border border-border bg-surface p-8 shadow-soft"
        >
          <h2 className="text-2xl font-semibold text-text-primary">{profile.contact.availabilityTitle}</h2>
          <p className="mt-4 text-base leading-8 text-text-secondary">
            {profile.contact.availabilityDescription}
          </p>
          <ul className="mt-6 space-y-3 text-sm text-text-secondary">
            {profile.contact.availabilityItems.map((item) => (
              <li key={item} className="flex items-start gap-2"><span className="mt-2 h-2 w-2 rounded-full bg-primary" /><span>{item}</span></li>
            ))}
          </ul>
        </motion.section>

        <motion.form
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35, delay: 0.15 }}
          className="rounded-[24px] border border-border bg-surface p-8 shadow-soft"
          onSubmit={(event) => event.preventDefault()}
        >
          <h2 className="text-2xl font-semibold text-text-primary">{profile.contact.formHeading}</h2>
          <p className="mt-3 text-sm leading-7 text-text-secondary">
            {profile.contact.formDescription}
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-medium text-text-primary">
              <span className="mb-2 block">Name</span>
              <input className="w-full rounded-[16px] border border-border bg-background px-4 py-3 text-sm text-text-primary outline-none transition focus:border-primary" placeholder="Your name" />
            </label>
            <label className="text-sm font-medium text-text-primary">
              <span className="mb-2 block">Email</span>
              <input type="email" className="w-full rounded-[16px] border border-border bg-background px-4 py-3 text-sm text-text-primary outline-none transition focus:border-primary" placeholder="you@example.com" />
            </label>
          </div>

          <label className="mt-4 block text-sm font-medium text-text-primary">
            <span className="mb-2 block">Message</span>
            <textarea rows={5} className="w-full rounded-[16px] border border-border bg-background px-4 py-3 text-sm text-text-primary outline-none transition focus:border-primary" placeholder="Tell me about the project, the team, or the challenge you’re solving." />
          </label>

          <button type="submit" className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-white transition hover:bg-primary-hover">
            Send message <ArrowRight size={16} />
          </button>
        </motion.form>
      </div>
    </main>
  );
}
