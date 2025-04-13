
import React from 'react';
import CamperHeader from '@/components/CamperHeader';
import BookingWizard from '@/components/BookingWizard';

const Index = () => {
  return (
    <div className="min-h-screen bg-background bg-hero-pattern">
      <CamperHeader />
      
      <main className="camper-container py-8">
        <BookingWizard />
      </main>
      
      <footer className="bg-camper-green/10 py-8 mt-12">
        <div className="camper-container">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-camper-green mb-2">Roaming Roots Camper Booking</h3>
            <p className="text-muted-foreground">Experience the freedom of the open road</p>
            <p className="text-sm mt-4">© {new Date().getFullYear()} Adventure Camper Rentals. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
