import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Car,
  Clock,
  MapPin,
  CreditCard,
  Star,
  Calendar,
  User,
  Shield,
  Share2,
  Copy,
  CheckCircle,
  Users
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const RiderDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [copied, setCopied] = useState(false);
  const referralLink = "https://khwela.app/ref/RIDER12345";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const upcomingRides = [
    {
      id: 1,
      from: "Canal Walk Shopping Centre",
      to: "Cape Town International Airport",
      date: "Apr 15, 2025",
      time: "10:30 AM",
      driverName: "Thabo M.",
      driverRating: 4.9,
      price: "R245",
      status: "scheduled",
    },
  ];

  const rideHistory = [
    {
      id: 1001,
      from: "V&A Waterfront",
      to: "Table Mountain",
      date: "Apr 8, 2025",
      time: "3:15 PM",
      driverName: "Sipho N.",
      driverRating: 4.8,
      price: "R120",
      status: "completed",
    },
    {
      id: 1002,
      from: "Cape Town International Airport",
      to: "The Westin Cape Town",
      date: "Apr 3, 2025",
      time: "7:45 PM",
      driverName: "Jane D.",
      driverRating: 4.7,
      price: "R280",
      status: "completed",
    },
    {
      id: 1003,
      from: "University of Cape Town",
      to: "Long Street",
      date: "Mar 28, 2025",
      time: "9:30 PM",
      driverName: "Michael R.",
      driverRating: 5.0,
      price: "R95",
      status: "completed",
    },
  ];

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-khwela-blue">Rider Dashboard</h1>
          <p className="text-khwela-slate mt-2">Welcome back, Lebo!</p>
        </div>
        <div className="mt-4 md:mt-0">
          <Button 
            onClick={() => window.location.href = "/ride"} 
            className="bg-khwela-gold text-khwela-blue hover:bg-khwela-gold/90"
          >
            <Car className="mr-2 h-4 w-4" /> Book a Ride
          </Button>
        </div>
      </div>

      <Tabs defaultValue={activeTab} onValueChange={handleTabChange} className="space-y-6">
        <TabsList className="bg-gray-100 p-1">
          <TabsTrigger value="overview" className="data-[state=active]:bg-white">
            Overview
          </TabsTrigger>
          <TabsTrigger value="rides" className="data-[state=active]:bg-white">
            My Rides
          </TabsTrigger>
          <TabsTrigger value="payment" className="data-[state=active]:bg-white">
            Payment Methods
          </TabsTrigger>
          <TabsTrigger value="profile" className="data-[state=active]:bg-white">
            Profile
          </TabsTrigger>
          <TabsTrigger value="refer" className="data-[state=active]:bg-white">
            Refer & Earn
          </TabsTrigger>
        </TabsList>

        {activeTab === "overview" && (
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Total Rides</CardTitle>
                  <CardDescription>Your lifetime rides</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2">
                    <Car className="text-khwela-blue h-5 w-5" />
                    <span className="text-3xl font-bold text-khwela-blue">24</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Favorite Destination</CardTitle>
                  <CardDescription>Where you ride most</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2">
                    <MapPin className="text-khwela-blue h-5 w-5" />
                    <span className="text-xl font-medium text-khwela-blue">V&A Waterfront</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Rider Rating</CardTitle>
                  <CardDescription>Your average rating</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2">
                    <Star className="text-yellow-500 h-5 w-5 fill-yellow-500" />
                    <span className="text-3xl font-bold text-khwela-blue">4.9</span>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Rides</CardTitle>
                <CardDescription>Your scheduled rides</CardDescription>
              </CardHeader>
              <CardContent>
                {upcomingRides.length > 0 ? (
                  <div className="space-y-4">
                    {upcomingRides.map((ride) => (
                      <div key={ride.id} className="border rounded-lg p-4">
                        <div className="flex flex-col md:flex-row md:items-center justify-between">
                          <div>
                            <div className="flex items-center space-x-2 mb-2">
                              <Calendar size={16} className="text-khwela-blue" />
                              <span className="text-sm text-khwela-slate">{ride.date} at {ride.time}</span>
                            </div>
                            <div className="flex items-start space-x-2 mb-1">
                              <MapPin size={16} className="text-green-500 mt-1" />
                              <div>
                                <span className="text-xs text-gray-500">From</span>
                                <p className="text-khwela-blue font-medium">{ride.from}</p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-2 mb-1">
                              <MapPin size={16} className="text-red-500 mt-1" />
                              <div>
                                <span className="text-xs text-gray-500">To</span>
                                <p className="text-khwela-blue font-medium">{ride.to}</p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="mt-4 md:mt-0 flex flex-col items-end">
                            <Badge variant="outline" className="mb-2 bg-blue-50">
                              <Clock size={12} className="mr-1" /> {ride.status === "scheduled" ? "Scheduled" : "En Route"}
                            </Badge>
                            <div className="text-lg font-bold text-khwela-blue">{ride.price}</div>
                            <div className="flex items-center mt-2">
                              <div className="flex items-center mr-2">
                                <Star size={12} className="text-yellow-500 fill-yellow-500" />
                                <span className="text-sm ml-1">{ride.driverRating}</span>
                              </div>
                              <span className="text-sm text-khwela-slate">{ride.driverName}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex justify-end mt-4 space-x-2">
                          <Button variant="outline" size="sm">Cancel</Button>
                          <Button size="sm" className="bg-khwela-blue">View Details</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-10">
                    <Calendar className="mx-auto h-10 w-10 text-gray-400 mb-3" />
                    <h3 className="text-lg font-medium text-khwela-blue mb-1">No Upcoming Rides</h3>
                    <p className="text-khwela-slate mb-4">You don't have any scheduled rides yet.</p>
                    <Button onClick={() => window.location.href = "/ride"}>Book a Ride</Button>
                  </div>
                )}
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Favorite Drivers</CardTitle>
                <CardDescription>Drivers you've ridden with the most</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarFallback>SM</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-khwela-blue">Sipho M.</p>
                        <div className="flex items-center">
                          <Star size={12} className="text-yellow-500 fill-yellow-500 mr-1" />
                          <span className="text-sm text-khwela-slate">4.9 • 8 rides</span>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Book Again</Button>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarFallback>JN</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-khwela-blue">Jane N.</p>
                        <div className="flex items-center">
                          <Star size={12} className="text-yellow-500 fill-yellow-500 mr-1" />
                          <span className="text-sm text-khwela-slate">4.8 • 5 rides</span>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Book Again</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        )}

        {activeTab === "rides" && (
          <TabsContent value="rides" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Ride History</CardTitle>
                <CardDescription>Your past rides</CardDescription>
              </CardHeader>
              <CardContent>
                {rideHistory.length > 0 ? (
                  <div className="space-y-4">
                    {rideHistory.map((ride) => (
                      <div key={ride.id} className="border rounded-lg p-4">
                        <div className="flex flex-col md:flex-row md:items-center justify-between">
                          <div>
                            <div className="flex items-center space-x-2 mb-2">
                              <Calendar size={16} className="text-khwela-blue" />
                              <span className="text-sm text-khwela-slate">{ride.date} at {ride.time}</span>
                            </div>
                            <div className="flex items-start space-x-2 mb-1">
                              <MapPin size={16} className="text-green-500 mt-1" />
                              <div>
                                <span className="text-xs text-gray-500">From</span>
                                <p className="text-khwela-blue font-medium">{ride.from}</p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-2">
                              <MapPin size={16} className="text-red-500 mt-1" />
                              <div>
                                <span className="text-xs text-gray-500">To</span>
                                <p className="text-khwela-blue font-medium">{ride.to}</p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="mt-4 md:mt-0 flex flex-col items-end">
                            <Badge variant="outline" className="mb-2 bg-green-50 text-green-700">
                              <CheckCircle size={12} className="mr-1" /> Completed
                            </Badge>
                            <div className="text-lg font-bold text-khwela-blue">{ride.price}</div>
                            <div className="flex items-center mt-2">
                              <div className="flex items-center mr-2">
                                <Star size={12} className="text-yellow-500 fill-yellow-500" />
                                <span className="text-sm ml-1">{ride.driverRating}</span>
                              </div>
                              <span className="text-sm text-khwela-slate">{ride.driverName}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex justify-end mt-4 space-x-2">
                          <Button variant="outline" size="sm">Report Issue</Button>
                          <Button size="sm" className="bg-khwela-blue">View Receipt</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-10">
                    <Clock className="mx-auto h-10 w-10 text-gray-400 mb-3" />
                    <h3 className="text-lg font-medium text-khwela-blue mb-1">No Ride History</h3>
                    <p className="text-khwela-slate mb-4">You haven't taken any rides yet.</p>
                    <Button onClick={() => window.location.href = "/ride"}>Book Your First Ride</Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        )}

        {activeTab === "payment" && (
          <TabsContent value="payment" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Payment Methods</CardTitle>
                <CardDescription>Manage your payment options</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg bg-gray-50">
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <CreditCard className="text-blue-600 h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium text-khwela-blue">Visa Card</p>
                        <p className="text-sm text-khwela-slate">**** **** **** 4587</p>
                      </div>
                    </div>
                    <Badge>Default</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center">
                        <CreditCard className="text-green-600 h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium text-khwela-blue">Mastercard</p>
                        <p className="text-sm text-khwela-slate">**** **** **** 1234</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">Set Default</Button>
                  </div>
                  
                  <Button className="w-full" variant="outline">
                    <CreditCard className="mr-2 h-4 w-4" /> Add Payment Method
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        )}

        {activeTab === "profile" && (
          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>Manage your profile details</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3 flex flex-col items-center">
                    <Avatar className="h-24 w-24 mb-4">
                      <AvatarFallback className="text-2xl">LD</AvatarFallback>
                    </Avatar>
                    <Button variant="outline" size="sm">Change Photo</Button>
                    
                    <div className="mt-6 bg-khwela-light p-4 rounded-md w-full">
                      <h3 className="font-semibold text-khwela-blue mb-2 flex items-center">
                        <Shield className="h-4 w-4 mr-2" /> Account Verification
                      </h3>
                      <Progress value={100} className="h-2 mb-2" />
                      <p className="text-sm text-khwela-slate">
                        Your account is fully verified!
                      </p>
                    </div>
                  </div>
                  
                  <div className="md:w-2/3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="full-name">Full Name</Label>
                        <Input id="full-name" value="Lebo Dlamini" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" value="lebo.dlamini@email.com" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" value="+27 72 123 4567" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="emergency-contact">Emergency Contact</Label>
                        <Input id="emergency-contact" value="+27 83 987 6543" className="mt-1" />
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <Label htmlFor="home-address">Home Address</Label>
                      <Input id="home-address" value="123 Main Road, Green Point, Cape Town" className="mt-1" />
                    </div>
                    
                    <div className="mt-6 flex justify-end">
                      <Button className="bg-khwela-blue">Save Changes</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Security & Privacy</CardTitle>
                <CardDescription>Manage your account security</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="current-password">Current Password</Label>
                    <Input id="current-password" type="password" value="********" className="mt-1" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="new-password">New Password</Label>
                      <Input id="new-password" type="password" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="confirm-password">Confirm Password</Label>
                      <Input id="confirm-password" type="password" className="mt-1" />
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button variant="outline" className="mr-2">Reset</Button>
                    <Button className="bg-khwela-blue">Update Password</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        )}

        {activeTab === "refer" && (
          <TabsContent value="refer" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-khwela-blue" />
                  <CardTitle>Refer Friends & Earn Rewards</CardTitle>
                </div>
                <CardDescription>Share Khwela with your friends and earn ride credits</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-khwela-light/50 rounded-lg p-6 text-center mb-6">
                  <h3 className="text-xl font-bold text-khwela-blue mb-2">Earn R50 Free Ride Credit</h3>
                  <p className="text-khwela-slate mb-4">For every friend who signs up and takes their first ride</p>
                  
                  <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 max-w-xl mx-auto">
                    <div className="flex-grow flex items-center border border-gray-300 rounded-lg overflow-hidden bg-white">
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
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-white p-5 rounded-lg border shadow-sm">
                    <div className="mb-3 flex justify-center">
                      <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <Share2 className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-center text-khwela-blue mb-2">Share</h3>
                    <p className="text-sm text-center text-khwela-slate">
                      Share your referral link with friends and family
                    </p>
                  </div>
                  
                  <div className="bg-white p-5 rounded-lg border shadow-sm">
                    <div className="mb-3 flex justify-center">
                      <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
                        <User className="h-6 w-6 text-green-600" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-center text-khwela-blue mb-2">Sign Up</h3>
                    <p className="text-sm text-center text-khwela-slate">
                      They sign up using your referral link
                    </p>
                  </div>
                  
                  <div className="bg-white p-5 rounded-lg border shadow-sm">
                    <div className="mb-3 flex justify-center">
                      <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center">
                        <CreditCard className="h-6 w-6 text-purple-600" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-center text-khwela-blue mb-2">Earn</h3>
                    <p className="text-sm text-center text-khwela-slate">
                      You both get R50 after their first ride
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-khwela-blue mb-4">Share via:</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <Button variant="outline" className="border-khwela-blue text-khwela-blue hover:bg-khwela-light">
                      <img src="https://cdn-icons-png.flaticon.com/512/124/124034.png" alt="WhatsApp" className="w-4 h-4 mr-2" />
                      WhatsApp
                    </Button>
                    <Button variant="outline" className="border-khwela-blue text-khwela-blue hover:bg-khwela-light">
                      <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" className="w-4 h-4 mr-2" />
                      Facebook
                    </Button>
                    <Button variant="outline" className="border-khwela-blue text-khwela-blue hover:bg-khwela-light">
                      <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" className="w-4 h-4 mr-2" />
                      Instagram
                    </Button>
                    <Button variant="outline" className="border-khwela-blue text-khwela-blue hover:bg-khwela-light">
                      <Share2 size={16} className="mr-2" />
                      Email
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-khwela-blue" />
                  <CardTitle>Referral Stats</CardTitle>
                </div>
                <CardDescription>Track your referrals and earnings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <Card className="bg-blue-50 border-blue-200">
                    <CardContent className="p-6">
                      <h3 className="text-sm font-medium text-blue-700 mb-1">Total Referrals</h3>
                      <div className="text-3xl font-bold text-blue-600">3</div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-green-50 border-green-200">
                    <CardContent className="p-6">
                      <h3 className="text-sm font-medium text-green-700 mb-1">Successful Referrals</h3>
                      <div className="text-3xl font-bold text-green-600">2</div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-yellow-50 border-yellow-200">
                    <CardContent className="p-6">
                      <h3 className="text-sm font-medium text-yellow-700 mb-1">Total Earned</h3>
                      <div className="text-3xl font-bold text-yellow-600">R100</div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="bg-white rounded-xl shadow-sm overflow-hidden border">
                  <div className="p-4 bg-gray-50 border-b">
                    <h3 className="font-semibold text-khwela-blue">Recent Referrals</h3>
                  </div>
                  <div className="divide-y divide-gray-100">
                    <div className="p-4">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <Avatar className="h-10 w-10 mr-3">
                            <AvatarFallback>TM</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium text-khwela-blue">Thabo Mthembu</p>
                            <p className="text-sm text-khwela-slate">Joined Apr 5, 2025</p>
                          </div>
                        </div>
                        <Badge className="bg-green-100 text-green-700 hover:bg-green-100">R50 earned</Badge>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <Avatar className="h-10 w-10 mr-3">
                            <AvatarFallback>NN</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium text-khwela-blue">Nomsa Ndlovu</p>
                            <p className="text-sm text-khwela-slate">Joined Mar 22, 2025</p>
                          </div>
                        </div>
                        <Badge className="bg-green-100 text-green-700 hover:bg-green-100">R50 earned</Badge>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <Avatar className="h-10 w-10 mr-3">
                            <AvatarFallback>LM</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium text-khwela-blue">Lwazi Mbatha</p>
                            <p className="text-sm text-khwela-slate">Joined Mar 10, 2025</p>
                          </div>
                        </div>
                        <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">Pending</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        )}
      </Tabs>
    </div>
  );
};

export default RiderDashboard;
