
import React from "react";
import { Button } from "@/components/ui/button";

const CashRidesCTA = () => {
  return (
    <div className="max-w-4xl mx-auto text-center mt-20">
      <h2 className="text-2xl font-bold text-khwela-blue mb-4">Ready to Start Taking Cash Rides?</h2>
      <p className="text-lg text-khwela-slate mb-8">
        Complete the required training module and start accepting cash payments safely.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Button className="bg-khwela-blue text-white hover:bg-khwela-blue/90">
          Complete Cash Training
        </Button>
        <Button variant="outline" className="border-khwela-blue text-khwela-blue">
          Learn About Driver Dashboard
        </Button>
      </div>
    </div>
  );
};

export default CashRidesCTA;
