import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { CLINIC_INFO_AR } from '../data/clinicDataAR';
import { Instagram, MapPin, Phone, Clock, ArrowUpRight } from 'lucide-react';
import logoImg from '../assets/SC_pics/SC logo enhanced png.webp';

export default function Footer({ onOpenBooking, lang = 'en' }) {
  const isAr = lang === 'ar';
  const info = isAr ? CLINIC_INFO_AR : CLINIC_INFO;

  const scrollToSection = (sectionId) => {
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        const offset = 70;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = el.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="site-footer">
      <div className="container">
        {/* Main Footer Grid */}
        <div className="footer-top-grid">
          {/* Brand Column */}
          <div className="footer-brand-col">
            <div className="footer-logo" onClick={() => scrollToSection('home')}>
              <img src={logoImg} alt="Smart Clinic" className="footer-logo-img" />
            </div>
            <p className="footer-tagline">
              {info.supportingTagline}
            </p>
            <div className="footer-mantra">
              <span>{isAr ? 'فلسفتنا:' : 'Philosophy:'}</span> <em>"{info.mantra}"</em>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="footer-links-col">
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-links-list">
              <li><button onClick={() => scrollToSection('home')}>Home</button></li>
              <li><button onClick={() => scrollToSection('about')}>About Philosophy</button></li>
              <li><button onClick={() => scrollToSection('why-us')}>Why Smart Clinic</button></li>
              <li><button onClick={() => scrollToSection('treatments')}>What We Offer</button></li>
              <li><button onClick={() => scrollToSection('xerf')}>XERF & AI Scan</button></li>
              <li><button onClick={() => scrollToSection('doctors')}>Doctors Profiles</button></li>
              <li><button onClick={() => scrollToSection('faq')}>FAQ Guidance</button></li>
              <li><button onClick={() => scrollToSection('contact')}>Contact & Location</button></li>
            </ul>
          </div>

          {/* Location & Hours Column */}
          <div className="footer-contact-col">
            <h4 className="footer-heading">Institute Location</h4>
            <p className="footer-address">
              <MapPin size={16} className="footer-icon" />
              {CLINIC_INFO.address}
            </p>
            <a
              href={CLINIC_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-map-link"
            >
              Open in Google Maps <ArrowUpRight size={14} />
            </a>

            <div className="footer-hours">
              <Clock size={16} className="footer-icon" />
              <span>{CLINIC_INFO.hours}</span>
            </div>

            <div className="footer-phone">
              <Phone size={16} className="footer-icon" />
              <a href={CLINIC_INFO.phoneUrl}>{CLINIC_INFO.phone}</a>
            </div>
          </div>

          {/* Socials Column */}
          <div className="footer-social-col">
            <h4 className="footer-heading">Digital Connect</h4>
            <div className="social-links-list">
              <a
                href="https://instagram.com/smartclinicjo"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link-item"
              >
                <Instagram size={16} />
                <span>Clinic: {CLINIC_INFO.socials.clinic}</span>
              </a>
              <a
                href="https://instagram.com/dr_shroqalhusaini"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link-item"
              >
                <Instagram size={16} />
                <span>Dr. Shroq: {CLINIC_INFO.socials.drShroq}</span>
              </a>
              <a
                href="https://instagram.com/oways_alrawashdeh"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link-item"
              >
                <Instagram size={16} />
                <span>Dr. Oways: {CLINIC_INFO.socials.drOways}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Line */}
        <div className="footer-bottom-bar">
          <p>© {new Date().getFullYear()} Smart Clinic. All Rights Reserved. Jordan's Premier AI-Powered Luxury Aesthetic Institute.</p>
          <div className="footer-meta-links">
            <span className="footer-meta-tag">Abdoun • Amman</span>
            <span className="footer-meta-tag">FDA-Cleared XERF</span>
            <span className="footer-meta-tag">AI Facial Diagnostics</span>
          </div>
        </div>
      </div>

      <style>{`
        .site-footer {
          background-color: var(--bg-dark);
          color: var(--text-light);
          padding: 5rem 0 3rem;
          border-top: 1px solid var(--border-gold);
        }

        .footer-top-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1.5fr 1.5fr;
          gap: 3rem;
          margin-bottom: 4rem;
        }

        .footer-brand-col {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          cursor: pointer;
        }

        .footer-logo-img {
          height: 40px;
          filter: brightness(0) invert(1);
        }

        .footer-brand-name {
          font-family: var(--font-serif);
          font-size: 1.35rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          color: #FFFFFF;
        }

        .footer-tagline {
          font-size: 0.875rem;
          color: var(--text-dark-muted);
          line-height: 1.7;
          max-width: 340px;
        }

        .footer-mantra {
          font-size: 0.85rem;
          color: var(--accent-gold-light);
          margin-top: 0.5rem;
        }

        .footer-mantra em {
          font-family: var(--font-serif);
          font-size: 1.1rem;
        }

        .footer-heading {
          font-family: var(--font-serif);
          font-size: 1.2rem;
          font-weight: 500;
          color: #FFFFFF;
          margin-bottom: 1.5rem;
          letter-spacing: 0.05em;
        }

        .footer-links-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .footer-links-list button {
          font-size: 0.85rem;
          color: var(--text-dark-muted);
          transition: color 0.2s ease;
          text-align: left;
        }

        .footer-links-list button:hover {
          color: var(--accent-gold-light);
        }

        .footer-address, .footer-hours, .footer-phone {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-size: 0.85rem;
          color: var(--text-dark-muted);
          margin-bottom: 1rem;
          line-height: 1.6;
        }

        .footer-icon {
          color: var(--accent-gold);
          flex-shrink: 0;
          margin-top: 3px;
        }

        .footer-map-link {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.8rem;
          color: var(--accent-gold-light);
          margin-bottom: 1.5rem;
          transition: var(--transition-fast);
        }

        .footer-map-link:hover {
          text-decoration: underline;
          color: #FFFFFF;
        }

        .footer-phone a {
          color: var(--text-dark-muted);
          transition: color 0.2s ease;
        }

        .footer-phone a:hover {
          color: var(--accent-gold-light);
        }

        .social-links-list {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          margin-bottom: 1.75rem;
        }

        .social-link-item {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.825rem;
          color: var(--text-dark-muted);
          transition: color 0.2s ease;
        }

        .social-link-item:hover {
          color: var(--accent-gold-light);
        }

        .footer-cta-btn {
          width: 100%;
          border-color: var(--accent-gold);
          background-color: transparent;
          color: #FFFFFF;
        }

        .footer-cta-btn:hover {
          background-color: var(--accent-gold);
          color: var(--bg-dark);
        }

        .footer-bottom-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 2.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          font-size: 0.8rem;
          color: var(--text-dark-muted);
        }

        .footer-meta-links {
          display: flex;
          gap: 1.5rem;
        }

        .footer-meta-tag {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--accent-gold-dark);
        }

        @media (max-width: 1024px) {
          .footer-top-grid {
            grid-template-columns: 1fr 1fr;
            gap: 2.5rem;
          }
        }

        @media (max-width: 640px) {
          .footer-top-grid {
            grid-template-columns: 1fr;
          }
          .footer-bottom-bar {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
