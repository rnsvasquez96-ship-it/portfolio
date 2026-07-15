type StatCardProps = {
  value: string;
  label: string;
};

export default function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="rounded-[24px] border border-border bg-surface p-6 shadow-soft">
      <p className="text-3xl font-semibold text-text-primary">{value}</p>
      <p className="mt-2 text-sm leading-6 text-text-secondary">{label}</p>
    </div>
  );
}
