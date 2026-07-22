import React from 'react';
import { DOCTORS } from '../data/clinicData';
import DoctorProfileCard from '../components/DoctorProfileCard';
import BackgroundPaths from '../components/BackgroundPaths';

export default function Doctors({ onOpenBooking }) {
  return (
    <div className="doctors-page page-padding-top">
      {/* Header */}
      <section className="page-header-section section-padding text-center relative-section">
        <BackgroundPaths opacity={0.65} />
        <div className="container relative-z">
          <span className="eyebrow">CLINICAL LEADERSHIP</span>
          <h1 className="title-large max-w-editorial">
            Medical Rigor & Refined Aesthetic Vision
          </h1>
          <p className="lead-paragraph">
            Smart Clinic was co-founded by medical doctors committed to academic excellence, continuous global conference participation, and patient-first safety protocols.
          </p>
        </div>
      </section>

      {/* Split-Screen Executive Showcase Section */}
      <section className="doctors-profiles-section section-padding bg-secondary relative-section">
        <BackgroundPaths opacity={0.85} />
        <div className="container relative-z">
          <div className="doctors-split-screen-stack">
            {/* Stage 1: Dr. Shroq (Pic Left, Bio Right) */}
            {DOCTORS[0] && (
              <div className="split-stage stage-shroq-top">
                <DoctorProfileCard doc={DOCTORS[0]} onOpenBooking={onOpenBooking} />
              </div>
            )}

            {/* Split Divider */}
            <div className="doctors-split-divider">
              <div className="split-line" />
              <div className="split-badge-pill">
                <span>SMART CLINIC ABDOUN • CO-FOUNDERS</span>
              </div>
              <div className="split-line" />
            </div>

            {/* Stage 2: Dr. Oways (Bio Left, Pic Right) */}
            {DOCTORS[1] && (
              <div className="split-stage stage-oways-bottom">
                <DoctorProfileCard doc={DOCTORS[1]} onOpenBooking={onOpenBooking} />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="closing-cta-section section-padding">
        <div className="container text-center">
          <h2 className="title-medium">Schedule Your Private Doctor Consultation</h2>
          <p className="closing-subtext">
            Meet directly with our medical doctors in Abdoun to receive your biological skin scan and custom plan.
          </p>
          <button className="btn-primary" onClick={onOpenBooking}>
            Book Consultation
          </button>
        </div>
      </section>

      <style>{`
        .page-padding-top {
          padding-top: 100px;
        }

        .relative-section {
          position: relative;
          overflow: hidden;
        }

        .relative-z {
          position: relative;
          z-index: 2;
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

        .doctors-split-screen-stack {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .doctors-split-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
          margin: 2.5rem 0;
        }

        .split-line {
          flex: 1;
          height: 2px;
          background: linear-gradient(90deg, transparent 0%, var(--accent-gold-dark, #A8824B) 50%, transparent 100%);
        }

        .split-badge-pill {
          padding: 0.4rem 1.25rem;
          background-color: var(--bg-primary, #FFFFFF);
          border: 1px solid var(--accent-gold-dark, #A8824B);
          border-radius: 20px;
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          color: var(--accent-gold-dark, #A8824B);
          text-transform: uppercase;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
        }

        .closing-subtext {
          font-size: 1.05rem;
          color: var(--text-muted);
          max-width: 600px;
          margin: 0.75rem auto 2rem;
          line-height: 1.7;
        }
      `}</style>
    </div>
  );
}
