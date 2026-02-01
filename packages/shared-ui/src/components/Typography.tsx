import { HTMLAttributes, ReactNode } from "react";
import { clsx } from "clsx";

// Heading Component
interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "xl" | "lg" | "md" | "sm" | "xs";
  weight?: "normal" | "medium" | "semibold" | "bold";
  children: ReactNode;
}

export const Heading = ({
  as: Component = "h2",
  size = "md",
  weight = "bold",
  className,
  children,
  ...props
}: HeadingProps) => {
  const sizes = {
    xl: "text-4xl md:text-6xl lg:text-[85px]",
    lg: "text-2xl md:text-5xl",
    md: "text-2xl md:text-4xl",
    sm: "text-2xl md:text-3xl",
    xs: "text-xl md:text-2xl",
  };

  const weights = {
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
  };

  return (
    <Component
      className={clsx(
        "text-black leading-tight",
        sizes[size],
        weights[weight],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

// Text Component
interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  as?: "p" | "span" | "div";
  size?: "xl" | "lg" | "base" | "sm" | "xs";
  weight?: "normal" | "medium" | "semibold" | "bold";
  color?: "dark" | "gray" | "light" | "primary";
  children: ReactNode;
}

export const Text = ({
  as: Component = "p",
  size = "base",
  weight = "normal",
  color = "gray",
  className,
  children,
  ...props
}: TextProps) => {
  const sizes = {
    xl: "text-xl",
    lg: "text-lg",
    base: "text-base",
    sm: "text-sm",
    xs: "text-xs",
  };

  const weights = {
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
  };

  const colors = {
    dark: "text-black",
    gray: "text-gray-600",
    light: "text-gray-500",
    primary: "text-primary",
  };

  return (
    <Component
      className={clsx(
        "leading-relaxed",
        sizes[size],
        weights[weight],
        colors[color],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

// Label Component
interface LabelProps extends HTMLAttributes<HTMLLabelElement> {
  htmlFor?: string;
  required?: boolean;
  children: ReactNode;
}

export const Label = ({
  htmlFor,
  required = false,
  className,
  children,
  ...props
}: LabelProps) => {
  return (
    <label
      htmlFor={htmlFor}
      className={clsx("block text-sm font-medium text-gray-700", className)}
      {...props}
    >
      {children}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
  );
};
