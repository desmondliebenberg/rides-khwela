
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-16 bg-blue-600 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Safer Rides?</h2>
          
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 mb-8">
            <h3 className="text-2xl font-semibold mb-4">Get your first ride free up to R50!</h3>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white w-full sm:w-auto">
                <Link to="/ride">Request a Ride</Link> <ArrowRight size={16} className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
          
          <p className="text-sm text-white/80">Proudly South African 🇿🇦</p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
