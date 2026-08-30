import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'About', href: '#about' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'nav-scrolled py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          
          {/* Main Logo: Square CP Badge + CleanPro NAIROBI Text */}
          <a
            href="#"
            className={`flex items-center gap-3 flex-shrink-0 group transition-opacity duration-200 ${
              menuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
          >
            <div
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md transition-transform group-hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #c9a84c, #e0c06b)' }}
            >
              <span className="text-[#0a1628] font-extrabold text-sm sm:text-base leading-none" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                CP
              </span>
            </div>
            <div className="flex flex-col justify-center min-w-0">
              <span className="text-white font-bold text-lg sm:text-xl leading-tight tracking-wide whitespace-nowrap block" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                CleanPro
              </span>
              <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] leading-none block mt-0.5 uppercase whitespace-nowrap" style={{ color: '#c9a84c', fontFamily: 'DM Sans, sans-serif' }}>
                NAIROBI
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/80 hover:text-white text-sm font-medium tracking-wide transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+254785254110"
              className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full border border-white/20 text-white/80 hover:text-white hover:border-white/40 transition-all duration-200"
            >
              <Phone size={14} />
              +254 785 254 110
            </a>
            <a
              href="#contact"
              className="text-sm font-bold px-5 py-2.5 rounded-full transition-all duration-300 hover:scale-105 shadow-md"
              style={{ background: 'linear-gradient(135deg, #c9a84c, #e0c06b)', color: '#0a1628' }}
            >
              Book Now
            </a>
          </div>

          {/* Single Mobile Menu Toggle Button (Hamburger when closed, single clean X when open) */}
          <button
            className="lg:hidden text-white p-2 flex items-center justify-center flex-shrink-0 cursor-pointer z-50 relative"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col"
            style={{ background: 'rgba(10, 22, 40, 0.98)', backdropFilter: 'blur(20px)' }}
          >
            {/* Mobile Header Bar */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
              <div className="flex items-center gap-3 flex-shrink-0">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md"
                  style={{ background: 'linear-gradient(135deg, #c9a84c, #e0c06b)' }}
                >
                  <span className="text-[#0a1628] font-extrabold text-sm leading-none" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    CP
                  </span>
                </div>
                <div className="flex flex-col justify-center min-w-0">
                  <span className="text-white font-bold text-lg leading-tight tracking-wide whitespace-nowrap block" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    CleanPro
                  </span>
                  <span className="text-[10px] font-bold tracking-[0.2em] leading-none block mt-0.5 uppercase whitespace-nowrap" style={{ color: '#c9a84c', fontFamily: 'DM Sans, sans-serif' }}>
                    NAIROBI
                  </span>
                </div>
              </div>
            </div>

            {/* Mobile Nav Links */}
            <div className="flex flex-col items-center justify-center flex-1 gap-7 py-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="text-white text-2xl font-light tracking-wide font-serif hover:text-[#c9a84c] transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}

              <motion.a
                href="tel:+254785254110"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-2 text-white/80 text-sm font-medium mt-2"
              >
                <Phone size={14} className="text-[#c9a84c]" />
                +254 785 254 110
              </motion.a>

              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.48 }}
                className="mt-2 text-[#0a1628] font-bold px-9 py-3.5 rounded-full text-base shadow-xl"
                style={{ background: 'linear-gradient(135deg, #c9a84c, #e0c06b)' }}
                onClick={() => setMenuOpen(false)}
              >
                Book Now
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
