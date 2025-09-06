'use client';

import { useState, useEffect } from 'react';
import gsap from 'gsap';

export default function Loader({ onFinish }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 25; // simulate progress
        return next >= 100 ? 100 : next;
      });
    }, 200);

    if (progress >= 100) {
      clearInterval(interval);

      gsap.to('.loader-wrapper', {
        yPercent: -100,
        duration: 0.8,
        ease: 'power2.out',
        onComplete: onFinish, // let parent know loader is done
      });
    }

    return () => clearInterval(interval);
  }, [progress, onFinish]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black text-white z-[9999] loader-wrapper">
      <span className="text-4xl font-bold">{Math.floor(progress)}%</span>
    </div>
  );
}
