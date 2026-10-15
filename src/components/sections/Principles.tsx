"use client";

import { motion } from "framer-motion";
import { principles } from "@/lib/data";
import { Label, Words } from "../ui";

export default function Principles() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="wrap">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Label>Working together</Label>
            <Words
              text={"Good work starts\nwith trust."}
              className="mt-6 font-display text-[clamp(2.4rem,5.6vw,5rem)] font-semibold leading-[0.98]"
            />
          </div>
          <p className="text-xl leading-snug text-text/90 sm:text-2xl lg:col-span-5">
            What you can expect from me on every project, big or small.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {principles.map((p, i) => (
            <motion.figure
              key={p.who}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
              className="flex flex-col justify-between rounded-[22px] border border-line bg-surface/60 p-7"
            >
              <div>
                <span className="font-display text-6xl leading-none text-volt-ink">&ldquo;</span>
                <blockquote className="mt-2 text-[17px] leading-relaxed text-text/90">{p.quote}</blockquote>
              </div>
              <figcaption className="mt-10 flex items-center gap-3 border-t border-line pt-5">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-volt font-mono text-xs font-medium text-ink">
                  0{i + 1}
                </span>
                <span className="text-sm font-medium">{p.who}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
