
import { useState } from 'react';

export interface BookingDates {
  startDate: Date | undefined;
  endDate: Date | undefined;
  days: number;
}

export interface ClientDetails {
  [key: string]: any;
}

export const useBookingState = () => {
  // State for wizard
  const [activeTab, setActiveTab] = useState('details');
  const [bookingDates, setBookingDates] = useState<BookingDates>({
    startDate: undefined,
    endDate: undefined,
    days: 0,
  });
  const [totalPrice, setTotalPrice] = useState(0);
  const [clientDetails, setClientDetails] = useState<ClientDetails | null>(null);
  
  // Handle date selection
  const handleDateChange = (startDate: Date | undefined, endDate: Date | undefined, days: number) => {
    setBookingDates({
      startDate,
      endDate,
      days
    });
  };
  
  // Handle price updates
  const handlePriceUpdate = (price: number) => {
    setTotalPrice(price);
  };
  
  // Handle client form completion
  const handleClientFormComplete = (data: any) => {
    setClientDetails(data);
    setActiveTab('payment');
  };

  return {
    activeTab,
    setActiveTab,
    bookingDates,
    totalPrice,
    clientDetails,
    handleDateChange,
    handlePriceUpdate,
    handleClientFormComplete
  };
};
