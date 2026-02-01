import { HTMLAttributes, ReactNode } from 'react';
import { clsx } from 'clsx';

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  children: ReactNode;
}

export const Container = ({
  size = 'xl',
  children,
  className,
  ...props
}: ContainerProps) => {
  const sizes = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-360',
    xl: 'max-w-8xl',
    full: 'max-w-full',
  };

  return (
    <div
      className={clsx('mx-auto px-4 sm:px-6 lg:px-8', sizes[size], className)}
      {...props}
    >
      {children}
    </div>
  );
};

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Section = ({
  children,
  spacing = 'lg',
  className,
  ...props
}: SectionProps) => {
  const spacings = {
    sm: 'py-6 md:py-12',
    md: 'py-8 md:py-16',
    lg: 'py-12 m:py-24',
    xl: 'py-16 md:py-32',
  };

  return (
    <section className={clsx(spacings[spacing], className)} {...props}>
      {children}
    </section>
  );
};
