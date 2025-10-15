import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary via-coral to-gold flex items-center justify-center shadow-lg">
                <span className="text-3xl font-black text-white tracking-tighter">A</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-charcoal mb-1">My Chef</h3>
            <p className="text-xs text-muted-foreground font-medium mb-3">Premium Hospitality</p>
            <p className="text-muted-foreground text-sm mb-4 max-w-xs">
              Bali's Premier Hospitality Staffing Excellence
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-smooth">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary transition-smooth">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary transition-smooth">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary transition-smooth">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary transition-smooth">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-smooth">
                  Find a Chef
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-smooth">
                  Become a Chef
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-smooth">
                  Gift Cards
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-smooth">
                  About Us
                </a>
              </li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-smooth">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-smooth">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="text-gray-400 hover:text-white transition-smooth">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms-of-service" className="text-gray-400 hover:text-white transition-smooth">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Phone: +62 822-3756-5997</li>
              <li>WhatsApp: +62 822-3756-5997</li>
              <li>Email: info@mychef.in</li>
              <li>Web: www.mychef.in</li>
              <li>Available 24/7</li>
              <li className="pt-2">
                <strong className="text-white">Bali Office:</strong><br />
                Jalan Sunset Road No. 88<br />
                Seminyak, Bali 80361<br />
                Indonesia
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2018-2025 My Chef Bali. All rights reserved.</p>
          <p className="text-sm mt-2">Licensed & Insured Hospitality Staffing Company</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
