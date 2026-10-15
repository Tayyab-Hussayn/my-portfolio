"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Bot, Code2, Database, Layers, MessagesSquare, ScanSearch } from "lucide-react";
import { services, type Service } from "@/lib/data";
import { Label, Reveal, Words, glowMove } from "../ui";

export const serviceIcons: Record<Service["icon"], typeof Code2> = {
  code: Code2,
  bot: Bot,
  chat: MessagesSquare,
  scrape: ScanSearch,
  db: Database,
  saas: Layers,
};

export function ServiceCard({ s, i }: { s: Service; i: number }) {
  const Icon = serviceIcons[s.icon];
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: (i % 3) * 0.08 }}
      onPointerMove={glowMove}
      className="card-glow group flex flex-col rounded-[22px] border border-line bg-surface/60 p-6 transition-colors duration-500 hover:bg-surface sm:p-7"
    >
      <div className="flex items-start justify-between">
        <span className="grid h-12 w-12 place-items-center rounded-xl border border-volt/25 bg-volt/10 text-volt-ink transition-colors duration-500 group-hover:bg-volt group-hover:text-ink">
          <Icon size={22} strokeWidth={1.7} />
        </span>
        <span className="font-mono text-[11px] text-dim">0{i + 1}</span>
      </div>
      <p className="mt-8 font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted">{s.kicker}</p>
      <h3 className="mt-2 font-display text-2xl font-semibold leading-tight">{s.title}</h3>
      <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted">{s.body}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {s.tags.map((t) => (
          <span key={t} className="rounded-full border border-line-2 px-3 py-1 text-[12px] text-text/80">
            {t}
          </span>
        ))}
      </div>
      <Link href="/contact" className="mt-7 inline-flex items-center gap-2 text-sm text-volt-ink">
        Discuss a project <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
      </Link>
    </motion.article>
  );
}

export default function Services() {
  return (
    <section className="relative bg-bg-2 py-24 sm:py-32">
      <div className="wrap">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Label>Services</Label>
            <Words
              text={"What I can\nhelp you with"}
              className="mt-6 font-display text-[clamp(2.4rem,5.6vw,5rem)] font-semibold leading-[0.98]"
            />
          </div>
          <Reveal className="lg:col-span-5" delay={0.15}>
            <p className="text-xl leading-snug text-text/90 sm:text-2xl">
              From websites and apps to AI, data and growth, I deliver complete technical solutions built around your
              business goals.
            </p>
          </Reveal>
        </div>
        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <ServiceCard key={s.slug} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
