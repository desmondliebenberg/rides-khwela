
import Navbar from "@/components/Navbar";
import RequestRide from "@/components/RequestRide";
import Footer from "@/components/Footer";

const RequestRidePage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24">
        <RequestRide />
      </div>
      <Footer />
    </div>
  );
};

export default RequestRidePage;
