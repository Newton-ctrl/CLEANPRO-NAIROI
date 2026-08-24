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
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-sm flex items-center justify-center" style={{background: 'linear-gradient(135deg, #c9a84c, #e0c06b)'}}>
              <span className="text-white font-bold text-sm" style={{fontFamily: 'DM Sans, sans-serif'}}>CP</span>
            </div>
            <div>
              <span className="text-white font-semibold text-lg tracking-wide" style={{fontFamily: 'DM Sans, sans-serif'}}>CleanPro</span>
              <span className="text-xs block leading-none" style={{color: '#c9a84c', fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.15em'}}>NAIROBI</span>
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

          {/* CTA */}
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
              className="text-sm font-semibold px-5 py-2.5 rounded-full text-navy transition-all duration-300 hover:scale-105"
              style={{background: 'linear-gradient(135deg, #c9a84c, #e0c06b)', color: '#0a1628'}}
            >
              Book Now
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col"
            style={{background: 'rgba(10, 22, 40, 0.98)', backdropFilter: 'blur(20px)'}}
          >
            <div className="flex items-center justify-between px-6 py-5">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-sm flex items-center justify-center" style={{background: 'linear-gradient(135deg, #c9a84c, #e0c06b)'}}>
                  <span className="text-white font-bold text-sm">CP</span>
                </div>
                <div>
                  <span className="text-white font-semibold text-lg">CleanPro</span>
                  <span className="text-xs block leading-none" style={{color: '#c9a84c', letterSpacing: '0.15em'}}>NAIROBI</span>
                </div>
              </div>
              <button className="text-white p-2" onClick={() => setMenuOpen(false)}>
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col items-center justify-center flex-1 gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="text-white text-2xl font-light tracking-wide"
                  style={{fontFamily: 'Cormorant Garamond, serif'}}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="mt-4 text-navy font-semibold px-8 py-3 rounded-full text-lg"
                style={{background: 'linear-gradient(135deg, #c9a84c, #e0c06b)', color: '#0a1628'}}
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
