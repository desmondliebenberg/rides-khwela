
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Award, ShieldCheck, CheckCircle } from "lucide-react";

interface BadgeStatusProps {
  level: "Gold" | "Silver" | "None";
  complianceScore: number;
  safetyScore: number;
  completedTrips: number;
  onTime: number;
}

const DriverBadgeStatus = ({ 
  level = "Gold", 
  complianceScore = 95, 
  safetyScore = 98, 
  completedTrips = 547,
  onTime = 92
}: Partial<BadgeStatusProps>) => {
  const getBadgeColor = () => {
    switch (level) {
      case "Gold": return "bg-khwela-gold text-khwela-dark";
      case "Silver": return "bg-gray-300 text-gray-700";
      default: return "bg-gray-200 text-gray-500";
    }
  };

  const getNextBadgeRequirement = () => {
    if (level === "Gold") return null;
    if (level === "Silver") return "Maintain 95% compliance for Gold";
    return "Reach 80% compliance for Silver";
  };

  const nextRequirement = getNextBadgeRequirement();

  return (
    <Card className="shadow-md">
      <CardHeader className="bg-khwela-light/50 border-b pb-3">
        <CardTitle className="flex items-center text-khwela-blue">
          <Award className="mr-2" size={20} />
          Driver Badge Status
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="flex justify-between mb-6">
          <div className="text-center">
            <div className="bg-gradient-to-r from-khwela-blue to-khwela-dark rounded-full p-6 mb-2 inline-block">
              <Award size={32} className="text-white" />
            </div>
            <Badge className={`${getBadgeColor()} px-3 py-1 text-sm`}>{level} Badge</Badge>
            {nextRequirement && (
              <p className="text-xs mt-2 text-khwela-slate">{nextRequirement}</p>
            )}
          </div>
          
          <div className="space-y-6 flex-grow ml-8">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-khwela-blue flex items-center">
                  <ShieldCheck size={16} className="mr-1" /> Compliance Score
                </span>
                <span className="text-sm font-medium text-khwela-blue">{complianceScore}%</span>
              </div>
              <Progress value={complianceScore} className="h-2" />
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-khwela-blue flex items-center">
                  <CheckCircle size={16} className="mr-1" /> Safety Rating
                </span>
                <span className="text-sm font-medium text-khwela-blue">{safetyScore}%</span>
              </div>
              <Progress value={safetyScore} className="h-2" />
            </div>
            
            <div className="flex justify-between text-sm mt-4 text-khwela-slate">
              <div>
                <p className="font-medium text-khwela-blue">{completedTrips}</p>
                <p>Rides Completed</p>
              </div>
              <div>
                <p className="font-medium text-khwela-blue">{onTime}%</p>
                <p>On-time Arrival</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t pt-4">
          <h3 className="font-medium text-khwela-blue mb-2">Badge Benefits</h3>
          <div className="space-y-2">
            <div className="flex items-start">
              <Badge className="bg-khwela-gold text-khwela-dark mt-0.5">Gold</Badge>
              <p className="text-sm ml-2 text-khwela-slate">Priority trip assignments, 5% reduced company fee</p>
            </div>
            <div className="flex items-start">
              <Badge className="bg-gray-300 text-gray-700 mt-0.5">Silver</Badge>
              <p className="text-sm ml-2 text-khwela-slate">2% reduced company fee, promotional opportunities</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DriverBadgeStatus;
