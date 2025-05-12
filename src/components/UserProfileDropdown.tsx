
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuTrigger, 
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuProfile,
  DropdownMenuRating
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronDown, HelpCircle, Wallet, History, Settings, LogOut } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

interface UserProfileDropdownProps {
  userName: string;
  userType: "rider" | "driver" | string;
  userRating?: number;
  profileImage?: string;
}

const UserProfileDropdown = ({ 
  userName, 
  userType, 
  userRating = 4.8,
  profileImage 
}: UserProfileDropdownProps) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  
  // Extract first name for display
  const firstName = userName.split(' ')[0];
  
  const handleLogout = () => {
    // Implement logout functionality
    localStorage.removeItem("khwela-auth");
    localStorage.removeItem("khwela-user-type");
    localStorage.removeItem("khwela-user-name");
    
    // Notify user of successful logout
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
    
    // Close dropdown and redirect to home
    setOpen(false);
    navigate('/');
  };
  
  const navigateTo = (path: string) => {
    setOpen(false);
    navigate(path);
  };

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button 
          className="bg-khwela-blue text-white hover:bg-khwela-blue/90 flex items-center gap-1 px-2 text-sm truncate max-w-[80px] sm:max-w-[120px] md:max-w-none"
          aria-label="User menu"
        >
          <span className="hidden sm:inline-block truncate">{firstName}</span>
          <span className="inline-block sm:hidden">Hi</span>
          <ChevronDown className="h-3 w-3 flex-shrink-0" />
        </Button>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent align="end" className="w-[280px] p-0 dark:bg-gray-800 dark:border-gray-700">
        <Card className="border-0 shadow-none dark:bg-gray-800">
          <DropdownMenuProfile>
            <Avatar className="h-12 w-12 border-2 border-khwela-light dark:border-gray-600">
              <AvatarImage src={profileImage} alt={userName} />
              <AvatarFallback className="bg-khwela-gold text-khwela-blue">
                {userName.split(' ').map(name => name[0]).join('').toUpperCase()}
              </AvatarFallback>
            </Avatar>
            
            <div className="flex flex-col">
              <span className="font-semibold text-base dark:text-white">{userName}</span>
              <span className="text-xs text-gray-500 dark:text-gray-400 capitalize">{userType}</span>
              {userType === "driver" && <DropdownMenuRating rating={userRating} />}
            </div>
          </DropdownMenuProfile>
          
          <DropdownMenuSeparator className="dark:bg-gray-700" />
          
          <div className="grid grid-cols-3 gap-1 p-2">
            <button 
              onClick={() => navigateTo('/support')}
              className="flex flex-col items-center p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <HelpCircle className="h-5 w-5 text-khwela-blue dark:text-khwela-light mb-1" />
              <span className="text-xs dark:text-gray-300">Help</span>
            </button>
            
            <button 
              onClick={() => navigateTo(`/${userType}-dashboard/wallet`)}
              className="flex flex-col items-center p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <Wallet className="h-5 w-5 text-khwela-blue dark:text-khwela-light mb-1" />
              <span className="text-xs dark:text-gray-300">Wallet</span>
            </button>
            
            <button 
              onClick={() => navigateTo(`/${userType}-dashboard/history`)}
              className="flex flex-col items-center p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <History className="h-5 w-5 text-khwela-blue dark:text-khwela-light mb-1" />
              <span className="text-xs dark:text-gray-300">{userType === "driver" ? "Activity" : "Rides"}</span>
            </button>
          </div>
          
          <DropdownMenuSeparator className="dark:bg-gray-700" />
          
          <div className="p-2">
            <DropdownMenuItem onClick={() => navigateTo(`/${userType}-dashboard`)} className="dark:hover:bg-gray-700 dark:text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-khwela-blue dark:text-khwela-light">
                <rect x="3" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="14" width="7" height="7" rx="1" />
                <rect x="3" y="14" width="7" height="7" rx="1" />
              </svg>
              Dashboard
            </DropdownMenuItem>
            
            <DropdownMenuItem onClick={() => navigateTo(`/${userType}-dashboard/refer`)} className="dark:hover:bg-gray-700 dark:text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-khwela-blue dark:text-khwela-light">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              Refer & Earn
            </DropdownMenuItem>
            
            <DropdownMenuItem onClick={() => navigateTo(`/${userType}-dashboard/account`)} className="dark:hover:bg-gray-700 dark:text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-khwela-blue dark:text-khwela-light">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              Manage Account
            </DropdownMenuItem>
            
            <DropdownMenuItem onClick={() => navigateTo(`/${userType}-dashboard/settings`)} className="dark:hover:bg-gray-700 dark:text-gray-300">
              <Settings className="mr-2 h-4 w-4 text-khwela-blue dark:text-khwela-light" />
              Settings
            </DropdownMenuItem>
            
            <DropdownMenuSeparator className="dark:bg-gray-700" />
            
            <DropdownMenuItem onClick={handleLogout} className="text-red-500 focus:text-red-500 dark:text-red-400 dark:focus:text-red-400 dark:hover:bg-gray-700">
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </DropdownMenuItem>
          </div>
        </Card>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserProfileDropdown;
