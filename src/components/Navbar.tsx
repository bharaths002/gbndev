
import  { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(href.replace('#', ''));
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/80 backdrop-blur-xl py-4 border-b border-black/5' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="group flex items-center space-x-3">
          <div className="relative w-10 h-10 border border-obsidian/10 rounded-lg flex items-center justify-center overflow-hidden">
             <div className="absolute inset-0 bg-obsidian translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
             <span className="relative text-xs font-bold text-obsidian group-hover:text-white transition-colors">GB</span>
          </div>
          <span className="text-xl font-serif tracking-tight text-obsidian">Glassbones</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-[11px] uppercase tracking-widest text-obsidian/60 hover:text-obsidian transition-all duration-300 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-crystal transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className="px-5 py-2 bg-obsidian text-white rounded-full text-[10px] uppercase tracking-widest hover:bg-crystal transition-all">Get a Quote</a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-obsidian p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="w-6 space-y-1.5">
            <div className={`h-[2px] bg-obsidian transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
            <div className={`h-[2px] bg-obsidian transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`h-[2px] bg-obsidian transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 top-[70px] bg-white transition-all duration-500 transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-10">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              className="text-2xl font-serif text-obsidian/70 hover:text-crystal"
              onClick={(e) => handleLinkClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
