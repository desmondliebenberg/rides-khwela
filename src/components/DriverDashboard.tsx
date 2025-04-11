
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";
import {
  Calendar,
  Car,
  Clock,
  FileBadge,
  FileText,
  MapPin,
  CreditCard,
  Star,
  User,
  Plus,
  FileCheck,
  Upload,
  ChevronDown,
  Settings,
  BellRing,
  Shield
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const DriverDashboard = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("overview");

  // Sample data for demonstration
  const upcomingRides = [
    {
      id: 1,
      rider: "John M.",
      rating: 4.8,
      from: "Canal Walk Shopping Centre",
      to: "Cape Town International Airport",
      date: "Apr 15, 2025",
      time: "10:30 AM",
      price: "R245",
      status: "scheduled",
    },
  ];

  const rideHistory = [
    {
      id: 1001,
      rider: "Thabo N.",
      rating: 4.7,
      from: "V&A Waterfront",
      to: "Table Mountain",
      date: "Apr 8, 2025",
      time: "3:15 PM",
      price: "R120",
      status: "completed",
    },
    {
      id: 1002,
      rider: "Lerato K.",
      rating: 4.9,
      from: "Cape Town International Airport",
      to: "The Westin Cape Town",
      date: "Apr 3, 2025",
      time: "7:45 PM",
      price: "R280",
      status: "completed",
    },
    {
      id: 1003,
      rider: "Sibusiso M.",
      rating: 5.0,
      from: "University of Cape Town",
      to: "Long Street",
      date: "Mar 28, 2025",
      time: "9:30 PM",
      price: "R95",
      status: "completed",
    },
  ];

  const earnings = {
    today: "R750",
    week: "R4,280",
    month: "R18,540",
    totalTrips: 68,
    rating: 4.9
  };

  const documents = [
    {
      name: "Driver's License",
      status: "verified",
      expiryDate: "Jan 15, 2027",
      uploaded: "Feb 10, 2025"
    },
    {
      name: "Vehicle Registration",
      status: "verified",
      expiryDate: "Sep 22, 2026",
      uploaded: "Feb 10, 2025"
    },
    {
      name: "Professional Driving Permit",
      status: "verified",
      expiryDate: "Mar 30, 2026",
      uploaded: "Feb 12, 2025"
    },
    {
      name: "Insurance Document",
      status: "pending",
      expiryDate: "May 15, 2026",
      uploaded: "Apr 9, 2025"
    },
    {
      name: "Dekra Report",
      status: "not_uploaded",
      expiryDate: "",
      uploaded: ""
    }
  ];

  const handleUploadDocument = (documentName: string) => {
    toast({
      title: "Document Upload Initiated",
      description: `Upload process started for ${documentName}`,
    });
  };

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-khwela-blue">Driver Dashboard</h1>
          <p className="text-khwela-slate mt-2">Welcome back, Samuel!</p>
        </div>
        <div className="mt-4 md:mt-0 flex space-x-2">
          <Button 
            variant="outline" 
            className="border-khwela-blue text-khwela-blue hover:bg-khwela-light"
          >
            <BellRing className="mr-2 h-4 w-4" /> Notifications
          </Button>
          <Button 
            className="bg-khwela-gold text-khwela-blue hover:bg-khwela-gold/90"
          >
            <Car className="mr-2 h-4 w-4" /> Go Online
          </Button>
        </div>
      </div>

      <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="bg-gray-100 p-1">
          <TabsTrigger value="overview" className="data-[state=active]:bg-white">
            Overview
          </TabsTrigger>
          <TabsTrigger value="earnings" className="data-[state=active]:bg-white">
            Earnings
          </TabsTrigger>
          <TabsTrigger value="rides" className="data-[state=active]:bg-white">
            Rides
          </TabsTrigger>
          <TabsTrigger value="documents" className="data-[state=active]:bg-white">
            Documents
          </TabsTrigger>
          <TabsTrigger value="settings" className="data-[state=active]:bg-white">
            Settings
          </TabsTrigger>
        </TabsList>

        {activeTab === "overview" && (
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Today's Earnings</CardTitle>
                  <CardDescription>As of now</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2">
                    <CreditCard className="text-khwela-blue h-5 w-5" />
                    <span className="text-3xl font-bold text-khwela-blue">{earnings.today}</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Total Trips</CardTitle>
                  <CardDescription>Lifetime trips</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2">
                    <Car className="text-khwela-blue h-5 w-5" />
                    <span className="text-3xl font-bold text-khwela-blue">{earnings.totalTrips}</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Rating</CardTitle>
                  <CardDescription>Your average rating</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2">
                    <Star className="text-yellow-500 h-5 w-5 fill-yellow-500" />
                    <span className="text-3xl font-bold text-khwela-blue">{earnings.rating}</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Status</CardTitle>
                  <CardDescription>Your current status</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2">
                    <Badge className="bg-green-100 text-green-700 hover:bg-green-100">ONLINE</Badge>
                    <Button variant="outline" size="sm" className="text-red-600 border-red-200 hover:bg-red-50">
                      Go Offline
                    </Button>
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
                                <span className="text-sm ml-1">{ride.rating}</span>
                              </div>
                              <span className="text-sm text-khwela-slate">Rider: {ride.rider}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex justify-end mt-4 space-x-2">
                          <Button variant="outline" size="sm">Cancel</Button>
                          <Button size="sm" className="bg-khwela-blue">Navigate</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-10">
                    <Calendar className="mx-auto h-10 w-10 text-gray-400 mb-3" />
                    <h3 className="text-lg font-medium text-khwela-blue mb-1">No Upcoming Rides</h3>
                    <p className="text-khwela-slate mb-4">You don't have any scheduled rides yet.</p>
                    <Button className="bg-khwela-blue">Find Rides</Button>
                  </div>
                )}
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Document Status</CardTitle>
                  <CardDescription>Keep your documents up-to-date</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {documents.filter((doc, index) => index < 3).map((doc, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="h-10 w-10 bg-khwela-light rounded-full flex items-center justify-center">
                            <FileText className="text-khwela-blue h-5 w-5" />
                          </div>
                          <div>
                            <p className="font-medium text-khwela-blue">{doc.name}</p>
                            {doc.status === "verified" ? (
                              <p className="text-sm text-green-600 flex items-center">
                                <FileCheck size={12} className="mr-1" /> Verified
                              </p>
                            ) : doc.status === "pending" ? (
                              <p className="text-sm text-amber-600 flex items-center">
                                <Clock size={12} className="mr-1" /> Under review
                              </p>
                            ) : (
                              <p className="text-sm text-red-600 flex items-center">
                                <Plus size={12} className="mr-1" /> Not uploaded
                              </p>
                            )}
                          </div>
                        </div>
                        {doc.status !== "verified" && (
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleUploadDocument(doc.name)}
                          >
                            {doc.status === "pending" ? "Re-upload" : "Upload"}
                          </Button>
                        )}
                      </div>
                    ))}
                    
                    <Button 
                      variant="outline" 
                      className="w-full" 
                      onClick={() => setActiveTab("documents")}
                    >
                      View All Documents
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Vehicle Information</CardTitle>
                  <CardDescription>Your registered vehicle</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start space-x-4">
                    <div className="h-16 w-16 bg-khwela-light rounded-lg flex items-center justify-center">
                      <Car className="text-khwela-blue h-8 w-8" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-semibold text-khwela-blue text-lg">Toyota Corolla Quest</h3>
                      <div className="grid grid-cols-2 gap-2 mt-2">
                        <div>
                          <p className="text-xs text-khwela-slate">Year</p>
                          <p className="text-sm font-medium">2022</p>
                        </div>
                        <div>
                          <p className="text-xs text-khwela-slate">Color</p>
                          <p className="text-sm font-medium">Silver</p>
                        </div>
                        <div>
                          <p className="text-xs text-khwela-slate">Registration</p>
                          <p className="text-sm font-medium">CA 123-456</p>
                        </div>
                        <div>
                          <p className="text-xs text-khwela-slate">Status</p>
                          <Badge className="bg-green-100 text-green-600 hover:bg-green-100">Active</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 mt-4 pt-4">
                    <h4 className="font-medium text-khwela-blue mb-2">Vehicle Inspection</h4>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-khwela-slate">Last Inspection</span>
                      <span className="text-sm font-medium">Mar 15, 2025</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-khwela-slate">Next Inspection</span>
                      <span className="text-sm font-medium">Sep 15, 2025</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        )}

        {activeTab === "earnings" && (
          <TabsContent value="earnings" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Today</CardTitle>
                  <CardDescription>Today's earnings</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-khwela-blue">{earnings.today}</div>
                  <div className="text-sm text-khwela-slate mt-1">4 trips completed</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">This Week</CardTitle>
                  <CardDescription>Week's earnings</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-khwela-blue">{earnings.week}</div>
                  <div className="text-sm text-khwela-slate mt-1">23 trips completed</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">This Month</CardTitle>
                  <CardDescription>Month's earnings</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-khwela-blue">{earnings.month}</div>
                  <div className="text-sm text-khwela-slate mt-1">102 trips completed</div>
                </CardContent>
              </Card>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Recent Earnings</CardTitle>
                <CardDescription>Your last 10 completed rides</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg border overflow-hidden">
                  <div className="bg-gray-50 px-4 py-3 border-b grid grid-cols-5 gap-4 font-medium text-khwela-slate text-sm">
                    <div>Date & Time</div>
                    <div>Trip</div>
                    <div>Rider</div>
                    <div className="text-right">Fare</div>
                    <div className="text-right">Your Earnings</div>
                  </div>
                  
                  <div className="divide-y">
                    {rideHistory.map(ride => (
                      <div key={ride.id} className="px-4 py-3 grid grid-cols-5 gap-4 text-sm hover:bg-gray-50">
                        <div className="text-khwela-slate">
                          {ride.date}<br />{ride.time}
                        </div>
                        <div>
                          <div className="truncate text-khwela-blue font-medium">{ride.from}</div>
                          <div className="truncate text-khwela-slate">to {ride.to}</div>
                        </div>
                        <div className="flex items-center">
                          <div className="flex items-center">
                            <Star size={12} className="text-yellow-500 fill-yellow-500 mr-1" />
                            <span>{ride.rating}</span>
                          </div>
                          <span className="ml-2">{ride.rider}</span>
                        </div>
                        <div className="text-right font-medium">{ride.price}</div>
                        <div className="text-right font-medium text-khwela-blue">
                          R{Math.round(parseInt(ride.price.substring(1)) * 0.85)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Earnings Breakdown</CardTitle>
                <CardDescription>How your earnings are calculated</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-khwela-blue">Base Fare</span>
                      <span className="font-medium">85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                    <p className="text-sm text-khwela-slate mt-2">
                      You receive 85% of the total fare for each ride.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-khwela-blue">Khwela Service Fee</span>
                      <span className="font-medium">15%</span>
                    </div>
                    <Progress value={15} className="h-2" />
                    <p className="text-sm text-khwela-slate mt-2">
                      Khwela deducts a 15% service fee from each fare.
                    </p>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                    <div className="flex items-center mb-2">
                      <Star className="text-green-500 h-5 w-5 mr-2" />
                      <span className="font-medium text-green-700">Bonus Opportunities</span>
                    </div>
                    <ul className="list-disc list-inside text-sm text-green-700 space-y-1">
                      <li>Earn an extra 5% when you complete 100+ trips per month</li>
                      <li>Earn trip bonuses during peak hours (6-9 AM & 4-7 PM)</li>
                      <li>R500 referral bonus for each new driver you refer</li>
                    </ul>
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
                              <FileCheck size={12} className="mr-1" /> Completed
                            </Badge>
                            <div className="text-lg font-bold text-khwela-blue">{ride.price}</div>
                            <div className="flex items-center mt-2">
                              <div className="flex items-center mr-2">
                                <Star size={12} className="text-yellow-500 fill-yellow-500" />
                                <span className="text-sm ml-1">{ride.rating}</span>
                              </div>
                              <span className="text-sm text-khwela-slate">Rider: {ride.rider}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex justify-end mt-4 space-x-2">
                          <Button variant="outline" size="sm">Report Issue</Button>
                          <Button size="sm" className="bg-khwela-blue">View Details</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-10">
                    <Clock className="mx-auto h-10 w-10 text-gray-400 mb-3" />
                    <h3 className="text-lg font-medium text-khwela-blue mb-1">No Ride History</h3>
                    <p className="text-khwela-slate mb-4">You haven't completed any rides yet.</p>
                    <Button className="bg-khwela-blue">Find Rides</Button>
                  </div>
                )}
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Performance Metrics</CardTitle>
                <CardDescription>Your driving statistics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium text-khwela-slate">Acceptance Rate</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-khwela-blue">95%</span>
                      <Badge className="bg-green-100 text-green-600 hover:bg-green-100">Excellent</Badge>
                    </div>
                    <Progress value={95} className="h-2" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium text-khwela-slate">Cancellation Rate</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-khwela-blue">3%</span>
                      <Badge className="bg-green-100 text-green-600 hover:bg-green-100">Excellent</Badge>
                    </div>
                    <Progress value={3} className="h-2" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium text-khwela-slate">On-Time Arrival</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-khwela-blue">92%</span>
                      <Badge className="bg-green-100 text-green-600 hover:bg-green-100">Excellent</Badge>
                    </div>
                    <Progress value={92} className="h-2" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium text-khwela-slate">Average Rating</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-khwela-blue">4.9</span>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star 
                            key={star} 
                            size={16} 
                            className={`${star <= 5 ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`} 
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        )}

        {activeTab === "documents" && (
          <TabsContent value="documents" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Your Documents</CardTitle>
                <CardDescription>Keep your documents up-to-date</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {documents.map((doc, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                        <div className="flex items-center space-x-3 mb-4 sm:mb-0">
                          <div className={`h-12 w-12 rounded-full flex items-center justify-center ${
                            doc.status === "verified" 
                              ? "bg-green-100" 
                              : doc.status === "pending" 
                                ? "bg-amber-100" 
                                : "bg-gray-100"
                          }`}>
                            <FileText className={`h-6 w-6 ${
                              doc.status === "verified" 
                                ? "text-green-600" 
                                : doc.status === "pending" 
                                  ? "text-amber-600" 
                                  : "text-gray-600"
                            }`} />
                          </div>
                          <div>
                            <h3 className="font-medium text-khwela-blue text-lg">{doc.name}</h3>
                            {doc.status === "verified" ? (
                              <div className="flex items-center text-green-600">
                                <Shield size={14} className="mr-1" />
                                <span className="text-sm">Verified</span>
                              </div>
                            ) : doc.status === "pending" ? (
                              <div className="flex items-center text-amber-600">
                                <Clock size={14} className="mr-1" />
                                <span className="text-sm">Under review</span>
                              </div>
                            ) : (
                              <div className="flex items-center text-red-600">
                                <Plus size={14} className="mr-1" />
                                <span className="text-sm">Not uploaded</span>
                              </div>
                            )}
                          </div>
                        </div>
                        
                        <div className="flex flex-col sm:items-end">
                          {doc.status !== "not_uploaded" && (
                            <div className="text-sm text-khwela-slate mb-2">
                              {doc.status === "verified" ? (
                                <span>Expires: {doc.expiryDate}</span>
                              ) : (
                                <span>Uploaded: {doc.uploaded}</span>
                              )}
                            </div>
                          )}
                          
                          <div>
                            {doc.status === "verified" ? (
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button variant="outline" size="sm">View Document</Button>
                                </DialogTrigger>
                                <DialogContent>
                                  <DialogHeader>
                                    <DialogTitle>{doc.name}</DialogTitle>
                                    <DialogDescription>
                                      Verified document, expires on {doc.expiryDate}
                                    </DialogDescription>
                                  </DialogHeader>
                                  <div className="bg-gray-100 h-60 rounded-md flex items-center justify-center">
                                    <FileText size={48} className="text-gray-400" />
                                  </div>
                                </DialogContent>
                              </Dialog>
                            ) : (
                              <Button 
                                variant="outline" 
                                className="border-khwela-blue text-khwela-blue hover:bg-khwela-light"
                                onClick={() => handleUploadDocument(doc.name)}
                              >
                                <Upload className="h-4 w-4 mr-2" />
                                {doc.status === "pending" ? "Re-upload" : "Upload Document"}
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Document Guidelines</CardTitle>
                <CardDescription>Requirements for document submission</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-lg border border-l-4 border-l-khwela-blue p-4">
                    <h3 className="font-medium text-khwela-blue mb-2">General Requirements</h3>
                    <ul className="list-disc list-inside text-sm text-khwela-slate space-y-1">
                      <li>Documents must be clear, legible, and complete</li>
                      <li>Photos should be in color with all corners visible</li>
                      <li>File size should be less than 5MB</li>
                      <li>Accepted formats: JPG, PNG, PDF</li>
                    </ul>
                  </div>
                  
                  <div className="rounded-lg border border-l-4 border-l-yellow-500 p-4">
                    <h3 className="font-medium text-yellow-700 mb-2">Document Expiry</h3>
                    <p className="text-sm text-khwela-slate">
                      Please ensure all your documents are up-to-date. You'll receive notifications
                      30 days before any document expires. Expired documents may affect your ability
                      to accept trips.
                    </p>
                  </div>
                  
                  <div className="rounded-lg border border-l-4 border-l-green-500 p-4">
                    <h3 className="font-medium text-green-700 mb-2">Help & Support</h3>
                    <p className="text-sm text-khwela-slate mb-3">
                      Having trouble uploading your documents? Our support team is here to help.
                    </p>
                    <Button variant="outline" size="sm">Contact Support</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        )}

        {activeTab === "settings" && (
          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <User className="h-5 w-5 text-khwela-blue" />
                  <CardTitle>Account Settings</CardTitle>
                </div>
                <CardDescription>Manage your personal information</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4 flex flex-col items-center">
                    <Avatar className="h-24 w-24 mb-4">
                      <AvatarFallback className="text-2xl">SM</AvatarFallback>
                    </Avatar>
                    <Button variant="outline" size="sm">Change Photo</Button>
                  </div>
                  
                  <div className="md:w-3/4 space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-khwela-slate mb-1">Full Name</label>
                        <input 
                          type="text" 
                          className="w-full p-2 border border-gray-300 rounded-md" 
                          value="Samuel Mahlangu"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-khwela-slate mb-1">Email</label>
                        <input 
                          type="email" 
                          className="w-full p-2 border border-gray-300 rounded-md" 
                          value="samuel.m@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-khwela-slate mb-1">Phone Number</label>
                        <input 
                          type="tel" 
                          className="w-full p-2 border border-gray-300 rounded-md" 
                          value="+27 82 123 4567"
                          disabled
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-khwela-slate mb-1">Date of Birth</label>
                        <input 
                          type="text" 
                          className="w-full p-2 border border-gray-300 rounded-md" 
                          value="12 May 1985"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-khwela-slate mb-1">Address</label>
                      <input 
                        type="text" 
                        className="w-full p-2 border border-gray-300 rounded-md" 
                        value="123 Main Street, Cape Town, Western Cape"
                      />
                    </div>
                    
                    <div className="flex justify-end space-x-2">
                      <Button variant="outline">Cancel</Button>
                      <Button className="bg-khwela-blue">Save Changes</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Settings className="h-5 w-5 text-khwela-blue" />
                  <CardTitle>Preferences</CardTitle>
                </div>
                <CardDescription>Customize your driving experience</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium text-khwela-blue mb-3">Notification Settings</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <label className="text-khwela-slate">Push Notifications</label>
                        <input type="checkbox" checked className="form-checkbox h-5 w-5 text-khwela-blue" />
                      </div>
                      <div className="flex items-center justify-between">
                        <label className="text-khwela-slate">Email Notifications</label>
                        <input type="checkbox" checked className="form-checkbox h-5 w-5 text-khwela-blue" />
                      </div>
                      <div className="flex items-center justify-between">
                        <label className="text-khwela-slate">SMS Notifications</label>
                        <input type="checkbox" checked className="form-checkbox h-5 w-5 text-khwela-blue" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="font-medium text-khwela-blue mb-3">Payment Preferences</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-khwela-slate mb-1">Default Payment Method</label>
                        <select className="w-full p-2 border border-gray-300 rounded-md bg-white">
                          <option>Direct Bank Deposit</option>
                          <option>Mobile Money</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-khwela-slate mb-1">Payment Frequency</label>
                        <select className="w-full p-2 border border-gray-300 rounded-md bg-white">
                          <option>Weekly (Every Friday)</option>
                          <option>Daily (End of Day)</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="font-medium text-khwela-blue mb-3">App Settings</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <label className="text-khwela-slate">Night Mode</label>
                        <input type="checkbox" className="form-checkbox h-5 w-5 text-khwela-blue" />
                      </div>
                      <div className="flex items-center justify-between">
                        <label className="text-khwela-slate">Sound Effects</label>
                        <input type="checkbox" checked className="form-checkbox h-5 w-5 text-khwela-blue" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-khwela-slate mb-1">Language</label>
                        <select className="w-full p-2 border border-gray-300 rounded-md bg-white">
                          <option>English</option>
                          <option>isiZulu</option>
                          <option>Afrikaans</option>
                          <option>Xhosa</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button className="bg-khwela-blue">Save Preferences</Button>
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

export default DriverDashboard;
