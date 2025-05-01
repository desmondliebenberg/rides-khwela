
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Phone, Mail, Shield, Edit2, Plus, MapPin } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

interface AccountPageProps {
  userType: "rider" | "driver";
}

const AccountPage = ({ userType }: AccountPageProps) => {
  const navigate = useNavigate();
  
  // Check if user is logged in with the correct role
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("khwela-auth") === "true";
    const storedUserType = localStorage.getItem("khwela-user-type");
    
    if (!isLoggedIn || storedUserType !== userType) {
      navigate("/login");
    }
  }, [navigate, userType]);

  // Simulated user data
  const userName = localStorage.getItem("khwela-user-name") || "John Doe";
  const userEmail = "john.doe@example.com";
  const userPhone = "+27 12 345 6789";
  const userAddresses = [
    { id: 1, name: "Home", address: "123 Main Street, Sandton, Johannesburg" },
    { id: 2, name: "Work", address: "456 Business Park, Rosebank, Johannesburg" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-khwela-blue">Manage Account</h1>
            <p className="text-khwela-slate mt-1">Update your personal information and preferences</p>
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
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader className="bg-khwela-light/50 border-b pb-3">
                <CardTitle className="flex items-center text-khwela-blue">
                  <User className="mr-2" size={20} />
                  Profile
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="relative">
                    <Avatar className="h-24 w-24 border-2 border-khwela-light">
                      <AvatarFallback className="bg-khwela-gold text-khwela-blue text-xl">
                        {userName.split(' ').map(name => name[0]).join('').toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <Button 
                      size="icon" 
                      className="absolute bottom-0 right-0 h-8 w-8 rounded-full bg-khwela-blue text-white hover:bg-khwela-blue/90"
                    >
                      <Edit2 size={14} />
                    </Button>
                  </div>
                  <h3 className="font-semibold text-khwela-blue text-lg mt-3">{userName}</h3>
                  <p className="text-sm text-khwela-slate capitalize">{userType}</p>
                  
                  {userType === "driver" && (
                    <div className="flex mt-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className="w-4 h-4 text-yellow-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                      ))}
                      <span className="ml-1 text-sm text-khwela-slate">4.8</span>
                    </div>
                  )}
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-khwela-slate mb-1">Full Name</label>
                    <div className="flex">
                      <Input defaultValue={userName} className="pr-10" />
                      <Edit2 size={16} className="text-khwela-slate absolute right-4 transform translate-y-3" />
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone size={16} className="text-khwela-blue mr-2" />
                    <span className="text-khwela-slate">{userPhone}</span>
                    <Button variant="ghost" size="sm" className="ml-auto h-8 px-2">
                      <Edit2 size={14} />
                    </Button>
                  </div>
                  
                  <div className="flex items-center">
                    <Mail size={16} className="text-khwela-blue mr-2" />
                    <span className="text-khwela-slate">{userEmail}</span>
                    <Button variant="ghost" size="sm" className="ml-auto h-8 px-2">
                      <Edit2 size={14} />
                    </Button>
                  </div>
                  
                  <Button className="w-full bg-khwela-blue hover:bg-khwela-blue/90">
                    Update Profile
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Saved Locations */}
          <div className="lg:col-span-2">
            <Card className="mb-6">
              <CardHeader className="bg-khwela-light/50 border-b pb-3">
                <CardTitle className="flex items-center text-khwela-blue">
                  <MapPin className="mr-2" size={20} />
                  Saved Locations
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {userAddresses.map((addr) => (
                    <div key={addr.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-center mb-1">
                        <h3 className="font-medium text-khwela-blue">{addr.name}</h3>
                        <Button variant="ghost" size="sm" className="h-8 px-2">
                          <Edit2 size={14} />
                        </Button>
                      </div>
                      <p className="text-khwela-slate text-sm">{addr.address}</p>
                    </div>
                  ))}
                  
                  <Button variant="outline" className="w-full border-dashed border-khwela-blue text-khwela-blue">
                    <Plus size={16} className="mr-2" />
                    Add New Location
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            {userType === "driver" && (
              <Card>
                <CardHeader className="bg-khwela-light/50 border-b pb-3">
                  <CardTitle className="flex items-center text-khwela-blue">
                    <Shield className="mr-2" size={20} />
                    Identity Verification
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex items-center bg-green-50 p-4 rounded-lg border border-green-100">
                      <div className="rounded-full bg-green-100 p-2 mr-3">
                        <Shield className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-green-700">Verified Driver</h3>
                        <p className="text-sm text-green-600">Your identity has been verified</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <Button variant="outline" className="w-full">View Documents</Button>
                      <Button variant="outline" className="w-full">Update Documents</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AccountPage;
