
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Car, Menu, X, Globe, ChevronDown, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

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
  const languages = ["English", "isiZulu", "Afrikaans", "Xhosa", "Sotho"];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled || alwaysScrolled ? "py-2 bg-white/95 backdrop-blur-md shadow-md" : "py-4 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Car className={scrolled || alwaysScrolled ? "text-blue-600" : "text-white"} size={32} />
            <span className={`text-2xl font-bold ${scrolled || alwaysScrolled ? 'text-blue-600' : 'text-white'}`}>Khwela</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              <Link to="/" className={`font-medium ${scrolled || alwaysScrolled ? 'text-gray-700' : 'text-white'} hover:text-blue-500 transition-colors`}>Home</Link>
              
              {/* Driver Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className={`flex items-center font-medium ${scrolled || alwaysScrolled ? 'text-gray-700' : 'text-white'} hover:text-blue-500 transition-colors focus-visible:outline-none`}>
                  <span>Driver</span>
                  <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="bg-white/95 backdrop-blur-md shadow-md border border-gray-200 rounded-md min-w-[180px] z-50">
                  <DropdownMenuItem asChild>
                    <Link to="/badges" className="flex w-full px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-sm cursor-pointer">
                      Badges & Training
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/cash-rides" className="flex w-full px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-sm cursor-pointer">
                      Cash Rides
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <Link to="/support" className={`font-medium ${scrolled || alwaysScrolled ? 'text-gray-700' : 'text-white'} hover:text-blue-500 transition-colors`}>Support</Link>
              <Link to="/refer" className={`font-medium ${scrolled || alwaysScrolled ? 'text-gray-700' : 'text-white'} hover:text-blue-500 transition-colors`}>Refer & Earn</Link>
            </div>
            
            {/* Language Selector */}
            <div className="relative group">
              <button className={`flex items-center gap-1 font-medium ${scrolled || alwaysScrolled ? 'text-gray-700' : 'text-white'} hover:text-blue-500 transition-colors`}>
                <Globe size={16} />
                <span>{language}</span>
              </button>
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg overflow-hidden z-50 origin-top-right scale-0 group-hover:scale-100 transition-transform duration-150">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                    onClick={() => setLanguage(lang)}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white"
                asChild
              >
                <Link to="/login">Log In</Link>
              </Button>
              
              {/* Sign Up Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Sign Up
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-white/95 backdrop-blur-md shadow-md border border-gray-200 rounded-md min-w-[180px] z-50">
                  <DropdownMenuItem asChild>
                    <Link to="/rider-signup" className="flex w-full px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-sm cursor-pointer">
                      <User className="mr-2 h-4 w-4" />
                      <span>For Riders</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/signup" className="flex w-full px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-sm cursor-pointer">
                      <Car className="mr-2 h-4 w-4" />
                      <span>For Drivers</span>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
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
          
          {/* Mobile Driver Dropdown Items - Displayed directly in the menu */}
          <div className="border-t border-gray-100 pt-2 pl-4">
            <p className="text-sm text-gray-500 mb-2">Driver Options</p>
            <Link to="/badges" className="block text-gray-700 py-2 px-4 hover:bg-gray-100 rounded">Badges & Training</Link>
            <Link to="/cash-rides" className="block text-gray-700 py-2 px-4 hover:bg-gray-100 rounded">Cash Rides</Link>
          </div>
          
          <Link to="/support" className="text-gray-700 py-2 px-4 hover:bg-gray-100 rounded">Support</Link>
          <Link to="/refer" className="text-gray-700 py-2 px-4 hover:bg-gray-100 rounded">Refer & Earn</Link>
          
          {/* Mobile Language Selector */}
          <div className="py-2 px-4 border-t border-gray-100">
            <p className="text-sm text-gray-500 mb-2">Select Language</p>
            <div className="flex flex-col space-y-1">
              {languages.map((lang) => (
                <button
                  key={lang}
                  className={`text-left py-1 px-2 rounded ${language === lang ? 'bg-gray-100 text-blue-600' : 'text-gray-700'}`}
                  onClick={() => setLanguage(lang)}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col space-y-2 mt-4">
            <Button 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              asChild
            >
              <Link to="/login">Log In</Link>
            </Button>
            
            {/* Mobile Sign Up Options */}
            <div className="border-t border-gray-100 pt-4 mt-2">
              <p className="text-sm text-gray-500 mb-2 px-2">Sign Up As:</p>
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white mb-2"
                asChild
              >
                <Link to="/rider-signup">
                  <User className="mr-2 h-4 w-4" />
                  <span>Rider</span>
                </Link>
              </Button>
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                asChild
              >
                <Link to="/signup">
                  <Car className="mr-2 h-4 w-4" />
                  <span>Driver</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
