
import React, { useState, useEffect } from 'react';
import { NavigationMenu, NavigationMenuList } from '@/components/ui/navigation-menu';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 20); // Reduced threshold for quicker response
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-500 ease-in-out ${
          isScrolled ? 'h-12 py-2' : 'h-20 py-6'
        }`}>
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/logo.svg" 
              alt="Logo" 
              className={`text-white transition-all duration-500 ease-in-out ${
                isScrolled ? 'h-6 w-6' : 'h-10 w-10'
              }`}
            />
          </div>
          
          {/* Navigation Menu */}
          <NavigationMenu>
            <NavigationMenuList className={`flex items-center transition-all duration-500 ease-in-out ${
              isScrolled ? 'space-x-3' : 'space-x-8'
            }`}>
              {/* Navigation items can be added here */}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
