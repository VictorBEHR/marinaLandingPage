"use client";

import { motion } from "framer-motion";
import { Target, GraduationCap, BookOpen, Notebook, NotebookPen, Library } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { about } from "@/lib/landing-data";

export default function AboutSection() {
  return (
    <section
      id="sobre"
      className="px-6 py-20 md:py-28"
      aria-labelledby="about-title"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="grid md:grid-cols-2 gap-12 md:gap-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Left — Text */}
          <div className="min-w-0">
            <h2
              id="about-title"
              className="text-2xl md:text-3xl font-light tracking-tight text-foreground mb-6"
            >
              Sobre Mim
            </h2>
            {about.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-base leading-relaxed text-muted-foreground mb-4 last:mb-0"
              >
                {p}
              </p>
            ))}

            {/* Quick info badges */}
            <div className="mt-6 flex flex-wrap gap-2 min-w-0">
              <Badge variant="secondary" className="rounded-full px-3 py-1.5 font-normal whitespace-normal shrink max-w-full h-auto text-left">
                <BookOpen className="h-3.5 w-3.5 mr-1.5" />
                {about.approach}
              </Badge>
              <Badge variant="secondary" className="rounded-full px-3 py-1.5 font-normal whitespace-normal shrink max-w-full h-auto text-left">
                <GraduationCap className="h-3.5 w-3.5 mr-1.5" />
                {about.formation}
              </Badge>
              <Badge variant="secondary" className="rounded-full px-3 py-1.5 font-normal whitespace-normal shrink max-w-full h-auto text-left">
                <Library className="h-3.5 w-3.5 mr-1.5" />
                {about.latoSenso}
              </Badge>
              <Badge variant="secondary" className="rounded-full px-3 py-1.5 font-normal whitespace-normal shrink max-w-full h-auto text-left">
                <NotebookPen className="h-3.5 w-3.5 mr-1.5" />
                {about.ongoing}
              </Badge>
            </div>
          </div>

          {/* Right — Mission & Values */}
          <div className="flex flex-col justify-center">
            <div className="p-6 md:p-8 rounded-xl bg-muted/40 border border-border/40">
              <div className="flex items-start gap-4">
                <Target className="h-5 w-5 text-foreground/60 mt-0.5 shrink-0" />
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2">
                    Missão
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {about.mission}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border/40">
                <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
                  Valores
                </h3>
                <div className="flex flex-wrap gap-2 min-w-0">
                  {about.values.map((v) => (
                    <Badge
                      key={v}
                      variant="outline"
                      className="rounded-full px-3 py-1.5 font-normal whitespace-normal shrink max-w-full h-auto text-left text-foreground/70 border-border/60"
                    >
                      {v}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
