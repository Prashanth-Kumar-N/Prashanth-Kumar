import { useState } from "react";

const experiences = [
  {
    id: "cognizant",
    company: "Cognizant",
    client: "Oshkosh Corporation",
    period: "Sep 2018 – Present",
    projects: [
      {
        name: "SCOPE — Item Planning & Warehouse Management",
        role: "UI Team Lead & Senior Full Stack Developer",

        period: "Jan 2025 – Present",
        tech: [
          "React",
          "Node.js",
          "TypeScript",
          "ES6",
          "SCSS",
          "MongoDB",
          "Express",
          "Redis",
          "GitHub Copilot",
        ],
        highlights: [
          "Leading the transition from legacy architecture to a modern MERN stack (Last 12 months), improving performance and developer experience.",
          "Built scalable backend services using Node.js and Express, integrating MongoDB for warehouse data.",
          "Led a cross-functional team of 5 developers as primary point of contact for stakeholders.",
          "Architected a library of reusable UI components that standardized design patterns across modules.",
          "Optimized performance and quality via rigorous code reviews and CMMI compliance processes.",
          "Active participation in RFP preparations and technical interviewing for recruitment panels.",
          "Integrated GitHub Copilot to accelerate the development lifecycle and improve code quality.",
        ],
      },
      {
        name: "SCOPE — Item Planning & Warehouse Management",
        role: "UI Team Lead & Senior Angular Developer",

        period: "Sep 2018 – Dec 2024",
        tech: ["Angular", "TypeScript", "ES6", "SCSS"],
        highlights: [
          "Directed a cross-functional team of 5 developers, acting as the primary technical point of contact for stakeholders and ensuring 100% on-time project delivery.",
          "Orchestrated the continuous upgrade of the core application through Angular v17, maintaining 100% system uptime and visual consistency during major version shifts.",
          "Established high-quality engineering standards by implementing rigorous code reviews and ensuring full CMMI compliance for all production releases.",
          "Fostered a collaborative team culture by facilitating group discussions on coding standards and system design, turning a group of individuals into a high-performing unit.",
          "Guaranteed production stability by spearheading the resolution of high-priority defects and ensuring seamless cross-browser compatibility for a global user base.",
          "Contributed to organizational growth by serving as a lead technical interviewer for recruitment and providing technical expertise for RFP (Request for Proposal) preparations.",
        ],
      },
    ],
  },
  {
    id: "adp",
    role: "Platform Engineer",
    company: "ADP",
    client: "Lifion by ADP",
    period: "Mar 2017 – Sep 2018",
    project: "Lifion HCM Platform",
    tech: [
      "React JS",
      "TypeScript",
      "Redux",
      "Node.js",
      "Jest",
      "Enzyme",
      "AWS",
      "CouchDB",
      "Docker",
    ],
    projects: [
      {
        name: "Lifion HCM Platform",
        role: "Platform Engineer",
        period: "",
        tech: ["React JS", "TypeScript", "Redux", "Node.js", "Jest", "Enzyme"],
        highlights: [
          "Developed modular 'Lego' components using React and HOCs for a flexible multi-SPA UI platform.",
          "Implemented Redux state management architecture for complex HCM platform modules.",
          "Architected and delivered POCs for innovative platform features, moving them to production.",
          "Ensured high accessibility (a11y) standards across all enterprise platform components.",
          "Automated QA with E2E tests inside Docker containers for volatile system components.",
          "Managed CI/CD pipeline via Jenkins for stable, timely deployment of platform updates.",
        ],
      },
    ],
  },
  {
    id: "tcs",
    company: "TCS",
    client: "Ericsson",
    period: "Mar 2014 – Mar 2017",
    project: "ENM-FM — Fault Management",
    projects: [
      {
        name: "ENM-FM — Fault Management",
        role: "Application Developer",
        period: "",
        tech: [
          "JavaScript",
          "Angular 2",
          "HTML5",
          "CSS3",
          "Underscore.js",
          "Require.js",
        ],
        highlights: [
          "Designed and developed a real-time web-based Fault Management application with GUI.",
          "Engineered reusable platform components adopted across multiple teams, reducing redundancy.",
          "Translated complex client requirements into technical solutions meeting all functional needs.",
          "Managed project execution adhering to preset budgets and strict deadlines.",
          "Optimized performance using Underscore.js and Require.js for large-scale network fault data.",
        ],
      },
    ],
  },
];

