
import { Link } from "react-router-dom";

interface NavbarDesktopLinksProps {
  scrolled: boolean;
  alwaysScrolled: boolean;
  isLoggedIn: boolean;
  userType: string;
}

const NavbarDesktopLinks = ({ 
  scrolled, 
  alwaysScrolled, 
  isLoggedIn, 
  userType 
}: NavbarDesktopLinksProps) => {
  return (
    <div className="flex space-x-6">
      {/* Home Link */}
      <Link to="/" className={`font-medium ${scrolled || alwaysScrolled ? 'text-khwela-slate' : 'text-white'} hover:text-khwela-gold transition-colors`}>
        Home
      </Link>
      
      {/* Driver Link */}
      <Link to="/driver-info" className={`font-medium ${scrolled || alwaysScrolled ? 'text-khwela-slate' : 'text-white'} hover:text-khwela-gold transition-colors`}>
        Driver
      </Link>
      
      {/* Rider Link */}
      <Link to="/rider-info" className={`font-medium ${scrolled || alwaysScrolled ? 'text-khwela-slate' : 'text-white'} hover:text-khwela-gold transition-colors`}>
        Rider
      </Link>
      
      {/* FAQ Link */}
      <Link to="/faq" className={`font-medium ${scrolled || alwaysScrolled ? 'text-khwela-slate' : 'text-white'} hover:text-khwela-gold transition-colors`}>
        FAQ
      </Link>
      
      {/* Support Link */}
      <Link to="/support" className={`font-medium ${scrolled || alwaysScrolled ? 'text-khwela-slate' : 'text-white'} hover:text-khwela-gold transition-colors`}>
        Support
      </Link>
      
      {/* Dashboard links if logged in */}
      {isLoggedIn && (
        <>
          {userType === "driver" && (
            <Link to="/driver-dashboard" className={`font-medium ${scrolled || alwaysScrolled ? 'text-khwela-slate' : 'text-white'} hover:text-khwela-gold transition-colors`}>
              Dashboard
            </Link>
          )}
          {userType === "rider" && (
            <Link to="/rider-dashboard" className={`font-medium ${scrolled || alwaysScrolled ? 'text-khwela-slate' : 'text-white'} hover:text-khwela-gold transition-colors`}>
              Dashboard
            </Link>
          )}
          {userType === "admin" && (
            <Link to="/admin-dashboard" className={`font-medium ${scrolled || alwaysScrolled ? 'text-khwela-slate' : 'text-white'} hover:text-khwela-gold transition-colors`}>
              Admin
            </Link>
          )}
        </>
      )}
    </div>
  );
};

export default NavbarDesktopLinks;
