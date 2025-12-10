import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const i18n = {
  de: {
    nav: [
      "Home",
      "Über mich",
      "Erfahrung",
      "Systeme",
      "Projekte",
      "Soft Skills",
      "Warum ich?",
      "Ich suche",
      "Kontakt",
    ],
    heroTitle: "Junior QA Engineer",
    heroSub: "Präzision · Zuverlässigkeit · Zukunft",

    aboutTitle: "Über mich",
    aboutText:
      "Ich bin ein strukturierter Junior QA mit starkem Fokus auf Testplanung, Bug-Analyse und saubere Dokumentation. Neben klassischem QA interessiere ich mich aktiv für Künstliche Intelligenz, Automatisierung und moderne IT-Systeme. Ich lerne ständig Neues, arbeite verantwortungsbewusst und denke analytisch. Außerdem lege ich großen Wert auf einen gesunden Lebensstil – Sport, Disziplin und mentale Stärke gehören für mich dazu. Mein klares Ziel ist eine professionelle IT-Ausbildung und langfristig eine Karriere im Tech-Bereich.",

    hobbiesTitle: "Hobbys & Interessen",
    hobbies: [
      "🏋️‍♂️ Fitness",
      "🧠 Künstliche Intelligenz",
      "💻 IT & Programmieren",
      "🎮 Gaming",
      "📈 Persönlichkeitsentwicklung",
      "🎧 Tech & Podcasts",
    ],

    experience: "Erfahrung",
    systems: "Systeme & Tools",
    projects: "Projekte",
    contact: "Kontakt",
    contactSub: "Schreib mir direkt per E-Mail",

    whatIDoTitle: "Was ich mache",
    whatIDo: [
      "✅ Web UI Testing",
      "✅ API Testing",
      "✅ Regression Testing",
      "✅ Bug Reports",
      "✅ Test Cases",
      "✅ Exploratory Testing",
    ],

    roadmapTitle: "Lern-Roadmap",
    roadmap: [
      ["✅ QA Basics", "Fertig"],
      ["✅ API Testing", "Fertig"],
      ["🔄 Automation (Playwright)", "In Arbeit"],
      ["🔜 C# / .NET", "Geplant"],
      ["🔜 CI/CD", "Geplant"],
    ],

    softSkillsTitle: "Soft Skills",
    softSkills: [
      "🧠 Analytisches Denken",
      "🗣 Kommunikation",
      "📋 Verantwortung",
      "⚡️ Schnelles Lernen",
      "🤝 Teamarbeit",
    ],

    whyMeTitle: "Warum ich?",
    whyMe: [
      "⚡️ Ich lerne extrem schnell",
      "🧹 Ich liebe Struktur & Ordnung",
      "💪 Ich bin diszipliniert & ausdauernd",
      "🔍 Starkes Auge fürs Detail",
      "🧪 Ich finde gerne Edge Cases",
      "📋 Klare Testfälle & saubere Reports",
      "🤝 Teamfähig und zuverlässig",
      "🚀 Ich übernehme Verantwortung",
      "📈 Ich verbessere Prozesse, nicht nur Tests",
    ],

    statsTitle: "QA Statistiken",
    stats: [
      ["🐞", "250+ Bugs gefunden"],
      ["✅", "1000+ Testfälle"],
      ["🚀", "5 Reale Projekte"],
      ["⏱️", "1+ Jahr Praxis"],
    ],

    lookingForTitle: "Ich suche",
    lookingFor: [
      ["🎯", "IT Ausbildung", "Fachinformatiker"],
      ["📍", "Ort", "Berlin · Remote"],
      ["⏱️", "Zeit", "Vollzeit"],
      ["💬", "Sprachen", "Deutsch · Englisch · Ukrainisch · Russisch"],
    ],
  },

  en: {
    nav: [
      "Home",
      "About",
      "Experience",
      "Systems",
      "Projects",
      "Soft Skills",
      "Why Me?",
      "Looking For",
      "Contact",
    ],
    heroTitle: "Junior QA Engineer",
    heroSub: "Precision · Reliability · Future",

    aboutTitle: "About Me",
    aboutText:
      "I am a structured Junior QA with a strong focus on test planning, bug analysis, and clean documentation. Beyond classical QA, I am deeply interested in Artificial Intelligence, automation, and modern IT systems. I constantly improve my skills, work responsibly, and think analytically. I also live a healthy lifestyle — fitness, discipline, and mental strength are part of my daily routine. My clear goal is a professional IT apprenticeship and a long-term career in tech.",

    hobbiesTitle: "Hobbies & Interests",
    hobbies: [
      "🏋️‍♂️ Fitness",
      "🧠 Artificial Intelligence",
      "💻 IT & Programming",
      "🎮 Gaming",
      "📈 Self Development",
      "🎧 Tech & Podcasts",
    ],

    experience: "Experience",
    systems: "Systems & Tools",
    projects: "Projects",
    contact: "Contact",
    contactSub: "Contact me directly via email",

    whatIDoTitle: "What I Do",
    whatIDo: [
      "✅ Web UI Testing",
      "✅ API Testing",
      "✅ Regression Testing",
      "✅ Bug Reports",
      "✅ Test Cases",
      "✅ Exploratory Testing",
    ],

    roadmapTitle: "Learning Roadmap",
    roadmap: [
      ["✅ QA Basics", "Done"],
      ["✅ API Testing", "Done"],
      ["🔄 Automation (Playwright)", "In Progress"],
      ["🔜 C# / .NET", "Planned"],
      ["🔜 CI/CD", "Planned"],
    ],

    softSkillsTitle: "Soft Skills",
    softSkills: [
      "🧠 Analytical Thinking",
      "🗣 Communication",
      "📋 Responsibility",
      "⚡️ Fast Learning",
      "🤝 Teamwork",
    ],

    whyMeTitle: "Why Me?",
    whyMe: [
      "⚡️ I learn extremely fast",
      "🧹 I love clean structure & order",
      "💪 I am persistent and disciplined",
      "🔍 Strong attention to detail",
      "🧪 I enjoy finding edge cases",
      "📋 I write clear test cases & reports",
      "🤝 Easy to work with in a team",
      "🚀 I take ownership of tasks",
      "📈 I improve processes, not just test",
    ],

    statsTitle: "QA Stats",
    stats: [
      ["🐞", "250+ Bugs Found"],
      ["✅", "1000+ Test Cases"],
      ["🚀", "5 Real Projects"],
      ["⏱️", "1+ Year Practice"],
    ],

    lookingForTitle: "Currently Looking For",
    lookingFor: [
      ["🎯", "IT Apprenticeship", "Fachinformatiker"],
      ["📍", "Location", "Berlin · Remote"],
      ["⏱️", "Schedule", "Full-Time"],
      ["💬", "Languages", "German · English · Ukrainian · Russian"],
    ],
  },
} as const;

