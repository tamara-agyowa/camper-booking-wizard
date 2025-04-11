
import React from 'react';
import { TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Check } from 'lucide-react';

interface BookingTabsProps {
  activeTab: string;
  onTabChange: (value: string) => void;
  bookingDays: number;
  clientDetails: any;
}

const BookingTabs: React.FC<BookingTabsProps> = ({
  activeTab,
  onTabChange,
  bookingDays,
  clientDetails
}) => {
  return (
    <TabsList className="grid grid-cols-5 w-full mb-8">
      <TabsTrigger 
        value="details" 
        className="data-[state=active]:bg-camper-green data-[state=active]:text-white relative"
      >
        Camper
        {activeTab !== 'details' && <Check className="absolute right-1 top-1 h-3 w-3 text-camper-green" />}
      </TabsTrigger>
      <TabsTrigger 
        value="dates" 
        className="data-[state=active]:bg-camper-green data-[state=active]:text-white relative"
        disabled={bookingDays === 0 && activeTab !== 'details' && activeTab !== 'dates'}
      >
        Dates
        {activeTab !== 'details' && activeTab !== 'dates' && bookingDays > 0 && 
          <Check className="absolute right-1 top-1 h-3 w-3 text-camper-green" />
        }
      </TabsTrigger>
      <TabsTrigger 
        value="price" 
        className="data-[state=active]:bg-camper-green data-[state=active]:text-white relative"
        disabled={bookingDays === 0 || (activeTab !== 'details' && activeTab !== 'dates' && activeTab !== 'price')}
      >
        Pricing
        {(activeTab === 'client' || activeTab === 'payment') && 
          <Check className="absolute right-1 top-1 h-3 w-3 text-camper-green" />
        }
      </TabsTrigger>
      <TabsTrigger 
        value="client" 
        className="data-[state=active]:bg-camper-green data-[state=active]:text-white relative"
        disabled={bookingDays === 0 || (activeTab !== 'client' && activeTab !== 'payment')}
      >
        Your Details
        {activeTab === 'payment' && clientDetails &&
          <Check className="absolute right-1 top-1 h-3 w-3 text-camper-green" />
        }
      </TabsTrigger>
      <TabsTrigger 
        value="payment" 
        className="data-[state=active]:bg-camper-green data-[state=active]:text-white"
        disabled={!clientDetails || activeTab !== 'payment'}
      >
        Payment
      </TabsTrigger>
    </TabsList>
  );
};

export default BookingTabs;
