const stats = [
  { value: "11+", label: "Years Experience" },
  { value: "3", label: "Global Companies" },
  { value: "5+", label: "Devs Led" },
  { value: "2", label: "Certifications" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-cyan-400 text-sm tracking-widest">01.</span>
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">About Me</h2>
          <div className="flex-1 h-px bg-slate-800 max-w-xs" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Text content */}
          <div className="space-y-5">
            <p className="text-slate-300 leading-relaxed text-base md:text-lg">
              I'm a Senior Full Stack Developer with over{" "}
              <span className="text-cyan-400 font-semibold">11 years of experience</span> building
              scalable, user-centric web applications. I specialize in the{" "}
              <span className="text-cyan-400 font-semibold">MERN and MEAN stacks</span>, delivering
              high-performance frontend and backend solutions.
            </p>
            <p className="text-slate-400 leading-relaxed">
              My journey spans global leaders including Cognizant (Oshkosh Corporation), ADP, and
              TCS (Ericsson). I've grown from application developer to technical lead, managing
              cross-functional teams and spearheading architectural migrations from legacy Angular
              systems to modern React architectures.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Beyond coding, I'm passionate about engineering excellence — establishing code quality
              standards, contributing to RFP preparations, and integrating AI-driven development
              tools like GitHub Copilot to accelerate delivery timelines.
            </p>

            <div className="pt-4">
              <a
                href="mailto:prashanthkumar.nelapati@gmail.com"
                className="inline-flex items-center gap-2 font-mono text-sm text-cyan-400 hover:text-cyan-300 transition-colors group"
              >
                prashanthkumar.nelapati@gmail.com
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-6 hover:border-cyan-400/30 hover:bg-slate-800/80 transition-all duration-300 group"
              >
                <div className="text-4xl font-black text-cyan-400 group-hover:scale-105 transition-transform origin-left">
                  {stat.value}
                </div>
                <div className="text-slate-400 text-sm mt-1 tracking-wide">{stat.label}</div>
              </div>
            ))}

            {/* Education card */}
            <div className="col-span-2 bg-slate-800/30 border border-slate-700/30 rounded-lg p-6">
              <p className="font-mono text-xs text-cyan-400/60 tracking-widest uppercase mb-2">Education</p>
              <p className="text-white font-semibold text-sm">B.Tech — Electrical & Electronics Engineering</p>
              <p className="text-slate-500 text-sm mt-1">Kamala Institute of Technology & Science · 71.8%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
