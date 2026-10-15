"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import { faqs } from "@/lib/data";
import { Button, Label, Words } from "../ui";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-bg-2 py-24 sm:py-32">
      <div className="wrap grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <Label>FAQ</Label>
            <Words
              text={"Good questions.\nHonest answers."}
              className="mt-6 font-display text-[clamp(2.4rem,5vw,4.6rem)] font-semibold leading-[0.98]"
            />
            <p className="mt-6 max-w-sm text-muted">Can&apos;t find what you need? Ask me directly. I reply within a day.</p>
            <div className="mt-8">
              <Button href="/contact">Ask a question</Button>
            </div>
          </div>
        </div>
        <div className="lg:col-span-7">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="border-b border-line first:border-t">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className={`text-lg transition-colors sm:text-xl ${isOpen ? "text-text" : "text-text/80"}`}>{f.q}</span>
                  <span
                    className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-all duration-500 ${
                      isOpen ? "rotate-45 border-volt bg-volt text-ink" : "border-line-2"
                    }`}
                  >
                    <Plus size={16} />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-2xl pb-7 leading-relaxed text-muted">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
