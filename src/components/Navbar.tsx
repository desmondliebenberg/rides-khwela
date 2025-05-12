
import { Menu, X } from "lucide-react";
import { useNavbar } from "@/hooks/useNavbar";
import NavbarLogo from "./navbar/NavbarLogo";
import NavbarDesktopLinks from "./navbar/NavbarDesktopLinks";
import NavbarLanguageSelector from "./navbar/NavbarLanguageSelector";
import NavbarThemeToggle from "./navbar/NavbarThemeToggle";
import NavbarAuth from "./navbar/NavbarAuth";
import NavbarMobileMenu from "./navbar/NavbarMobileMenu";

const Navbar = () => {
  const {
    isOpen, 
    setIsOpen,
    scrolled,
    language,
    setLanguage,
    alwaysScrolled,
    isLoggedIn,
    userType,
  } = useNavbar();

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 
      ${scrolled || alwaysScrolled 
        ? "py-2 bg-white/95 backdrop-blur-md shadow-md dark:bg-khwela-dark/95 dark:shadow-gray-900/30" 
        : "py-4 bg-transparent"}`}>
      <div className="container mx-auto px-2 sm:px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <NavbarLogo scrolled={scrolled} alwaysScrolled={alwaysScrolled} />

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center md:space-x-3 lg:space-x-8">
            {/* Desktop Links */}
            <NavbarDesktopLinks 
              scrolled={scrolled} 
              alwaysScrolled={alwaysScrolled} 
              isLoggedIn={isLoggedIn} 
              userType={userType}
            />
            
            <div className="flex items-center md:space-x-3 lg:space-x-8">
              {/* Theme Toggle */}
              <NavbarThemeToggle
                scrolled={scrolled}
                alwaysScrolled={alwaysScrolled}
              />
              
              {/* Language Selector */}
              <NavbarLanguageSelector 
                scrolled={scrolled} 
                alwaysScrolled={alwaysScrolled} 
                language={language} 
                setLanguage={setLanguage}
              />
              
              {/* Auth Buttons */}
              <NavbarAuth />
            </div>
          </div>

          {/* Mobile Nav Button */}
          <button className={`md:hidden ${scrolled || alwaysScrolled ? 'text-khwela-slate dark:text-white' : 'text-white'}`} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <NavbarMobileMenu 
        isOpen={isOpen} 
        language={language} 
        setLanguage={setLanguage} 
      />
    </nav>
  );
};

export default Navbar;
