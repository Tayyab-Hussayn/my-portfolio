"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import ProjectMedia, { tintInk, tintVar } from "../ProjectMedia";
import { Button, Label, Reveal, Words } from "../ui";

export default function FeaturedWork() {
  const picks = ["querylens", "qalam", "axon-lead-suite"].map((s) => projects.find((p) => p.slug === s)!);
  return (
    <section className="relative py-24 sm:py-32">
      <div className="wrap">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Label>Selected work</Label>
            <Words
              text={"Shaping experiences\nthat make life simpler"}
              className="mt-6 font-display text-[clamp(2.4rem,5.6vw,5rem)] font-semibold leading-[0.98]"
            />
          </div>
          <Reveal className="lg:col-span-5" delay={0.15}>
            <p className="text-xl leading-snug text-text/90 sm:text-2xl">
              Real products, from database tooling to AI-driven SaaS, built end to end and shipped.
            </p>
            <div className="mt-6">
              <Button href="/projects">See all work</Button>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {picks.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 }}
              className={i === 2 ? "md:col-span-2 lg:col-span-1" : ""}
            >
              <Link href={`/projects/${p.slug}`} className="group block">
                <div
                  className="flow-border rounded-[26px] p-2.5 shadow-[0_24px_50px_-28px_rgba(13,15,10,0.45)] transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:-translate-y-2"
                  style={{ ["--tint" as string]: tintVar[p.tint], animationDelay: `${i * -1.6}s` }}
                >
                  <ProjectMedia project={p} className="aspect-[16/10] rounded-[18px]" />
                </div>
                <div className="mt-5 flex items-start justify-between gap-4 px-1">
                  <div>
                    <p className="font-mono text-[10.5px] uppercase tracking-[0.16em]" style={{ color: tintInk[p.tint] }}>
                      {p.category}
                    </p>
                    <h3 className="mt-1.5 font-display text-2xl font-semibold">{p.title}</h3>
                    <p className="mt-1.5 text-sm text-muted">{p.tagline}</p>
                  </div>
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line-2 transition-all duration-500 group-hover:rotate-45 group-hover:border-transparent group-hover:bg-volt group-hover:text-ink">
                    <ArrowUpRight size={17} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
