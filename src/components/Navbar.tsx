// import { useState, useEffect } from "react";
// import { NAV_LINKS } from "../constants";
// import logo from "/Glass.png";

// const ALLOWED_LINKS = ["Home", "About Us", "Our Services"];

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleLinkClick = (
//     e: React.MouseEvent<HTMLAnchorElement>,
//     href: string,
//   ) => {
//     e.preventDefault();
//     const element = document.getElementById(href.replace("#", ""));
//     if (element) {
//       window.scrollTo({
//         top: element.offsetTop - 80,
//         behavior: "smooth",
//       });
//       setIsMobileMenuOpen(false);
//     }
//   };

//   const filteredLinks = NAV_LINKS.filter((link) =>
//     ALLOWED_LINKS.includes(link.label),
//   );

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
//         isScrolled
//           ? "bg-gray-100/100 backdrop-blur-xl py-4 border-b border-black/10 shadow-sm"
//           : "bg-gray-100/95 py-6"
//       }`}
//     >
//       <div className="container mx-auto px-6 flex justify-between items-center">
//         <a
//           href="#home"
//           onClick={(e) => handleLinkClick(e, "#home")}
//           className="group flex items-center space-x-4"
//         >
//           <div className="relative w-10 h-10 rounded-lg overflow-hidden">
//             <img
//               src={logo}
//               alt="Glassbones Logo"
//               className="w-full h-full object-contain"
//             />
//           </div>
//           <span className="text-2xl md:text-3xl font-serif tracking-tight text-obsidian">
//             Glassbones Creative Nexus
//           </span>
//         </a>

//         {/* Desktop Nav */}
//         <div className="hidden md:flex items-center space-x-10">
//           {filteredLinks.map((link) => (
//             <a
//               key={link.label}
//               href={link.href}
//               onClick={(e) => handleLinkClick(e, link.href)}
//               className="text-sm md:text-base uppercase tracking-widest text-obsidian/80 hover:text-obsidian font-medium transition-all duration-300 relative group"
//             >
//               {link.label}
//               <span className="absolute -bottom-1 left-0 w-0 h-px bg-crystal transition-all duration-300 group-hover:w-full"></span>
//             </a>
//           ))}
//           <a
//             href="#contact"
//             onClick={(e) => handleLinkClick(e, "#contact")}
//             className="px-6 py-3 bg-obsidian text-white rounded-full text-xs uppercase tracking-widest hover:bg-crystal transition-all"
//           >
//             Contact Us
//           </a>
//         </div>

//         {/* Mobile Toggle */}
//         <button
//           className="md:hidden text-obsidian p-2"
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//         >
//           <div className="w-6 space-y-1.5">
//             <div
//               className={`h-[2px] bg-obsidian transition-all ${
//                 isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
//               }`}
//             ></div>
//             <div
//               className={`h-[2px] bg-obsidian transition-all ${
//                 isMobileMenuOpen ? "opacity-0" : ""
//               }`}
//             ></div>
//             <div
//               className={`h-[2px] bg-obsidian transition-all ${
//                 isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
//               }`}
//             ></div>
//           </div>
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`md:hidden fixed inset-0 top-[70px] bg-gray-100 transition-all duration-500 transform ${
//           isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         <div className="flex flex-col items-center justify-center h-full space-y-10">
//           {filteredLinks.map((link) => (
//             <a
//               key={link.label}
//               href={link.href}
//               className="text-3xl font-serif text-obsidian/80 hover:text-crystal"
//               onClick={(e) => handleLinkClick(e, link.href)}
//             >
//               {link.label}
//             </a>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import { useState, useEffect } from "react";
import { NAV_LINKS } from "../constants";
import logo from "/Glass.png";

const ALLOWED_LINKS = ["Home", "About Us", "Our Services"];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // ✅ CHANGE 1: Close mobile menu when user scrolls
      // Previously the menu stayed open while scrolling.
      // Now any scroll event closes it automatically.
      // 👉 To disable this: remove the line below
      if (isMobileMenuOpen) setIsMobileMenuOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobileMenuOpen]); // isMobileMenuOpen added to dependency array so the effect always sees the latest value

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const element = document.getElementById(href.replace("#", ""));
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
      setIsMobileMenuOpen(false);
    }
  };

  const filteredLinks = NAV_LINKS.filter((link) =>
    ALLOWED_LINKS.includes(link.label),
  );

  return (
    <>
      {/* ✅ CHANGE 2: Navbar is no longer `fixed` on mobile — changed to `sticky` on mobile, `fixed` on md+
          This means on mobile the navbar scrolls away with the page instead of staying stuck.
          On desktop (md+) it remains fixed as before.
          👉 To make it always fixed (sticky on all sizes): change back to `fixed top-0 left-0 w-full z-50`
          👉 To make it always scroll away: remove `md:fixed` and use just `sticky top-0` */}
      <nav
        className={`sticky md:fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-gray-100/100 backdrop-blur-xl py-4 border-b border-black/10 shadow-sm"
            : "bg-gray-100/95 py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, "#home")}
            className="group flex items-center space-x-4"
          >
            <div className="relative w-10 h-10 rounded-lg overflow-hidden">
              <img
                src={logo}
                alt="Glassbones Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-2xl md:text-3xl font-serif tracking-tight text-obsidian">
              Glassbones Creative Nexus
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {filteredLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm md:text-base uppercase tracking-widest text-obsidian/80 hover:text-obsidian font-medium transition-all duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-crystal transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, "#contact")}
              className="px-6 py-3 bg-obsidian text-white rounded-full text-xs uppercase tracking-widest hover:bg-crystal transition-all"
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
              <div className={`h-[2px] bg-obsidian transition-all ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}></div>
              <div className={`h-[2px] bg-obsidian transition-all ${isMobileMenuOpen ? "opacity-0" : ""}`}></div>
              <div className={`h-[2px] bg-obsidian transition-all ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></div>
            </div>
          </button>
        </div>

        {/* ✅ CHANGE 3: Mobile Menu — changed from full-screen overlay to a dropdown below the navbar
            Before: `fixed inset-0 top-[70px]` — covered the entire screen
            After:  `absolute top-full left-0 w-full` — drops down just below the navbar bar,
                    showing only as tall as its content (the nav links), not full screen.
            Also added shadow and border for visual separation.
            👉 To adjust the background color: change `bg-gray-100`
            👉 To adjust padding between links: change `py-6` and `space-y-2` */}
        <div
          className={`md:hidden absolute top-full left-0 w-full bg-gray-100 border-t border-black/10 shadow-lg transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col items-center py-6 space-y-2">
            {filteredLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="w-full text-center py-3 text-lg font-serif text-obsidian/80 hover:text-crystal hover:bg-black/5 transition-all duration-200"
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}

            {/* ✅ CHANGE 4: Added Contact Us to mobile menu
                Styled as a filled button to visually distinguish it from the plain links above.
                👉 To change style: edit the className below */}
            <a
              href="#contact"
              className="mt-2 px-8 py-3 bg-obsidian text-white rounded-full text-sm uppercase tracking-widest hover:bg-crystal transition-all duration-200"
              onClick={(e) => handleLinkClick(e, "#contact")}
            >
              Contact Us
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
