
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ShieldCheck, Wallet, Clock } from "lucide-react";

const NewHero = () => {
  return (
    <div className="relative">
      {/* Hero Background with animated overlay */}
      <div className="absolute inset-0 bg-khwela-green overflow-hidden">
        {/* Main background with gradient overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-khwela-green/90 to-khwela-green/70" 
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        
        {/* Rainbow accent line */}
        <div className="absolute top-0 left-0 w-full h-2 rainbow-gradient"></div>
        
        {/* Animated elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated circles */}
          <div className="absolute top-1/4 left-1/5 w-56 h-56 rounded-full bg-khwela-gold/10 animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-khwela-green/20 animate-pulse" style={{animationDelay: "1s"}}></div>
          <div className="absolute top-2/3 left-1/3 w-48 h-48 rounded-full bg-white/5 animate-pulse" style={{animationDelay: "1.5s"}}></div>
          
          {/* Animated gradient lines */}
          <div className="absolute top-0 left-0 w-full h-full">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fff" stopOpacity="0.05" />
                  <stop offset="100%" stopColor="#fff" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path 
                d="M0,100 Q300,150 600,50 T1200,100" 
                fill="none" 
                stroke="url(#grad1)" 
                strokeWidth="2"
                className="animate-[pulse_4s_ease-in-out_infinite]"
              />
              <path 
                d="M0,200 Q400,100 800,250 T1600,200" 
                fill="none" 
                stroke="url(#grad1)" 
                strokeWidth="1.5"
                className="animate-[pulse_6s_ease-in-out_infinite]"
                style={{animationDelay: "2s"}}
              />
            </svg>
          </div>
          
          {/* Floating particles */}
          <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-khwela-gold rounded-full animate-[float_8s_ease-in-out_infinite]"></div>
          <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-white/40 rounded-full animate-[float_6s_ease-in-out_infinite]" style={{animationDelay: "2s"}}></div>
          <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-khwela-gold/30 rounded-full animate-[float_10s_ease-in-out_infinite]" style={{animationDelay: "1s"}}></div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative min-h-[70vh] flex items-center">
        <div className="container mx-auto px-4 py-20 md:py-24">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
              Khwela
              <span className="block text-khwela-gold">Safe Rides, Better Journeys</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 animate-slide-up max-w-lg mx-auto">
              South Africa's most driver-first platform offering safe, reliable and transparent ride-hailing services.
            </p>
            
            <div className="relative inline-block mb-8">
              <div className="h-1 w-40 mx-auto rainbow-gradient rounded-full"></div>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              <Button size="lg" className="bg-khwela-gold text-khwela-dark hover:bg-khwela-gold/90">
                <Link to="/ride">Request a Ride</Link>
              </Button>
              <Button 
                size="lg" 
                className="bg-white text-khwela-green hover:bg-gray-100 border-2 border-white"
              >
                <Link to="/driver">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Simple Benefits Section */}
      <div className="relative bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Benefit 1 */}
            <div className="benefit-tile text-center">
              <div className="feature-icon mx-auto mb-4">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-lg font-semibold text-khwela-green mb-2">Safety First</h3>
              <p className="text-khwela-slate">Facial Recognition + Verified Riders</p>
            </div>
            
            {/* Benefit 2 */}
            <div className="benefit-tile text-center">
              <div className="feature-icon mx-auto mb-4">
                <Wallet size={24} />
              </div>
              <h3 className="text-lg font-semibold text-khwela-green mb-2">Fair Pricing</h3>
              <p className="text-khwela-slate">Transparent rates with no surge pricing</p>
            </div>
            
            {/* Benefit 3 */}
            <div className="benefit-tile text-center">
              <div className="feature-icon mx-auto mb-4">
                <Clock size={24} />
              </div>
              <h3 className="text-lg font-semibold text-khwela-green mb-2">Reliable Service</h3>
              <p className="text-khwela-slate">24/7 availability across South Africa</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewHero;
