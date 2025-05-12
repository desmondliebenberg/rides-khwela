
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import AdminDashboard from "@/components/admin/AdminDashboard";
import Footer from "@/components/Footer";

const AdminDashboardPage = () => {
  const navigate = useNavigate();
  
  // Check if user is logged in as an admin
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("khwela-auth") === "true";
    const storedUserType = localStorage.getItem("khwela-user-type");
    
    // In a real app, this would check for admin role specifically
    if (!isLoggedIn || storedUserType !== "admin") {
      navigate("/login");
    }
  }, [navigate]);

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
