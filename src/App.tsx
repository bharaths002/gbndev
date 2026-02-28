import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Button from "./components/Button";
import { FEATURES } from "./constants";

const App: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-bone min-h-screen text-obsidian">
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/pinstripe-light.png')]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-10">
            <div className="inline-block px-4 py-1 border border-obsidian/10 rounded-full bg-white text-obsidian/60 text-[10px] uppercase tracking-[0.4em] animate-fade-in shadow-sm">
              The Architecture of Language
            </div>
            <h1 className="text-6xl md:text-8xl font-serif leading-tight animate-slide-up">
              Clarity <br />{" "}
              <span className="italic text-gradient">Refined.</span>
            </h1>
            <p className="text-lg md:text-xl text-obsidian/60 max-w-2xl mx-auto leading-relaxed animate-slide-up [animation-delay:200ms]">
              Glassbones is a specialized boutique agency offering professional
              editorial services and search optimization. We help authors and
              businesses build content with structural integrity and digital
              visibility.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center animate-slide-up [animation-delay:400ms]">
              <Button
                onClick={() => (window.location.href = "#services")}
                className="px-10 py-4"
              >
                Our Services
              </Button>
              <Button
                variant="outline"
                onClick={() => (window.location.href = "#about")}
                className="px-10 py-4"
              >
                Who We Are
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-24 bg-white border-y border-black/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="reveal">
              <span className="text-crystal text-xs uppercase tracking-widest font-bold mb-4 block">
                About the Agency
              </span>
              <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
                Mastering the Art <br /> of Structural Prose
              </h2>
              <div className="space-y-6 text-base text-obsidian/70 leading-relaxed">
                <p>
                  At Glassbones, we believe every piece of writing has a
                  skeleton—a foundation that supports its weight. When that
                  foundation is weak, the most beautiful words can collapse.
                </p>
                <p>
                  Our agency was founded on the principle that professional
                  literary support should be accessible and transparent. We
                  combine deep editorial expertise with modern SEO data to
                  ensure your work is not only perfect on the page but also
                  discoverable in the digital marketplace.
                </p>
                <p>
                  Whether you are a novelist finishing your first draft or a
                  business scaling its content footprint, we provide the
                  crystalline clarity needed to stand out.
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
                <p className="text-[10px] uppercase tracking-widest opacity-40">
                  Client Retention
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-bone">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 reveal">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              Our Services
            </h2>
            <div className="w-16 h-1 bg-crystal/30 mx-auto rounded-full mb-6"></div>
            <p className="text-obsidian/50 max-w-xl mx-auto">
              Comprehensive support for your literary and digital journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURES.map((feature, i) => (
              <div
                key={i}
                className="reveal group p-10 rounded-2xl border border-black/5 bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-obsidian text-white flex items-center justify-center mb-8 group-hover:bg-crystal transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-obsidian/60 leading-relaxed text-sm">
                  {feature.description}
                </p>
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
                <h2 className="text-4xl font-serif mb-6 leading-tight">
                  Start Your <br /> Transformation
                </h2>
                <p className="text-obsidian/50 mb-10 leading-relaxed">
                  Ready to elevate your manuscript or optimize your web
                  presence? Reach out today for a consultation. We respond to
                  all inquiries within 24 hours.
                </p>
                <div className="space-y-4 text-sm">
                  <div className="flex items-center gap-4 text-obsidian/70">
                    <span className="w-8 h-8 rounded-full bg-white border border-black/5 flex items-center justify-center">
                      @
                    </span>
                    <span>glassbonescreative@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-4 text-obsidian/70">
                    <span className="w-8 h-8 rounded-full bg-white border border-black/5 flex items-center justify-center">
                      I
                    </span>
                    <span> India / Digital / Worldwide</span>
                  </div>
                </div>
              </div>
              <form className="reveal [transition-delay:200ms] space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="bg-white border border-black/10 rounded-xl px-5 py-3 text-sm outline-none focus:border-crystal transition-colors w-full shadow-sm"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="bg-white border border-black/10 rounded-xl px-5 py-3 text-sm outline-none focus:border-crystal transition-colors w-full shadow-sm"
                />
                <select className="bg-white border border-black/10 rounded-xl px-5 py-3 text-sm outline-none focus:border-crystal transition-colors w-full shadow-sm text-obsidian/60">
                  <option>Select a Service</option>
                  <option>Manuscript Editing</option>
                  <option>SEO Strategy</option>
                  <option>Content Development</option>
                </select>
                <textarea
                  placeholder="Tell us about your project..."
                  rows={4}
                  className="bg-white border border-black/10 rounded-xl px-5 py-3 text-sm outline-none focus:border-crystal transition-colors w-full resize-none shadow-sm"
                ></textarea>
                <Button className="w-full py-4 uppercase font-bold text-xs tracking-widest">
                  Submit Inquiry
                </Button>
              </form>
            </div>
            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-10">
              {/* WhatsApp */}
              <a
                href="https://wa.me/+919360460661"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-10 h-10 rounded-full bg-white border border-black/10 flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-current text-black transition-colors duration-300 group-hover:text-[#25D366]"
                >
                  <path d="M20.52 3.48A11.91 11.91 0 0012.01 0C5.38 0 .01 5.37.01 12c0 2.12.55 4.2 1.6 6.03L0 24l6.14-1.61A11.94 11.94 0 0012.01 24C18.63 24 24 18.63 24 12a11.9 11.9 0 00-3.48-8.52zM12.01 21.8a9.8 9.8 0 01-5-1.38l-.36-.21-3.64.96.97-3.54-.23-.37A9.8 9.8 0 1121.8 12c0 5.4-4.39 9.8-9.79 9.8zm5.66-7.34c-.31-.16-1.83-.9-2.11-1-.28-.1-.48-.16-.68.16-.2.31-.78 1-.96 1.2-.18.2-.36.22-.67.08-.31-.16-1.31-.48-2.49-1.54-.92-.82-1.54-1.84-1.72-2.15-.18-.31-.02-.48.14-.64.14-.14.31-.36.46-.54.16-.18.2-.31.31-.51.1-.2.05-.38-.03-.54-.08-.16-.68-1.64-.93-2.25-.24-.58-.49-.5-.68-.51h-.58c-.2 0-.52.08-.79.38-.27.31-1.04 1.02-1.04 2.49s1.07 2.9 1.22 3.1c.16.2 2.1 3.21 5.08 4.5.71.31 1.26.49 1.69.62.71.22 1.36.19 1.87.12.57-.08 1.83-.75 2.09-1.47.26-.72.26-1.34.18-1.47-.08-.13-.28-.2-.59-.36z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/glassbonescreatives"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-10 h-10 rounded-full bg-white border border-black/10 flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-current text-black transition-colors duration-300 group-hover:text-[#DD2A7B]"
                >
                  <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 3.2A4.8 4.8 0 1016.8 12 4.8 4.8 0 0012 7.2zm0 7.9A3.1 3.1 0 1115.1 12 3.1 3.1 0 0112 15.1zm4.95-8.8a1.15 1.15 0 101.15 1.15 1.15 1.15 0 00-1.15-1.15z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/share/16a7YRxe5R/"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-10 h-10 rounded-full bg-white border border-black/10 flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-current text-black transition-colors duration-300 group-hover:text-[#1877F2]"
                >
                  <path d="M22 12a10 10 0 10-11.5 9.9v-7H8v-2.9h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.3c-1.3 0-1.7.8-1.7 1.6v1.9H17l-.4 2.9h-2.6v7A10 10 0 0022 12z" />
                </svg>
              </a>

              {/* Twitter (X) */}
              <a
                href="https://twitter.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-10 h-10 rounded-full bg-white border border-black/10 flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-current text-black transition-colors duration-300"
                >
                  <path d="M18.9 2H22l-7.5 8.6L23 22h-6.7l-5.2-6.8L5 22H2l8-9.2L1 2h6.8l4.7 6.1L18.9 2z" />
                </svg>
              </a>

              {/* Call */}
              <a
                href="tel:+919360460661"
                className="group w-10 h-10 rounded-full bg-white border border-black/10 flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-current text-black transition-colors duration-300 group-hover:text-[#0EA5E9]"
                >
                  <path d="M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2a1 1 0 011-.24c1.1.36 2.3.56 3.6.56a1 1 0 011 1V21a1 1 0 01-1 1C10.3 22 2 13.7 2 3a1 1 0 011-1h3.5a1 1 0 011 1c0 1.3.2 2.5.56 3.6a1 1 0 01-.24 1L6.6 10.8z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com/@yourchannel"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-10 h-10 rounded-full bg-white border border-black/10 flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-current text-black transition-colors duration-300 group-hover:text-[#FF0000]"
                >
                  <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.6 3.5 12 3.5 12 3.5s-7.6 0-9.4.6a3 3 0 00-2.1 2.1A31 31 0 000 12a31 31 0 00.5 5.8 3 3 0 002.1 2.1c1.8.6 9.4.6 9.4.6s7.6 0 9.4-.6a3 3 0 002.1-2.1A31 31 0 0024 12a31 31 0 00-.5-5.8zM9.75 15.5v-7l6 3.5-6 3.5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-black/5 bg-bone">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-lg font-serif font-bold tracking-tight">
            GLASSBONES
          </div>
          <div className="flex gap-10 text-[10px] uppercase tracking-widest text-obsidian/40">
            <a href="#about" className="hover:text-obsidian transition-colors">
              Our Ethos
            </a>
            <a
              href="#services"
              className="hover:text-obsidian transition-colors"
            >
              Services
            </a>
            <a
              href="#contact"
              className="hover:text-obsidian transition-colors"
            >
              Contact
            </a>
          </div>
          <p className="text-[10px] text-obsidian/30 uppercase tracking-[0.2em] font-medium">
            &copy; 2024 Glassbones Creative Nexus. Built for Clarity.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
