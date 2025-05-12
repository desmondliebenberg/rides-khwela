
import { Globe } from "lucide-react";

interface NavbarLanguageSelectorProps {
  scrolled: boolean;
  alwaysScrolled: boolean;
  language: string;
  setLanguage: (language: string) => void;
}

const NavbarLanguageSelector = ({ 
  scrolled, 
  alwaysScrolled, 
  language, 
  setLanguage 
}: NavbarLanguageSelectorProps) => {
  // Language options
  const languages = ["English", "isiZulu", "Afrikaans"];
  
  return (
    <div className="relative group">
      <button className={`flex items-center gap-1 font-medium ${scrolled || alwaysScrolled ? 'text-khwela-slate dark:text-white' : 'text-white'} hover:text-khwela-gold transition-colors`}>
        <Globe size={16} />
        <span>{language}</span>
      </button>
      <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-khwela-dark rounded-md shadow-lg overflow-hidden z-50 origin-top-right scale-0 group-hover:scale-100 transition-transform duration-150">
        {languages.map(lang => (
          <button 
            key={lang} 
            className="w-full text-left px-4 py-2 text-khwela-slate dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" 
            onClick={() => setLanguage(lang)}
          >
            {lang}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NavbarLanguageSelector;