export default function Experience() {
  const [active, setActive] = useState("cognizant");
  const exp = experiences.find((e) => e.id === active);

  return (
    <section id="experience" className="py-24 bg-slate-950 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-cyan-400 text-sm tracking-widest">
            02.
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
            Experience
          </h2>
          <div className="flex-1 h-px bg-slate-800 max-w-xs" />
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Tab list */}
          <div className="flex md:flex-col gap-1 overflow-x-auto md:overflow-visible min-w-max">
            {experiences.map((e) => (
              <button
                key={e.id}
                onClick={() => setActive(e.id)}
                /* className={`px-5 py-3 text-sm font-mono tracking-wide text-left whitespace-nowrap transition-all duration-200 border-l-2 md:border-l-2 md:border-b-0 border-b-2 ${
                  active === e.id
                    ? "border-cyan-400 text-cyan-400 bg-cyan-400/5"
                    : "border-slate-700 text-slate-500 hover:text-slate-300 hover:border-slate-500"
                }`} */
                style={{
                  padding: "0.75rem 1.25rem",
                  cursor: "pointer",
                  border: "none",
                  borderLeft:
                    active === e.id ? "2px solid #22d3ee" : "2px solid #1e293b",
                  borderRadius: "0",
                  outline: "none",
                  color: active === e.id ? "#22d3ee" : "#64748b",
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: "0.8rem",
                  letterSpacing: "0.1em",
                  textAlign: "left",
                  transition: "all 0.2s",
                  background:
                    active === e.id ? "rgba(34,211,238,0.04)" : "transparent",
                }}
                onMouseEnter={(e2) => {
                  if (active !== e.id) e2.currentTarget.style.color = "#cbd5e1";
                }}
                onMouseLeave={(e2) => {
                  if (active !== e.id) e2.currentTarget.style.color = "#64748b";
                }}
              >
                {e.company}
              </button>
            ))}
          </div>

          {/* Content panel */}
          <div className="flex-1 min-h-96">
            {exp && exp.projects && exp.projects.length > 0
              ? exp.projects.map((p, idx) => (
                  <div
                    key={exp.id + idx}
                    className="animate-in mb-12 tab-panel"
                  >
                    <div className="mb-1">
                      <h3 className="text-xl font-bold text-white">
                        {p.role}{" "}
                        <span className="text-cyan-400">@ {exp.client}</span>
                      </h3>
                      <p className="font-mono text-xs text-slate-500 mt-1 tracking-wider">
                        {p.period || exp?.period}
                      </p>
                    </div>

                    <p
                      className="text-slate-400 text-sm mt-2 mb-4 italic tracking-wide"
                      style={{
                        color: "#64748b",
                        fontSize: "0.85rem",
                        marginTop: 8,
                        marginBottom: "1.25rem",
                        fontStyle: "italic",
                      }}
                    >
                      {p.name}
                    </p>

                    <ul className="space-y-3 mb-6">
                      {p.highlights.map((h, i) => (
                        <li
                          key={i}
                          className="flex gap-3 text-slate-400 text-sm leading-relaxed"
                        >
                          <span className="text-cyan-400 mt-1 shrink-0">▸</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-xs text-cyan-400/70 border border-cyan-400/20 bg-cyan-400/5 px-2.5 py-1 rounded"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))
              : null}
          </div>
        </div>
      </div>
    </section>
  );
}
