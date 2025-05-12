
import { Moon, Sun } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "@/hooks/useTheme";

interface NavbarThemeToggleProps {
  scrolled: boolean;
  alwaysScrolled: boolean;
}

const NavbarThemeToggle = ({ 
  scrolled, 
  alwaysScrolled 
}: NavbarThemeToggleProps) => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className="flex items-center gap-1">
      <Switch 
        checked={theme === "dark"}
        onCheckedChange={toggleTheme}
        className="data-[state=checked]:bg-khwela-blue dark:data-[state=checked]:bg-khwela-gold h-4 w-7"
      />
      {theme === "dark" ? (
        <Moon 
          size={14} 
          className={`
            ${scrolled || alwaysScrolled 
              ? 'text-khwela-slate dark:text-white' 
              : 'text-white'
            } 
            hover:text-khwela-gold transition-colors
          `} 
        />
      ) : (
        <Sun 
          size={14} 
          className={`
            ${scrolled || alwaysScrolled 
              ? 'text-khwela-slate dark:text-white' 
              : 'text-white'
            } 
            hover:text-khwela-gold transition-colors
          `} 
        />
      )}
    </div>
  );
};

export default NavbarThemeToggle;
