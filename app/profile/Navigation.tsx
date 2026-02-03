import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 50);

      if (currentY < 80) {
        setIsHidden(false);
      } else if (currentY > lastScrollY.current) {
        setIsHidden(true);
      } else if (currentY < lastScrollY.current) {
        setIsHidden(false);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${scrolled ? 'py-1' : 'py-2'
        }`}
      initial={{ y: -100 }}
      animate={{ y: isHidden ? -120 : 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-[1500px] mx-auto px-6 relative flex items-center justify-between h-full">
        {/* Logo - Anchored Left */}
        <motion.div
          className="text-2xl font-serif tracking-tight z-50 mix-blend-difference relative shrink-0 cursor-pointer"
          whileHover={{ scale: 1.05 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Dr. Maya Reynolds.
        </motion.div>

        {/* Desktop Menu - Right Corner */}
        <div className={`hidden md:flex items-center gap-8 pl-10 pr-2 py-2 rounded-full backdrop-blur-md transition-all duration-500 absolute right-[-200px] top-1/2 -translate-y-1/2 ${scrolled
          ? 'bg-bg-surface/90 border border-white/5 shadow-2xl shadow-black/50'
          : 'bg-white/5 border border-white/5 shadow-lg shadow-black/10'
          }`}>
          <div className="flex gap-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-xs uppercase tracking-[0.2em] text-text-secondary hover:text-accent transition-colors font-medium group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100" />
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="px-6 py-3 rounded-full bg-accent text-bg-primary text-xs font-bold uppercase tracking-widest hover:bg-white transition-all duration-300 shadow-[0_0_10px_rgba(102,252,241,0.3)] hover:shadow-[0_0_20px_rgba(102,252,241,0.5)]"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Toggle & Spacer - Right */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden z-50 text-text-primary hover:text-accent transition-colors p-2"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Overlay */}
        <motion.div
          className="fixed inset-0 bg-bg-primary/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center space-y-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 1 : 0, pointerEvents: isOpen ? 'auto' : 'none' }}
        >
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-4xl font-serif text-text-primary hover:text-accent transition-colors italic"
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      </div>
    </motion.nav>
  );
};