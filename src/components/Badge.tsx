/**
 * Badge component for displaying small labels and tags
 * Reusable across hero, about, and other sections
 */

type BadgeVariant = 'hero' | 'section';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
}

const variantStyles: Record<BadgeVariant, string> = {
  hero: 'border-2 border-tomato-jam-500 bg-transparent text-tomato-jam-500',
  section: 'border-1 bg-eggshell-100 text-cornflower-blue-500',
};

export default function Badge({ children, variant = 'section' }: BadgeProps) {
  return (
    <div
      className={`inline-block rounded-full px-4 py-2 ${variantStyles[variant]}`}
    >
      <span className="text-xs font-bold uppercase tracking-wider sm:text-sm">
        {children}
      </span>
    </div>
  );
}
