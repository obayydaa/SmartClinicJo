import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import ScrollProgress from './components/ScrollProgress';
import Home from './pages/Home';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('smart_clinic_lang') || 'en';
  });

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    localStorage.setItem('smart_clinic_lang', lang);
  }, [lang]);

  const toggleLang = () => {
    setLang(prev => prev === 'en' ? 'ar' : 'en');
  };

  const handleOpenBooking = () => {
    setIsBookingOpen(true);
  };

  return (
    <div className={`landing-app-shell ${lang === 'ar' ? 'rtl-layout' : 'ltr-layout'}`}>
      {/* Global Top Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Fixed Luxury Navigation Header */}
      <Navbar onOpenBooking={handleOpenBooking} lang={lang} toggleLang={toggleLang} />

      {/* Main Single-Page Landing Experience */}
      <main className="landing-main-view">
        <Home onOpenBooking={handleOpenBooking} lang={lang} />
      </main>

      {/* Global Footer */}
      <Footer onOpenBooking={handleOpenBooking} lang={lang} />

      {/* Global Booking Consultation Modal / Sheet */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        lang={lang}
      />
    </div>
  );
}
