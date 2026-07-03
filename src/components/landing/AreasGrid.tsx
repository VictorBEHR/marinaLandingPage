"use client";

import { motion } from "framer-motion";
import { areas } from "@/lib/landing-data";
import {
  BrainCircuit,
  Heart,
  HeartHandshake,
  Sparkles,
  Wind,
  ArrowUpCircle,
  LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  BrainCircuit,
  Heart,
  HeartHandshake,
  Sparkles,
  Wind,
  ArrowUpCircle,
};

export default function AreasGrid() {
  return (
    <section
      id="areas"
      className="px-6 py-20 md:py-28 bg-muted/30 border-y border-border/30"
      aria-labelledby="areas-title"
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
            id="areas-title"
            className="text-2xl md:text-3xl font-light tracking-tight text-foreground"
          >
            Áreas de Atuação
          </h2>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
            Trabalho com diversas demandas emocionais, sempre dentro da minha área de
            competência e formação.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {areas.map((area, i) => {
            const Icon = iconMap[area.icon] || BrainCircuit;
            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group p-6 rounded-xl border border-border/50 bg-background hover:border-border hover:shadow-sm transition-all duration-200"
              >
                <Icon className="h-8 w-8 text-foreground/60 mb-4 group-hover:text-foreground/80 transition-colors" />
                <h3 className="text-base font-medium text-foreground mb-2">
                  {area.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {area.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
