
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ShieldCheck, TrendingUp, Clock, Award } from "lucide-react";

const DriverInfoPage = () => {
  return (
    <div className="min-h-screen dark:bg-gray-900">
      <Navbar />
      <div className="pt-24 pb-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-khwela-slate dark:text-white mb-6">
              Drive with Khwela
            </h1>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Join South Africa's most driver-first platform offering safe, reliable, and transparent ride-hailing services. We put drivers first with better earnings, flexible schedules, and dedicated support.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <TrendingUp className="text-khwela-gold mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-khwela-slate dark:text-white">Better Earnings</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Keep more of what you earn with our lower commission rates and transparent fare calculations.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <ShieldCheck className="text-khwela-gold mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-khwela-slate dark:text-white">Safety First</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Our platform uses facial recognition and verified riders to ensure your safety on every trip.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Clock className="text-khwela-gold mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-khwela-slate dark:text-white">Flexible Hours</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Drive when you want with no minimum hours. Set your own schedule and work around your life.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Award className="text-khwela-gold mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-khwela-slate dark:text-white">Rewards & Recognition</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Earn badges and unlock benefits through our driver compliance program and recognition system.
                </p>
              </div>
            </div>
            
            <div className="bg-khwela-blue dark:bg-khwela-blue/80 text-white p-8 rounded-lg mb-12">
              <h2 className="text-2xl font-bold mb-4">Ready to start earning?</h2>
              <p className="mb-6">
                Join thousands of drivers already enjoying the benefits of driving with Khwela. Sign up today and start earning on your own terms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-khwela-gold text-khwela-blue hover:bg-khwela-gold/90" asChild>
                  <Link to="/signup">Sign Up as Driver</Link>
                </Button>
                <Button size="lg" className="bg-white text-khwela-blue hover:bg-gray-100" asChild>
                  <Link to="/badges">Learn About Driver Badges</Link>
                </Button>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-khwela-slate dark:text-white mb-6">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-khwela-slate dark:text-white mb-2">
                  What documents do I need to sign up?
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  You'll need your driver's license, vehicle license disc, professional driving permit (PDP), and police clearance certificate.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-khwela-slate dark:text-white mb-2">
                  How soon can I start driving?
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Once your documents are verified and approved, you can start driving immediately. The verification process typically takes 24-48 hours.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-khwela-slate dark:text-white mb-2">
                  How do I get paid?
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Earnings are transferred to your linked bank account weekly. Cash trips are paid directly to you at the time of the ride.
                </p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Button size="lg" className="bg-khwela-blue text-white hover:bg-khwela-blue/90" asChild>
                <Link to="/faq">View All FAQs</Link>
              </Button>
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default DriverInfoPage;
