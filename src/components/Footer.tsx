
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import NetworkGlobe from "./NetworkGlobe";

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  return (
    <footer className="bg-black text-white py-16 px-6 md:px-12 lg:px-24 relative">
      {/* Network Globe - only on home page */}
      {isHomePage && (
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <NetworkGlobe />
        </div>
      )}
      
      <div className="container mx-auto relative z-10">        
        <div className="mb-12">
          <h3 className="text-2xl mb-4">
            <span className="text-green-400">^^ </span>
            Recruiting & Delivery Platform<br />
            for Top Remote Talent
          </h3>
          <img src="/placeholder.svg" alt="Growmodo" className="h-8 w-auto" />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Button className="bg-white text-black w-full lg:w-auto hover:bg-white/90">
              Book a Discovery Call
            </Button>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/talents" className="text-gray-400 hover:text-white">Talents</Link></li>
              <li><Link to="/showcase" className="text-gray-400 hover:text-white">Showcase</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-white">Pricing</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-white">Careers</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/guides" className="text-gray-400 hover:text-white">Guides</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white">Products</Link></li>
              <li><Link to="/scope" className="text-gray-400 hover:text-white">Scope of work</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-white">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">LinkedIn</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Facebook</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Instagram</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Twitter</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>Copyright © 2025 StartModo. All Rights Reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link to="/terms" className="hover:text-white">Terms & Conditions</Link>
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/cookies" className="hover:text-white">Cookie Policy</Link>
            <Link to="/preferences" className="hover:text-white">Data Preferences</Link>
            <Link to="/imprint" className="hover:text-white">Imprint</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
