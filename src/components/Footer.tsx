
import { Link } from "react-router-dom";
import { Car, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-khwela-dark text-white pt-16 pb-8">
      {/* Rainbow accent line */}
      <div className="absolute top-0 left-0 w-full h-1 rainbow-gradient"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Car size={32} className="text-khwela-gold" />
              <span className="text-2xl font-bold">Khwela</span>
            </div>
            <p className="text-gray-400 mb-6">
              South Africa's safest ride-hailing service, putting people and safety first.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-400 hover:text-khwela-gold transition-colors">Home</Link></li>
              <li><Link to="/ride" className="text-gray-400 hover:text-khwela-gold transition-colors">Request Ride</Link></li>
              <li><Link to="/driver" className="text-gray-400 hover:text-khwela-gold transition-colors">Become a Driver</Link></li>
              <li><Link to="/safety" className="text-gray-400 hover:text-khwela-gold transition-colors">Safety Features</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-khwela-gold transition-colors">About Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-khwela-gold transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-khwela-gold transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-khwela-gold transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-khwela-gold transition-colors">POPIA Compliance</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-3 text-gray-400">
              <li>Khwela Headquarters</li>
              <li>88 Stellenberg Road</li>
              <li>Cape Town, South Africa</li>
              <li className="pt-2">info@khwela.co.za</li>
              <li>+27 21 555 1234</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 mt-8 text-gray-400 text-sm flex flex-col md:flex-row justify-between items-center">
          <div>
            &copy; {currentYear} Khwela Technologies (Pty) Ltd. All rights reserved.
          </div>
          <div className="mt-4 md:mt-0 flex items-center">
            <span>Proudly South African </span>
            <span className="ml-2 w-6 h-6 inline-block relative overflow-hidden rounded-sm">
              <div className="absolute top-0 left-0 w-full h-1/3 bg-khwela-rainbow-red"></div>
              <div className="absolute top-1/3 left-0 w-full h-1/3 bg-white"></div>
              <div className="absolute top-2/3 left-0 w-full h-1/3 bg-khwela-green"></div>
              <div className="absolute top-0 left-0 w-1/3 h-full bg-khwela-gold"></div>
              <div className="absolute top-0 left-1/3 border-t-[8px] border-l-[8px] border-t-khwela-green border-l-white"></div>
              <div className="absolute top-0 right-0 border-b-[8px] border-r-[8px] border-b-khwela-rainbow-red border-r-white"></div>
            </span>
            <span className="ml-1">🇿🇦</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
