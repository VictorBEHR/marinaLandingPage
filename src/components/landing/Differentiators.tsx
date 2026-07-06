"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  ShieldCheck,
  Award,
  LucideIcon,
} from "lucide-react";
import { differentiators } from "@/lib/landing-data";

const iconMap: Record<string, LucideIcon> = {
  GraduationCap,
  BookOpen,
  ShieldCheck,
  Award,
};

export default function Differentiators() {
  return (
    <section
      id="diferenciais"
      className="px-6 py-20 md:py-28 bg-muted/30 border-y border-border/30"
      aria-labelledby="diff-title"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <h2
            id="diff-title"
            className="text-2xl md:text-3xl font-light tracking-tight text-foreground"
          >
            Diferenciais Profissionais
          </h2>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
            Formação sólida e compromisso com a atualização constante.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {differentiators.map((item, i) => {
            const Icon = iconMap[item.icon] || Award;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-start gap-4 p-5 rounded-xl border border-border/50 bg-background"
              >
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center shrink-0">
                  <Icon className="h-5 w-5 text-foreground/60" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-medium text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
