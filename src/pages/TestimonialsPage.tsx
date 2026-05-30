import { useState, useCallback, useRef, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, BookOpen, Feather, ArrowLeft } from 'lucide-react';

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
    content: "“All the world’s a stage,” and Glassbones believes every voice deserves a performance space on it. Through rooted dramas, localized adaptations, and contemporary storytelling, we are on a mission to spotlight diverse forms of theatre that emerge from lived experiences and local cultures.",
    image: '/images/HD1.jpeg',
  },
  {
    id: '2',
    title: 'Pen Your Tale',
    category: 'Theatrical Production',
    content: "As a part of Pen Your Tale, Glassbones also conducts theatre training programmes for schools and colleges, nurturing young performers, writers, and storytellers. Through workshops, interactive sessions, and performance-based learning, we encourage students to explore creativity, confidence, collaboration, and self-expression, ensuring that the world’s stage continues to welcome many more enactments and narratives.",
    image: '/images/HD2.jpeg',
  },
  {
    id: '3',
    title: 'Short and Sweet Festival',
    category: 'Theatrical Production ',
    content: "Recently, Glassbones Creative team produced the theatrical production Hotdesk and staged it at the esteemed Alliance Française of Madras as part of the Short and Sweet Theatre Festival. The production reflects our commitment to creating meaningful and engaging theatre experiences that resonate with contemporary audiences while remaining deeply rooted in local realities.",
    image: '/images/HD3.jpeg',
  },
];

const BOOK_PAGE_WIDTH = 540;
const BOOK_PAGE_HEIGHT = 660;

const PageCover = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div className="page page-cover bg-[#1B3A6B] h-full shadow-2xl flex flex-col items-center justify-between py-12 px-10 relative overflow-hidden thick-cover-left w-full">
    <div className="absolute inset-5 border border-[#D4AF37]/60 pointer-events-none" />
    <div className="absolute inset-6 border-2 border-[#D4AF37]/80 pointer-events-none" />
    <div className="text-center z-10 my-auto w-full px-4">
      <h2 className="text-2xl md:text-3xl font-sans tracking-tight text-[#D4AF37] font-bold uppercase mb-2 drop-shadow-sm">
        {title}
      </h2>
<p className="text-sm font-sans uppercase tracking-[0.5em] text-white/90 font-semibold drop-shadow-sm">
  {subtitle}
</p>
    </div>
    <div className="z-10 w-full text-center mt-auto">
      <div className="flex items-center justify-center gap-2 mb-1">
        <Feather size={16} className="text-[#D4AF37]" />
        <span className="text-[17px] font-sans font-semibold uppercase tracking-[0.3em] text-white/80">Volume I</span>
      </div>
      <div className="font-serif text-[#D4AF37]/90 italic text-xl">Glassbones Creative </div>
    </div>
  </div>
);

const TableOfContents = () => (
  <div className="page bg-[#EFECE3] flex flex-col p-10 h-full relative border-r border-black/[0.06] w-full">
    <div className="spine-gradient-left" />
    <h3 className="text-xs font-sans uppercase tracking-[0.4em] text-gray-500 mb-8 font-bold border-b border-black/5 pb-3">Index of Works</h3>
    <div className="space-y-6 flex-1">
      <div className="group cursor-pointer">
        <div className="flex items-baseline gap-2 mb-1">
          <span className="text-xs font-sans text-gray-400 font-bold">01</span>
          <h4 className="text-base font-serif text-[#1F2937] font-bold group-hover:text-amber-800 transition-colors">
            The Hotdesk
          </h4>
          <div className="flex-1 border-b border-black/10 border-dotted mb-1" />
        </div>
      </div>
    </div>
    <div className="mt-auto pt-2 text-[10px] font-sans uppercase tracking-widest text-gray-400 font-bold">
      Glassbones Creative © 2026
    </div>
  </div>
);

