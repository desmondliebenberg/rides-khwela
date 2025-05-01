
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Settings, Bell, Globe, Lock, Moon, Trash, Shield } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface SettingsPageProps {
  userType: "rider" | "driver";
}

const SettingsPage = ({ userType }: SettingsPageProps) => {
  const navigate = useNavigate();
  
  // Check if user is logged in with the correct role
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("khwela-auth") === "true";
    const storedUserType = localStorage.getItem("khwela-user-type");
    
    if (!isLoggedIn || storedUserType !== userType) {
      navigate("/login");
    }
  }, [navigate, userType]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-khwela-blue">Settings</h1>
            <p className="text-khwela-slate mt-1">Manage your app preferences and account settings</p>
          </div>
          <Button 
            variant="outline" 
            className="border-khwela-blue text-khwela-blue"
            onClick={() => navigate(`/${userType}-dashboard`)}
          >
            Back to Dashboard
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* App Preferences */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader className="bg-khwela-light/50 border-b pb-3">
                <CardTitle className="flex items-center text-khwela-blue">
                  <Settings className="mr-2" size={20} />
                  App Preferences
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-khwela-blue">Dark Mode</h3>
                      <p className="text-sm text-khwela-slate">Switch to dark theme</p>
                    </div>
                    <Switch />
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="mb-4">
                      <h3 className="font-medium text-khwela-blue">Language</h3>
                      <p className="text-sm text-khwela-slate mb-2">Select your preferred language</p>
                      <Select defaultValue="english">
                        <SelectTrigger className="w-full md:w-[240px]">
                          <SelectValue placeholder="Select language" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="english">English</SelectItem>
                          <SelectItem value="zulu">isiZulu</SelectItem>
                          <SelectItem value="afrikaans">Afrikaans</SelectItem>
                          <SelectItem value="xhosa">isiXhosa</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="mb-4">
                      <h3 className="font-medium text-khwela-blue">Distance Unit</h3>
                      <p className="text-sm text-khwela-slate mb-2">Choose your preferred unit for distance</p>
                      <RadioGroup defaultValue="km" className="flex space-x-4">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="km" id="km" />
                          <Label htmlFor="km">Kilometers</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="miles" id="miles" />
                          <Label htmlFor="miles">Miles</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="mb-4">
                      <h3 className="font-medium text-khwela-blue">Currency</h3>
                      <p className="text-sm text-khwela-slate mb-2">Select your preferred currency</p>
                      <Select defaultValue="zar">
                        <SelectTrigger className="w-full md:w-[240px]">
                          <SelectValue placeholder="Select currency" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="zar">South African Rand (R)</SelectItem>
                          <SelectItem value="usd">US Dollar ($)</SelectItem>
                          <SelectItem value="eur">Euro (€)</SelectItem>
                          <SelectItem value="gbp">British Pound (£)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="bg-khwela-light/50 border-b pb-3">
                <CardTitle className="flex items-center text-khwela-blue">
                  <Bell className="mr-2" size={20} />
                  Notifications
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-khwela-blue">Push Notifications</h3>
                      <p className="text-sm text-khwela-slate">Receive push notifications</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-khwela-blue">Email Notifications</h3>
                      <p className="text-sm text-khwela-slate">Receive email notifications</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-khwela-blue">SMS Notifications</h3>
                      <p className="text-sm text-khwela-slate">Receive SMS notifications</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-khwela-blue">Marketing Communications</h3>
                      <p className="text-sm text-khwela-slate">Receive offers and promotions</p>
                    </div>
                    <Switch />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Security Settings and Delete Account */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader className="bg-khwela-light/50 border-b pb-3">
                <CardTitle className="flex items-center text-khwela-blue">
                  <Lock className="mr-2" size={20} />
                  Security
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <Button className="w-full bg-khwela-blue hover:bg-khwela-blue/90">
                    Change Password
                  </Button>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-khwela-blue">Two-Factor Authentication</h3>
                      <p className="text-sm text-khwela-slate">Enable for extra security</p>
                    </div>
                    <Switch />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-khwela-blue">Biometric Login</h3>
                      <p className="text-sm text-khwela-slate">Use fingerprint or face recognition</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <Button variant="outline" className="w-full border-khwela-blue text-khwela-blue">
                    <Shield size={16} className="mr-2" />
                    Manage Permissions
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="bg-red-50 border-b pb-3">
                <CardTitle className="flex items-center text-red-600">
                  <Trash className="mr-2" size={20} />
                  Delete Account
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-sm text-khwela-slate mb-4">
                  This action is permanent and cannot be undone. All your data will be permanently removed.
                </p>
                <Button variant="destructive" className="w-full">
                  Delete Account
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SettingsPage;
