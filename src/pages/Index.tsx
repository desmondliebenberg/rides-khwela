
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturesSection from "@/components/FeaturesSection";
import DriverBenefits from "@/components/DriverBenefits";
import SafetyFeatures from "@/components/SafetyFeatures";
import RequestRide from "@/components/RequestRide";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturesSection />
      <DriverBenefits />
      <SafetyFeatures />
      <RequestRide />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
