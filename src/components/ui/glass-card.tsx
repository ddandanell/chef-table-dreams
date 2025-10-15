import * as React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "strong" | "subtle";
  hover3d?: boolean;
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, variant = "default", hover3d = false, ...props }, ref) => {
    const variantClasses = {
      default: "glass",
      strong: "glass-strong",
      subtle: "glass-subtle",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "rounded-2xl p-6 transition-all duration-500",
          variantClasses[variant],
          hover3d && "card-3d hover:shadow-2xl hover:shadow-primary/20",
          className
        )}
        {...props}
      />
    );
  }
);
GlassCard.displayName = "GlassCard";

export { GlassCard };
