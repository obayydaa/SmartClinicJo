import React, { useRef, useState } from 'react';
import { Instagram, Linkedin, Mail, MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function DoctorProfileCard({ doc, onOpenBooking, lang = 'en' }) {
  const isAr = lang === 'ar';
  const imageFrameRef = useRef(null);
  const [transformStyle, setTransformStyle] = useState({});
  const [glareStyle, setGlareStyle] = useState({ opacity: 0 });

  const handleMouseMove = (e) => {
    if (!imageFrameRef.current) return;
    const rect = imageFrameRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // 3D tilt calculation (max 10 degrees)
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    setTransformStyle({
      transform: `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`,
      transition: 'transform 0.1s ease-out'
    });

    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;
    setGlareStyle({
      background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 65%)`,
      opacity: 1
    });
  };

  const handleMouseLeave = () => {
    setTransformStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)'
    });
    setGlareStyle({
      opacity: 0,
      transition: 'opacity 0.5s ease-out'
    });
  };

  const isImageRight = doc.imagePosition === 'right';

  return (
    <div className={`doctor-executive-card ${isImageRight ? 'layout-image-right' : 'layout-image-left'}`}>
      {/* Interactive Picture Container */}
      <div className="doc-portrait-wrapper">
        <div
          ref={imageFrameRef}
          className="doc-interactive-frame"
          style={transformStyle}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={doc.image}
            alt={doc.name}
            loading="lazy"
            decoding="async"
            className="doc-normal-portrait"
          />
          <div className="doc-glare-effect" style={glareStyle} />
          
          {/* Overlay Tag at bottom left of picture */}
          <div className="doc-portrait-overlay-tag">
            <span className="portrait-role-badge">{isAr ? 'المؤسس المشارك • سمارت كلينك' : 'CO-FOUNDER • SMART CLINIC'}</span>
            <h3 className="portrait-doctor-name">{doc.name}</h3>
          </div>
        </div>
      </div>

      {/* Doctor Info & Bio Column */}
      <div className="doc-bio-content-col">
        <div className="doc-header-pill-badge">
          <span>{doc.badge || "EXECUTIVE LEADERSHIP"}</span>
        </div>

        <h2 className="doc-main-headline">
          {doc.headline ? (
            <>
              {doc.headline.split('.')[0]}. <br />
              <em className="headline-highlight">{doc.headline.split('.')[1]}</em>
            </>
          ) : (
            doc.name
          )}
        </h2>

        {doc.quote && (
          <p className="doc-quote-text">
            "{doc.quote}"
          </p>
        )}

        <p className="doc-full-bio">{doc.bio}</p>

        {/* Credentials list */}
        {doc.credentials && (
          <div className="doc-credentials-summary">
            <ul className="doc-creds-inline-list">
              {doc.credentials.slice(0, 4).map((cred, idx) => (
                <li key={idx}>
                  <CheckCircle2 size={14} className="cred-check-icon" />
                  <span>{cred}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Bottom Row: Prominent Instagram Button */}
        <div className="doc-bottom-actions-row">
          {doc.socialLinks?.instagram && (
            <a
              href={doc.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="doc-instagram-pill-btn"
              title={`Visit ${doc.name} on Instagram`}
            >
              <Instagram size={17} className="ig-icon" />
              <span className="ig-handle-text">{doc.instagram || `@${doc.name.toLowerCase().replace(/\s+/g, '')}`}</span>
            </a>
          )}
        </div>
      </div>

      <style>{`
        .doctor-executive-card {
          display: grid;
          grid-template-columns: 380px 1fr;
          gap: 2.5rem;
          align-items: center;
          background-color: var(--bg-card, #FFFFFF);
          border: 1px solid var(--border-gold, rgba(201, 168, 118, 0.3));
          border-radius: 16px;
          padding: 2.25rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .doctor-executive-card:hover {
          border-color: var(--accent-gold-dark, #A8824B);
          box-shadow: 0 14px 40px rgba(168, 134, 84, 0.12);
        }

        .layout-image-right {
          grid-template-columns: 1fr 380px;
        }

        .layout-image-right .doc-portrait-wrapper {
          order: 2;
        }

        .layout-image-right .doc-bio-content-col {
          order: 1;
        }

        /* Portrait Container & Mouse Interactive 3D Effect */
        .doc-portrait-wrapper {
          width: 100%;
          perspective: 1000px;
        }

        .doc-interactive-frame {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 5;
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.1);
          cursor: pointer;
          will-change: transform;
          transform-style: preserve-3d;
          border: 1px solid rgba(201, 168, 118, 0.3);
        }

        .doc-normal-portrait {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          /* Explicitly normal color, no black & white or grayscale filter */
          filter: none !important;
          -webkit-filter: none !important;
          transition: filter 0.3s ease;
        }

        .doc-glare-effect {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          pointer-events: none;
          z-index: 2;
        }

        .doc-portrait-overlay-tag {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 1.25rem 1.25rem 1rem;
          background: linear-gradient(180deg, transparent 0%, rgba(20, 18, 16, 0.88) 100%);
          color: #FFFFFF;
          z-index: 3;
          pointer-events: none;
        }

        .portrait-role-badge {
          font-size: 0.6rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          color: var(--accent-gold-light, #E6CA9C);
          display: block;
          margin-bottom: 0.2rem;
          text-transform: uppercase;
        }

        .portrait-doctor-name {
          font-family: var(--font-serif, serif);
          font-size: 1.3rem;
          font-weight: 600;
          color: #FFFFFF;
          margin: 0;
        }

        /* Bio Content Column */
        .doc-bio-content-col {
          display: flex;
          flex-direction: column;
        }

        .doc-header-pill-badge {
          align-self: flex-start;
          padding: 0.3rem 0.8rem;
          background-color: var(--bg-secondary, rgba(201, 168, 118, 0.1));
          border: 1px solid var(--border-gold, rgba(201, 168, 118, 0.3));
          border-radius: 16px;
          font-size: 0.6rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          color: var(--accent-gold-dark, #A8824B);
          text-transform: uppercase;
          margin-bottom: 0.85rem;
        }

        .doc-main-headline {
          font-family: var(--font-sans, sans-serif);
          font-size: 1.75rem;
          font-weight: 800;
          line-height: 1.2;
          letter-spacing: -0.02em;
          color: var(--text-primary, #1E1B18);
          margin-bottom: 0.85rem;
        }

        .headline-highlight {
          font-family: var(--font-serif, serif);
          font-style: italic;
          font-weight: 400;
          color: var(--accent-gold-dark, #A8824B);
        }

        .doc-quote-text {
          font-family: var(--font-serif, serif);
          font-style: italic;
          font-size: 0.95rem;
          color: var(--text-muted, #666);
          line-height: 1.6;
          margin-bottom: 0.85rem;
          padding-left: 0.85rem;
          border-left: 2px solid var(--accent-gold-dark, #A8824B);
        }

        .doc-full-bio {
          font-size: 0.9rem;
          color: var(--text-muted, #555);
          line-height: 1.65;
          margin-bottom: 1rem;
        }

        .doc-credentials-summary {
          margin-bottom: 1rem;
          background-color: var(--bg-secondary, #FAF7F2);
          padding: 0.75rem 1rem;
          border-radius: 6px;
          border: 1px solid var(--border-subtle, #EFE8DD);
        }

        .doc-creds-inline-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .doc-creds-inline-list li {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8rem;
          color: var(--text-primary, #2B2723);
          font-weight: 500;
        }

        .cred-check-icon {
          color: var(--accent-gold-dark, #A8824B);
          flex-shrink: 0;
        }

        /* Bottom Row */
        .doc-bottom-actions-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          margin-top: 0.5rem;
          padding-top: 0.85rem;
          border-top: 1px solid var(--border-subtle, #EFE8DD);
        }

        .doc-instagram-pill-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.45rem 0.95rem;
          border-radius: 20px;
          border: 1px solid var(--border-gold, rgba(201, 168, 118, 0.4));
          background-color: var(--bg-secondary, #FAF7F2);
          color: var(--text-primary, #1E1B18);
          font-family: var(--font-sans, sans-serif);
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          text-decoration: none;
          transition: all 0.25s var(--ease-editorial, cubic-bezier(0.25, 1, 0.5, 1));
        }

        .doc-instagram-pill-btn .ig-icon {
          color: var(--accent-gold-dark, #A8824B);
          transition: transform 0.25s ease, color 0.25s ease;
        }

        .doc-instagram-pill-btn:hover {
          background-color: var(--text-primary, #1E1B18);
          color: #FFFFFF;
          border-color: var(--text-primary, #1E1B18);
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
        }

        .doc-instagram-pill-btn:hover .ig-icon {
          color: #E6CA9C;
          transform: scale(1.1);
        }

        .doc-read-story-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: none;
          border: none;
          border-bottom: 2px solid var(--accent-gold-dark, #A8824B);
          padding-bottom: 0.25rem;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          color: var(--text-primary, #1E1B18);
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .doc-read-story-btn:hover {
          color: var(--accent-gold-dark, #A8824B);
          gap: 0.75rem;
        }

        .arrow-icon {
          transition: transform 0.25s ease;
        }

        .doc-read-story-btn:hover .arrow-icon {
          transform: translateX(4px);
        }

        @media (max-width: 1024px) {
          .doctor-executive-card, .layout-image-right {
            grid-template-columns: 1fr;
            padding: 1.75rem;
            gap: 1.75rem;
          }
          .layout-image-right .doc-portrait-wrapper {
            order: 1;
          }
          .layout-image-right .doc-bio-content-col {
            order: 2;
          }
          .doc-interactive-frame {
            height: 380px;
            min-height: 340px;
          }
          .doc-main-headline {
            font-size: 1.5rem;
          }
          .doc-bottom-actions-row {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </div>
  );
}
