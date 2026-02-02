import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Connect', href: '#contact' },
  ];

  return (
    <motion.nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-4' : 'py-8'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-[1800px]  mx-auto px-6 flex justify-between items-center">
        <motion.div 
          className="text-2xl font-serif tracking-tight z-50 text-[#000000]"
          whileHover={{ scale: 1.05 }}
        >
          Dr. Maya Reynolds.
        </motion.div>

        <div className={`hidden md:flex gap-8 p-4 px-8 rounded-full backdrop-blur-md transition-colors ${
          scrolled ? 'bg-[#1a1714]/5 border border-[#1a1714]/10' : 'bg-white/30 border border-white/40'
        }`}>
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm uppercase tracking-widest text-[#1a1714] hover:opacity-50 transition-opacity"
            >
              {link.name}
            </a>
          ))}
        </div>

        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden z-50 text-[#1a1714]"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        {/* Mobile Overlay */}
        <motion.div 
          className="fixed inset-0 bg-[#f9f7f3] z-40 flex flex-col items-center justify-center space-y-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 1 : 0, pointerEvents: isOpen ? 'auto' : 'none' }}
        >
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-3xl font-serif text-[#1a1714] hover:opacity-50 transition-opacity"
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      </div>
    </motion.nav>
  );
};