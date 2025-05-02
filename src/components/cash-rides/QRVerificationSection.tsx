
import React from "react";
import { QrCode, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import QRTripVerification from "./QRTripVerification";

const QRVerificationSection = () => {
  return (
    <div className="max-w-6xl mx-auto bg-gradient-to-r from-khwela-blue to-khwela-dark rounded-xl p-8 shadow-lg text-white mb-20">
      <div className="flex items-center justify-center space-x-3 mb-8">
        <QrCode size={24} className="text-khwela-gold" />
        <h2 className="text-2xl font-bold">QR Verification</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <QrCode size={20} className="mr-2 text-khwela-gold" />
              QR Code Verification
            </h3>
            <p className="text-white/90 mb-4">
              When you arrive to pick up a cash ride passenger:
            </p>
            <ol className="list-decimal pl-5 space-y-2 text-white/90">
              <li>Rider enters the car and pays the cash fare</li>
              <li>Driver scans the Rider's QR code to confirm payment</li>
              <li>Rider scans the Driver's QR code to confirm the trip</li>
              <li>Trip only starts when both QR scans are completed</li>
            </ol>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <ShieldCheck size={20} className="mr-2 text-khwela-gold" />
              QR Verification Process for Cash Trips
            </h3>
            <ol className="list-decimal pl-5 space-y-2 text-white/90">
              <li>Rider enters the car and pays the cash fare.</li>
              <li>Driver scans the Rider's QR code to confirm cash payment.</li>
              <li>Rider scans the Driver's QR code to confirm the trip.</li>
              <li>Trip starts only after both QR scans are completed.</li>
            </ol>
          </div>

          <div className="flex justify-center mt-8">
            <Button className="bg-khwela-gold text-khwela-blue hover:bg-khwela-gold/90">
              Watch Demo Video
            </Button>
          </div>
        </div>
      </div>
      
      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-6 text-center">Try Our QR Verification Demo</h3>
        <QRTripVerification />
      </div>
    </div>
  );
};

export default QRVerificationSection;
