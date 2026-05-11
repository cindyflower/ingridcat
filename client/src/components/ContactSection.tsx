import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { toast } from "sonner";

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/ingridcatflower/",
    available: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
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
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
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
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    name: "LINE",
    href: "#",
    available: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2C6.48 2 2 5.82 2 10.5c0 3.26 2.14 6.1 5.32 7.58-.07.53-.46 1.97-.53 2.27-.09.38.14.37.3.27.12-.08 1.94-1.32 2.73-1.86.7.1 1.43.16 2.18.16 5.52 0 10-3.82 10-8.5S17.52 2 12 2zm-2.7 10.7H7.5a.6.6 0 0 1-.6-.6V8.6a.6.6 0 1 1 1.2 0v3h1.2a.6.6 0 1 1 0 1.2h-.7zm1.8-.6a.6.6 0 1 1-1.2 0V8.6a.6.6 0 1 1 1.2 0v3.5zm4.2 0a.6.6 0 0 1-.48.59.6.6 0 0 1-.6-.3L12.9 10v2.1a.6.6 0 1 1-1.2 0V8.6a.6.6 0 0 1 .48-.59.6.6 0 0 1 .6.3l1.32 2.3V8.6a.6.6 0 1 1 1.2 0v3.5zm3-.6h-1.8a.6.6 0 0 1-.6-.6V8.6a.6.6 0 0 1 .6-.6h1.8a.6.6 0 1 1 0 1.2h-1.2v.7h1.2a.6.6 0 1 1 0 1.2h-1.2v.7h1.2a.6.6 0 1 1 0 1.2z" />
      </svg>
    ),
  },
];

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

            <div className="space-y-8">
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
                  className="text-xs tracking-[0.3em] uppercase block mb-4"
                  style={{ fontFamily: "'Space Mono', monospace", color: "oklch(0.75 0.12 85)" }}
                >
                  Social
                </span>
                <div className="flex items-center gap-3">
                  {socialLinks.map((social) =>
                    social.available ? (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative w-11 h-11 flex items-center justify-center rounded-full border transition-all duration-300 hover:border-[oklch(0.75_0.12_85)] hover:bg-[oklch(0.75_0.12_85/0.1)] hover:text-[oklch(0.75_0.12_85)]"
                        style={{
                          borderColor: "oklch(0.25 0.03 275)",
                          color: "oklch(0.55 0.02 270)",
                        }}
                        title={social.name}
                      >
                        {social.icon}
                        {/* Tooltip */}
                        <span
                          className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.15em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
                          style={{ fontFamily: "'Space Mono', monospace", color: "oklch(0.5 0.02 270)" }}
                        >
                          {social.name}
                        </span>
                      </a>
                    ) : (
                      <button
                        key={social.name}
                        onClick={() => toast("即將推出", { description: `${social.name} 正在建立中，敬請期待！` })}
                        className="group relative w-11 h-11 flex items-center justify-center rounded-full border transition-all duration-300 hover:border-[oklch(0.3_0.03_275)] opacity-40 hover:opacity-60"
                        style={{
                          borderColor: "oklch(0.2 0.03 275)",
                          color: "oklch(0.4 0.02 270)",
                        }}
                        title={`${social.name} — 即將推出`}
                      >
                        {social.icon}
                        {/* Tooltip with "coming soon" */}
                        <span
                          className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.1em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
                          style={{ fontFamily: "'Space Mono', monospace", color: "oklch(0.4 0.02 270)" }}
                        >
                          Coming soon
                        </span>
                      </button>
                    )
                  )}
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
