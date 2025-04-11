
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import CamperDetails from './CamperDetails';
import DateSelection from './DateSelection';
import PriceSummary from './PriceSummary';
import ClientForm from './ClientForm';
import PaymentSection from './PaymentSection';

const BookingWizard = () => {
  // State for wizard
  const [activeTab, setActiveTab] = useState('details');
  const [bookingDates, setBookingDates] = useState<{
    startDate: Date | undefined;
    endDate: Date | undefined;
    days: number;
  }>({
    startDate: undefined,
    endDate: undefined,
    days: 0,
  });
  const [totalPrice, setTotalPrice] = useState(0);
  const [clientDetails, setClientDetails] = useState(null);
  
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
        <TabsList className="grid grid-cols-5 w-full mb-8">
          <TabsTrigger value="details" 
            className="data-[state=active]:bg-camper-green data-[state=active]:text-white relative"
          >
            Camper
            {activeTab !== 'details' && <Check className="absolute right-1 top-1 h-3 w-3 text-camper-green" />}
          </TabsTrigger>
          <TabsTrigger value="dates" 
            className="data-[state=active]:bg-camper-green data-[state=active]:text-white relative"
            disabled={bookingDates.days === 0 && activeTab !== 'details' && activeTab !== 'dates'}
          >
            Dates
            {activeTab !== 'details' && activeTab !== 'dates' && bookingDates.days > 0 && 
              <Check className="absolute right-1 top-1 h-3 w-3 text-camper-green" />
            }
          </TabsTrigger>
          <TabsTrigger value="price" 
            className="data-[state=active]:bg-camper-green data-[state=active]:text-white relative"
            disabled={bookingDates.days === 0 || (activeTab !== 'details' && activeTab !== 'dates' && activeTab !== 'price')}
          >
            Pricing
            {(activeTab === 'client' || activeTab === 'payment') && 
              <Check className="absolute right-1 top-1 h-3 w-3 text-camper-green" />
            }
          </TabsTrigger>
          <TabsTrigger value="client" 
            className="data-[state=active]:bg-camper-green data-[state=active]:text-white relative"
            disabled={bookingDates.days === 0 || (activeTab !== 'client' && activeTab !== 'payment')}
          >
            Your Details
            {activeTab === 'payment' && clientDetails &&
              <Check className="absolute right-1 top-1 h-3 w-3 text-camper-green" />
            }
          </TabsTrigger>
          <TabsTrigger value="payment" 
            className="data-[state=active]:bg-camper-green data-[state=active]:text-white"
            disabled={!clientDetails || activeTab !== 'payment'}
          >
            Payment
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="details">
          <CamperDetails />
          <div className="mt-8 flex justify-end">
            <Button onClick={nextStep} className="bg-camper-green hover:bg-camper-green/90">
              Select Dates <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </TabsContent>
        
        <TabsContent value="dates">
          <DateSelection onDateChange={handleDateChange} />
          <div className="mt-8 flex justify-between">
            <Button variant="outline" onClick={prevStep}>
              <ArrowLeft className="mr-2 h-4 w-4" /> Back
            </Button>
            <Button 
              onClick={nextStep} 
              disabled={bookingDates.days === 0}
              className="bg-camper-green hover:bg-camper-green/90"
            >
              Continue to Pricing <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </TabsContent>
        
        <TabsContent value="price">
          <PriceSummary 
            startDate={bookingDates.startDate} 
            endDate={bookingDates.endDate} 
            days={bookingDates.days}
            onUpdatePrice={handlePriceUpdate}
          />
          <div className="mt-8 flex justify-between">
            <Button variant="outline" onClick={prevStep}>
              <ArrowLeft className="mr-2 h-4 w-4" /> Back
            </Button>
            <Button 
              onClick={nextStep}
              className="bg-camper-green hover:bg-camper-green/90"
            >
              Enter Your Details <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </TabsContent>
        
        <TabsContent value="client">
          <ClientForm onFormComplete={handleClientFormComplete} />
          <div className="mt-8 flex justify-between">
            <Button variant="outline" onClick={prevStep}>
              <ArrowLeft className="mr-2 h-4 w-4" /> Back
            </Button>
            <Button 
              type="submit"
              form="client-form"
              className="bg-camper-green hover:bg-camper-green/90"
              onClick={() => handleClientFormComplete({ name: 'Test Client' })}
            >
              Continue to Payment <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </TabsContent>
        
        <TabsContent value="payment">
          <PaymentSection totalPrice={totalPrice} />
          <div className="mt-8 flex justify-between">
            <Button variant="outline" onClick={prevStep}>
              <ArrowLeft className="mr-2 h-4 w-4" /> Back
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BookingWizard;
