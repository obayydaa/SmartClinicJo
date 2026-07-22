import React from 'react';
import { BRAND_STORY, CLINIC_INFO, CLINIC_DIFFERENTIATORS } from '../data/clinicData';
import { ArrowRight, Award, ShieldCheck, Heart, Sparkles, CheckCircle2 } from 'lucide-react';

export default function About({ setActivePage, onOpenBooking }) {
  return (
    <div className="about-page page-padding-top">
      {/* Header Banner */}
      <section className="page-header-section section-padding text-center">
        <div className="container">
          <span className="eyebrow">OUR PHILOSOPHY & STORY</span>
          <h1 className="title-large max-w-editorial">
            Where Science Meets Luxury in Aesthetic Medicine.
          </h1>
          <p className="lead-paragraph">
            Smart Clinic was established in Abdoun, Amman as a digital flagship and boutique medical institute — redefining aesthetic care through precision AI diagnostics and patient-first medical integrity.
          </p>
        </div>
      </section>

      {/* Brand Philosophy Section */}
      <section className="philosophy-section section-padding bg-secondary">
        <div className="container">
          <div className="philosophy-grid">
            <div className="philosophy-card">
              <span className="card-tag">VISION</span>
              <h3 className="card-title">Intelligent Reference for Jordan</h3>
              <p className="card-text">{BRAND_STORY.vision}</p>
            </div>

            <div className="philosophy-card">
              <span className="card-tag">MISSION</span>
              <h3 className="card-title">Skin-Health First Approach</h3>
              <p className="card-text">{BRAND_STORY.mission}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why the Name "Smart Clinic" */}
      <section className="why-name-section section-padding">
        <div className="container">
          <div className="why-name-layout">
            <div className="why-name-text">
              <span className="eyebrow">BEHIND THE BRAND</span>
              <h2 className="title-medium">Why the Name "Smart Clinic"?</h2>
              <p className="paragraph-body">
                {BRAND_STORY.whyName}
              </p>
              <p className="paragraph-body">
                In an era dominated by high-volume generic beauty treatments, Smart Clinic stands for quiet confidence. We do not promote artificial trends or extreme alterations. Our doctors utilize empirical scan data to enhance what makes your face uniquely yours.
              </p>
              <div className="mantra-badge">
                <span>OUR CORE MANTRA:</span>
                <span className="mantra-quote">"Think Smart."</span>
              </div>
            </div>
            <div className="why-name-image-wrapper">
              <img
                src="/SC_pics/clinic/clinic 1.jpeg"
                alt="Smart Clinic Sanctuary in Abdoun"
                className="why-name-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Facility & Location Profile */}
      <section className="facility-section section-padding bg-secondary">
        <div className="container">
          <div className="section-header text-center">
            <span className="eyebrow">SANCTUARY IN ABDOUN</span>
            <h2 className="title-medium">A Boutique Clinical Experience</h2>
            <p className="section-lead-text">
              Designed as a calm, private sanctuary where advanced medical diagnostics meet warm luxury.
            </p>
          </div>

          <div className="facility-features-grid">
            <div className="facility-feature-box">
              <ShieldCheck size={28} className="fac-icon" />
              <h4>Medical Sourcing Rigor</h4>
              <p>100% original certified products sourced exclusively through authorized national agents in Jordan.</p>
            </div>

            <div className="facility-feature-box">
              <Sparkles size={28} className="fac-icon" />
              <h4>Flagship Technology</h4>
              <p>Pioneering Jordan's first XERF dual-frequency monopolar RF system and advanced AI skin scanners.</p>
            </div>

            <div className="facility-feature-box">
              <Heart size={28} className="fac-icon" />
              <h4>Absolute Patient Privacy</h4>
              <p>Exclusive, non-crowded scheduling ensuring absolute privacy, comfort, and personalized care.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators Checklist */}
      <section className="differentiators-detail-section section-padding">
        <div className="container">
          <div className="section-header text-center">
            <span className="eyebrow">OUR STANDARDS</span>
            <h2 className="title-medium">What Sets Smart Clinic Apart</h2>
          </div>

          <div className="differentiator-list-grid">
            {CLINIC_DIFFERENTIATORS.map((diff, index) => (
              <div key={diff.id} className="diff-card-detail">
                <CheckCircle2 size={22} className="diff-icon" />
                <div>
                  <h4 className="diff-card-heading">{diff.title}</h4>
                  <p className="diff-card-body">{diff.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="closing-cta-section section-padding bg-secondary">
        <div className="container text-center">
          <h2 className="title-medium">Experience Personalized Aesthetic Care</h2>
          <p className="closing-subtext">
            Consult with our medical doctors in Abdoun and design your intelligent treatment plan today.
          </p>
          <button className="btn-primary" onClick={onOpenBooking}>
            Book Private Consultation
          </button>
        </div>
      </section>

      <style>{`
        .page-padding-top {
          padding-top: 100px;
        }

        .max-w-editorial {
          max-width: 820px;
          margin: 0 auto 1.5rem;
        }

        .lead-paragraph {
          font-size: 1.15rem;
          color: var(--text-muted);
          max-width: 720px;
          margin: 0 auto;
          line-height: 1.8;
        }

        .philosophy-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
        }

        .philosophy-card {
          background-color: var(--bg-primary);
          border: 1px solid var(--border-gold);
          padding: 3.5rem 3rem;
          border-radius: 2px;
        }

        .card-tag {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          color: var(--accent-gold-dark);
          display: block;
          margin-bottom: 1rem;
        }

        .card-title {
          font-family: var(--font-serif);
          font-size: 1.8rem;
          font-weight: 500;
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .card-text {
          font-size: 1rem;
          color: var(--text-muted);
          line-height: 1.8;
        }

        .why-name-layout {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .paragraph-body {
          font-size: 1.05rem;
          color: var(--text-muted);
          line-height: 1.8;
          margin-bottom: 1.25rem;
        }

        .mantra-badge {
          display: inline-flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem 1.5rem;
          background-color: var(--bg-secondary);
          border-left: 3px solid var(--accent-gold-dark);
          margin-top: 1.5rem;
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          color: var(--text-primary);
        }

        .mantra-quote {
          font-family: var(--font-serif);
          font-size: 1.3rem;
          font-style: italic;
          color: var(--accent-gold-dark);
        }

        .why-name-img {
          width: 100%;
          height: 480px;
          object-fit: cover;
          border-radius: 2px;
          border: 1px solid var(--border-subtle);
        }

        .facility-features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
        }

        .facility-feature-box {
          background-color: var(--bg-primary);
          padding: 2.5rem;
          border-radius: 2px;
          border: 1px solid var(--border-subtle);
          text-align: center;
        }

        .fac-icon {
          color: var(--accent-gold-dark);
          margin-bottom: 1.25rem;
        }

        .facility-feature-box h4 {
          font-family: var(--font-serif);
          font-size: 1.35rem;
          font-weight: 500;
          color: var(--text-primary);
          margin-bottom: 0.75rem;
        }

        .facility-feature-box p {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.65;
        }

        .differentiator-list-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }

        .diff-card-detail {
          display: flex;
          align-items: flex-start;
          gap: 1.25rem;
          padding: 1.75rem;
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-subtle);
          border-radius: 2px;
        }

        .diff-icon {
          color: var(--accent-gold-dark);
          flex-shrink: 0;
          margin-top: 3px;
        }

        .diff-card-heading {
          font-family: var(--font-serif);
          font-size: 1.25rem;
          font-weight: 500;
          color: var(--text-primary);
          margin-bottom: 0.35rem;
        }

        .diff-card-body {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        @media (max-width: 1024px) {
          .philosophy-grid, .why-name-layout, .facility-features-grid, .differentiator-list-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
