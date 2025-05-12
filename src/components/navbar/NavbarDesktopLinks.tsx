
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
  const linkClass = `font-medium text-sm md:text-base whitespace-nowrap ${scrolled || alwaysScrolled ? 'text-khwela-slate dark:text-white' : 'text-white'} hover:text-khwela-gold transition-colors`;
  
  return (
    <div className="flex md:space-x-3 lg:space-x-6">
      {/* Home Link */}
      <Link to="/" className={linkClass}>
        Home
      </Link>
      
      {/* Driver Link */}
      <Link to="/driver-info" className={linkClass}>
        Driver
      </Link>
      
      {/* Rider Link */}
      <Link to="/rider-info" className={linkClass}>
        Rider
      </Link>
      
      {/* FAQ Link */}
      <Link to="/faq" className={linkClass}>
        FAQ
      </Link>
      
      {/* Support Link */}
      <Link to="/support" className={linkClass}>
        Support
      </Link>
      
      {/* Dashboard links if logged in */}
      {isLoggedIn && (
        <>
          {userType === "driver" && (
            <Link to="/driver-dashboard" className={linkClass}>
              Dashboard
            </Link>
          )}
          {userType === "rider" && (
            <Link to="/rider-dashboard" className={linkClass}>
              Dashboard
            </Link>
          )}
          {userType === "admin" && (
            <Link to="/admin-dashboard" className={linkClass}>
              Admin
            </Link>
          )}
        </>
      )}
    </div>
  );
};

export default NavbarDesktopLinks;
