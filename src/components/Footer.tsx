
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-mountainGray shadow-md">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Company */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-skyBlue">Excess To Himalayas</h3>
            <img 
              src="/lovable-uploads/15240964-889f-48e6-b5ca-bf1d8fe0e00d.png" 
              alt="Excess To Himalayas" 
              className="h-20 mb-4" 
            />
            <p className="text-gray-600 mb-4">
              Submitting Dreams Since 2006. Your premier trekking and tour partner in Nepal, offering exceptional adventures in the Himalayas.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-skyBlue hover:text-sunsetOrange transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-skyBlue hover:text-sunsetOrange transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-skyBlue hover:text-sunsetOrange transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-skyBlue hover:text-sunsetOrange transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-skyBlue">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink to="/" label="Home" />
              <FooterLink to="/excess-now" label="Excess Now" />
              <FooterLink to="/about/our-story" label="Our Story" />
              <FooterLink to="/about/team" label="Meet the Team" />
              <FooterLink to="/about/legal-documents" label="Legal Documents" />
              <FooterLink to="/blog" label="Blog" />
              <FooterLink to="/contact" label="Contact" />
              <FooterLink to="/book-now" label="Book Now" />
            </ul>
          </div>

          {/* Popular Treks & Tours */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-skyBlue">Popular Adventures</h3>
            <ul className="space-y-2">
              <FooterLink to="/treks/everest-base-camp" label="Everest Base Camp" />
              <FooterLink to="/treks/annapurna-circuit" label="Annapurna Circuit" />
              <FooterLink to="/treks/langtang" label="Langtang Valley" />
              <FooterLink to="/treks/mardi-himal" label="Mardi Himal" />
              <FooterLink to="/tours/cultural" label="Cultural Tours" />
              <FooterLink to="/tours/jungle-safari" label="Jungle Safari" />
              <FooterLink to="/tours/helicopter" label="Helicopter Tours" />
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-skyBlue">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mt-1 mr-3 text-sunsetOrange" />
                <span>Kathmandu, Nepal</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-sunsetOrange" />
                <div className="flex flex-col">
                  <a href="https://wa.me/9779864535410" className="hover:text-forestGreen transition-colors">
                    +977 9864535410
                  </a>
                  <a href="https://wa.me/9779849260607" className="hover:text-forestGreen transition-colors">
                    +977 9849260607
                  </a>
                </div>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-sunsetOrange" />
                <a href="mailto:excesstohimalayas@gmail.com" className="hover:text-forestGreen transition-colors">
                  excesstohimalayas@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-8 border-gray-200" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {currentYear} Excess To Himalayas. All rights reserved. Tourism License: 1111/0000</p>
          <p className="mt-4 md:mt-0">Made by Rizan Subedi</p>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ to, label }: { to: string; label: string }) => (
  <li>
    <Link to={to} className="hover:text-forestGreen transition-colors">
      {label}
    </Link>
  </li>
);

export default Footer;
