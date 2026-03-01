import { useEffect, useState } from "react";

export default function Hero() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const handleScroll = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(34,211,238,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_60%,rgba(34,211,238,0.08),transparent)]" />

      {/* Floating geometric accent */}
      <div className="absolute top-1/4 right-10 w-64 h-64 border border-cyan-400/10 rounded-full" />
      <div className="absolute top-1/4 right-10 w-44 h-44 border border-cyan-400/15 rounded-full translate-x-10 translate-y-10" />
      <div className="absolute bottom-1/4 left-10 w-32 h-32 border border-cyan-400/10 rotate-45" />

      <div
        className={`relative z-10 text-center px-6 max-w-4xl mx-auto transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p
          className="font-mono text-cyan-400 text-sm tracking-[0.3em] uppercase mb-6"
          style={{ transitionDelay: "0.1s" }}
        >
          Full Stack Developer
        </p>

        <h1 className="font-black text-white leading-none tracking-tight mb-4">
          <span
            className="block text-5xl md:text-7xl lg:text-8xl"
            style={{
              fontFamily: "'Bebas Neue', 'Impact', sans-serif",
              letterSpacing: "0.05em",
            }}
          >
            NELAPATI
          </span>
          <span
            className="block text-5xl md:text-7xl lg:text-8xl text-transparent"
            style={{
              fontFamily: "'Bebas Neue', 'Impact', sans-serif",
              letterSpacing: "0.05em",
              WebkitTextStroke: "1px rgba(34,211,238,0.7)",
            }}
          >
            PRASHANTH KUMAR
          </span>
        </h1>

        <div className="mt-6 flex items-center justify-center gap-3">
          <div className="h-px w-12 bg-cyan-400/40" />
          <p className="text-slate-400 text-sm md:text-base tracking-widest">
            MERN · MEAN · 11+ Years Experience
          </p>
          <div className="h-px w-12 bg-cyan-400/40" />
        </div>

        <p className="mt-6 text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Senior Full Stack Developer building scalable, user-centric web applications for global leaders like{" "}
          <span className="text-cyan-400">Cognizant</span>,{" "}
          <span className="text-cyan-400">ADP</span>, and{" "}
          <span className="text-cyan-400">TCS</span>.
        </p>

        <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
          <button
            onClick={() => handleScroll("#experience")}
            className="px-8 py-3 bg-cyan-400 text-slate-900 font-bold text-sm tracking-wider hover:bg-cyan-300 transition-colors duration-200 rounded-sm"
          >
            VIEW WORK
          </button>
          <button
            onClick={() => handleScroll("#contact")}
            className="px-8 py-3 border border-cyan-400/40 text-cyan-400 font-bold text-sm tracking-wider hover:border-cyan-400 hover:bg-cyan-400/5 transition-all duration-200 rounded-sm"
          >
            CONTACT ME
          </button>
        </div>

        {/* Certifications badges */}
        <div className="mt-10 flex items-center justify-center gap-3 flex-wrap">
          {["GitHub Foundations", "GitHub Copilot"].map((cert) => (
            <span
              key={cert}
              className="font-mono text-xs text-cyan-400/70 border border-cyan-400/20 px-3 py-1 rounded-full bg-cyan-400/5"
            >
              ✓ {cert}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="font-mono text-xs text-slate-500 tracking-widest">SCROLL</span>
        <div className="w-px h-8 bg-gradient-to-b from-cyan-400/50 to-transparent" />
      </div>
    </section>
  );
}
