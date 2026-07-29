import React, { useState, useEffect } from 'react';
import { X, ZoomIn } from 'lucide-react';
import BackgroundPaths from './BackgroundPaths';

export default function BeforeAfterSection({ isAr = false }) {
  const [activeModal, setActiveModal] = useState(null);

  const comparisons = [
    {
      id: 1,
      beforeImg: new URL('../assets/SC_pics/BA/B1.webp', import.meta.url).href,
      afterImg: new URL('../assets/SC_pics/BA/A1.webp', import.meta.url).href,
    },
    {
      id: 2,
      beforeImg: new URL('../assets/SC_pics/BA/B2.webp', import.meta.url).href,
      afterImg: new URL('../assets/SC_pics/BA/A2.webp', import.meta.url).href,
    },
    {
      id: 3,
      beforeImg: new URL('../assets/SC_pics/BA/B3.webp', import.meta.url).href,
      afterImg: new URL('../assets/SC_pics/BA/A3.webp', import.meta.url).href,
    }
  ];

  // Close modal on Escape key press & prevent background scrolling
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveModal(null);
      }
    };

    if (activeModal) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeModal]);

  return (
    <section id="before-after" className="screen-section before-after-screen section-padding-compact relative-section">
      <BackgroundPaths opacity={0.5} />
      <div className="container relative-z">
        
        {/* Clean Section Header */}
        <div className="section-header-compact text-center reveal-on-scroll mb-8">
          <h2 className="title-medium" style={{ fontFamily: 'var(--font-serif)', fontWeight: 500, color: 'var(--text-primary)', display: 'block', visibility: 'visible' }}>
            {isAr ? 'نتائج تحول قبل وبعد' : 'Before and After Transformations'}
          </h2>
        </div>

        {/* Clean 3 Cards Grid */}
        <div className="ba-cards-grid">
          {comparisons.map((item) => (
            <div
              key={item.id}
              className="ba-comparison-card ba-clickable"
              onClick={() => setActiveModal(item)}
              title={isAr ? 'انقر التوسيع الصورة' : 'Click to view full screen'}
            >
              
              {/* Left Photo (Before) */}
              <div className="ba-image-wrapper">
                <img src={item.beforeImg} alt={`Before ${item.id}`} className="ba-img" />
                <span className="ba-badge ba-badge-before">{isAr ? 'قبل' : 'Before'}</span>
                <span className="ba-zoom-hint"><ZoomIn size={14} /></span>
              </div>

              {/* Right Photo (After) */}
              <div className="ba-image-wrapper">
                <img src={item.afterImg} alt={`After ${item.id}`} className="ba-img" />
                <span className="ba-badge ba-badge-after">{isAr ? 'بعد' : 'After'}</span>
                <span className="ba-zoom-hint"><ZoomIn size={14} /></span>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      {activeModal && (
        <div className="ba-modal-backdrop" onClick={() => setActiveModal(null)}>
          <div className="ba-modal-container" onClick={(e) => e.stopPropagation()}>
            <button
              className="ba-modal-close-btn"
              onClick={() => setActiveModal(null)}
              aria-label={isAr ? 'إغلاق' : 'Close'}
            >
              <X size={24} />
            </button>

            <div className="ba-modal-pair">
              <div className="ba-modal-img-box">
                <img src={activeModal.beforeImg} alt="Before High Resolution" className="ba-modal-img" />
                <span className="ba-badge ba-badge-before ba-badge-modal">{isAr ? 'قبل' : 'Before'}</span>
              </div>
              <div className="ba-modal-img-box">
                <img src={activeModal.afterImg} alt="After High Resolution" className="ba-modal-img" />
                <span className="ba-badge ba-badge-after ba-badge-modal">{isAr ? 'بعد' : 'After'}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
