
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import QRVerification from "@/components/trip-verification/QRVerification";
import { QrCode, CheckSquare } from "lucide-react";

const QRTripVerification = () => {
  return (
    <Card className="shadow-md">
      <CardHeader className="bg-gradient-to-r from-khwela-blue/90 to-khwela-dark text-white pb-3">
        <CardTitle className="flex items-center">
          <QrCode className="mr-2" size={20} />
          QR Trip Verification
        </CardTitle>
      </CardHeader>
      
      <CardContent className="p-6">
        <div className="space-y-6">
          <div className="bg-khwela-light/20 p-4 rounded-lg">
            <h3 className="font-medium text-khwela-blue mb-2 flex items-center">
              <CheckSquare size={18} className="mr-2 text-khwela-gold" />
              Cash Trip Verification Process
            </h3>
            <ol className="list-decimal pl-5 space-y-1 text-sm text-khwela-slate">
              <li>Rider enters the car and pays the cash fare</li>
              <li>Driver scans the Rider's QR code to confirm payment</li>
              <li>Rider scans the Driver's QR code to confirm trip</li>
              <li>Trip starts only after both QR scans are completed</li>
            </ol>
          </div>
          
          <Tabs defaultValue="driver">
            <TabsList className="grid grid-cols-2 mb-4">
              <TabsTrigger value="driver">For Drivers</TabsTrigger>
              <TabsTrigger value="rider">For Riders</TabsTrigger>
            </TabsList>
            
            <TabsContent value="driver">
              <QRVerification type="driver" tripId={12345} />
            </TabsContent>
            
            <TabsContent value="rider">
              <QRVerification type="rider" tripId={12345} />
            </TabsContent>
          </Tabs>
          
          <div className="flex justify-center">
            <Button variant="outline" className="border-khwela-blue text-khwela-blue">
              Learn More About QR Verification
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default QRTripVerification;
