import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { MapPin, Phone, MessageCircle, Clock, Instagram, ExternalLink, ArrowRight } from 'lucide-react';

export default function Contact({ onOpenBooking }) {
  return (
    <div className="contact-page page-padding-top">
      {/* Header */}
      <section className="page-header-section section-padding text-center">
        <div className="container">
          <span className="eyebrow">VISIT OUR INSTITUTE</span>
          <h1 className="title-large max-w-editorial">
            Contact & Private Consultations in Abdoun
          </h1>
          <p className="lead-paragraph">
            Located in Amman's premier medical district, Smart Clinic offers an exclusive sanctuary for non-surgical aesthetic care and AI skin diagnostics.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="contact-main-section section-padding bg-secondary">
        <div className="container">
          <div className="contact-grid">
            {/* Left Column: Details */}
            <div className="contact-info-card">
              <span className="eyebrow">LOCATION & DETAILS</span>
              <h2 className="title-medium">Smart Clinic Institute</h2>

              <div className="info-items-stack">
                {/* Address */}
                <div className="info-block">
                  <div className="info-icon-box">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="info-block-title">Institute Address</h4>
                    <p className="info-block-text">{CLINIC_INFO.address}</p>
                    <a
                      href={CLINIC_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-editorial mt-2"
                    >
                      Open in Google Maps <ExternalLink size={14} />
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="info-block">
                  <div className="info-icon-box">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="info-block-title">Clinic Hours</h4>
                    <p className="info-block-text">{CLINIC_INFO.hours}</p>
                  </div>
                </div>

                {/* Direct Channels */}
                <div className="info-block">
                  <div className="info-icon-box">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="info-block-title">Direct Phone & WhatsApp</h4>
                    <p className="info-block-text">{CLINIC_INFO.phone}</p>
                    <div className="direct-buttons-row">
                      <a href={CLINIC_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary btn-sm">
                        <MessageCircle size={16} /> WhatsApp Us
                      </a>
                      <a href={CLINIC_INFO.phoneUrl} className="btn-secondary btn-sm">
                        <Phone size={16} /> Call Direct
                      </a>
                    </div>
                  </div>
                </div>

                {/* Instagram Profiles */}
                <div className="info-block">
                  <div className="info-icon-box">
                    <Instagram size={20} />
                  </div>
                  <div>
                    <h4 className="info-block-title">Official Instagram Channels</h4>
                    <ul className="socials-list-styled">
                      <li>
                        <a href="https://instagram.com/smartclinicjo" target="_blank" rel="noopener noreferrer">
                          Clinic: <strong>{CLINIC_INFO.socials.clinic}</strong>
                        </a>
                      </li>
                      <li>
                        <a href="https://instagram.com/dr_shroqalhusaini" target="_blank" rel="noopener noreferrer">
                          Dr. Shroq: <strong>{CLINIC_INFO.socials.drShroq}</strong>
                        </a>
                      </li>
                      <li>
                        <a href="https://instagram.com/oways_alrawashdeh" target="_blank" rel="noopener noreferrer">
                          Dr. Oways: <strong>{CLINIC_INFO.socials.drOways}</strong>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Styled Map Card */}
            <div className="contact-map-card">
              <div className="map-card-header">
                <span className="eyebrow eyebrow-light">MAP LOCATION</span>
                <h3 className="map-card-title text-white">Salman Al-Qudah Street, Building 9</h3>
                <p className="text-muted-light">
                  1st Floor (Opposite Zest Restaurant), Abdoun, Amman, Hashemite Kingdom of Jordan
                </p>
              </div>

              <div className="map-visual-placeholder">
                <div className="map-pin-pulse">
                  <MapPin size={36} className="pin-icon" />
                  <span className="pin-label">SMART CLINIC</span>
                </div>
                <p className="map-note">Interactive Google Maps Embed</p>
                <a
                  href={CLINIC_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary btn-gold"
                >
                  Get Navigation Directions <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="closing-cta-section section-padding">
        <div className="container text-center">
          <h2 className="title-medium">We Look Forward to Welcoming You</h2>
          <p className="closing-subtext">
            Schedule your appointment to experience Jordan's premier technological aesthetic institute.
          </p>
          <button className="btn-primary" onClick={onOpenBooking}>
            Book Private Consultation
          </button>
        </div>
      </section>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 4rem;
        }

        .contact-info-card {
          background-color: var(--bg-primary);
          border: 1px solid var(--border-gold);
          padding: 3.5rem 3rem;
          border-radius: 2px;
        }

        .info-items-stack {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
          margin-top: 2rem;
        }

        .info-block {
          display: flex;
          align-items: flex-start;
          gap: 1.5rem;
        }

        .info-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background-color: rgba(201, 168, 118, 0.12);
          color: var(--accent-gold-dark);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .info-block-title {
          font-family: var(--font-serif);
          font-size: 1.25rem;
          font-weight: 500;
          color: var(--text-primary);
          margin-bottom: 0.35rem;
        }

        .info-block-text {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        .direct-buttons-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-top: 1rem;
        }

        .btn-sm {
          padding: 0.6rem 1.2rem;
          font-size: 0.775rem;
        }

        .socials-list-styled {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-top: 0.5rem;
        }

        .socials-list-styled a {
          font-size: 0.9rem;
          color: var(--text-muted);
          transition: color 0.2s ease;
        }

        .socials-list-styled a:hover {
          color: var(--accent-gold-dark);
        }

        /* Map Card */
        .contact-map-card {
          background-color: var(--bg-dark);
          color: #FFFFFF;
          border: 1px solid var(--border-gold);
          border-radius: 2px;
          padding: 3.5rem 2.5rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .map-card-title {
          font-family: var(--font-serif);
          font-size: 1.8rem;
          font-weight: 500;
          margin: 0.5rem 0;
        }

        .map-visual-placeholder {
          background-color: #27231F;
          border: 1px dashed var(--border-gold);
          border-radius: 2px;
          padding: 4rem 2rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
          margin-top: 2rem;
        }

        .map-pin-pulse {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }

        .pin-icon {
          color: var(--accent-gold);
          animation: pulse 2s infinite;
        }

        .pin-label {
          font-family: var(--font-serif);
          font-size: 1.1rem;
          letter-spacing: 0.15em;
          color: #FFFFFF;
        }

        .map-note {
          font-size: 0.825rem;
          color: var(--text-dark-muted);
        }

        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.15); opacity: 0.8; }
          100% { transform: scale(1); opacity: 1; }
        }

        @media (max-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
