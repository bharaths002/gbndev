import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  content: string;
  image: string;
}

const portfolioData: PortfolioItem[] = [
  {
    id: '1',
    title: 'Hotdesk Production',
    category: 'Theatrical Production',
    content:
      '"All the world\'s a stage," and Glassbones believes every voice deserves a performance space on it. Through rooted dramas, localized adaptations, and contemporary storytelling, we are on a mission to spotlight diverse forms of theatre that emerge from lived experiences and local cultures.',
    image: '/images/HD1.jpeg',
  },
  {
    id: '2',
    title: 'Pen Your Tale',
    category: 'Theatrical Production',
    content:
      'As a part of Pen Your Tale, Glassbones also conducts theatre training programmes for schools and colleges, nurturing young performers, writers, and storytellers. Through workshops, interactive sessions, and performance-based learning, we encourage students to explore creativity, confidence, collaboration, and self-expression, ensuring that the world\'s stage continues to welcome many more enactments and narratives.',
    image: '/images/HD2.jpeg',
  },
  {
    id: '3',
    title: 'Short and Sweet Festival',
    category: 'Theatrical Production',
    content:
      'Recently, Glassbones Creative team produced the theatrical production Hotdesk and staged it at the esteemed Alliance Française of Madras as part of the Short and Sweet Theatre Festival. The production reflects our commitment to creating meaningful and engaging theatre experiences that resonate with contemporary audiences while remaining deeply rooted in local realities.',
    image: '/images/HD3.jpeg',
  },
  {
    id: '4',
    title: 'Future Horizons',
    category: 'Theatrical Production',
    content:
      'Expanding beyond standard stages, this upcoming chapter dives into alternative performance spaces. By intersecting raw local texts with modern physical installations, Glassbones explores how environments shape the depth of character performance and audience intimacy.',
    image: '/images/HD4.jpeg',
  },
  {
    id: '5',
    title: 'Cultural Echoes',
    category: 'Theatrical Production',
    content:
      'A collaborative showcase tying folklore directly to contemporary scripts. This initiative bridges forgotten regional oral historical perspectives into sharp structural modern staging layouts, ensuring ancestral narratives thrive cleanly inside global spaces.',
    image: '/images/HD5.jpeg',
  },
];

