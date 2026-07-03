import { motion } from "framer-motion";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import StatsBar from "@/components/landing/StatsBar";
import AboutSection from "@/components/landing/AboutSection";
import AreasGrid from "@/components/landing/AreasGrid";
import HowItWorks from "@/components/landing/HowItWorks";
import Differentiators from "@/components/landing/Differentiators";
import Testimonials from "@/components/landing/Testimonials";
import FAQ from "@/components/landing/FAQ";
import FinalCTA from "@/components/landing/FinalCTA";
import ContactSection from "@/components/landing/ContactSection";
import Footer from "@/components/landing/Footer";

export default function Landing() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col"
    >
      {/* Skip to content — accessibility */}
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-background focus:text-foreground focus:border focus:border-border focus:rounded-md focus:shadow-sm focus:outline-none"
      >
        Pular para o conteúdo principal
      </a>

      <Navbar />

      <main>
        <HeroSection />
        <StatsBar />
        <AboutSection />
        <AreasGrid />
        <HowItWorks />
        <Differentiators />
        <Testimonials />
        <FAQ />
        <FinalCTA />
        <ContactSection />
      </main>

      <Footer />
    </motion.div>
  );
}
