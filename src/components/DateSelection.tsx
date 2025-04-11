
import React, { useState, useEffect } from 'react';
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent } from '@/components/ui/card';
import { CalendarIcon, Info } from 'lucide-react';
import { addDays, differenceInDays, format } from 'date-fns';

interface DateSelectionProps {
  onDateChange: (startDate: Date | undefined, endDate: Date | undefined, days: number) => void;
}

const DateSelection: React.FC<DateSelectionProps> = ({ onDateChange }) => {
  const today = new Date();
  const [dateRange, setDateRange] = useState<{
    from: Date | undefined;
    to: Date | undefined;
  }>({
    from: undefined,
    to: undefined,
  });
  
  const [days, setDays] = useState<number>(0);
  
  // Simulate unavailable dates (could be fetched from an API in a real app)
  const disabledDates = [
    addDays(today, 5),
    addDays(today, 6),
    addDays(today, 7),
    addDays(today, 15),
    addDays(today, 16),
    addDays(today, 25),
  ];
  
  useEffect(() => {
    if (dateRange.from && dateRange.to) {
      const dayCount = differenceInDays(dateRange.to, dateRange.from) + 1;
      setDays(dayCount);
      onDateChange(dateRange.from, dateRange.to, dayCount);
    } else {
      setDays(0);
      onDateChange(undefined, undefined, 0);
    }
  }, [dateRange, onDateChange]);

  return (
    <div className="booking-step" style={{ animationDelay: '0.2s' }}>
      <h2 className="text-2xl font-bold mb-4">Select Your Adventure Dates</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <p className="font-medium mb-2 flex items-center">
                    <CalendarIcon className="h-4 w-4 mr-2" />
                    Pick your dates
                  </p>
                  <Calendar
                    mode="range"
                    selected={dateRange}
                    onSelect={setDateRange}
                    numberOfMonths={2}
                    disabled={[
                      { before: today },
                      ...disabledDates.map(date => ({ date }))
                    ]}
                    className="rounded-md border pointer-events-auto"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-3">Your Selection</h3>
              
              {dateRange.from ? (
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Pick-up Date</p>
                    <p className="font-medium">{dateRange.from ? format(dateRange.from, 'PPP') : 'Select a date'}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-muted-foreground">Return Date</p>
                    <p className="font-medium">{dateRange.to ? format(dateRange.to, 'PPP') : 'Select a date'}</p>
                  </div>
                  
                  <div className="pt-3 border-t">
                    <p className="text-sm text-muted-foreground">Total Nights</p>
                    <p className="font-medium">{days} {days === 1 ? 'night' : 'nights'}</p>
                  </div>
                </div>
              ) : (
                <div className="flex items-start p-3 bg-muted rounded-md">
                  <Info className="h-5 w-5 mr-2 text-muted-foreground shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">
                    Select your pick-up and return dates to continue with your booking.
                  </p>
                </div>
              )}
              
              <div className="mt-4 text-xs text-muted-foreground">
                <p className="mb-1">• Red dates are unavailable for booking</p>
                <p>• Minimum booking is 2 nights</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DateSelection;
