"use client";

import { motion } from "framer-motion";
import { Calendar, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { psychologist } from "@/lib/landing-data";

export default function FinalCTA() {
  return (
    <section
      className="px-6 py-20 md:py-28"
      aria-label="Chamada para ação"
    >
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-light tracking-tight text-foreground">
            O primeiro passo é o mais importante
          </h2>
          <p className="mt-4 text-muted-foreground max-w-md mx-auto leading-relaxed">
            Entre em contato e descubra como a terapia pode transformar sua relação
            consigo mesmo. Estou aqui para acolher você.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
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
                href={`https://wa.me/${psychologist.whatsapp}`}
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
    </section>
  );
}
