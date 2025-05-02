
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ShieldCheck, Clock, CreditCard, MapPin } from "lucide-react";

const RiderInfoPage = () => {
  return (
    <div className="min-h-screen dark:bg-gray-900">
      <Navbar />
      <div className="pt-24 pb-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-khwela-slate dark:text-white mb-6">
              Ride with Khwela
            </h1>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Experience safer, more reliable rides with Khwela, South Africa's trusted ride-hailing service. With transparent pricing and verified drivers, we make every journey better.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <ShieldCheck className="text-khwela-gold mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-khwela-slate dark:text-white">Safety First</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  All drivers undergo rigorous verification, and our facial recognition ensures you're always riding with the right person.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <CreditCard className="text-khwela-gold mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-khwela-slate dark:text-white">Fair Pricing</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  No surge pricing. Our transparent fare calculation ensures you always know what you're paying before you ride.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Clock className="text-khwela-gold mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-khwela-slate dark:text-white">Reliable Service</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Available 24/7 across South Africa, our network of dedicated drivers ensures you're never kept waiting.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <MapPin className="text-khwela-gold mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-khwela-slate dark:text-white">QR Trip Verification</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Our unique QR verification system ensures you're getting into the right vehicle and provides added security for both riders and drivers.
                </p>
              </div>
            </div>
            
            <div className="bg-khwela-blue dark:bg-khwela-blue/80 text-white p-8 rounded-lg mb-12">
              <h2 className="text-2xl font-bold mb-4">Ready for a better ride?</h2>
              <p className="mb-6">
                Join thousands of riders already enjoying safer, more reliable journeys with Khwela. Sign up today and experience the difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-khwela-gold text-khwela-blue hover:bg-khwela-gold/90" asChild>
                  <Link to="/rider-signup">Sign Up as Rider</Link>
                </Button>
                <Button size="lg" className="bg-white text-khwela-blue hover:bg-gray-100" asChild>
                  <Link to="/ride">Book a Ride Now</Link>
                </Button>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-khwela-slate dark:text-white mb-6">
              How It Works
            </h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="bg-gray-100 dark:bg-gray-800 h-16 w-16 rounded-full flex items-center justify-center text-2xl font-bold text-khwela-blue">
                  1
                </div>
                <div className="md:flex-1">
                  <h3 className="text-xl font-semibold text-khwela-slate dark:text-white mb-2">
                    Sign Up
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Create your account in minutes with just your basic details and payment information.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="bg-gray-100 dark:bg-gray-800 h-16 w-16 rounded-full flex items-center justify-center text-2xl font-bold text-khwela-blue">
                  2
                </div>
                <div className="md:flex-1">
                  <h3 className="text-xl font-semibold text-khwela-slate dark:text-white mb-2">
                    Book Your Ride
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Enter your destination, see the fare upfront, and request a driver with a single tap.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="bg-gray-100 dark:bg-gray-800 h-16 w-16 rounded-full flex items-center justify-center text-2xl font-bold text-khwela-blue">
                  3
                </div>
                <div className="md:flex-1">
                  <h3 className="text-xl font-semibold text-khwela-slate dark:text-white mb-2">
                    Verify and Ride
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Scan the driver's QR code to verify you're getting into the right vehicle, then enjoy your ride.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="bg-gray-100 dark:bg-gray-800 h-16 w-16 rounded-full flex items-center justify-center text-2xl font-bold text-khwela-blue">
                  4
                </div>
                <div className="md:flex-1">
                  <h3 className="text-xl font-semibold text-khwela-slate dark:text-white mb-2">
                    Pay with Ease
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Pay with cash or card, or use your Khwela wallet for even more convenience.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <Button size="lg" className="bg-khwela-blue text-white hover:bg-khwela-blue/90" asChild>
                <Link to="/faq">View Rider FAQs</Link>
              </Button>
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default RiderInfoPage;
