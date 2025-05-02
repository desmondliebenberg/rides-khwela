
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
    <div className="flex items-center gap-2">
      <Switch 
        checked={theme === "dark"}
        onCheckedChange={toggleTheme}
        className="data-[state=checked]:bg-khwela-blue"
      />
      {theme === "dark" ? (
        <Moon size={16} className={`${scrolled || alwaysScrolled ? 'text-khwela-slate' : 'text-white'} hover:text-khwela-gold transition-colors`} />
      ) : (
        <Sun size={16} className={`${scrolled || alwaysScrolled ? 'text-khwela-slate' : 'text-white'} hover:text-khwela-gold transition-colors`} />
      )}
    </div>
  );
};

export default NavbarThemeToggle;
