import React, { useState, useEffect } from 'react';
import { CLINIC_INFO, BRAND_STORY, CLINIC_DIFFERENTIATORS, TREATMENTS_CATEGORIES, TECHNOLOGY_INFO, DOCTORS, FAQS } from '../data/clinicData';
import { CLINIC_INFO_AR, BRAND_STORY_AR, CLINIC_DIFFERENTIATORS_AR, TREATMENTS_CATEGORIES_AR, TECHNOLOGY_INFO_AR, DOCTORS_AR, FAQS_AR } from '../data/clinicDataAR';
import { ChevronDown, ArrowRight, Sparkles, Cpu, ShieldCheck, Plus, Minus, Phone, MessageCircle, MapPin, Clock, Award, CheckCircle2, Zap, Activity, Waves } from 'lucide-react';
import DoctorProfileCard from '../components/DoctorProfileCard';
import BackgroundPaths from '../components/BackgroundPaths';
import FaqAccordion from '../components/FaqAccordion';
import ServicesMarquee from '../components/ServicesMarquee';
import AnimatedButton from '../components/AnimatedButton';
import BeforeAfterSection from '../components/BeforeAfterSection';
import { ShaderBackground } from '../components/ui/shaders-hero-section';
import clinic1Img from '../assets/SC_pics/clinic/clinic 1.webp';
import xerfImg from '../assets/SC_pics/XERF_sa7-Photoroom.webp';

