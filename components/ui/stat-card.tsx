type StatCardProps = {
  value: string;
  label: string;
};

export default function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="rounded-[28px] border border-border/80 bg-surface/95 p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(17,24,39,0.10)]">
      <p className="text-3xl font-semibold tracking-[-0.02em] text-text-primary">{value}</p>
      <p className="mt-2 text-sm leading-6 text-text-secondary">{label}</p>
    </div>
  );
}
