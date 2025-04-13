
import React from 'react';
import { MountainSnow, CalendarRange, DollarSign, CreditCard } from 'lucide-react';

const CamperHeader = () => {
  return (
    <div className="bg-camper-green text-white py-6 px-4 md:py-10 rounded-b-lg shadow-md">
      <div className="camper-container">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Roaming Roots Camper Booking</h1>
            <p className="text-camper-light-sand opacity-80">Book your next outdoor adventure with our premium camper van</p>
          </div>
          <div className="mt-4 md:mt-0">
            <span className="inline-flex items-center bg-camper-light-green/20 px-3 py-1 rounded-full text-sm">
              <MountainSnow size={16} className="mr-1" /> Experience the wilderness in comfort
            </span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
          <div className="flex items-center">
            <div className="bg-white/10 p-2 rounded-full mr-3">
              <CalendarRange size={20} className="text-white" />
            </div>
            <div>
              <p className="text-sm text-white/70">Step 1</p>
              <p className="font-medium">Select Dates</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="bg-white/10 p-2 rounded-full mr-3">
              <DollarSign size={20} className="text-white" />
            </div>
            <div>
              <p className="text-sm text-white/70">Step 2</p>
              <p className="font-medium">Review Price</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="bg-white/10 p-2 rounded-full mr-3">
              <CreditCard size={20} className="text-white" />
            </div>
            <div>
              <p className="text-sm text-white/70">Step 3</p>
              <p className="font-medium">Your Details</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="bg-white/10 p-2 rounded-full mr-3">
              <CreditCard size={20} className="text-white" />
            </div>
            <div>
              <p className="text-sm text-white/70">Step 4</p>
              <p className="font-medium">Payment</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CamperHeader;
