import React from 'react';
import { JOURNAL_ARTICLES } from '../data/clinicData';
import { ArrowRight, BookOpen, Clock, Tag } from 'lucide-react';

export default function Journal({ onOpenBooking }) {
  return (
    <div className="journal-page page-padding-top">
      {/* Header */}
      <section className="page-header-section section-padding text-center">
        <div className="container">
          <span className="eyebrow">EDITORIAL & PUBLICATIONS</span>
          <h1 className="title-large max-w-editorial">
            The Smart Clinic Journal
          </h1>
          <p className="lead-paragraph">
            Insights on AI facial diagnostics, non-surgical aesthetic innovations, dual-frequency radiofrequency, and skin longevity written by our clinical medical team.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="articles-section section-padding bg-secondary">
        <div className="container">
          <div className="articles-grid">
            {JOURNAL_ARTICLES.map((article) => (
              <div key={article.id} className="card-editorial journal-article-card">
                <div className="article-meta-row">
                  <span className="category-pill">{article.category}</span>
                  <span className="meta-date">
                    <Clock size={12} /> {article.date} • {article.readTime}
                  </span>
                </div>

                <h3 className="article-card-title">{article.title}</h3>
                <p className="article-card-excerpt">{article.excerpt}</p>

                <div className="article-card-footer">
                  <button className="link-editorial" onClick={onOpenBooking}>
                    Read Article <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="closing-cta-section section-padding">
        <div className="container text-center">
          <h2 className="title-medium">Subscribe to Clinical Insights</h2>
          <p className="closing-subtext">
            Stay updated on the latest AI skin diagnostic advancements and non-surgical aesthetic breakthroughs.
          </p>
          <button className="btn-primary" onClick={onOpenBooking}>
            Book Private Consultation
          </button>
        </div>
      </section>

      <style>{`
        .articles-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
        }

        .journal-article-card {
          display: flex;
          flex-direction: column;
          background-color: var(--bg-primary);
        }

        .article-meta-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.25rem;
        }

        .category-pill {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--accent-gold-dark);
        }

        .meta-date {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.775rem;
          color: var(--text-muted);
        }

        .article-card-title {
          font-family: var(--font-serif);
          font-size: 1.45rem;
          font-weight: 500;
          color: var(--text-primary);
          line-height: 1.35;
          margin-bottom: 1rem;
        }

        .article-card-excerpt {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.65;
          margin-bottom: 2rem;
        }

        .article-card-footer {
          margin-top: auto;
          padding-top: 1rem;
          border-top: 1px solid var(--border-subtle);
        }

        @media (max-width: 1024px) {
          .articles-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
