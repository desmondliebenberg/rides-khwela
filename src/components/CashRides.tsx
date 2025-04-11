
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Wallet, 
  ShieldCheck, 
  Clock, 
  AlertCircle, 
  CheckCircle, 
  QrCode, 
  UserCheck, 
  ArrowRight
} from "lucide-react";
import QRVerification from "@/components/QRVerification";

const CashRides = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-khwela-blue mb-4">
            Cash Ride Rules & Verification
          </h1>
          <p className="text-lg text-khwela-slate mb-6 max-w-2xl mx-auto">
            Our cash ride system is designed to protect drivers while offering flexibility to riders.
            Learn how it works and stay protected with our multi-layer verification.
          </p>
        </div>

        {/* How Cash Rides Work */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="flex items-center justify-center space-x-3 mb-8">
            <Wallet size={24} className="text-khwela-blue" />
            <h2 className="text-2xl font-bold text-khwela-blue">How Cash Rides Work</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="h-12 w-12 bg-khwela-light rounded-full flex items-center justify-center mb-4">
                  <UserCheck size={24} className="text-khwela-blue" />
                </div>
                <h3 className="text-lg font-semibold text-khwela-blue mb-3">Verified Riders Only</h3>
                <p className="text-sm text-khwela-slate">
                  Only riders with a valid card payment history and at least 2 completed trips can access cash payment options.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="h-12 w-12 bg-khwela-light rounded-full flex items-center justify-center mb-4">
                  <Clock size={24} className="text-khwela-blue" />
                </div>
                <h3 className="text-lg font-semibold text-khwela-blue mb-3">Time Restrictions</h3>
                <p className="text-sm text-khwela-slate">
                  Drivers can accept or decline cash trips after 18:00 for safety reasons. You always have the option to choose card-only rides.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="h-12 w-12 bg-khwela-light rounded-full flex items-center justify-center mb-4">
                  <Wallet size={24} className="text-khwela-blue" />
                </div>
                <h3 className="text-lg font-semibold text-khwela-blue mb-3">Rounded Up Fares</h3>
                <p className="text-sm text-khwela-slate">
                  Cash fares are rounded up to the nearest R10 to simplify transactions (e.g., R58.90 becomes R70 cash fare).
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* If Rider Fails to Pay */}
        <div className="max-w-6xl mx-auto mb-20 bg-white rounded-xl p-8 shadow-md">
          <div className="flex items-center justify-center space-x-3 mb-8">
            <AlertCircle size={24} className="text-red-500" />
            <h2 className="text-2xl font-bold text-khwela-blue">If Rider Fails to Pay</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <div className="flex">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-red-100 flex items-center justify-center mr-4">
                  <span className="font-bold text-red-500">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-khwela-blue mb-2">Driver Logs Complaint</h3>
                  <p className="text-sm text-khwela-slate">
                    Use the "Report Non-Payment" button in your app immediately after the incident. Include photos if relevant.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center mr-4">
                  <span className="font-bold text-amber-500">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-khwela-blue mb-2">System Charges Fallback Card</h3>
                  <p className="text-sm text-khwela-slate">
                    Our system automatically charges the rider's registered card on file, ensuring you get paid.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <span className="font-bold text-blue-500">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-khwela-blue mb-2">Rider's Cash Option Disabled</h3>
                  <p className="text-sm text-khwela-slate">
                    Any rider who fails to pay will have their cash payment option permanently disabled.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 flex items-center justify-center mr-4">
                  <span className="font-bold text-green-500">4</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-khwela-blue mb-2">Support Follows Up</h3>
                  <p className="text-sm text-khwela-slate">
                    Our support team will contact you within 24 hours to resolve any remaining issues or concerns.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="bg-khwela-light p-6 rounded-lg max-w-sm">
                <h3 className="text-lg font-semibold text-khwela-blue mb-4 flex items-center">
                  <ShieldCheck className="mr-2 text-green-600" size={20} />
                  Driver Protection Guarantee
                </h3>
                <p className="text-sm text-khwela-slate mb-4">
                  We guarantee payment for all verified cash rides. If a rider fails to pay and our fallback charge fails, we'll cover the fare from our Driver Protection Fund.
                </p>
                <div className="p-3 bg-white rounded-lg">
                  <div className="flex items-center space-x-3 text-sm text-khwela-blue">
                    <CheckCircle size={16} className="text-green-600" />
                    <span className="font-medium">100% Payment Guarantee</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* QR Verification Section */}
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
                  Security Measures
                </h3>
                <p className="text-white/90 mb-4">
                  Our QR verification system ensures:
                </p>
                <ol className="list-decimal pl-5 space-y-2 text-white/90">
                  <li>Both parties are verified before the trip begins</li>
                  <li>Creates a digital record of cash payment</li>
                  <li>Provides evidence in case of disputes</li>
                  <li>Blocks non-compliant riders from using cash in the future</li>
                </ol>
              </div>

              <div className="flex justify-center mt-8">
                <Button className="bg-khwela-gold text-khwela-blue hover:bg-khwela-gold/90">
                  Watch Demo Video
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* QR Verification Component */}
        <QRVerification />

        {/* Get Started */}
        <div className="max-w-4xl mx-auto text-center mt-20">
          <h2 className="text-2xl font-bold text-khwela-blue mb-4">Ready to Start Taking Cash Rides?</h2>
          <p className="text-lg text-khwela-slate mb-8">
            Complete the required training module and start accepting cash payments safely.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-khwela-blue text-white hover:bg-khwela-blue/90">
              Complete Cash Training
            </Button>
            <Button variant="outline" className="border-khwela-blue text-khwela-blue">
              Learn About Driver Dashboard
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CashRides;
