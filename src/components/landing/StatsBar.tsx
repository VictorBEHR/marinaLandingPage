"use client";

import { motion } from "framer-motion";
import { stats } from "@/lib/landing-data";

export default function StatsBar() {
  return (
    <section
      className="px-6 py-12 md:py-16 border-y border-border/40 bg-muted/30"
      aria-label="Indicadores profissionais"
    >
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <p className="text-3xl md:text-4xl font-light tracking-tight text-foreground">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
