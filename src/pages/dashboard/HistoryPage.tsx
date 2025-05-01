
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, User, Star, Filter, Calendar, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface HistoryPageProps {
  userType: "rider" | "driver";
}

const HistoryPage = ({ userType }: HistoryPageProps) => {
  const navigate = useNavigate();
  
  // Check if user is logged in with the correct role
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("khwela-auth") === "true";
    const storedUserType = localStorage.getItem("khwela-user-type");
    
    if (!isLoggedIn || storedUserType !== userType) {
      navigate("/login");
    }
  }, [navigate, userType]);

  // Simulated history data
  const historyItems = userType === "driver" ? [
    { 
      id: 1, 
      passengerName: "John M.", 
      from: "Sandton City", 
      to: "OR Tambo Airport", 
      date: "2023-04-28", 
      time: "14:30",
      amount: "R120.00", 
      rating: 5,
      status: "Completed" 
    },
    { 
      id: 2, 
      passengerName: "Sarah K.", 
      from: "Rosebank Mall", 
      to: "Melrose Arch", 
      date: "2023-04-25", 
      time: "10:15",
      amount: "R65.00", 
      rating: 4,
      status: "Completed" 
    },
    { 
      id: 3, 
      passengerName: "David T.", 
      from: "Fourways Mall", 
      to: "Monte Casino", 
      date: "2023-04-20", 
      time: "19:45",
      amount: "R85.00", 
      rating: 5,
      status: "Completed" 
    },
  ] : [
    { 
      id: 1, 
      driverName: "Michael S.", 
      from: "Sandton City", 
      to: "OR Tambo Airport", 
      date: "2023-04-28", 
      time: "14:30",
      amount: "R120.00", 
      status: "Completed" 
    },
    { 
      id: 2, 
      driverName: "Robert N.", 
      from: "Rosebank Mall", 
      to: "Melrose Arch", 
      date: "2023-04-25", 
      time: "10:15",
      amount: "R65.00", 
      status: "Completed" 
    },
    { 
      id: 3, 
      driverName: "James K.", 
      from: "Fourways Mall", 
      to: "Monte Casino", 
      date: "2023-04-20", 
      time: "19:45",
      amount: "R85.00", 
      status: "Completed" 
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-khwela-blue">
              {userType === "driver" ? "Activity History" : "Ride History"}
            </h1>
            <p className="text-khwela-slate mt-1">
              {userType === "driver" 
                ? "View all your past rides and earnings" 
                : "View all your past rides and payments"}
            </p>
          </div>
          <Button 
            variant="outline" 
            className="border-khwela-blue text-khwela-blue"
            onClick={() => navigate(`/${userType}-dashboard`)}
          >
            Back to Dashboard
          </Button>
        </div>

        <Card className="mb-6">
          <CardHeader className="bg-khwela-light/50 border-b pb-3">
            <CardTitle className="flex items-center text-khwela-blue">
              <Filter className="mr-2" size={20} />
              Search & Filter
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                <Input 
                  className="pl-10" 
                  placeholder={`Search ${userType === "driver" ? "passengers" : "drivers"} or locations`} 
                />
              </div>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                <Input className="pl-10" type="date" />
              </div>
              <Button className="bg-khwela-blue text-white hover:bg-khwela-blue/90">
                Apply Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="bg-khwela-light/50 border-b pb-3">
            <CardTitle className="flex items-center text-khwela-blue">
              <Clock className="mr-2" size={20} />
              {userType === "driver" ? "Ride Activity" : "Your Rides"}
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              {historyItems.map((item) => (
                <div key={item.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <div className="flex items-center mb-1">
                        {userType === "driver" ? (
                          <User className="h-4 w-4 text-khwela-blue mr-1" />
                        ) : (
                          <User className="h-4 w-4 text-khwela-blue mr-1" />
                        )}
                        <p className="text-sm font-medium">
                          {userType === "driver" ? item.passengerName : item.driverName}
                        </p>
                        {userType === "driver" && "rating" in item && (
                          <div className="flex items-center ml-2">
                            <Star className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                            <span className="text-xs ml-1">{item.rating}</span>
                          </div>
                        )}
                      </div>
                      <p className="text-khwela-blue font-medium flex items-center">
                        <MapPin className="h-3 w-3 mr-1 flex-shrink-0" />
                        {item.from} → {item.to}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-khwela-blue font-semibold">{item.amount}</p>
                      <p className="text-green-600 text-xs font-medium">{item.status}</p>
                    </div>
                  </div>
                  <div className="flex justify-between text-xs text-khwela-slate">
                    <p>{item.date} • {item.time}</p>
                    <Button variant="link" className="h-auto p-0 text-xs text-khwela-blue">
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
              
              <Button variant="outline" className="w-full border-khwela-blue text-khwela-blue">
                Load More
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default HistoryPage;
