
import Navbar from "@/components/Navbar";
import PopiaCompliance from "@/components/PopiaCompliance";
import Footer from "@/components/Footer";

const PopiaCompliancePage = () => {
  return (
    <div className="min-h-screen dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <PopiaCompliance />
      <Footer />
    </div>
  );
};

export default PopiaCompliancePage;
