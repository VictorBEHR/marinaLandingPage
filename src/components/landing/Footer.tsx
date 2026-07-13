"use client";

import { Heart, MessageCircle, Mail, Instagram, Linkedin } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { psychologist, footer } from "@/lib/landing-data";
import logoImage from "@/assets/marina-logo-transparent.png";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden px-6 py-12 md:py-16" role="contentinfo">
      <img
        src={logoImage}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 z-0 w-64 max-w-[55vw] opacity-20 md:left-8 md:w-96 dark:opacity-30 dark:brightness-125"
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <p className="text-sm font-medium text-foreground">{psychologist.name}</p>
            <p className="mt-1 text-xs text-muted-foreground">{psychologist.crp}</p>
            <p className="mt-3 text-xs text-muted-foreground/70 leading-relaxed max-w-xs">
              {footer.ethicsNote}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">
              Navegação
            </p>
            <nav className="flex flex-col gap-2" aria-label="Links do rodapé">
              <a href="#sobre" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Sobre
              </a>
              <a href="#areas" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Áreas de Atuação
              </a>
              <a href="#funcionamento" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Como Funciona
              </a>
              <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                FAQ
              </a>
              <a href="#contato" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contato
              </a>
            </nav>
          </div>

          {/* Contact & Social */}
          <div>
            <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">
              Contato Rápido
            </p>
            <div className="flex flex-col gap-2">
              <a
                href={`https://wa.me/${psychologist.whatsapp}?text=${encodeURI(psychologist.message)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
              >
                <MessageCircle className="h-3.5 w-3.5" />
                WhatsApp
              </a>
              <a
                href={`mailto:${psychologist.email}`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2 min-w-0 break-all"
              >
                <Mail className="h-3.5 w-3.5" />
                {psychologist.email}
              </a>
            </div>

            <div className="flex items-center gap-3 mt-4">
              {psychologist.social.instagram && (
                <a
                  href={psychologist.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
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
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-border/40" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 flex-wrap text-center md:text-left text-xs text-muted-foreground">
          <p className="break-words max-w-full">{footer.copyright}</p>
          <div className="flex items-center gap-4">
            <a href={footer.privacyUrl} className="hover:text-foreground transition-colors">
              Política de Privacidade
            </a>
            <span className="text-border/60">·</span>
            <a href={footer.termsUrl} className="hover:text-foreground transition-colors">
              Termos de Uso
            </a>
          </div>
          <p className="inline-flex items-center gap-1">
            Feito com <Heart className="h-3 w-3 text-foreground/30" /> por {psychologist.shortName}
          </p>
        </div>
      </div>
    </footer>
  );
}
