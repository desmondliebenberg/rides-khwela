
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Car, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    
    // Check initial scroll position
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine if we're on a page with a transparent hero section
  const isHomePage = location.pathname === "/";
  const needsTransparentNav = isHomePage;
  
  // For pages without a hero image, we should always show the solid navbar
  const alwaysScrolled = !needsTransparentNav;

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled || alwaysScrolled ? "py-2 bg-white/90 backdrop-blur-md shadow-md" : "py-4 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Car className={scrolled || alwaysScrolled ? "text-khwela-blue" : "text-khwela-blue"} size={32} />
            <span className="text-2xl font-bold text-khwela-blue">Khwela</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              <Link to="/" className={`font-medium ${scrolled || alwaysScrolled ? 'text-gray-700' : 'text-white'} hover:text-khwela-gold transition-colors`}>Home</Link>
              <Link to="/ride" className={`font-medium ${scrolled || alwaysScrolled ? 'text-gray-700' : 'text-white'} hover:text-khwela-gold transition-colors`}>Request Ride</Link>
              <Link to="/driver" className={`font-medium ${scrolled || alwaysScrolled ? 'text-gray-700' : 'text-white'} hover:text-khwela-gold transition-colors`}>Become a Driver</Link>
              <Link to="/safety" className={`font-medium ${scrolled || alwaysScrolled ? 'text-gray-700' : 'text-white'} hover:text-khwela-gold transition-colors`}>Safety</Link>
              <Link to="/about" className={`font-medium ${scrolled || alwaysScrolled ? 'text-gray-700' : 'text-white'} hover:text-khwela-gold transition-colors`}>About Us</Link>
            </div>
            <div className="flex items-center space-x-3">
              <Button 
                variant="outline" 
                className={`border-2 ${
                  scrolled || alwaysScrolled 
                    ? "text-khwela-blue border-khwela-blue hover:bg-khwela-blue hover:text-white" 
                    : "text-white border-white hover:bg-white/20"
                }`}
              >
                Sign In
              </Button>
              <Button 
                className="bg-khwela-gold text-khwela-blue hover:bg-khwela-gold/90"
              >
                Sign Up
              </Button>
            </div>
          </div>

          {/* Mobile Nav Button */}
          <button
            className={`md:hidden ${scrolled || alwaysScrolled ? 'text-gray-700' : 'text-white'}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen py-4" : "max-h-0 overflow-hidden"
        }`}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          <Link to="/" className="text-gray-700 py-2 px-4 hover:bg-gray-100 rounded">Home</Link>
          <Link to="/ride" className="text-gray-700 py-2 px-4 hover:bg-gray-100 rounded">Request Ride</Link>
          <Link to="/driver" className="text-gray-700 py-2 px-4 hover:bg-gray-100 rounded">Become a Driver</Link>
          <Link to="/safety" className="text-gray-700 py-2 px-4 hover:bg-gray-100 rounded">Safety</Link>
          <Link to="/about" className="text-gray-700 py-2 px-4 hover:bg-gray-100 rounded">About Us</Link>
          <div className="flex flex-col space-y-2 mt-4">
            <Button 
              variant="outline" 
              className="w-full text-khwela-blue border-khwela-blue hover:bg-khwela-blue hover:text-white"
            >
              Sign In
            </Button>
            <Button 
              className="w-full bg-khwela-gold text-khwela-blue hover:bg-khwela-gold/90"
            >
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
