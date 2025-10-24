'use client';

import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateCursorPosition);
    return () => window.removeEventListener('mousemove', updateCursorPosition);
  }, []);

  useEffect(() => {
    const animate = () => {
      setPosition((prev) => ({
        x: prev.x + (cursorPosition.x - prev.x) * 0.3,
        y: prev.y + (cursorPosition.y - prev.y) * 0.3,
      }));
    };

    const animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [cursorPosition, position]);

  return (
    <div
      className="fixed pointer-events-none z-[9998] w-10 h-10 rounded-full border-2 border-purple-500 shadow-[0_0_30px_rgba(139,92,246,0.8)] mix-blend-difference bg-[rgba(139,92,246,0.8)]"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)',
      }}
    />
  );
}