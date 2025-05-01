
import React from "react";
import { AlertCircle, ShieldCheck, CheckCircle } from "lucide-react";

const RiderFailureProtection = () => {
  return (
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
  );
};

export default RiderFailureProtection;
