import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { toast } from "sonner";

export default function ContactSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal(0.2);
  const { ref: formRef, isVisible: formVisible } = useScrollReveal(0.15);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("感謝您的訊息，我們會盡快回覆您。");
  };

  return (
    <section id="contact" className="relative py-32 md:py-44 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[oklch(0.06_0.02_270)]" />

      {/* Decorative top line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-24 bg-gradient-to-b from-transparent via-[oklch(0.72_0.12_185/0.3)] to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={titleVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span
            className="text-xs tracking-[0.5em] uppercase block mb-4"
            style={{ fontFamily: "'Space Mono', monospace", color: "oklch(0.72 0.12 185)" }}
          >
            Contact
          </span>
          <h2
            className="text-4xl md:text-6xl lg:text-7xl tracking-[0.05em] uppercase"
            style={{
              fontFamily: "'Space Mono', monospace",
              fontWeight: 700,
              color: "oklch(0.92 0.01 80)",
            }}
          >
            聯繫我們
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={titleVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 space-y-10"
          >
            <p
              className="text-lg leading-relaxed"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: "oklch(0.7 0.01 80)",
                fontSize: "1.2rem",
                lineHeight: 1.9,
              }}
            >
              無論你是想了解更多關於我們的商品，或是想分享你的故事，我們都在這裡等你。
            </p>

            <div className="space-y-6">
              <div>
                <span
                  className="text-xs tracking-[0.3em] uppercase block mb-2"
                  style={{ fontFamily: "'Space Mono', monospace", color: "oklch(0.75 0.12 85)" }}
                >
                  Email
                </span>
                <a
                  href="mailto:hello@ingridcat.com"
                  className="text-base hover:text-[oklch(0.75_0.12_85)] transition-colors"
                  style={{ color: "oklch(0.7 0.01 80)" }}
                >
                  hello@ingridcat.com
                </a>
              </div>

              <div>
                <span
                  className="text-xs tracking-[0.3em] uppercase block mb-2"
                  style={{ fontFamily: "'Space Mono', monospace", color: "oklch(0.75 0.12 85)" }}
                >
                  Social
                </span>
                <div className="flex gap-6">
                  {["Instagram", "Facebook", "LINE"].map((social) => (
                    <button
                      key={social}
                      onClick={() => toast("功能即將推出", { description: "社群連結即將上線" })}
                      className="text-sm tracking-[0.1em] hover:text-[oklch(0.75_0.12_85)] transition-colors"
                      style={{
                        fontFamily: "'Space Mono', monospace",
                        color: "oklch(0.5 0.02 270)",
                      }}
                    >
                      {social}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            ref={formRef}
            initial={{ opacity: 0, x: 20 }}
            animate={formVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-7"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label
                    className="text-xs tracking-[0.3em] uppercase block mb-3"
                    style={{ fontFamily: "'Space Mono', monospace", color: "oklch(0.5 0.02 270)" }}
                  >
                    姓名
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-transparent border-b border-[oklch(0.25_0.03_275)] py-3 text-[oklch(0.85_0.01_80)] focus:border-[oklch(0.75_0.12_85)] transition-colors outline-none"
                    placeholder="您的姓名"
                  />
                </div>
                <div>
                  <label
                    className="text-xs tracking-[0.3em] uppercase block mb-3"
                    style={{ fontFamily: "'Space Mono', monospace", color: "oklch(0.5 0.02 270)" }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full bg-transparent border-b border-[oklch(0.25_0.03_275)] py-3 text-[oklch(0.85_0.01_80)] focus:border-[oklch(0.75_0.12_85)] transition-colors outline-none"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  className="text-xs tracking-[0.3em] uppercase block mb-3"
                  style={{ fontFamily: "'Space Mono', monospace", color: "oklch(0.5 0.02 270)" }}
                >
                  訊息
                </label>
                <textarea
                  required
                  rows={5}
                  className="w-full bg-transparent border-b border-[oklch(0.25_0.03_275)] py-3 text-[oklch(0.85_0.01_80)] focus:border-[oklch(0.75_0.12_85)] transition-colors outline-none resize-none"
                  placeholder="想對我們說的話..."
                />
              </div>

              <button
                type="submit"
                className="group flex items-center gap-4 mt-4"
              >
                <span
                  className="text-sm tracking-[0.3em] uppercase group-hover:text-[oklch(0.75_0.12_85)] transition-colors"
                  style={{ fontFamily: "'Space Mono', monospace", color: "oklch(0.7 0.01 80)" }}
                >
                  送出訊息
                </span>
                <span className="w-12 h-[1px] bg-[oklch(0.75_0.12_85/0.5)] group-hover:w-20 transition-all duration-500" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
