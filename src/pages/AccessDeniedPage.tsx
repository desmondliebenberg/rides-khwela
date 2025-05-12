
import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

const AccessDeniedPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center">
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 md:p-10 w-full max-w-2xl text-center">
          <div className="flex justify-center mb-6">
            <AlertCircle className="h-16 w-16 text-red-500 dark:text-red-400" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-red-700 dark:text-red-400 mb-4">
            Access Denied
          </h1>
          <p className="text-gray-700 dark:text-gray-300 mb-8">
            You don't have permission to access the Admin Dashboard. 
            This area is restricted to administrators only.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => navigate("/")}
              className="bg-khwela-blue hover:bg-khwela-blue/90 text-white"
            >
              Return Home
            </Button>
            <Button
              onClick={() => navigate("/login")}
              variant="outline"
              className="border-khwela-blue text-khwela-blue dark:text-khwela-light dark:border-khwela-light hover:bg-khwela-blue/10"
            >
              Login with Admin Account
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AccessDeniedPage;
