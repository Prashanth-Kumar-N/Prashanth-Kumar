const skillCategories = [
  {
    category: "Frontend",
    icon: "◈",
    skills: ["React JS", "Angular", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3 / SCSS", "Tailwind CSS", "Bootstrap", "AJAX"],
  },
  {
    category: "State Management",
    icon: "⬡",
    skills: ["Redux", "Zustand", "XState"],
  },
  {
    category: "UI Libraries",
    icon: "◉",
    skills: ["Material UI", "Prime NG", "Tailwind CSS"],
  },
  {
    category: "Backend & APIs",
    icon: "⬢",
    skills: ["Node.js", "Express.js", "MongoDB", "Redis", "CouchDB", "REST APIs", "Microservices"],
  },
  {
    category: "Testing",
    icon: "◎",
    skills: ["Jest", "React Testing Library", "Enzyme", "Mocha JS", "Sinon JS", "Chai JS"],
  },
  {
    category: "Tools & DevOps",
    icon: "⬟",
    skills: ["GitHub Copilot", "Jenkins (CI/CD)", "Docker", "AWS", "Git", "CMMI"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-900 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-cyan-400 text-sm tracking-widest">03.</span>
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">Skills</h2>
          <div className="flex-1 h-px bg-slate-800 max-w-xs" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat) => (
            <div
              key={cat.category}
              className="bg-slate-800/40 border border-slate-700/40 rounded-xl p-6 hover:border-cyan-400/30 hover:bg-slate-800/60 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-cyan-400 text-xl group-hover:scale-110 transition-transform origin-left">
                  {cat.icon}
                </span>
                <h3 className="text-white font-bold text-sm tracking-wide uppercase">{cat.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs text-slate-300 bg-slate-700/50 border border-slate-600/30 px-2.5 py-1 rounded-md hover:text-cyan-400 hover:border-cyan-400/30 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications highlight */}
        <div className="mt-10 grid sm:grid-cols-2 gap-4">
          {[
            { title: "Microsoft GitHub Foundations", org: "GitHub · Microsoft", icon: "🏅" },
            { title: "GitHub Copilot Certified", org: "GitHub · Microsoft", icon: "🤖" },
          ].map((cert) => (
            <div
              key={cert.title}
              className="flex items-center gap-4 bg-gradient-to-r from-cyan-400/5 to-transparent border border-cyan-400/20 rounded-xl px-6 py-4 hover:border-cyan-400/40 transition-colors"
            >
              <span className="text-2xl">{cert.icon}</span>
              <div>
                <p className="text-white font-semibold text-sm">{cert.title}</p>
                <p className="text-slate-500 text-xs mt-0.5 font-mono">{cert.org}</p>
              </div>
              <div className="ml-auto">
                <span className="font-mono text-xs text-cyan-400 bg-cyan-400/10 px-2 py-0.5 rounded-full">CERTIFIED</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
