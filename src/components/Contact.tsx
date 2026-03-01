export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-950 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(34,211,238,0.04),transparent)]" />

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <div className="flex items-center justify-center gap-4 mb-10">
          <span className="font-mono text-cyan-400 text-sm tracking-widest">04.</span>
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">Get In Touch</h2>
        </div>

        <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          I'm currently open to exciting opportunities. Whether you have a question, a project
          idea, or just want to connect — my inbox is always open.
        </p>

        <a
          href="mailto:prashanthkumar.nelapati@gmail.com"
          className="inline-flex items-center gap-3 px-10 py-4 border border-cyan-400 text-cyan-400 font-bold tracking-widest text-sm hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 rounded-sm group"
        >
          SAY HELLO
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </a>

        <div className="mt-6 font-mono text-slate-600 text-sm">
          prashanthkumar.nelapati@gmail.com
        </div>

        <div className="mt-4 font-mono text-slate-600 text-sm">
          📞 +91 85008 79785
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 text-center border-t border-slate-800 pt-8 px-6">
        <p className="font-mono text-xs text-slate-600 tracking-widest">
          DESIGNED & BUILT BY{" "}
          <span className="text-cyan-400/60">NELAPATI PRASHANTH KUMAR</span>
        </p>
      </div>
    </section>
  );
}
