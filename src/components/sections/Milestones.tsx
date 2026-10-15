"use client";

import { motion } from "framer-motion";
import { milestones } from "@/lib/data";
import { Label, Reveal, Words } from "../ui";

export default function Milestones() {
  return (
    <section className="relative overflow-hidden bg-bg-2 py-24 sm:py-32">
      <div aria-hidden className="pointer-events-none absolute -bottom-40 -left-40 h-[520px] w-[520px] rounded-full bg-iris/10 blur-[140px]" />
      <div className="wrap relative grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Label>Milestones</Label>
          <Words
            text={"Proud moments,\nshipped work"}
            className="mt-6 font-display text-[clamp(2.4rem,5vw,4.6rem)] font-semibold leading-[0.98]"
          />
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-sm text-muted">
              A few highlights from the products I&apos;ve designed, built and put in front of real users.
            </p>
          </Reveal>
        </div>
        <ol className="lg:col-span-7">
          {milestones.map((m, i) => (
            <motion.li
              key={m.title}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: i * 0.07 }}
              className="group grid grid-cols-[64px_1fr] items-baseline gap-4 border-b border-line py-6 first:border-t sm:grid-cols-[90px_1fr_auto]"
            >
              <span className="font-mono text-sm text-dim transition-colors group-hover:text-volt-ink">{m.year}</span>
              <span className="font-display text-xl font-semibold transition-transform duration-500 group-hover:translate-x-2 sm:text-2xl">
                {m.title}
              </span>
              <span className="col-start-2 text-sm text-muted sm:col-start-auto sm:text-right">{m.note}</span>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
