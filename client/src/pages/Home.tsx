/*
 * IngridCat Home Page
 * Design: Cosmic Mysticism — 深色宇宙主題
 * Colors: Deep space black + Gold accent + Teal healing
 * Fonts: Space Mono (headings) + Cormorant Garamond (serif body) + Noto Sans TC (Chinese)
 */

import StarField from "@/components/StarField";
import Navigation from "@/components/Navigation";
import SideNav from "@/components/SideNav";
import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import ProductsSection from "@/components/ProductsSection";
import ProductShowcase from "@/components/ProductShowcase";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[oklch(0.06_0.02_270)] text-[oklch(0.92_0.01_80)] overflow-x-hidden">
      {/* Particle star field background */}
      <StarField />

      {/* Navigation */}
      <Navigation />

      {/* Side navigation dots */}
      <SideNav />

      {/* Main content */}
      <main className="relative" style={{ zIndex: 2 }}>
        <HeroSection />
        <StorySection />
        <ProductsSection />
        <ProductShowcase />
        <AboutSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
