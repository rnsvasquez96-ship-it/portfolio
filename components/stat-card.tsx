type StatCardProps = {
  value: string;
  label: string;
};

export default function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-slate-900/70 p-6">
      <p className="text-3xl font-semibold text-white">{value}</p>
      <p className="mt-2 text-sm leading-6 text-slate-400">{label}</p>
    </div>
  );
}
