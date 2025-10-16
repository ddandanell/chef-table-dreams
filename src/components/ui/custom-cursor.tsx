import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON'
      );
    };

    const handleMouseEnter = () => setIsHidden(false);
    const handleMouseLeave = () => setIsHidden(true);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      <div
        className={cn(
          "hidden md:block fixed top-0 left-0 w-10 h-10 border-2 border-primary/50 rounded-full pointer-events-none z-[9999] mix-blend-difference transition-all duration-150 ease-out",
          isPointer && "scale-150 border-primary",
          isHidden && "opacity-0"
        )}
        style={{
          transform: `translate(${position.x - 20}px, ${position.y - 20}px)`,
        }}
      />
      
      <div
        className={cn(
          "hidden md:block fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-[9999] mix-blend-difference transition-all duration-100",
          isHidden && "opacity-0"
        )}
        style={{
          transform: `translate(${position.x - 4}px, ${position.y - 4}px)`,
        }}
      />
    </>
  );
};
