"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";
import { Button, Label, Reveal, Words } from "../ui";
import { profile } from "@/lib/data";

const statement =
  "I build fast websites, useful applications and intelligent tools that solve real-world problems, and I treat every product like it's my own.";

function Word({ w, progress, range }: { w: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.16, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block pr-[0.26em]">
      {w}
    </motion.span>
  );
}

export default function Intro() {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 45%"] });
  const words = statement.split(" ");

  return (
    <section className="relative py-24 sm:py-36">
      <div className="wrap">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <Label>Who I am</Label>
            <Words
              text={"Problem solver.\nTechnical partner."}
              className="mt-6 font-display text-[clamp(2.6rem,6.4vw,5.6rem)] font-semibold leading-[0.95]"
            />
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
                Bringing code and creativity together to build useful products. From the first idea to launch day, I
                turn complex requirements into clean, scalable software, and I stay close to the business goal the
                whole way.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button href="/about">More about me</Button>
                <Button href={profile.github} variant="ghost">
                  GitHub
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="group relative mx-auto aspect-[4/5] w-full max-w-[460px] overflow-hidden rounded-[28px] border border-line">
              <div className="absolute inset-0 bg-[radial-gradient(90%_75%_at_50%_100%,#d4ff3f_0%,#c8f53a_30%,#e9fbb0_62%,#f5f6f1_100%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(rgba(10,11,8,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(10,11,8,0.18)_1px,transparent_1px)] bg-[size:40px_40px] opacity-50" />
              <p
                aria-hidden
                className="absolute inset-x-0 top-6 text-center font-display text-[22vw] font-semibold leading-none tracking-[-0.06em] text-ink/[0.07] sm:text-[150px]"
              >
                TH
              </p>
              <Image
                src="/me/hero.png"
                alt={profile.name}
                fill
                sizes="(min-width: 1024px) 460px, 90vw"
                className="object-contain object-bottom transition-transform duration-[1.4s] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.03]"
              />
              <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-2xl border border-line bg-bg/80 px-4 py-3 backdrop-blur-md">
                <div>
                  <p className="text-sm font-medium">{profile.name}</p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">Full-stack · AI Automation</p>
                </div>
                <span className="flex items-center gap-2 rounded-full bg-volt/15 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-volt-ink">
                  <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-volt" /> Available
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-24 grid gap-8 border-t border-line pt-14 sm:mt-32 lg:grid-cols-12">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-dim lg:col-span-3">( My approach )</p>
          <p ref={ref} className="font-display text-[clamp(1.6rem,3.4vw,3rem)] font-medium leading-[1.12] lg:col-span-9">
            {words.map((w, i) => (
              <Word key={i} w={w} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]} />
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
