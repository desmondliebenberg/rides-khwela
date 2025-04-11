
import { QrCode, CheckCircle, AlertCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const QRVerification = () => {
  return (
    <div className="my-10">
      <h2 className="text-2xl font-bold text-khwela-blue mb-6">QR Verification Process</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border border-khwela-light shadow-sm">
          <CardContent className="p-6">
            <div className="flex justify-center mb-4">
              <div className="h-12 w-12 bg-khwela-light rounded-full flex items-center justify-center">
                <QrCode size={24} className="text-khwela-blue" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-center text-khwela-blue mb-2">
              QR Verification
            </h3>
            <p className="text-khwela-slate text-center">
              For cash trips only - ensures both parties confirm the transaction
            </p>
          </CardContent>
        </Card>
        
        <Card className="border border-khwela-light shadow-sm">
          <CardContent className="p-6">
            <div className="flex justify-center mb-4">
              <div className="h-12 w-12 bg-khwela-light rounded-full flex items-center justify-center">
                <CheckCircle size={24} className="text-khwela-blue" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-center text-khwela-blue mb-2">
              QR Before Trip
            </h3>
            <p className="text-khwela-slate text-center">
              Trip starts only after both QR scans are completed
            </p>
          </CardContent>
        </Card>
        
        <Card className="border border-khwela-light shadow-sm">
          <CardContent className="p-6">
            <div className="flex justify-center mb-4">
              <div className="h-12 w-12 bg-khwela-light rounded-full flex items-center justify-center">
                <AlertCircle size={24} className="text-khwela-blue" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-center text-khwela-blue mb-2">
              Security Measure
            </h3>
            <p className="text-khwela-slate text-center">
              Non-compliant riders will be blocked from using cash payment options
            </p>
          </CardContent>
        </Card>
      </div>
      
      <div className="mt-10 bg-khwela-light rounded-lg p-6">
        <h3 className="text-xl font-semibold text-khwela-blue mb-4">🔐 QR Verification Process for Cash Trips</h3>
        
        <ol className="space-y-4">
          <li className="flex items-start">
            <span className="flex-shrink-0 bg-khwela-blue text-white rounded-full h-6 w-6 flex items-center justify-center mr-3">1</span>
            <div>
              <p className="text-khwela-slate font-medium">Rider enters the car and pays the cash fare.</p>
            </div>
          </li>
          
          <li className="flex items-start">
            <span className="flex-shrink-0 bg-khwela-blue text-white rounded-full h-6 w-6 flex items-center justify-center mr-3">2</span>
            <div>
              <p className="text-khwela-slate font-medium">Driver scans the Rider's QR code to confirm cash payment.</p>
            </div>
          </li>
          
          <li className="flex items-start">
            <span className="flex-shrink-0 bg-khwela-blue text-white rounded-full h-6 w-6 flex items-center justify-center mr-3">3</span>
            <div>
              <p className="text-khwela-slate font-medium">Rider scans the Driver's QR code to confirm the trip.</p>
            </div>
          </li>
          
          <li className="flex items-start">
            <span className="flex-shrink-0 bg-khwela-blue text-white rounded-full h-6 w-6 flex items-center justify-center mr-3">4</span>
            <div>
              <p className="text-khwela-slate font-medium">Trip starts only after both QR scans are completed.</p>
            </div>
          </li>
        </ol>
        
        <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mt-6">
          <p className="text-yellow-700">
            <strong>Important:</strong> If the rider exits the vehicle before completing this flow, they are blocked from using the cash payment option in future rides.
          </p>
        </div>
      </div>
    </div>
  );
};

export default QRVerification;
