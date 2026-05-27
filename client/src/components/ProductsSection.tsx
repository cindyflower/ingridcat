/**
 * Products Section - IngridCat
 * Design: Cosmic Mysticism — Active Theory style large text product list
 * Now with links to individual product detail pages
 */
import { motion, AnimatePresence } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";
import { Link } from "wouter";

const storageBase = `${import.meta.env.BASE_URL}manus-storage`;

const products = [
  {
    id: 1,
    slug: "spiritual-picture-book",
    name: "心靈繪本",
    nameEn: "Spiritual Picture Book",
    description:
      "以溫暖的插畫與文字，陪伴你走過內心的風景。每一頁都是一次與自己的對話，在故事中找到共鳴與力量。",
    image: `${storageBase}/product_book_spiritual_39615334.png`,
    tag: "療癒閱讀",
  },
  {
    id: 2,
    slug: "personal-autobiography",
    name: "個人自傳書",
    nameEn: "Personal Autobiography",
    description:
      "一本屬於你的生命之書。透過引導式書寫，記錄你的故事、情緒與成長，將人生的每個篇章化為珍貴的文字。",
    image: `${storageBase}/product_autobiography_26ab117f.png`,
    tag: "書寫療癒",
  },
  {
    id: 3,
    slug: "cosmic-oracle-cards",
    name: "宇宙環星神諭卡",
    nameEn: "Cosmic Oracle Cards",
    description:
      "80 張原創神諭卡牌，結合東西方的神諭智慧，代表宇宙要傳達的知識。宇宙環星下的靈魂低語，引導你聆聽內在的聲音。",
    image: `${storageBase}/product_oracle_cards_417dfb1d.png`,
    tag: "占卜工具",
  },
  {
    id: 4,
    slug: "qi-men-dun-jia-cards",
    name: "奇門遁甲五氣秘笈",
    nameEn: "Qi Men Dun Jia Cards",
    description:
      "結合東方古代天文、地理和陰陽五行與易經的底層邏輯，具有時間軸的元素。以古老智慧解讀當下，指引未來方向。",
    image: `${storageBase}/product_qimen_cards_f10ee64f.png`,
    tag: "占卜工具",
  },
];

export default function ProductsSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal(0.2);
  const [activeProduct, setActiveProduct] = useState<number | null>(null);

  return (
    <section
      id="products"
      className="relative py-32 md:py-44 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[oklch(0.06_0.02_270)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={titleVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6"
        >
          <div>
            <span
              className="text-xs tracking-[0.5em] uppercase block mb-4"
              style={{ fontFamily: "'Space Mono', monospace", color: "oklch(0.75 0.12 85)" }}
            >
              Products
            </span>
            <h2
              className="text-4xl md:text-6xl lg:text-7xl tracking-[0.05em] uppercase"
              style={{
                fontFamily: "'Space Mono', monospace",
                fontWeight: 700,
                color: "oklch(0.92 0.01 80)",
              }}
            >
              品牌商品
            </h2>
          </div>
          <p
            className="max-w-md text-sm leading-relaxed"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: "oklch(0.5 0.02 270)",
              fontSize: "1.05rem",
              lineHeight: 1.8,
            }}
          >
            每一件商品都是一個溫柔的陪伴工具，幫助你在迷惘中找到方向。
          </p>
        </motion.div>

        {/* Product List - Active Theory style large text list */}
        <div className="space-y-0">
          {products.map((product, index) => (
            <ProductItem
              key={product.id}
              product={product}
              index={index}
              isActive={activeProduct === product.id}
              onHover={() => setActiveProduct(product.id)}
              onLeave={() => setActiveProduct(null)}
            />
          ))}
        </div>
      </div>

      {/* Floating preview image */}
      <AnimatePresence>
        {activeProduct && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="hidden lg:block fixed top-1/2 right-12 -translate-y-1/2 w-[420px] pointer-events-none"
            style={{ zIndex: 30 }}
          >
            <div className="relative">
              <img
                src={products.find((p) => p.id === activeProduct)?.image}
                alt=""
                className="w-full rounded-sm shadow-2xl"
                style={{
                  boxShadow: "0 0 80px oklch(0.75 0.12 85 / 0.1), 0 25px 50px oklch(0 0 0 / 0.5)",
                }}
              />
              <div className="absolute inset-0 border border-[oklch(0.75_0.12_85/0.2)] rounded-sm" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function ProductItem({
  product,
  index,
  isActive,
  onHover,
  onLeave,
}: {
  product: (typeof products)[0];
  index: number;
  isActive: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="group border-t border-[oklch(0.2_0.03_275)] py-8 md:py-12 cursor-pointer transition-all duration-500"
    >
      <Link href={`/product/${product.slug}`} className="block">
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
          {/* Number */}
          <span
            className="text-xs tracking-[0.3em] w-12 shrink-0"
            style={{ fontFamily: "'Space Mono', monospace", color: "oklch(0.4 0.02 270)" }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>

          {/* Product name - large text */}
          <div className="flex-1">
            <h3
              className={`text-3xl md:text-5xl lg:text-6xl tracking-[0.03em] uppercase transition-all duration-500 ${
                isActive ? "translate-x-4" : ""
              }`}
              style={{
                fontFamily: "'Space Mono', monospace",
                fontWeight: 700,
                color: isActive ? "oklch(0.92 0.01 80)" : "oklch(0.45 0.02 270)",
                WebkitTextStroke: isActive ? "none" : "1px oklch(0.35 0.02 270)",
                WebkitTextFillColor: isActive ? "oklch(0.92 0.01 80)" : "transparent",
                transition: "all 0.5s ease",
              }}
            >
              {product.name}
            </h3>

            {/* Mobile image */}
            <div className="lg:hidden mt-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full max-w-sm rounded-sm"
              />
            </div>

            {/* Description - shows on hover/active */}
            <motion.div
              initial={false}
              animate={{
                height: isActive ? "auto" : 0,
                opacity: isActive ? 1 : 0,
              }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden"
            >
              <p
                className="mt-4 text-sm md:text-base max-w-xl leading-relaxed"
                style={{ color: "oklch(0.6 0.01 80)" }}
              >
                {product.description}
              </p>
              <span
                className="inline-flex items-center gap-2 mt-3 text-xs tracking-[0.2em] uppercase"
                style={{ fontFamily: "'Space Mono', monospace", color: "oklch(0.75 0.12 85)" }}
              >
                查看詳情
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </motion.div>
          </div>

          {/* Tag */}
          <span
            className={`text-xs tracking-[0.2em] uppercase px-3 py-1 border rounded-full shrink-0 transition-all duration-500 ${
              isActive
                ? "border-[oklch(0.75_0.12_85/0.5)] text-[oklch(0.75_0.12_85)]"
                : "border-[oklch(0.25_0.03_275)] text-[oklch(0.4_0.02_270)]"
            }`}
            style={{ fontFamily: "'Space Mono', monospace" }}
          >
            {product.tag}
          </span>

          {/* English name */}
          <span
            className="hidden md:block text-xs tracking-[0.15em] uppercase w-40 text-right shrink-0"
            style={{
              fontFamily: "'Space Mono', monospace",
              color: isActive ? "oklch(0.55 0.02 270)" : "oklch(0.3 0.02 270)",
              transition: "color 0.5s ease",
            }}
          >
            {product.nameEn}
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
