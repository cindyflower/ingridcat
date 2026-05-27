import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const storageBase = `${import.meta.env.BASE_URL}manus-storage`;

const values = [
  {
    icon: "✦",
    title: "療癒",
    titleEn: "Healing",
    desc: "接住每一個情緒，在溫柔中找到力量。",
  },
  {
    icon: "◈",
    title: "反思",
    titleEn: "Reflection",
    desc: "停下來看見內在真正的渴望與方向。",
  },
  {
    icon: "⟡",
    title: "成長",
    titleEn: "Growth",
    desc: "在每一次跌撞後練習感謝，持續前行。",
  },
  {
    icon: "☽",
    title: "陪伴",
    titleEn: "Companionship",
    desc: "不急著給答案，而是一步一步同行。",
  },
];

export default function AboutSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal(0.2);
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal(0.15);

  return (
    <section
      id="about"
      className="relative py-32 md:py-44 overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${storageBase}/about_bg_8ac37495.png')`,
          filter: "brightness(0.2) saturate(0.6)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.06_0.02_270)] via-[oklch(0.06_0.02_270/0.7)] to-[oklch(0.06_0.02_270)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={titleVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 text-right"
        >
          <span
            className="text-xs tracking-[0.5em] uppercase block mb-4"
            style={{ fontFamily: "'Space Mono', monospace", color: "oklch(0.72 0.12 185)" }}
          >
            About Us
          </span>
          <h2
            className="text-4xl md:text-6xl lg:text-7xl tracking-[0.05em] uppercase"
            style={{
              fontFamily: "'Space Mono', monospace",
              fontWeight: 700,
              color: "oklch(0.92 0.01 80)",
            }}
          >
            關於我們
          </h2>
        </motion.div>

        {/* Values grid */}
        <motion.div
          ref={contentRef}
          initial={{ opacity: 0 }}
          animate={contentVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[oklch(0.2_0.03_275/0.5)]"
        >
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={contentVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="group bg-[oklch(0.08_0.02_270/0.9)] backdrop-blur-sm p-10 md:p-14 hover:bg-[oklch(0.1_0.025_275/0.9)] transition-all duration-700"
            >
              {/* Icon */}
              <span
                className="text-3xl block mb-6 transition-transform duration-500 group-hover:scale-110"
                style={{ color: "oklch(0.75 0.12 85)" }}
              >
                {value.icon}
              </span>

              {/* Title */}
              <div className="flex items-baseline gap-4 mb-4">
                <h3
                  className="text-2xl md:text-3xl tracking-[0.05em]"
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontWeight: 700,
                    color: "oklch(0.92 0.01 80)",
                  }}
                >
                  {value.title}
                </h3>
                <span
                  className="text-xs tracking-[0.2em] uppercase"
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    color: "oklch(0.4 0.02 270)",
                  }}
                >
                  {value.titleEn}
                </span>
              </div>

              {/* Description */}
              <p
                className="text-base leading-relaxed"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: "oklch(0.6 0.01 80)",
                  fontSize: "1.1rem",
                  lineHeight: 1.8,
                }}
              >
                {value.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={contentVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <p
            className="text-xl md:text-2xl lg:text-3xl leading-relaxed max-w-3xl mx-auto"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: "oklch(0.8 0.01 80)",
              fontWeight: 300,
              lineHeight: 1.8,
            }}
          >
            我們相信，每個人的內在都藏著一片星空。
            <br />
            <span style={{ color: "oklch(0.75 0.12 85)" }}>IngridCat</span> 願做那盞引路的微光。
          </p>
        </motion.div>
      </div>
    </section>
  );
}
