import * as React from "react";
import { cn } from "@/lib/utils";

interface GradientTextProps extends React.HTMLAttributes<HTMLElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  variant?: "default" | "gold";
}

const GradientText = React.forwardRef<HTMLElement, GradientTextProps>(
  ({ className, as: Component = "span", variant = "default", ...props }, ref) => {
    const variantClasses = {
      default: "gradient-text",
      gold: "gradient-text-gold",
    };

    return (
      <Component
        ref={ref as any}
        className={cn(
          variantClasses[variant],
          "font-bold",
          className
        )}
        {...props}
      />
    );
  }
);
GradientText.displayName = "GradientText";

export { GradientText };
