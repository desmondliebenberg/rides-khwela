
import { Link } from "react-router-dom";
import { Car, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-khwela-dark text-white pt-16 pb-8">
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
              <li><Link to="/terms" className="text-gray-400 hover:text-khwela-gold transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy-policy" className="text-gray-400 hover:text-khwela-gold transition-colors">Privacy Policy</Link></li>
              <li><Link to="/cookie-policy" className="text-gray-400 hover:text-khwela-gold transition-colors">Cookie Policy</Link></li>
              <li><Link to="/popia-compliance" className="text-gray-400 hover:text-khwela-gold transition-colors">POPIA Compliance</Link></li>
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
          <div className="mt-4 md:mt-0">
            Made in South Africa 🇿🇦
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
