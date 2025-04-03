
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-16 bg-khwela-blue relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-khwela-gold/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-khwela-gold/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Safer Rides?</h2>
          <p className="text-xl text-white/80 mb-8">
            Join thousands of South Africans who've switched to Khwela for safer, more reliable, and transparent ride-hailing.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 mb-8">
            <h3 className="text-2xl font-semibold mb-4">Get your first ride free up to R50!</h3>
            <p className="mb-6 text-white/80">
              Sign up today and enjoy your first Khwela ride on us. Experience the difference firsthand.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-khwela-gold text-khwela-dark hover:bg-khwela-gold/90 w-full sm:w-auto">
                Request a Ride <ArrowRight size={16} className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center space-x-8 items-center">
            <div className="text-center">
              <div className="text-3xl font-bold text-khwela-gold mb-2">10K+</div>
              <p className="text-white/80">Satisfied Riders</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-khwela-gold mb-2">1K+</div>
              <p className="text-white/80">Verified Drivers</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-khwela-gold mb-2">7</div>
              <p className="text-white/80">South African Cities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
