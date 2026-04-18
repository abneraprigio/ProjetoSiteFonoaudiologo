import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X, MessageSquare } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Depoimentos', href: '#depoimentos' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-4' : 'py-6'}`}>
      <div className="container mx-auto px-6">
        <nav className={`glass px-6 py-4 rounded-3xl flex items-center justify-between transition-all duration-500 ${isScrolled ? 'shadow-2xl' : 'shadow-lg'}`}>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center text-white shadow-lg">
              <span className="text-xl font-bold italic underline-offset-4 decoration-2">V</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-brand-secondary">
              Voz<span className="text-brand-primary">&Vida</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-clinical-text font-medium hover:text-brand-primary transition-colors hover:underline decoration-brand-primary decoration-2 underline-offset-4"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://wa.me/5500000000000" 
              className="bg-brand-primary text-white px-6 py-2.5 rounded-2xl font-semibold hover:bg-brand-secondary transition-all shadow-md hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <Phone size={18} />
              <span>Agendar</span>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-brand-secondary p-2 hover:bg-brand-soft rounded-xl transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 mt-4 px-6 md:hidden"
          >
            <div className="glass p-6 rounded-3xl flex flex-col gap-4 shadow-2xl">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-clinical-text py-2 border-b border-brand-accent last:border-0"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="https://wa.me/5500000000000" 
                className="btn-primary w-full mt-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <MessageSquare size={20} />
                <span>Conversar agora</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
