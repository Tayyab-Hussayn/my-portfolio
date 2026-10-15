"use client";

import Link from "next/link";
import { motion, type HTMLMotionProps } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  ...rest
}: { children: ReactNode; delay?: number; y?: number; className?: string } & HTMLMotionProps<"div">) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, ease, delay }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/** Headline that rises in word by word. */
export function Words({
  text,
  className,
  delay = 0,
  as: Tag = "h2",
}: {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p";
}) {
  const lines = text.split("\n");
  let i = 0;
  return (
    <Tag className={className} aria-label={text.replace(/\n/g, " ")}>
      {lines.map((line, li) => (
        <span key={li} className="block" aria-hidden>
          {line.split(" ").map((w, wi) => {
            const d = delay + i++ * 0.05;
            return (
              <span key={wi} className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-top">
                <motion.span
                  className="inline-block"
                  initial={{ y: "105%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.85, ease, delay: d }}
                >
                  {w}
                  {wi < line.split(" ").length - 1 ? " " : ""}
                </motion.span>
              </span>
            );
          })}
        </span>
      ))}
    </Tag>
  );
}

export function Label({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`font-mono text-[11px] uppercase tracking-[0.18em] text-volt-ink ${className}`}>
      <span className="mr-2 inline-block h-1.5 w-1.5 -translate-y-px rounded-full bg-volt align-middle" />
      {children}
    </p>
  );
}

export function Button({
  href,
  children,
  variant = "volt",
  className = "",
  external,
}: {
  href: string;
  children: ReactNode;
  variant?: "volt" | "ghost" | "light";
  className?: string;
  external?: boolean;
}) {
  const styles = {
    volt: "bg-volt text-ink hover:bg-volt-2",
    light: "bg-text text-bg hover:bg-volt",
    ghost: "border border-line-2 text-text hover:border-volt hover:text-volt-ink",
  }[variant];
  const dot = {
    volt: "bg-ink text-volt",
    light: "bg-bg text-text",
    ghost: "bg-volt text-ink",
  }[variant];
  const cls = `group inline-flex items-center gap-3 rounded-full py-1.5 pl-5 pr-1.5 text-sm font-medium transition-colors duration-300 ${styles} ${className}`;
  const inner = (
    <>
      <span>{children}</span>
      <span className={`grid h-8 w-8 place-items-center rounded-full transition-transform duration-500 group-hover:rotate-45 ${dot}`}>
        <ArrowUpRight size={16} strokeWidth={2.2} />
      </span>
    </>
  );
  if (external || href.startsWith("http") || href.startsWith("mailto:"))
    return (
      <a href={href} target={href.startsWith("mailto:") ? undefined : "_blank"} rel="noreferrer" className={cls}>
        {inner}
      </a>
    );
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}

export function Marquee({ items, speed = 40, className = "" }: { items: ReactNode[]; speed?: number; className?: string }) {
  return (
    <div className={`marquee-pause relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)] ${className}`}>
      <div className="marquee flex w-max" style={{ ["--dur" as string]: `${speed}s` }}>
        {[0, 1].map((k) => (
          <div key={k} className="flex shrink-0 items-center" aria-hidden={k === 1}>
            {items.map((it, i) => (
              <div key={i} className="flex items-center">
                {it}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/** Tracks the pointer so .card-glow borders light up where the cursor is. */
export function glowMove(e: React.PointerEvent<HTMLElement>) {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
}
