
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface BookingNavigationProps {
  activeTab: string;
  onPrevious: () => void;
  onNext: () => void;
  disableNext?: boolean;
  showBackButton?: boolean;
  nextButtonText?: string;
  submitFormId?: string;
}

const BookingNavigation: React.FC<BookingNavigationProps> = ({
  activeTab,
  onPrevious,
  onNext,
  disableNext = false,
  showBackButton = true,
  nextButtonText,
  submitFormId
}) => {
  return (
    <div className="mt-8 flex justify-between">
      {showBackButton && (
        <Button variant="outline" onClick={onPrevious}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>
      )}
      
      {activeTab !== 'payment' && (
        <Button 
          onClick={onNext}
          disabled={disableNext}
          className="bg-camper-green hover:bg-camper-green/90"
          type={submitFormId ? "submit" : "button"}
          form={submitFormId}
        >
          {nextButtonText || 'Continue'} <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      )}
    </div>
  );
};

export default BookingNavigation;