// Renders on the RIGHT side of a spread
const RightPageImage = ({ item, isFirstImage }: { item: PortfolioItem; isFirstImage: boolean }) => (
  <div className="page bg-[#EFECE3] flex flex-col justify-center p-6 h-full relative border-l border-black/[0.06] w-full">
    <div className="spine-gradient-right" />
    <div className="w-full h-full relative overflow-hidden rounded-xs border border-black/5 shadow-xs flex items-center justify-center bg-black/[0.03]">
      {item.image ? (
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover filter contrast-[1.01] opacity-95"
        />
      ) : (
        <div className="text-center p-4 border-2 border-dashed border-black/10 m-4 flex-1 h-[calc(100%-32px)] flex flex-col justify-center items-center">
          <Feather size={18} className="text-gray-300 mb-2" />
          <p className="text-xs font-sans uppercase text-gray-400 tracking-wider">Image Placeholder</p>
        </div>
      )}
      {isFirstImage && (
        <div className="absolute bottom-4 right-4 bg-[#EFECE3]/95 backdrop-blur-sm py-1.5 px-3.5 rounded-xs border border-black/5 z-10">
          <p className="text-[10px] font-sans uppercase tracking-widest text-[#1F2937] font-bold">The HotDesk</p>
        </div>
      )}
    </div>
  </div>
);

// Renders on the LEFT side of a spread (the back side of the image)
const LeftPageContent = ({ item }: { item: PortfolioItem }) => (
  <div className="page bg-[#EFECE3] flex flex-col justify-between p-10 md:p-12 h-full relative border-r border-black/[0.06] w-full">
    <div className="spine-gradient-left" />
    <div className="flex flex-col flex-1 justify-center py-4">
      <div className="flex justify-between items-center mb-6 border-b border-black/5 pb-2">
        <span className="text-xs font-sans tracking-[0.2em] uppercase text-gray-400 font-bold">
          {item.category}
        </span>
      </div>
      <h3 className="text-xl md:text-2xl font-serif text-gray-900 font-bold leading-tight mb-6">
        {item.title}
      </h3>
      <div className="pl-0 my-4">
        <p className="text-sm md:text-base font-serif leading-loose text-gray-700 text-justify tracking-wide">
          {item.content}
        </p>
      </div>
    </div>
    <div className="pt-4 border-t border-black/5 mt-auto flex justify-between items-center">
      <span className="text-xs font-serif text-gray-400 italic">Glassbones creative</span>
      <span className="text-xs font-sans text-gray-400 font-bold">0{item.id}</span>
    </div>
  </div>
);

const StayTunedPage = () => (
  <div className="page bg-[#EFECE3] flex flex-col items-center justify-center p-6 h-full relative border-l border-black/[0.06] w-full">
    <div className="spine-gradient-right" />
    <div className="text-center max-w-sm px-4">
      <Feather size={24} className="text-amber-800/40 mx-auto mb-4" />
      <h3 className="text-xl md:text-2xl font-serif italic text-gray-800 mb-3 tracking-wide font-medium">
        Stay tuned....
      </h3>
      <p className="text-xs font-sans uppercase tracking-[0.2em] text-amber-800 font-bold">
        More Stories Await!
      </p>
      <div className="w-12 h-[1px] bg-black/10 mx-auto mt-6" />
    </div>
  </div>
);

const BackCover = () => (
  <div className="page bg-[#1B3A6B] h-full flex flex-col items-center justify-center p-8 text-white text-center thick-cover-right relative w-full">
    <div className="absolute inset-5 border border-[#D4AF37]/40 pointer-events-none" />
    <div className="absolute inset-6 border-2 border-[#D4AF37]/50 pointer-events-none" />
    <div className="z-10 w-full flex flex-col items-center">
      <div className="w-10 h-10 mb-3 flex items-center justify-center border border-[#D4AF37]/30 rounded-full bg-[#122a55]">
        <BookOpen size={14} className="text-[#D4AF37]" />
      </div>
      <h3 className="text-2xl md:text-3xl font-serif italic text-[#D4AF37] mb-4 tracking-wide font-semibold">
        Glassbones Creative 
      </h3>
      <div className="w-12 h-[1px] bg-[#D4AF37]/30 mb-4" />
      <div className="flex flex-col gap-1 text-[10px] font-sans text-white/50">
        <span className="text-[15px] uppercase tracking-[0.4em] text-[#D4AF37]/60 mb-1 font-bold">Inquiries</span>
  <a
  href="mailto:glassbonescreative@gmail.com?subject=Inquiry from Website&body=Hello GlassBones Creative,"
  className="hover:text-[#D4AF37] transition-colors text-base md:text-lg font-mono tracking-normal text-white"
>
  glassbonescreative@gmail.com
</a>
      </div>
    </div>
  </div>
);

