
import React, { useState } from 'react';
import { Menu, X, Search, ShoppingCart, User, Bell, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('EN');

  const languages = ['EN', 'ES', 'FR', 'DE', 'PT'];

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gold/20 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 brass-gradient rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">FL</span>
            </div>
            <h1 className="text-2xl font-poppins font-bold text-primary">FoodLoops</h1>
          </div>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 icon-gold w-5 h-5" />
              <Input 
                placeholder="Search for near-expiry deals..."
                className="pl-12 pr-4 py-2 border-gold/30 focus:border-gold focus:ring-gold/20"
              />
            </div>
          </div>

          {/* Navigation Links - Hidden on mobile */}
          <nav className="hidden lg:flex items-center space-x-6">
            <a href="#deals" className="text-foreground hover:text-gold transition-colors">Deals</a>
            <a href="#sellers" className="text-foreground hover:text-gold transition-colors">For Sellers</a>
            <a href="#community" className="text-foreground hover:text-gold transition-colors">Community</a>
            <a href="#impact" className="text-foreground hover:text-gold transition-colors">Impact</a>
          </nav>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative">
              <Button 
                variant="ghost" 
                size="sm"
                className="flex items-center space-x-1 text-foreground hover:text-gold"
                onClick={() => {
                  const currentIndex = languages.indexOf(language);
                  const nextIndex = (currentIndex + 1) % languages.length;
                  setLanguage(languages[nextIndex]);
                }}
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm">{language}</span>
              </Button>
            </div>

            {/* Notifications */}
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="icon-gold w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs"></span>
            </Button>

            {/* Cart */}
            <Button variant="ghost" size="sm" className="relative">
              <ShoppingCart className="icon-gold w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-gold text-white text-xs rounded-full flex items-center justify-center">3</span>
            </Button>

            {/* User Profile */}
            <Button variant="ghost" size="sm">
              <User className="icon-gold w-5 h-5" />
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden mt-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 icon-gold w-5 h-5" />
            <Input 
              placeholder="Search for near-expiry deals..."
              className="pl-12 pr-4 py-2 border-gold/30 focus:border-gold focus:ring-gold/20"
            />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gold/20 pt-4">
            <nav className="flex flex-col space-y-4">
              <a href="#deals" className="text-foreground hover:text-gold transition-colors">Deals</a>
              <a href="#sellers" className="text-foreground hover:text-gold transition-colors">For Sellers</a>
              <a href="#community" className="text-foreground hover:text-gold transition-colors">Community</a>
              <a href="#impact" className="text-foreground hover:text-gold transition-colors">Impact</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
