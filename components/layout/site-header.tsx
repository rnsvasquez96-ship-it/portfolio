import Link from 'next/link';
import type { Profile } from '@/types';

type SiteHeaderProps = {
  profile: Profile;
};

export default function SiteHeader({ profile }: SiteHeaderProps) {
  return (
    <header className="sticky top-4 z-40 mb-10 rounded-full border border-border/80 bg-surface/80 px-4 py-3 shadow-[0_10px_40px_rgba(17,24,39,0.06)] backdrop-blur-xl">
      <nav aria-label="Primary" className="flex items-center justify-between">
        <Link href="#hero" className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-text-primary" aria-label="Go to the top of the portfolio">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-base font-bold text-white">
            {profile.initials}
          </span>
          {profile.name}
        </Link>
        <div className="hidden items-center gap-6 text-sm text-text-secondary md:flex">
          {profile.navigation.map((item) => (
            <Link key={item.label} href={item.href} target={item.external ? '_blank' : undefined} rel={item.external ? 'noopener noreferrer' : undefined} className="transition hover:text-text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
