import { HTMLAttributes, ReactNode } from "react";
import { clsx } from "clsx";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "bordered" | "elevated";
  padding?: "none" | "sm" | "md" | "lg";
  hover?: boolean;
  children: ReactNode;
}

export const Card = ({
  variant = "default",
  padding = "sm",
  hover = false,
  children,
  className,
  ...props
}: CardProps) => {
  const baseStyles = "rounded-xl transition-all duration-300";

  const variants = {
    default: "",
    bordered: "border-2 border-gray-200",
    elevated: "shadow-lg",
  };

  const paddings = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  const hoverStyles = hover
    ? " border border-transparent hover:border-primary hover:border transition-all cursor-pointer"
    : "";

  return (
    <div
      className={clsx(
        baseStyles,
        variants[variant],
        paddings[padding],
        hoverStyles,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export const CardTitle = ({
  children,
  as: Component = "h3",
  className,
  ...props
}: CardTitleProps) => {
  return (
    <Component
      className={clsx("text-xl md:text-2xl font-semibold text-black px-2 md:px-5", className)}
      {...props}
    >
      {children}
    </Component>
  );
};

export interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const CardContent = ({
  children,
  className,
  ...props
}: CardContentProps) => {
  return (
    <div
      className={clsx("text-gray-600 bg-white rounded-xl p-2 md:p-6 text-lg md:text-xl", className)}
      {...props}
    >
      {children}
    </div>
  );
};
