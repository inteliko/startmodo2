
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu, X } from "lucide-react";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "Talents", path: "/talents" },
  { name: "Showcase", path: "/showcase" },
  { name: "Scope", path: "/scope" },
  { name: "Pricing", path: "/pricing" },
];

const Navbar = () => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="sticky top-4 left-4 right-4 z-50 px-4">
      <nav className={`flex items-center justify-between py-4 px-6 md:px-12 lg:px-24 bg-white rounded-lg ${scrolled ? "shadow-md" : ""}`}>
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold mr-2">StartModo</span>
          </Link>
        </div>
        
        {!isMobile ? (
          <div className="flex items-center space-x-4">
            <ul className="flex space-x-8">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className={`${
                      isActive(item.path)
                        ? "text-black font-medium"
                        : "text-gray-600 hover:text-black"
                    } transition-colors`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link to="/book-call">
              <Button>Book a Call</Button>
            </Link>
          </div>
        ) : (
          <div className="flex items-center">
            <Link to="/book-call" className="mr-4">
              <Button size="sm">Book a Call</Button>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-600 hover:text-black"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
            {mobileMenuOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 shadow-lg rounded-lg">
                <ul className="py-2">
                  {menuItems.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.path}
                        className={`block px-4 py-2 ${
                          isActive(item.path)
                            ? "text-black font-medium bg-gray-100"
                            : "text-gray-600 hover:bg-gray-50 hover:text-black"
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
