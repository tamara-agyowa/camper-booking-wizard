
import React from 'react';
import { Users, Fuel, MapPin, PlugZap, Coffee, UserPlus } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const CamperDetails = () => {
  return (
    <div className="booking-step" style={{ animationDelay: '0.1s' }}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="aspect-video overflow-hidden rounded-lg mb-4 bg-camper-light-sand/20">
            <img 
              src="https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=2676&auto=format&fit=crop" 
              alt="Adventure Camper Van" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="grid grid-cols-3 gap-2">
            <div className="aspect-square overflow-hidden rounded-md bg-camper-light-sand/20">
              <img 
                src="https://images.unsplash.com/photo-1545161296-d9c2c241f2ad?q=80&w=2670&auto=format&fit=crop" 
                alt="Camper interior" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-md bg-camper-light-sand/20">
              <img 
                src="https://images.unsplash.com/photo-1520804454707-893212e46c41?q=80&w=2670&auto=format&fit=crop" 
                alt="Camper kitchen" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-md bg-camper-light-sand/20">
              <img 
                src="https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=2532&auto=format&fit=crop" 
                alt="Camper view" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-3">Premium Adventure Camper</h2>
          <p className="text-muted-foreground mb-4">
            Experience the freedom of the open road with our fully-equipped camper van. Perfect for couples or small families looking to explore nature in comfort and style.
          </p>
          
          <h3 className="text-lg font-semibold mb-2">Camper Specifications</h3>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <Card className="bg-muted/50">
              <CardContent className="p-4 flex items-center">
                <Users className="h-5 w-5 mr-2 text-camper-green" />
                <span>Sleeps 2-4 people</span>
              </CardContent>
            </Card>
            
            <Card className="bg-muted/50">
              <CardContent className="p-4 flex items-center">
                <Fuel className="h-5 w-5 mr-2 text-camper-green" />
                <span>Fuel efficient diesel</span>
              </CardContent>
            </Card>
            
            <Card className="bg-muted/50">
              <CardContent className="p-4 flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-camper-green" />
                <span>GPS Navigation</span>
              </CardContent>
            </Card>
            
            <Card className="bg-muted/50">
              <CardContent className="p-4 flex items-center">
                <PlugZap className="h-5 w-5 mr-2 text-camper-green" />
                <span>Solar Power</span>
              </CardContent>
            </Card>
          </div>
          
          <h3 className="text-lg font-semibold mb-2">Included Amenities</h3>
          <ul className="space-y-2 mb-6">
            <li className="flex items-center">
              <Coffee className="h-4 w-4 mr-2 text-camper-sand" />
              <span>Fully equipped kitchen with stove and fridge</span>
            </li>
            <li className="flex items-center">
              <Coffee className="h-4 w-4 mr-2 text-camper-sand" />
              <span>Comfortable memory foam mattress</span>
            </li>
            <li className="flex items-center">
              <Coffee className="h-4 w-4 mr-2 text-camper-sand" />
              <span>Outdoor camping chairs and table</span>
            </li>
            <li className="flex items-center">
              <Coffee className="h-4 w-4 mr-2 text-camper-sand" />
              <span>Shower and toilet facilities</span>
            </li>
          </ul>
          
          <div className="bg-camper-light-green/10 p-4 rounded-lg border border-camper-light-green/20 flex items-start">
            <UserPlus className="h-5 w-5 mr-3 text-camper-green mt-0.5" />
            <div>
              <p className="font-semibold text-camper-green">Optional extras</p>
              <p className="text-sm text-muted-foreground">
                Add bike rack, bedding packages, or outdoor cooking equipment for additional fees.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CamperDetails;
