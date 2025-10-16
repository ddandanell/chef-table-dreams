import * as React from "react";
import { cn } from "@/lib/utils";

interface GradientTextProps extends React.HTMLAttributes<HTMLElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  variant?: "default" | "gold";
}

const GradientText = React.forwardRef<HTMLElement, GradientTextProps>(
  ({ className, as: Component = "span", ...props }, ref) => {
    return (
      <Component
        ref={ref as any}
        className={cn(
          "font-bold text-primary",
          className
        )}
        {...props}
      />
    );
  }
);
GradientText.displayName = "GradientText";

export { GradientText };
