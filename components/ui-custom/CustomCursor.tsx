'use client';

import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

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

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div
        className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-[9999] transition-transform duration-100 ease-out mix-blend-difference"
        style={{
          transform: `translate(${position.x - 8}px, ${position.y - 8}px) scale(${isPointer ? 1.5 : 1})`,
          background: '#C0C0C0',
        }}
      />
      <div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9998] border border-[#C0C0C0]/50 transition-transform duration-200 ease-out"
        style={{
          transform: `translate(${position.x - 16}px, ${position.y - 16}px) scale(${isPointer ? 1.5 : 1})`,
        }}
      />
    </>
  );
}
