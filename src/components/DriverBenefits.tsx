
import { Button } from "@/components/ui/button";
import { DollarSign, Clock, Award, Calendar } from "lucide-react";

const DriverBenefits = () => {
  return (
    <section className="py-20 bg-khwela-blue text-white" id="driver-benefits">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Better Earnings, Fair Treatment</h2>
            <div className="h-1 w-20 bg-khwela-gold mb-6"></div>
            <p className="text-lg mb-8 text-white/90">
              Khwela puts drivers first with better rates, flexible scheduling, and transparent earnings. No hidden fees, no unfair penalties, just honest work for honest pay.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start">
                <div className="bg-white/10 rounded-full p-2 mr-4">
                  <DollarSign className="text-khwela-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Fixed Transparent Earnings</h3>
                  <p className="text-white/80">
                    Earn AA rates + R2/km on every trip, plus keep 100% of your tips. No complicated calculations or hidden deductions.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white/10 rounded-full p-2 mr-4">
                  <Clock className="text-khwela-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Flexible Scheduling</h3>
                  <p className="text-white/80">
                    Take breaks and schedule your shifts without penalties. You deserve to work on your own terms.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white/10 rounded-full p-2 mr-4">
                  <Calendar className="text-khwela-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Daily Payouts</h3>
                  <p className="text-white/80">
                    Get your earnings instantly or daily - you choose when to cash out with our multiple payout options.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white/10 rounded-full p-2 mr-4">
                  <Award className="text-khwela-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Badge Reward System</h3>
                  <p className="text-white/80">
                    Unlock higher earning potential with our badge system. Rewards for consistent safety and quality service.
                  </p>
                </div>
              </div>
            </div>
            
            <Button size="lg" className="bg-khwela-gold text-khwela-dark hover:bg-khwela-gold/90">
              Become a Driver
            </Button>
          </div>
          
          <div className="relative hidden md:block animate-slide-up">
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-khwela-gold/20 rounded-full blur-3xl"></div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-2xl relative z-10">
              <div className="bg-khwela-dark text-white p-6">
                <h3 className="text-2xl font-bold">Driver Earnings</h3>
                <p className="text-white/80">Weekly summary</p>
              </div>
              
              <div className="p-6">
                <div className="space-y-6">
                  <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                    <span className="text-gray-600">Trip Earnings:</span>
                    <span className="text-khwela-blue font-bold text-xl">R3,540.00</span>
                  </div>
                  
                  <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                    <span className="text-gray-600">Tips:</span>
                    <span className="text-khwela-blue font-bold text-xl">R285.00</span>
                  </div>
                  
                  <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                    <span className="text-gray-600">Khwela Fee:</span>
                    <span className="text-gray-600">-R100.00</span>
                  </div>
                  
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-gray-900 font-semibold">Total:</span>
                    <span className="text-khwela-blue font-bold text-2xl">R3,725.00</span>
                  </div>
                </div>
                
                <div className="mt-8 bg-khwela-light p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-medium text-khwela-blue">Available for payout</h4>
                      <p className="text-gray-500 text-sm">Instant transfer available</p>
                    </div>
                    <div className="text-right">
                      <span className="block text-khwela-blue font-bold text-xl">R3,725.00</span>
                      <Button size="sm" variant="outline" className="mt-2 text-khwela-blue border-khwela-blue hover:bg-khwela-blue hover:text-white">
                        Cash Out
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-khwela-dark/30 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DriverBenefits;
