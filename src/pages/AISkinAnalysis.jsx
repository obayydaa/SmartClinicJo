import React from 'react';
import { Cpu, ShieldCheck, Sparkles, Layers, ArrowRight, Eye, CheckCircle } from 'lucide-react';

export default function AISkinAnalysis({ onOpenBooking }) {
  const steps = [
    {
      num: "01",
      title: "Arrival & Setup",
      desc: "Relax in our private Abdoun sanctuary. Your skin is prepared under standardized medical lighting for calibrated scanning."
    },
    {
      num: "02",
      title: "Digital Facial Scan",
      desc: "Our non-invasive AI scanner captures high-resolution surface and sub-surface spectral images in under 60 seconds."
    },
    {
      num: "03",
      title: "Diagnostic Data Capture",
      desc: "Advanced algorithms evaluate pore structure, deep hydration levels, vascular tone, collagen density, and early pigmentation."
    },
    {
      num: "04",
      title: "Doctor Review & Plan",
      desc: "Our medical doctors review the biological scan data with you, mapping out a 100% personalized, multi-depth treatment roadmap."
    },
    {
      num: "05",
      title: "Treatment & Follow-Up",
      desc: "Your treatment is executed with clinical precision, followed by subsequent re-scans to empirically track your skin's improvement."
    }
  ];

  const metrics = [
    { name: "Pore Architecture & Surface Texture", detail: "Measures pore enlargement and micro-texture irregularities." },
    { name: "Deep Hydration & Barrier Function", detail: "Evaluates moisture retention across epidermal and dermal layers." },
    { name: "Sub-Surface Vascular Mapping", detail: "Detects early redness, inflammation, and capillary micro-circulation." },
    { name: "Melanin & Pigmentation Index", detail: "Identifies visible hyperpigmentation and emerging sub-surface sun damage." },
    { name: "Collagen & Elasticity Matrix", detail: "Assesses structural firmness and early loss of dermal density." }
  ];

  return (
    <div className="ai-page page-padding-top">
      {/* Header */}
      <section className="page-header-section section-padding text-center">
        <div className="container">
          <span className="eyebrow">OUR FLAGSHIP DIFFERENTIATOR</span>
          <h1 className="title-large max-w-editorial">
            AI Facial Diagnostics: The Foundation of Every Treatment
          </h1>
          <p className="lead-paragraph">
            We do not guess. We do not copy generic beauty trends. Before a single unit of product is selected, our doctors map your skin's biological profile using advanced digital diagnostics.
          </p>
        </div>
      </section>

      {/* Opening Statement & Reframe */}
      <section className="reframe-section section-padding bg-secondary">
        <div className="container">
          <div className="reframe-layout">
            <div className="reframe-content">
              <span className="eyebrow">A SCIENTIFIC REVOLUTION</span>
              <h2 className="title-medium">Beyond Surface Evaluation</h2>
              <p className="paragraph-body">
                Traditional aesthetic consultations rely entirely on visual observation of the outer skin. However, the true drivers of skin aging, dehydration, and structural loss exist deep beneath the surface.
              </p>
              <p className="paragraph-body">
                Smart Clinic's AI Facial Diagnostic system bridges the gap between clinical medicine and artificial intelligence. By quantifying sub-surface metrics, our medical doctors create personalized protocols tailored specifically to your biological age and tissue health.
              </p>
            </div>
            <div className="reframe-box">
              <div className="gold-quote-box">
                <p className="quote-text">
                  "No universal treatment plan. Only your treatment plan — grounded in data, precision, and medical safety."
                </p>
                <span className="quote-author">SMART CLINIC PHILOSOPHY</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Journey Graphic */}
      <section className="journey-section section-padding">
        <div className="container">
          <div className="section-header text-center">
            <span className="eyebrow">THE EXPERIENCE</span>
            <h2 className="title-medium">Your AI Diagnostic Scan Journey</h2>
            <p className="section-lead-text">
              A calm, non-invasive 5-step process designed for total precision and patient comfort.
            </p>
          </div>

          <div className="journey-timeline">
            {steps.map((step, idx) => (
              <div key={idx} className="journey-step-card">
                <div className="step-num-badge">{step.num}</div>
                <h4 className="step-title">{step.title}</h4>
                <p className="step-desc">{step.desc}</p>
                {idx < steps.length - 1 && <div className="step-connector"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What it Measures */}
      <section className="metrics-section section-padding bg-secondary">
        <div className="container">
          <div className="section-header text-center">
            <span className="eyebrow">DIAGNOSTIC METRICS</span>
            <h2 className="title-medium">What Our AI Scanner Evaluates</h2>
          </div>

          <div className="metrics-grid">
            {metrics.map((metric, idx) => (
              <div key={idx} className="metric-card">
                <CheckCircle size={22} className="metric-icon" />
                <div>
                  <h4 className="metric-title">{metric.name}</h4>
                  <p className="metric-detail">{metric.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy & Safety Assurance */}
      <section className="privacy-section section-padding">
        <div className="container">
          <div className="privacy-card-box">
            <ShieldCheck size={36} className="privacy-icon" />
            <div className="privacy-content">
              <h3 className="privacy-title">Clinical Confidentiality & Privacy Guarantee</h3>
              <p className="privacy-desc">
                Your facial scan data is handled with the strictest clinical confidentiality. Diagnostic images are utilized exclusively by your treating medical doctor for treatment formulation and internal progress tracking. We respect your complete privacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="closing-cta-section section-padding bg-secondary">
        <div className="container text-center">
          <h2 className="title-medium">Start With Your AI Skin Analysis</h2>
          <p className="closing-subtext">
            Book your private diagnostic consultation at Smart Clinic in Abdoun today.
          </p>
          <button className="btn-primary" onClick={onOpenBooking}>
            Start Your AI Analysis
          </button>
        </div>
      </section>

      <style>{`
        .reframe-layout {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .gold-quote-box {
          background-color: var(--bg-primary);
          border: 1px solid var(--border-gold);
          padding: 3rem 2.5rem;
          border-radius: 2px;
          border-left: 4px solid var(--accent-gold-dark);
        }

        .quote-text {
          font-family: var(--font-serif);
          font-size: 1.4rem;
          font-style: italic;
          color: var(--text-primary);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .quote-author {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          color: var(--accent-gold-dark);
        }

        /* Journey Timeline */
        .journey-timeline {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 1.5rem;
          position: relative;
        }

        .journey-step-card {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-subtle);
          padding: 2rem 1.5rem;
          border-radius: 2px;
          position: relative;
          display: flex;
          flex-direction: column;
        }

        .step-num-badge {
          font-family: var(--font-serif);
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--accent-gold-dark);
          margin-bottom: 1rem;
        }

        .step-title {
          font-family: var(--font-serif);
          font-size: 1.2rem;
          font-weight: 500;
          color: var(--text-primary);
          margin-bottom: 0.6rem;
        }

        .step-desc {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        /* Metrics Grid */
        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }

        .metric-card {
          display: flex;
          align-items: flex-start;
          gap: 1.25rem;
          padding: 2rem;
          background-color: var(--bg-primary);
          border: 1px solid var(--border-subtle);
          border-radius: 2px;
        }

        .metric-icon {
          color: var(--accent-gold-dark);
          flex-shrink: 0;
          margin-top: 3px;
        }

        .metric-title {
          font-family: var(--font-serif);
          font-size: 1.25rem;
          font-weight: 500;
          color: var(--text-primary);
          margin-bottom: 0.4rem;
        }

        .metric-detail {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        /* Privacy Box */
        .privacy-card-box {
          display: flex;
          align-items: center;
          gap: 2rem;
          background-color: var(--bg-primary);
          border: 1px solid var(--border-gold);
          padding: 3rem;
          border-radius: 2px;
          max-width: 900px;
          margin: 0 auto;
        }

        .privacy-icon {
          color: var(--accent-gold-dark);
          flex-shrink: 0;
        }

        .privacy-title {
          font-family: var(--font-serif);
          font-size: 1.4rem;
          font-weight: 500;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .privacy-desc {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.7;
        }

        @media (max-width: 1024px) {
          .reframe-layout, .metrics-grid {
            grid-template-columns: 1fr;
          }
          .journey-timeline {
            grid-template-columns: 1fr;
          }
          .privacy-card-box {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
}
