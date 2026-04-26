import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function StorySection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal(0.2);
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal(0.15);
  const { ref: imageRef, isVisible: imageVisible } = useScrollReveal(0.15);

  return (
    <section
      id="story"
      className="relative py-32 md:py-44 overflow-hidden"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.06_0.02_270)] via-[oklch(0.08_0.03_275)] to-[oklch(0.06_0.02_270)]" />

      {/* Decorative line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-24 bg-gradient-to-b from-transparent via-[oklch(0.75_0.12_85/0.3)] to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section label */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={titleVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span
            className="text-xs tracking-[0.5em] uppercase block mb-4"
            style={{ fontFamily: "'Space Mono', monospace", color: "oklch(0.75 0.12 85)" }}
          >
            Our Story
          </span>
          <h2
            className="text-4xl md:text-6xl lg:text-7xl tracking-[0.05em] uppercase"
            style={{
              fontFamily: "'Space Mono', monospace",
              fontWeight: 700,
              color: "oklch(0.92 0.01 80)",
            }}
          >
            品牌故事
          </h2>
        </motion.div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Text content */}
          <motion.div
            ref={contentRef}
            initial={{ opacity: 0, x: -30 }}
            animate={contentVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-6 space-y-8"
          >
            <p
              className="text-xl md:text-2xl leading-relaxed"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: "oklch(0.85 0.01 80)",
                fontWeight: 400,
                lineHeight: 1.9,
              }}
            >
              這個品牌，誕生於一段從害怕面對自己到願意誠實生活的旅程。
            </p>

            <p
              className="text-base md:text-lg leading-relaxed"
              style={{
                color: "oklch(0.65 0.01 80)",
                lineHeight: 2,
              }}
            >
              創辦人曾在恐懼、逃避與迷惘裡打轉，直到學會停下來，接住自己的情緒，透過反思看見內在真正的渴望，也在每一次跌撞後練習感謝與成長。
            </p>

            <p
              className="text-base md:text-lg leading-relaxed"
              style={{
                color: "oklch(0.65 0.01 80)",
                lineHeight: 2,
              }}
            >
              因此，我們把療癒的故事、書寫的方法與具有啟發性的卡牌，整理成溫柔而實用的陪伴工具，幫助每一個正在失去方向的人，不急著找到標準答案，而是一步一步找回屬於自己的未來感。
            </p>

            {/* Quote */}
            <div className="border-l-2 border-[oklch(0.75_0.12_85/0.4)] pl-6 mt-10">
              <p
                className="text-lg md:text-xl italic"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: "oklch(0.75 0.12 85)",
                  fontWeight: 300,
                  lineHeight: 1.8,
                }}
              >
                「不急著找到標準答案，而是一步一步找回屬於自己的未來感。」
              </p>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, x: 30 }}
            animate={imageVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="lg:col-span-6"
          >
            <div className="relative">
              <div className="aspect-[16/10] rounded-sm overflow-hidden">
                <img
                  src="/manus-storage/founder_portrait_fc550504.png"
                  alt="IngridCat 品牌故事"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative frame */}
              <div className="absolute -inset-3 border border-[oklch(0.75_0.12_85/0.15)] rounded-sm pointer-events-none" />
              {/* Glow effect */}
              <div className="absolute -inset-6 bg-[oklch(0.75_0.12_85/0.03)] blur-3xl rounded-full pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
