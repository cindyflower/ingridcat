import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { toast } from "sonner";

const storageBase = `${import.meta.env.BASE_URL}manus-storage`;

const footerSocials = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/ingridcatflower/",
    available: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "Podcasts",
    href: "https://podcasts.apple.com/tw/podcast/resonance-of-star-and-qi/id1876174564",
    available: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="M12 1a9 9 0 0 0-9 9c0 3.1 1.6 5.8 4 7.4V22l3-2h4l3 2v-4.6c2.4-1.6 4-4.3 4-7.4a9 9 0 0 0-9-9z" />
        <circle cx="12" cy="10" r="3" />
        <path d="M12 13v4" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "#",
    available: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    name: "LINE",
    href: "#",
    available: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2C6.48 2 2 5.82 2 10.5c0 3.26 2.14 6.1 5.32 7.58-.07.53-.46 1.97-.53 2.27-.09.38.14.37.3.27.12-.08 1.94-1.32 2.73-1.86.7.1 1.43.16 2.18.16 5.52 0 10-3.82 10-8.5S17.52 2 12 2zm-2.7 10.7H7.5a.6.6 0 0 1-.6-.6V8.6a.6.6 0 1 1 1.2 0v3h1.2a.6.6 0 1 1 0 1.2h-.7zm1.8-.6a.6.6 0 1 1-1.2 0V8.6a.6.6 0 1 1 1.2 0v3.5zm4.2 0a.6.6 0 0 1-.48.59.6.6 0 0 1-.6-.3L12.9 10v2.1a.6.6 0 1 1-1.2 0V8.6a.6.6 0 0 1 .48-.59.6.6 0 0 1 .6.3l1.32 2.3V8.6a.6.6 0 1 1 1.2 0v3.5zm3-.6h-1.8a.6.6 0 0 1-.6-.6V8.6a.6.6 0 0 1 .6-.6h1.8a.6.6 0 1 1 0 1.2h-1.2v.7h1.2a.6.6 0 1 1 0 1.2h-1.2v.7h1.2a.6.6 0 1 1 0 1.2z" />
      </svg>
    ),
  },
];

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
              src={`${storageBase}/logo_ingridcat_ebb9230c.png`}
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

          {/* Social icons */}
          <div className="flex items-center gap-2">
            {footerSocials.map((social) =>
              social.available ? (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center rounded-full border transition-all duration-300 hover:border-[oklch(0.75_0.12_85)] hover:text-[oklch(0.75_0.12_85)] hover:bg-[oklch(0.75_0.12_85/0.08)]"
                  style={{
                    borderColor: "oklch(0.2 0.03 275)",
                    color: "oklch(0.45 0.02 270)",
                  }}
                  title={social.name}
                >
                  {social.icon}
                </a>
              ) : (
                <button
                  key={social.name}
                  onClick={() => toast("即將推出", { description: `${social.name} 正在建立中，敬請期待！` })}
                  className="w-8 h-8 flex items-center justify-center rounded-full border transition-all duration-300 opacity-35 hover:opacity-55"
                  style={{
                    borderColor: "oklch(0.18 0.03 275)",
                    color: "oklch(0.35 0.02 270)",
                  }}
                  title={`${social.name} — 即將推出`}
                >
                  {social.icon}
                </button>
              )
            )}
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
