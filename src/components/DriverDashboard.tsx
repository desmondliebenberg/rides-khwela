import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Car, 
  Award, 
  Clock, 
  Wallet, 
  Bell, 
  PauseCircle, 
  AlertTriangle, 
  FileText, 
  CheckCircle, 
  Calendar, 
  ChevronRight, 
  MapPin,
  Star,
  Shield,
  ClipboardCheck
} from "lucide-react";

const DriverDashboard = () => {
  const [drivingActive, setDrivingActive] = useState(true);

  const toggleDriving = () => {
    setDrivingActive(!drivingActive);
  };

  const driverName = "Themba Ndlovu";
  const driverStats = {
    tripsCompleted: 5,
    earnings: 420,
    rating: 4.9,
    badge: "Gold",
  };

  const trips = [
    { 
      id: "T-1234", 
      date: "2023-04-06", 
      time: "14:30", 
      pickup: "Sandton City", 
      dropoff: "Rosebank Mall", 
      fare: 85, 
      payment: "Card", 
      rating: 5 
    },
    { 
      id: "T-1235", 
      date: "2023-04-06", 
      time: "12:15", 
      pickup: "Melrose Arch", 
      dropoff: "Fourways Mall", 
      fare: 120, 
      payment: "Cash", 
      rating: 4 
    },
    { 
      id: "T-1236", 
      date: "2023-04-05", 
      time: "18:45", 
      pickup: "Hyde Park", 
      dropoff: "OR Tambo Airport", 
      fare: 215, 
      payment: "Card", 
      rating: 5 
    },
  ];

  const upcomingAlerts = [
    { 
      type: "license", 
      title: "License disc expires", 
      days: 45, 
      severity: "medium" 
    },
    { 
      type: "clearance", 
      title: "Police Clearance needed", 
      days: 60, 
      severity: "low" 
    },
  ];

  const documents = [
    { 
      type: "license", 
      title: "Driving License", 
      expiry: "2024-08-15", 
      status: "verified" 
    },
    { 
      type: "disc", 
      title: "License Disc", 
      expiry: "2023-05-22", 
      status: "expiring" 
    },
    { 
      type: "clearance", 
      title: "Police Clearance", 
      expiry: "2023-06-10", 
      status: "verified" 
    },
    { 
      type: "profile", 
      title: "Profile Picture", 
      expiry: null, 
      status: "verified" 
    },
    { 
      type: "insurance", 
      title: "Insurance Document", 
      expiry: "2023-12-15", 
      status: "verified" 
    },
    { 
      type: "dekra", 
      title: "Dekra Report", 
      expiry: "2023-09-30", 
      status: "verified" 
    },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-3xl font-bold text-khwela-blue">
                Hi, {driverName}
              </h1>
              <p className="text-khwela-slate mt-1">
                {drivingActive ? "You're active and ready to receive trips" : "You're currently on a break"}
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <Button 
                onClick={toggleDriving}
                className={`${
                  drivingActive 
                    ? "bg-amber-500 hover:bg-amber-600" 
                    : "bg-khwela-blue hover:bg-khwela-blue/90"
                }`}
              >
                {drivingActive 
                  ? <><PauseCircle size={16} className="mr-2" /> Pause My Driving</> 
                  : <><Car size={16} className="mr-2" /> Resume Driving</>
                }
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-khwela-slate mb-1">Trips Completed</p>
                  <h3 className="text-3xl font-bold text-khwela-blue">{driverStats.tripsCompleted}</h3>
                  <p className="text-xs text-khwela-slate mt-1">Today</p>
                </div>
                <div className="h-10 w-10 rounded-full bg-khwela-light flex items-center justify-center">
                  <Car size={20} className="text-khwela-blue" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-khwela-slate mb-1">Earnings</p>
                  <h3 className="text-3xl font-bold text-khwela-blue">R{driverStats.earnings}</h3>
                  <p className="text-xs text-khwela-slate mt-1">Today</p>
                </div>
                <div className="h-10 w-10 rounded-full bg-khwela-light flex items-center justify-center">
                  <Wallet size={20} className="text-khwela-blue" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-khwela-slate mb-1">Rating</p>
                  <h3 className="text-3xl font-bold text-khwela-blue">{driverStats.rating}</h3>
                  <div className="flex items-center text-yellow-500 mt-1">
                    <Star size={12} className="fill-current" />
                    <Star size={12} className="fill-current" />
                    <Star size={12} className="fill-current" />
                    <Star size={12} className="fill-current" />
                    <Star size={12} className="fill-current" />
                  </div>
                </div>
                <div className="h-10 w-10 rounded-full bg-khwela-light flex items-center justify-center">
                  <Star size={20} className="text-khwela-blue" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-khwela-slate mb-1">Active Badge</p>
                  <h3 className="text-3xl font-bold text-yellow-500">{driverStats.badge}</h3>
                  <p className="text-xs text-khwela-slate mt-1">Highest tier</p>
                </div>
                <div className="h-10 w-10 rounded-full bg-khwela-light flex items-center justify-center">
                  <Award size={20} className="text-khwela-blue" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Button variant="outline" className="border-khwela-blue text-khwela-blue hover:bg-khwela-light h-auto py-3">
            <PauseCircle size={18} className="mr-2" />
            Pause My Driving
          </Button>
          <Button variant="outline" className="border-khwela-blue text-khwela-blue hover:bg-khwela-light h-auto py-3">
            <Wallet size={18} className="mr-2" />
            Withdraw Earnings
          </Button>
          <Button variant="outline" className="border-khwela-blue text-khwela-blue hover:bg-khwela-light h-auto py-3">
            <AlertTriangle size={18} className="mr-2" />
            Report Safety Concern
          </Button>
          <Button variant="outline" className="border-khwela-blue text-khwela-blue hover:bg-khwela-light h-auto py-3">
            <FileText size={18} className="mr-2" />
            Update Documents
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-xl font-bold text-khwela-blue">Trip History</CardTitle>
                <Button variant="ghost" size="sm" className="text-khwela-blue hover:text-khwela-blue/70">
                  View All <ChevronRight size={16} className="ml-1" />
                </Button>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 text-xs font-semibold text-khwela-slate">Date</th>
                        <th className="text-left py-3 px-4 text-xs font-semibold text-khwela-slate">Route</th>
                        <th className="text-left py-3 px-4 text-xs font-semibold text-khwela-slate">Fare</th>
                        <th className="text-left py-3 px-4 text-xs font-semibold text-khwela-slate">Payment</th>
                        <th className="text-left py-3 px-4 text-xs font-semibold text-khwela-slate">Rating</th>
                      </tr>
                    </thead>
                    <tbody>
                      {trips.map((trip, index) => (
                        <tr key={trip.id} className={`border-b border-gray-100 ${index % 2 === 0 ? 'bg-gray-50' : ''}`}>
                          <td className="py-3 px-4">
                            <div className="text-sm font-medium text-khwela-blue">
                              {new Date(trip.date).toLocaleDateString('en-ZA')}
                            </div>
                            <div className="text-xs text-khwela-slate">{trip.time}</div>
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex flex-col">
                              <div className="flex items-center">
                                <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                                <span className="text-sm text-khwela-slate">{trip.pickup}</span>
                              </div>
                              <div className="flex items-center mt-1">
                                <div className="h-2 w-2 rounded-full bg-red-500 mr-2"></div>
                                <span className="text-sm text-khwela-slate">{trip.dropoff}</span>
                              </div>
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <div className="text-sm font-medium text-khwela-blue">R{trip.fare}</div>
                          </td>
                          <td className="py-3 px-4">
                            <Badge variant={trip.payment === 'Card' ? 'default' : 'outline'} className={trip.payment === 'Card' ? 'bg-blue-100 text-blue-800 hover:bg-blue-100' : 'border-amber-500 text-amber-500'}>
                              {trip.payment}
                            </Badge>
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex items-center">
                              <Star size={14} className="text-yellow-500 fill-current" />
                              <span className="ml-1 text-sm text-khwela-slate">{trip.rating}</span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-8">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-xl font-bold text-khwela-blue">Upcoming Compliance Alerts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingAlerts.map((alert, index) => (
                    <div key={index} className="flex items-start p-4 rounded-lg bg-gray-50">
                      <div className={`
                        h-10 w-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0
                        ${alert.severity === 'high' ? 'bg-red-100' : alert.severity === 'medium' ? 'bg-amber-100' : 'bg-blue-100'}
                      `}>
                        {alert.type === 'license' && (
                          <Car size={20} className={alert.severity === 'high' ? 'text-red-600' : alert.severity === 'medium' ? 'text-amber-600' : 'text-blue-600'} />
                        )}
                        {alert.type === 'clearance' && (
                          <FileText size={20} className={alert.severity === 'high' ? 'text-red-600' : alert.severity === 'medium' ? 'text-amber-600' : 'text-blue-600'} />
                        )}
                      </div>
                      <div className="flex-1">
                        <h4 className={`font-semibold ${alert.severity === 'high' ? 'text-red-600' : alert.severity === 'medium' ? 'text-amber-600' : 'text-blue-600'}`}>
                          {alert.title}
                        </h4>
                        <p className="text-khwela-slate text-sm mt-1">
                          {alert.days} days remaining
                        </p>
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className={`
                          ${alert.severity === 'high' 
                            ? 'border-red-600 text-red-600 hover:bg-red-50' 
                            : alert.severity === 'medium' 
                              ? 'border-amber-600 text-amber-600 hover:bg-amber-50' 
                              : 'border-blue-600 text-blue-600 hover:bg-blue-50'
                          }
                        `}
                      >
                        Update
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-xl font-bold text-khwela-blue">My Documents</CardTitle>
                <Button variant="ghost" size="sm" className="text-khwela-blue hover:text-khwela-blue/70">
                  Manage
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {documents.map((doc, index) => (
                    <div key={index} className="flex items-center p-3 rounded-lg hover:bg-gray-50">
                      <div className="h-10 w-10 rounded-full bg-khwela-light flex items-center justify-center mr-3 flex-shrink-0">
                        {doc.type === 'license' && <FileText size={20} className="text-khwela-blue" />}
                        {doc.type === 'disc' && <Car size={20} className="text-khwela-blue" />}
                        {doc.type === 'clearance' && <FileText size={20} className="text-khwela-blue" />}
                        {doc.type === 'profile' && <CheckCircle size={20} className="text-khwela-blue" />}
                        {doc.type === 'insurance' && <Shield size={20} className="text-khwela-blue" />}
                        {doc.type === 'dekra' && <ClipboardCheck size={20} className="text-khwela-blue" />}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-khwela-blue">{doc.title}</span>
                          <Badge 
                            variant={doc.status === 'verified' ? 'default' : 'outline'} 
                            className={`
                              ${doc.status === 'verified' 
                                ? 'bg-green-100 text-green-800 hover:bg-green-100' 
                                : doc.status === 'expiring' 
                                  ? 'border-amber-500 text-amber-500' 
                                  : 'border-red-500 text-red-500'
                              }
                            `}
                          >
                            {doc.status === 'verified' 
                              ? 'Verified' 
                              : doc.status === 'expiring' 
                                ? 'Expiring Soon' 
                                : 'Expired'
                            }
                          </Badge>
                        </div>
                        {doc.expiry && (
                          <div className="text-xs text-khwela-slate mt-1">
                            Expires: {new Date(doc.expiry).toLocaleDateString('en-ZA')}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-4 bg-khwela-blue hover:bg-khwela-blue/90">
                  <FileText size={16} className="mr-2" /> Upload New Document
                </Button>
              </CardContent>
            </Card>

            <Card className="mt-8">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-xl font-bold text-khwela-blue">Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-khwela-slate">Acceptance Rate</span>
                      <span className="text-sm font-medium text-khwela-blue">95%</span>
                    </div>
                    <Progress value={95} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-khwela-slate">On-Time Arrivals</span>
                      <span className="text-sm font-medium text-khwela-blue">92%</span>
                    </div>
                    <Progress value={92} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-khwela-slate">Badge Progress</span>
                      <span className="text-sm font-medium text-khwela-blue">Gold</span>
                    </div>
                    <Progress value={100} className="h-2" />
                  </div>
                </div>

                <div className="mt-6 bg-khwela-light rounded-lg p-4">
                  <h4 className="font-semibold text-khwela-blue mb-2">Gold Badge Benefits</h4>
                  <ul className="text-sm text-khwela-slate space-y-1">
                    <li className="flex items-start">
                      <CheckCircle size={14} className="text-green-600 mr-2 mt-0.5" />
                      <span>Priority trip assignments</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={14} className="text-green-600 mr-2 mt-0.5" />
                      <span>R15 bonus per trip</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={14} className="text-green-600 mr-2 mt-0.5" />
                      <span>Instant daily cash-out</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-xl font-bold text-khwela-blue">Earnings Summary</CardTitle>
              <Tabs defaultValue="daily">
                <TabsList>
                  <TabsTrigger value="daily">Daily</TabsTrigger>
                  <TabsTrigger value="weekly">Weekly</TabsTrigger>
                  <TabsTrigger value="monthly">Monthly</TabsTrigger>
                </TabsList>
              </Tabs>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm font-medium text-khwela-slate mb-1">Trip Revenue</p>
                  <h3 className="text-2xl font-bold text-khwela-blue">R358</h3>
                  <p className="text-xs text-green-600 flex items-center mt-1">
                    <ChevronRight size={14} className="transform rotate-90" />
                    <span>12% from yesterday</span>
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm font-medium text-khwela-slate mb-1">Bonuses</p>
                  <h3 className="text-2xl font-bold text-khwela-blue">R62</h3>
                  <div className="flex items-center text-xs text-khwela-slate mt-1">
                    <div className="bg-khwela-blue/10 text-khwela-blue rounded-full px-2 py-0.5">
                      Gold Badge Bonus
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm font-medium text-khwela-slate mb-1">Total Earnings</p>
                  <h3 className="text-2xl font-bold text-khwela-blue">R420</h3>
                  <div className="flex items-center text-xs text-khwela-slate justify-between mt-1">
                    <span>5 trips</span>
                    <span>Avg. R84 per trip</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-center">
                <Button className="bg-khwela-blue hover:bg-khwela-blue/90">
                  View Detailed Earnings
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DriverDashboard;
