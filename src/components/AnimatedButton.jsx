import React from 'react';

/**
 * AnimatedShineButton
 * - Continuous text shine sweep mask animation
 * - Continuous border shine gradient sweep animation
 * - Micro spring-like hover scaling & active press response
 * - Supports primary and secondary luxury variants
 */
export default function AnimatedButton({
  children,
  onClick,
  variant = 'primary', // 'primary' | 'secondary' | 'gold'
  className = '',
  type = 'button',
  ...rest
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`animated-shine-btn animated-btn-${variant} ${className}`}
      {...rest}
    >
      {/* Animated Text with Mask Sweep */}
      <span className="btn-shine-text">
        {children}
      </span>

      {/* Animated Border Sweep Layer */}
      <span className="btn-border-shine-layer" aria-hidden="true" />

      <style>{`
        .animated-shine-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.85rem 2rem;
          border-radius: 8px;
          overflow: hidden;
          font-family: var(--font-sans, sans-serif);
          font-size: 0.825rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          cursor: pointer;
          user-select: none;
          transition: transform 0.25s cubic-bezier(0.3, 1.5, 0.5, 1), box-shadow 0.3s ease, background-color 0.3s ease;
          border: 1px solid transparent;
        }

        .animated-shine-btn:hover {
          transform: scale(1.02);
        }

        .animated-shine-btn:active {
          transform: scale(0.97);
        }

        /* PRIMARY VARIANT (Solid Dark Luxury with Gold Accent) */
        .animated-btn-primary {
          background: #23201D;
          color: #FFFFFF;
          border-color: rgba(201, 168, 118, 0.4);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
          --shine-color: rgba(230, 202, 156, 0.85);
        }

        .animated-btn-primary:hover {
          border-color: rgba(201, 168, 118, 0.8);
          box-shadow: 0 8px 28px rgba(168, 130, 75, 0.25);
        }

        /* SECONDARY VARIANT (Outlined Luxury) */
        .animated-btn-secondary {
          background: rgba(30, 27, 24, 0.4);
          color: #FFFFFF;
          border-color: rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(8px);
          --shine-color: rgba(255, 255, 255, 0.75);
        }

        .animated-btn-secondary:hover {
          background: rgba(43, 39, 35, 0.8);
          border-color: var(--accent-gold-dark, #A8824B);
          color: var(--accent-gold-light, #E6CA9C);
        }

        /* GOLD VARIANT (Champagne Gold Fill) */
        .animated-btn-gold {
          background: linear-gradient(135deg, #D8B57D 0%, #A8824B 100%);
          color: #1E1B18;
          border-color: #EAD2AA;
          font-weight: 800;
          box-shadow: 0 4px 20px rgba(168, 130, 75, 0.3);
          --shine-color: rgba(255, 255, 255, 0.95);
        }

        /* Text Shine Animation */
        .btn-shine-text {
          position: relative;
          z-index: 10;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          background: linear-gradient(
            -75deg,
            currentColor 0%,
            currentColor 35%,
            #FFFFFF 50%,
            currentColor 65%,
            currentColor 100%
          );
          background-size: 200% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          animation: textShineSweep 2.5s linear infinite;
        }

        @keyframes textShineSweep {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }

        /* Border Shine Animation Layer */
        .btn-border-shine-layer {
          position: absolute;
          inset: 0;
          border-radius: 8px;
          padding: 1px;
          pointer-events: none;
          background: linear-gradient(
            -75deg,
            transparent 30%,
            var(--shine-color, rgba(201, 168, 118, 0.8)) 50%,
            transparent 70%
          );
          background-size: 200% 100%;
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          animation: borderShineSweep 2.5s linear infinite;
        }

        @keyframes borderShineSweep {
          0% {
            background-position: 200% 0;
            opacity: 0.3;
          }
          50% {
            opacity: 1;
          }
          100% {
            background-position: -200% 0;
            opacity: 0.3;
          }
        }
      `}</style>
    </button>
  );
}
