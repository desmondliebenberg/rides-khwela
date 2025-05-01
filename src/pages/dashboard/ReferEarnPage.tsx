
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gift, Copy, Share2, Users, Check, CreditCard, MessageSquare } from "lucide-react";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

interface ReferEarnPageProps {
  userType: "rider" | "driver";
}

const ReferEarnPage = ({ userType }: ReferEarnPageProps) => {
  const navigate = useNavigate();
  
  // Check if user is logged in with the correct role
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("khwela-auth") === "true";
    const storedUserType = localStorage.getItem("khwela-user-type");
    
    if (!isLoggedIn || storedUserType !== userType) {
      navigate("/login");
    }
  }, [navigate, userType]);

  const referralCode = "KHWELA2023";
  const referralLink = `https://khwela.co.za/refer?code=${referralCode}`;
  
  // Simulated referral data
  const referrals = [
    { id: 1, name: "Jane Smith", status: "completed", date: "2023-04-15", reward: "R100.00" },
    { id: 2, name: "Michael Brown", status: "pending", date: "2023-04-20", reward: "R100.00" },
  ];

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: `${type} Copied!`,
      description: `The ${type.toLowerCase()} has been copied to your clipboard.`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-khwela-blue">Refer & Earn</h1>
            <p className="text-khwela-slate mt-1">Invite friends and earn rewards</p>
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
          {/* Referral Card */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader className="bg-khwela-light/50 border-b pb-3">
                <CardTitle className="flex items-center text-khwela-blue">
                  <Gift className="mr-2" size={20} />
                  Your Referral Program
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="bg-gradient-to-r from-khwela-blue to-khwela-dark p-6 rounded-lg text-white mb-6">
                  <h3 className="text-xl font-semibold mb-2">Invite Friends, Earn Rewards</h3>
                  <p className="text-sm mb-4">
                    {userType === "driver" 
                      ? "For every new driver you refer who completes 10 rides, you earn R100!" 
                      : "For every new rider you refer who completes 5 rides, you earn R50!"}
                  </p>
                  <div className="flex items-center bg-white/20 p-2 rounded">
                    <span className="text-sm mr-2">Your Reward:</span>
                    <span className="font-bold">
                      {userType === "driver" ? "R100 per referral" : "R50 per referral"}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-khwela-blue mb-1">Your Referral Code</label>
                    <div className="flex">
                      <Input value={referralCode} readOnly className="bg-gray-50" />
                      <Button 
                        variant="outline" 
                        className="ml-2 border-khwela-blue text-khwela-blue"
                        onClick={() => handleCopy(referralCode, "Code")}
                      >
                        <Copy size={16} />
                      </Button>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-khwela-blue mb-1">Referral Link</label>
                    <div className="flex">
                      <Input value={referralLink} readOnly className="bg-gray-50" />
                      <Button 
                        variant="outline" 
                        className="ml-2 border-khwela-blue text-khwela-blue"
                        onClick={() => handleCopy(referralLink, "Link")}
                      >
                        <Copy size={16} />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <h3 className="font-medium text-khwela-blue mb-3">Share with</h3>
                    <div className="grid grid-cols-4 gap-2">
                      <Button variant="outline" className="flex flex-col items-center h-auto py-3">
                        <MessageSquare size={18} className="mb-1" />
                        <span className="text-xs">WhatsApp</span>
                      </Button>
                      <Button variant="outline" className="flex flex-col items-center h-auto py-3">
                        <MessageSquare size={18} className="mb-1" />
                        <span className="text-xs">SMS</span>
                      </Button>
                      <Button variant="outline" className="flex flex-col items-center h-auto py-3">
                        <MessageSquare size={18} className="mb-1" />
                        <span className="text-xs">Email</span>
                      </Button>
                      <Button variant="outline" className="flex flex-col items-center h-auto py-3">
                        <Share2 size={18} className="mb-1" />
                        <span className="text-xs">More</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Referrals Status */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader className="bg-khwela-light/50 border-b pb-3">
                <CardTitle className="flex items-center text-khwela-blue">
                  <Users className="mr-2" size={20} />
                  Your Referrals
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="text-center p-4 mb-4 bg-khwela-light/30 rounded-lg">
                  <h3 className="font-semibold text-khwela-blue mb-1">Total Earnings</h3>
                  <p className="text-2xl font-bold text-khwela-blue">
                    {userType === "driver" ? "R100.00" : "R50.00"}
                  </p>
                  <p className="text-xs text-khwela-slate mt-1">From 1 successful referral</p>
                </div>
                
                <div className="space-y-4">
                  {referrals.map((ref) => (
                    <div key={ref.id} className="border rounded-lg p-3">
                      <div className="flex justify-between items-start mb-1">
                        <p className="font-medium text-khwela-blue">{ref.name}</p>
                        <span className="text-sm font-medium text-khwela-blue">{ref.reward}</span>
                      </div>
                      <div className="flex justify-between text-xs text-khwela-slate">
                        <p>{ref.date}</p>
                        <div className="flex items-center">
                          {ref.status === "completed" ? (
                            <>
                              <Check size={12} className="text-green-600 mr-1" />
                              <span className="text-green-600">Completed</span>
                            </>
                          ) : (
                            <span className="text-amber-500">Pending</span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  <Button variant="outline" className="w-full border-khwela-blue text-khwela-blue">
                    View All Referrals
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ReferEarnPage;
