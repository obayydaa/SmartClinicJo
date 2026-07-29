import React, { useEffect, useRef, useState } from 'react';
import { PulsingBorder, MeshGradient } from "@paper-design/shaders-react";
import { motion } from "framer-motion";

export function ShaderBackground({ children, className = "" }) {
  const containerRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleMouseEnter = () => setIsActive(true);
    const handleMouseLeave = () => setIsActive(false);

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (container) {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className={`shader-background-wrapper ${className}`} style={{ position: 'relative', overflow: 'hidden' }}>
      {/* SVG Filters */}
      <svg className="shader-svg-filters" style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <filter id="glass-effect" x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence baseFrequency="0.005" numOctaves="1" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.3" />
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0.02
                      0 1 0 0 0.02
                      0 0 1 0 0.05
                      0 0 0 0.9 0"
              result="tint"
            />
          </filter>
          <filter id="gooey-filter" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="gooey"
            />
            <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
          </filter>
        </defs>
      </svg>

      {/* Solid Smooth Gold Canvas Base across full bar */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(135deg, rgba(181, 138, 73, 0.96) 0%, rgba(168, 130, 75, 0.96) 50%, rgba(140, 103, 52, 0.96) 100%)',
        zIndex: 0
      }} />

      {/* Left Flank Shader Animation */}
      <div style={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        width: '38%',
        zIndex: 1,
        pointerEvents: 'none',
        maskImage: 'linear-gradient(to right, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)',
        WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)'
      }}>
        <MeshGradient
          className="shader-mesh-base-left"
          colors={["#B58A49", "#D4AF37", "#8C6734", "#4A3B22", "#1E1B18"]}
          speed={0.3}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', backgroundColor: '#100E0C' }}
        />
        <MeshGradient
          className="shader-mesh-wireframe-left"
          colors={["#FFFFFF", "#F3E5AB", "#D8B57D", "#8B4513"]}
          speed={0.2}
          wireframe="true"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.35 }}
        />
      </div>

      {/* Right Flank Shader Animation */}
      <div style={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        width: '38%',
        zIndex: 1,
        pointerEvents: 'none',
        maskImage: 'linear-gradient(to left, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)',
        WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)'
      }}>
        <MeshGradient
          className="shader-mesh-base-right"
          colors={["#B58A49", "#D4AF37", "#8C6734", "#4A3B22", "#1E1B18"]}
          speed={0.3}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', backgroundColor: '#100E0C' }}
        />
        <MeshGradient
          className="shader-mesh-wireframe-right"
          colors={["#FFFFFF", "#F3E5AB", "#D8B57D", "#8B4513"]}
          speed={0.2}
          wireframe="true"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.35 }}
        />
      </div>

      {/* Content Container (Center Text over Solid Smooth Gold) */}
      <div className="shader-content-padding" style={{ position: 'relative', zIndex: 2, width: '100%', padding: '3.75rem 1.5rem' }}>
        {children}
      </div>
    </div>
  );
}

export function PulsingCircle() {
  return (
    <div className="pulsing-circle-wrapper" style={{ position: 'absolute', bottom: '1.5rem', right: '2rem', zIndex: 10 }}>
      <div style={{ position: 'relative', width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <PulsingBorder
          colors={["#D4AF37", "#B58A49", "#F3E5AB", "#EAD2AA", "#9C773C"]}
          colorBack="#00000000"
          speed={1.5}
          roundness={1}
          thickness={0.1}
          softness={0.2}
          intensity={5}
          spotSize={0.1}
          pulse={0.1}
          smoke={0.5}
          smokeSize={4}
          scale={0.65}
          rotation={0}
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
          }}
        />

        <motion.svg
          className="rotating-text-svg"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', transform: 'scale(1.5)' }}
          viewBox="0 0 100 100"
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <defs>
            <path id="circlePath" d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
          </defs>
          <text style={{ fontSize: '7px', fill: 'rgba(255, 255, 255, 0.85)', letterSpacing: '1px' }}>
            <textPath href="#circlePath" startOffset="0%">
              SMART CLINIC • ABDOUN AMMAN • SMART CLINIC • ABDOUN AMMAN •
            </textPath>
          </text>
        </motion.svg>
      </div>
    </div>
  );
}
