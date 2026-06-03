import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Button from "./components/Button";
import { FEATURES, LITERARY_PROCESS } from "./constants";
import homepageImg from "/images/homepage.jpg";
import aboutagencyImg from "/images/aboutagency.avif";

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
      { threshold: 0.1 },
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-bone min-h-screen text-obsidian">
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/pinstripe-light.png')]"></div>
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-crystal/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-48 h-48 bg-obsidian/5 rounded-full blur-3xl animate-pulse delay-700"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">

            <div className="flex flex-col justify-center items-center text-center space-y-8 text-left pt-6 lg:pt-0">

              <h1 className="text-5xl md:text-7xl xl:text-8xl font-serif leading-tight animate-slide-up">
                Clarity <br />
                <span className="italic text-gradient">Refined.</span>
              </h1>

              <div className="space-y-5 animate-slide-up [animation-delay:200ms]">
                <p className="text-xl md:text-2xl font-serif italic text-obsidian/80">
                  We are Glassbones!
                </p>
                <p className="text-base md:text-lg text-obsidian/60 max-w-xl leading-relaxed">
                  We create stories in various media inclusively for you. From
                  translating books to theatre productions and social media
                  branding, we provide the crystalline clarity needed to stand
                  out. Storytelling drives mankind from grandma's tales to epic
                  films, stories immerse us all.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up [animation-delay:400ms]">
                <Button onClick={() => scrollTo("services")} className="px-10 py-4">
                  Our Services
                </Button>
                <Button variant="outline" onClick={() => scrollTo("about")} className="px-10 py-4">
                  Who We Are
                </Button>
              </div>
            </div>

            {/* RIGHT — Image */}
            <div className="relative flex items-center justify-center animate-slide-up [animation-delay:300ms]">
              {/* ✅ CHANGE 3: Image card hover effects on mobile
                  Added `active:[classes]` alongside hover — on mobile, tap activates :active
                  which triggers the same visual effect as hover does on desktop.
                  Also added touch-manipulation to prevent 300ms delay on mobile taps. */}
              <div className="group relative w-full max-w-[75%] aspect-[3/4] max-h-[60vh] rounded-3xl overflow-hidden mx-auto touch-manipulation">
                <img
                  src={homepageImg}
                  alt="homepageimg"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/20 via-transparent to-transparent pointer-events-none rounded-3xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-24 bg-white border-y border-black/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="reveal">
              <span className="text-lg uppercase tracking-widest font-bold mb-4 block bg-gradient-to-r from-blue-800 to-crystal bg-clip-text text-transparent">
                About the Agency
              </span>
              <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
                Stories from our Soil <br />
              </h2>
              <div className="space-y-6 text-base text-obsidian/70 leading-relaxed">
                <p>At Glassbones, we believe every piece of writing has a skeleton a foundation that supports its weight. When that foundation is weak, the most beautiful words can collapse.</p>
                <p>Our agency was founded on the principle that professional literary support should be accessible and transparent. We combine deep editorial expertise with modern data to ensure your work is not only perfect on the page but also impactful in the marketplace.</p>
                <p>Whether you are a novelist finishing your first draft or a business scaling its content footprint, we weave stories together to help you stand out.</p>
                <p>Sounds like your cup of tea? Let's weave stories together!</p>
              </div>
            </div>
            <div className="reveal [transition-delay:200ms] relative">
              <div className="aspect-[4/3] bg-silver rounded-2xl overflow-hidden shadow-inner border border-black/5">
                <img src={aboutagencyImg} alt="aboutagencyimg" className="w-full h-full object-cover opacity-80" referrerPolicy="no-referrer" />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 bg-silver/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 reveal">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">The Literary Journey</h2>
            <div className="w-16 h-1 bg-crystal/30 mx-auto rounded-full mb-6"></div>
            <p className="text-base md:text-lg text-obsidian/70 max-w-xl mx-auto">
              Our step-by-step approach to transforming your narrative.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {LITERARY_PROCESS.map((step, i) => (
              <div key={i} className="reveal group" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="p-8 h-full bg-white rounded-2xl border border-black/5 shadow-sm hover:shadow-md active:shadow-md transition-all duration-300 touch-manipulation">
                  <div className="w-12 h-12 rounded-full bg-obsidian/5 flex items-center justify-center mb-6 text-crystal group-hover:bg-crystal group-active:bg-crystal group-hover:text-white group-active:text-white transition-all duration-300">
                    <span className="inline-flex group-hover:scale-110 group-active:scale-110 group-hover:rotate-12 group-active:rotate-12 transition-transform duration-300">
                      {step.icon}
                    </span>
                  </div>
                  <div className="text-xs uppercase tracking-widest text-obsidian/70 font-semibold mb-2">
                    Step 0{i + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-sm text-obsidian/75 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-bone">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 reveal">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Our Deliverables</h2>
            <div className="w-16 h-1 bg-crystal/30 mx-auto rounded-full mb-6"></div>
            <p className="text-base md:text-lg text-obsidian/60 max-w-xl mx-auto">
              Comprehensive support for your literary and digital journey.
            </p>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURES.map((feature, i) => (
              <div
                key={i}
                className="reveal group p-10 rounded-2xl border border-black/5 bg-white hover:shadow-2xl active:shadow-2xl hover:-translate-y-2 active:-translate-y-2 transition-all duration-500 flex flex-col touch-manipulation"
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-obsidian text-white flex items-center justify-center mb-8 group-hover:bg-crystal group-active:bg-crystal transition-colors duration-300">
                  <span className="inline-flex group-hover:scale-125 group-active:scale-125 group-hover:-rotate-12 group-active:-rotate-12 transition-transform duration-300">
                    {feature.icon}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-obsidian/60 leading-relaxed text-sm mb-6">{feature.description}</p>

                <div className="aspect-video rounded-xl overflow-hidden bg-silver/50 mt-auto">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <div className="text-center mb-12 reveal">
            <span className="group inline-block">
              <h2 className="text-4xl md:text-5xl font-serif mb-2">Connect with Us</h2>
              <span className="block h-[2px] bg-crystal w-0 group-hover:w-full transition-all duration-500 mx-auto mb-4"></span>
            </span>
            <div className="w-16 h-1 bg-crystal/30 mx-auto rounded-full mb-6"></div>
            <p className="text-base md:text-lg text-obsidian/60 max-w-xl mx-auto">
              Ready to elevate your story? We'd love to hear from you.
            </p>
          </div>

          <div className="bg-silver/30 rounded-3xl p-6 sm:p-10 md:p-16 border border-black/5 overflow-visible relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 relative z-10">

              {/* Left — Info */}
              <div className="reveal">
                <h2 className="text-3xl md:text-4xl font-serif mb-6 leading-tight">
                  Start Your <br /> Transformation
                </h2>
                <p className="text-obsidian/50 mb-10 leading-relaxed text-sm md:text-base">
                  Ready to elevate your manuscript or optimize your web presence?
                  Reach out today for a consultation. We respond to all inquiries within 24 hours.
                </p>
                <div className="space-y-4 text-sm">
                  <div className="flex items-center gap-4 text-obsidian/70">
                    <span className="w-8 h-8 shrink-0 rounded-full bg-white border border-black/5 flex items-center justify-center">@</span>
                    <a
                      href="mailto:glassbonescreative@gmail.com"
                      className="break-all hover:text-crystal transition-colors duration-200 ease-in-out"
                    >
                      glassbonescreative@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-4 text-obsidian/70">
                    <span className="w-8 h-8 shrink-0 rounded-full bg-white border border-black/5 flex items-center justify-center">I</span>
                    <span>India / Digital / Worldwide</span>
                  </div>
                </div>
              </div>

              {/* Right — Form */}
              {(() => {
                const [selectedService, setSelectedService] = React.useState("Select a Service");
                const [serviceOpen, setServiceOpen] = React.useState(false);
                const [formStatus, setFormStatus] = React.useState<"idle" | "submitting" | "success" | "error">("idle");
                const dropdownRef = React.useRef<HTMLDivElement>(null);
                const formRef = React.useRef<HTMLFormElement>(null);

                React.useEffect(() => {
                  const handleClickOutside = (e: MouseEvent) => {
                    if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                      setServiceOpen(false);
                    }
                  };
                  document.addEventListener("mousedown", handleClickOutside);
                  return () => document.removeEventListener("mousedown", handleClickOutside);
                }, []);

                const services = [
                  "Translation",
                  "Subtitling",
                  "Publishing Strategy",
                  "Theatre Productions",
                  "Editorial Excellence",
                  "Content Strategy",
                  "SEO Strategy",
                ];

                const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
                  e.preventDefault();
                  setFormStatus("submitting");
                  const form = e.currentTarget;
                  const data = new FormData(form);
                  data.set("service", selectedService);
                  try {
                    const response = await fetch("https://formspree.io/f/xvznprve", {
                      method: "POST",
                      body: data,
                      headers: { Accept: "application/json" },
                    });
                    if (response.ok) {
                      setFormStatus("success");
                      formRef.current?.reset();
                      setSelectedService("Select a Service");
                    } else {
                      setFormStatus("error");
                    }
                  } catch {
                    setFormStatus("error");
                  }
                };

                return (
                  <form ref={formRef} onSubmit={handleSubmit} className="reveal [transition-delay:200ms] space-y-4">
                    <input type="hidden" name="subject" value="New Inquiry — Glassbones Creative " />
                    <input type="checkbox" name="botcheck" style={{ display: "none" }} />
                    <input type="text" name="name" placeholder="Full Name" required
                      className="bg-white border border-black/10 rounded-xl px-5 py-3 text-sm outline-none focus:border-crystal transition-colors w-full shadow-sm" />
                    <input type="email" name="email" placeholder="Email Address" required
                      className="bg-white border border-black/10 rounded-xl px-5 py-3 text-sm outline-none focus:border-crystal transition-colors w-full shadow-sm" />

                    <div className="relative" ref={dropdownRef}>
                      <button type="button" onClick={() => setServiceOpen(!serviceOpen)}
                        className="bg-white border border-black/10 rounded-xl px-5 py-3 text-sm w-full shadow-sm flex items-center justify-between text-left focus:border-crystal focus:outline-none transition-colors">
                        <span className={selectedService === "Select a Service" ? "text-obsidian/50" : "text-obsidian"}>
                          {selectedService}
                        </span>
                        <svg className={`w-4 h-4 text-obsidian/50 mr-1 shrink-0 transition-transform duration-300 ${serviceOpen ? "rotate-180" : "rotate-0"}`}
                          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <div className={`absolute left-0 right-0 top-full mt-1 bg-white border border-black/10 rounded-xl shadow-lg z-50 overflow-hidden transition-all duration-300 ease-in-out ${serviceOpen ? "max-h-56 opacity-100" : "max-h-0 opacity-0"}`}>
                        <div className="overflow-y-auto max-h-56 py-1">
                          {services.map((service) => (
                            <button key={service} type="button"
                              onClick={() => { setSelectedService(service); setServiceOpen(false); }}
                              className={`w-full text-left px-5 py-3 text-sm transition-colors duration-150 hover:bg-crystal/10 hover:text-crystal ${selectedService === service ? "text-crystal font-semibold bg-crystal/5" : "text-obsidian/80"}`}>
                              {service}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    <input type="hidden" name="service" value={selectedService} />

                    <textarea name="message" placeholder="Tell us about your project..." rows={4} required
                      className="bg-white border border-black/10 rounded-xl px-5 py-3 text-sm outline-none focus:border-crystal transition-colors w-full resize-none shadow-sm"></textarea>

                    <button type="submit" disabled={formStatus === "submitting"}
                      className="w-full py-4 uppercase font-bold text-xs tracking-widest bg-obsidian text-white rounded-xl hover:bg-crystal transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed">
                      {formStatus === "submitting" ? "Sending..." : "Submit Inquiry"}
                    </button>

                    {formStatus === "success" && (
                      <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-xl text-sm text-green-700">
                        <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Thank you! Your message has been sent. We'll get back to you within 24 hours.</span>
                      </div>
                    )}
                    {formStatus === "error" && (
                      <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-xl text-sm text-red-700">
                        <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <span>Something went wrong. Please try again or email us at glassbonescreative@gmail.com</span>
                      </div>
                    )}
                  </form>
                );
              })()}
            </div>

            {/* Social Icons */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 mt-10">
              <a href="https://wa.me/+919360460661" target="_blank" rel="noopener noreferrer"
                className="group w-10 h-10 rounded-full bg-white border border-black/10 flex items-center justify-center transition-all duration-300 hover:scale-110">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-black transition-colors duration-300 group-hover:text-[#25D366]">
                  <path d="M20.52 3.48A11.91 11.91 0 0012.01 0C5.38 0 .01 5.37.01 12c0 2.12.55 4.2 1.6 6.03L0 24l6.14-1.61A11.94 11.94 0 0012.01 24C18.63 24 24 18.63 24 12a11.9 11.9 0 00-3.48-8.52zM12.01 21.8a9.8 9.8 0 01-5-1.38l-.36-.21-3.64.96.97-3.54-.23-.37A9.8 9.8 0 1121.8 12c0 5.4-4.39 9.8-9.79 9.8zm5.66-7.34c-.31-.16-1.83-.9-2.11-1-.28-.1-.48-.16-.68.16-.2.31-.78 1-.96 1.2-.18.2-.36.22-.67.08-.31-.16-1.31-.48-2.49-1.54-.92-.82-1.54-1.84-1.72-2.15-.18-.31-.02-.48.14-.64.14-.14.31-.36.46-.54.16-.18.2-.31.31-.51.1-.2.05-.38-.03-.54-.08-.16-.68-1.64-.93-2.25-.24-.58-.49-.5-.68-.51h-.58c-.2 0-.52.08-.79.38-.27.31-1.04 1.02-1.04 2.49s1.07 2.9 1.22 3.1c.16.2 2.1 3.21 5.08 4.5.71.31 1.26.49 1.69.62.71.22 1.36.19 1.87.12.57-.08 1.83-.75 2.09-1.47.26-.72.26-1.34.18-1.47-.08-.13-.28-.2-.59-.36z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/glassbonescreatives" target="_blank" rel="noopener noreferrer"
                className="group w-10 h-10 rounded-full bg-white border border-black/10 flex items-center justify-center transition-all duration-300 hover:scale-110">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-black transition-colors duration-300 group-hover:text-[#DD2A7B]">
                  <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 3.2A4.8 4.8 0 1016.8 12 4.8 4.8 0 0012 7.2zm0 7.9A3.1 3.1 0 1115.1 12 3.1 3.1 0 0112 15.1zm4.95-8.8a1.15 1.15 0 101.15 1.15 1.15 1.15 0 00-1.15-1.15z" />
                </svg>
              </a>
              <a href="https://www.facebook.com/share/16a7YRxe5R/" target="_blank" rel="noopener noreferrer"
                className="group w-10 h-10 rounded-full bg-white border border-black/10 flex items-center justify-center transition-all duration-300 hover:scale-110">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-black transition-colors duration-300 group-hover:text-[#1877F2]">
                  <path d="M22 12a10 10 0 10-11.5 9.9v-7H8v-2.9h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.3c-1.3 0-1.7.8-1.7 1.6v1.9H17l-.4 2.9h-2.6v7A10 10 0 0022 12z" />
                </svg>
              </a>
              <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer"
                className="group w-10 h-10 rounded-full bg-white border border-black/10 flex items-center justify-center transition-all duration-300 hover:scale-110">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-black transition-colors duration-300">
                  <path d="M18.9 2H22l-7.5 8.6L23 22h-6.7l-5.2-6.8L5 22H2l8-9.2L1 2h6.8l4.7 6.1L18.9 2z" />
                </svg>
              </a>
              <a href="https://youtube.com/@yourchannel" target="_blank" rel="noopener noreferrer"
                className="group w-10 h-10 rounded-full bg-white border border-black/10 flex items-center justify-center transition-all duration-300 hover:scale-110">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-black transition-colors duration-300 group-hover:text-[#FF0000]">
                  <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.6 3.5 12 3.5 12 3.5s-7.6 0-9.4.6a3 3 0 00-2.1 2.1A31 31 0 000 12a31 31 0 00.5 5.8 3 3 0 002.1 2.1c1.8.6 9.4.6 9.4.6s7.6 0 9.4-.6a3 3 0 002.1-2.1A31 31 0 0024 12a31 31 0 00-.5-5.8zM9.75 15.5v-7l6 3.5-6 3.5z" />
                </svg>
              </a>
              <a href="tel:+919360460661"
                className="group w-10 h-10 rounded-full bg-white border border-black/10 flex items-center justify-center transition-all duration-300 hover:scale-110">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-black transition-colors duration-300 group-hover:text-[#0EA5E9]">
                  <path d="M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2a1 1 0 011-.24c1.1.36 2.3.56 3.6.56a1 1 0 011 1V21a1 1 0 01-1 1C10.3 22 2 13.7 2 3a1 1 0 011-1h3.5a1 1 0 011 1c0 1.3.2 2.5.56 3.6a1 1 0 01-.24 1L6.6 10.8z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-black/5 bg-bone">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">

          {/* Logo */}
          <div className="text-xl font-serif font-bold tracking-tight">
            GLASSBONES CREATIVE
          </div>

          {/* Navigation */}
          <div className="flex gap-10 text-xs uppercase tracking-widest text-obsidian/50">
            <a
              href="#services"
              className="hover:text-obsidian transition-colors duration-300"
            >
              Services
            </a>
            <a
              href="#contact"
              className="hover:text-obsidian transition-colors duration-300"
            >
              Contact
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-obsidian/30 hover:text-obsidian transition-colors duration-300 uppercase tracking-[0.2em] font-medium md:self-center">
            &copy; 2026 Glassbones Creative . Built for Clarity.
          </p>

        </div>
      </footer>


      {(() => {
        const [showWhatsApp, setShowWhatsApp] = React.useState(true);

        React.useEffect(() => {
          const contactEl = document.getElementById("contact");
          if (!contactEl) return;
          const observer = new IntersectionObserver(
            ([entry]) => setShowWhatsApp(!entry.isIntersecting),
            { threshold: 0.2 }
          );
          observer.observe(contactEl);
          return () => observer.disconnect();
        }, []);

        return (
          <a
            href="https://wa.me/919360460661?text=Greetings%20from%20Glassbones!%20What%20can%20we%20help%20you%20with%3F"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className={`
              fixed bottom-6 right-6 z-50
              w-14 h-14 rounded-full
              bg-[#25D366] text-white
              flex items-center justify-center
              shadow-lg
              hover:scale-110 active:scale-110
              transition-all duration-300
              ${showWhatsApp ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"}
            `}
          >
            <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
              <path d="M20.52 3.48A11.91 11.91 0 0012.01 0C5.38 0 .01 5.37.01 12c0 2.12.55 4.2 1.6 6.03L0 24l6.14-1.61A11.94 11.94 0 0012.01 24C18.63 24 24 18.63 24 12a11.9 11.9 0 00-3.48-8.52zM12.01 21.8a9.8 9.8 0 01-5-1.38l-.36-.21-3.64.96.97-3.54-.23-.37A9.8 9.8 0 1121.8 12c0 5.4-4.39 9.8-9.79 9.8zm5.66-7.34c-.31-.16-1.83-.9-2.11-1-.28-.1-.48-.16-.68.16-.2.31-.78 1-.96 1.2-.18.2-.36.22-.67.08-.31-.16-1.31-.48-2.49-1.54-.92-.82-1.54-1.84-1.72-2.15-.18-.31-.02-.48.14-.64.14-.14.31-.36.46-.54.16-.18.2-.31.31-.51.1-.2.05-.38-.03-.54-.08-.16-.68-1.64-.93-2.25-.24-.58-.49-.5-.68-.51h-.58c-.2 0-.52.08-.79.38-.27.31-1.04 1.02-1.04 2.49s1.07 2.9 1.22 3.1c.16.2 2.1 3.21 5.08 4.5.71.31 1.26.49 1.69.62.71.22 1.36.19 1.87.12.57-.08 1.83-.75 2.09-1.47.26-.72.26-1.34.18-1.47-.08-.13-.28-.2-.59-.36z" />
            </svg>
          </a>
        );
      })()}

    </div>
  );
};

export default App;