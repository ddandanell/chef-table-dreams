import { useEffect, useState } from 'react';

export const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalHeight) * 100;
      setProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-muted/20 z-50">
      <div
        className="h-full bg-gradient-to-r from-primary to-chart-4 transition-all duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};
