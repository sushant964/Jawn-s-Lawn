import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-gray-100 py-3'
          : 'bg-white/80 backdrop-blur-md border-b border-gray-100 py-5'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src="https://i.ibb.co/svy5QpWm/1783166510503.jpg" 
              alt="Jawn's Lawns Logo" 
              className="h-10 w-auto rounded object-contain"
            />
            <span className="text-xl font-bold tracking-tight text-forest">
              Jawn's Lawns
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-forest',
                  location.pathname === link.path
                    ? 'text-forest'
                    : 'text-gray-600'
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center gap-6 ml-4">
              <span className="text-sm font-bold text-forest">+1 904-524-1704</span>
              <Link
                to="/contact"
                className="px-5 py-2 bg-forest text-white rounded-full text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
              >
                Free Quote
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md transition-colors text-deep-gray"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col px-4 py-6 space-y-4">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    'text-lg font-medium py-2',
                    location.pathname === link.path ? 'text-forest' : 'text-gray-800'
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col gap-4 mt-4 pt-4 border-t border-gray-100">
                <span className="text-lg font-bold text-forest text-center">+1 904-524-1704</span>
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 bg-forest text-white px-5 py-3 rounded-full font-bold uppercase tracking-wider text-sm"
                >
                  Free Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
