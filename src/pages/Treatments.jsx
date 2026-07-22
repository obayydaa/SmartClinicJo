import React, { useState } from 'react';
import { TREATMENTS_CATEGORIES } from '../data/clinicData';
import { ArrowRight, Sparkles, Shield, CheckCircle2 } from 'lucide-react';

export default function Treatments({ setActivePage, onOpenBooking }) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredCategories = selectedCategory === 'all'
    ? TREATMENTS_CATEGORIES
    : TREATMENTS_CATEGORIES.filter(cat => cat.id === selectedCategory);

  return (
    <div className="treatments-page page-padding-top">
      {/* Header */}
      <section className="page-header-section section-padding text-center">
        <div className="container">
          <span className="eyebrow">CURATED CLINICAL MENU</span>
          <h1 className="title-large max-w-editorial">
            Personalized Aesthetic & Dermatology Protocols
          </h1>
          <p className="lead-paragraph">
            Every procedure at Smart Clinic is customized following AI diagnostic scanning. We prioritize skin health, natural harmony, and certified original products.
          </p>

          {/* 3D Push Category Filter Tabs */}
          <div className="category-filter-tabs">
            <button
              className={`btn-uiverse-3d ${selectedCategory === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('all')}
            >
              <span className="btn-shadow"></span>
              <span className="btn-edge"></span>
              <span className="btn-front">All Protocols</span>
            </button>
            {TREATMENTS_CATEGORIES.map(cat => (
              <button
                key={cat.id}
                className={`btn-uiverse-3d ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                <span className="btn-shadow"></span>
                <span className="btn-edge"></span>
                <span className="btn-front">{cat.title}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Treatments List */}
      <section className="treatments-list-section section-padding bg-secondary">
        <div className="container">
          <div className="categories-stack">
            {filteredCategories.map(cat => (
              <div key={cat.id} className="category-block">
                <div className="category-block-header">
                  <span className="eyebrow">PROTOCOL CATEGORY</span>
                  <h2 className="title-medium">{cat.title}</h2>
                  <p className="cat-subtitle-lead">{cat.subtitle}</p>
                </div>

                <div className="treatments-detail-grid">
                  {cat.items.map((item, idx) => (
                    <div key={idx} className="card-editorial treatment-item-card">
                      <div className="item-header-row">
                        <h3 className="item-title">{item.name}</h3>
                        {cat.id === 'advanced-techniques' && (
                          <span className="technique-badge">SIGNATURE TECHNIQUE</span>
                        )}
                        {cat.id === 'xerf-flagship' && (
                          <span className="xerf-badge">JORDAN'S FIRST</span>
                        )}
                      </div>
                      <p className="item-description">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* XERF Spotlight Banner */}
      <section className="xerf-spotlight-section section-padding">
        <div className="container">
          <div className="spotlight-card">
            <div className="spotlight-content">
              <span className="eyebrow eyebrow-light">FLAGSHIP TECHNOLOGY</span>
              <h2 className="title-medium text-white">XERF Dual-Frequency Skin Tightening</h2>
              <p className="text-muted-light">
                Discover Jordan's first FDA-cleared monopolar RF system operating simultaneously at 6.78 MHz and 2.0 MHz to lift deep SMAS layers with zero downtime.
              </p>
              <button className="btn-primary btn-gold" onClick={() => setActivePage('technology')}>
                Explore XERF Wavelength Science
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="closing-cta-section section-padding bg-secondary">
        <div className="container text-center">
          <h2 className="title-medium">Not Sure Which Protocol Suits You?</h2>
          <p className="closing-subtext">
            Start with an AI Facial Diagnostics scan in Abdoun to receive a biological analysis and custom treatment roadmap.
          </p>
          <button className="btn-primary" onClick={onOpenBooking}>
            Book AI Consultation
          </button>
        </div>
      </section>

      <style>{`
        .category-filter-tabs {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-top: 2.5rem;
        }

        .tab-btn {
          padding: 0.65rem 1.4rem;
          font-size: 0.825rem;
          font-weight: 500;
          letter-spacing: 0.05em;
          border: 1px solid var(--border-subtle);
          border-radius: 2px;
          background-color: var(--bg-primary);
          color: var(--text-muted);
          transition: var(--transition-fast);
        }

        .tab-btn:hover {
          border-color: var(--accent-gold);
          color: var(--text-primary);
        }

        .tab-btn.active {
          background-color: var(--text-primary);
          color: var(--bg-primary);
          border-color: var(--text-primary);
        }

        .categories-stack {
          display: flex;
          flex-direction: column;
          gap: 5rem;
        }

        .category-block-header {
          margin-bottom: 2.5rem;
        }

        .cat-subtitle-lead {
          font-size: 1.05rem;
          color: var(--accent-gold-dark);
          margin-top: 0.5rem;
        }

        .treatments-detail-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }

        .treatment-item-card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background-color: var(--bg-primary);
        }

        .item-header-row {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .item-title {
          font-family: var(--font-serif);
          font-size: 1.5rem;
          font-weight: 500;
          color: var(--text-primary);
        }

        .technique-badge {
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          padding: 0.3rem 0.6rem;
          background-color: rgba(201, 168, 118, 0.15);
          color: var(--accent-gold-dark);
          border-radius: 2px;
          white-space: nowrap;
        }

        .xerf-badge {
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          padding: 0.3rem 0.6rem;
          background-color: var(--text-primary);
          color: var(--accent-gold-light);
          border-radius: 2px;
          white-space: nowrap;
        }

        .item-description {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.7;
          margin-bottom: 1.75rem;
        }

        .item-footer {
          margin-top: auto;
          padding-top: 1rem;
          border-top: 1px solid var(--border-subtle);
        }

        /* Spotlight Card */
        .spotlight-card {
          background-color: var(--bg-dark);
          color: #FFFFFF;
          padding: 4.5rem 3.5rem;
          border-radius: 2px;
          border: 1px solid var(--border-gold);
          background-image: radial-gradient(circle at right top, rgba(201, 168, 118, 0.15), transparent 60%);
        }

        .spotlight-content {
          max-width: 680px;
        }

        .text-white { color: #FFFFFF; }
        .text-muted-light { color: rgba(255, 255, 255, 0.8); font-size: 1.05rem; line-height: 1.8; margin: 1rem 0 2rem; }
        .btn-gold { background-color: var(--accent-gold); border-color: var(--accent-gold); color: var(--bg-dark); }
        .btn-gold:hover { background-color: var(--accent-gold-dark); color: #FFFFFF; }

        @media (max-width: 1024px) {
          .treatments-detail-grid {
            grid-template-columns: 1fr;
          }
          .spotlight-card {
            padding: 3rem 2rem;
          }
        }
      `}</style>
    </div>
  );
}
