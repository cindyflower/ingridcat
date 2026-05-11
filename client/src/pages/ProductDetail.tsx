/**
 * Product Detail Page - IngridCat
 * Design: Cosmic Mysticism dark theme
 * Full-page immersive product experience with hero, gallery, details, and purchase CTA
 */
import { useParams, Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { getProductBySlug, getRelatedProducts, type Product } from "@/lib/products";
import StarField from "@/components/StarField";
import { toast } from "sonner";

export default function ProductDetail() {
  const params = useParams<{ slug: string }>();
  const [, setLocation] = useLocation();
  const product = getProductBySlug(params.slug || "");
  const [activeTab, setActiveTab] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveTab(0);
    setImageLoaded(false);
  }, [params.slug]);

  if (!product) {
    setLocation("/404");
    return null;
  }

  const relatedProducts = getRelatedProducts(product);

  return (
    <div className="min-h-screen bg-[oklch(0.06_0.02_270)] text-[oklch(0.92_0.01_80)] overflow-x-hidden">
      <StarField />

      {/* Fixed back navigation */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 px-6 py-5 flex items-center justify-between"
        style={{
          background: "linear-gradient(to bottom, oklch(0.06 0.02 270 / 0.95), oklch(0.06 0.02 270 / 0))",
          backdropFilter: "blur(8px)",
        }}
      >
        <Link
          href="/products"
          className="group flex items-center gap-3 transition-all duration-300"
        >
          <svg
            className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="oklch(0.75 0.12 85)"
            strokeWidth="1.5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5m0 0l7 7m-7-7l7-7" />
          </svg>
          <span
            className="text-xs tracking-[0.3em] uppercase group-hover:text-[oklch(0.75_0.12_85)] transition-colors"
            style={{ fontFamily: "'Space Mono', monospace", color: "oklch(0.55 0.02 270)" }}
          >
            返回商品
          </span>
        </Link>
        <Link
          href="/"
          className="text-xs tracking-[0.3em] uppercase hover:text-[oklch(0.75_0.12_85)] transition-colors"
          style={{ fontFamily: "'Space Mono', monospace", color: "oklch(0.55 0.02 270)" }}
        >
          INGRIDCAT
        </Link>
      </nav>

      <main className="relative" style={{ zIndex: 2 }}>
        {/* Hero Section */}
        <section className="relative h-[70vh] md:h-[85vh] overflow-hidden">
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <img
              src={product.heroImage}
              alt={product.name}
              className="w-full h-full object-cover"
              onLoad={() => setImageLoaded(true)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.06_0.02_270)] via-[oklch(0.06_0.02_270/0.4)] to-[oklch(0.06_0.02_270/0.3)]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.06_0.02_270/0.6)] to-transparent" />
          </motion.div>

          {/* Hero content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-16 lg:p-24">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={imageLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span
                className="inline-block px-3 py-1 mb-4 text-xs tracking-[0.3em] uppercase border rounded-full"
                style={{
                  fontFamily: "'Space Mono', monospace",
                  color: "oklch(0.75 0.12 85)",
                  borderColor: "oklch(0.75 0.12 85 / 0.4)",
                  background: "oklch(0.75 0.12 85 / 0.08)",
                }}
              >
                {product.tag}
              </span>
              <h1
                className="text-4xl md:text-6xl lg:text-8xl tracking-[0.05em] uppercase mb-4"
                style={{ fontFamily: "'Space Mono', monospace", fontWeight: 700 }}
              >
                {product.name}
              </h1>
              <p
                className="text-lg md:text-xl max-w-2xl leading-relaxed"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: "oklch(0.7 0.01 80)",
                  fontSize: "1.2rem",
                }}
              >
                {product.nameEn}
              </p>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 right-8 hidden md:flex flex-col items-center gap-2"
          >
            <span
              className="text-xs tracking-[0.3em] uppercase"
              style={{ fontFamily: "'Space Mono', monospace", color: "oklch(0.4 0.02 270)", writingMode: "vertical-rl" }}
            >
              Scroll
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-[1px] h-12 bg-gradient-to-b from-[oklch(0.75_0.12_85)] to-transparent"
            />
          </motion.div>
        </section>

        {/* Product Overview */}
        <section className="relative py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              {/* Product Image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="relative overflow-hidden rounded-sm">
                  <img
                    src={product.productImage}
                    alt={product.name}
                    className="w-full"
                    style={{
                      boxShadow: "0 0 80px oklch(0.75 0.12 85 / 0.08), 0 25px 50px oklch(0 0 0 / 0.5)",
                    }}
                  />
                  <div className="absolute inset-0 border border-[oklch(0.75_0.12_85/0.15)] rounded-sm" />
                </div>
                {/* Product number */}
                <div
                  className="absolute -top-4 -left-4 w-16 h-16 flex items-center justify-center"
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "3rem",
                    fontWeight: 700,
                    color: "oklch(0.75 0.12 85 / 0.15)",
                  }}
                >
                  {String(product.id).padStart(2, "0")}
                </div>
              </motion.div>

              {/* Product Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:sticky lg:top-32"
              >
                <p
                  className="text-lg md:text-xl leading-relaxed mb-8"
                  style={{
                    fontFamily: "'Noto Sans TC', 'Cormorant Garamond', serif",
                    color: "oklch(0.75 0.01 80)",
                    lineHeight: 2,
                  }}
                >
                  {product.shortDescription}
                </p>

                {/* Features */}
                <div className="mb-10">
                  <h3
                    className="text-xs tracking-[0.4em] uppercase mb-6"
                    style={{ fontFamily: "'Space Mono', monospace", color: "oklch(0.75 0.12 85)" }}
                  >
                    Features
                  </h3>
                  <ul className="space-y-4">
                    {product.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="flex items-start gap-4"
                      >
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ background: "oklch(0.75 0.12 85)" }}
                        />
                        <span
                          className="text-sm leading-relaxed"
                          style={{
                            fontFamily: "'Noto Sans TC', sans-serif",
                            color: "oklch(0.65 0.01 80)",
                          }}
                        >
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Price & Purchase */}
                <div
                  className="p-6 md:p-8 rounded-sm border"
                  style={{
                    borderColor: "oklch(0.2 0.03 275)",
                    background: "oklch(0.08 0.02 270 / 0.6)",
                  }}
                >
                  <div className="flex items-baseline gap-4 mb-2">
                    <span
                      className="text-3xl md:text-4xl"
                      style={{ fontFamily: "'Space Mono', monospace", fontWeight: 700, color: "oklch(0.92 0.01 80)" }}
                    >
                      NT$ {product.price.toLocaleString()}
                    </span>
                    {product.originalPrice && (
                      <span
                        className="text-lg line-through"
                        style={{ fontFamily: "'Space Mono', monospace", color: "oklch(0.4 0.02 270)" }}
                      >
                        NT$ {product.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                  {product.originalPrice && (
                    <p
                      className="text-xs mb-6"
                      style={{ fontFamily: "'Space Mono', monospace", color: "oklch(0.72 0.12 185)" }}
                    >
                      限時優惠 — 省下 NT$ {(product.originalPrice - product.price).toLocaleString()}
                    </p>
                  )}

                  <button
                    onClick={() => toast.success("已加入購物車！此功能即將上線，敬請期待。")}
                    className="w-full py-4 px-8 text-sm tracking-[0.3em] uppercase transition-all duration-500 hover:shadow-lg group relative overflow-hidden rounded-sm"
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      background: "oklch(0.75 0.12 85)",
                      color: "oklch(0.06 0.02 270)",
                      fontWeight: 700,
                    }}
                  >
                    <span className="relative z-10">立即購買</span>
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: "linear-gradient(135deg, oklch(0.8 0.12 85), oklch(0.72 0.12 185))" }}
                    />
                  </button>

                  <button
                    onClick={() => toast.info("已加入收藏！此功能即將上線，敬請期待。")}
                    className="w-full mt-3 py-3 px-8 text-sm tracking-[0.2em] uppercase transition-all duration-500 border rounded-sm hover:bg-[oklch(0.75_0.12_85/0.05)]"
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      borderColor: "oklch(0.3 0.03 275)",
                      color: "oklch(0.6 0.01 80)",
                    }}
                  >
                    加入收藏
                  </button>
                </div>

                {/* Specs */}
                <div className="mt-8">
                  <h3
                    className="text-xs tracking-[0.4em] uppercase mb-4"
                    style={{ fontFamily: "'Space Mono', monospace", color: "oklch(0.75 0.12 85)" }}
                  >
                    Specifications
                  </h3>
                  <div className="space-y-0">
                    {product.specs.map((spec, i) => (
                      <div
                        key={i}
                        className="flex justify-between py-3 border-b"
                        style={{ borderColor: "oklch(0.15 0.02 270)" }}
                      >
                        <span
                          className="text-xs tracking-[0.15em]"
                          style={{ fontFamily: "'Space Mono', monospace", color: "oklch(0.45 0.02 270)" }}
                        >
                          {spec.label}
                        </span>
                        <span
                          className="text-sm"
                          style={{ fontFamily: "'Noto Sans TC', sans-serif", color: "oklch(0.7 0.01 80)" }}
                        >
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Detail Tabs */}
        <section className="relative py-20 md:py-32">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[oklch(0.07_0.025_272)] to-transparent" />
          <div className="relative z-10 max-w-5xl mx-auto px-6">
            {/* Tab headers */}
            <div className="flex gap-0 border-b border-[oklch(0.15_0.02_270)] mb-12 overflow-x-auto">
              {product.details.map((detail, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className="relative px-6 py-4 text-sm tracking-[0.15em] whitespace-nowrap transition-colors duration-300"
                  style={{
                    fontFamily: "'Noto Sans TC', sans-serif",
                    color: activeTab === i ? "oklch(0.92 0.01 80)" : "oklch(0.45 0.02 270)",
                    fontWeight: activeTab === i ? 600 : 400,
                  }}
                >
                  {detail.title}
                  {activeTab === i && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-[2px]"
                      style={{ background: "oklch(0.75 0.12 85)" }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                  <div className="lg:col-span-3">
                    <p
                      className="text-base md:text-lg leading-loose"
                      style={{
                        fontFamily: "'Noto Sans TC', 'Cormorant Garamond', serif",
                        color: "oklch(0.7 0.01 80)",
                        lineHeight: 2.2,
                      }}
                    >
                      {product.details[activeTab].content}
                    </p>
                  </div>
                  <div className="lg:col-span-2">
                    <img
                      src={product.detailImage}
                      alt={product.details[activeTab].title}
                      className="w-full rounded-sm"
                      style={{
                        boxShadow: "0 0 40px oklch(0 0 0 / 0.4)",
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="relative py-20 md:py-32">
            <div className="max-w-7xl mx-auto px-6">
              <h2
                className="text-xs tracking-[0.5em] uppercase mb-12"
                style={{ fontFamily: "'Space Mono', monospace", color: "oklch(0.75 0.12 85)" }}
              >
                You May Also Like
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {relatedProducts.map((related, i) => (
                  <RelatedProductCard key={related.id} product={related} index={i} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Bottom CTA */}
        <section className="relative py-20">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <p
              className="text-lg mb-8"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: "oklch(0.5 0.02 270)",
                fontStyle: "italic",
                fontSize: "1.3rem",
              }}
            >
              「每一件商品都是一個溫柔的陪伴工具」
            </p>
            <Link
              href="/products"
              className="inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase hover:text-[oklch(0.75_0.12_85)] transition-colors duration-300 group"
              style={{ fontFamily: "'Space Mono', monospace", color: "oklch(0.5 0.02 270)" }}
            >
              <svg
                className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5m0 0l7 7m-7-7l7-7" />
              </svg>
              瀏覽所有商品
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        className="relative py-8 text-center border-t"
        style={{ borderColor: "oklch(0.12 0.02 270)", zIndex: 2 }}
      >
        <p
          className="text-xs tracking-[0.2em]"
          style={{ fontFamily: "'Space Mono', monospace", color: "oklch(0.3 0.02 270)" }}
        >
          &copy; 2025 INGRIDCAT. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

function RelatedProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.15 }}
    >
      <Link href={`/product/${product.slug}`} className="block group">
        <div
          className="relative overflow-hidden rounded-sm border transition-all duration-500 group-hover:border-[oklch(0.35_0.04_275)]"
          style={{
            borderColor: "oklch(0.2 0.03 275)",
            background: "oklch(0.08 0.02 270 / 0.6)",
          }}
        >
          <div className="relative aspect-[16/9] overflow-hidden">
            <img
              src={product.heroImage}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.06_0.02_270/0.9)] via-[oklch(0.06_0.02_270/0.3)] to-transparent" />
            <span
              className="absolute top-4 left-4 px-2 py-1 text-xs tracking-[0.2em] uppercase border rounded-full"
              style={{
                fontFamily: "'Space Mono', monospace",
                color: "oklch(0.75 0.12 85)",
                borderColor: "oklch(0.75 0.12 85 / 0.3)",
                background: "oklch(0.75 0.12 85 / 0.1)",
              }}
            >
              {product.tag}
            </span>
          </div>
          <div className="p-6">
            <h3
              className="text-xl md:text-2xl tracking-[0.03em] uppercase mb-2 group-hover:text-[oklch(0.92_0.01_80)] transition-colors"
              style={{
                fontFamily: "'Space Mono', monospace",
                fontWeight: 700,
                color: "oklch(0.7 0.01 80)",
              }}
            >
              {product.name}
            </h3>
            <p
              className="text-sm mb-4 line-clamp-2"
              style={{
                fontFamily: "'Noto Sans TC', sans-serif",
                color: "oklch(0.5 0.02 270)",
              }}
            >
              {product.shortDescription}
            </p>
            <div className="flex items-center justify-between">
              <span
                className="text-lg"
                style={{ fontFamily: "'Space Mono', monospace", color: "oklch(0.75 0.12 85)" }}
              >
                NT$ {product.price.toLocaleString()}
              </span>
              <span
                className="text-xs tracking-[0.2em] uppercase group-hover:text-[oklch(0.75_0.12_85)] transition-colors flex items-center gap-2"
                style={{ fontFamily: "'Space Mono', monospace", color: "oklch(0.45 0.02 270)" }}
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
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
