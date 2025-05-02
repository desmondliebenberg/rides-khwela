
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

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
    </div>
  );
};

export default NavbarDesktopLinks;
