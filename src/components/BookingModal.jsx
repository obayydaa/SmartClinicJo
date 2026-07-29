import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { CLINIC_INFO_AR } from '../data/clinicDataAR';
import { MessageCircle, Phone, X, Sparkles, Clock, MapPin } from 'lucide-react';

export default function BookingModal({ isOpen, onClose, lang = 'en' }) {
  React.useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const isAr = lang === 'ar';
  const info = isAr ? CLINIC_INFO_AR : CLINIC_INFO;

  return (
    <div className="booking-modal-overlay" onClick={onClose}>
      <div className="booking-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div className="modal-header">
          <span className="eyebrow">{isAr ? 'حجز استشارة خاصة' : 'PERSONALIZED CONSULTATION'}</span>
          <h3 className="modal-title">{isAr ? 'ابدأ رحلتك العلاجية مع أطبائنا' : 'Begin Your Aesthetic Journey'}</h3>
          <p className="modal-subtitle">
            {isAr
              ? 'في سمارت كلينك، نضع خطة علاجية مخصصة لملامحك وبشرتك. تواصل مباشرة مع فريقنا الطبي في عيادتنا في عبدون.'
              : 'At Smart Clinic, every consultation is designed around your unique biological profile. Choose your preferred path to connect directly with our boutique clinical team in Abdoun.'}
          </p>
        </div>

        <div className="booking-options">
          {/* WhatsApp Option */}
          <a
            href={info.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="booking-card whatsapp-card"
          >
            <div className="booking-card-icon">
              <MessageCircle size={24} />
            </div>
            <div className="booking-card-info">
              <span className="booking-card-title">{isAr ? 'احجز عبر الواتساب فوراً' : 'Message Us on WhatsApp'}</span>
              <span className="booking-card-sub">{isAr ? 'رد فوري وتنسيق الموعد المناسب لك' : 'Instant response & personalized scheduling'}</span>
            </div>
            <span className="booking-card-arrow">{isAr ? '←' : '→'}</span>
          </a>

          {/* Phone Call Option */}
          <a href={info.phoneUrl} className="booking-card phone-card">
            <div className="booking-card-icon">
              <Phone size={24} />
            </div>
            <div className="booking-card-info">
              <span className="booking-card-title">{isAr ? 'اتصل بالعيادة مباشرة' : 'Call the Clinic Directly'}</span>
              <span className="booking-card-sub">{info.phone}</span>
            </div>
            <span className="booking-card-arrow">{isAr ? '←' : '→'}</span>
          </a>
        </div>

        {/* Minimal Clinic Quick Facts */}
        <div className="modal-footer-facts">
          <div className="fact-item">
            <Clock size={14} className="fact-icon" />
            <span>Sat – Thu: 10:00 AM – 6:00 PM</span>
          </div>
          <div className="fact-item">
            <MapPin size={14} className="fact-icon" />
            <span>Abdoun, Amman (Opposite Zest)</span>
          </div>
        </div>
      </div>

      <style>{`
        .booking-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(30, 27, 24, 0.7);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          z-index: 3000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          animation: fadeIn 0.3s var(--ease-editorial);
        }

        .booking-modal-content {
          background-color: var(--bg-primary);
          border: 1px solid var(--border-gold);
          border-radius: 4px;
          max-width: 540px;
          width: 100%;
          padding: 3rem 2.5rem;
          position: relative;
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.15);
          animation: modalSlideUp 0.4s var(--ease-editorial);
        }

        .modal-close-btn {
          position: absolute;
          top: 1.25rem;
          right: 1.25rem;
          color: var(--text-muted);
          transition: color 0.2s ease;
          padding: 0.5rem;
        }

        .modal-close-btn:hover {
          color: var(--text-primary);
        }

        .modal-header {
          text-align: center;
          margin-bottom: 2.25rem;
        }

        .modal-title {
          font-family: var(--font-serif);
          font-size: 2rem;
          font-weight: 500;
          color: var(--text-primary);
          margin-bottom: 0.75rem;
        }

        .modal-subtitle {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        .booking-options {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .booking-card {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          padding: 1.25rem 1.5rem;
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-subtle);
          border-radius: 2px;
          transition: var(--transition-smooth);
          text-decoration: none;
        }

        .booking-card:hover {
          border-color: var(--accent-gold-dark);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(201, 168, 118, 0.12);
        }

        .booking-card-icon {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background-color: rgba(201, 168, 118, 0.15);
          color: var(--accent-gold-dark);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .booking-card-info {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .booking-card-title {
          font-family: var(--font-serif);
          font-size: 1.15rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .booking-card-sub {
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-top: 2px;
        }

        .booking-card-arrow {
          font-size: 1.25rem;
          color: var(--accent-gold-dark);
          transition: transform 0.2s ease;
        }

        .booking-card:hover .booking-card-arrow {
          transform: translateX(4px);
        }

        .modal-footer-facts {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border-subtle);
          gap: 1rem;
        }

        .fact-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.775rem;
          color: var(--text-muted);
        }

        .fact-icon {
          color: var(--accent-gold-dark);
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes modalSlideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 640px) {
          .booking-modal-content {
            padding: 2rem 1.5rem;
          }
          .modal-title {
            font-size: 1.6rem;
          }
          .modal-footer-facts {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.6rem;
          }
        }
      `}</style>
    </div>
  );
}
