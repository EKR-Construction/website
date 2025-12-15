/**
 * StatCard component for displaying statistics in the hero section
 * Reusable component for showing metric values with labels
 */

interface StatCardProps {
  value: string | number;
  label: string;
  suffix?: string;
}

export default function StatCard({ value, label, suffix = '' }: StatCardProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="text-3xl font-bold text-cornflower-blue-500 sm:text-4xl">
        {value}
        {suffix && <span className="text-2xl sm:text-3xl">{suffix}</span>}
      </div>
      <div className="mt-2 text-sm text-eggshell-500 sm:text-base">{label}</div>
    </div>
  );
}
