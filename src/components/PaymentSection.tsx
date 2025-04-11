
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { CreditCard, DollarSign, Bitcoin } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

interface PaymentSectionProps {
  totalPrice: number;
}

const PaymentSection: React.FC<PaymentSectionProps> = ({ totalPrice }) => {
  return (
    <div className="booking-step" style={{ animationDelay: '0.5s' }}>
      <h2 className="text-2xl font-bold mb-4">Payment Method</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardContent className="p-6">
              <RadioGroup defaultValue="card">
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center space-x-2 mb-4">
                      <RadioGroupItem value="card" id="card" />
                      <Label htmlFor="card" className="font-medium flex items-center">
                        <CreditCard className="h-4 w-4 mr-2" />
                        Credit / Debit Card
                      </Label>
                    </div>
                    
                    <div className="pl-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="card-name">Name on Card</Label>
                          <input
                            type="text"
                            id="card-name"
                            placeholder="John Doe"
                            className="w-full border border-input bg-transparent px-3 py-2 rounded-md text-sm"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="card-number">Card Number</Label>
                          <input
                            type="text"
                            id="card-number"
                            placeholder="**** **** **** ****"
                            className="w-full border border-input bg-transparent px-3 py-2 rounded-md text-sm"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="card-expiry">Expiry Date</Label>
                          <input
                            type="text"
                            id="card-expiry"
                            placeholder="MM/YY"
                            className="w-full border border-input bg-transparent px-3 py-2 rounded-md text-sm"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="card-cvc">CVC</Label>
                          <input
                            type="text"
                            id="card-cvc"
                            placeholder="123"
                            className="w-full border border-input bg-transparent px-3 py-2 rounded-md text-sm"
                          />
                        </div>
                      </div>
                      
                      <div className="mt-4 flex">
                        <div className="flex items-center gap-2">
                          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Visa.svg/1200px-Visa.svg.png" alt="Visa" className="h-8" />
                          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" alt="Mastercard" className="h-8" />
                          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/1200px-American_Express_logo_%282018%29.svg.png" alt="Amex" className="h-8" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="bank" id="bank" />
                    <Label htmlFor="bank" className="font-medium flex items-center">
                      <DollarSign className="h-4 w-4 mr-2" />
                      Bank Transfer
                    </Label>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="crypto" id="crypto" />
                    <Label htmlFor="crypto" className="font-medium flex items-center">
                      <Bitcoin className="h-4 w-4 mr-2" />
                      Cryptocurrency
                    </Label>
                  </div>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-4">Booking Summary</h3>
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${totalPrice}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tax</span>
                  <span>${Math.round(totalPrice * 0.08)}</span>
                </div>
                
                <Separator className="my-2" />
                
                <div className="flex justify-between font-semibold text-base">
                  <span>Total</span>
                  <span>${totalPrice + Math.round(totalPrice * 0.08)}</span>
                </div>
              </div>
              
              <div className="mt-6">
                <button 
                  className="w-full py-2.5 px-4 bg-camper-green text-white rounded-md font-medium hover:bg-camper-green/90 transition-colors"
                >
                  Confirm & Pay
                </button>
              </div>
              
              <p className="text-xs text-muted-foreground mt-4">
                Your card will be charged only after booking confirmation.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PaymentSection;
