
import DriverDashboard from "@/components/DriverDashboard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const DriverDashboardPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <DriverDashboard />
      <Footer />
    </div>
  );
};

export default DriverDashboardPage;
