
import { Link } from "react-router-dom";

interface NavbarLogoProps {
  scrolled: boolean;
  alwaysScrolled: boolean;
}

const NavbarLogo = ({ scrolled, alwaysScrolled }: NavbarLogoProps) => {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <div className={`${scrolled || alwaysScrolled ? 'bg-white' : 'bg-khwela-blue'} rounded-sm h-8 w-10 flex items-center justify-center`}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke={scrolled || alwaysScrolled ? "#0F4C81" : "#FFFFFF"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icon-tabler-car">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <path d="M5 17h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5" />
        </svg>
      </div>
      <span className={`text-2xl font-bold ${scrolled || alwaysScrolled ? 'text-khwela-blue' : 'text-white'}`}>Khwela</span>
    </Link>
  );
};

export default NavbarLogo;
