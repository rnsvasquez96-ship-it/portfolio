import { Stat } from '@/types';
import StatCard from '@/components/ui/stat-card';

export default function HighlightsSection({ stats }: { stats: Stat[] }) {
  return (
    <section aria-label="Highlights" className="grid gap-4 py-6 md:grid-cols-3">
      {stats.map((stat) => (
        <StatCard key={stat.label} value={stat.value} label={stat.label} />
      ))}
    </section>
  );
}
