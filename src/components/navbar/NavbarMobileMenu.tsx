
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useNavbar";
import { useTheme } from "@/hooks/useTheme";
import { Moon, Sun } from "lucide-react";
import { Switch } from "@/components/ui/switch";

interface NavbarMobileMenuProps {
  isOpen: boolean;
  language: string;
  setLanguage: (language: string) => void;
}

const NavbarMobileMenu = ({ isOpen, language, setLanguage }: NavbarMobileMenuProps) => {
  const { isLoggedIn, userType, userName, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  
  // Language options
  const languages = ["English", "isiZulu", "Afrikaans"];
  
  return (
    <div className={`md:hidden absolute w-full bg-white dark:bg-khwela-slate shadow-lg transition-all duration-300 ease-in-out ${isOpen ? "max-h-screen py-4" : "max-h-0 overflow-hidden"}`}>
      <div className="container mx-auto px-4 flex flex-col space-y-4">
        <Link to="/" className="text-khwela-slate dark:text-white py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">Home</Link>
        <Link to="/driver-info" className="text-khwela-slate dark:text-white py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">Driver</Link>
        <Link to="/rider-info" className="text-khwela-slate dark:text-white py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">Rider</Link>
        <Link to="/faq" className="text-khwela-slate dark:text-white py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">FAQ</Link>
        <Link to="/support" className="text-khwela-slate dark:text-white py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">Support</Link>
        
        {/* Dashboard links if logged in */}
        {isLoggedIn && (
          <div className="border-t border-gray-100 dark:border-gray-700 pt-2 pl-4">
            <p className="text-sm text-khwela-slate/70 dark:text-white/70 mb-2">Dashboard</p>
            {userType === "driver" && (
              <Link to="/driver-dashboard" className="block text-khwela-slate dark:text-white py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">Driver Dashboard</Link>
            )}
            {userType === "rider" && (
              <Link to="/rider-dashboard" className="block text-khwela-slate dark:text-white py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">Rider Dashboard</Link>
            )}
            {userType === "admin" && (
              <Link to="/admin-dashboard" className="block text-khwela-slate dark:text-white py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">Admin Dashboard</Link>
            )}
          </div>
        )}
        
        {/* Mobile Theme Toggle */}
        <div className="py-2 px-4 border-t border-gray-100 dark:border-gray-700">
          <p className="text-sm text-khwela-slate dark:text-white mb-2">Theme</p>
          <div className="flex items-center gap-2">
            <Sun size={16} className="text-khwela-slate dark:text-white" />
            <Switch 
              checked={theme === "dark"}
              onCheckedChange={toggleTheme}
              className="data-[state=checked]:bg-khwela-blue"
            />
            <Moon size={16} className="text-khwela-slate dark:text-white" />
          </div>
        </div>
        
        {/* Mobile Language Selector */}
        <div className="py-2 px-4 border-t border-gray-100 dark:border-gray-700">
          <p className="text-sm text-khwela-slate dark:text-white mb-2">Select Language</p>
          <div className="flex flex-col space-y-1">
            {languages.map(lang => (
              <button 
                key={lang} 
                className={`text-left py-1 px-2 rounded ${language === lang ? 'bg-khwela-light text-khwela-blue dark:bg-khwela-blue/20' : 'text-khwela-slate dark:text-white'}`} 
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
              <p className="text-khwela-blue dark:text-khwela-gold font-medium px-2">Welcome, {userName}</p>
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
              <div className="border-t border-gray-100 dark:border-gray-700 pt-4 mt-2">
                <p className="text-sm text-khwela-slate/70 dark:text-white/70 mb-2 px-2">Sign Up As:</p>
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
