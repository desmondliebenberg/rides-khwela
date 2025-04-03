
import { Button } from "@/components/ui/button";
import { ShieldCheck, Clock, DollarSign } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative pt-20 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-cover bg-center z-0" style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1610561487084-548d76219e8d?auto=format&fit=crop&q=80&w=1470')"}}>
        <div className="absolute inset-0 bg-gradient-to-r from-khwela-blue/90 to-khwela-dark/80"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white animate-fade-in">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6 border border-white/20">
              <span className="bg-khwela-gold w-2 h-2 rounded-full mr-2"></span>
              South Africa's Safest Ride-Hailing Service
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Safe Rides, <span className="text-khwela-gold">Better Journeys</span></h1>
            <p className="text-lg mb-8 text-white/80 max-w-lg">
              Khwela offers enhanced safety features, transparent pricing, and better conditions for both riders and drivers across South Africa.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="bg-khwela-gold text-khwela-dark hover:bg-khwela-gold/90">
                Request a Ride
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                Become a Driver
              </Button>
            </div>

            {/* Hero stats */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <div className="bg-white/20 rounded-full p-2">
                  <ShieldCheck className="text-khwela-gold" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Enhanced Safety</h3>
                  <p className="text-sm text-white">Verified drivers</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-white/20 rounded-full p-2">
                  <Clock className="text-khwela-gold" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Reliable Service</h3>
                  <p className="text-sm text-white">24/7 availability</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-white/20 rounded-full p-2">
                  <DollarSign className="text-khwela-gold" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Fair Pricing</h3>
                  <p className="text-sm text-white">No surge charges</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile App Preview */}
          <div className="hidden md:block relative animate-slide-up">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-2 border border-white/20 shadow-xl">
              <div className="bg-white rounded-xl overflow-hidden">
                <div className="bg-khwela-blue text-white p-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Khwela App</span>
                    <span className="text-sm">14:25</span>
                  </div>
                </div>
                <div className="p-4">
                  <div className="space-y-4">
                    <div className="bg-gray-100 h-10 rounded-full w-full"></div>
                    <div className="bg-gray-100 h-32 rounded-lg w-full"></div>
                    <div className="flex space-x-2">
                      <div className="bg-khwela-light h-12 rounded-lg flex-1 flex items-center justify-center text-khwela-blue font-medium">
                        Request Ride
                      </div>
                      <div className="bg-gray-100 h-12 rounded-lg flex-1"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="bg-gray-100 h-6 rounded-full w-3/4"></div>
                      <div className="bg-gray-100 h-6 rounded-full w-1/2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-khwela-gold/20 rounded-full blur-2xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-khwela-blue/30 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,133.3C672,139,768,181,864,181.3C960,181,1056,139,1152,117.3C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
