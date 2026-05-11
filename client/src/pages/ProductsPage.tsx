/**
 * Products Overview Page - IngridCat
 * Design: Cosmic Mysticism dark theme
 * Features: Category filtering, price sorting, animated grid layout
 */
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { products, type Product } from "@/lib/products";
import StarField from "@/components/StarField";

type SortOption = "default" | "price-asc" | "price-desc";
type FilterOption = "全部" | "療癒閱讀" | "書寫療癒" | "占卜工具";

const filterOptions: FilterOption[] = ["全部", "療癒閱讀", "書寫療癒", "占卜工具"];

const sortOptions: { value: SortOption; label: string }[] = [
  { value: "default", label: "預設排序" },
  { value: "price-asc", label: "價格：低到高" },
  { value: "price-desc", label: "價格：高到低" },
];

export default function ProductsPage() {
  const [activeFilter, setActiveFilter] = useState<FilterOption>("全部");
  const [activeSort, setActiveSort] = useState<SortOption>("default");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filteredAndSorted = useMemo(() => {
    let result = [...products];

    // Filter
    if (activeFilter !== "全部") {
      result = result.filter((p) => p.tag === activeFilter);
    }

    // Sort
    if (activeSort === "price-asc") {
      result.sort((a, b) => a.price - b.price);
    } else if (activeSort === "price-desc") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [activeFilter, activeSort]);

  return (
    <div className="min-h-screen bg-[oklch(0.06_0.02_270)] text-[oklch(0.92_0.01_80)] overflow-x-hidden">
      <StarField />

      {/* Fixed navigation */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 px-6 py-5 flex items-center justify-between"
        style={{
          background:
            "linear-gradient(to bottom, oklch(0.06 0.02 270 / 0.95), oklch(0.06 0.02 270 / 0))",
          backdropFilter: "blur(8px)",
        }}
      >
        <Link
          href="/"
          className="group flex items-center gap-3 transition-all duration-300"
        >
          <svg
            className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="oklch(0.75 0.12 85)"
            strokeWidth="1.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 12H5m0 0l7 7m-7-7l7-7"
            />
          </svg>
          <span
            className="text-xs tracking-[0.3em] uppercase group-hover:text-[oklch(0.75_0.12_85)] transition-colors"
            style={{
              fontFamily: "'Space Mono', monospace",
              color: "oklch(0.55 0.02 270)",
            }}
          >
            返回首頁
          </span>
        </Link>
        <Link
          href="/"
          className="text-xs tracking-[0.3em] uppercase hover:text-[oklch(0.75_0.12_85)] transition-colors"
          style={{
            fontFamily: "'Space Mono', monospace",
            color: "oklch(0.55 0.02 270)",
          }}
        >
          INGRIDCAT
        </Link>
      </nav>

      <main className="relative" style={{ zIndex: 2 }}>
        {/* Hero header */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span
                className="text-xs tracking-[0.5em] uppercase block mb-4"
                style={{
                  fontFamily: "'Space Mono', monospace",
                  color: "oklch(0.75 0.12 85)",
                }}
              >
                All Products
              </span>
              <h1
                className="text-5xl md:text-7xl lg:text-8xl tracking-[0.05em] uppercase mb-6"
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontWeight: 700,
                }}
              >
                商品總覽
              </h1>
              <p
                className="max-w-xl text-base md:text-lg leading-relaxed"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: "oklch(0.55 0.02 270)",
                  fontSize: "1.15rem",
                  lineHeight: 1.9,
                }}
              >
                每一件商品都是一個溫柔的陪伴工具，幫助你在迷惘中找到方向，一步一步找回屬於自己的未來感。
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter & Sort bar */}
        <section className="sticky top-16 z-40 py-4 px-6">
          <div
            className="max-w-7xl mx-auto rounded-sm px-6 py-4 border"
            style={{
              background: "oklch(0.07 0.02 270 / 0.9)",
              backdropFilter: "blur(16px)",
              borderColor: "oklch(0.18 0.02 270)",
            }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              {/* Category filters */}
              <div className="flex flex-wrap gap-2">
                {filterOptions.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className="px-4 py-2 text-xs tracking-[0.2em] uppercase rounded-full border transition-all duration-400"
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      borderColor:
                        activeFilter === filter
                          ? "oklch(0.75 0.12 85 / 0.7)"
                          : "oklch(0.25 0.03 275)",
                      color:
                        activeFilter === filter
                          ? "oklch(0.06 0.02 270)"
                          : "oklch(0.55 0.02 270)",
                      background:
                        activeFilter === filter
                          ? "oklch(0.75 0.12 85)"
                          : "transparent",
                    }}
                  >
                    {filter}
                  </button>
                ))}
              </div>

              {/* Sort dropdown */}
              <div className="flex items-center gap-3">
                <span
                  className="text-xs tracking-[0.15em] uppercase hidden sm:inline"
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    color: "oklch(0.4 0.02 270)",
                  }}
                >
                  排序
                </span>
                <div className="relative">
                  <select
                    value={activeSort}
                    onChange={(e) =>
                      setActiveSort(e.target.value as SortOption)
                    }
                    className="appearance-none px-4 py-2 pr-10 text-xs tracking-[0.15em] rounded-full border cursor-pointer focus:outline-none focus:ring-1"
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      background: "oklch(0.1 0.02 270)",
                      borderColor: "oklch(0.25 0.03 275)",
                      color: "oklch(0.7 0.01 80)",
                    }}
                  >
                    {sortOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  <svg
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="oklch(0.5 0.02 270)"
                    strokeWidth="1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Result count */}
            <div className="mt-3 pt-3 border-t border-[oklch(0.15_0.02_270)]">
              <span
                className="text-xs tracking-[0.15em]"
                style={{
                  fontFamily: "'Space Mono', monospace",
                  color: "oklch(0.4 0.02 270)",
                }}
              >
                顯示{" "}
                <span style={{ color: "oklch(0.75 0.12 85)" }}>
                  {filteredAndSorted.length}
                </span>{" "}
                件商品
              </span>
            </div>
          </div>
        </section>

        {/* Product Grid */}
        <section className="py-12 md:py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeFilter}-${activeSort}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
              >
                {filteredAndSorted.map((product, i) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    index={i}
                    isHovered={hoveredId === product.id}
                    onHover={() => setHoveredId(product.id)}
                    onLeave={() => setHoveredId(null)}
                  />
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Empty state */}
            {filteredAndSorted.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-32"
              >
                <p
                  className="text-lg mb-4"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: "oklch(0.5 0.02 270)",
                    fontStyle: "italic",
                  }}
                >
                  目前沒有符合條件的商品
                </p>
                <button
                  onClick={() => {
                    setActiveFilter("全部");
                    setActiveSort("default");
                  }}
                  className="text-xs tracking-[0.2em] uppercase px-6 py-3 border border-[oklch(0.3_0.03_275)] rounded-full hover:border-[oklch(0.75_0.12_85/0.5)] transition-all duration-500"
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    color: "oklch(0.55 0.02 270)",
                  }}
                >
                  清除篩選
                </button>
              </motion.div>
            )}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="relative py-20 px-6">
          <div
            className="max-w-3xl mx-auto text-center py-16 px-8 rounded-sm border"
            style={{
              borderColor: "oklch(0.15 0.02 270)",
              background:
                "linear-gradient(135deg, oklch(0.08 0.025 272 / 0.6), oklch(0.06 0.02 270 / 0.6))",
            }}
          >
            <p
              className="text-2xl md:text-3xl mb-4"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: "oklch(0.85 0.01 80)",
                fontStyle: "italic",
              }}
            >
              「不急著找到標準答案」
            </p>
            <p
              className="text-sm mb-8 max-w-md mx-auto leading-relaxed"
              style={{
                fontFamily: "'Noto Sans TC', sans-serif",
                color: "oklch(0.5 0.02 270)",
                lineHeight: 1.8,
              }}
            >
              而是一步一步找回屬於自己的未來感。
              <br />
              如果你有任何問題，歡迎與我們聯繫。
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-3 px-8 py-4 text-xs tracking-[0.3em] uppercase border rounded-full hover:bg-[oklch(0.75_0.12_85/0.05)] hover:border-[oklch(0.75_0.12_85/0.5)] transition-all duration-500"
              style={{
                fontFamily: "'Space Mono', monospace",
                borderColor: "oklch(0.3 0.03 275)",
                color: "oklch(0.55 0.02 270)",
              }}
            >
              聯繫我們
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
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
          style={{
            fontFamily: "'Space Mono', monospace",
            color: "oklch(0.3 0.02 270)",
          }}
        >
          &copy; 2025 INGRIDCAT. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