function useBookScale(isPortrait: boolean) {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const HEADER = 64;
    const FOOTER = 56;
    const PADDING_V = 24;
    const PADDING_H = 16;

    function compute() {
      const vw = window.innerWidth;
      const vh = window.innerHeight;

      const availH = vh - HEADER - FOOTER - PADDING_V;
      const bookW = isPortrait ? BOOK_PAGE_WIDTH : BOOK_PAGE_WIDTH * 2;
      const bookH = BOOK_PAGE_HEIGHT;

      const arrowRoom = vw >= 1024 ? 140 : 0;
      const availW = vw - PADDING_H - arrowRoom;

      const scaleW = availW / bookW;
      const scaleH = availH / bookH;

      const s = Math.min(scaleW, scaleH, 1);
      setScale(Math.max(s, 0.22));
    }

    let timer: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(timer);
      timer = setTimeout(compute, 60);
    };

    compute();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
    };
  }, [isPortrait]);

  return scale;
}

export default function TestimonialsPage() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isPortrait, setIsPortrait] = useState(false);
  const flipBookRef = useRef<any>(null);

  useEffect(() => {
    const check = () => setIsPortrait(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const scale = useBookScale(isPortrait);

  const onPage = useCallback((e: any) => {
    setCurrentPage(e.data);
  }, []);

  const next = () => flipBookRef.current?.pageFlip?.().flipNext();
  const prev = () => flipBookRef.current?.pageFlip?.().flipPrev();

  const totalPagesCount = portfolioData.length * 2 + 4;

  const isFrontPage = currentPage === 0;
  const isLastPage = currentPage >= totalPagesCount - 1;

  const nativeW = isPortrait ? BOOK_PAGE_WIDTH : BOOK_PAGE_WIDTH * 2;
  const nativeH = BOOK_PAGE_HEIGHT;

  const scaledW = nativeW * scale;
  const scaledH = nativeH * scale;

  return (
    <div
      className="h-screen w-screen flex flex-col select-none overflow-hidden relative"
      style={{ backgroundColor: '#f3f4f6' }}
    >
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[75%] bg-black/[0.02] blur-3xl rounded-full pointer-events-none" />

      {/* ── Navbar ──────────────────────────────────────────────────────────── */}
      <header
        className="w-full h-16 flex items-center justify-between px-4 sm:px-8 md:px-12 border-b border-black/10 z-30 flex-shrink-0"
        style={{ backgroundColor: '#f3f4f6' }}
      >
        <div className="flex items-center space-x-3 min-w-0">
          <div className="relative w-9 h-9 flex-shrink-0 rounded-lg overflow-hidden">
            <img src="/Glass.png" alt="Glassbones Logo" className="w-full h-full object-contain" />
          </div>
          <span className="text-2xl md:text-3xl font-serif tracking-tight text-[#1a1a2e]">
            Glassbones Creative 
          </span>
        </div>
        <a
          href="/"
          className="flex items-center gap-1.5 text-xs lg:text-sm uppercase tracking-widest text-[#1a1a2e]/80 hover:text-[#1a1a2e] font-medium transition-all duration-300 relative group whitespace-nowrap ml-4"
        >
          <ArrowLeft size={12} />
          <span className="hidden sm:inline">Back to Site</span>
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-amber-800 transition-all duration-300 group-hover:w-full" />
        </a>
      </header>

      {/* ── Main Canvas ─────────────────────────────────────────────────────── */}
      <main
        className="flex-1 w-full flex items-center justify-center p-2 relative z-20 overflow-hidden"
        style={{ backgroundColor: '#ffffff' }}
      >
        <div className="relative flex items-center justify-center w-full h-full max-w-7xl mx-auto">

          {/* Left Arrow */}
          <button
            onClick={prev}
            disabled={isFrontPage}
            aria-label="Previous page"
            className="hidden lg:flex absolute z-40 items-center justify-center w-11 h-11 rounded-full border border-black/5 bg-white shadow-sm transition-all disabled:opacity-0 disabled:pointer-events-none"
            style={{
              left: `calc(50% - ${scaledW / 2}px - 64px)`,
              color: 'rgba(26,26,46,0.4)',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.color = '#1a1a2e'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.color = 'rgba(26,26,46,0.4)'; }}
          >
            <ChevronLeft size={20} strokeWidth={1.5} />
          </button>

          {/* ── Book Wrapper ──────────────────────────────────────────────── */}
          <AnimatePresence mode="wait">
            <motion.div
              key="magazine-canvas"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center justify-center overflow-visible"
              style={{
                width: scaledW,
                height: scaledH,
                position: 'relative',
              }}
            >
              <div
                key={`${isPortrait}-${scale}`}
                style={{
                  width: nativeW,
                  height: nativeH,
                  transform: `scale(${scale})`,
                  transformOrigin: 'center center',
                }}
                className="flex items-center justify-center"
              >
                {/* @ts-ignore */}
                <HTMLFlipBook
                  width={BOOK_PAGE_WIDTH}
                  height={BOOK_PAGE_HEIGHT}
                  size="fixed"
                  minWidth={BOOK_PAGE_WIDTH}
                  maxWidth={BOOK_PAGE_WIDTH}
                  minHeight={BOOK_PAGE_HEIGHT}
                  maxHeight={BOOK_PAGE_HEIGHT}
                  maxShadowOpacity={0.08}
                  showCover={true}
                  mobileScrollSupport={true}
                  onFlip={onPage}
                  className="magazine-flipbook"
                  ref={flipBookRef}
                  startPage={currentPage < totalPagesCount ? currentPage : 0}
                  drawShadow={true}
                  flippingTime={600}
                  usePortrait={isPortrait}
                  startZIndex={1}
                  autoSize={false}
                  clickEventForward={true}
                  useMouseEvents={true}
                  swipeDistance={15}
                  showPageCorners={false}
                  disableFlipByClick={false}
                >
                  {/* SPREAD 1: Cover (Left) & Index (Right) */}
                  <div className="w-full h-full"><PageCover title="Our Works" subtitle="Theatre & Production Edition" /></div>
                  <div className="w-full h-full"><TableOfContents /></div>

                  {/* SPREAD 2: HD1 Image (Right Side of Index) & Backside Content 1 */}
                  <div className="w-full h-full"><RightPageImage item={portfolioData[0]} isFirstImage={true} /></div>
                  <div className="w-full h-full"><LeftPageContent item={portfolioData[0]} /></div>

                  {/* SPREAD 3: HD2 Image (Right Side of Content 1) & Backside Content 2 */}
                  <div className="w-full h-full"><RightPageImage item={portfolioData[1]} isFirstImage={false} /></div>
                  <div className="w-full h-full"><LeftPageContent item={portfolioData[1]} /></div>

                  {/* SPREAD 4: HD3 Image (Right Side of Content 2) & Backside Content 3 */}
                  <div className="w-full h-full"><RightPageImage item={portfolioData[2]} isFirstImage={false} /></div>
                  <div className="w-full h-full"><LeftPageContent item={portfolioData[2]} /></div>

                  {/* SPREAD 5: Stay Tuned & Back Cover */}
                  <div className="w-full h-full"><StayTunedPage /></div>
                  <div className="w-full h-full"><BackCover /></div>
                </HTMLFlipBook>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Right Arrow */}
          <button
            onClick={next}
            disabled={isLastPage}
            aria-label="Next page"
            className="hidden lg:flex absolute z-40 items-center justify-center w-11 h-11 rounded-full border border-black/5 bg-white shadow-sm transition-all disabled:opacity-0 disabled:pointer-events-none"
            style={{
              right: `calc(50% - ${scaledW / 2}px - 64px)`,
              color: 'rgba(26,26,46,0.4)',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.color = '#1a1a2e'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.color = 'rgba(26,26,46,0.4)'; }}
          >
            <ChevronRight size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Mobile touch navigation layer */}
        <div className="lg:hidden absolute inset-x-0 bottom-4 flex justify-between px-6 z-40 pointer-events-none">
          <button
            onClick={prev}
            disabled={isFrontPage}
            className="pointer-events-auto w-10 h-10 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-xs border border-black/10 shadow-md disabled:opacity-0 transition-opacity"
            style={{ color: 'rgba(26,26,46,0.6)' }}
          >
            <ChevronLeft size={18} strokeWidth={2} />
          </button>
          <button
            onClick={next}
            disabled={isLastPage}
            className="pointer-events-auto w-10 h-10 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-xs border border-black/10 shadow-md disabled:opacity-0 transition-opacity"
            style={{ color: 'rgba(26,26,46,0.6)' }}
          >
            <ChevronRight size={18} strokeWidth={2} />
          </button>
        </div>
      </main>

      {/* ── Footer ──────────────────────────────────────────────────────────── */}
      <footer
        className="h-14 w-full flex items-center justify-center border-t border-black/5 space-x-4 sm:space-x-6 z-30 flex-shrink-0"
        style={{ backgroundColor: '#f3f4f6' }}
      >
        <div className="flex space-x-2">
          {Array.from({ length: Math.ceil(totalPagesCount / 2) }).map((_, i) => (
            <div
              key={i}
              className="w-1.5 h-1.5 rounded-full transition-all duration-300"
              style={{
                backgroundColor: Math.floor(currentPage / 2) === i ? '#1a1a2e' : 'rgba(0,0,0,0.1)',
                transform: Math.floor(currentPage / 2) === i ? 'scale(1.15)' : 'scale(1)',
              }}
            />
          ))}
        </div>
        <span
          className="hidden sm:block font-bold uppercase"
          style={{
            fontSize: '10px',
            letterSpacing: '0.2em',
            color: 'rgba(26,26,46,0.3)',
            fontFamily: 'Georgia, "Times New Roman", serif',
          }}
        >
          Swipe or use arrows to read
        </span>
      </footer>

      <style>{`
        .magazine-flipbook {
          background: transparent;
          perspective: 3000px;
          touch-action: pan-y !important; 
        }
        .page {
          box-sizing: border-box;
          height: 100%;
          width: 100%;
          overflow: hidden;
          /* Anti-blur rendering optimizations for 3D pageFlip transforms */
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          transform: translate3d(0, 0, 0);
          -webkit-transform: translate3d(0, 0, 0);
          transform-style: preserve-3d;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        .thick-cover-left,
        .thick-cover-right {
          box-shadow:
            inset -15px 0 30px rgba(0,0,0,0.25),
            0 4px 24px rgba(0,0,0,0.12) !important;
          z-index: 10;
        }
        .spine-gradient-left {
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          width: 20px;
          background: linear-gradient(to left, rgba(0,0,0,0.04) 0%, rgba(0,0,0,0.01) 60%, transparent 100%);
          pointer-events: none;
        }
        .spine-gradient-right {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 20px;
          background: linear-gradient(to right, rgba(0,0,0,0.04) 0%, rgba(0,0,0,0.01) 60%, transparent 100%);
          pointer-events: none;
        }
      `}</style>
    </div>
  );
}