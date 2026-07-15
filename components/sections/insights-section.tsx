import { Insight } from '@/types';
import SectionHeading from '@/components/ui/section-heading';
import InsightCard from '@/components/ui/insight-card';

export default function InsightsSection({ insights }: { insights: Insight[] }) {
  return (
    <section id="insights" className="py-12">
      <SectionHeading eyebrow="Approach" title="Reliable by design, delightful by default." />
      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {insights.map((insight, index) => (
          <InsightCard key={insight.title} insight={insight} index={index} />
        ))}
      </div>
    </section>
  );
}
