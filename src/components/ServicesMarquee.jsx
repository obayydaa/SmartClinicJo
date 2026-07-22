import React, { useEffect, useRef } from 'react';
import { Sparkles } from 'lucide-react';

const line1Services = [
  "XERF® MONOPOLAR RF LIFTING",
  "AI DIGITAL FACIAL DIAGNOSTICS",
  "PROFHILO® BIOREMODELING",
  "RADIESSE® NEOCOLLAGENESIS",
  "CERTIFIED HYALURONIC ACID FILLERS"
];

const line2Services = [
  "THE SANDWICH INJECTION PROTOCOL",
  "THE FOAMING COLLAGEN PROTOCOL",
  "BOTOX PRECISION PROTOCOLS",
  "EXOSOME CELLULAR REGENERATION",
  "MEDICAL DERMATOLOGY & HAIR LOSS"
];

export default function ServicesMarquee() {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marqueeContainer = marqueeRef.current;
    if (!marqueeContainer) return;

    const updateOpacity = () => {
      const items = marqueeContainer.querySelectorAll('.marquee-text-item');
      const containerRect = marqueeContainer.getBoundingClientRect();
      const centerX = containerRect.left + containerRect.width / 2;

      items.forEach((item) => {
        const itemRect = item.getBoundingClientRect();
        const itemCenterX = itemRect.left + itemRect.width / 2;
        const distance = Math.abs(centerX - itemCenterX);
        const maxDistance = containerRect.width / 2;
        const normalizedDistance = Math.min(distance / maxDistance, 1);
        const opacity = 1 - normalizedDistance * 0.45;
        item.style.opacity = opacity.toString();
      });
    };

    let animationFrameId;
    const animationFrame = () => {
      updateOpacity();
      animationFrameId = requestAnimationFrame(animationFrame);
    };

    animationFrameId = requestAnimationFrame(animationFrame);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div ref={marqueeRef} className="hero-dual-marquee-wrapper">
      {/* LINE 1 - MOVING LEFT */}
      <div className="marquee-line-row">
        <div className="marquee-track-container left-container">
          <div className="marquee-track animate-scroll-left">
            {line1Services.map((item, idx) => (
              <React.Fragment key={idx}>
                <span className="marquee-text-item">{item}</span>
                <Sparkles size={13} className="service-star-separator" />
              </React.Fragment>
            ))}
          </div>
          <div className="marquee-track animate-scroll-left" aria-hidden="true">
            {line1Services.map((item, idx) => (
              <React.Fragment key={`dup1-${idx}`}>
                <span className="marquee-text-item">{item}</span>
                <Sparkles size={13} className="service-star-separator" />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* LINE 2 - MOVING RIGHT */}
      <div className="marquee-line-row">
        <div className="marquee-track-container right-container">
          <div className="marquee-track animate-scroll-right">
            {line2Services.map((item, idx) => (
              <React.Fragment key={idx}>
                <span className="marquee-text-item">{item}</span>
                <Sparkles size={13} className="service-star-separator" />
              </React.Fragment>
            ))}
          </div>
          <div className="marquee-track animate-scroll-right" aria-hidden="true">
            {line2Services.map((item, idx) => (
              <React.Fragment key={`dup2-${idx}`}>
                <span className="marquee-text-item">{item}</span>
                <Sparkles size={13} className="service-star-separator" />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Left Vignette Fade */}
      <div className="marquee-vignette-left" />

      {/* Right Vignette Fade */}
      <div className="marquee-vignette-right" />

      <style>{`
        .hero-dual-marquee-wrapper {
          position: relative;
          width: 100vw;
          left: 50%;
          right: 50%;
          margin-left: -50vw;
          margin-right: -50vw;
          overflow: hidden;
          padding: 1.2rem 0;
          margin-top: 2.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          border-top: 1px solid rgba(201, 168, 118, 0.3);
          border-bottom: 1px solid rgba(201, 168, 118, 0.3);
          background: rgba(244, 239, 230, 0.75);
          backdrop-filter: blur(10px);
          z-index: 10;
        }

        .marquee-line-row {
          width: 100%;
          overflow: hidden;
        }

        .marquee-track-container {
          display: flex;
          width: max-content;
          user-select: none;
        }

        .marquee-track-container:hover .marquee-track {
          animation-play-state: paused;
        }

        .marquee-track {
          display: flex;
          align-items: center;
          gap: 1.75rem;
          padding-right: 1.75rem;
          flex-shrink: 0;
          will-change: transform;
        }

        .animate-scroll-left {
          animation: marqueeLeft 52s linear infinite;
        }

        .animate-scroll-right {
          animation: marqueeRight 58s linear infinite;
        }

        @keyframes marqueeLeft {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        @keyframes marqueeRight {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        /* Bold Luxury Text Item for Light Sanctuary Background */
        .marquee-text-item {
          font-family: var(--font-sans, sans-serif);
          font-size: 0.875rem;
          font-weight: 800;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--text-primary, #1E1B18);
          white-space: nowrap;
          transition: color 0.3s ease, text-shadow 0.3s ease;
        }

        .marquee-text-item:hover {
          color: var(--accent-gold-dark, #A8824B);
        }

        /* Star Separator */
        .service-star-separator {
          color: var(--accent-gold-dark, #A8824B);
          flex-shrink: 0;
          opacity: 0.85;
        }

        /* Vignettes */
        .marquee-vignette-left {
          position: absolute;
          top: 0; left: 0; bottom: 0;
          width: 140px;
          background: linear-gradient(90deg, var(--bg-primary, #FAF7F2) 0%, transparent 100%);
          pointer-events: none;
          z-index: 5;
        }

        .marquee-vignette-right {
          position: absolute;
          top: 0; right: 0; bottom: 0;
          width: 140px;
          background: linear-gradient(270deg, var(--bg-primary, #FAF7F2) 0%, transparent 100%);
          pointer-events: none;
          z-index: 5;
        }

        @media (max-width: 768px) {
          .hero-dual-marquee-wrapper {
            margin-top: 2rem;
            padding: 0.9rem 0;
            gap: 0.65rem;
          }
          .marquee-text-item {
            font-size: 0.775rem;
            letter-spacing: 0.12em;
          }
          .marquee-vignette-left, .marquee-vignette-right {
            width: 60px;
          }
        }
      `}</style>
    </div>
  );
}
