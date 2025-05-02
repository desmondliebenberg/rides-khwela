
import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FacialVerification } from "@/types/driver-compliance";
import { Camera, User, UserCheck, AlertTriangle, CheckCircle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface FacialRecognitionProps {
  onVerificationComplete?: (success: boolean) => void;
}

const FacialRecognition = ({ onVerificationComplete }: FacialRecognitionProps) => {
  const [isCapturing, setIsCapturing] = useState(false);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [verificationStatus, setVerificationStatus] = useState<"idle" | "verifying" | "success" | "failed">("idle");
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const { toast } = useToast();

  const startCapture = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { 
          facingMode: "user",
          width: { ideal: 1280 },
          height: { ideal: 720 }
        } 
      });
      
      streamRef.current = stream;
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
        setIsCapturing(true);
      }
    } catch (error) {
      console.error("Error accessing camera:", error);
      toast({
        title: "Camera Error",
        description: "Unable to access your camera. Please ensure you've granted camera permissions.",
        variant: "destructive"
      });
    }
  };

  const stopCapture = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    
    setIsCapturing(false);
  };

  const captureImage = () => {
    if (!videoRef.current) return;
    
    const canvas = document.createElement("canvas");
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    
    const ctx = canvas.getContext("2d");
    if (ctx && videoRef.current) {
      ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
      const imageDataUrl = canvas.toDataURL("image/png");
      setCapturedImage(imageDataUrl);
      stopCapture();
      
      // Simulate facial verification process
      verifyFace(imageDataUrl);
    }
  };

  const verifyFace = (imageData: string) => {
    setVerificationStatus("verifying");
    
    // In a real app, this would call an API to verify the face
    // For this demo, we'll simulate a response after a delay
    setTimeout(() => {
      // Simulate 80% success rate for demo purposes
      const success = Math.random() < 0.8;
      
      setVerificationStatus(success ? "success" : "failed");
      
      if (onVerificationComplete) {
        onVerificationComplete(success);
      }
      
      toast({
        title: success ? "Verification Successful" : "Verification Failed",
        description: success 
          ? "Your identity has been verified. You can continue driving." 
          : "We couldn't verify your identity. Please try again or contact support.",
        variant: success ? "default" : "destructive"
      });
    }, 2000);
  };

  const resetVerification = () => {
    setCapturedImage(null);
    setVerificationStatus("idle");
  };

  return (
    <Card>
      <CardHeader className="bg-khwela-light/50 border-b pb-3">
        <CardTitle className="flex items-center text-khwela-blue">
          <User className="mr-2" size={20} />
          Driver Identity Verification
        </CardTitle>
      </CardHeader>
      
      <CardContent className="p-6">
        <div className="space-y-6">
          {/* Status message */}
          {verificationStatus === "idle" && !isCapturing && !capturedImage && (
            <div className="bg-khwela-light/30 p-4 rounded-lg">
              <p className="text-center text-khwela-slate">
                Regular identity verification helps ensure platform safety.
                Position your face in the center of the frame when prompted.
              </p>
            </div>
          )}
          
          {verificationStatus === "verifying" && (
            <div className="bg-khwela-blue/10 p-4 rounded-lg flex items-center justify-center space-x-3">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-khwela-blue"></div>
              <p className="text-khwela-blue">Verifying your identity...</p>
            </div>
          )}
          
          {verificationStatus === "success" && (
            <div className="bg-green-50 p-4 rounded-lg flex items-center">
              <CheckCircle size={24} className="text-green-500 mr-3" />
              <div>
                <h3 className="font-medium text-green-800">Verification Successful</h3>
                <p className="text-green-600 text-sm">Your identity has been confirmed</p>
              </div>
            </div>
          )}
          
          {verificationStatus === "failed" && (
            <div className="bg-red-50 p-4 rounded-lg flex items-center">
              <AlertTriangle size={24} className="text-red-500 mr-3" />
              <div>
                <h3 className="font-medium text-red-800">Verification Failed</h3>
                <p className="text-red-600 text-sm">Please try again or contact support</p>
              </div>
            </div>
          )}
          
          {/* Video/Image display area */}
          <div className="border rounded-lg overflow-hidden aspect-video bg-gray-100 relative">
            {isCapturing ? (
              <video 
                ref={videoRef}
                className="w-full h-full object-cover"
                muted
                playsInline
              />
            ) : capturedImage ? (
              <img 
                src={capturedImage} 
                alt="Captured face" 
                className="w-full h-full object-cover" 
              />
            ) : (
              <div className="flex flex-col items-center justify-center h-full p-6 text-center">
                <Camera size={48} className="text-gray-400 mb-2" />
                <p className="text-gray-500">Camera preview will appear here</p>
              </div>
            )}
            
            {/* Overlay for face positioning */}
            {isCapturing && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="border-2 border-dashed border-white/60 rounded-full w-40 h-40"></div>
              </div>
            )}
          </div>
          
          {/* Action buttons */}
          <div className="flex justify-center space-x-3">
            {!isCapturing && verificationStatus === "idle" && (
              <Button 
                onClick={startCapture}
                className="bg-khwela-blue hover:bg-khwela-blue/90"
              >
                <Camera className="mr-2" size={16} />
                Start Camera
              </Button>
            )}
            
            {isCapturing && (
              <>
                <Button 
                  onClick={stopCapture}
                  variant="outline"
                >
                  Cancel
                </Button>
                <Button 
                  onClick={captureImage}
                  className="bg-khwela-blue hover:bg-khwela-blue/90"
                >
                  Capture
                </Button>
              </>
            )}
            
            {(verificationStatus === "success" || verificationStatus === "failed") && (
              <Button 
                onClick={resetVerification}
                variant={verificationStatus === "success" ? "outline" : "default"}
                className={verificationStatus === "failed" ? "bg-khwela-blue hover:bg-khwela-blue/90" : ""}
              >
                {verificationStatus === "success" ? "Done" : "Try Again"}
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FacialRecognition;
