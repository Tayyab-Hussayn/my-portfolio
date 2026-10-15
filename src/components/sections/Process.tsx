"use client";

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";
import { Compass, PenTool, Rocket, TestTubeDiagonal } from "lucide-react";
import { process } from "@/lib/data";
import { Label, Words } from "../ui";

const tints = ["var(--coral)", "var(--volt)", "var(--iris)", "var(--aqua)"];
const icons = [Compass, PenTool, TestTubeDiagonal, Rocket];
const fan = [-9, -3, 3, 9];
const lift = [34, 6, 6, 34];

function Step({ i, progress }: { i: number; progress: MotionValue<number> }) {
  const p = process[i];
  const Icon = icons[i];
  const rotate = useTransform(progress, [0, 1], [fan[i] * 1.6, fan[i]]);
  const y = useTransform(progress, [0, 1], [lift[i] + 80, lift[i]]);
  return (
    <motion.div style={{ rotate, y }} className="w-[78vw] max-w-[300px] shrink-0 snap-center lg:w-auto lg:max-w-none">
      <div className="rounded-[24px] p-2.5" style={{ background: tints[i] }}>
        <div className="relative flex aspect-[4/4.6] flex-col justify-between overflow-hidden rounded-[17px] bg-white p-6">
          <div
            className="absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-30 blur-3xl"
            style={{ background: tints[i] }}
          />
          <div className="flex items-center justify-between">
            <span className="grid h-11 w-11 place-items-center rounded-xl" style={{ background: tints[i], color: "#0a0b08" }}>
              <Icon size={20} strokeWidth={1.9} />
            </span>
            <span className="font-display text-5xl font-semibold text-ink/10">{p.n}</span>
          </div>
          <div className="relative">
            <h3 className="font-display text-2xl font-semibold leading-tight">{p.title}</h3>
            <p className="mt-3 text-[14px] leading-relaxed text-muted">{p.body}</p>
          </div>
        </div>
      </div>
      <div className="mt-5 text-center">
        <p className="font-mono text-[11px] text-dim">{p.n}</p>
        <p className="mt-1 text-sm text-text/90">{p.title}</p>
      </div>
    </motion.div>
  );
}

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  return (
    <section className="relative overflow-hidden py-24 sm:py-36">
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/3 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-volt/[0.25] blur-[120px]" />
      <div className="wrap relative text-center">
        <Label className="justify-center">How I work</Label>
        <Words
          text={"Ideas in motion.\nProducts with purpose."}
          className="mx-auto mt-6 font-display text-[clamp(2.4rem,5.6vw,5rem)] font-semibold leading-[0.98]"
        />
        <p className="mx-auto mt-6 max-w-lg text-muted">
          A focused process that keeps scope clear, progress visible and quality high, from first call to launch and
          beyond.
        </p>
      </div>
      <div ref={ref} className="wrap mt-16 sm:mt-20">
        <div className="-mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-10 [scrollbar-width:none] lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-6 lg:overflow-visible lg:px-0">
          {process.map((_, i) => (
            <Step key={i} i={i} progress={scrollYProgress} />
          ))}
        </div>
      </div>
    </section>
  );
}
