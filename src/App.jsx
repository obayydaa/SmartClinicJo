import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import Home from './pages/Home';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleOpenBooking = () => {
    setIsBookingOpen(true);
  };

  return (
    <div className="landing-app-shell">
      {/* Fixed Luxury Navigation Header */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Single-Page Landing Experience */}
      <main className="landing-main-view">
        <Home onOpenBooking={handleOpenBooking} />
      </main>

      {/* Global Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Global Booking Consultation Modal / Sheet */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
}
