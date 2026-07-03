"use client";

import { motion } from "framer-motion";
import { Calendar, MessageCircle, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { psychologist } from "@/lib/landing-data";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const, delay },
});

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center px-6 pt-24 pb-16 md:pt-28 md:pb-20"
    >
      {/* Subtle background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,0,0,0.02) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto w-full grid md:grid-cols-5 gap-10 md:gap-16 items-center">
        {/* Photo — Column */}
        <motion.div
          className="md:col-span-2 flex justify-center"
          {...fadeUp(0)}
        >
          <div className="relative">
            <Avatar className="h-56 w-56 md:h-64 md:w-64 ring-1 ring-border/50 shadow-sm">
              <AvatarImage
                src={psychologist.photoUrl || undefined}
                alt={psychologist.photoAlt}
                className="object-cover"
              />
              <AvatarFallback className="text-5xl font-light text-muted-foreground bg-muted">
                {psychologist.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            {/* Subtle decorative line */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-12 h-px bg-border hidden md:block" />
          </div>
        </motion.div>

        {/* Text — Column */}
        <motion.div className="md:col-span-3 text-center md:text-left" {...fadeUp(0.15)}>
          {/* Nome e CRP */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-foreground leading-[1.1]">
            {psychologist.name}
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">{psychologist.crp}</p>

          {/* Especialidade */}
          <p className="mt-4 text-base md:text-lg font-medium text-foreground/80">
            {psychologist.specialty}
          </p>

          {/* Frase de impacto */}
          <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed max-w-prose mx-auto md:mx-0">
            {psychologist.heroPhrase}
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center md:items-start gap-3">
            <Button size="lg" className="rounded-full w-full sm:w-auto" asChild>
              <a href="#contato">
                <Calendar className="h-4 w-4" />
                Agendar Consulta
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full w-full sm:w-auto"
              asChild
            >
              <a
                href={`https://wa.me/${psychologist.whatsapp}?text=${encodeURI(psychologist.message)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-4 w-4" />
                Fale pelo WhatsApp
              </a>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        aria-hidden="true"
      >
        <ChevronDown className="h-5 w-5 text-muted-foreground/50" />
      </motion.div>
    </section>
  );
}
