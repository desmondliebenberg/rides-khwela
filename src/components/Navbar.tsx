
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Car, Menu, X, Globe } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [language, setLanguage] = useState("English");
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

  // Language options
  const languages = ["English", "isiZulu", "Afrikaans"];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled || alwaysScrolled ? "py-2 bg-white/95 backdrop-blur-md shadow-md" : "py-4 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Car className="text-khwela-blue" size={32} />
            <span className="text-2xl font-bold text-khwela-blue">Khwela</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              <Link to="/" className={`font-medium ${scrolled || alwaysScrolled ? 'text-khwela-slate' : 'text-white'} hover:text-khwela-gold transition-colors`}>Home</Link>
              <Link to="/signup" className={`font-medium ${scrolled || alwaysScrolled ? 'text-khwela-slate' : 'text-white'} hover:text-khwela-gold transition-colors`}>Driver Signup</Link>
              <Link to="/badges" className={`font-medium ${scrolled || alwaysScrolled ? 'text-khwela-slate' : 'text-white'} hover:text-khwela-gold transition-colors`}>Badges & Training</Link>
              <Link to="/cash-rides" className={`font-medium ${scrolled || alwaysScrolled ? 'text-khwela-slate' : 'text-white'} hover:text-khwela-gold transition-colors`}>Cash Rides</Link>
              <Link to="/support" className={`font-medium ${scrolled || alwaysScrolled ? 'text-khwela-slate' : 'text-white'} hover:text-khwela-gold transition-colors`}>Support</Link>
              <Link to="/refer" className={`font-medium ${scrolled || alwaysScrolled ? 'text-khwela-slate' : 'text-white'} hover:text-khwela-gold transition-colors`}>Refer & Earn</Link>
            </div>
            
            {/* Language Selector */}
            <div className="relative group">
              <button className={`flex items-center gap-1 font-medium ${scrolled || alwaysScrolled ? 'text-khwela-slate' : 'text-white'} hover:text-khwela-gold transition-colors`}>
                <Globe size={16} />
                <span>{language}</span>
              </button>
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg overflow-hidden z-50 origin-top-right scale-0 group-hover:scale-100 transition-transform duration-150">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    className="w-full text-left px-4 py-2 text-khwela-slate hover:bg-gray-100 transition-colors"
                    onClick={() => setLanguage(lang)}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Button 
                variant="outline" 
                className={`border-2 ${
                  scrolled || alwaysScrolled 
                    ? "text-khwela-blue border-khwela-blue hover:bg-khwela-blue hover:text-white" 
                    : "text-white border-white hover:bg-white/20"
                }`}
                asChild
              >
                <Link to="/login">Sign In</Link>
              </Button>
              <Button 
                className="bg-khwela-gold text-khwela-blue hover:bg-khwela-gold/90"
                asChild
              >
                <Link to="/signup">Sign Up to Drive</Link>
              </Button>
            </div>
          </div>

          {/* Mobile Nav Button */}
          <button
            className={`md:hidden ${scrolled || alwaysScrolled ? 'text-khwela-slate' : 'text-white'}`}
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
          <Link to="/" className="text-khwela-slate py-2 px-4 hover:bg-gray-100 rounded">Home</Link>
          <Link to="/signup" className="text-khwela-slate py-2 px-4 hover:bg-gray-100 rounded">Driver Signup</Link>
          <Link to="/badges" className="text-khwela-slate py-2 px-4 hover:bg-gray-100 rounded">Badges & Training</Link>
          <Link to="/cash-rides" className="text-khwela-slate py-2 px-4 hover:bg-gray-100 rounded">Cash Rides</Link>
          <Link to="/support" className="text-khwela-slate py-2 px-4 hover:bg-gray-100 rounded">Support</Link>
          <Link to="/refer" className="text-khwela-slate py-2 px-4 hover:bg-gray-100 rounded">Refer & Earn</Link>
          
          {/* Mobile Language Selector */}
          <div className="py-2 px-4 border-t border-gray-100">
            <p className="text-sm text-khwela-slate mb-2">Select Language</p>
            <div className="flex flex-col space-y-1">
              {languages.map((lang) => (
                <button
                  key={lang}
                  className={`text-left py-1 px-2 rounded ${language === lang ? 'bg-khwela-light text-khwela-blue' : 'text-khwela-slate'}`}
                  onClick={() => setLanguage(lang)}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col space-y-2 mt-4">
            <Button 
              variant="outline" 
              className="w-full text-khwela-blue border-khwela-blue hover:bg-khwela-blue hover:text-white"
              asChild
            >
              <Link to="/login">Sign In</Link>
            </Button>
            <Button 
              className="w-full bg-khwela-gold text-khwela-blue hover:bg-khwela-gold/90"
              asChild
            >
              <Link to="/signup">Sign Up to Drive</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
