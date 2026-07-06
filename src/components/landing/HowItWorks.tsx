"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MessageCircle,
  UserCheck,
  CalendarCheck,
  TrendingUp,
  Laptop,
  MapPin,
  Check,
  LucideIcon,
} from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { howItWorks, serviceTypes } from "@/lib/landing-data";

const iconMap: Record<string, LucideIcon> = {
  MessageCircle,
  UserCheck,
  CalendarCheck,
  TrendingUp,
};

export default function HowItWorks() {
  const [tab, setTab] = useState("online");

  return (
    <section
      id="funcionamento"
      className="px-6 py-20 md:py-28"
      aria-labelledby="how-title"
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
            id="how-title"
            className="text-2xl md:text-3xl font-light tracking-tight text-foreground"
          >
            Como Funciona o Atendimento
          </h2>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
            Um processo pensado para sua comodidade e bem-estar, do primeiro contato
            ao acompanhamento contínuo.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {howItWorks.map((step, i) => {
            const Icon = iconMap[step.icon] || MessageCircle;
            return (
              <motion.div
                key={step.step}
                className="text-center"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="mx-auto w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-3">
                  <Icon className="h-5 w-5 text-foreground/60" />
                </div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                  Passo {step.step}
                </p>
                <h3 className="text-sm font-medium text-foreground mb-1">
                  {step.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed max-w-[200px] mx-auto">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Online vs Presential Tabs */}
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
        >
          <Tabs value={tab} onValueChange={setTab} className="w-full">
            <TabsList className="mx-auto mb-8 grid w-full max-w-full grid-cols-2 gap-1 rounded-full bg-muted p-1 sm:w-fit sm:inline-flex sm:grid-cols-none">
              <TabsTrigger
                value="online"
                className="rounded-full data-[state=active]:bg-background whitespace-normal text-center px-2 sm:px-5 gap-1.5 sm:gap-2 text-xs sm:text-sm"
              >
                <Laptop className="h-4 w-4 shrink-0" />
                Atendimento Online
              </TabsTrigger>
              <TabsTrigger
                value="presential"
                className="rounded-full data-[state=active]:bg-background whitespace-normal text-center px-2 sm:px-5 gap-1.5 sm:gap-2 text-xs sm:text-sm"
              >
                <MapPin className="h-4 w-4 shrink-0" />
                Atendimento Presencial
              </TabsTrigger>
            </TabsList>

            <TabsContent value="online" className="mt-0">
              <div className="p-6 md:p-8 rounded-xl border border-border/50 bg-muted/20">
                <h3 className="text-lg font-medium text-foreground mb-2">
                  {serviceTypes.online.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {serviceTypes.online.description}
                </p>
                <ul className="space-y-2">
                  {serviceTypes.online.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-foreground/80">
                      <Check className="h-4 w-4 text-foreground/50 mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="presential" className="mt-0">
              <div className="p-6 md:p-8 rounded-xl border border-border/50 bg-muted/20">
                <h3 className="text-lg font-medium text-foreground mb-2">
                  {serviceTypes.presential.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {serviceTypes.presential.description}
                </p>
                <ul className="space-y-2">
                  {serviceTypes.presential.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-foreground/80">
                      <Check className="h-4 w-4 text-foreground/50 mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}
