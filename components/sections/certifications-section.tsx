import SectionHeading from '@/components/ui/section-heading';
import type { Certification } from '@/types';

export default function CertificationsSection({ certifications }: { certifications: Certification[] }) {
  return (
    <section id="certifications" className="py-16">
      <SectionHeading eyebrow="Certifications" title="Focused continuing education in modern product delivery." />
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {certifications.map((item) => (
          <div key={item.title} className="rounded-[28px] border border-border/80 bg-surface/95 p-6 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">{item.year}</p>
            <h3 className="mt-3 text-lg font-semibold text-text-primary">{item.title}</h3>
            <p className="mt-2 text-sm text-text-secondary">{item.issuer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
