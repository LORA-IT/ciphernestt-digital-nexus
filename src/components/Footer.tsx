import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <img src={logo} alt="CipherNestt" className="mb-4 h-12 w-auto drop-shadow-md" />
            <p className="mb-4 text-sm text-gray-600">
              Building digital futures through innovative IT solutions and transformative business strategies.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-600 transition-colors hover:text-primary">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 transition-colors hover:text-primary">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 transition-colors hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 transition-colors hover:text-primary">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-900">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-600 transition-colors hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-gray-600 transition-colors hover:text-primary">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-gray-600 transition-colors hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-sm text-gray-600 transition-colors hover:text-primary">
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-900">Services</h3>
            <ul className="space-y-2">
              <li className="text-sm text-gray-600">IT Development</li>
              <li className="text-sm text-gray-600">Website Creation</li>
              <li className="text-sm text-gray-600">Digital Marketing</li>
              <li className="text-sm text-gray-600">ERP Solutions</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-900">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                info@ciphernestt.com
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                123 Innovation Drive, Tech City
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8 text-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} CipherNestt IT Innovations. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
