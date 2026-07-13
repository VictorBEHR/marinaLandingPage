import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
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
import { psychologist } from "@/lib/landing-data";

export default function Landing() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col w-full overflow-x-clip"
    >
      {/* Skip to content — accessibility */}
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-background focus:text-foreground focus:border focus:border-border focus:rounded-md focus:shadow-sm focus:outline-none"
      >
        Pular para o conteúdo principal
      </a>

      <Navbar />

      <main className="min-w-0">
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

      <a
        href={`https://wa.me/${psychologist.whatsapp}?text=${encodeURIComponent(psychologist.message)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar pelo WhatsApp"
        className="fixed right-5 bottom-5 z-[100] flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-200 hover:scale-105 focus-visible:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
      >
        <MessageCircle className="h-8 w-8" aria-hidden="true" />
      </a>
    </motion.div>
  );
}
