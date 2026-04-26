import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Footer() {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <footer className="relative py-16 overflow-hidden" ref={ref}>
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[oklch(0.25_0.03_275)] to-transparent" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-6xl mx-auto px-6"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & brand */}
          <div className="flex items-center gap-3">
            <img
              src="/manus-storage/logo_ingridcat_ebb9230c.png"
              alt="IngridCat"
              className="w-8 h-8 object-contain"
            />
            <span
              className="text-sm tracking-[0.3em] uppercase"
              style={{ fontFamily: "'Space Mono', monospace", color: "oklch(0.5 0.02 270)" }}
            >
              IngridCat
            </span>
          </div>

          {/* Copyright */}
          <p
            className="text-xs tracking-[0.15em]"
            style={{ fontFamily: "'Space Mono', monospace", color: "oklch(0.35 0.02 270)" }}
          >
            &copy; {new Date().getFullYear()} IngridCat. All rights reserved.
          </p>

          {/* Back to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-xs tracking-[0.3em] uppercase hover:text-[oklch(0.75_0.12_85)] transition-colors"
            style={{ fontFamily: "'Space Mono', monospace", color: "oklch(0.4 0.02 270)" }}
          >
            Back to top ↑
          </button>
        </div>
      </motion.div>
    </footer>
  );
}
