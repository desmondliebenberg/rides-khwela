
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Car, 
  MapPin, 
  Clock, 
  CreditCard, 
  Star, 
  History,
  Calendar,
  ChevronRight,
  Plus,
  Heart,
  Clock3,
  Receipt,
  User,
  Gift,
  Settings,
  HelpCircle
} from "lucide-react";

const RiderDashboard = () => {
  const [activeTab, setActiveTab] = useState("upcoming");

  // Sample data
  const riderName = "Lerato Khumalo";
  const riderStats = {
    totalRides: 28,
    favoriteLocations: 5,
    ratingAvg: 4.8,
    loyaltyPoints: 320
  };

  const upcomingRides = [
    {
      id: "R-1234",
      date: "2023-04-12",
      time: "08:30",
      pickup: "12 Jorissen St, Braamfontein",
      dropoff: "Sandton City Mall",
      status: "scheduled",
      driver: {
        name: "Themba Ndlovu",
        rating: 4.9,
        car: "Toyota Corolla (BG 42 FP GP)"
      }
    }
  ];

  const recentRides = [
    {
      id: "R-1230",
      date: "2023-04-06",
      time: "18:15",
      pickup: "The Zone @ Rosebank",
      dropoff: "Melville, 7th Street",
      fare: 95,
      rating: 5,
      driver: "Sipho Molefe"
    },
    {
      id: "R-1229",
      date: "2023-04-04",
      time: "08:45",
      pickup: "Home",
      dropoff: "44 Stanley Ave, Milpark",
      fare: 78,
      rating: 4,
      driver: "Themba Ndlovu"
    },
    {
      id: "R-1228",
      date: "2023-04-01",
      time: "20:30",
      pickup: "Mall of Africa",
      dropoff: "Home",
      fare: 145,
      rating: 5,
      driver: "Thandeka Zulu"
    }
  ];

  const favoriteLocations = [
    { id: 1, name: "Home", address: "12 Jorissen St, Braamfontein", type: "home" },
    { id: 2, name: "Work", address: "61 Katherine St, Sandton", type: "work" },
    { id: 3, name: "Gym", address: "Virgin Active, Rosebank", type: "gym" },
    { id: 4, name: "Mom's House", address: "234 Jan Smuts Ave, Parktown", type: "family" },
    { id: 5, name: "Favorite Restaurant", address: "Marble Restaurant, Rosebank", type: "restaurant" }
  ];

  const promotions = [
    {
      id: 1,
      title: "10% Off Next 3 Rides",
      description: "Use code WEEKEND10 for 10% off your next 3 rides this weekend.",
      expiry: "2023-04-15",
      code: "WEEKEND10"
    },
    {
      id: 2,
      title: "Earn Double Points",
      description: "Earn double loyalty points on all rides to airports this month.",
      expiry: "2023-04-30",
      code: null
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Dashboard Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-3xl font-bold text-khwela-blue">
                Welcome, {riderName}
              </h1>
              <p className="text-khwela-slate mt-1">
                Where would you like to go today?
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex space-x-3">
              <Button asChild className="bg-khwela-gold text-khwela-blue hover:bg-khwela-gold/90">
                <a href="/ride">
                  <Car size={16} className="mr-2" /> 
                  Book a Ride
                </a>
              </Button>
              <Button variant="outline" className="border-khwela-blue text-khwela-blue hover:bg-khwela-light">
                <Settings size={16} className="mr-2" />
                Account Settings
              </Button>
            </div>
          </div>
        </div>

        {/* Quick Booking Card */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-khwela-blue mb-4">Quick Book</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="col-span-1 md:col-span-2 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center rounded-md border border-gray-200 px-3 py-2">
                    <MapPin size={18} className="text-khwela-blue mr-2" />
                    <input type="text" placeholder="Enter pickup location" className="w-full bg-transparent border-0 focus:outline-none text-khwela-slate" />
                  </div>
                  <div className="flex items-center rounded-md border border-gray-200 px-3 py-2">
                    <MapPin size={18} className="text-red-500 mr-2" />
                    <input type="text" placeholder="Enter destination" className="w-full bg-transparent border-0 focus:outline-none text-khwela-slate" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center rounded-md border border-gray-200 px-3 py-2">
                    <Calendar size={18} className="text-khwela-slate mr-2" />
                    <input type="date" className="w-full bg-transparent border-0 focus:outline-none text-khwela-slate" />
                  </div>
                  <div className="flex items-center rounded-md border border-gray-200 px-3 py-2">
                    <Clock size={18} className="text-khwela-slate mr-2" />
                    <input type="time" className="w-full bg-transparent border-0 focus:outline-none text-khwela-slate" />
                  </div>
                </div>
              </div>
              <div>
                <Button className="w-full h-full bg-khwela-blue hover:bg-khwela-blue/90">
                  <Car size={18} className="mr-2" />
                  Find a Ride
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Total Rides */}
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-khwela-slate mb-1">Total Rides</p>
                  <h3 className="text-3xl font-bold text-khwela-blue">{riderStats.totalRides}</h3>
                  <p className="text-xs text-khwela-slate mt-1">With Khwela</p>
                </div>
                <div className="h-10 w-10 rounded-full bg-khwela-light flex items-center justify-center">
                  <Car size={20} className="text-khwela-blue" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Favorite Locations */}
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-khwela-slate mb-1">Saved Places</p>
                  <h3 className="text-3xl font-bold text-khwela-blue">{riderStats.favoriteLocations}</h3>
                  <p className="text-xs text-khwela-slate mt-1">Favorite locations</p>
                </div>
                <div className="h-10 w-10 rounded-full bg-khwela-light flex items-center justify-center">
                  <Heart size={20} className="text-khwela-blue" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Rating */}
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-khwela-slate mb-1">Your Rating</p>
                  <h3 className="text-3xl font-bold text-khwela-blue">{riderStats.ratingAvg}</h3>
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

          {/* Loyalty Points */}
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-khwela-slate mb-1">Loyalty Points</p>
                  <h3 className="text-3xl font-bold text-khwela-blue">{riderStats.loyaltyPoints}</h3>
                  <p className="text-xs text-green-600 mt-1">Redeem for discounts</p>
                </div>
                <div className="h-10 w-10 rounded-full bg-khwela-light flex items-center justify-center">
                  <Gift size={20} className="text-khwela-blue" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Rides Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Ride History & Upcoming */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader className="px-6 pt-6 pb-2">
                <Tabs defaultValue="upcoming" value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-xl font-bold text-khwela-blue">Your Rides</CardTitle>
                    <TabsList>
                      <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                      <TabsTrigger value="history">History</TabsTrigger>
                    </TabsList>
                  </div>
                </Tabs>
              </CardHeader>
              <CardContent className="px-6 py-4">
                <TabsContent value="upcoming" className="mt-0">
                  {upcomingRides.length > 0 ? (
                    <div className="space-y-4">
                      {upcomingRides.map((ride) => (
                        <div key={ride.id} className="border border-gray-100 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <div className="flex items-center">
                                <Calendar size={16} className="text-khwela-blue mr-2" />
                                <span className="text-sm font-medium text-khwela-slate">
                                  {new Date(ride.date).toLocaleDateString('en-ZA')} • {ride.time}
                                </span>
                              </div>
                              <h4 className="font-medium text-khwela-blue mt-1">{ride.id}</h4>
                            </div>
                            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                              Scheduled
                            </Badge>
                          </div>
                          <div className="space-y-2 mb-4">
                            <div className="flex items-start">
                              <div className="min-w-[24px] flex justify-center mt-1">
                                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                              </div>
                              <div className="ml-2">
                                <p className="text-sm font-medium text-khwela-slate">Pickup</p>
                                <p className="text-sm text-khwela-blue">{ride.pickup}</p>
                              </div>
                            </div>
                            <div className="flex items-start">
                              <div className="min-w-[24px] flex justify-center mt-1">
                                <div className="h-2 w-2 rounded-full bg-red-500"></div>
                              </div>
                              <div className="ml-2">
                                <p className="text-sm font-medium text-khwela-slate">Dropoff</p>
                                <p className="text-sm text-khwela-blue">{ride.dropoff}</p>
                              </div>
                            </div>
                          </div>
                          <div className="border-t border-gray-100 pt-3">
                            <div className="flex items-center">
                              <div className="h-8 w-8 rounded-full bg-khwela-light flex items-center justify-center">
                                <User size={16} className="text-khwela-blue" />
                              </div>
                              <div className="ml-2">
                                <p className="text-sm font-medium text-khwela-blue">{ride.driver.name}</p>
                                <div className="flex items-center mt-0.5">
                                  <Star size={12} className="text-yellow-500 fill-current" />
                                  <span className="text-xs text-khwela-slate ml-1">{ride.driver.rating} • {ride.driver.car}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex mt-4">
                            <Button variant="outline" size="sm" className="border-red-500 text-red-500 hover:bg-red-50 mr-2">
                              Cancel
                            </Button>
                            <Button size="sm" className="bg-khwela-blue hover:bg-khwela-blue/90">
                              View Details
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <Clock3 size={48} className="text-gray-300 mx-auto mb-4" />
                      <h4 className="text-lg font-medium text-khwela-blue mb-2">No upcoming rides</h4>
                      <p className="text-khwela-slate mb-4">You don't have any scheduled rides right now.</p>
                      <Button asChild className="bg-khwela-blue hover:bg-khwela-blue/90">
                        <a href="/ride">Book a Ride</a>
                      </Button>
                    </div>
                  )}
                </TabsContent>
                <TabsContent value="history" className="mt-0">
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-3 px-4 text-xs font-semibold text-khwela-slate">Date</th>
                          <th className="text-left py-3 px-4 text-xs font-semibold text-khwela-slate">Route</th>
                          <th className="text-left py-3 px-4 text-xs font-semibold text-khwela-slate">Fare</th>
                          <th className="text-left py-3 px-4 text-xs font-semibold text-khwela-slate">Driver</th>
                          <th className="text-left py-3 px-4 text-xs font-semibold text-khwela-slate">Rating</th>
                          <th className="text-left py-3 px-4 text-xs font-semibold text-khwela-slate"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {recentRides.map((ride, index) => (
                          <tr key={ride.id} className={`border-b border-gray-100 ${index % 2 === 0 ? 'bg-gray-50' : ''}`}>
                            <td className="py-3 px-4">
                              <div className="text-sm font-medium text-khwela-blue">
                                {new Date(ride.date).toLocaleDateString('en-ZA')}
                              </div>
                              <div className="text-xs text-khwela-slate">{ride.time}</div>
                            </td>
                            <td className="py-3 px-4">
                              <div className="flex flex-col">
                                <div className="flex items-center">
                                  <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                                  <span className="text-sm text-khwela-slate">{ride.pickup}</span>
                                </div>
                                <div className="flex items-center mt-1">
                                  <div className="h-2 w-2 rounded-full bg-red-500 mr-2"></div>
                                  <span className="text-sm text-khwela-slate">{ride.dropoff}</span>
                                </div>
                              </div>
                            </td>
                            <td className="py-3 px-4">
                              <div className="text-sm font-medium text-khwela-blue">R{ride.fare}</div>
                            </td>
                            <td className="py-3 px-4">
                              <div className="text-sm text-khwela-slate">{ride.driver}</div>
                            </td>
                            <td className="py-3 px-4">
                              <div className="flex items-center">
                                <Star size={14} className="text-yellow-500 fill-current" />
                                <span className="ml-1 text-sm text-khwela-slate">{ride.rating}</span>
                              </div>
                            </td>
                            <td className="py-3 px-4">
                              <Button variant="ghost" size="sm" className="h-8 text-khwela-blue hover:text-khwela-blue/70">
                                Details
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="text-center mt-4">
                    <Button variant="outline" className="text-khwela-blue border-khwela-blue hover:bg-khwela-light">
                      <History size={16} className="mr-2" /> View All Rides
                    </Button>
                  </div>
                </TabsContent>
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar */}
          <div>
            {/* Saved Locations */}
            <Card className="mb-6">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-xl font-bold text-khwela-blue">Saved Places</CardTitle>
                <Button variant="ghost" size="sm" className="text-khwela-blue hover:text-khwela-blue/70">
                  Manage
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {favoriteLocations.slice(0, 3).map((location) => (
                    <div key={location.id} className="flex items-center p-3 rounded-lg hover:bg-gray-50">
                      <div className="h-10 w-10 rounded-full bg-khwela-light flex items-center justify-center mr-3 flex-shrink-0">
                        <MapPin size={20} className="text-khwela-blue" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-khwela-blue">{location.name}</span>
                          <Badge variant="outline" className="border-khwela-blue text-khwela-blue">
                            {location.type}
                          </Badge>
                        </div>
                        <div className="text-xs text-khwela-slate mt-1">
                          {location.address}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-4 bg-khwela-blue hover:bg-khwela-blue/90">
                  <Plus size={16} className="mr-2" /> Add New Location
                </Button>
              </CardContent>
            </Card>

            {/* Promotions */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-xl font-bold text-khwela-blue">Current Promotions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {promotions.map((promo) => (
                    <div key={promo.id} className="border border-gray-100 rounded-lg p-4 hover:bg-gray-50">
                      <div className="flex justify-between">
                        <h4 className="font-medium text-khwela-blue">{promo.title}</h4>
                        {promo.code && (
                          <Badge className="bg-khwela-gold/20 text-amber-700 hover:bg-khwela-gold/20">
                            {promo.code}
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-khwela-slate mt-1">{promo.description}</p>
                      <div className="text-xs text-khwela-slate mt-2">
                        Valid until: {new Date(promo.expiry).toLocaleDateString('en-ZA')}
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4 border-khwela-blue text-khwela-blue hover:bg-khwela-light">
                  View All Promotions
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Button variant="outline" className="border-khwela-blue text-khwela-blue hover:bg-khwela-light h-auto py-3">
            <Receipt size={18} className="mr-2" />
            Payment Methods
          </Button>
          <Button variant="outline" className="border-khwela-blue text-khwela-blue hover:bg-khwela-light h-auto py-3">
            <User size={18} className="mr-2" />
            Profile Settings
          </Button>
          <Button variant="outline" className="border-khwela-blue text-khwela-blue hover:bg-khwela-light h-auto py-3">
            <Gift size={18} className="mr-2" />
            Refer & Earn
          </Button>
          <Button variant="outline" className="border-khwela-blue text-khwela-blue hover:bg-khwela-light h-auto py-3">
            <HelpCircle size={18} className="mr-2" />
            Get Help
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RiderDashboard;
