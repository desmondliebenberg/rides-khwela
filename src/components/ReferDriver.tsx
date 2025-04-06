
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { 
  Users, 
  CheckCircle, 
  Copy, 
  Share2, 
  Clock, 
  ChevronRight,
  Award,
  Wallet,
  ArrowRight
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ReferDriver = () => {
  const [referralLink, setReferralLink] = useState("https://khwela.app/ref/DRIVER12345");
  const [copied, setCopied] = useState(false);
  const [sharedEmail, setSharedEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShareEmail = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate email sending
    setTimeout(() => {
      setEmailSent(true);
      setTimeout(() => {
        setEmailSent(false);
        setSharedEmail("");
      }, 3000);
    }, 1000);
  };

  // Sample referral data
  const referrals = [
    { name: "Thabo Mbeki", status: "pending", trips: 6, maxTrips: 10 },
    { name: "Nomsa Khumalo", status: "completed", trips: 10, maxTrips: 10 },
    { name: "Jacob Zuma", status: "pending", trips: 2, maxTrips: 10 },
    { name: "Sipho Dlamini", status: "completed", trips: 10, maxTrips: 10 },
  ];

  // Calculate earnings
  const completedReferrals = referrals.filter(ref => ref.status === "completed").length;
  const earnings = completedReferrals * 500;

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="h-20 w-20 bg-khwela-light rounded-full flex items-center justify-center">
              <Users size={36} className="text-khwela-blue" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-khwela-blue mb-4">
            Refer Drivers & Earn R500
          </h1>
          <p className="text-lg text-khwela-slate mb-6 max-w-2xl mx-auto">
            Share the opportunity with other drivers and earn R500 for each successful referral.
            It's easy to get started.
          </p>
        </div>

        {/* How It Works */}
        <div className="max-w-5xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-center text-khwela-blue mb-8">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="bg-white rounded-lg p-6 shadow-md h-full">
                <div className="h-12 w-12 bg-khwela-light rounded-full flex items-center justify-center mb-4">
                  <Share2 size={24} className="text-khwela-blue" />
                </div>
                <h3 className="text-lg font-semibold text-khwela-blue mb-2">Share Your Link</h3>
                <p className="text-khwela-slate">
                  Share your unique referral link with other drivers via WhatsApp, SMS, email, or social media.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                <ArrowRight size={24} className="text-khwela-blue" />
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-lg p-6 shadow-md h-full">
                <div className="h-12 w-12 bg-khwela-light rounded-full flex items-center justify-center mb-4">
                  <CheckCircle size={24} className="text-khwela-blue" />
                </div>
                <h3 className="text-lg font-semibold text-khwela-blue mb-2">They Complete 10 Trips</h3>
                <p className="text-khwela-slate">
                  Your referred driver signs up using your link and completes 10 trips within 30 days.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                <ArrowRight size={24} className="text-khwela-blue" />
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md h-full">
              <div className="h-12 w-12 bg-khwela-light rounded-full flex items-center justify-center mb-4">
                <Wallet size={24} className="text-khwela-blue" />
              </div>
              <h3 className="text-lg font-semibold text-khwela-blue mb-2">You Get Paid R500</h3>
              <p className="text-khwela-slate">
                Once they complete 10 trips, R500 is instantly added to your wallet. You can cash out immediately.
              </p>
            </div>
          </div>
        </div>

        {/* Sharing Tools */}
        <div className="max-w-3xl mx-auto bg-white rounded-xl p-8 shadow-md mb-16">
          <h2 className="text-xl font-bold text-khwela-blue mb-6">Your Referral Link</h2>
          
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="flex-grow flex items-center border border-gray-300 rounded-lg overflow-hidden bg-gray-50">
                <div className="px-4 py-3 truncate flex-grow">
                  <span className="text-khwela-slate">{referralLink}</span>
                </div>
              </div>
              <Button 
                className={`${copied ? 'bg-green-600' : 'bg-khwela-blue'} text-white hover:bg-opacity-90`}
                onClick={handleCopyLink}
              >
                {copied ? (
                  <><CheckCircle size={16} className="mr-2" /> Copied!</>
                ) : (
                  <><Copy size={16} className="mr-2" /> Copy Link</>
                )}
              </Button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            {/* Share via Email */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-khwela-blue mb-3">Share via Email</h3>
              <form onSubmit={handleShareEmail} className="space-y-3">
                <Input 
                  placeholder="Friend's email address" 
                  type="email" 
                  value={sharedEmail}
                  onChange={(e) => setSharedEmail(e.target.value)}
                  required
                />
                <Button 
                  type="submit" 
                  className={`w-full ${emailSent ? 'bg-green-600' : 'bg-khwela-blue'} text-white hover:bg-opacity-90`}
                  disabled={emailSent}
                >
                  {emailSent ? (
                    <><CheckCircle size={16} className="mr-2" /> Email Sent!</>
                  ) : (
                    "Send Invitation"
                  )}
                </Button>
              </form>
            </div>
            
            {/* Share on Social */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-khwela-blue mb-3">Share on Social</h3>
              <div className="grid grid-cols-2 gap-3">
                <Button 
                  variant="outline" 
                  className="border-khwela-blue text-khwela-blue hover:bg-khwela-light"
                >
                  <img src="https://cdn-icons-png.flaticon.com/512/124/124034.png" alt="WhatsApp" className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
                <Button 
                  variant="outline" 
                  className="border-khwela-blue text-khwela-blue hover:bg-khwela-light"
                >
                  <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" className="w-4 h-4 mr-2" />
                  Facebook
                </Button>
                <Button 
                  variant="outline" 
                  className="border-khwela-blue text-khwela-blue hover:bg-khwela-light"
                >
                  <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" className="w-4 h-4 mr-2" />
                  Instagram
                </Button>
                <Button 
                  variant="outline" 
                  className="border-khwela-blue text-khwela-blue hover:bg-khwela-light"
                >
                  <Share2 size={16} className="mr-2" />
                  More Options
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Referral Status */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-center text-khwela-blue mb-8">Your Referrals</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="bg-khwela-light/50 border-khwela-blue">
              <CardContent className="p-6">
                <h3 className="text-sm font-medium text-khwela-slate mb-1">Total Referrals</h3>
                <div className="text-3xl font-bold text-khwela-blue">{referrals.length}</div>
              </CardContent>
            </Card>
            
            <Card className="bg-amber-50 border-amber-200">
              <CardContent className="p-6">
                <h3 className="text-sm font-medium text-amber-700 mb-1">Pending</h3>
                <div className="text-3xl font-bold text-amber-600">
                  {referrals.filter(r => r.status === "pending").length}
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-6">
                <h3 className="text-sm font-medium text-green-700 mb-1">Completed</h3>
                <div className="text-3xl font-bold text-green-600">{completedReferrals}</div>
              </CardContent>
            </Card>
            
            <Card className="bg-yellow-50 border-yellow-200">
              <CardContent className="p-6">
                <h3 className="text-sm font-medium text-yellow-700 mb-1">Total Earned</h3>
                <div className="text-3xl font-bold text-yellow-600">R{earnings}</div>
              </CardContent>
            </Card>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6 bg-gray-50 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-khwela-blue">Referral Progress</h3>
            </div>
            
            <div className="divide-y divide-gray-100">
              {referrals.map((referral, index) => (
                <div key={index} className="p-6">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-3">
                    <div className="flex items-center mb-2 md:mb-0">
                      <div className="w-10 h-10 rounded-full bg-khwela-light flex items-center justify-center text-khwela-blue font-bold mr-3">
                        {referral.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-semibold text-khwela-blue">{referral.name}</h4>
                        <div className="flex items-center text-sm">
                          {referral.status === "completed" ? (
                            <span className="text-green-600 flex items-center">
                              <CheckCircle size={14} className="mr-1" /> Completed
                            </span>
                          ) : (
                            <span className="text-amber-600 flex items-center">
                              <Clock size={14} className="mr-1" /> In progress
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div className="w-full md:w-1/3">
                      {referral.status === "pending" && (
                        <div className="space-y-1">
                          <div className="flex justify-between text-xs text-khwela-slate">
                            <span>{referral.trips} trips completed</span>
                            <span>{referral.trips} / {referral.maxTrips}</span>
                          </div>
                          <Progress value={(referral.trips / referral.maxTrips) * 100} className="h-2" />
                        </div>
                      )}
                      
                      {referral.status === "completed" && (
                        <div className="flex justify-end">
                          <span className="text-green-600 font-semibold">R500 paid</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Referral Bonuses */}
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-khwela-blue to-khwela-dark text-white rounded-xl p-8 shadow-lg">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Award size={28} className="text-khwela-gold" />
            <h2 className="text-2xl font-bold">Bonus Rewards</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="text-3xl font-bold text-khwela-gold mb-2">5+</div>
              <h3 className="text-lg font-semibold mb-3">Silver Referrer</h3>
              <p className="text-white/80 mb-4">Refer 5+ drivers in a month</p>
              <div className="space-y-2">
                <div className="flex items-start">
                  <CheckCircle size={16} className="text-khwela-gold mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-white/80 text-sm">Extra R250 bonus per driver</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={16} className="text-khwela-gold mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-white/80 text-sm">Priority support access</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="text-3xl font-bold text-khwela-gold mb-2">10+</div>
              <h3 className="text-lg font-semibold mb-3">Gold Referrer</h3>
              <p className="text-white/80 mb-4">Refer 10+ drivers in a month</p>
              <div className="space-y-2">
                <div className="flex items-start">
                  <CheckCircle size={16} className="text-khwela-gold mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-white/80 text-sm">Extra R500 bonus per driver</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={16} className="text-khwela-gold mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-white/80 text-sm">Automatic Gold Badge upgrade</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="text-3xl font-bold text-khwela-gold mb-2">25+</div>
              <h3 className="text-lg font-semibold mb-3">Platinum Referrer</h3>
              <p className="text-white/80 mb-4">Refer 25+ drivers in 3 months</p>
              <div className="space-y-2">
                <div className="flex items-start">
                  <CheckCircle size={16} className="text-khwela-gold mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-white/80 text-sm">R15,000 cash bonus</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={16} className="text-khwela-gold mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-white/80 text-sm">Official Khwela brand ambassador</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Button className="bg-khwela-gold text-khwela-blue hover:bg-khwela-gold/90">
              View Full Reward Program <ChevronRight size={16} className="ml-1" />
            </Button>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto mt-16">
          <h2 className="text-2xl font-bold text-center text-khwela-blue mb-8">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-khwela-blue mb-2">Who can I refer?</h3>
              <p className="text-khwela-slate">
                You can refer any driver who is not yet registered on the Khwela platform. They must be eligible to drive in South Africa with a valid driver's license and documentation.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-khwela-blue mb-2">When do I get paid?</h3>
              <p className="text-khwela-slate">
                You will be paid R500 as soon as your referred driver completes their 10th trip. The payment is automatic and will appear instantly in your Khwela wallet.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-khwela-blue mb-2">Is there a limit to how many drivers I can refer?</h3>
              <p className="text-khwela-slate">
                No, there is no limit! You can refer as many drivers as you want and earn R500 for each successful referral.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-khwela-blue mb-2">What if my referred driver doesn't complete 10 trips?</h3>
              <p className="text-khwela-slate">
                The 10 trips must be completed within 30 days of signing up. If they don't complete 10 trips within this timeframe, the referral will expire and no bonus will be paid.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto text-center mt-16">
          <h2 className="text-2xl font-bold text-khwela-blue mb-4">Start Sharing & Earning Today</h2>
          <p className="text-lg text-khwela-slate mb-8">
            The more drivers you refer, the more you can earn. Get started now!
          </p>
          <Button 
            className="bg-khwela-blue text-white hover:bg-khwela-blue/90 text-lg px-8"
            onClick={handleCopyLink}
          >
            <Share2 size={18} className="mr-2" /> Copy Your Referral Link
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ReferDriver;