function ProductCard({
  product,
  index,
  isHovered,
  onHover,
  onLeave,
}: {
  product: Product;
  index: number;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.12 }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <Link href={`/product/${product.slug}`} className="block group">
        <div
          className="relative overflow-hidden rounded-sm border transition-all duration-500"
          style={{
            borderColor: isHovered
              ? "oklch(0.35 0.04 275)"
              : "oklch(0.15 0.02 270)",
            background: "oklch(0.08 0.02 270 / 0.5)",
          }}
        >
          {/* Image */}
          <div className="relative aspect-[16/10] overflow-hidden">
            <img
              src={product.heroImage}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.06_0.02_270)] via-[oklch(0.06_0.02_270/0.3)] to-transparent" />

            {/* Tag badge */}
            <span
              className="absolute top-5 left-5 px-3 py-1.5 text-xs tracking-[0.2em] uppercase border rounded-full"
              style={{
                fontFamily: "'Space Mono', monospace",
                color: "oklch(0.75 0.12 85)",
                borderColor: "oklch(0.75 0.12 85 / 0.4)",
                background: "oklch(0.06 0.02 270 / 0.7)",
                backdropFilter: "blur(8px)",
              }}
            >
              {product.tag}
            </span>

            {/* Discount badge */}
            {product.originalPrice && (
              <span
                className="absolute top-5 right-5 px-3 py-1.5 text-xs tracking-[0.1em] rounded-full"
                style={{
                  fontFamily: "'Space Mono', monospace",
                  color: "oklch(0.06 0.02 270)",
                  background: "oklch(0.72 0.12 185)",
                  fontWeight: 700,
                }}
              >
                -
                {Math.round(
                  ((product.originalPrice - product.price) /
                    product.originalPrice) *
                    100
                )}
                %
              </span>
            )}

            {/* Number overlay */}
            <span
              className="absolute bottom-4 right-5 text-7xl md:text-8xl"
              style={{
                fontFamily: "'Space Mono', monospace",
                fontWeight: 700,
                color: "oklch(1 0 0 / 0.04)",
              }}
            >
              {String(product.id).padStart(2, "0")}
            </span>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <h2
                  className="text-2xl md:text-3xl tracking-[0.03em] mb-1 group-hover:text-[oklch(0.95_0.01_80)] transition-colors duration-300"
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontWeight: 700,
                    color: "oklch(0.85 0.01 80)",
                  }}
                >
                  {product.name}
                </h2>
                <p
                  className="text-xs tracking-[0.2em] uppercase"
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    color: "oklch(0.4 0.02 270)",
                  }}
                >
                  {product.nameEn}
                </p>
              </div>
            </div>

            <p
              className="text-sm leading-relaxed mb-6 line-clamp-2"
              style={{
                fontFamily: "'Noto Sans TC', sans-serif",
                color: "oklch(0.55 0.02 270)",
                lineHeight: 1.8,
              }}
            >
              {product.shortDescription}
            </p>

            {/* Features preview */}
            <div className="mb-6 space-y-2">
              {product.features.slice(0, 2).map((f, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span
                    className="mt-1.5 w-1 h-1 rounded-full shrink-0"
                    style={{ background: "oklch(0.75 0.12 85 / 0.6)" }}
                  />
                  <span
                    className="text-xs leading-relaxed"
                    style={{
                      fontFamily: "'Noto Sans TC', sans-serif",
                      color: "oklch(0.5 0.02 270)",
                    }}
                  >
                    {f}
                  </span>
                </div>
              ))}
            </div>

            {/* Price & CTA row */}
            <div className="flex items-center justify-between pt-5 border-t border-[oklch(0.15_0.02_270)]">
              <div className="flex items-baseline gap-3">
                <span
                  className="text-2xl"
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontWeight: 700,
                    color: "oklch(0.75 0.12 85)",
                  }}
                >
                  NT$ {product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <span
                    className="text-sm line-through"
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      color: "oklch(0.35 0.02 270)",
                    }}
                  >
                    NT$ {product.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>

              <span
                className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase group-hover:text-[oklch(0.75_0.12_85)] transition-colors duration-300"
                style={{
                  fontFamily: "'Space Mono', monospace",
                  color: "oklch(0.45 0.02 270)",
                }}
              >
                查看詳情
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
