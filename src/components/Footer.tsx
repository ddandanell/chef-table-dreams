import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="text-primary">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 13.87V16c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-2.13c-1.76.41-3.64.64-5.5.64s-3.74-.23-5.5-.64z" fill="currentColor"/>
                  <path d="M8.5 10.99c-1.93.37-3.61.92-5 1.52V14h16v-1.49c-1.39-.6-3.07-1.15-5-1.52" fill="currentColor"/>
                  <path d="M12 8c-3.31 0-6 1.12-6 2.5V12c0-.83 2.69-1.5 6-1.5s6 .67 6 1.5v-1.5c0-1.38-2.69-2.5-6-2.5z" fill="currentColor"/>
                  <path d="M12 2C9.24 2 7 4.24 7 7v1h10V7c0-2.76-2.24-5-5-5z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="text-2xl font-black text-white">My Chef Do<span className="text-xs align-top">.</span>It</h3>
            </div>
            <p className="text-gray-400 text-sm mb-4 max-w-xs">
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
              <li><a href="/services" className="text-gray-400 hover:text-white transition-smooth">Services</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white transition-smooth">About</a></li>
              <li><a href="/careers" className="text-gray-400 hover:text-white transition-smooth">Careers</a></li>
              <li><a href="/gift-cards" className="text-gray-400 hover:text-white transition-smooth">Gift Cards</a></li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="/faq" className="text-gray-400 hover:text-white transition-smooth">FAQ</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition-smooth">Contact Us</a></li>
              <li><a href="/privacy-policy" className="text-gray-400 hover:text-white transition-smooth">Privacy Policy</a></li>
              <li><a href="/terms-of-service" className="text-gray-400 hover:text-white transition-smooth">Terms of Service</a></li>
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
