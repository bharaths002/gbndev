import { useState, useEffect } from "react";
import { NAV_LINKS } from "../constants";
import logo from "/Glass.png";
import { Link, useNavigate, useLocation } from "react-router-dom";

const ALLOWED_LINKS = ["Home", "About Us", "Our Services"];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      if (isMobileMenuOpen) setIsMobileMenuOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobileMenuOpen]);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const sectionId = href.replace("#", "");

    if (location.pathname !== "/") {
      // Not on home page — navigate there with the hash; App.tsx will scroll
      navigate(`/${href}`);
      setIsMobileMenuOpen(false);
      return;
    }

    // Already on home page — smooth scroll
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 80, behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const filteredLinks = NAV_LINKS.filter((link) =>
    ALLOWED_LINKS.includes(link.label),
  );

  return (
    <>
      <nav
        className={`sticky md:fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled
            ? "bg-gray-100/100 backdrop-blur-xl py-4 border-b border-black/10 shadow-sm"
            : "bg-gray-100/95 py-6"
          }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">

          {/* Logo — always goes home */}
          <Link to="/" className="group flex items-center space-x-4">
            <div className="relative w-10 h-10 rounded-lg overflow-hidden">
              <img
                src={logo}
                alt="Glassbones Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-2xl md:text-3xl font-serif tracking-tight text-obsidian">
              Glassbones Creative
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {filteredLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-xs lg:text-sm uppercase tracking-widest text-obsidian/80 hover:text-obsidian font-medium transition-all duration-300 relative group whitespace-nowrap"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-crystal transition-all duration-300 group-hover:w-full" />
              </a>
            ))}

            {/* Testimonials — desktop */}
            <Link
              to="/testimonials"
              className="text-xs lg:text-sm uppercase tracking-widest text-obsidian/80 hover:text-obsidian font-medium transition-all duration-300 relative group whitespace-nowrap"
            >
              Testimonials
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-crystal transition-all duration-300 group-hover:w-full" />
            </Link>

            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, "#contact")}
              className="px-5 py-2.5 bg-obsidian text-white rounded-full text-xs uppercase tracking-widest hover:bg-crystal transition-all whitespace-nowrap shrink-0"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-obsidian p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 space-y-1.5">
              <div className={`h-[2px] bg-obsidian transition-all ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <div className={`h-[2px] bg-obsidian transition-all ${isMobileMenuOpen ? "opacity-0" : ""}`} />
              <div className={`h-[2px] bg-obsidian transition-all ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-full left-0 w-full bg-gray-100 border-t border-black/10 shadow-lg transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <div className="flex flex-col items-center py-6 space-y-1">
            {filteredLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="w-full text-center py-3 text-sm uppercase tracking-widest text-obsidian/80 hover:text-crystal hover:bg-black/5 transition-all duration-200 font-medium"
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}

            {/* Testimonials — mobile (Link prevents full page reload) */}
            <Link
              to="/testimonials"
              className="w-full text-center py-3 text-sm uppercase tracking-widest text-obsidian/80 hover:text-crystal hover:bg-black/5 transition-all duration-200 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Testimonials
            </Link>

            <div className="pt-3">
              <a
                href="#contact"
                className="px-8 py-3 bg-obsidian text-white rounded-full text-xs uppercase tracking-widest hover:bg-crystal transition-all duration-200"
                onClick={(e) => handleLinkClick(e, "#contact")}
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;