import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const showcaseItems = [
  {
    image: "/manus-storage/product_book_spiritual_39615334.png",
    name: "心靈繪本",
    subtitle: "以溫暖的插畫與文字，陪伴你走過內心的風景",
    align: "left" as const,
  },
  {
    image: "/manus-storage/product_autobiography_26ab117f.png",
    name: "個人自傳書",
    subtitle: "一本屬於你的生命之書，記錄你的故事與成長",
    align: "right" as const,
  },
  {
    image: "/manus-storage/product_oracle_cards_417dfb1d.png",
    name: "宇宙環星神諭卡",
    subtitle: "80 張原創卡牌，結合東西方神諭智慧",
    align: "left" as const,
  },
  {
    image: "/manus-storage/product_qimen_cards_f10ee64f.png",
    name: "奇門遁甲五氣秘笈",
    subtitle: "結合古代天文地理與陰陽五行的占卜工具",
    align: "right" as const,
  },
];

export default function ProductShowcase() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.06_0.02_270)] via-[oklch(0.07_0.025_272)] to-[oklch(0.06_0.02_270)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 space-y-24 md:space-y-40">
        {showcaseItems.map((item, i) => (
          <ShowcaseCard key={item.name} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}

function ShowcaseCard({
  item,
  index,
}: {
  item: (typeof showcaseItems)[0];
  index: number;
}) {
  const { ref, isVisible } = useScrollReveal(0.15);
  const isLeft = item.align === "left";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay: 0.1 }}
      className={`flex flex-col ${isLeft ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-10 lg:gap-20`}
    >
      {/* Image */}
      <div className="lg:w-3/5 relative group">
        <div className="relative overflow-hidden rounded-sm">
          <motion.img
            src={item.image}
            alt={item.name}
            className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
            style={{
              boxShadow: "0 20px 60px oklch(0 0 0 / 0.4)",
            }}
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.06_0.02_270/0.5)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
        {/* Decorative corner */}
        <div
          className={`absolute -bottom-3 ${isLeft ? "-right-3" : "-left-3"} w-24 h-24 border-b border-r border-[oklch(0.75_0.12_85/0.2)]`}
          style={{
            borderRight: isLeft ? "1px solid oklch(0.75 0.12 85 / 0.2)" : "none",
            borderLeft: isLeft ? "none" : "1px solid oklch(0.75 0.12 85 / 0.2)",
          }}
        />
      </div>

      {/* Text */}
      <div className={`lg:w-2/5 ${isLeft ? "lg:text-left" : "lg:text-right"}`}>
        <span
          className="text-xs tracking-[0.5em] uppercase block mb-4"
          style={{ fontFamily: "'Space Mono', monospace", color: "oklch(0.4 0.02 270)" }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3
          className="text-3xl md:text-4xl lg:text-5xl tracking-[0.03em] mb-6"
          style={{
            fontFamily: "'Space Mono', monospace",
            fontWeight: 700,
            color: "oklch(0.92 0.01 80)",
          }}
        >
          {item.name}
        </h3>
        <p
          className="text-lg leading-relaxed"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            color: "oklch(0.6 0.01 80)",
            fontSize: "1.15rem",
            lineHeight: 1.8,
          }}
        >
          {item.subtitle}
        </p>

        {/* CTA */}
        <button
          className="mt-8 group/btn flex items-center gap-3"
          style={{ marginLeft: isLeft ? 0 : "auto" }}
          onClick={() => {
            const el = document.querySelector("#contact");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <span
            className="text-xs tracking-[0.3em] uppercase group-hover/btn:text-[oklch(0.75_0.12_85)] transition-colors"
            style={{ fontFamily: "'Space Mono', monospace", color: "oklch(0.55 0.02 270)" }}
          >
            了解更多
          </span>
          <span className="w-8 h-[1px] bg-[oklch(0.75_0.12_85/0.4)] group-hover/btn:w-14 transition-all duration-500" />
        </button>
      </div>
    </motion.div>
  );
}
