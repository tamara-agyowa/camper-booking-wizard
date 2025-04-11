
import React, { useState, useEffect } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { addDays, format, isBefore, isAfter, differenceInDays } from 'date-fns';

interface DateSelectionProps {
  onDateChange: (startDate: Date | undefined, endDate: Date | undefined, days: number) => void;
}

const DateSelection = ({ onDateChange }: DateSelectionProps) => {
  const today = new Date();
  const disabledDays = [
    { before: today },
    // Example of blocked dates (e.g., already booked)
    new Date(2023, 4, 15), // May 15, 2023
    new Date(2023, 4, 16), // May 16, 2023
    { from: new Date(2023, 6, 10), to: new Date(2023, 6, 15) }, // July 10-15, 2023
  ];

  const [date, setDate] = useState<{
    from: Date | undefined;
    to: Date | undefined;
  }>({
    from: undefined,
    to: undefined,
  });

  useEffect(() => {
    const { from, to } = date;
    let days = 0;
    
    if (from && to) {
      days = differenceInDays(to, from) + 1; // Include both start and end dates
    }
    
    onDateChange(from, to, days);
  }, [date, onDateChange]);

  return (
    <div className="booking-step">
      <h2 className="text-2xl font-semibold mb-4">Choose Your Adventure Dates</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="mb-2 text-muted-foreground">Select a date range for your camper booking:</p>
          <div className="bg-card rounded-lg shadow-md p-4">
            <Calendar
              mode="range"
              selected={date}
              onSelect={(newDate) => {
                if (newDate) {
                  setDate(newDate);
                }
              }}
              disabled={disabledDays}
              initialFocus
            />
          </div>
        </div>
        
        <div>
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Your Adventure Dates</CardTitle>
              <CardDescription>
                The minimum rental period is 3 days
              </CardDescription>
            </CardHeader>
            <CardContent>
              {date.from ? (
                <div className="space-y-4">
                  <div className="border-b pb-2">
                    <p className="text-muted-foreground text-sm">Start Date</p>
                    <p className="font-medium text-lg">
                      {date.from ? format(date.from, 'PPP') : 'Select a date'}
                    </p>
                  </div>
                  
                  <div className="border-b pb-2">
                    <p className="text-muted-foreground text-sm">End Date</p>
                    <p className="font-medium text-lg">
                      {date.to ? format(date.to, 'PPP') : 'Select a date'}
                    </p>
                  </div>
                  
                  {date.from && date.to && (
                    <div>
                      <p className="text-muted-foreground text-sm">Duration</p>
                      <p className="font-medium text-lg">
                        {differenceInDays(date.to, date.from) + 1} days
                      </p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center p-4">
                  <p className="text-muted-foreground">
                    Select a date range to see your booking details
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
      
      {date.from && date.to && differenceInDays(date.to, date.from) + 1 < 3 && (
        <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-md text-amber-700">
          <p>Please select at least 3 days for your booking.</p>
        </div>
      )}
    </div>
  );
};

export default DateSelection;
