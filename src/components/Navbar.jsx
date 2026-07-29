import React, { useState, useEffect } from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { CLINIC_INFO_AR } from '../data/clinicDataAR';
import { Menu, X, MessageCircle, Globe } from 'lucide-react';
import logoImg from '../assets/SC_pics/SC logo enhanced png.webp';

export default function Navbar({ onOpenBooking, lang = 'en', toggleLang }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isAr = lang === 'ar';
  const info = isAr ? CLINIC_INFO_AR : CLINIC_INFO;

  useEffect(() => {
    let ticking = false;

    const updateScrollState = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['home', 'about', 'why-us', 'treatments', 'xerf', 'doctors', 'faq', 'contact'];
      const scrollPos = window.scrollY + 180;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollState);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    updateScrollState();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = isAr ? [
    { id: 'home', label: 'الرئيسية' },
    { id: 'about', label: 'عن العيادة' },
    { id: 'why-us', label: 'لماذا نحن' },
    { id: 'treatments', label: 'خدماتنا' },
    { id: 'xerf', label: 'تقنية XERF' },
    { id: 'doctors', label: 'الأطباء' },
    { id: 'faq', label: 'الأسئلة الشائعة' },
    { id: 'contact', label: 'تواصل معنا' },
  ] : [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'why-us', label: 'Why Us' },
    { id: 'treatments', label: 'Offerings' },
    { id: 'xerf', label: 'XERF & AI' },
    { id: 'doctors', label: 'Doctors' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (sectionId) => {
    setMobileMenuOpen(false);
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

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <>
      <header className={`navbar-header ${scrolled ? 'navbar-solid' : 'navbar-transparent'}`}>
        <div className="container navbar-container">
          {/* Brand Logo Only (Clicking scrolls to Hero) */}
          <div className="navbar-logo" onClick={() => handleNavClick('home')} title="Return to Top">
            <img src={logoImg} alt="Smart Clinic Logo" className="logo-img" />
          </div>

          {/* Desktop Nav */}
          <nav className="desktop-nav">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => handleNavClick(item.id)}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="navbar-actions">
            {/* Language Switcher Pill */}
            <button
              onClick={toggleLang}
              className="lang-toggle-btn"
              title={isAr ? "Switch to English" : "التحويل إلى العربية"}
            >
              <Globe size={15} />
              <span>{isAr ? "EN" : "العربية"}</span>
            </button>

            <button className="btn-primary btn-nav-cta" onClick={onOpenBooking}>
              <span>{isAr ? 'حجز استشارة' : 'Book Consultation'}</span>
            </button>

            <button
              className="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-header">
          <div className="navbar-logo" onClick={() => handleNavClick('home')}>
            <img src={logoImg} alt="Smart Clinic" className="logo-img" />
          </div>
          <button className="mobile-menu-toggle" onClick={() => setMobileMenuOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <div className="mobile-drawer-body">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => handleNavClick(item.id)}
            >
              {item.label}
            </button>
          ))}

          <div className="mobile-drawer-cta">
            <button
              onClick={() => { toggleLang(); setMobileMenuOpen(false); }}
              className="lang-toggle-btn w-full mb-3 justify-center"
              style={{ padding: '0.65rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', width: '100%', marginBottom: '0.75rem' }}
            >
              <Globe size={16} />
              <span>{isAr ? "English" : "اللغة العربية"}</span>
            </button>

            <button className="btn-primary w-full" onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }}>
              <MessageCircle size={18} />
              <span>{isAr ? 'حجز استشارة' : 'Book Consultation'}</span>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .navbar-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          transition: all 0.3s var(--ease-editorial);
          padding: 1.1rem 0;
        }

        .navbar-transparent {
          background-color: rgba(250, 247, 242, 0.85);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-bottom: 1px solid rgba(201, 168, 118, 0.2);
        }

        .navbar-solid {
          background-color: var(--bg-primary);
          border-bottom: 1px solid var(--border-gold);
          box-shadow: 0 4px 20px rgba(43, 39, 35, 0.05);
          padding: 0.8rem 0;
        }

        .navbar-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .lang-toggle-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.45rem 0.85rem;
          border-radius: 20px;
          border: 1px solid var(--border-gold, rgba(181, 138, 73, 0.4));
          background: rgba(255, 255, 255, 0.75);
          color: #100E0C;
          font-size: 0.82rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          backdrop-filter: blur(8px);
          position: relative;
          z-index: 20;
        }

        .lang-toggle-btn:hover {
          background: #FAF7F2;
          border-color: #B58A49;
          transform: translateY(-1px);
          box-shadow: 0 2px 8px rgba(181, 138, 73, 0.2);
        }

        .navbar-logo {
          display: flex;
          align-items: center;
          cursor: pointer;
          transition: transform 0.2s ease;
        }

        .navbar-logo:hover {
          transform: scale(1.03);
        }

        .logo-img {
          height: 46px;
          width: auto;
          object-fit: contain;
          filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.06));
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 1.6rem;
        }

        .nav-link {
          font-family: var(--font-sans);
          font-size: 0.8rem;
          font-weight: 500;
          letter-spacing: 0.08em;
          color: var(--text-muted);
          text-transform: uppercase;
          position: relative;
          padding: 0.2rem 0;
          transition: var(--transition-fast);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 1px;
          background-color: var(--accent-gold);
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.3s var(--ease-editorial);
        }

        .nav-link:hover {
          color: var(--text-primary);
        }

        .nav-link:hover::after, .nav-link.active::after {
          transform: scaleX(1);
          transform-origin: left;
        }

        .nav-link.active {
          color: var(--accent-gold-dark);
          font-weight: 600;
        }

        .navbar-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .btn-nav-cta {
          padding: 0.6rem 1.3rem;
          font-size: 0.75rem;
        }

        .mobile-menu-toggle {
          display: none;
          color: var(--text-primary);
          padding: 0.4rem;
        }

        /* Mobile Drawer */
        .mobile-drawer {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: var(--bg-primary);
          z-index: 2000;
          display: flex;
          flex-direction: column;
          transform: translateY(-100%);
          transition: transform 0.4s var(--ease-editorial);
          padding: 1.25rem 1.5rem;
        }

        .mobile-drawer.open {
          transform: translateY(0);
        }

        .mobile-drawer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid var(--border-subtle);
        }

        .mobile-drawer-body {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          padding: 2rem 0;
          overflow-y: auto;
        }

        .mobile-nav-link {
          font-family: var(--font-serif);
          font-size: 1.5rem;
          text-align: left;
          color: var(--text-primary);
          transition: color 0.2s ease;
          padding: 0.25rem 0;
        }

        .mobile-nav-link.active {
          color: var(--accent-gold-dark);
          font-style: italic;
        }

        .mobile-drawer-cta {
          margin-top: auto;
          padding-top: 1.5rem;
        }

        .w-full {
          width: 100%;
        }

        @media (max-width: 1100px) {
          .desktop-nav {
            display: none;
          }
          .mobile-menu-toggle {
            display: flex;
          }
        }
      `}</style>
    </>
  );
}
