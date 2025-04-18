
import React from 'react';
import { Users, Fuel, MapPin, PlugZap, Coffee, UserPlus, Mountain, Calendar, Route, Infinity } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const CamperDetails = () => {
  return (
    <div className="booking-step" style={{ animationDelay: '0.1s' }}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="aspect-video overflow-hidden rounded-lg mb-4 bg-camper-light-sand/20">
            <img 
              src="/images/Freedom-Camper-European-Adventure.jpg" 
              alt="Roaming Roots Camper parked in nature during a European road trip" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-2">
            <div className="aspect-square overflow-hidden rounded-md bg-camper-light-sand/20">
              <img 
                src="/images/Bridge-into-Portugal-Roadtrip-Roaming-Roots.jpg" 
                alt="View of a mountain bridge in Spain, taken while driving the Roaming Roots Camper 20 minutes before crossing into Portugal." 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-md bg-camper-light-sand/20">
              <img 
                src="/images/Coastal-Valley-Town-Northern-Spain-Roadtrip.jpg" 
                alt="View from the Roaming Roots Camper of a coastal village surrounded by green fields, mountains, and sea in northern Spain under dramatic cloudy skies." 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-3">Plan Your Adventure – Affordable Rates for Every Explorer</h2>
          <p className="text-muted-foreground mb-4">
            Whether you’re planning a short getaway or a long European road trip, Roaming Roots Camper offers flexible and affordable rates to fit your travel needs. We believe that everyone deserves the freedom to explore, so we’ve kept our pricing simple and transparent—no hidden fees, just pure adventure.
          </p>
          
          <h3 className="text-lg font-semibold mb-2">Rates:</h3>
          <div className="grid grid-cols-1 gap-4 mb-6">
            <Card className="bg-muted/50">
              <CardContent className="p-4 flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-camper-green" />
                <span>Daily Rate: €[xx]</span>
              </CardContent>
            </Card>
            
            <Card className="bg-muted/50">
              <CardContent className="p-4 flex items-center">
                <Route className="h-5 w-5 mr-2 text-camper-green" />
                <span>14+ Days: 10% off</span>
              </CardContent>
            </Card>
            
            <Card className="bg-muted/50">
              <CardContent className="p-4 flex items-center">
                <Infinity className="h-5 w-5 mr-2 text-camper-green" />
                <span>30+ Days: 20% off</span>
              </CardContent>
            </Card>
          </div>
          
          <h3 className="text-lg font-semibold mb-2">What is Included</h3>
          <p className="text-muted-foreground mb-4">Every booking includes:
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-center">
              <Mountain className="h-4 w-4 mr-2 text-camper-sand" />
              <span>2 solar panels with 1000W inverter (perfect for remote work!)</span>
            </li>
            <li className="flex items-center">
              <Mountain className="h-4 w-4 mr-2 text-camper-sand" />
              <span>Fully equipped kitchenware</span>
            </li>
            <li className="flex items-center">
              <Mountain className="h-4 w-4 mr-2 text-camper-sand" />
              <span>Full tank of fuel at pickup</span>
            </li>
            <li className="flex items-center">
              <Mountain className="h-4 w-4 mr-2 text-camper-sand" />
              <span>Shower and toilet facilities</span>
            </li>
          </ul>
          
          <div className="bg-camper-light-green/10 p-4 rounded-lg border border-camper-light-green/20 flex items-start">
            <UserPlus className="h-5 w-5 mr-3 text-camper-green mt-0.5" />
            <div>
              <p className="font-semibold text-camper-green">Optional extras</p>
              <p className="text-muted-foreground mb-4">Want a little something more? We offer optional add-ons like:</p>
              <p className="text-sm text-muted-foreground">
                Add bike rack, bedding packages, camping chairs & table, BBQ set or child seats for additional fees.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CamperDetails;