const NAV_IDS = [
  "hero",
  "about",
  "experience",
  "systems",
  "projects",
  "softskills",
  "whyme",
  "lookingfor",
  "contact",
] as const;

const NAV_LINKS = NAV_IDS.map((id) => `#${id}`) as readonly string[];

export default function ArseniiUltra() {
  const [dark, setDark] = useState(true);
  const [lang, setLang] = useState<"de" | "en">("de");
  const [langOpen, setLangOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeId, setActiveId] = useState<(typeof NAV_IDS)[number]>("hero");

  const experienceItems: Array<[string, string, string]> = [
    ["2025 — now", "ONLY & SONS", lang === "de" ? "Verkauf" : "Sales"],
    [
      "2025",
      "Lokschuppen",
      lang === "de" ? "Runner & Barkeeper" : "Runner & Bartender",
    ],
    ["2024–2025", "Matrix Club", lang === "de" ? "Runner" : "Runner"],
    ["2024–2025", "OSZ Berlin", "MSA"],
    ["2023–2024", "GoIT Kyiv", lang === "de" ? "QA Tester" : "QA Tester"],
    ["2023", "Coffee Fellows", lang === "de" ? "Barista" : "Barista"],
  ];

  const observerRef = useRef<IntersectionObserver | null>(null);
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const offset = 110; // высота fixed header
    const y = el.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  useEffect(() => {
    const browserLang = navigator.language?.slice(0, 2);
    if (browserLang === "de" || browserLang === "en") setLang(browserLang);
  }, []);

  // Close language menu on outside click (no refs, robust for desktop + mobile)
  useEffect(() => {
    const handler = (e: MouseEvent | TouchEvent) => {
      if (!langOpen) return;
      const target = e.target as Element | null;
      if (!target) return;

      // Any click inside a language switch wrapper should not close it
      if (target.closest("[data-lang-menu]")) return;

      setLangOpen(false);
    };

    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [langOpen]);

  // Smooth scroll
  useEffect(() => {
    const el = document.documentElement;
    const prev = el.style.scrollBehavior;
    el.style.scrollBehavior = "smooth";
    return () => {
      el.style.scrollBehavior = prev;
    };
  }, []);

  // Active section highlight
  useEffect(() => {
    const sections = NAV_IDS.map((id) => document.getElementById(id)).filter(
      Boolean
    ) as HTMLElement[];

    if (!sections.length) return;

    observerRef.current?.disconnect();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0)
          );

        if (visible[0]?.target?.id) {
          const id = visible[0].target.id as (typeof NAV_IDS)[number];
          setActiveId(id);
        }
      },
      {
        root: null,
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0.01, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((s) => observerRef.current?.observe(s));

    return () => observerRef.current?.disconnect();
  }, []);

  // Close mobile menu when switching to desktop layout
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = () => {
      if (mq.matches) setMobileOpen(false);
    };
    onChange();
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  const t = i18n[lang];

  const SectionDivider = () => (
    <div
      className={`border-t max-w-5xl mx-auto my-24 ${
        dark ? "border-white/10" : "border-black/10"
      }`}
    />
  );

  const projects = useMemo(
    () => [
      {
        title: "QA Testing — Web & API",
        desc: "Manual & API testing with Postman and structured bug analysis.",
      },
      {
        title: "TeamLead Project",
        desc: "Test cases, reporting and documentation in team workflows.",
      },
      {
        title: "HTML Experiments",
        desc: "UI structure and first web workflows.",
      },
    ],
    []
  );

  const systemCards: Array<[string, string]> = [
    ["🪟", "Windows 10/11"],
    ["🍎", "macOS"],
    ["🤖", "Android"],
    ["📱", "iOS"],
    ["🛠", "Postman · Jira · GitHub"],
    ["💻", "VS Code"],
  ];

  const chipClass = dark
    ? "bg-white/5 border border-white/10"
    : "bg-[#f3e8d8] border border-black/10";

  const navItemClass = (id: string) =>
    `transition-all px-2 py-1 rounded-full ${
      activeId === id
        ? dark
          ? "bg-white/15 font-semibold scale-105"
          : "bg-black/10 font-semibold scale-105"
        : "hover:-translate-y-1 hover:scale-105 hover:font-semibold"
    }`;

  return (
    <div
      className={dark ? "min-h-screen text-white" : "min-h-screen text-black"}
    >
      {/* 🍎 Apple-style Living Background */}
      <div
        className={`fixed inset-0 -z-10 transition-all duration-1000 ${
          dark
            ? "bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.18),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(99,102,241,0.18),transparent_40%),linear-gradient(135deg,#020617,#0f172a,#1e293b)]"
            : "bg-[radial-gradient(circle_at_20%_20%,rgba(253,186,116,0.25),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(251,207,232,0.25),transparent_40%),linear-gradient(135deg,#f5efe6,#efe5d8,#e7d7c1)]"
        } animate-[pulse_12s_ease-in-out_infinite]`}
      />

      {/* NAV */}
      {/* NAV */}
      <header
        className={`fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-40
  w-fit md:w-[94vw] lg:w-fit

  max-w-[94vw]
  px-4 py-2 md:px-6 md:py-3
  rounded-full backdrop-blur-xl border shadow-2xl transition
  ${dark ? "bg-white/10 border-white/20" : "bg-white/50 border-black/20"}`}
      >
        {/* DESKTOP ROW */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6 whitespace-nowrap">
          {/* LINKS */}
          <nav className="flex flex-nowrap items-center gap-4 lg:gap-6 whitespace-nowrap">
            {t.nav.map((label, i) => {
              const id = NAV_IDS[i];
              return (
                <a
                  key={label}
                  href={NAV_LINKS[i]}
                  className={`${navItemClass(id)} shrink-0`}
                >
                  {label}
                </a>
              );
            })}
          </nav>

          {/* DESKTOP CONTROLS */}
          <div className="flex items-center gap-2">
            {/* LANG (desktop) */}
            <div className="relative" data-lang-menu>
              <button
                onClick={() => setLangOpen((v) => !v)}
                aria-expanded={langOpen}
                className={`px-3 py-1 rounded-full border backdrop-blur-xl text-sm leading-none ${
                  dark
                    ? "bg-white/10 text-white border-white/20"
                    : "bg-white text-black border-black/20"
                }`}
              >
                {lang.toUpperCase()} ▾
              </button>

              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className={`absolute right-0 mt-3 rounded-xl overflow-hidden border backdrop-blur-xl ${
                      dark
                        ? "bg-[#0f172a]/90 border-white/20"
                        : "bg-white/90 border-black/20"
                    }`}
                  >
                    {(["de", "en"] as const).map((code) => (
                      <button
                        key={code}
                        onClick={() => {
                          setLang(code);
                          setLangOpen(false);
                        }}
                        className={`block w-full px-4 py-2 text-sm font-semibold ${
                          dark ? "hover:bg-white/10" : "hover:bg-black/5"
                        }`}
                      >
                        {code.toUpperCase()}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* THEME (desktop) */}
            <button
              onClick={() => setDark((v) => !v)}
              className={`px-3 py-1 rounded-full text-sm leading-none ${
                dark ? "bg-white/10" : "bg-black/10"
              }`}
            >
              {dark ? "Dark" : "Light"}
            </button>
          </div>
        </div>

        {/* MOBILE ROW */}
        <div className="flex md:hidden items-center justify-end gap-2">
          {/* LANG (mobile) */}
          <div className="relative" data-lang-menu>
            <button
              onClick={() => setLangOpen((v) => !v)}
              aria-expanded={langOpen}
              className={`px-2.5 py-1 rounded-full border text-xs font-semibold backdrop-blur-xl ${
                dark
                  ? "bg-white/10 text-white border-white/20"
                  : "bg-white text-black border-black/20"
              }`}
            >
              {lang.toUpperCase()} ▾
            </button>

            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className={`absolute right-0 mt-2 rounded-xl overflow-hidden border backdrop-blur-xl ${
                    dark
                      ? "bg-[#0f172a]/95 border-white/20"
                      : "bg-white/95 border-black/20"
                  }`}
                >
                  {(["de", "en"] as const).map((code) => (
                    <button
                      key={code}
                      onClick={() => {
                        setLang(code);
                        setLangOpen(false);
                      }}
                      className={`block w-full px-4 py-2 text-sm font-semibold ${
                        dark ? "hover:bg-white/10" : "hover:bg-black/5"
                      }`}
                    >
                      {code.toUpperCase()}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* THEME (mobile) */}
          <button
            onClick={() => setDark((v) => !v)}
            className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
              dark ? "bg-white/10" : "bg-black/10"
            }`}
          >
            {dark ? "Dark" : "Light"}
          </button>

          {/* HAMBURGER */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            className={`ml-1 p-2 rounded-full border backdrop-blur-xl transition ${
              dark
                ? "bg-white/10 border-white/20 hover:bg-white/15"
                : "bg-white/60 border-black/20 hover:bg-white"
            }`}
          >
            <span className="block w-5 h-[2px] bg-current mb-1" />
            <span className="block w-5 h-[2px] bg-current mb-1" />
            <span className="block w-5 h-[2px] bg-current" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 md:hidden"
          >
            <div
              onClick={() => setMobileOpen(false)}
              className={`absolute inset-0 ${
                dark ? "bg-black/40" : "bg-black/20"
              }`}
            />

            <motion.nav
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className={`absolute top-24 left-1/2 -translate-x-1/2 w-[92vw] max-w-md rounded-2xl border backdrop-blur-2xl shadow-2xl p-3 ${
                dark
                  ? "bg-[#0b1220]/90 border-white/15"
                  : "bg-white/85 border-black/10"
              }`}
            >
              <div className="space-y-1">
                {t.nav.map((label, i) => {
                  const id = NAV_IDS[i];
                  const isActive = activeId === id;
                  return (
                    <button
                      key={label}
                      onClick={() => {
                        scrollToSection(id);
                        setMobileOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-3 rounded-xl transition ${
                        isActive
                          ? dark
                            ? "bg-white/10 font-semibold"
                            : "bg-black/5 font-semibold"
                          : dark
                          ? "hover:bg-white/5"
                          : "hover:bg-black/5"
                      }`}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO */}
      <section
        id="hero"
        className="min-h-[90vh] flex flex-col items-center justify-center text-center"
      >
        <div className="mb-10 flex justify-center">
          <div
            className={`relative rounded-full p-[5px] ${
              dark
                ? "bg-gradient-to-br from-cyan-400/60 via-indigo-500/50 to-white/10"
                : "bg-gradient-to-br from-orange-300/70 via-pink-300/60 to-white/60"
            }`}
          >
            {/* мягкое свечение */}
            <div
              className={`absolute -inset-3 rounded-full blur-2xl ${
                dark ? "bg-cyan-400/20" : "bg-pink-300/25"
              }`}
            />

            {/* внутреннее кольцо */}
            <div
              className={`relative rounded-full p-[4px] ${
                dark ? "bg-slate-950/80" : "bg-white/80"
              }`}
            >
              <img
                src="/me.jpg"
                alt="Arsenii Mitchenko"
                className={`relative w-44 h-44 md:w-52 md:h-52 rounded-full object-cover shadow-2xl ${
                  dark
                    ? "brightness-110 contrast-110 saturate-110"
                    : "contrast-105"
                }`}
              />
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight">
            Arsenii Mitchenko
          </h1>
          <p className="mt-6 text-xl opacity-80">
            {t.heroTitle} · {t.heroSub}
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <a
              href="#projects"
              className={`px-6 py-3 rounded-full font-semibold hover:scale-110 transition ${
                dark
                  ? "bg-gradient-to-r from-cyan-400 to-indigo-500 text-black"
                  : "bg-gradient-to-r from-[#FFCF9F] to-[#F9AFAE] text-black shadow-lg"
              }`}
            >
              {t.projects}
            </a>
            <a
              href="#contact"
              className={`px-6 py-3 rounded-full font-semibold hover:scale-110 transition ${
                dark
                  ? "bg-slate-700 text-white"
                  : "bg-gradient-to-r from-[#FFCF9F] to-[#F9AFAE] text-black shadow-lg"
              }`}
            >
              Email
            </a>
          </div>
        </motion.div>
      </section>

      <SectionDivider />

      {/* ABOUT */}
      <section id="about" className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold">{t.aboutTitle}</h2>
        <p className="mt-6 opacity-80">{t.aboutText}</p>
      </section>

      <SectionDivider />

      {/* HOBBIES */}
      <section id="hobbies" className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold">{t.hobbiesTitle}</h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.hobbies.map((h) => (
            <div key={h} className={`p-4 rounded-xl ${chipClass}`}>
              {h}
            </div>
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* WHAT I DO */}
      <section
        id="what i do"
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <h2 className="text-4xl font-bold">{t.whatIDoTitle}</h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.whatIDo.map((item) => (
            <div key={item} className={`p-4 rounded-xl ${chipClass}`}>
              {item}
            </div>
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* ROADMAP */}
      <section id="roadmap" className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold">{t.roadmapTitle}</h2>
        <div className="mt-8 space-y-4">
          {t.roadmap.map(([a, b]) => (
            <div
              key={a}
              className={`flex justify-between p-4 rounded-xl ${chipClass}`}
            >
              <span>{a}</span>
              <span className="opacity-70">{b}</span>
            </div>
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* STATS */}
      <section id="stats" className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold">{t.statsTitle}</h2>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {t.stats.map(([icon, txt]) => (
            <div
              key={txt}
              className={`p-6 rounded-xl text-center ${chipClass}`}
            >
              {icon} {txt}
            </div>
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* EXPERIENCE */}
      <section id="experience" className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold">{t.experience}</h2>
        <div className="mt-10 grid gap-6">
          {experienceItems.map(([year, company, role]) => (
            <div
              key={`${year}-${company}`}
              className={`grid grid-cols-1 md:grid-cols-[200px_1fr_180px] items-center gap-4 p-5 rounded-xl ${chipClass}`}
            >
              <div className="text-sm opacity-70">{year}</div>
              <div className="font-semibold">{company}</div>
              <div className="md:text-right opacity-80">{role}</div>
            </div>
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* SYSTEMS */}

      <section id="systems" className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold">{t.systems}</h2>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {systemCards.map(([icon, txt]) => (
            <div
              key={txt}
              className={`p-6 rounded-xl text-center ${chipClass}`}
            >
              {icon} {txt}
            </div>
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* PROJECTS */}
      <section id="projects" className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold">{t.projects}</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.title} className={`p-6 rounded-xl ${chipClass}`}>
              <h3 className="font-semibold">{p.title}</h3>
              <p className="mt-2 opacity-80">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* SOFT SKILLS */}
      <section id="softskills" className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold">{t.softSkillsTitle}</h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.softSkills.map((s) => (
            <div key={s} className={`p-4 rounded-xl ${chipClass}`}>
              {s}
            </div>
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* WHY ME */}
      <section id="whyme" className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold">{t.whyMeTitle}</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.whyMe.map((w) => (
            <div key={w} className={`p-5 rounded-xl ${chipClass}`}>
              {w}
            </div>
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* LOOKING FOR */}
      <section id="lookingfor" className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold">{t.lookingForTitle}</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.lookingFor.map(([icon, label, value]) => (
            <div
              key={`${label}-${value}`}
              className={`p-5 rounded-xl flex items-start justify-between gap-4 ${chipClass}`}
            >
              <div className="text-2xl">{icon}</div>
              <div className="flex-1">
                <div className="font-semibold">{label}</div>
                <div className="opacity-80">{value}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* CONTACT */}
      <section id="contact" className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold">{t.contact}</h2>
        <p className="mt-4 opacity-80">{t.contactSub}</p>
        <a
          href="mailto:mitars.2005@gmail.com"
          className={`inline-block mt-6 px-8 py-4 rounded-full font-semibold hover:scale-110 transition ${
            dark
              ? "bg-gradient-to-r from-cyan-400 to-indigo-500 text-black"
              : "bg-gradient-to-r from-[#FFCF9F] to-[#F9AFAE] text-black shadow-lg"
          }`}
        >
          Email
        </a>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-16 opacity-70">
        <div>© {new Date().getFullYear()} Arsenii</div>
        <div className="mt-3 flex items-center justify-center gap-2">
          🇺🇦 <span>Glory to Ukraine!</span>
        </div>
      </footer>
    </div>
  );
}
