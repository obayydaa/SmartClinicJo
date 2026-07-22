import React from 'react';

export default function BackgroundPaths({ density = 'medium', opacity = 0.75, variant = 'topography', className = "" }) {
  // Density controls total line count across section
  const count = density === 'ultra-light' ? 7 : density === 'dense' ? 44 : density === 'light' ? 14 : 26;
  const step = density === 'ultra-light' ? 70 : density === 'dense' ? 18 : density === 'light' ? 45 : 28;

  const paths = Array.from({ length: count }).map((_, i) => {
    const offset = i * (density === 'ultra-light' ? 50 : density === 'dense' ? 22 : 36);

    let yStart, cp1x, cp1y, cp2x, cp2y, yEnd;

    if (variant === 'waves') {
      yStart = 40 + i * step;
      cp1x = 380 + i * 6;
      cp1y = 180 + (i % 2 === 0 ? offset * 0.75 : -offset * 0.45);
      cp2x = 1020 - i * 8;
      cp2y = 670 + (i % 3 === 0 ? offset * 0.55 : -offset * 0.65);
      yEnd = 860 - i * step * 0.7;
    } else if (variant === 'minimal') {
      yStart = 120 + i * step;
      cp1x = 440;
      cp1y = 280 + (i % 2 === 0 ? 50 : -50);
      cp2x = 960;
      cp2y = 620 - (i % 2 === 0 ? 50 : -50);
      yEnd = 780 - i * step * 0.5;
    } else {
      // Default organic topography
      yStart = 70 + i * step;
      cp1x = 300 + i * 8;
      cp1y = 50 + (i % 2 === 0 ? offset : -offset * 0.5);
      cp2x = 1000 - i * 10;
      cp2y = 740 + (i % 3 === 0 ? offset * 0.85 : -offset * 0.45);
      yEnd = 890 - i * step * 0.8;
    }

    // Increased stroke opacity & stroke width for clear visibility
    const strokeOpacity = (0.15 + (i % 4) * 0.08).toFixed(3);
    const strokeWidth = (1.2 + (i % 3) * 0.6).toFixed(1);

    return (
      <path
        key={i}
        d={`M -120 ${yStart} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, 1560 ${yEnd}`}
        stroke="url(#smartGoldGradVivid)"
        strokeWidth={strokeWidth}
        strokeOpacity={strokeOpacity}
        fill="none"
      />
    );
  });

  return (
    <div className={`background-paths-container ${className}`} style={{ opacity }}>
      <svg
        className="background-paths-svg"
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="smartGoldGradVivid" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D8B57D" stopOpacity="0.95" />
            <stop offset="35%" stopColor="#B88E52" stopOpacity="0.8" />
            <stop offset="75%" stopColor="#EAD2AA" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#9C773C" stopOpacity="0.45" />
          </linearGradient>
        </defs>

        <g className="paths-group">
          {paths}
        </g>
      </svg>

      <style>{`
        .background-paths-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          overflow: hidden;
          z-index: 0;
        }

        .background-paths-svg {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `}</style>
    </div>
  );
}
