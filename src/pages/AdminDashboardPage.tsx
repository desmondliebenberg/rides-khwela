
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import AdminDashboard from "@/components/admin/AdminDashboard";
import Footer from "@/components/Footer";
import { useToast } from "@/components/ui/use-toast";

const AdminDashboardPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(true);
  
  // Check if user is logged in as an admin
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("khwela-auth") === "true";
    const storedUserType = localStorage.getItem("khwela-user-type");
    
    if (!isLoggedIn) {
      // Redirect to login if not logged in
      toast({
        title: "Authentication required",
        description: "Please log in to access the admin dashboard.",
        variant: "destructive",
      });
      navigate("/login");
      return;
    }
    
    // Check specifically for admin role
    if (storedUserType !== "admin") {
      // Redirect to access denied page if not an admin
      toast({
        title: "Access Denied",
        description: "You don't have permission to access the admin dashboard.",
        variant: "destructive",
      });
      navigate("/access-denied");
      return;
    }
    
    setIsLoading(false);
  }, [navigate, toast]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center dark:bg-gray-900 transition-colors duration-300">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-khwela-blue"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <div className="pt-20">
        <AdminDashboard />
      </div>
      <Footer />
    </div>
  );
};

export default AdminDashboardPage;
