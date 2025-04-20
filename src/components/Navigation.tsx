
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, ChevronDown, Home, MapPin, Route, Heart, Users, BookOpen, Phone, CreditCard, X, Menu as MenuIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <img
                src="/lovable-uploads/15240964-889f-48e6-b5ca-bf1d8fe0e00d.png"
                alt="Excess To Himalayas"
                className="h-20"
              />
              <div className="ml-3 hidden md:block">
                <h1 className="text-skyBlue text-xl font-semibold">Excess To Himalayas</h1>
                <p className="text-mountainGray text-sm italic">Submitting Dreams Since 2006</p>
                <p className="text-mountainGray text-xs">Tourism License: 1111/0000</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              <NavItem to="/" icon={<Home className="w-4 h-4 mr-1" />} label="Home" />
              
              <NavDropdown 
                icon={<MapPin className="w-4 h-4 mr-1" />} 
                label="Treks" 
                items={[
                  { label: "Everest Base Camp", to: "/treks/everest-base-camp" },
                  { label: "Annapurna Circuit", to: "/treks/annapurna-circuit" },
                  { label: "Langtang", to: "/treks/langtang" },
                  { label: "Manaslu", to: "/treks/manaslu" },
                  { label: "Mardi Himal", to: "/treks/mardi-himal" },
                  { label: "Upper Mustang", to: "/treks/upper-mustang" },
                  { label: "Ghorepani Poon Hill", to: "/treks/ghorepani-poon-hill" },
                  { label: "Annapurna Base Camp", to: "/treks/annapurna-base-camp" },
                  { label: "Kanchenjunga Base Camp", to: "/treks/kanchenjunga-base-camp" },
                  { label: "Makalu Base Camp", to: "/treks/makalu-base-camp" },
                ]} 
              />
              
              <NavDropdown 
                icon={<Route className="w-4 h-4 mr-1" />} 
                label="Tours" 
                items={[
                  { label: "Cultural Tours", to: "/tours/cultural" },
                  { label: "City Tours", to: "/tours/city" },
                  { label: "Jungle Safari", to: "/tours/jungle-safari" },
                  { label: "Helicopter Tours", to: "/tours/helicopter" },
                  { label: "Mountain Flights", to: "/tours/mountain-flights" },
                  { label: "Pokhara Getaway", to: "/tours/pokhara-getaway" },
                  { label: "Chitwan National Park", to: "/tours/chitwan-national-park" },
                  { label: "Lumbini Pilgrimage", to: "/tours/lumbini-pilgrimage" },
                ]} 
              />
              
              <NavItem to="/excess-now" icon={<Heart className="w-4 h-4 mr-1" />} label="Excess Now" />
              
              <NavDropdown 
                icon={<Users className="w-4 h-4 mr-1" />} 
                label="About Us" 
                items={[
                  { label: "Our Story", to: "/about/our-story" },
                  { label: "Meet the Team", to: "/about/team" },
                  { label: "Legal Documents", to: "/about/legal-documents" },
                ]} 
              />
              
              <NavItem to="/blog" icon={<BookOpen className="w-4 h-4 mr-1" />} label="Blog" />
              <NavItem to="/contact" icon={<Phone className="w-4 h-4 mr-1" />} label="Contact" />
              <NavItem to="/book-now" icon={<CreditCard className="w-4 h-4 mr-1" />} label="Book Now" />
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden text-skyBlue focus:outline-none"
            >
              <MenuIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 bg-mountainGray/95 z-50 lg:hidden transform transition-transform duration-300 ease-in-out",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="flex flex-col items-center justify-center h-full space-y-6 pb-20">
          <MobileNavItem to="/" label="Home" onClick={toggleMobileMenu} />
          
          <MobileNavDropdown 
            label="Treks" 
            items={[
              { label: "Everest Base Camp", to: "/treks/everest-base-camp" },
              { label: "Annapurna Circuit", to: "/treks/annapurna-circuit" },
              { label: "Langtang", to: "/treks/langtang" },
              { label: "Manaslu", to: "/treks/manaslu" },
              { label: "Mardi Himal", to: "/treks/mardi-himal" },
              { label: "Upper Mustang", to: "/treks/upper-mustang" },
              { label: "Ghorepani Poon Hill", to: "/treks/ghorepani-poon-hill" },
              { label: "Annapurna Base Camp", to: "/treks/annapurna-base-camp" },
            ]} 
            onClick={toggleMobileMenu}
          />
          
          <MobileNavDropdown 
            label="Tours" 
            items={[
              { label: "Cultural Tours", to: "/tours/cultural" },
              { label: "City Tours", to: "/tours/city" },
              { label: "Jungle Safari", to: "/tours/jungle-safari" },
              { label: "Helicopter Tours", to: "/tours/helicopter" },
              { label: "Mountain Flights", to: "/tours/mountain-flights" },
              { label: "Pokhara Getaway", to: "/tours/pokhara-getaway" },
            ]} 
            onClick={toggleMobileMenu}
          />
          
          <MobileNavItem to="/excess-now" label="Excess Now" onClick={toggleMobileMenu} />
          
          <MobileNavDropdown 
            label="About Us" 
            items={[
              { label: "Our Story", to: "/about/our-story" },
              { label: "Meet the Team", to: "/about/team" },
              { label: "Legal Documents", to: "/about/legal-documents" },
            ]} 
            onClick={toggleMobileMenu}
          />
          
          <MobileNavItem to="/blog" label="Blog" onClick={toggleMobileMenu} />
          <MobileNavItem to="/contact" label="Contact" onClick={toggleMobileMenu} />
          <MobileNavItem to="/book-now" label="Book Now" onClick={toggleMobileMenu} />
        </nav>
      </div>
    </>
  );
};

// Desktop navigation components
const NavItem = ({ to, icon, label }: { to: string; icon?: React.ReactNode; label: string }) => (
  <Link to={to} className="nav-item group text-skyBlue">
    <span className="flex items-center">
      {icon}
      {label}
    </span>
  </Link>
);

const NavDropdown = ({ 
  icon, 
  label, 
  items 
}: { 
  icon?: React.ReactNode; 
  label: string; 
  items: { label: string; to: string }[] 
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative group" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button className="nav-item flex items-center text-skyBlue">
        {icon}
        {label}
        <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
      </button>
      
      <div 
        className={cn(
          "absolute top-full left-0 mt-1 w-56 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition-all duration-200",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      >
        <div className="py-1">
          {items.map((item, idx) => (
            <Link
              key={idx}
              to={item.to}
              className="block px-4 py-2 text-sm text-mountainGray hover:bg-forestGreen hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

// Mobile navigation components
const MobileNavItem = ({ 
  to, 
  label, 
  onClick 
}: { 
  to: string; 
  label: string; 
  onClick: () => void 
}) => (
  <Link
    to={to}
    className="text-white text-xl hover:text-sunsetOrange transition-colors duration-300"
    onClick={onClick}
  >
    {label}
  </Link>
);

const MobileNavDropdown = ({ 
  label, 
  items, 
  onClick 
}: { 
  label: string; 
  items: { label: string; to: string }[]; 
  onClick: () => void 
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full max-w-xs">
      <button
        className="flex items-center justify-between w-full text-white text-xl hover:text-sunsetOrange transition-colors duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        {label}
        <ChevronDown className={`ml-1 h-5 w-5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      
      <div className={cn("mt-2 space-y-1", isOpen ? "block" : "hidden")}>
        {items.map((item, idx) => (
          <Link
            key={idx}
            to={item.to}
            className="block pl-4 py-2 text-white hover:text-sunsetOrange transition-colors duration-300"
            onClick={onClick}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
