
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
      {/* Hero Background */}
      <div className="absolute inset-0 bg-khwela-blue overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-khwela-blue/90 to-khwela-blue/70" 
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1469041797191-50ace28483c3?auto=format&fit=crop&q=80&w=1280')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            mixBlendMode: "overlay"
          }}
        ></div>
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
            <Button 
              size="lg" 
              className="bg-khwela-gold text-khwela-blue hover:bg-khwela-gold/90 text-lg px-8 py-6 animate-slide-up"
              onClick={scrollToSignup}
            >
              Sign Up to Drive
            </Button>
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
