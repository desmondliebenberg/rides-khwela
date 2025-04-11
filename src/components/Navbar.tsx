
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe, ChevronDown, User, MapPin } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

// Simulated auth - in a real app, this would be replaced with proper auth state management
const useAuth = () => {
  // Check localStorage for a simulated auth token
  const isLoggedIn = localStorage.getItem("khwela-auth") === "true";
  const userType = localStorage.getItem("khwela-user-type") || "";
  const userName = localStorage.getItem("khwela-user-name") || "User";
  
  const login = (type: string, name: string = "User") => {
    localStorage.setItem("khwela-auth", "true");
    localStorage.setItem("khwela-user-type", type);
    localStorage.setItem("khwela-user-name", name);
  };
  
  const logout = () => {
    localStorage.removeItem("khwela-auth");
    localStorage.removeItem("khwela-user-type");
    localStorage.removeItem("khwela-user-name");
  };
  
  return { isLoggedIn, userType, userName, login, logout };
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [language, setLanguage] = useState("English");
  const location = useLocation();
  const navigate = useNavigate();
  const { isLoggedIn, userType, userName } = useAuth();
  
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

  // Handle ride button click
  const handleRideClick = () => {
    if (isLoggedIn && userType === "rider") {
      navigate("/ride");
    } else {
      navigate("/login?user=rider");
    }
  };

  // Language options
  const languages = ["English", "isiZulu", "Afrikaans"];
  
  return <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled || alwaysScrolled ? "py-2 bg-white/95 backdrop-blur-md shadow-md" : "py-4 bg-transparent"}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className={`${scrolled || alwaysScrolled ? 'bg-white' : 'bg-khwela-blue'} rounded-sm h-8 w-10 flex items-center justify-center`}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke={scrolled || alwaysScrolled ? "#0F4C81" : "#FFFFFF"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icon-tabler-car">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M5 17h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5" />
              </svg>
            </div>
            <span className={`text-2xl font-bold ${scrolled || alwaysScrolled ? 'text-khwela-blue' : 'text-white'}`}>Khwela</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              <Link to="/" className={`font-medium ${scrolled || alwaysScrolled ? 'text-khwela-slate' : 'text-white'} hover:text-khwela-gold transition-colors`}>Home</Link>
              
              {/* Driver Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className={`flex items-center font-medium ${scrolled || alwaysScrolled ? 'text-khwela-slate' : 'text-white'} hover:text-khwela-gold transition-colors focus-visible:outline-none`}>
                  <span>Driver</span>
                  <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="bg-white/95 backdrop-blur-md shadow-md border border-gray-200 rounded-md min-w-[180px] z-50">
                  <DropdownMenuItem asChild>
                    <Link to="/badges" className="flex w-full px-3 py-2 text-khwela-slate hover:bg-gray-100 rounded-sm cursor-pointer">
                      Badges & Training
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/cash-rides" className="flex w-full px-3 py-2 text-khwela-slate hover:bg-gray-100 rounded-sm cursor-pointer">
                      Cash Rides
                    </Link>
                  </DropdownMenuItem>
                  {isLoggedIn && userType === "driver" && (
                    <DropdownMenuItem asChild>
                      <Link to="/driver-dashboard" className="flex w-full px-3 py-2 text-khwela-slate hover:bg-gray-100 rounded-sm cursor-pointer">
                        Driver Dashboard
                      </Link>
                    </DropdownMenuItem>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
              
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
                {languages.map(lang => <button key={lang} className="w-full text-left px-4 py-2 text-khwela-slate hover:bg-gray-100 transition-colors" onClick={() => setLanguage(lang)}>
                    {lang}
                  </button>)}
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              {/* Ride Button */}
              <Button 
                className="bg-khwela-gold text-khwela-blue hover:bg-khwela-gold/90 flex items-center"
                onClick={handleRideClick}
              >
                <MapPin size={16} className="mr-1" />
                Ride
              </Button>

              {isLoggedIn ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button className="bg-khwela-blue text-white hover:bg-khwela-blue/90">
                      Welcome, {userName}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="bg-white/95 backdrop-blur-md shadow-md border border-gray-200 rounded-md min-w-[180px] z-50">
                    <DropdownMenuItem asChild>
                      <Link to={userType === "rider" ? "/rider-dashboard" : "/driver-dashboard"} className="flex w-full px-3 py-2 text-khwela-slate hover:bg-gray-100 rounded-sm cursor-pointer">
                        Dashboard
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/refer" className="flex w-full px-3 py-2 text-khwela-slate hover:bg-gray-100 rounded-sm cursor-pointer">
                        Refer & Earn
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => {
                      // Implement logout
                      const auth = useAuth();
                      auth.logout();
                      window.location.href = "/";
                    }} className="flex w-full px-3 py-2 text-khwela-slate hover:bg-gray-100 rounded-sm cursor-pointer">
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <>
                  <Button className="bg-khwela-gold text-khwela-blue hover:bg-khwela-gold/90" asChild>
                    <Link to="/login">Log In</Link>
                  </Button>
                  
                  {/* Sign Up Dropdown */}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button className="bg-khwela-gold text-khwela-blue hover:bg-khwela-gold/90">
                        Sign Up
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="bg-white/95 backdrop-blur-md shadow-md border border-gray-200 rounded-md min-w-[180px] z-50">
                      <DropdownMenuItem asChild>
                        <Link to="/rider-signup" className="flex w-full px-3 py-2 text-khwela-slate hover:bg-gray-100 rounded-sm cursor-pointer">
                          <User className="mr-2 h-4 w-4" />
                          <span>For Riders</span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link to="/signup" className="flex w-full px-3 py-2 text-khwela-slate hover:bg-gray-100 rounded-sm cursor-pointer">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                            <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                            <path d="M5 17h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5" />
                          </svg>
                          <span>For Drivers</span>
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </>
              )}
            </div>
          </div>

          {/* Mobile Nav Button */}
          <button className={`md:hidden ${scrolled || alwaysScrolled ? 'text-khwela-slate' : 'text-white'}`} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ease-in-out ${isOpen ? "max-h-screen py-4" : "max-h-0 overflow-hidden"}`}>
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          <Link to="/" className="text-khwela-slate py-2 px-4 hover:bg-gray-100 rounded">Home</Link>
          
          {/* Mobile Driver Dropdown Items - Displayed directly in the menu */}
          <div className="border-t border-gray-100 pt-2 pl-4">
            <p className="text-sm text-khwela-slate/70 mb-2">Driver Options</p>
            <Link to="/badges" className="block text-khwela-slate py-2 px-4 hover:bg-gray-100 rounded">Badges & Training</Link>
            <Link to="/cash-rides" className="block text-khwela-slate py-2 px-4 hover:bg-gray-100 rounded">Cash Rides</Link>
            {isLoggedIn && userType === "driver" && (
              <Link to="/driver-dashboard" className="block text-khwela-slate py-2 px-4 hover:bg-gray-100 rounded">Driver Dashboard</Link>
            )}
          </div>
          
          <div className="border-t border-gray-100 pt-2 pl-4">
            <p className="text-sm text-khwela-slate/70 mb-2">Rider Options</p>
            {isLoggedIn && userType === "rider" && (
              <Link to="/rider-dashboard" className="block text-khwela-slate py-2 px-4 hover:bg-gray-100 rounded">Rider Dashboard</Link>
            )}
            <Link to="/ride" className="block text-khwela-slate py-2 px-4 hover:bg-gray-100 rounded">Book a Ride</Link>
          </div>
          
          <Link to="/support" className="text-khwela-slate py-2 px-4 hover:bg-gray-100 rounded">Support</Link>
          <Link to="/refer" className="text-khwela-slate py-2 px-4 hover:bg-gray-100 rounded">Refer & Earn</Link>
          
          {/* Mobile Language Selector */}
          <div className="py-2 px-4 border-t border-gray-100">
            <p className="text-sm text-khwela-slate mb-2">Select Language</p>
            <div className="flex flex-col space-y-1">
              {languages.map(lang => <button key={lang} className={`text-left py-1 px-2 rounded ${language === lang ? 'bg-khwela-light text-khwela-blue' : 'text-khwela-slate'}`} onClick={() => setLanguage(lang)}>
                  {lang}
                </button>)}
            </div>
          </div>
          
          <div className="flex flex-col space-y-2 mt-4">
            {isLoggedIn ? (
              <>
                <p className="text-khwela-blue font-medium px-2">Welcome, {userName}</p>
                <Link to={userType === "rider" ? "/rider-dashboard" : "/driver-dashboard"}>
                  <Button className="w-full bg-khwela-blue text-white hover:bg-khwela-blue/90">
                    My Dashboard
                  </Button>
                </Link>
                <Button 
                  className="w-full bg-red-500 text-white hover:bg-red-600"
                  onClick={() => {
                    // Implement logout
                    const auth = useAuth();
                    auth.logout();
                    window.location.href = "/";
                  }}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button className="w-full bg-khwela-gold text-khwela-blue hover:bg-khwela-gold/90" asChild>
                  <Link to="/login">Log In</Link>
                </Button>
                
                {/* Mobile Sign Up Options */}
                <div className="border-t border-gray-100 pt-4 mt-2">
                  <p className="text-sm text-khwela-slate/70 mb-2 px-2">Sign Up As:</p>
                  <Button className="w-full bg-khwela-gold text-khwela-blue hover:bg-khwela-gold/90 mb-2" asChild>
                    <Link to="/rider-signup">
                      <User className="mr-2 h-4 w-4" />
                      <span>Rider</span>
                    </Link>
                  </Button>
                  <Button className="w-full bg-khwela-gold text-khwela-blue hover:bg-khwela-gold/90" asChild>
                    <Link to="/signup">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                        <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                        <path d="M5 17h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5" />
                      </svg>
                      <span>Driver</span>
                    </Link>
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>;
};

export default Navbar;
