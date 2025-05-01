
import Navbar from "@/components/Navbar";
import NewHero from "@/components/NewHero";
import FeaturesHighlight from "@/components/FeaturesHighlight";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <NewHero />
      <FeaturesHighlight />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
