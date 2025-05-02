
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Clock, 
  Wallet, 
  User, 
  FileText,
  CheckCircle,
  AlertTriangle,
  QrCode,
  Award,
  BookOpen,
  ShieldCheck,
  ArrowRight
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const DriverDashboard = () => {
  const navigate = useNavigate();
  
  // Simulated data - in a real app this would come from an API
  const earnings = {
    today: "R650.00",
    week: "R4,250.00",
    month: "R16,500.00",
    pending: "R650.00"
  };

  const documents = [
    { name: "ID Document", status: "valid", expiryDate: "N/A" },
    { name: "Driver's License", status: "valid", expiryDate: "2025-06-15" },
    { name: "Vehicle License Disc", status: "warning", expiryDate: "2023-05-30" },
    { name: "Police Clearance", status: "valid", expiryDate: "2023-09-22" },
  ];

  const badgeStatus = {
    level: "Gold",
    compliance: 95,
    safetyScore: 98,
    completedTrips: 547,
    trainingModules: 8
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-khwela-blue">Driver Dashboard</h1>
        <p className="text-khwela-slate mt-2">Manage your shifts, track earnings, and maintain compliance.</p>
      </div>

      {/* Top Action Bar */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <Card>
          <CardContent className="p-4 flex flex-col sm:flex-row items-center justify-between">
            <div className="flex items-center mb-3 sm:mb-0">
              <div className="mr-4 bg-khwela-light rounded-full p-3">
                <Clock size={24} className="text-khwela-blue" />
              </div>
              <div>
                <p className="text-khwela-slate text-sm">Current Status</p>
                <p className="font-semibold text-khwela-blue">Offline</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button className="bg-khwela-gold text-khwela-dark hover:bg-khwela-gold/90">
                Start Shift
              </Button>
              <Button variant="outline" className="border-khwela-blue text-khwela-blue">
                Break Mode
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 flex flex-col sm:flex-row items-center justify-between">
            <div className="flex items-center mb-3 sm:mb-0">
              <div className="mr-4 bg-khwela-light rounded-full p-3">
                <Award size={24} className="text-khwela-blue" />
              </div>
              <div>
                <p className="text-khwela-slate text-sm">Badge Status</p>
                <div className="flex items-center">
                  <Badge className="bg-khwela-gold text-khwela-dark">{badgeStatus.level}</Badge>
                  <span className="text-xs text-khwela-slate ml-2">Compliance: {badgeStatus.compliance}%</span>
                </div>
              </div>
            </div>
            <Button 
              variant="outline" 
              className="border-khwela-blue text-khwela-blue"
              onClick={() => navigate("/driver-dashboard/compliance")}
            >
              View Compliance
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Main Dashboard Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Earnings */}
        <Card className="col-span-1">
          <CardHeader className="bg-khwela-light/50 border-b pb-3">
            <CardTitle className="flex items-center text-khwela-blue">
              <Wallet className="mr-2" size={20} />
              Earnings
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="mb-6 bg-gradient-to-r from-khwela-blue to-khwela-dark p-6 rounded-lg text-white">
              <p className="text-sm font-medium">Ready for Payout</p>
              <p className="text-3xl font-bold mt-2">{earnings.pending}</p>
              <Button size="sm" className="mt-4 bg-white text-khwela-blue hover:bg-white/90">
                Instant Payout
              </Button>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <p className="text-khwela-slate">Today</p>
                <p className="font-semibold text-khwela-blue">{earnings.today}</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-khwela-slate">This Week</p>
                <p className="font-semibold text-khwela-blue">{earnings.week}</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-khwela-slate">This Month</p>
                <p className="font-semibold text-khwela-blue">{earnings.month}</p>
              </div>
              <Button 
                variant="link" 
                className="w-full text-khwela-blue"
                onClick={() => navigate("/driver-dashboard/wallet")}
              >
                View Earnings History
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Middle Column - Compliance Center */}
        <Card className="col-span-1">
          <CardHeader className="bg-khwela-light/50 border-b pb-3">
            <CardTitle className="flex items-center text-khwela-blue">
              <ShieldCheck className="mr-2" size={20} />
              Compliance Center
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              {documents.map((doc, index) => (
                <div key={index} className="flex items-center justify-between border-b pb-3 last:border-0">
                  <div className="flex items-center">
                    <div className="mr-3">
                      {doc.status === 'valid' ? (
                        <CheckCircle size={18} className="text-green-600" />
                      ) : (
                        <AlertTriangle size={18} className="text-amber-500" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-khwela-blue">{doc.name}</p>
                      <p className="text-xs text-khwela-slate">
                        {doc.status === 'valid' ? 'Valid' : 'Action Required'} {doc.expiryDate !== 'N/A' && `· Expires: ${doc.expiryDate}`}
                      </p>
                    </div>
                  </div>
                  <Button size="sm" variant="ghost" className="h-8 text-khwela-blue">
                    View
                  </Button>
                </div>
              ))}
              
              <Button 
                className="w-full bg-khwela-blue hover:bg-khwela-blue/90"
                onClick={() => navigate("/driver-dashboard/compliance")}
              >
                Manage Documents
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Right Column - Training & QR Code */}
        <Card className="col-span-1">
          <CardHeader className="bg-khwela-light/50 border-b pb-3">
            <CardTitle className="flex items-center text-khwela-blue">
              <BookOpen className="mr-2" size={20} />
              Training & Tools
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-5">
              <div>
                <div className="flex justify-between mb-2">
                  <h3 className="text-sm font-medium text-khwela-blue">Training Progress</h3>
                  <span className="text-xs text-khwela-slate">{badgeStatus.trainingModules}/10 Modules</span>
                </div>
                <Progress value={badgeStatus.trainingModules * 10} className="h-2" />
                <Button variant="link" className="text-sm p-0 h-auto mt-2 text-khwela-blue">
                  Continue Training <ArrowRight size={14} className="ml-1" />
                </Button>
              </div>

              <div className="border-t pt-4">
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
                  Riders will scan this code to verify trips
                </p>
              </div>
              
              <Button variant="outline" className="w-full border-khwela-blue text-khwela-blue">
                Download for Offline Use
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DriverDashboard;
