
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-gold to-gold-dark py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-poppins font-bold mb-4">
              Stay Updated on the Best Deals
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Get notified about flash sales, new store partnerships, and exclusive community recipes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email"
                className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:bg-white/30"
              />
              <Button 
                className="bg-white text-gold hover:bg-white/90 font-dm-sans font-semibold px-8"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 brass-gradient rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">FL</span>
                </div>
                <h3 className="text-2xl font-poppins font-bold">FoodLoops</h3>
              </Link>
              <p className="text-white/80 font-inter leading-relaxed">
                Revolutionizing food waste reduction through smart technology, 
                community engagement, and sustainable shopping practices.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-white hover:text-gold hover:bg-white/10">
                  <Facebook className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-white hover:text-gold hover:bg-white/10">
                  <Twitter className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-white hover:text-gold hover:bg-white/10">
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-white hover:text-gold hover:bg-white/10">
                  <Linkedin className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-dm-sans font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/deals" className="text-white/80 hover:text-gold transition-colors font-inter">
                    Browse Deals
                  </Link>
                </li>
                <li>
                  <Link to="/sellers" className="text-white/80 hover:text-gold transition-colors font-inter">
                    For Retailers
                  </Link>
                </li>
                <li>
                  <Link to="/community" className="text-white/80 hover:text-gold transition-colors font-inter">
                    Community
                  </Link>
                </li>
                <li>
                  <Link to="/impact" className="text-white/80 hover:text-gold transition-colors font-inter">
                    Impact Dashboard
                  </Link>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-gold transition-colors font-inter">
                    Recipe Hub
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-gold transition-colors font-inter">
                    How It Works
                  </a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-lg font-dm-sans font-semibold mb-6">Support</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-white/80 hover:text-gold transition-colors font-inter">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-gold transition-colors font-inter">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-gold transition-colors font-inter">
                    Contact Support
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-gold transition-colors font-inter">
                    Safety Guidelines
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-gold transition-colors font-inter">
                    Seller Resources
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-gold transition-colors font-inter">
                    App Download
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-dm-sans font-semibold mb-6">Get in Touch</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gold" />
                  <span className="text-white/80 font-inter">hello@foodloops.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gold" />
                  <span className="text-white/80 font-inter">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-gold mt-1" />
                  <span className="text-white/80 font-inter">
                    123 Sustainability Street<br />
                    Green City, GC 12345
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Impact Stats */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-poppins font-bold text-gold mb-2">2.5M lbs</div>
                <div className="text-white/80 font-inter text-sm">Food Rescued</div>
              </div>
              <div>
                <div className="text-3xl font-poppins font-bold text-gold mb-2">$18M</div>
                <div className="text-white/80 font-inter text-sm">Community Savings</div>
              </div>
              <div>
                <div className="text-3xl font-poppins font-bold text-gold mb-2">4.8M kg</div>
                <div className="text-white/80 font-inter text-sm">CO2 Prevented</div>
              </div>
              <div>
                <div className="text-3xl font-poppins font-bold text-gold mb-2">156</div>
                <div className="text-white/80 font-inter text-sm">Cities Served</div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <Leaf className="w-5 h-5 text-gold" />
                <span className="text-white/80 font-inter">
                  © 2024 FoodLoops. Fighting food waste, one deal at a time.
                </span>
              </div>
              <div className="flex space-x-6">
                <a href="#" className="text-white/80 hover:text-gold transition-colors font-inter text-sm">
                  Privacy Policy
                </a>
                <a href="#" className="text-white/80 hover:text-gold transition-colors font-inter text-sm">
                  Terms of Service
                </a>
                <a href="#" className="text-white/80 hover:text-gold transition-colors font-inter text-sm">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
