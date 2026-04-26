import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const sections = [
  { id: "hero", label: "Home" },
  { id: "story", label: "Story" },
  { id: "products", label: "Products" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export default function SideNav() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { threshold: 0.3 }
    );

    for (const section of sections) {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="fixed right-6 top-1/2 -translate-y-1/2 z-30 hidden xl:flex flex-col items-end gap-4"
    >
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => scrollTo(section.id)}
          className="group flex items-center gap-3"
        >
          <span
            className={`text-[10px] tracking-[0.3em] uppercase transition-all duration-500 ${
              activeSection === section.id
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-2 group-hover:opacity-60 group-hover:translate-x-0"
            }`}
            style={{
              fontFamily: "'Space Mono', monospace",
              color: activeSection === section.id ? "oklch(0.75 0.12 85)" : "oklch(0.5 0.02 270)",
              writingMode: "horizontal-tb",
            }}
          >
            {section.label}
          </span>
          <span
            className={`block rounded-full transition-all duration-500 ${
              activeSection === section.id
                ? "w-3 h-3 bg-[oklch(0.75_0.12_85)]"
                : "w-1.5 h-1.5 bg-[oklch(0.35_0.02_270)] group-hover:bg-[oklch(0.55_0.02_270)]"
            }`}
          />
        </button>
      ))}
    </motion.div>
  );
}
