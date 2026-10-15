"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { nav, profile, services } from "@/lib/data";
import Logo from "./Logo";

function Clock() {
  const [t, setT] = useState("");
  useEffect(() => {
    const f = () =>
      setT(
        new Date().toLocaleTimeString("en-GB", { timeZone: profile.timezone, hour: "2-digit", minute: "2-digit" })
      );
    f();
    const id = setInterval(f, 15000);
    return () => clearInterval(id);
  }, []);
  return <span suppressHydrationWarning>{t || "--:--"}</span>;
}

export default function Footer() {
  const socials = [
    { label: "GitHub", href: profile.github },
    { label: "LinkedIn", href: profile.linkedin },
    { label: "X / Twitter", href: profile.twitter },
    { label: "Email", href: `mailto:${profile.email}` },
  ];
  return (
    <footer className="relative overflow-hidden border-t border-line bg-bg pt-20 sm:pt-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-volt/25 blur-[140px]"
      />
      <div className="wrap relative">
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
          <h2 className="font-display text-[clamp(3rem,9vw,8.5rem)] font-semibold leading-[0.92]">
            Let&apos;s build
            <br />
            <span className="text-muted">what&apos;s next.</span>
          </h2>
          <Link
            href="/contact"
            aria-label="Start a project"
            className="group grid h-28 w-28 shrink-0 place-items-center rounded-full bg-volt text-ink transition-transform duration-500 hover:scale-105 sm:h-36 sm:w-36"
          >
            <ArrowUpRight className="h-10 w-10 transition-transform duration-500 group-hover:rotate-45 sm:h-12 sm:w-12" strokeWidth={1.6} />
          </Link>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-10 border-t border-line pt-12 md:grid-cols-12">
          <div className="col-span-2 md:col-span-4">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Full-stack developer and AI automation engineer crafting fast, useful digital products.
            </p>
            <p className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
              <span className="pulse-dot h-2 w-2 rounded-full bg-volt" />
              Available for new projects
            </p>
          </div>

          <div className="md:col-span-2">
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.16em] text-dim">Explore</p>
            <ul className="space-y-2.5 text-sm">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="text-muted transition-colors hover:text-volt-ink">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.16em] text-dim">Services</p>
            <ul className="space-y-2.5 text-sm">
              {services.slice(0, 5).map((s) => (
                <li key={s.slug}>
                  <Link href="/services" className="text-muted transition-colors hover:text-volt-ink">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-3">
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.16em] text-dim">Get in touch</p>
            <a href={`mailto:${profile.email}`} className="group flex items-center justify-between gap-3 rounded-2xl border border-line bg-surface p-4 text-sm transition-colors hover:border-volt/50">
              <span className="truncate">{profile.email}</span>
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-volt text-ink">
                <ArrowRight size={15} />
              </span>
            </a>
            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="text-muted transition-colors hover:text-volt-ink">
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col justify-between gap-3 border-t border-line py-6 font-mono text-[11px] uppercase tracking-[0.14em] text-dim sm:flex-row">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>
            {profile.location} · <Clock /> PKT
          </span>
        </div>
      </div>

      <motion.div
        initial={{ y: "30%", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        aria-hidden
        className="wrap pointer-events-none select-none overflow-hidden"
      >
        <p className="whitespace-nowrap bg-[linear-gradient(180deg,#0d0f0a_0%,#0d0f0a_35%,rgba(13,15,10,0.22)_100%)] bg-clip-text pb-[3vw] pt-[1vw] text-center font-display text-[clamp(5rem,21vw,21rem)] font-semibold leading-[0.95] tracking-[-0.065em] text-transparent">
          Tayyab<span className="text-volt-2">.</span>
        </p>
      </motion.div>
    </footer>
  );
}
