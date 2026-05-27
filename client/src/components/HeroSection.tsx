import { motion } from "framer-motion";

const storageBase = `${import.meta.env.BASE_URL}manus-storage`;

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${storageBase}/hero_bg_2a0584d3.png')`,
          filter: "brightness(0.35) saturate(0.8)",
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.06_0.02_270/0.6)] via-transparent to-[oklch(0.06_0.02_270)]" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-8"
        >
          <img
            src={`${storageBase}/logo_ingridcat_ebb9230c.png`}
            alt="IngridCat Logo"
            className="w-32 h-32 md:w-44 md:h-44 mx-auto object-contain drop-shadow-[0_0_40px_oklch(0.75_0.12_85/0.3)]"
          />
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-[5.5rem] leading-tight tracking-[0.08em] uppercase mb-6"
          style={{
            fontFamily: "'Space Mono', monospace",
            fontWeight: 700,
            color: "oklch(0.92 0.01 80)",
            textShadow: "0 0 60px oklch(0.75 0.12 85 / 0.2)",
          }}
        >
          IngridCat
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-lg md:text-xl tracking-[0.2em] uppercase mb-4"
          style={{
            fontFamily: "'Space Mono', monospace",
            color: "oklch(0.75 0.12 85)",
          }}
        >
          在星空下找回屬於自己的未來感
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="max-w-2xl mx-auto text-base md:text-lg leading-relaxed"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            color: "oklch(0.7 0.01 80)",
            fontWeight: 300,
            fontSize: "1.25rem",
            letterSpacing: "0.05em",
          }}
        >
          療癒的故事、書寫的方法與具有啟發性的卡牌
          <br />
          溫柔而實用的陪伴工具
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span
              className="text-xs tracking-[0.3em] uppercase"
              style={{ fontFamily: "'Space Mono', monospace", color: "oklch(0.5 0.02 270)" }}
            >
              Scroll
            </span>
            <div className="w-[1px] h-8 bg-gradient-to-b from-[oklch(0.75_0.12_85/0.5)] to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
