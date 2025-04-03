
import Navbar from "@/components/Navbar";
import DriverBenefits from "@/components/DriverBenefits";
import Footer from "@/components/Footer";

const BecomeDriver = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24">
        <DriverBenefits />
      </div>
      <Footer />
    </div>
  );
};

export default BecomeDriver;
