
import Navbar from "@/components/Navbar";
import SafetyFeatures from "@/components/SafetyFeatures";
import Footer from "@/components/Footer";

const Safety = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24">
        <SafetyFeatures />
      </div>
      <Footer />
    </div>
  );
};

export default Safety;
