
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";
import { Car, LogIn, Smartphone } from "lucide-react";

const LoginForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isOtpMode, setIsOtpMode] = useState(false);
  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) {
      value = value.substring(0, 1);
    }
    
    if (value.match(/^[0-9]$/)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      
      // Auto-focus next input
      if (index < 3 && value !== "") {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        if (nextInput) {
          nextInput.focus();
        }
      }
    } else if (value === "") {
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    // Handle backspace
    if (e.key === "Backspace" && index > 0 && otp[index] === "") {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      if (prevInput) {
        prevInput.focus();
      }
    }
  };

  const requestOtp = () => {
    // Simulate OTP request
    setIsOtpMode(true);
  };

  const verifyOtp = () => {
    // Simulate OTP verification
    window.location.href = "/dashboard";
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <div className="h-16 w-16 bg-khwela-light rounded-full flex items-center justify-center">
            <Car className="text-khwela-blue" size={32} />
          </div>
        </div>
        <h2 className="mt-6 text-center text-3xl font-bold text-khwela-blue">
          Driver Login
        </h2>
        <p className="mt-2 text-center text-khwela-slate">
          {isOtpMode 
            ? "We've sent a verification code to your phone" 
            : "Enter your credentials to access your account"}
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {!isOtpMode ? (
            <form className="space-y-6">
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <div className="mt-1">
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="e.g. 072 123 4567"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="password">Password</Label>
                <div className="mt-1">
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Checkbox
                    id="remember-me"
                    checked={rememberMe}
                    onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-khwela-slate">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <Link to="/forgot-password" className="font-medium text-khwela-blue hover:text-khwela-blue/80">
                    Forgot your password?
                  </Link>
                </div>
              </div>

              <div className="space-y-4">
                <Button
                  type="button"
                  className="w-full bg-khwela-blue hover:bg-khwela-blue/90"
                  onClick={requestOtp}
                >
                  <LogIn size={16} className="mr-2" />
                  Sign In with Password
                </Button>
                
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-khwela-slate">Or</span>
                  </div>
                </div>
                
                <Button
                  type="button"
                  variant="outline"
                  className="w-full border-khwela-blue text-khwela-blue hover:bg-khwela-light"
                  onClick={requestOtp}
                >
                  <Smartphone size={16} className="mr-2" />
                  Sign In with OTP
                </Button>
              </div>
            </form>
          ) : (
            <div className="space-y-6">
              <div>
                <Label htmlFor="otp">Enter Verification Code</Label>
                <p className="text-sm text-khwela-slate mt-1">
                  We've sent a 4-digit code to {phoneNumber}
                </p>
                <div className="mt-3">
                  <div className="flex items-center justify-between gap-2">
                    {[0, 1, 2, 3].map((index) => (
                      <Input
                        key={index}
                        id={`otp-${index}`}
                        type="text"
                        inputMode="numeric"
                        maxLength={1}
                        value={otp[index]}
                        onChange={(e) => handleOtpChange(index, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                        className="h-14 text-xl text-center w-1/4"
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <Button
                  type="button"
                  className="w-full bg-khwela-blue hover:bg-khwela-blue/90"
                  onClick={verifyOtp}
                  disabled={otp.some(digit => digit === "")}
                >
                  Verify & Sign In
                </Button>
                
                <div className="text-center">
                  <button
                    type="button"
                    className="text-sm font-medium text-khwela-blue hover:text-khwela-blue/80"
                    onClick={() => setIsOtpMode(false)}
                  >
                    Back to Login
                  </button>
                </div>
                
                <div className="text-center">
                  <button
                    type="button"
                    className="text-sm font-medium text-khwela-blue hover:text-khwela-blue/80"
                  >
                    Didn't receive code? Resend
                  </button>
                </div>
              </div>
            </div>
          )}
          
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-khwela-slate">New to Khwela?</span>
              </div>
            </div>
            
            <div className="mt-6">
              <Button
                type="button"
                variant="outline"
                className="w-full border-khwela-gold text-khwela-blue bg-khwela-gold/10 hover:bg-khwela-gold/20"
                asChild
              >
                <Link to="/signup">
                  Sign Up to Drive
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
