"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Briefcase, Home, Send, User, Zap, type LucideIcon } from "lucide-react";
import { nav, profile } from "@/lib/data";

const icons: Record<string, LucideIcon> = {
  "/": Home,
  "/about": User,
  "/services": Zap,
  "/projects": Briefcase,
  "/contact": Send,
};

export default function Nav() {
  const path = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => setOpen(false), [path]);

  const active = (href: string) => (href === "/" ? path === "/" : path.startsWith(href));

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Soft fade behind the bar once content scrolls under it */}
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-x-0 top-0 h-[96px] bg-gradient-to-b from-bg via-bg/80 to-transparent transition-opacity duration-500 ${
          scrolled || open ? "opacity-100" : "opacity-0"
        }`}
      />

      <div className="wrap relative flex h-[76px] items-center justify-between gap-4">
        {/* Identity */}
        <Link href="/" className="group flex items-center gap-3" aria-label={`${profile.name}, home`}>
          <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full ring-1 ring-line-2 transition-transform duration-500 group-hover:scale-105">
            <Image src="/me/avatar.png" alt="" fill sizes="44px" className="object-cover" priority />
          </span>
          <span className="leading-tight">
            <span className="block text-[15px] font-bold uppercase tracking-[0.01em]">{profile.name}</span>
            <span className="block font-mono text-[10.5px] uppercase tracking-[0.16em] text-muted">
              AI & Automation Developer
            </span>
          </span>
        </Link>

        {/* Floating icon pill */}
        <nav
          aria-label="Main"
          className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-1 rounded-full bg-white/90 p-1.5 shadow-[0_10px_30px_-12px_rgba(13,15,10,0.25)] ring-1 ring-line backdrop-blur-xl md:flex"
        >
          {nav.map((n) => {
            const Icon = icons[n.href] ?? Home;
            const on = active(n.href);
            return (
              <Link
                key={n.href}
                href={n.href}
                title={n.label}
                aria-label={n.label}
                aria-current={on ? "page" : undefined}
                className={`relative flex h-10 items-center gap-2 rounded-full px-3 text-[14px] font-semibold transition-colors ${
                  on ? "text-text" : "text-muted hover:bg-ink/[0.04] hover:text-text"
                }`}
              >
                {on && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-surface-2"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <Icon size={18} strokeWidth={1.8} />
                {on && <span>{n.label}</span>}
                {on && (
                  <motion.span
                    layoutId="nav-dot"
                    className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-volt-ink"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="group hidden items-center gap-3 rounded-full bg-volt px-6 py-3 text-[14px] font-semibold text-ink shadow-[0_12px_30px_-8px_rgba(183,232,31,0.75)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_-8px_rgba(183,232,31,0.9)] sm:inline-flex"
          >
            Let&apos;s talk
            <ArrowRight size={16} strokeWidth={2.2} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <button
            onClick={() => setOpen((o) => !o)}
            className="grid h-10 w-10 place-items-center rounded-full bg-white ring-1 ring-line-2 md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <span className="relative block h-3 w-4">
              <span className={`absolute left-0 top-0 h-px w-4 bg-text transition-all ${open ? "top-1.5 rotate-45" : ""}`} />
              <span className={`absolute bottom-0 left-0 h-px w-4 bg-text transition-all ${open ? "bottom-1.5 -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden border-b border-line bg-bg md:hidden"
            aria-label="Mobile"
          >
            <div className="wrap flex flex-col pb-6 pt-2">
              {nav.map((n, i) => {
                const Icon = icons[n.href] ?? Home;
                return (
                  <motion.div key={n.href} initial={{ x: -12, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.05 * i }}>
                    <Link
                      href={n.href}
                      className={`flex items-center gap-4 border-b border-line py-4 font-display text-2xl ${
                        active(n.href) ? "text-volt-ink" : ""
                      }`}
                    >
                      <Icon size={20} strokeWidth={1.8} className="text-muted" />
                      <span className="flex-1">{n.label}</span>
                      <ArrowUpRight size={18} className="text-muted" />
                    </Link>
                  </motion.div>
                );
              })}
              <Link href="/contact" className="mt-6 rounded-full bg-volt py-3 text-center text-sm font-semibold text-ink">
                Let&apos;s talk
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
