'use client';

import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalHeight) * 100;
      setProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-[9997] bg-[#E0E0E0]/10">
      <div
        className="h-full bg-gradient-to-r from-[#C0C0C0] via-[#E0E0E0] to-[#C0C0C0] transition-all duration-150"
        style={{
          width: `${progress}%`,
          boxShadow: '0 0 10px rgba(192, 192, 192, 0.5)',
        }}
      />
    </div>
  );
}
