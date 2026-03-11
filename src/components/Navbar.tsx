import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '/about' },
    { name: 'Programs', href: '/programs' },
    { name: 'Podcast', href: '/podcast' },
    { name: 'Blog', href: '/blog' },
    { name: 'Team', href: '/team' },
  ];

  const isHome = location.pathname === '/';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-3' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`glass rounded-2xl px-6 py-3 flex items-center justify-between shadow-lg transition-all duration-300 ${isScrolled ? 'mx-0' : 'mx-4'}`}>
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group cursor-pointer">
            <img src="/rise-logo.png" alt="R.I.S.E. Tennis Logo" className="w-10 h-10 rounded-lg object-cover" />
            <span className="font-display font-black text-xl tracking-tighter text-midnight">R.I.S.E. TENNIS</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href} 
                className={`text-sm font-semibold transition-colors ${
                  location.pathname === link.href ? 'text-midnight' : 'text-midnight/70 hover:text-midnight'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Link to="/donate" className="bg-midnight text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-tennis-neon hover:text-midnight transition-all duration-300 shadow-md hover:shadow-tennis-neon/20">
              Get Involved
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2 text-midnight"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-6 right-6 mt-4 md:hidden"
          >
            <div className="glass rounded-2xl p-6 shadow-2xl flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.href} 
                  className="text-lg font-bold text-midnight"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <hr className="border-midnight/10" />
              <Link 
                to="/donate"
                className="bg-midnight text-white w-full py-4 rounded-xl font-bold text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Involved
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
