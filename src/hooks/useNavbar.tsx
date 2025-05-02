
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

// Simulated auth - in a real app, this would be replaced with proper auth state management
export const useAuth = () => {
  // Check localStorage for a simulated auth token
  const isLoggedIn = localStorage.getItem("khwela-auth") === "true";
  const userType = localStorage.getItem("khwela-user-type") || "";
  const userName = localStorage.getItem("khwela-user-name") || "User";
  
  const login = (type: string, name: string = "User") => {
    localStorage.setItem("khwela-auth", "true");
    localStorage.setItem("khwela-user-type", type);
    localStorage.setItem("khwela-user-name", name);
  };
  
  const logout = () => {
    localStorage.removeItem("khwela-auth");
    localStorage.removeItem("khwela-user-type");
    localStorage.removeItem("khwela-user-name");
  };
  
  return { isLoggedIn, userType, userName, login, logout };
};

export const useNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [language, setLanguage] = useState("English");
  const location = useLocation();
  const { isLoggedIn, userType, userName } = useAuth();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);

    // Check initial scroll position
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine if we're on a page with a transparent hero section
  const isHomePage = location.pathname === "/";
  const needsTransparentNav = isHomePage;

  // For pages without a hero image, we should always show the solid navbar
  const alwaysScrolled = !needsTransparentNav;

  return {
    isOpen, 
    setIsOpen,
    scrolled,
    language,
    setLanguage,
    isHomePage,
    needsTransparentNav,
    alwaysScrolled,
    isLoggedIn,
    userType,
    userName
  };
};
