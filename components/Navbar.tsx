import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Results', href: '#results' },
    { name: 'Process', href: '#process' },
    { name: 'Work', href: '#creatives' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0A0E0F]/80 backdrop-blur-xl border-b border-white/5 py-4' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#D1FE17] to-[#E2FF5E]">
          CBD SUTRA
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-gray-300 hover:text-[#D1FE17] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <button className="bg-gradient-to-r from-[#D1FE17] to-[#E2FF5E] text-[#0F1113] px-6 py-2 rounded-full text-sm font-bold hover:shadow-[0_0_20px_rgba(209,254,23,0.4)] transition-all transform hover:-translate-y-0.5">
            Book Audit
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0A0E0F] border-b border-white/10 p-6 flex flex-col gap-4 shadow-2xl">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-gray-300 hover:text-[#D1FE17] py-2 text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button className="bg-[#D1FE17] text-[#0F1113] px-6 py-3 rounded-full font-bold mt-4 w-full">
            Book Audit
          </button>
        </div>
      )}
    </nav>
  );
};