export default function Home({ onOpenBooking, lang = 'en' }) {
  const isAr = lang === 'ar';

  const clinicInfo = isAr ? CLINIC_INFO_AR : CLINIC_INFO;
  const brandStory = isAr ? BRAND_STORY_AR : BRAND_STORY;
  const differentiators = isAr ? CLINIC_DIFFERENTIATORS_AR : CLINIC_DIFFERENTIATORS;
  const treatmentsCategories = isAr ? TREATMENTS_CATEGORIES_AR : TREATMENTS_CATEGORIES;
  const technologyInfo = isAr ? TECHNOLOGY_INFO_AR : TECHNOLOGY_INFO;
  const doctors = isAr ? DOCTORS_AR : DOCTORS;
  const faqs = isAr ? FAQS_AR : FAQS;

  // Treatments tab state
  const [activeCategory, setActiveCategory] = useState(treatmentsCategories[0].id);

  // Synchronize category state on lang change
  useEffect(() => {
    setActiveCategory(treatmentsCategories[0].id);
  }, [lang]);

  // XERF Dual Wavelength tab state
  const [activeWavelength, setActiveWavelength] = useState('6.78');

  // FAQ accordion state
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const currentCategoryObj = treatmentsCategories.find(cat => cat.id === activeCategory) || treatmentsCategories[0];

  // Auto Scroll Reveal IntersectionObserver Setup
  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.15,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const elementsToObserve = document.querySelectorAll('.reveal-on-scroll, .reveal-scale');

    elementsToObserve.forEach((el) => observer.observe(el));

    return () => {
      elementsToObserve.forEach((el) => observer.unobserve(el));
    };
  }, [activeCategory]);

  const scrollToNext = (targetId) => {
    const el = document.getElementById(targetId);
    if (el) {
      const offset = 70;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="compact-landing-page">

      {/* ==========================================
          1. HERO SECTION (100vh Full Screen)
      ========================================== */}
      <section id="home" className="screen-section hero-screen relative-section">
        <BackgroundPaths density="light" variant="topography" opacity={0.7} />
        
        {/* Full-width Golden Rectangle Block (Border to Border) with Shader Animation */}
        <div className="hero-golden-block relative-section">
          <ShaderBackground className="hero-shader-container">
            <BackgroundPaths density="dense" variant="topography" opacity={0.45} />
            <div className="container hero-container text-center relative-z">
              <div className="hero-content mx-auto">
                <span className="eyebrow eyebrow-on-gold animate-fade-in">
                  {isAr ? 'المعهد الطبي الأول للتجميل الذكي في الأردن' : "JORDAN'S PREMIER AI-POWERED INSTITUTE"}
                </span>
                <h1 className="hero-title hero-title-on-gold title-large animate-fade-in">
                  {isAr ? 'مستقبل التجميل' : 'The Future of'} <br />
                  <em className="hero-serif-italic-on-gold">
                    {isAr ? 'الذكي والمتطور.' : 'Intelligent Aesthetics.'}
                  </em>
                </h1>
                <p className="hero-subtitle hero-subtitle-on-gold animate-fade-in">
                  {clinicInfo.supportingTagline}
                </p>
                <div className="hero-actions animate-fade-in">
                  <AnimatedButton variant="primary" onClick={onOpenBooking}>
                    {isAr ? 'حجز استشارة' : 'Book Consultation'}
                  </AnimatedButton>
                  <AnimatedButton variant="secondary" onClick={() => scrollToNext('treatments')}>
                    {isAr ? 'استكشاف الخدمات' : 'Explore Services'}
                  </AnimatedButton>
                </div>
              </div>
            </div>
          </ShaderBackground>
        </div>

        <div className="hero-scroll-cue" onClick={() => scrollToNext('about')}>
          <span className="scroll-text">{isAr ? 'اكتشف المعهد' : 'DISCOVER THE INSTITUTE'}</span>
          <ChevronDown size={18} className="scroll-chevron" />
        </div>
      </section>

      {/* ==========================================
          2. SMALL ABOUT SECTION (Laptop Viewport Fit)
      ========================================== */}
      <section id="about" className="screen-section about-screen section-padding-compact relative-section">
        <BackgroundPaths density="light" variant="minimal" opacity={0.5} />
        <div className="container relative-z reveal-on-scroll">
          <div className="about-compact-grid">
            <div className="about-compact-text reveal-on-scroll stagger-1">
              <span className="eyebrow">{isAr ? 'فلسفتنا الطبية' : 'OUR PHILOSOPHY'}</span>
              <h2 className="title-medium">{isAr ? 'الطب، الذكاء الاصطناعي والأناقة المتقنة' : 'Medicine, AI & Refined Elegance'}</h2>
              <p className="compact-lead-text">
                {brandStory.vision}
              </p>
              <p className="compact-body-text">
                {brandStory.mission}
              </p>
              <div className="mantra-line-inline">
                <span>{isAr ? 'فلسفتنا الأساسية:' : 'Core Philosophy:'}</span> <em>"{brandStory.whyName}"</em>
              </div>
            </div>

            <div className="about-compact-image reveal-scale stagger-2">
              <div className="compact-img-frame">
                <img
                  src={clinic1Img}
                  alt="Smart Clinic Interior in Abdoun"
                  loading="lazy"
                  decoding="async"
                  className="compact-about-img"
                />
                
                {/* Floating Glassmorphism Badge 1 (Top Left) */}
                <div className="glass-badge-floating glass-badge-top-left">
                  <MapPin size={13} className="text-gold" />
                  <span>{isAr ? 'عمان، عبدون • الطابق الأول' : 'ABDOUN, AMMAN • 1ST FLOOR'}</span>
                </div>

                {/* Floating Glassmorphism Badge 2 (Bottom Right) */}
                <div className="glass-badge-floating glass-badge-bottom-right">
                  <Sparkles size={13} className="text-gold" />
                  <span>{isAr ? 'أول جهاز XERF في الأردن' : "JORDAN'S 1ST XERF & AI CENTER"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          3. WHY US SECTION (Laptop Viewport Fit)
      ========================================== */}
      <section id="why-us" className="screen-section why-us-screen section-padding-compact bg-secondary relative-section">
        <BackgroundPaths density="medium" variant="topography" opacity={0.6} />
        <div className="container relative-z">
          <div className="section-header-compact text-center reveal-on-scroll">
            <span className="eyebrow">{isAr ? 'تميزنا الطبي' : 'THE SMART DIFFERENCE'}</span>
            <h2 className="title-medium">{isAr ? 'لماذا يختارنا المراجعون' : 'Why Discerning Patients Choose Us'}</h2>
          </div>

          <div className="why-us-grid focus-grid">
            {differentiators.map((item, idx) => (
              <div key={item.id} className={`why-card reveal-on-scroll stagger-${(idx % 5) + 1}`}>
                <div className="why-card-icon">
                  <CheckCircle2 size={22} />
                </div>
                <div>
                  <h3 className="why-card-title">{item.title}</h3>
                  <p className="why-card-desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          4. WHAT WE OFFER (Interactive Category Tabs)
      ========================================== */}
      <section id="treatments" className="screen-section treatments-screen section-padding-compact relative-section">
        <BackgroundPaths density="light" variant="minimal" opacity={0.5} />
        <div className="container relative-z">
          <div className="section-header-compact text-center reveal-on-scroll">
            <span className="eyebrow">{isAr ? 'خدماتنا المختارة' : 'CURATED SERVICES'}</span>
            <h2 className="title-medium">{isAr ? 'خدماتنا وعلاجاتنا' : 'What We Offer'}</h2>
          </div>

          {/* Luxury 3D Push Filter Tabs */}
          <div className="treatments-tabs-row reveal-on-scroll stagger-1">
            {treatmentsCategories.map((cat) => (
              <button
                key={cat.id}
                className={`btn-uiverse-3d ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                <span className="btn-shadow"></span>
                <span className="btn-edge"></span>
                <span className="btn-front">{cat.title}</span>
              </button>
            ))}
          </div>

          {/* Active Category Display */}
          <div className="treatments-active-panel reveal-on-scroll stagger-2">
            <div className="panel-header">
              <span className="panel-subtitle">{currentCategoryObj.subtitle}</span>
            </div>

            <div className="compact-items-grid focus-grid">
              {currentCategoryObj.items.map((item, idx) => (
                <div key={idx} className={`card-editorial compact-treatment-card reveal-on-scroll stagger-${(idx % 5) + 1}`}>
                  <h3 className="treatment-item-name">{item.name}</h3>
                  <p className="treatment-item-desc">{item.description}</p>
                  
                  <a
                    href={`https://wa.me/962778881113?text=${encodeURIComponent(
                      isAr 
                        ? `مرحباً سمارت كلينك، أرغب في معرفة تفاصيل أكثر عن ${item.name}` 
                        : `Hello Smart Clinic, I would like more details about ${item.name}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="treatment-wa-link"
                    title={isAr ? `استفسر عن ${item.name} عبر الواتساب` : `Inquire about ${item.name} on WhatsApp`}
                  >
                    <MessageCircle size={15} className="wa-icon" />
                    <span>{isAr ? 'استفسر عبر الواتساب' : 'Inquire on WhatsApp'}</span>
                    <ArrowRight size={13} className="arrow-icon" style={{ transform: isAr ? 'rotate(180deg)' : 'none' }} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          5. XERF GRADIENT BAR SHOWCASE (Device Top Overlapping Bar)
      ========================================== */}
      <section id="xerf" className="screen-section xerf-bar-screen section-padding-compact relative-section">
        <BackgroundPaths density="dense" variant="waves" opacity={0.6} />
        <div className="container">
          
          {/* Black to Gold Horizontal Gradient Bar */}
          <div className="xerf-gradient-bar reveal-scale">
            
            {/* Device Column on Left with Top Overlapping Out */}
            <div className="xerf-overlapping-device reveal-scale stagger-1">
              <img
                src={xerfImg}
                alt="XERF Cynosure Monopolar RF Device"
                width="240"
                height="380"
                loading="lazy"
                decoding="async"
                className="device-pop-out-img"
              />
              <div className="exclusive-gold-tag">
                <Sparkles size={13} />
                <span>{isAr ? 'أول جهاز في الأردن حصرياً' : "JORDAN'S 1ST & ONLY DEVICE"}</span>
              </div>
            </div>

            {/* Information & Wavelength Details on Right */}
            <div className="xerf-bar-content reveal-on-scroll stagger-2">
              <div className="jordan-exclusive-badge">
                <span>{isAr ? 'درة أجهزة التجميل • معتمد من FDA' : 'CROWN JEWEL DEVICE • FDA-CLEARED'}</span>
              </div>

              <h2 className="title-large xerf-bar-title">
                {isAr ? 'ما هو جهاز XERF؟' : 'What is XERF?'}
              </h2>

              <p className="xerf-bar-lead">
                {technologyInfo.xerf.description}
              </p>

              {/* Interactive Wavelength Visualizer */}
              <div className="bar-wavelength-box">
                <div className="bar-wave-tabs">
                  <button
                    className={`wave-tab-btn ${activeWavelength === '6.78' ? 'active' : ''}`}
                    onClick={() => setActiveWavelength('6.78')}
                  >
                    <Waves size={15} /> {isAr ? 'تردد 6.78 MHz للنضارة السطحية' : '6.78 MHz Surface Layer'}
                  </button>
                  <button
                    className={`wave-tab-btn ${activeWavelength === '2.0' ? 'active' : ''}`}
                    onClick={() => setActiveWavelength('2.0')}
                  >
                    <Zap size={15} /> {isAr ? 'تردد 2.0 MHz لشد SMAS العميق' : '2.0 MHz Deep SMAS Layer'}
                  </button>
                </div>

                <div className="bar-wave-display">
                  {activeWavelength === '6.78' ? (
                    <div className="wave-info-panel animate-fade-in">
                      <span className="wave-target-badge">{isAr ? 'تردد الطبقة السطحية والوسطى للبشرة' : 'EPIDERMAL & UPPER DERMAL FREQUENCY'}</span>
                      <h3 className="wave-panel-title">{technologyInfo.xerf.specs[0].title}</h3>
                      <p className="wave-panel-desc">
                        {technologyInfo.xerf.specs[0].detail}
                      </p>
                    </div>
                  ) : (
                    <div className="wave-info-panel animate-fade-in">
                      <span className="wave-target-badge gold-target">{isAr ? 'تردد الشد البنيوي لطبقة SMAS العميقة' : 'DEEP SMAS ANATOMICAL FREQUENCY'}</span>
                      <h3 className="wave-panel-title">{technologyInfo.xerf.specs[1].title}</h3>
                      <p className="wave-panel-desc">
                        {technologyInfo.xerf.specs[1].detail}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Mini Guarantees Bar */}
              <div className="bar-specs-row">
                <div className="bar-spec-item">
                  <ShieldCheck size={16} className="spec-icon" />
                  <span>{isAr ? 'اعتماد FDA الأمريكي' : 'FDA-Cleared Cynosure Monopolar'}</span>
                </div>
                <div className="bar-spec-item">
                  <Zap size={16} className="spec-icon" />
                  <span>{isAr ? 'تبريد Never-Numb™ المتطور' : 'Never-Numb™ Sapphire Cooling'}</span>
                </div>
                <div className="bar-spec-item">
                  <Activity size={16} className="spec-icon" />
                  <span>{isAr ? 'تحكم Wave Fit™ الذكي' : 'Wave Fit™ Real-Time Control'}</span>
                </div>
                <div className="bar-spec-item">
                  <Cpu size={16} className="spec-icon" />
                  <span>{isAr ? 'معايرة الذكاء الاصطناعي' : 'AI Diagnostic Calibration'}</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="bar-cta-row">
                <button className="btn-primary btn-gold" onClick={onOpenBooking}>
                  {isAr ? 'حجز جلسة XERF الحصرية' : "Book Jordan's Exclusive XERF Consultation"}
                </button>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ==========================================
          5.5 BEFORE & AFTER TRANSFORMATIONS SHOWCASE
      ========================================== */}
      <BeforeAfterSection isAr={isAr} onOpenBooking={onOpenBooking} />

      {/* ==========================================
          6. DOCTORS PROFILES (Split-Screen Showcase)
      ========================================== */}
      <section id="doctors" className="screen-section doctors-screen section-padding-compact relative-section">
        <BackgroundPaths opacity={0.5} />
        <div className="container relative-z">
          <div className="section-header-compact text-center reveal-on-scroll">
            <span className="eyebrow">{isAr ? 'الإدارة والقيادة الطبية' : 'CLINICAL LEADERSHIP'}</span>
            <h2 className="title-medium">{isAr ? 'أطباؤنا المؤسسون' : 'Guided by Medical Doctors'}</h2>
          </div>

          <div className="doctors-split-screen-stack">
            {/* Top Half: Dr. Shroq (Pic Left, Bio Right) */}
            {doctors[0] && (
              <div className="split-stage stage-shroq-top reveal-on-scroll stagger-1">
                <DoctorProfileCard doc={doctors[0]} onOpenBooking={onOpenBooking} lang={lang} />
              </div>
            )}

            {/* Elegant Luxury Split Divider */}
            <div className="doctors-split-divider reveal-on-scroll stagger-2">
              <div className="split-line" />
              <div className="split-badge-pill">
                <span>{isAr ? 'سمارت كلينك عبدون • الأطباء المؤسسون' : 'SMART CLINIC ABDOUN • CO-FOUNDERS'}</span>
              </div>
              <div className="split-line" />
            </div>

            {/* Bottom Half: Dr. Oways (Bio Left, Pic Right) */}
            {doctors[1] && (
              <div className="split-stage stage-oways-bottom reveal-on-scroll stagger-3">
                <DoctorProfileCard doc={doctors[1]} onOpenBooking={onOpenBooking} lang={lang} />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ==========================================
          7. FAQ ACCORDION (Laptop Viewport Fit)
      ========================================== */}
      <section id="faq" className="screen-section faq-screen section-padding-compact bg-secondary relative-section">
        <BackgroundPaths density="light" variant="minimal" opacity={0.55} />
        <div className="container relative-z reveal-on-scroll">
          <div className="section-header-compact text-center">
            <span className="eyebrow">{isAr ? 'إرشادات المراجعين' : 'PATIENT GUIDANCE'}</span>
            <h2 className="title-medium">{isAr ? 'الأسئلة الشائعة والإجابات' : 'Frequently Asked Questions'}</h2>
          </div>

          <FaqAccordion lang={lang} />
        </div>
      </section>

      {/* ==========================================
          8. CLOSING CTA & LOCATION CONTACT
      ========================================== */}
      <section id="contact" className="screen-section contact-screen section-padding-compact relative-section">
        <BackgroundPaths density="medium" variant="waves" opacity={0.7} />
        <div className="container relative-z">
          <div className="contact-compact-layout">
            <div className="cta-box-compact">
              <span className="eyebrow eyebrow-light">{isAr ? 'ابدأ رحلتك العلاجية' : 'START YOUR JOURNEY'}</span>
              <h2 className="title-medium text-white">{isAr ? 'تجربة التجميل الذكي والمتطور' : 'Experience Intelligent Aesthetics'}</h2>
              <p className="text-muted-light">
                {clinicInfo.address}
              </p>

              <div className="direct-cta-row">
                <a href={clinicInfo.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary btn-gold">
                  <MessageCircle size={18} /> {isAr ? 'مراسلة عبر الواتساب' : 'Message on WhatsApp'}
                </a>
                <a href={clinicInfo.phoneUrl} className="btn-secondary btn-hero-secondary">
                  <Phone size={18} /> {isAr ? `اتصل بنا: ${clinicInfo.phone}` : `Call ${clinicInfo.phone}`}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        /* Screen fitting layout */
        .screen-section {
          min-height: 85vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
        }

        .hero-screen {
          min-height: 100vh;
          background-color: var(--bg-primary, #FAF7F2);
          color: var(--text-primary, #1E1B18);
          padding-top: 60px;
        }

        .section-padding-compact {
          padding: 90px 0;
        }

        .section-header-compact {
          margin-bottom: 2.25rem;
        }

        .hero-golden-block {
          width: 100vw;
          position: relative;
          left: 50%;
          right: 50%;
          margin-left: -50vw;
          margin-right: -50vw;
          background: transparent;
          backdrop-filter: blur(8px);
          padding: 0;
          margin-top: auto;
          margin-bottom: auto;
          transform: translateY(-35px);
          box-shadow: 0 14px 45px rgba(168, 130, 75, 0.25);
          border-top: 1px solid rgba(255, 255, 255, 0.35);
          border-bottom: 1px solid rgba(255, 255, 255, 0.35);
          z-index: 5;
          overflow: hidden;
        }

        .eyebrow-on-gold {
          color: #2B2723 !important;
          letter-spacing: 0.16em;
          font-weight: 700;
        }

        .hero-title-on-gold {
          color: #100E0C !important;
          margin-bottom: 1.25rem;
          font-weight: 700;
          text-align: center;
          text-shadow: 0 1px 2px rgba(255, 255, 255, 0.4);
        }

        .hero-serif-italic-on-gold {
          font-style: italic;
          color: #5C431A !important;
          font-weight: 600;
        }

        .hero-subtitle-on-gold {
          font-size: 1.1rem;
          color: #1E1B18 !important;
          font-weight: 500;
          line-height: 1.75;
          margin: 0 auto 2.25rem;
          max-width: 680px;
          text-align: center;
        }

        .hero-container {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .hero-content {
          max-width: 840px;
          margin: 0 auto;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
        }

        .btn-hero-secondary {
          border-color: rgba(255, 255, 255, 0.35);
          color: #FFFFFF;
        }

        .hero-scroll-cue {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.4rem;
          cursor: pointer;
          opacity: 0.85;
        }

        .scroll-text {
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.25em;
          color: var(--accent-gold-light);
        }

        /* About Compact */
        .about-compact-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 3.5rem;
          align-items: center;
        }

        .compact-lead-text {
          font-size: 1.15rem;
          font-weight: 500;
          color: var(--text-primary);
          line-height: 1.7;
          margin-bottom: 0.85rem;
        }

        .compact-body-text {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.65;
          margin-bottom: 1.25rem;
        }

        .mantra-line-inline {
          font-size: 0.85rem;
          color: var(--accent-gold-dark);
          padding-left: 0.75rem;
          border-left: 2px solid var(--accent-gold);
          font-weight: 600;
        }

        .compact-img-frame {
          position: relative;
          height: 380px;
          border-radius: 2px;
          overflow: hidden;
        }

        .compact-about-img {
          width: 100%; height: 100%; object-fit: cover;
        }

        .img-badge-overlay {
          position: absolute;
          bottom: 12px; left: 12px;
          background-color: rgba(30, 27, 24, 0.85);
          color: var(--accent-gold-light);
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          padding: 0.35rem 0.75rem;
          backdrop-filter: blur(4px);
        }

        /* Elevated Why Us Cards */
        .why-us-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.75rem;
        }

        .why-card {
          background-color: var(--bg-card);
          border: 1px solid var(--border-gold);
          padding: 1.75rem;
          border-radius: 4px;
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          box-shadow: 0 8px 24px rgba(43, 39, 35, 0.05);
          transition: transform 0.4s var(--ease-editorial), box-shadow 0.4s var(--ease-editorial), border-color 0.4s var(--ease-editorial), opacity 0.4s var(--ease-editorial), filter 0.4s var(--ease-editorial);
          position: relative;
          z-index: 1;
        }

        .why-card-icon {
          color: var(--accent-gold-dark);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .why-card-title {
          font-family: var(--font-serif);
          font-size: 1.3rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.35rem;
        }

        .why-card-desc {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        /* Treatments Tabs */
        .treatments-tabs-row {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.6rem;
          margin-bottom: 2rem;
        }

        .tab-btn-compact {
          padding: 0.6rem 1.25rem;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          border: 1px solid var(--border-subtle);
          border-radius: 2px;
          background-color: var(--bg-secondary);
          color: var(--text-muted);
          transition: var(--transition-fast);
        }

        .tab-btn-compact.active {
          background-color: var(--text-primary);
          color: var(--bg-primary);
          border-color: var(--text-primary);
        }

        .panel-header {
          text-align: center;
          margin-bottom: 1.25rem;
        }

        .panel-subtitle {
          font-size: 0.9rem;
          color: var(--accent-gold-dark);
          font-weight: 600;
        }

        .compact-items-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        .compact-treatment-card {
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
        }

        .treatment-item-name {
          font-family: var(--font-serif);
          font-size: 1.35rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .treatment-item-desc {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 1.25rem;
        }

        .treatment-wa-link {
          margin-top: auto;
          padding-top: 0.85rem;
          border-top: 1px solid var(--border-subtle, #EFE8DD);
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          color: var(--text-primary);
          text-decoration: none;
          transition: all 0.25s var(--ease-editorial);
        }

        .treatment-wa-link .wa-icon {
          color: #25D366;
          transition: transform 0.25s ease;
        }

        .treatment-wa-link .arrow-icon {
          transition: transform 0.25s ease;
          color: var(--accent-gold-dark);
        }

        .treatment-wa-link:hover {
          color: var(--accent-gold-dark);
          gap: 0.75rem;
        }

        .treatment-wa-link:hover .wa-icon {
          transform: scale(1.15);
        }

        .treatment-wa-link:hover .arrow-icon {
          transform: translateX(4px);
        }

        /* ===================================================
           XERF HORIZONTAL GRADIENT BAR WITH DEVICE OVERLAP
        =================================================== */
        .xerf-bar-screen {
          padding-top: 60px;
          padding-bottom: 40px;
        }

        .xerf-gradient-bar {
          background: linear-gradient(90deg, #100E0C 0%, #241E18 28%, #6B522F 65%, #A88654 100%);
          border-radius: 6px;
          border: 1px solid var(--accent-gold-dark);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.28);
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 3.5rem;
          padding: 3.5rem 3rem 3.5rem 2rem;
          position: relative;
          color: #FFFFFF;
          margin-top: 60px; /* Space for overlapping device top */
        }

        /* Overlapping device column on left */
        .xerf-overlapping-device {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
          margin-top: -110px; /* Device pops OUT above top of the bar */
        }

        .device-pop-out-img {
          width: 100%;
          max-width: 240px;
          height: auto;
          object-fit: contain;
          filter: drop-shadow(0 24px 35px rgba(0, 0, 0, 0.75));
          transition: transform 0.4s var(--ease-editorial);
        }

        .xerf-overlapping-device:hover .device-pop-out-img {
          transform: translateY(-8px) scale(1.03);
        }

        .exclusive-gold-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.4rem 0.85rem;
          background-color: rgba(16, 14, 12, 0.85);
          border: 1px solid var(--accent-gold);
          border-radius: 2px;
          color: var(--accent-gold-light);
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          margin-top: 1rem;
          backdrop-filter: blur(8px);
        }

        /* Right Content Column inside Bar */
        .xerf-bar-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .xerf-bar-title {
          font-family: var(--font-serif);
          font-size: clamp(2.5rem, 5vw, 4.2rem);
          font-weight: 600;
          color: #FFFFFF;
          margin-bottom: 0.85rem;
          letter-spacing: 0.05em;
          text-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
        }

        .xerf-bar-lead {
          font-size: 1.05rem;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.7;
          margin-bottom: 1.75rem;
          max-width: 760px;
        }

        /* Wavelength Box inside Bar */
        .bar-wavelength-box {
          background-color: rgba(16, 14, 12, 0.55);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 4px;
          padding: 1.5rem;
          margin-bottom: 1.75rem;
          backdrop-filter: blur(6px);
        }

        .bar-wave-tabs {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }

        .wave-tab-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.55rem 1.1rem;
          font-size: 0.775rem;
          font-weight: 600;
          border: 1px solid rgba(255, 255, 255, 0.25);
          border-radius: 2px;
          background-color: transparent;
          color: rgba(255, 255, 255, 0.75);
          transition: all 0.25s ease;
        }

        .wave-tab-btn.active {
          background-color: var(--accent-gold);
          border-color: var(--accent-gold);
          color: #100E0C;
        }

        .wave-target-badge {
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          color: var(--accent-gold-light);
          display: block;
          margin-bottom: 0.25rem;
        }

        .wave-panel-title {
          font-family: var(--font-serif);
          font-size: 1.3rem;
          font-weight: 600;
          color: #FFFFFF;
          margin-bottom: 0.35rem;
        }

        .wave-panel-desc {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.55;
        }

        /* Specs Row */
        .bar-specs-row {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.85rem;
          margin-bottom: 1.75rem;
        }

        .bar-spec-item {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.95);
          font-weight: 500;
          background-color: rgba(16, 14, 12, 0.4);
          padding: 0.6rem 0.85rem;
          border-radius: 2px;
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        .spec-icon {
          color: var(--accent-gold-light);
          flex-shrink: 0;
        }

        /* Doctors Grid */
        .doctors-compact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
        }

        .compact-doctor-card {
          display: flex;
          align-items: center;
          gap: 1.75rem;
          background-color: var(--bg-card);
          border: 1px solid var(--border-gold);
          padding: 1.75rem;
          border-radius: 4px;
          box-shadow: 0 10px 30px rgba(43, 39, 35, 0.05);
          transition: transform 0.4s var(--ease-editorial), box-shadow 0.4s var(--ease-editorial), border-color 0.4s var(--ease-editorial), opacity 0.4s var(--ease-editorial), filter 0.4s var(--ease-editorial);
          position: relative;
          z-index: 1;
        }

        .doc-avatar-wrapper {
          width: 140px;
          height: 180px;
          flex-shrink: 0;
          border-radius: 2px;
          overflow: hidden;
        }

        .doc-avatar-img {
          width: 100%; height: 100%; object-fit: cover;
        }

        .doc-title-tag {
          font-size: 0.675rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          color: var(--accent-gold-dark);
          text-transform: uppercase;
        }

        .doc-name {
          font-family: var(--font-serif);
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--text-primary);
          margin: 0.2rem 0 0.5rem;
        }

        .doc-bio-snippet {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 0.75rem;
        }

        .doc-cred-tag {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.775rem;
          color: var(--text-primary);
          font-weight: 600;
        }

        /* FAQ Compact */
        .compact-faq-wrapper {
          max-width: 840px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .compact-faq-item {
          background-color: var(--bg-card);
          border: 1px solid var(--border-gold);
          padding: 1.25rem 1.75rem;
          border-radius: 4px;
          box-shadow: 0 6px 18px rgba(43, 39, 35, 0.03);
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .compact-faq-item:hover {
          border-color: var(--accent-gold-dark);
          box-shadow: 0 10px 24px rgba(168, 134, 84, 0.12);
        }

        .compact-faq-question {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }

        .compact-faq-question h3 {
          font-family: var(--font-serif);
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .faq-icon-btn {
          color: var(--accent-gold-dark);
        }

        .compact-faq-answer {
          margin-top: 0.75rem;
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.65;
        }

        /* Contact CTA Screen */
        .cta-box-compact {
          background-color: var(--bg-dark);
          color: #FFFFFF;
          border: 1px solid var(--border-gold);
          border-radius: 2px;
          padding: 4rem 3rem;
          text-align: center;
          max-width: 840px;
          margin: 0 auto;
        }

        .text-white { color: #FFFFFF; }
        .text-muted-light { color: rgba(255, 255, 255, 0.85); margin: 1rem 0 2rem; font-size: 0.975rem; }

        .direct-cta-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.25rem;
        }

        .btn-gold {
          background-color: var(--accent-gold);
          border-color: var(--accent-gold);
          color: var(--bg-dark);
        }

        /* Responsive Mobile Optimizations (90% Users on Phones) */
        @media (max-width: 1024px) {
          .xerf-gradient-bar {
            grid-template-columns: 1fr;
            margin-top: 60px;
            padding: 2.5rem 1.5rem;
            gap: 2rem;
          }
          .xerf-overlapping-device {
            margin-top: -80px;
          }
          .device-pop-out-img {
            max-width: 200px;
          }
        }

        @media (max-width: 900px) {
          .screen-section {
            min-height: auto;
          }
          .section-padding-compact {
            padding: 60px 0;
          }
          .about-compact-grid,
          .why-us-grid,
          .compact-items-grid,
          .bar-specs-row,
          .doctors-compact-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          .bar-wave-tabs {
            flex-direction: column;
          }
          .wave-tab-btn {
            width: 100%;
            justify-content: center;
          }
          .compact-doctor-card {
            flex-direction: column;
            align-items: flex-start;
          }
          .doc-avatar-wrapper {
            width: 100%;
            height: 220px;
          }
          .hero-screen {
            padding-top: 75px;
            padding-bottom: 2rem;
            min-height: 100vh;
            background-color: var(--bg-primary, #FAF7F2);
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          .hero-golden-block {
            transform: translateY(-20px);
            padding: 3rem 1.25rem;
          }
          .direct-cta-row, .hero-actions {
            flex-direction: column;
            width: 100%;
          }
          .btn-primary, .btn-secondary {
            width: 100%;
          }
          .cta-box-compact {
            padding: 2.5rem 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}
