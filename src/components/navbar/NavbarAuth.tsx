
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { User, ChevronDown, MapPin } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import UserProfileDropdown from "../UserProfileDropdown";
import { useAuth } from "@/hooks/useNavbar";

const NavbarAuth = () => {
  const navigate = useNavigate();
  const { isLoggedIn, userType, userName } = useAuth();
  
  // Handle ride button click
  const handleRideClick = () => {
    if (isLoggedIn && userType === "rider") {
      navigate("/ride");
    } else {
      navigate("/login?user=rider");
    }
  };

  return (
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
        <UserProfileDropdown 
          userName={userName} 
          userType={userType as "rider" | "driver"} 
        />
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
  );
};

export default NavbarAuth;
