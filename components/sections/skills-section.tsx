import SectionHeading from '@/components/ui/section-heading';
import type { SkillGroup } from '@/types';

export default function SkillsSection({ skills }: { skills: SkillGroup[] }) {
  return (
    <section id="skills" className="py-16">
      <SectionHeading eyebrow="Skills" title="A grounded mix of product craft and engineering depth." />
      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {skills.map((group) => (
          <div key={group.title} className="rounded-[24px] border border-border bg-surface p-6 shadow-soft">
            <h3 className="text-lg font-semibold text-text-primary">{group.title}</h3>
            <ul className="mt-4 space-y-3 text-sm text-text-secondary">
              {group.items.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
