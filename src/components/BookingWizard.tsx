
import React from 'react';
import { Tabs, TabsContent } from '@/components/ui/tabs';
import CamperDetails from './CamperDetails';
import DateSelection from './DateSelection';
import PriceSummary from './PriceSummary';
import ClientForm from './ClientForm';
import PaymentSection from './PaymentSection';
import BookingTabs from './BookingTabs';
import BookingNavigation from './BookingNavigation';
import { useBookingState } from '@/hooks/useBookingState';

const BookingWizard = () => {
  const {
    activeTab,
    setActiveTab,
    bookingDates,
    totalPrice,
    clientDetails,
    handleDateChange,
    handlePriceUpdate,
    handleClientFormComplete
  } = useBookingState();
  
  // Navigation handlers
  const nextStep = () => {
    switch (activeTab) {
      case 'details':
        setActiveTab('dates');
        break;
      case 'dates':
        setActiveTab('price');
        break;
      case 'price':
        setActiveTab('client');
        break;
      case 'client':
        // Form validation is handled by the form component
        break;
      default:
        break;
    }
  };
  
  const prevStep = () => {
    switch (activeTab) {
      case 'dates':
        setActiveTab('details');
        break;
      case 'price':
        setActiveTab('dates');
        break;
      case 'client':
        setActiveTab('price');
        break;
      case 'payment':
        setActiveTab('client');
        break;
      default:
        break;
    }
  };
  
  return (
    <div className="bg-background relative">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <BookingTabs 
          activeTab={activeTab} 
          onTabChange={setActiveTab}
          bookingDays={bookingDates.days}
          clientDetails={clientDetails}
        />
        
        <TabsContent value="details">
          <CamperDetails />
          <BookingNavigation 
            activeTab={activeTab}
            onPrevious={prevStep}
            onNext={nextStep}
            showBackButton={false}
            nextButtonText="Select Dates"
          />
        </TabsContent>
        
        <TabsContent value="dates">
          <DateSelection onDateChange={handleDateChange} />
          <BookingNavigation 
            activeTab={activeTab}
            onPrevious={prevStep}
            onNext={nextStep}
            disableNext={bookingDates.days === 0}
            nextButtonText="Continue to Pricing"
          />
        </TabsContent>
        
        <TabsContent value="price">
          <PriceSummary 
            startDate={bookingDates.startDate} 
            endDate={bookingDates.endDate} 
            days={bookingDates.days}
            onUpdatePrice={handlePriceUpdate}
          />
          <BookingNavigation 
            activeTab={activeTab}
            onPrevious={prevStep}
            onNext={nextStep}
            nextButtonText="Enter Your Details"
          />
        </TabsContent>
        
        <TabsContent value="client">
          <ClientForm onFormComplete={handleClientFormComplete} />
          <BookingNavigation 
            activeTab={activeTab}
            onPrevious={prevStep}
            onNext={() => handleClientFormComplete({ name: 'Test Client' })}
            submitFormId="client-form"
            nextButtonText="Continue to Payment"
          />
        </TabsContent>
        
        <TabsContent value="payment">
          <PaymentSection totalPrice={totalPrice} />
          <BookingNavigation 
            activeTab={activeTab}
            onPrevious={prevStep}
            onNext={nextStep}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BookingWizard;
