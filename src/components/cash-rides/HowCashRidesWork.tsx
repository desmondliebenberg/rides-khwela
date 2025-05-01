
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Wallet, UserCheck, Clock } from "lucide-react";

const HowCashRidesWork = () => {
  return (
    <div className="max-w-6xl mx-auto mb-20">
      <div className="flex items-center justify-center space-x-3 mb-8">
        <Wallet size={24} className="text-khwela-blue" />
        <h2 className="text-2xl font-bold text-khwela-blue">How Cash Rides Work</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="h-12 w-12 bg-khwela-light rounded-full flex items-center justify-center mb-4">
              <UserCheck size={24} className="text-khwela-blue" />
            </div>
            <h3 className="text-lg font-semibold text-khwela-blue mb-3">Verified Riders Only</h3>
            <p className="text-sm text-khwela-slate">
              Only riders with a valid card payment history and at least 2 completed trips can access cash payment options.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="h-12 w-12 bg-khwela-light rounded-full flex items-center justify-center mb-4">
              <Clock size={24} className="text-khwela-blue" />
            </div>
            <h3 className="text-lg font-semibold text-khwela-blue mb-3">Time Restrictions</h3>
            <p className="text-sm text-khwela-slate">
              Drivers can accept or decline cash trips after 18:00 for safety reasons. You always have the option to choose card-only rides.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="h-12 w-12 bg-khwela-light rounded-full flex items-center justify-center mb-4">
              <Wallet size={24} className="text-khwela-blue" />
            </div>
            <h3 className="text-lg font-semibold text-khwela-blue mb-3">Rounded Up Fares</h3>
            <p className="text-sm text-khwela-slate">
              Cash fares are rounded up to the nearest R10 to simplify transactions (e.g., R58.90 becomes R70 cash fare).
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HowCashRidesWork;
