import React from 'react';
import { TECHNOLOGY_INFO } from '../data/clinicData';
import { Cpu, Sparkles, Zap, Shield, Activity, Layers, ArrowRight } from 'lucide-react';

export default function Technology({ setActivePage, onOpenBooking }) {
  return (
    <div className="technology-page page-padding-top">
      {/* Header */}
      <section className="page-header-section section-padding text-center">
        <div className="container">
          <span className="eyebrow">TECHNOLOGY & INNOVATION</span>
          <h1 className="title-large max-w-editorial">
            Precision Science Behind Natural Aesthetic Outcomes
          </h1>
          <p className="lead-paragraph">
            Technology at Smart Clinic is not a marketing gimmick — it is the quiet foundation of medical safety, accurate diagnosis, and anatomical precision.
          </p>
        </div>
      </section>

      {/* HERO FEATURE 1: XERF SYSTEM */}
      <section className="xerf-feature-section section-padding bg-secondary">
        <div className="container">
          <div className="tech-hero-block">
            <div className="tech-hero-header">
              <span className="eyebrow eyebrow-badge">JORDAN'S FIRST • FDA-CLEARED</span>
              <h2 className="title-large">{TECHNOLOGY_INFO.xerf.title}</h2>
              <p className="tech-hero-sub">{TECHNOLOGY_INFO.xerf.subtitle}</p>
              <p className="paragraph-body text-lead">
                {TECHNOLOGY_INFO.xerf.description}
              </p>
            </div>

            {/* Dual Wavelength Linework Diagram */}
            <div className="xerf-diagram-box">
              <h4 className="diagram-title">Dual-Frequency Wavelength Mechanism</h4>
              <div className="diagram-visual">
                <div className="layer-bar layer-epidermis">
                  <div className="wave-line wave-high"></div>
                  <div className="layer-info">
                    <span className="freq-tag">6.78 MHz Wavelength</span>
                    <span className="layer-target">Epidermal & Upper Dermal Layer • Fine line smoothing & surface radiance</span>
                  </div>
                </div>
                <div className="layer-bar layer-smas">
                  <div className="wave-line wave-low"></div>
                  <div className="layer-info">
                    <span className="freq-tag gold-tag">2.0 MHz Wavelength</span>
                    <span className="layer-target">Deep SMAS Anatomical Layer • Structural collagen contraction & true tissue lifting</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Specifications Grid */}
            <div className="specs-grid">
              {TECHNOLOGY_INFO.xerf.specs.map((spec, idx) => (
                <div key={idx} className="spec-card">
                  <span className="spec-num">0{idx + 1}</span>
                  <h4 className="spec-title">{spec.title}</h4>
                  <p className="spec-detail">{spec.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HERO FEATURE 2: AI SKIN ANALYSIS */}
      <section className="ai-feature-section section-padding">
        <div className="container">
          <div className="ai-hero-layout">
            <div className="ai-hero-content">
              <span className="eyebrow">DIAGNOSTIC FOUNDATION</span>
              <h2 className="title-medium">{TECHNOLOGY_INFO.aiAnalysis.title}</h2>
              <p className="paragraph-body">
                {TECHNOLOGY_INFO.aiAnalysis.description}
              </p>

              <div className="benefits-checklist">
                <h4 className="benefits-title">Why Empirical Scan Data Matters to You:</h4>
                {TECHNOLOGY_INFO.aiAnalysis.benefits.map((benefit, idx) => (
                  <div key={idx} className="benefit-item">
                    <Zap size={18} className="benefit-icon" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              <button className="btn-primary mt-4" onClick={() => setActivePage('ai-skin-analysis')}>
                Learn About Dedicated AI Scan Page <ArrowRight size={16} />
              </button>
            </div>

            <div className="ai-diagram-card">
              <div className="ai-scan-graphic">
                <div className="scan-target-circle">
                  <Cpu size={48} className="scan-cpu-icon" />
                  <div className="scan-line-anim"></div>
                </div>
                <div className="metric-tag tag-1">Pore Density Assessment</div>
                <div className="metric-tag tag-2">Sub-surface Vascular Mapping</div>
                <div className="metric-tag tag-3">Deep Hydration Index</div>
                <div className="metric-tag tag-4">Collagen Matrix Evaluation</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="closing-cta-section section-padding bg-secondary">
        <div className="container text-center">
          <h2 className="title-medium">Experience XERF & AI Diagnostics in Abdoun</h2>
          <p className="closing-subtext">
            Schedule your appointment to experience Jordan's premier technological aesthetic institute.
          </p>
          <button className="btn-primary" onClick={onOpenBooking}>
            Book Private Consultation
          </button>
        </div>
      </section>

      <style>{`
        .eyebrow-badge {
          background-color: var(--accent-gold-glow);
          padding: 0.35rem 0.8rem;
          border-radius: 2px;
          color: var(--accent-gold-dark);
        }

        .tech-hero-block {
          display: flex;
          flex-direction: column;
          gap: 3.5rem;
        }

        .tech-hero-sub {
          font-size: 1.25rem;
          color: var(--accent-gold-dark);
          margin: 0.5rem 0 1.25rem;
          font-family: var(--font-serif);
        }

        .text-lead {
          font-size: 1.1rem;
          max-width: 840px;
        }

        /* Wavelength Diagram */
        .xerf-diagram-box {
          background-color: var(--bg-primary);
          border: 1px solid var(--border-gold);
          padding: 3rem;
          border-radius: 2px;
        }

        .diagram-title {
          font-family: var(--font-serif);
          font-size: 1.4rem;
          color: var(--text-primary);
          margin-bottom: 2rem;
        }

        .diagram-visual {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .layer-bar {
          display: flex;
          align-items: center;
          gap: 2rem;
          padding: 1.5rem 2rem;
          border-radius: 2px;
          border: 1px dashed var(--border-gold);
          background-color: var(--bg-secondary);
        }

        .freq-tag {
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--text-primary);
          display: block;
          margin-bottom: 0.25rem;
        }

        .gold-tag {
          color: var(--accent-gold-dark);
        }

        .layer-target {
          font-size: 0.9rem;
          color: var(--text-muted);
        }

        /* Specs Grid */
        .specs-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
        }

        .spec-card {
          background-color: var(--bg-primary);
          border: 1px solid var(--border-subtle);
          padding: 2rem 1.75rem;
          border-radius: 2px;
        }

        .spec-num {
          font-family: var(--font-serif);
          font-size: 1.75rem;
          color: var(--accent-gold-dark);
          display: block;
          margin-bottom: 0.75rem;
        }

        .spec-title {
          font-family: var(--font-serif);
          font-size: 1.25rem;
          font-weight: 500;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .spec-detail {
          font-size: 0.875rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        /* AI Hero Layout */
        .ai-hero-layout {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .benefits-checklist {
          margin: 2rem 0;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .benefits-title {
          font-family: var(--font-serif);
          font-size: 1.2rem;
          color: var(--text-primary);
        }

        .benefit-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.925rem;
          color: var(--text-muted);
        }

        .benefit-icon {
          color: var(--accent-gold-dark);
          flex-shrink: 0;
        }

        /* AI Diagram Card Graphic */
        .ai-diagram-card {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-gold);
          padding: 4rem 2rem;
          border-radius: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .ai-scan-graphic {
          position: relative;
          width: 240px;
          height: 240px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .scan-target-circle {
          width: 140px;
          height: 140px;
          border-radius: 50%;
          border: 1px solid var(--accent-gold);
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: var(--bg-primary);
          box-shadow: 0 0 40px rgba(201, 168, 118, 0.2);
          position: relative;
          overflow: hidden;
        }

        .scan-cpu-icon {
          color: var(--accent-gold-dark);
        }

        .scan-line-anim {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: var(--accent-gold);
          box-shadow: 0 0 8px var(--accent-gold);
          animation: scanMove 2.5s infinite linear;
          will-change: transform;
        }

        @keyframes scanMove {
          0% { transform: translateY(0); }
          50% { transform: translateY(220px); }
          100% { transform: translateY(0); }
        }

        .metric-tag {
          position: absolute;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          padding: 0.4rem 0.8rem;
          background-color: var(--bg-primary);
          border: 1px solid var(--border-gold);
          border-radius: 2px;
          color: var(--text-primary);
          white-space: nowrap;
        }

        .tag-1 { top: -20px; left: 50%; transform: translateX(-50%); }
        .tag-2 { bottom: -20px; left: 50%; transform: translateX(-50%); }
        .tag-3 { left: -70px; top: 50%; transform: translateY(-50%); }
        .tag-4 { right: -70px; top: 50%; transform: translateY(-50%); }

        @media (max-width: 1024px) {
          .specs-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .ai-hero-layout {
            grid-template-columns: 1fr;
          }
          .tag-3 { left: 0; }
          .tag-4 { right: 0; }
        }

        @media (max-width: 640px) {
          .specs-grid {
            grid-template-columns: 1fr;
          }
          .layer-bar {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </div>
  );
}
