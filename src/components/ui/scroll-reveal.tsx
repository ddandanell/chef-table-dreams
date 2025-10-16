import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: "fade" | "slide-up" | "slide-left" | "slide-right" | "scale" | "blur";
  delay?: number;
  duration?: number;
  className?: string;
}

export const ScrollReveal = ({ 
  children, 
  animation = "fade", 
  delay = 0,
  duration = 600,
  className 
}: ScrollRevealProps) => {
  const { ref, isVisible } = useScrollAnimation();
  
  const animationClasses = {
    fade: "opacity-0 translate-y-4",
    "slide-up": "opacity-0 translate-y-8",
    "slide-left": "opacity-0 -translate-x-8",
    "slide-right": "opacity-0 translate-x-8",
    scale: "opacity-0 scale-95",
    blur: "opacity-0 blur-sm"
  };

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all ease-out",
        !isVisible && animationClasses[animation],
        isVisible && "opacity-100 translate-y-0 translate-x-0 scale-100 blur-0",
        className
      )}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`
      }}
    >
      {children}
    </div>
  );
};
