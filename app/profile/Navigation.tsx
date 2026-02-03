import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 50);
      if (currentY > 40 && !hasScrolled) setHasScrolled(true);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const navOpacity = hasScrolled ? 1 : 0.98;

  return (
    <motion.nav
      className={`fixed top-4 left-0 w-full z-50 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${scrolled ? 'py-1.5' : 'py-2.5'
        }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: navOpacity }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="section-container px-6 relative flex items-center justify-between">
        {/* Logo - Anchored Left */}
        <motion.div
          className="text-2xl font-serif tracking-tight z-50 relative shrink-0 cursor-pointer text-text-primary"
          whileHover={{ y: -1 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Dr. Maya Reynolds.
        </motion.div>

        {/* Desktop Menu - Right Corner */}
        <div className={`hidden md:flex items-center gap-10 px-6 py-2.5 rounded-full backdrop-blur-md transition-all duration-500 ${scrolled
          ? 'bg-bg-surface/70 shadow-elevated'
          : 'bg-bg-surface/55 shadow-elevated-sm'
          }`}>
          <div className="flex items-center gap-9">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-xs uppercase tracking-[0.12em] text-text-secondary transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] font-medium group py-2 leading-none hover:opacity-85 hover:-translate-y-0.5"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-text-primary/30 transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-full bg-accent/90 text-bg-primary text-xs font-semibold uppercase tracking-[0.12em] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] shadow-accent-sm hover:shadow-accent-hover hover:-translate-y-0.5"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Toggle & Spacer - Right */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden z-50 text-text-primary transition-colors p-2"
            aria-label="Toggle Menu"
          >
            <span className="sr-only">Toggle Menu</span>
            <motion.span
              className="relative block w-8 h-8"
              animate={isOpen ? 'open' : 'closed'}
            >
              <motion.span
                className="absolute left-1/2 top-2 block h-[2px] w-6 -translate-x-1/2 rounded-full bg-text-primary"
                variants={{
                  closed: { rotate: 0, y: 0, opacity: 1 },
                  open: { rotate: 45, y: 6, opacity: 1 },
                }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              />
              <motion.span
                className="absolute left-1/2 top-1/2 block h-[2px] w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-text-primary"
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              />
              <motion.span
                className="absolute left-1/2 bottom-2 block h-[2px] w-6 -translate-x-1/2 rounded-full bg-text-primary"
                variants={{
                  closed: { rotate: 0, y: 0, opacity: 1 },
                  open: { rotate: -45, y: -6, opacity: 1 },
                }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              />
            </motion.span>
          </button>
        </div>

        {/* Mobile Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-x-0 top-0 bg-bg-primary/85 backdrop-blur-xl z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                className="mx-4 mt-20 mb-6 bg-bg-surface/70 backdrop-blur-md rounded-3xl px-8 py-12 shadow-elevated-lg"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="space-y-7 text-center">
                  {links.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-3xl font-serif text-text-primary italic block"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.08 * index, ease: [0.22, 1, 0.36, 1] }}
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};