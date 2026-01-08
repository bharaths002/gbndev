
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Button from './components/Button';
import { FEATURES } from './constants';

const App: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (

  
    
    <div className="bg-bone min-h-screen text-obsidian">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/pinstripe-light.png')]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-10">
            <div className="inline-block px-4 py-1 border border-obsidian/10 rounded-full bg-white text-obsidian/60 text-[10px] uppercase tracking-[0.4em] animate-fade-in shadow-sm">
              The Architecture of Language
            </div>
            <h1 className="text-6xl md:text-8xl font-serif leading-tight animate-slide-up">
              Clarity <br /> <span className="italic text-gradient">Refined.</span>
            </h1>
            <p className="text-lg md:text-xl text-obsidian/60 max-w-2xl mx-auto leading-relaxed animate-slide-up [animation-delay:200ms]">
              Glassbones is a specialized boutique agency offering professional editorial services and search optimization. We help authors and businesses build content with structural integrity and digital visibility.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center animate-slide-up [animation-delay:400ms]">
              <Button onClick={() => window.location.href='#services'} className="px-10 py-4">Our Services</Button>
              <Button variant="outline" onClick={() => window.location.href='#about'} className="px-10 py-4">Who We Are</Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-24 bg-white border-y border-black/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="reveal">
              <span className="text-crystal text-xs uppercase tracking-widest font-bold mb-4 block">About the Agency</span>
              <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">Mastering the Art <br /> of Structural Prose</h2>
              <div className="space-y-6 text-base text-obsidian/70 leading-relaxed">
                <p>
                  At Glassbones, we believe every piece of writing has a skeleton—a foundation that supports its weight. When that foundation is weak, the most beautiful words can collapse.
                </p>
                <p>
                  Our agency was founded on the principle that professional literary support should be accessible and transparent. We combine deep editorial expertise with modern SEO data to ensure your work is not only perfect on the page but also discoverable in the digital marketplace.
                </p>
                <p>
                  Whether you are a novelist finishing your first draft or a business scaling its content footprint, we provide the crystalline clarity needed to stand out.
                </p>
              </div>
            </div>
            <div className="reveal [transition-delay:200ms] relative">
              <div className="aspect-[4/3] bg-silver rounded-2xl overflow-hidden shadow-inner border border-black/5">
                <img 
                  src="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=1000" 
                  alt="Editorial Work" 
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 glass-panel p-8 rounded-xl shadow-xl hidden md:block">
                <p className="text-3xl font-serif italic mb-1">98%</p>
                <p className="text-[10px] uppercase tracking-widest opacity-40">Client Retention</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-bone">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 reveal">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Our Services</h2>
            <div className="w-16 h-1 bg-crystal/30 mx-auto rounded-full mb-6"></div>
            <p className="text-obsidian/50 max-w-xl mx-auto">Comprehensive support for your literary and digital journey.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURES.map((feature, i) => (
              <div key={i} className="reveal group p-10 rounded-2xl border border-black/5 bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500" style={{ transitionDelay: `${i * 150}ms` }}>
                <div className="w-12 h-12 rounded-lg bg-obsidian text-white flex items-center justify-center mb-8 group-hover:bg-crystal transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-obsidian/60 leading-relaxed text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="bg-silver/30 rounded-3xl p-10 md:p-16 border border-black/5 overflow-hidden relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
              <div className="reveal">
                <h2 className="text-4xl font-serif mb-6 leading-tight">Start Your <br /> Transformation</h2>
                <p className="text-obsidian/50 mb-10 leading-relaxed">
                  Ready to elevate your manuscript or optimize your web presence? Reach out today for a consultation. We respond to all inquiries within 24 hours.
                </p>
                <div className="space-y-4 text-sm">
                  <div className="flex items-center gap-4 text-obsidian/70">
                    <span className="w-8 h-8 rounded-full bg-white border border-black/5 flex items-center justify-center">@</span>
                    <span>hello@glassbones.agency</span>
                  </div>
                  <div className="flex items-center gap-4 text-obsidian/70">
                    <span className="w-8 h-8 rounded-full bg-white border border-black/5 flex items-center justify-center">L</span>
                    <span>London / Digital / Worldwide</span>
                  </div>
                </div>
              </div>
              <form className="reveal [transition-delay:200ms] space-y-4">
                <input type="text" placeholder="Full Name" className="bg-white border border-black/10 rounded-xl px-5 py-3 text-sm outline-none focus:border-crystal transition-colors w-full shadow-sm" />
                <input type="email" placeholder="Email Address" className="bg-white border border-black/10 rounded-xl px-5 py-3 text-sm outline-none focus:border-crystal transition-colors w-full shadow-sm" />
                <select className="bg-white border border-black/10 rounded-xl px-5 py-3 text-sm outline-none focus:border-crystal transition-colors w-full shadow-sm text-obsidian/60">
                  <option>Select a Service</option>
                  <option>Manuscript Editing</option>
                  <option>SEO Strategy</option>
                  <option>Content Development</option>
                </select>
                <textarea placeholder="Tell us about your project..." rows={4} className="bg-white border border-black/10 rounded-xl px-5 py-3 text-sm outline-none focus:border-crystal transition-colors w-full resize-none shadow-sm"></textarea>
                <Button className="w-full py-4 uppercase font-bold text-xs tracking-widest">Submit Inquiry</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-black/5 bg-bone">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-lg font-serif font-bold tracking-tight">GLASSBONES</div>
          <div className="flex gap-10 text-[10px] uppercase tracking-widest text-obsidian/40">
            <a href="#about" className="hover:text-obsidian transition-colors">Our Ethos</a>
            <a href="#services" className="hover:text-obsidian transition-colors">Services</a>
            <a href="#contact" className="hover:text-obsidian transition-colors">Contact</a>
          </div>
          <p className="text-[10px] text-obsidian/30 uppercase tracking-[0.2em] font-medium">&copy; 2024 Glassbones Literary Agency. Built for Clarity.</p>
        </div>
      </footer>
    </div>
  );

  
};

export default App;
