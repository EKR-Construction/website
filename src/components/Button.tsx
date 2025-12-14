import { ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'accent';

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  href?: string;
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-cornflower-blue-500 text-eggshell-500 hover:bg-cornflower-blue-600 focus:ring-cornflower-blue-500',
  secondary:
    'bg-dusty-grape-500 text-eggshell-500 hover:bg-dusty-grape-600 focus:ring-dusty-grape-500',
  accent:
    'bg-tomato-jam-500 text-eggshell-500 hover:bg-tomato-jam-600 focus:ring-tomato-jam-500',
};

export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  ariaLabel,
}: ButtonProps) {
  const baseStyles =
    'px-6 py-3 rounded font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={`${combinedStyles} inline-block`}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedStyles} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
