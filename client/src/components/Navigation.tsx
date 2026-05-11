import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";

type NavItem = {
  label: string;
  href: string;
  isRoute?: boolean;
};

const navItems: NavItem[] = [
  { label: "首頁", href: "#hero" },
  { label: "品牌故事", href: "#story" },
  { label: "商品", href: "/products", isRoute: true },
  { label: "影片", href: "#videos" },
  { label: "關於", href: "#about" },
  { label: "聯繫", href: "#contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (item: NavItem) => {
    setMenuOpen(false);
    if (item.isRoute) {
      setLocation(item.href);
    } else {
      const el = document.querySelector(item.href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[oklch(0.06_0.02_270/0.85)] backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button
              onClick={() => scrollTo("#hero")}
              className="flex items-center gap-3 group"
            >
              <img
                src="/manus-storage/logo_ingridcat_ebb9230c.png"
                alt="IngridCat"
                className="w-10 h-10 object-contain"
              />
              <span
                className="font-mono text-lg tracking-[0.3em] uppercase text-gold"
                style={{ fontFamily: "'Space Mono', monospace", color: "oklch(0.75 0.12 85)" }}
              >
                IngridCat
              </span>
            </button>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNav(item)}
                  className="px-4 py-2 text-sm tracking-[0.15em] uppercase transition-colors duration-300 hover:text-[oklch(0.75_0.12_85)] text-[oklch(0.7_0.01_80)]"
                  style={{ fontFamily: "'Space Mono', monospace" }}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="block w-6 h-[1.5px] bg-[oklch(0.75_0.12_85)]"
              />
              <motion.span
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block w-6 h-[1.5px] bg-[oklch(0.75_0.12_85)]"
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="block w-6 h-[1.5px] bg-[oklch(0.75_0.12_85)]"
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[oklch(0.06_0.02_270/0.95)] backdrop-blur-2xl flex items-center justify-center"
          >
            <div className="flex flex-col items-center gap-8">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => handleNav(item)}
                  className="text-2xl tracking-[0.3em] uppercase text-[oklch(0.85_0.01_80)] hover:text-[oklch(0.75_0.12_85)] transition-colors"
                  style={{ fontFamily: "'Space Mono', monospace" }}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
