import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, Wallet, Clock, Shield } from "lucide-react";

const NewHero = () => {
  const scrollToSignup = () => {
    // Implement smooth scroll to signup section
    document.getElementById('driver-signup')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative">
      {/* Hero Background with animated overlay */}
      <div className="absolute inset-0 bg-khwela-blue overflow-hidden">
        {/* Main background with gradient overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-khwela-blue/90 to-khwela-blue/70" 
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1580880783109-6746d2252e5d?q=80&w=1964&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            mixBlendMode: "overlay"
          }}
        ></div>
        
        {/* Animated elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated circles */}
          <div className="absolute top-1/4 left-1/5 w-56 h-56 rounded-full bg-khwela-gold/10 animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-khwela-blue/20 animate-pulse" style={{animationDelay: "1s"}}></div>
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
              <path 
                d="M0,350 Q500,300 1000,350 T2000,300" 
                fill="none" 
                stroke="url(#grad1)" 
                strokeWidth="2"
                className="animate-[pulse_5s_ease-in-out_infinite]"
                style={{animationDelay: "1s"}}
              />
            </svg>
          </div>
          
          {/* Floating particles */}
          <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-khwela-gold rounded-full animate-[float_8s_ease-in-out_infinite]"></div>
          <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-white/40 rounded-full animate-[float_6s_ease-in-out_infinite]" style={{animationDelay: "2s"}}></div>
          <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-khwela-gold/30 rounded-full animate-[float_10s_ease-in-out_infinite]" style={{animationDelay: "1s"}}></div>
          <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-white/30 rounded-full animate-[float_7s_ease-in-out_infinite]" style={{animationDelay: "3s"}}></div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative min-h-screen flex items-center">
        <div className="container mx-auto px-4 py-32 md:py-40">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
              Drive with Khwela.<br />
              <span className="text-khwela-gold">Your Ride. Your Rules.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 animate-slide-up">
              Earn more, drive safely, and stay protected with South Africa's most driver-first platform.
            </p>
          </div>
        </div>
      </div>
      
      {/* Benefits Section */}
      <div className="relative bg-white py-12" id="benefits">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Benefit 1 */}
            <div className="benefit-tile">
              <div className="feature-icon mb-4">
                <CheckCircle size={24} />
              </div>
              <h3 className="text-lg font-semibold text-khwela-blue mb-2">Fixed Rate Pay</h3>
              <p className="text-khwela-slate">Earn guaranteed AA + R2/km + R10 bonus per trip</p>
            </div>
            
            {/* Benefit 2 */}
            <div className="benefit-tile">
              <div className="feature-icon mb-4">
                <Wallet size={24} />
              </div>
              <h3 className="text-lg font-semibold text-khwela-blue mb-2">Daily Payouts</h3>
              <p className="text-khwela-slate">Get your money when you need it</p>
            </div>
            
            {/* Benefit 3 */}
            <div className="benefit-tile">
              <div className="feature-icon mb-4">
                <Shield size={24} />
              </div>
              <h3 className="text-lg font-semibold text-khwela-blue mb-2">Safety First</h3>
              <p className="text-khwela-slate">Facial Recognition + Verified Riders</p>
            </div>
            
            {/* Benefit 4 */}
            <div className="benefit-tile">
              <div className="feature-icon mb-4">
                <Clock size={24} />
              </div>
              <h3 className="text-lg font-semibold text-khwela-blue mb-2">Driver-Owned Tools</h3>
              <p className="text-khwela-slate">Plan shifts. Pause rides. Maximize income.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Testimonials */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-khwela-blue mb-12">What Our Drivers Say</h2>
          
          <div className="max-w-5xl mx-auto overflow-hidden">
            <div className="flex flex-nowrap overflow-x-auto gap-6 pb-4 hide-scrollbar">
              {/* Testimonial 1 */}
              <div className="testimonial-card min-w-[300px] flex-shrink-0">
                <p className="text-khwela-slate mb-4">"I've been with Uber. This is better. The fixed rates mean I can plan my income, and daily payouts help me manage my expenses."</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-khwela-light flex items-center justify-center text-khwela-blue font-bold mr-3">T</div>
                  <div>
                    <p className="font-semibold text-khwela-blue">Thabo</p>
                    <p className="text-sm text-khwela-slate">Soweto, 2 years driving</p>
                  </div>
                </div>
              </div>
              
              {/* Testimonial 2 */}
              <div className="testimonial-card min-w-[300px] flex-shrink-0">
                <p className="text-khwela-slate mb-4">"The safety features give me peace of mind. I know who I'm picking up, and they know who I am. No more worries about fake bookings."</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-khwela-light flex items-center justify-center text-khwela-blue font-bold mr-3">N</div>
                  <div>
                    <p className="font-semibold text-khwela-blue">Nomsa</p>
                    <p className="text-sm text-khwela-slate">Johannesburg, 1 year driving</p>
                  </div>
                </div>
              </div>
              
              {/* Testimonial 3 */}
              <div className="testimonial-card min-w-[300px] flex-shrink-0">
                <p className="text-khwela-slate mb-4">"Being able to plan my shifts around my schedule has been life-changing. I can drive when it works for me, not when the app demands it."</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-khwela-light flex items-center justify-center text-khwela-blue font-bold mr-3">J</div>
                  <div>
                    <p className="font-semibold text-khwela-blue">Jacques</p>
                    <p className="text-sm text-khwela-slate">Cape Town, 8 months driving</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Trust Badges */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <div className="trust-badge">
              <CheckCircle size={20} className="text-khwela-blue" />
              <span className="text-sm font-medium text-khwela-slate">AA Rate Verified</span>
            </div>
            <div className="trust-badge">
              <Shield size={20} className="text-khwela-blue" />
              <span className="text-sm font-medium text-khwela-slate">Verified Identity</span>
            </div>
            <div className="trust-badge">
              <Wallet size={20} className="text-khwela-blue" />
              <span className="text-sm font-medium text-khwela-slate">Powered by Ozow</span>
            </div>
            <div className="trust-badge">
              <CheckCircle size={20} className="text-khwela-blue" />
              <span className="text-sm font-medium text-khwela-slate">Driver Police Clearance</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Sign Up Section Anchor */}
      <div id="driver-signup" className="pt-16"></div>
    </div>
  );
};

export default NewHero;
