import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";
import { Car, LogIn, Smartphone, User, ShieldAlert } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";

// Simulated auth - in a real app, this would be replaced with proper auth state management
const useAuth = () => {
  // Check localStorage for a simulated auth token
  const isLoggedIn = localStorage.getItem("khwela-auth") === "true";
  const userType = localStorage.getItem("khwela-user-type") || "";
  
  const login = (type: string, name: string = "User") => {
    localStorage.setItem("khwela-auth", "true");
    localStorage.setItem("khwela-user-type", type);
    localStorage.setItem("khwela-user-name", name);
  };
  
  const logout = () => {
    localStorage.removeItem("khwela-auth");
    localStorage.removeItem("khwela-user-type");
    localStorage.removeItem("khwela-user-name");
  };
  
  return { isLoggedIn, userType, login, logout };
};

const LoginForm = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const userTypeParam = searchParams.get('user');
  
  const [userType, setUserType] = useState<"rider" | "driver" | "admin">(
    userTypeParam === "rider" ? "rider" : 
    userTypeParam === "admin" ? "admin" : "driver"
  );
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isOtpMode, setIsOtpMode] = useState(false);
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [showBiometricPrompt, setShowBiometricPrompt] = useState(false);
  const [isTwoFactorEnabled, setIsTwoFactorEnabled] = useState(true);
  const [isAdminMode, setIsAdminMode] = useState(userTypeParam === "admin");
  const [adminCode, setAdminCode] = useState("");

  useEffect(() => {
    if (userTypeParam === "rider") {
      setUserType("rider");
      setIsAdminMode(false);
    } else if (userTypeParam === "admin") {
      setUserType("admin");
      setIsAdminMode(true);
    }
  }, [userTypeParam]);

  const handleUserTypeChange = (value: string) => {
    setUserType(value as "rider" | "driver" | "admin");
    setIsAdminMode(value === "admin");
  };

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

  const simulateBiometricAuth = () => {
    setShowBiometricPrompt(true);
    // In a real app, this would trigger native biometric authentication
    setTimeout(() => {
      setShowBiometricPrompt(false);
      handleLogin();
    }, 2000);
  };

  const verifyOtp = () => {
    // Simulate OTP verification
    const { login } = useAuth();
    const defaultName = userType === "rider" ? "Rider" : "Driver";
    login(userType, userName || defaultName);

    const destination = userType === "rider" ? "/rider-dashboard" : "/driver-dashboard";
    navigate(destination);
  };

  const handleLogin = () => {
    const { login } = useAuth();
    
    // Admin authentication check
    if (userType === "admin") {
      // In a real app, this would be a secure check against a backend
      // For demo purposes, we're using a simple code check
      if (adminCode === "admin123") {
        login("admin", "Admin User");
        toast({
          title: "Admin Login Successful",
          description: "Welcome to the admin dashboard.",
        });
        navigate("/admin-dashboard");
        return;
      } else {
        toast({
          title: "Invalid Admin Code",
          description: "The admin code you entered is incorrect.",
          variant: "destructive",
        });
        return;
      }
    }
    
    // Regular user login
    const defaultName = userType === "rider" ? "Rider" : "Driver";
    login(userType, userName || defaultName);

    // Redirect based on user type
    const destination = userType === "rider" ? "/rider-dashboard" : "/driver-dashboard";
    navigate(destination);
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <div className="h-16 w-16 bg-khwela-light rounded-full flex items-center justify-center">
            <Car className="text-khwela-blue" size={32} />
          </div>
        </div>
        <h2 className="mt-6 text-center text-3xl font-bold text-khwela-blue dark:text-khwela-light">
          Log in to Khwela
        </h2>
        <p className="mt-2 text-center text-khwela-slate dark:text-gray-400">
          Safe and affordable rides across South Africa
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white dark:bg-gray-800 py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {/* User Type Selection */}
          <div className="mb-6">
            <Tabs 
              defaultValue={userType} 
              value={userType} 
              onValueChange={handleUserTypeChange}
              className="w-full"
            >
              <TabsList className="grid grid-cols-3 w-full">
                <TabsTrigger value="rider" className="flex items-center justify-center">
                  <User size={16} className="mr-2" />
                  Rider
                </TabsTrigger>
                <TabsTrigger value="driver" className="flex items-center justify-center">
                  <Car size={16} className="mr-2" />
                  Driver
                </TabsTrigger>
                <TabsTrigger value="admin" className="flex items-center justify-center">
                  <ShieldAlert size={16} className="mr-2" />
                  Admin
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {/* Biometric Authentication Prompt */}
          {showBiometricPrompt && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded-lg w-80 text-center">
                <div className="mb-4 flex justify-center">
                  <User size={48} className="text-khwela-blue" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Facial Verification</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Please look directly at your camera to verify your identity.
                </p>
                <div className="animate-pulse h-2 bg-khwela-blue rounded-full mb-4"></div>
                <Button
                  variant="outline"
                  onClick={() => setShowBiometricPrompt(false)}
                  className="mt-2"
                >
                  Cancel
                </Button>
              </div>
            </div>
          )}

          {!isOtpMode ? (
            <form className="space-y-6">
              <div>
                <Label htmlFor="name">Your Name</Label>
                <div className="mt-1">
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
              </div>
              
              {isAdminMode && (
                <div>
                  <Label htmlFor="adminCode">Admin Security Code</Label>
                  <div className="mt-1">
                    <Input
                      id="adminCode"
                      name="adminCode"
                      type="password"
                      placeholder="Enter admin code"
                      value={adminCode}
                      onChange={(e) => setAdminCode(e.target.value)}
                      required
                      className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                  </div>
                </div>
              )}
              
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
                    className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
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
                    className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
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
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-khwela-slate dark:text-gray-300">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <Link to="/forgot-password" className="font-medium text-khwela-blue hover:text-khwela-blue/80 dark:text-khwela-light dark:hover:text-khwela-light/80">
                    Forgot your password?
                  </Link>
                </div>
              </div>

              <div className="space-y-4">
                <Button
                  type="button"
                  className="w-full bg-khwela-blue hover:bg-khwela-blue/90 text-white"
                  onClick={handleLogin}
                >
                  <LogIn size={16} className="mr-2" />
                  Sign In with Password
                </Button>
                
                {userType === "driver" && !isAdminMode && (
                  <Button
                    type="button"
                    className="w-full bg-khwela-gold text-khwela-dark hover:bg-khwela-gold/90"
                    onClick={simulateBiometricAuth}
                  >
                    <User size={16} className="mr-2" />
                    Biometric Verification
                  </Button>
                )}
                
                {!isAdminMode && (
                  <>
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-khwela-slate dark:bg-gray-800 dark:text-gray-400">Or</span>
                      </div>
                    </div>
                    
                    <Button
                      type="button"
                      variant="outline"
                      className="w-full border-khwela-blue text-khwela-blue hover:bg-khwela-light dark:border-khwela-light dark:text-khwela-light dark:hover:bg-gray-700"
                      onClick={requestOtp}
                    >
                      <Smartphone size={16} className="mr-2" />
                      Sign In with OTP
                    </Button>
                  </>
                )}
              </div>
            </form>
          ) : (
            <div className="space-y-6">
              <div>
                <Label htmlFor="otp">Enter Verification Code</Label>
                <p className="text-sm text-khwela-slate dark:text-gray-400 mt-1">
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
                        className="h-14 text-xl text-center w-1/4 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <Button
                  type="button"
                  className="w-full bg-khwela-blue hover:bg-khwela-blue/90 text-white"
                  onClick={verifyOtp}
                  disabled={otp.some(digit => digit === "")}
                >
                  Verify & Sign In
                </Button>
                
                <div className="text-center">
                  <button
                    type="button"
                    className="text-sm font-medium text-khwela-blue hover:text-khwela-blue/80 dark:text-khwela-light dark:hover:text-khwela-light/80"
                    onClick={() => setIsOtpMode(false)}
                  >
                    Back to Login
                  </button>
                </div>
                
                <div className="text-center">
                  <button
                    type="button"
                    className="text-sm font-medium text-khwela-blue hover:text-khwela-blue/80 dark:text-khwela-light dark:hover:text-khwela-light/80"
                  >
                    Didn't receive code? Resend
                  </button>
                </div>
              </div>
            </div>
          )}
          
          {!isAdminMode && (
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-khwela-slate dark:bg-gray-800 dark:text-gray-400">New to Khwela?</span>
                </div>
              </div>
              
              <div className="mt-6">
                <Button
                  type="button"
                  variant="outline"
                  className="w-full border-khwela-gold text-khwela-blue bg-khwela-gold/10 hover:bg-khwela-gold/20 dark:text-khwela-light dark:border-khwela-gold/70 dark:bg-khwela-gold/5 dark:hover:bg-khwela-gold/10"
                  asChild
                >
                  <Link to={userType === "rider" ? "/rider-signup" : "/signup"}>
                    Sign Up as {userType === "rider" ? "Rider" : "Driver"}
                  </Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
