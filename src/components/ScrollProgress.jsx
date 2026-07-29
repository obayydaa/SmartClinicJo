import React, { useState, useEffect } from 'react';

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial measurement

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="global-scroll-progress-container"
      aria-hidden="true"
    >
      <div
        className="global-scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
      />
      <style>{`
        .global-scroll-progress-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background-color: rgba(201, 168, 118, 0.15);
          z-index: 9999;
          pointer-events: none;
        }

        .global-scroll-progress-bar {
          height: 100%;
          background: linear-gradient(90deg, #B58A49 0%, #D4AF37 50%, #F3E5AB 100%);
          box-shadow: 0 0 10px rgba(212, 175, 55, 0.8);
          transition: width 0.1s cubic-bezier(0.1, 0.9, 0.2, 1);
          border-radius: 0 2px 2px 0;
        }

        @media (prefers-reduced-motion: reduce) {
          .global-scroll-progress-container {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
