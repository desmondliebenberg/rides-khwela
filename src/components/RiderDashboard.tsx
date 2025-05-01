
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Navigation, 
  Clock, 
  Wallet, 
  User, 
  AlertTriangle,
  FileText,
  MessageSquare,
  QrCode,
  ArrowRight
} from "lucide-react";

const RiderDashboard = () => {
  // Simulated data - in a real app this would come from an API
  const recentTrips = [
    { id: 1, from: "Sandton City", to: "OR Tambo Airport", date: "2023-04-28", amount: "R120.00", status: "Completed" },
    { id: 2, from: "Rosebank Mall", to: "Melrose Arch", date: "2023-04-25", amount: "R65.00", status: "Completed" },
    { id: 3, from: "Fourways Mall", to: "Monte Casino", date: "2023-04-20", amount: "R85.00", status: "Completed" },
  ];

  const walletBalance = "R350.00";

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-khwela-blue">Rider Dashboard</h1>
        <p className="text-khwela-slate mt-2">Book rides, manage your wallet, and view your trip history.</p>
      </div>

      {/* Main Dashboard Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Book a Ride */}
        <Card className="col-span-1">
          <CardHeader className="bg-khwela-light/50 border-b pb-3">
            <CardTitle className="flex items-center text-khwela-blue">
              <Navigation className="mr-2" size={20} />
              Book a Ride
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <Button className="w-full bg-khwela-gold text-khwela-dark hover:bg-khwela-gold/90 font-medium">
                Request New Ride
              </Button>
              
              <div className="p-4 bg-khwela-light/30 rounded-lg">
                <h3 className="font-semibold text-khwela-blue mb-2 flex items-center">
                  <AlertTriangle size={16} className="mr-2" />
                  Emergency Ride
                </h3>
                <p className="text-xs text-khwela-slate mb-3">
                  In case of emergency, request a priority ride that also alerts local authorities.
                </p>
                <Button variant="outline" className="w-full border-red-500 text-red-500 hover:bg-red-50">
                  Emergency Ride
                </Button>
              </div>
              
              <div className="border-t pt-4 mt-4">
                <h3 className="font-medium text-khwela-blue mb-2">Share with friends</h3>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <MessageSquare size={14} className="mr-2" /> WhatsApp
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <MessageSquare size={14} className="mr-2" /> SMS
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Middle Column - Wallet & QR */}
        <Card className="col-span-1">
          <CardHeader className="bg-khwela-light/50 border-b pb-3">
            <CardTitle className="flex items-center text-khwela-blue">
              <Wallet className="mr-2" size={20} />
              Wallet
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="mb-6 text-center bg-gradient-to-r from-khwela-blue to-khwela-dark p-6 rounded-lg text-white">
              <p className="text-sm font-medium">Current Balance</p>
              <p className="text-3xl font-bold mt-2">{walletBalance}</p>
            </div>
            
            <h3 className="font-medium text-khwela-blue mb-3">Top Up Options</h3>
            <div className="grid grid-cols-2 gap-2 mb-4">
              <Button variant="outline" size="sm">R50</Button>
              <Button variant="outline" size="sm">R100</Button>
              <Button variant="outline" size="sm">R200</Button>
              <Button variant="outline" size="sm">R500</Button>
            </div>
            
            <Button className="w-full bg-khwela-blue hover:bg-khwela-blue/90">
              Top Up Now
            </Button>

            <div className="mt-6 pt-4 border-t">
              <h3 className="font-medium text-khwela-blue mb-3 flex items-center">
                <QrCode size={16} className="mr-2" />
                Your QR Code
              </h3>
              <div className="bg-white p-4 border rounded-lg flex justify-center">
                <div className="w-32 h-32 bg-gray-200 flex items-center justify-center">
                  <QrCode size={80} />
                </div>
              </div>
              <p className="text-xs text-center text-khwela-slate mt-2">
                Scan this to verify your identity and confirm rides
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Right Column - Trip History */}
        <Card className="col-span-1">
          <CardHeader className="bg-khwela-light/50 border-b pb-3">
            <CardTitle className="flex items-center text-khwela-blue">
              <Clock className="mr-2" size={20} />
              Trip History
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              {recentTrips.map(trip => (
                <div key={trip.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <p className="font-medium text-khwela-blue">{trip.from} → {trip.to}</p>
                    <p className="text-khwela-blue font-semibold">{trip.amount}</p>
                  </div>
                  <div className="flex justify-between text-xs text-khwela-slate">
                    <p>{trip.date}</p>
                    <p className="text-green-600 font-medium">{trip.status}</p>
                  </div>
                </div>
              ))}
              
              <div className="text-center pt-2">
                <Button variant="link" className="text-khwela-blue">
                  View All Trips <ArrowRight size={14} className="ml-1" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RiderDashboard;
