
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { QrCode, ScanLine, CheckCircle, XCircle, ArrowRight } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface QRVerificationProps {
  type: "driver" | "rider";
  tripId?: number;
  onVerificationComplete?: (success: boolean) => void;
}

const QRVerification = ({ type, tripId = 0, onVerificationComplete }: QRVerificationProps) => {
  const [mode, setMode] = useState<"show" | "scan">("show");
  const [verificationStatus, setVerificationStatus] = useState<"pending" | "success" | "failed">("pending");
  const { toast } = useToast();

  // In a real app, these would be dynamic and retrieved from an API
  const driverQrValue = `khwela-driver-${Math.floor(Math.random() * 1000000)}`;
  const riderQrValue = `khwela-rider-${Math.floor(Math.random() * 1000000)}`;
  const qrValue = type === "driver" ? driverQrValue : riderQrValue;

  const handleScan = () => {
    // Simulate scanning process - in a real app this would use the device camera
    setVerificationStatus("pending");
    
    // Simulate a scanning delay
    setTimeout(() => {
      // 80% success rate for demonstration purposes
      const success = Math.random() < 0.8;
      setVerificationStatus(success ? "success" : "failed");
      
      if (onVerificationComplete) {
        onVerificationComplete(success);
      }
      
      toast({
        title: success ? "Verification Successful" : "Verification Failed",
        description: success 
          ? type === "driver" 
            ? "Rider QR code verified. Trip can now begin." 
            : "Driver QR code verified. Your payment has been confirmed."
          : "QR code verification failed. Please try again.",
        variant: success ? "default" : "destructive"
      });
    }, 2000);
  };

  const toggleMode = () => {
    setMode(mode === "show" ? "scan" : "show");
    setVerificationStatus("pending");
  };

  return (
    <Card>
      <CardHeader className="bg-khwela-light/50 border-b pb-3">
        <CardTitle className="flex items-center text-khwela-blue">
          <QrCode className="mr-2" size={20} />
          QR {mode === "show" ? "Code" : "Scanner"}
        </CardTitle>
        <CardDescription>
          {mode === "show" 
            ? `Your QR code for ${type === "driver" ? "rider" : "driver"} to scan` 
            : `Scan the ${type === "driver" ? "rider's" : "driver's"} QR code`}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="p-6">
        <div className="space-y-6">
          {/* QR Display or Scanner */}
          <div className="border rounded-lg overflow-hidden bg-white p-6 flex justify-center">
            {mode === "show" ? (
              <div className="flex flex-col items-center">
                {/* In a real app, use a QR code generation library */}
                <div className="w-48 h-48 bg-gray-100 flex items-center justify-center border">
                  <QrCode size={120} className="text-khwela-blue" />
                </div>
                <p className="text-sm text-khwela-slate mt-3 text-center">
                  {type === "driver" 
                    ? "Ask rider to scan this code to verify payment" 
                    : "Show this code to the driver to verify payment"}
                </p>
              </div>
            ) : (
              <div className="w-full max-w-md">
                {verificationStatus === "pending" ? (
                  <div className="space-y-4">
                    <div className="border-2 border-dashed border-khwela-blue/50 rounded-lg p-6 aspect-square flex flex-col items-center justify-center">
                      <ScanLine size={64} className="text-khwela-blue/60 mb-3" />
                      <p className="text-khwela-slate text-center">
                        {/* In a real app, this would activate the device camera */}
                        Position the QR code within this area to scan
                      </p>
                    </div>
                    {/* Simulate scanning for demo purposes */}
                    <Button 
                      className="w-full bg-khwela-blue hover:bg-khwela-blue/90"
                      onClick={handleScan}
                    >
                      Simulate Scan
                    </Button>
                  </div>
                ) : verificationStatus === "success" ? (
                  <div className="bg-green-50 p-6 rounded-lg flex flex-col items-center">
                    <CheckCircle size={64} className="text-green-500 mb-3" />
                    <h3 className="font-semibold text-green-800 text-xl mb-1">Verification Successful</h3>
                    <p className="text-green-600 text-center">
                      {type === "driver" 
                        ? "Rider's payment has been verified" 
                        : "Driver's identity has been verified"}
                    </p>
                    <Button className="mt-4 bg-green-600 hover:bg-green-700">
                      {type === "driver" ? "Start Trip" : "Enjoy Your Ride"} <ArrowRight size={16} className="ml-1" />
                    </Button>
                  </div>
                ) : (
                  <div className="bg-red-50 p-6 rounded-lg flex flex-col items-center">
                    <XCircle size={64} className="text-red-500 mb-3" />
                    <h3 className="font-semibold text-red-800 text-xl mb-1">Verification Failed</h3>
                    <p className="text-red-600 text-center">
                      Unable to verify the QR code. Please try again or contact support.
                    </p>
                    <Button className="mt-4 bg-khwela-blue hover:bg-khwela-blue/90" onClick={() => setVerificationStatus("pending")}>
                      Try Again
                    </Button>
                  </div>
                )}
              </div>
            )}
          </div>
          
          {/* Toggle Button */}
          <Button 
            variant="outline" 
            className="w-full border-khwela-blue text-khwela-blue"
            onClick={toggleMode}
          >
            {mode === "show" ? (
              <>
                <ScanLine size={16} className="mr-1" />
                Switch to Scanner Mode
              </>
            ) : (
              <>
                <QrCode size={16} className="mr-1" />
                Show My QR Code
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default QRVerification;
