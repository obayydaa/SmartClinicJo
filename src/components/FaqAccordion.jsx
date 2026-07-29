import React, { useState } from 'react';
import { Search, ChevronDown, X } from 'lucide-react';
import { FAQS } from '../data/clinicData';
import { FAQS_AR } from '../data/clinicDataAR';

export default function FaqAccordion({ lang = 'en' }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const isAr = lang === 'ar';
  const faqs = isAr ? FAQS_AR : FAQS;

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-interactive-wrapper">
      {/* Search Input Bar */}
      <div className="faq-search-bar-container">
        <Search size={18} className="faq-search-icon" />
        <input
          type="text"
          placeholder={isAr ? "ابحث في الأسئلة الشائعة..." : "Search FAQs..."}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="faq-search-input"
        />
        {searchQuery && (
          <button className="faq-clear-search" onClick={() => setSearchQuery('')} aria-label="Clear search">
            <X size={16} />
          </button>
        )}
      </div>

      {/* Accordion Items List */}
      <div className="faq-cards-stack">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`faq-animated-card ${isOpen ? 'is-open' : ''}`}
                onClick={() => toggleFaq(index)}
              >
                {/* Question Header */}
                <div className="faq-card-header">
                  <h3 className="faq-question-text">{faq.question}</h3>
                  <div className={`faq-chevron-box ${isOpen ? 'open' : ''}`}>
                    <ChevronDown size={18} className="chevron-icon" />
                  </div>
                </div>

                {/* Animated Body Answer */}
                <div className={`faq-card-body-wrapper ${isOpen ? 'expanded' : ''}`}>
                  <div className="faq-card-body-inner">
                    <p className="faq-answer-text">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="faq-no-results">
            <p>No matching questions found for "{searchQuery}"</p>
          </div>
        )}
      </div>

      <style>{`
        .faq-interactive-wrapper {
          max-width: 820px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        /* Search Input Bar */
        .faq-search-bar-container {
          position: relative;
          display: flex;
          align-items: center;
          background-color: var(--bg-card, #1E1B18);
          border: 1px solid var(--border-gold, rgba(201, 168, 118, 0.3));
          border-radius: 30px;
          padding: 0.75rem 1.4rem;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
          margin-bottom: 0.5rem;
        }

        .faq-search-bar-container:focus-within {
          border-color: var(--accent-gold-dark, #A8824B);
          box-shadow: 0 10px 30px rgba(168, 130, 75, 0.2);
        }

        .faq-search-icon {
          color: var(--accent-gold-dark, #A8824B);
          margin-right: 0.85rem;
          flex-shrink: 0;
        }

        .faq-search-input {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          color: var(--text-primary, #FFFFFF);
          font-family: var(--font-sans, sans-serif);
          font-size: 0.95rem;
        }

        .faq-search-input::placeholder {
          color: var(--text-muted, #888);
        }

        .faq-clear-search {
          background: transparent;
          border: none;
          color: var(--text-muted, #888);
          cursor: pointer;
          padding: 0.2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: color 0.2s ease;
        }

        .faq-clear-search:hover {
          color: var(--text-primary, #FFFFFF);
        }

        /* Cards Stack */
        .faq-cards-stack {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        /* Individual Card */
        .faq-animated-card {
          background-color: var(--bg-card, #1E1B18);
          border: 1px solid var(--border-gold, rgba(201, 168, 118, 0.25));
          border-radius: 16px;
          padding: 1.4rem 1.75rem;
          cursor: pointer;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.05);
          transition: border-color 0.3s ease, transform 0.3s var(--ease-editorial, cubic-bezier(0.25, 1, 0.5, 1)), box-shadow 0.3s ease, background-color 0.3s ease;
          overflow: hidden;
          user-select: none;
        }

        .faq-animated-card:hover {
          border-color: var(--accent-gold-dark, #A8824B);
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(168, 130, 75, 0.12);
        }

        .faq-animated-card.is-open {
          border-color: var(--accent-gold-dark, #A8824B);
          background-color: var(--bg-card, #23201D);
          box-shadow: 0 14px 36px rgba(0, 0, 0, 0.12);
        }

        /* Card Header */
        .faq-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
        }

        .faq-question-text {
          font-family: var(--font-sans, sans-serif);
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-primary, #FFFFFF);
          margin: 0;
          line-height: 1.4;
        }

        .faq-chevron-box {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background-color: rgba(201, 168, 118, 0.1);
          color: var(--accent-gold-dark, #A8824B);
          flex-shrink: 0;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.3s ease, color 0.3s ease;
        }

        .faq-chevron-box.open {
          transform: rotate(180deg);
          background-color: var(--accent-gold-dark, #A8824B);
          color: #FFFFFF;
        }

        .chevron-icon {
          transition: transform 0.4s ease;
        }

        /* Smooth Accordion Expansion Animation */
        .faq-card-body-wrapper {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .faq-card-body-wrapper.expanded {
          grid-template-rows: 1fr;
        }

        .faq-card-body-inner {
          overflow: hidden;
        }

        .faq-answer-text {
          font-size: 0.95rem;
          color: var(--text-muted, #BBB);
          line-height: 1.75;
          margin-top: 1.1rem;
          padding-top: 1rem;
          border-top: 1px solid rgba(201, 168, 118, 0.15);
          opacity: 0;
          transform: translateY(6px);
          transition: opacity 0.3s ease 0.1s, transform 0.3s ease 0.1s;
        }

        .faq-card-body-wrapper.expanded .faq-answer-text {
          opacity: 1;
          transform: translateY(0);
        }

        /* No Results State */
        .faq-no-results {
          text-align: center;
          padding: 2.5rem;
          color: var(--text-muted, #888);
          font-size: 0.95rem;
        }

        @media (max-width: 768px) {
          .faq-animated-card {
            padding: 1.15rem 1.25rem;
            border-radius: 14px;
          }
          .faq-question-text {
            font-size: 0.95rem;
          }
        }
      `}</style>
    </div>
  );
}
