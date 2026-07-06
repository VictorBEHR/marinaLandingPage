"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Linkedin,
  Instagram,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { psychologist } from "@/lib/landing-data";

export default function ContactSection() {
  return (
    <section
      id="contato"
      className="px-6 py-20 md:py-28 bg-muted/30 border-y border-border/30"
      aria-labelledby="contact-title"
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
            id="contact-title"
            className="text-2xl md:text-3xl font-light tracking-tight text-foreground"
          >
            Contato
          </h2>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
            Estou à disposição para tirar suas dúvidas e agendar sua primeira sessão.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          {/* Contact info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
          >
            {/* Address */}
            {psychologist.location.address && (
              <div className="flex items-start gap-4">
                <MapPin className="h-5 w-5 text-foreground/50 mt-0.5 shrink-0" />
                <div className="min-w-0">
                  <p className="text-sm text-foreground">
                    {psychologist.location.address}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {psychologist.location.neighborhood} — {psychologist.location.city}
                  </p>
                </div>
              </div>
            )}

            {/* Phone & WhatsApp */}
            <div className="flex items-start gap-4">
              <Phone className="h-5 w-5 text-foreground/50 mt-0.5 shrink-0" />
              <div className="min-w-0">
                <p className="text-sm text-foreground">{psychologist.phone}</p>
                <a
                  href={`https://wa.me/${psychologist.whatsapp}?text=${encodeURI(psychologist.message)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground/70 hover:text-foreground transition-colors inline-flex items-center gap-1.5 mt-1"
                >
                  <MessageCircle className="h-3.5 w-3.5" />
                  Fale pelo WhatsApp
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <Mail className="h-5 w-5 text-foreground/50 mt-0.5 shrink-0" />
              <a
                href={`mailto:${psychologist.email}`}
                className="text-sm text-foreground/80 hover:text-foreground transition-colors break-all min-w-0"
              >
                {psychologist.email}
              </a>
            </div>

            {/* Social */}
            <div className="flex items-center gap-4 pt-2">
              {psychologist.social.instagram && (
                <a
                  href={psychologist.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-border/70 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              )}
              {psychologist.social.linkedin && (
                <a
                  href={psychologist.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-border/70 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              )}
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <Button className="rounded-full" asChild>
                <a
                  href={`https://wa.me/${psychologist.whatsapp}?text=${encodeURI(psychologist.message)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-4 w-4" />
                  Quero agendar uma sessão
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {psychologist.location.mapsEmbedUrl ? (
              <iframe
                src={psychologist.location.mapsEmbedUrl}
                width="100%"
                height="100%"
                className="min-h-[240px] rounded-xl border border-border/50 grayscale-[30%] contrast-[0.9]"
                style={{ filter: "grayscale(30%) contrast(0.9)" }}
                loading="lazy"
                title="Localização do consultório"
                allowFullScreen
              />
            ) : (
              <a
                href={psychologist.location.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full min-h-[240px] rounded-xl border border-border/50 bg-muted/50 flex items-center justify-center text-sm text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
              >
                <div className="text-center p-6">
                  <MapPin className="h-6 w-6 mx-auto mb-2 text-foreground/40" />
                  <p>Ver no Google Maps</p>
                  <p className="text-xs mt-1">
                    {psychologist.location.address}, {psychologist.location.city}
                  </p>
                </div>
              </a>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
