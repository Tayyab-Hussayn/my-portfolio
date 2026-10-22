"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Atom, Code2, Database, Hexagon, Users, Workflow, Zap } from "lucide-react";
import { profile } from "@/lib/data";
import { Button } from "../ui";

const ease = [0.22, 1, 0.36, 1] as const;

const tech = [
  { icon: Atom, name: "React", sub: "Frontend" },
  { icon: Hexagon, name: "Node.js", sub: "Backend" },
  { icon: Database, name: "PostgreSQL", sub: "Database" },
  { icon: Workflow, name: "n8n & AI", sub: "Automation" },
];

const traits = [
  { icon: Code2, name: "Clean Code", sub: "Scalable & Maintainable" },
  { icon: Zap, name: "Problem Solver", sub: "Turning Ideas into Products" },
  { icon: Users, name: "Always Learning", sub: "Better Every Day" },
];

function Portrait({ className, sizes, priority }: { className: string; sizes: string; priority?: boolean }) {
  return (
    <div className={className}>
      <Image
        src="/me/hero.png"
        alt={`Portrait of ${profile.name}`}
        fill
        priority={priority}
        sizes={sizes}
        className="object-contain object-bottom drop-shadow-[0_30px_50px_rgba(13,15,10,0.18)] [mask-image:linear-gradient(180deg,#000_84%,transparent_100%)]"
      />
    </div>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const photoY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-16%"]);

  return (
    <section
      ref={ref}
      className="relative isolate overflow-hidden bg-bg pt-[72px] lg:h-[100svh] lg:min-h-[700px] lg:max-h-[1080px]"
    >
      {/* Lime glow behind the portrait + faint grid, same combo as the rest of the site */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-[radial-gradient(55%_75%_at_60%_78%,#d4ff3f_0%,#cdf83a_22%,#ecfcbb_50%,#ffffff_78%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(13,15,10,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(13,15,10,0.06)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_at_60%_60%,#000_30%,transparent_75%)]" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-bg to-transparent" />
      </div>

      {/* Desktop portrait: centered, waist-up, bleeding off the bottom edge */}
      <motion.div
        style={{ y: photoY }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease }}
        className="pointer-events-none absolute bottom-0 left-[55%] -z-10 hidden h-[86%] w-[40vw] max-w-[700px] -translate-x-1/2 lg:block"
      >
        <Portrait className="relative h-full w-full" sizes="42vw" priority />
      </motion.div>

      <motion.div style={{ y: textY }} className="wrap relative flex h-full flex-col">
        <div className="grid flex-1 items-center gap-10 pt-10 lg:grid-cols-12 lg:pt-4">
          {/* Left: greeting, headline, stack */}
          <div className="lg:col-span-6 xl:col-span-5">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.2 }}
              className="font-display text-2xl font-normal text-text/80 sm:text-[34px] xl:text-[40px]"
            >
              Hey, I&apos;m <span className="font-semibold text-volt-ink">Tayyab</span>, an
            </motion.p>
            <h1 className="mt-2 font-display text-[clamp(3.3rem,6.4vw,7.6rem)] font-extrabold leading-[0.92] tracking-[-0.045em]">
              {["Automation", "Developer"].map((w, i) => (
                <span key={w} className="block overflow-hidden pb-[0.06em]">
                  <motion.span
                    className="block"
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1.1, ease, delay: 0.3 + i * 0.12 }}
                  >
                    {w}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease, delay: 0.75 }}
              className="mt-10 grid grid-cols-2 gap-y-6 sm:flex sm:items-stretch xl:mt-12"
            >
              {tech.map(({ icon: Icon, name, sub }, i) => (
                <li
                  key={name}
                  className={`flex flex-col items-center px-4 text-center first:pl-0 sm:px-5 xl:px-7 ${
                    i > 0 ? "sm:border-l sm:border-line-2" : ""
                  }`}
                >
                  <Icon size={32} strokeWidth={1.5} className="text-text" />
                  <span className="mt-2.5 text-[15px] font-semibold xl:text-[17px]">{name}</span>
                  <span className="text-[12.5px] text-muted xl:text-[13.5px]">{sub}</span>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Mobile portrait */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease, delay: 0.4 }}
            className="relative -mx-4 lg:hidden"
          >
            <div className="absolute inset-x-0 bottom-0 mx-auto h-[85%] max-w-[440px] rounded-full bg-[radial-gradient(closest-side,rgba(212,255,63,0.75),transparent)] blur-xl" />
            <Portrait className="relative mx-auto h-[400px] max-w-[460px] sm:h-[520px]" sizes="90vw" />
          </motion.div>

          {/* Right: tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.7 }}
            className="lg:col-span-3 lg:col-start-10"
          >
            <p className="font-display text-[28px] font-semibold leading-[1.15] lg:text-[30px] xl:text-[36px]">
              Great technology should feel effortless.
            </p>
            <p className="mt-4 text-[15.5px] leading-relaxed text-muted xl:text-[17px]">
              I build AI agents, automations and web apps that are fast, reliable and genuinely
              useful.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact">Start a project</Button>
              <Button href="/projects" variant="ghost">
                View work
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Bottom traits */}
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="relative grid gap-5 border-t border-line py-7 sm:grid-cols-3 lg:border-0 lg:pb-8"
        >
          {traits.map(({ icon: Icon, name, sub }, i) => (
            <li
              key={name}
              className={`flex items-center gap-3.5 ${i === 1 ? "sm:justify-self-center" : ""} ${i === 2 ? "sm:justify-self-end" : ""}`}
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-volt text-ink">
                <Icon size={22} strokeWidth={1.9} />
              </span>
              <span>
                <span className="block text-[17px] font-semibold xl:text-[19px]">{name}</span>
                <span className="block text-[13.5px] text-muted xl:text-[14.5px]">{sub}</span>
              </span>
            </li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
}
