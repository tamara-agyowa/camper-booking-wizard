
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { format } from 'date-fns';
import { CheckCircle2, Info } from 'lucide-react';

interface PriceSummaryProps {
  startDate?: Date;
  endDate?: Date;
  days: number;
  onUpdatePrice: (totalPrice: number) => void;
}

const PriceSummary: React.FC<PriceSummaryProps> = ({ 
  startDate, 
  endDate, 
  days, 
  onUpdatePrice
}) => {
  const baseRate = 120; // Base rate per day
  const [extras, setExtras] = useState({
    bikeRack: false,
    beddingPackage: false,
    outdoorKit: false,
    insurance: true
  });
  
  // Extra prices
  const extraPrices = {
    bikeRack: 35,
    beddingPackage: 45,
    outdoorKit: 50,
    insurance: 18 * days // Insurance is per day
  };
  
  // Calculate total price
  const calculateTotal = () => {
    // Base rental cost
    let total = baseRate * days;
    
    // Add extras
    if (extras.bikeRack) total += extraPrices.bikeRack;
    if (extras.beddingPackage) total += extraPrices.beddingPackage;
    if (extras.outdoorKit) total += extraPrices.outdoorKit;
    if (extras.insurance) total += extraPrices.insurance;
    
    // Apply weekend surcharge (Fri-Sun)
    if (startDate && endDate) {
      // This is simplified - a real app would check each day in the range
      const day = startDate.getDay();
      if (day === 5 || day === 6 || day === 0) { // Fri, Sat, Sun
        total += 25 * days; // Weekend surcharge per day
      }
    }
    
    // Apply season pricing (simplified - would be more complex in real app)
    const currentMonth = new Date().getMonth();
    if (currentMonth >= 5 && currentMonth <= 8) { // June to September - peak season
      total += 35 * days; // Peak season surcharge
    }
    
    return total;
  };
  
  const total = calculateTotal();
  
  useEffect(() => {
    onUpdatePrice(total);
  }, [extras, days, startDate, endDate, onUpdatePrice, total]);
  
  const toggleExtra = (extra: keyof typeof extras) => {
    setExtras(prev => ({
      ...prev,
      [extra]: !prev[extra]
    }));
  };

  return (
    <div className="booking-step" style={{ animationDelay: '0.3s' }}>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-4">Price Calculation</h2>
          
          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Booking Summary</h3>
                  
                  {startDate && endDate ? (
                    <>
                      <div className="flex justify-between mb-2">
                        <span className="text-muted-foreground">Rental Period:</span>
                        <span>{format(startDate, 'MMM d')} - {format(endDate, 'MMM d, yyyy')}</span>
                      </div>
                      <div className="flex justify-between mb-2">
                        <span className="text-muted-foreground">Duration:</span>
                        <span>{days} {days === 1 ? 'night' : 'nights'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Base Rate:</span>
                        <span>${baseRate} per night</span>
                      </div>
                      
                      <Separator className="my-4" />
                      
                      <div className="flex justify-between font-medium">
                        <span>Base Rental Total:</span>
                        <span>${baseRate * days}</span>
                      </div>
                    </>
                  ) : (
                    <div className="flex items-center p-4 bg-muted rounded-md">
                      <Info className="h-5 w-5 mr-2 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">
                        Please select your dates to see the pricing details.
                      </p>
                    </div>
                  )}
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-4">Optional Extras</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Switch 
                          id="bike-rack" 
                          checked={extras.bikeRack}
                          onCheckedChange={() => toggleExtra('bikeRack')}
                        />
                        <Label htmlFor="bike-rack">Bike Rack (holds 2 bikes)</Label>
                      </div>
                      <span>${extraPrices.bikeRack}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Switch 
                          id="bedding" 
                          checked={extras.beddingPackage}
                          onCheckedChange={() => toggleExtra('beddingPackage')}
                        />
                        <Label htmlFor="bedding">Bedding Package</Label>
                      </div>
                      <span>${extraPrices.beddingPackage}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Switch 
                          id="outdoor" 
                          checked={extras.outdoorKit}
                          onCheckedChange={() => toggleExtra('outdoorKit')}
                        />
                        <Label htmlFor="outdoor">Outdoor Cooking Kit</Label>
                      </div>
                      <span>${extraPrices.outdoorKit}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Switch 
                          id="insurance" 
                          checked={extras.insurance}
                          onCheckedChange={() => toggleExtra('insurance')}
                        />
                        <Label htmlFor="insurance">Premium Insurance</Label>
                      </div>
                      <span>${extraPrices.insurance} (${18}/day)</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <Card className="bg-camper-green text-white">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Your Total</h3>
              
              {days > 0 ? (
                <>
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between">
                      <span>Base Rental ({days} nights)</span>
                      <span>${baseRate * days}</span>
                    </div>
                    
                    {extras.bikeRack && (
                      <div className="flex justify-between">
                        <span>Bike Rack</span>
                        <span>${extraPrices.bikeRack}</span>
                      </div>
                    )}
                    
                    {extras.beddingPackage && (
                      <div className="flex justify-between">
                        <span>Bedding Package</span>
                        <span>${extraPrices.beddingPackage}</span>
                      </div>
                    )}
                    
                    {extras.outdoorKit && (
                      <div className="flex justify-between">
                        <span>Outdoor Cooking Kit</span>
                        <span>${extraPrices.outdoorKit}</span>
                      </div>
                    )}
                    
                    {extras.insurance && (
                      <div className="flex justify-between">
                        <span>Premium Insurance</span>
                        <span>${extraPrices.insurance}</span>
                      </div>
                    )}
                  </div>
                  
                  <Separator className="my-4 bg-white/20" />
                  
                  <div className="flex justify-between text-xl font-bold">
                    <span>Total</span>
                    <span>${total}</span>
                  </div>
                  
                  <div className="mt-4 flex items-center text-xs">
                    <CheckCircle2 className="h-4 w-4 mr-1.5" />
                    <span>Free cancellation up to 7 days before pickup</span>
                  </div>
                </>
              ) : (
                <div className="p-4 bg-white/10 rounded-md">
                  <p className="text-sm">
                    Select your dates to see the total price for your adventure.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PriceSummary;
