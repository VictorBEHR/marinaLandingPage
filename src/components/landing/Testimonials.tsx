"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials, testimonialNotice } from "@/lib/landing-data";
import { cn } from "@/lib/utils";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const prev = () => setCurrent((c) => (c === 0 ? total - 1 : c - 1));
  const next = () => setCurrent((c) => (c === total - 1 ? 0 : c + 1));

  return (
    <section
      className="px-6 py-20 md:py-28"
      aria-labelledby="testimonials-title"
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <h2
            id="testimonials-title"
            className="text-2xl md:text-3xl font-light tracking-tight text-foreground"
          >
            Depoimentos
          </h2>

          {/* Ethics notice */}
          <p className="mt-2 text-xs text-muted-foreground/70 max-w-xl mx-auto leading-relaxed">
            {testimonialNotice}
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative mt-10">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="px-4"
          >
            <Quote className="h-8 w-8 mx-auto text-foreground/10 mb-4" />
            <blockquote className="text-base md:text-lg text-muted-foreground italic leading-relaxed">
              &ldquo;{testimonials[current].text}&rdquo;
            </blockquote>
            <footer className="mt-5 text-sm text-foreground/60">
              — {testimonials[current].author}
            </footer>
          </motion.div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <div className="flex items-center gap-2" role="tablist" aria-label="Navegação de depoimentos">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300",
                    i === current
                      ? "w-6 bg-foreground/40"
                      : "w-1.5 bg-foreground/15 hover:bg-foreground/25"
                  )}
                  role="tab"
                  aria-selected={i === current}
                  aria-label={`Depoimento ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