export default function TestimonialsPage() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="bg-bone min-h-screen text-obsidian font-serif selection:bg-amber-100 selection:text-amber-900 relative">

      {/* ── CUSTOM MINIMAL HEADER ───────────────────────────────────────── */}
      <header className="sticky top-0 bg-bone/80 backdrop-blur-md border-b border-black/5 z-40 h-20 flex items-center justify-between px-6 md:px-16">
        {/* Logo */}
        <div className="flex items-center space-x-3 min-w-0 flex-1">
          <div className="relative w-9 h-9 md:w-10 md:h-10 rounded-lg overflow-hidden flex-shrink-0 bg-black/5">
            <img src="/Glass.png" alt="Glassbones Logo" className="w-full h-full object-contain" />
          </div>
          <span className="text-2xl md:text-3xl font-serif tracking-tight text-obsidian whitespace-nowrap">
            Glassbones Creative
          </span>
        </div>

        {/* Back to Site */}
        <a
          href="/"
          className="flex items-center gap-2 text-xs uppercase tracking-widest font-sans font-semibold text-obsidian/50 hover:text-obsidian transition-all relative group flex-shrink-0 ml-4"
        >
          <ArrowLeft size={20} className="md:w-3.5 md:h-3.5" />
          <span className="hidden md:inline">Back to Site</span>
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-obsidian transition-all duration-300 group-hover:w-full hidden md:block" />
        </a>
      </header>

      {/* ── HERO BANNER ────────────────────────────────────────────────────── */}
      <section className="pt-8 pb-12 md:pt-14 md:pb-20 text-center max-w-3xl mx-auto px-6 border-b border-black/5">
        <span className="text-xs font-sans tracking-[0.4em] uppercase text-crystal font-bold mb-4 block">
          Portfolio Anthology
        </span>
        <h1 className="text-4xl md:text-6xl font-serif tracking-tight font-black mb-6 text-obsidian leading-tight">
          Our Shared Works
        </h1>
        <p className="text-base md:text-lg text-obsidian/60 leading-relaxed font-sans max-w-2xl mx-auto">
          Explore our collection of theatrical creations, local script workshops, and narrative
          projects shaped carefully for current generations.
        </p>
      </section>

      {/* ── PORTFOLIO ARTICLES ─────────────────────────────────────────────── */}
      <main className="max-w-5xl mx-auto px-6 py-16 md:py-24 space-y-24 md:space-y-36">
        {portfolioData.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className={`flex flex-col gap-8 md:gap-16 items-center ${
                isEven ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Image */}
              <div
                className="w-full md:w-1/2 aspect-[4/3] md:aspect-[16/13] relative overflow-hidden bg-silver/30 rounded-2xl border border-black/5 shadow-sm group cursor-pointer"
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center border-2 border-dashed border-black/10 p-6">
                    <p className="text-xs font-sans uppercase text-obsidian/30 tracking-wider">
                      Image Placeholder
                    </p>
                  </div>
                )}

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/20 via-transparent to-transparent pointer-events-none rounded-2xl" />

                {/* Category pill on hover */}
                <AnimatePresence>
                  {hoveredId === item.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute bottom-4 right-4 bg-crystal text-white text-[10px] font-sans font-bold uppercase tracking-widest px-3 py-1.5 rounded-full"
                    >
                      {item.category}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <span className="text-xs font-sans font-bold uppercase tracking-[0.25em] text-crystal/80 mb-2">
                  {item.category}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-obsidian mb-4 leading-tight">
                  {item.title}
                </h2>
                <div className="w-10 h-0.5 bg-crystal/40 rounded-full mb-5" />
                <p className="text-sm md:text-base text-obsidian/60 font-sans leading-loose tracking-wide text-justify">
                  {item.content}
                </p>
              </div>
            </motion.article>
          );
        })}
      </main>

      {/* ── FOOTER ─────────────────────────────────────────────────────────── */}
      <footer className="py-12 border-t border-black/5 bg-bone">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">

          {/* Logo */}
          <div className="text-xl font-serif font-bold tracking-tight">
            GLASSBONES CREATIVE
          </div>

          {/* Navigation */}
          <div className="flex gap-10 text-xs uppercase tracking-widest text-obsidian/50">
            <a href="/#services" className="hover:text-obsidian transition-colors duration-300">
              Services
            </a>
            <a href="/#contact" className="hover:text-obsidian transition-colors duration-300">
              Contact
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-obsidian/30 hover:text-obsidian transition-colors duration-300 uppercase tracking-[0.2em] font-medium md:self-center">
            &copy; 2026 Glassbones Creative . Built for Clarity.
          </p>

        </div>
      </footer>

      {/* ── FLOATING WHATSAPP — always visible ─────────────────────────────── */}
      <a
        href="https://wa.me/919360460661?text=Greetings%20from%20Glassbones!%20What%20can%20we%20help%20you%20with%3F"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 active:scale-110 transition-all duration-300"
      >
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
          <path d="M20.52 3.48A11.91 11.91 0 0012.01 0C5.38 0 .01 5.37.01 12c0 2.12.55 4.2 1.6 6.03L0 24l6.14-1.61A11.94 11.94 0 0012.01 24C18.63 24 24 18.63 24 12a11.9 11.9 0 00-3.48-8.52zM12.01 21.8a9.8 9.8 0 01-5-1.38l-.36-.21-3.64.96.97-3.54-.23-.37A9.8 9.8 0 1121.8 12c0 5.4-4.39 9.8-9.79 9.8zm5.66-7.34c-.31-.16-1.83-.9-2.11-1-.28-.1-.48-.16-.68.16-.2.31-.78 1-.96 1.2-.18.2-.36.22-.67.08-.31-.16-1.31-.48-2.49-1.54-.92-.82-1.54-1.84-1.72-2.15-.18-.31-.02-.48.14-.64.14-.14.31-.36.46-.54.16-.18.2-.31.31-.51.1-.2.05-.38-.03-.54-.08-.16-.68-1.64-.93-2.25-.24-.58-.49-.5-.68-.51h-.58c-.2 0-.52.08-.79.38-.27.31-1.04 1.02-1.04 2.49s1.07 2.9 1.22 3.1c.16.2 2.1 3.21 5.08 4.5.71.31 1.26.49 1.69.62.71.22 1.36.19 1.87.12.57-.08 1.83-.75 2.09-1.47.26-.72.26-1.34.18-1.47-.08-.13-.28-.2-.59-.36z" />
        </svg>
      </a>
    </div>
  );
}