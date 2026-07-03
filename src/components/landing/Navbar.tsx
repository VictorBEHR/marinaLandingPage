"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle, Calendar, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { psychologist } from "@/lib/landing-data";

const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#areas", label: "Áreas" },
  { href: "#funcionamento", label: "Como Funciona" },
  { href: "#faq", label: "FAQ" },
  { href: "#contato", label: "Contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/40 shadow-xs"
          : "bg-transparent"
      )}
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 h-16 md:h-20">
        {/* Logo */}
        <a
          href="#"
          className="text-lg md:text-xl font-medium tracking-tight text-foreground"
        >
          {psychologist.shortName}
          <span className="text-muted-foreground font-light hidden sm:inline">
            {" "}· Psicóloga
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}

          {/* Theme toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="relative p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
            aria-label={theme === "dark" ? "Ativar modo claro" : "Ativar modo escuro"}
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </button>

          <div className="flex items-center gap-3 ml-2">
            <Button
              variant="outline"
              size="sm"
              className="rounded-full"
              asChild
            >
              <a
                href={`https://wa.me/${psychologist.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </Button>
            <Button size="sm" className="rounded-full" asChild>
              <a href="#contato">
                <Calendar className="h-4 w-4" />
                Agendar
              </a>
            </Button>
          </div>
        </nav>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-2">
          {/* Theme toggle — mobile */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="relative p-2 rounded-full text-foreground/70 hover:text-foreground hover:bg-muted transition-all"
            aria-label={theme === "dark" ? "Ativar modo claro" : "Ativar modo escuro"}
          >
            <Sun className="h-4 w-4" />
          </button>
          <button
            className="p-2 -mr-2 text-foreground/70 hover:text-foreground transition-colors"
            onClick={() => setMobileOpen(true)}
            aria-label="Abrir menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile Sheet */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-50 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Overlay */}
            <div
              className="absolute inset-0 bg-black/30 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />

            {/* Sheet Content */}
            <motion.div
              className="absolute top-0 right-0 bottom-0 w-4/5 max-w-sm bg-background border-l border-border shadow-xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
            >
              <div className="flex items-center justify-between px-6 h-16 border-b border-border/50">
                <span className="text-sm font-medium">{psychologist.shortName}</span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 -mr-2 text-foreground/70 hover:text-foreground"
                  aria-label="Fechar menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="flex flex-col px-6 py-8 gap-6" aria-label="Navegação móvel">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-base text-foreground/80 hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                ))}

                <div className="flex flex-col gap-3 pt-4 border-t border-border/50">
                  <Button
                    variant="outline"
                    className="rounded-full justify-center"
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
                  <Button className="rounded-full justify-center" asChild>
                    <a href="#contato">
                      <Calendar className="h-4 w-4" />
                      Agendar Consulta
                    </a>
                  </Button>
                </div>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
