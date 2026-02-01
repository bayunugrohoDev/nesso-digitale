import { HTMLAttributes } from 'react';
import { clsx } from 'clsx';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'primary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Badge = ({
  variant = 'default',
  size = 'md',
  children,
  className,
  ...props
}: BadgeProps) => {
  const baseStyles =
    'inline-flex items-center font-medium rounded-full transition-colors text-center justify-center';

  const variants = {
    default: 'bg-[#D9D9D9] text-gray-700',
    primary: 'bg-[#2E2E2E] text-primary',
  };

  const sizes = {
    sm: 'px-2.5 py-0.5 text-xs',
    md: 'px-3.5 py-2 text-sm',
    lg: 'px-4 py-1.5 text-base',
  };

  return (
    <span
      className={clsx(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </span>
  );
};
