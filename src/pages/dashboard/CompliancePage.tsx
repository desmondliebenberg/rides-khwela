
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DriverComplianceCenter from "@/components/driver-compliance/DriverComplianceCenter";
import { Button } from "@/components/ui/button";

const CompliancePage = () => {
  const navigate = useNavigate();
  
  // Check if user is logged in with the correct role
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("khwela-auth") === "true";
    const storedUserType = localStorage.getItem("khwela-user-type");
    
    if (!isLoggedIn || storedUserType !== "driver") {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-khwela-blue">Driver Compliance</h1>
            <p className="text-khwela-slate mt-1">Keep your documents updated and maintain your badge status</p>
          </div>
          <Button 
            variant="outline" 
            className="border-khwela-blue text-khwela-blue"
            onClick={() => navigate("/driver-dashboard")}
          >
            Back to Dashboard
          </Button>
        </div>
        
        <DriverComplianceCenter />
      </div>
      <Footer />
    </div>
  );
};

export default CompliancePage;
