
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useNavbar";

interface NavbarMobileMenuProps {
  isOpen: boolean;
  language: string;
  setLanguage: (language: string) => void;
}

const NavbarMobileMenu = ({ isOpen, language, setLanguage }: NavbarMobileMenuProps) => {
  const { isLoggedIn, userType, userName, logout } = useAuth();
  
  // Language options
  const languages = ["English", "isiZulu", "Afrikaans"];
  
  return (
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
        
        {/* Only show Refer & Earn in the dropdown, removed from main menu */}
        {isLoggedIn && (
          <Link to={`/${userType}-dashboard/refer`} className="text-khwela-slate py-2 px-4 hover:bg-gray-100 rounded">Refer & Earn</Link>
        )}
        
        {/* Mobile Language Selector */}
        <div className="py-2 px-4 border-t border-gray-100">
          <p className="text-sm text-khwela-slate mb-2">Select Language</p>
          <div className="flex flex-col space-y-1">
            {languages.map(lang => (
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
                  logout();
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
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
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
  );
};

export default NavbarMobileMenu;
