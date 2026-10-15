"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/data";

const types = ["Web app", "SaaS product", "AI automation", "Chatbot / LLM", "Scraping & data", "Something else"];
const budgets = ["< $1k", "$1k – $3k", "$3k – $8k", "$8k+", "Not sure yet"];

export default function ContactForm() {
  const [type, setType] = useState<string[]>([]);
  const [budget, setBudget] = useState("");
  const [sent, setSent] = useState(false);

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const body = [
      `Name: ${d.get("name")}`,
      `Email: ${d.get("email")}`,
      d.get("company") ? `Company: ${d.get("company")}` : "",
      type.length ? `Project type: ${type.join(", ")}` : "",
      budget ? `Budget: ${budget}` : "",
      "",
      String(d.get("message") ?? ""),
    ]
      .filter((l, i, a) => l !== "" || a[i - 1] !== "")
      .join("\n");
    const subject = `New project inquiry from ${d.get("name")}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const field =
    "w-full rounded-2xl border border-line-2 bg-bg/60 px-4 py-3.5 text-[15px] text-text placeholder:text-dim outline-none transition-colors focus:border-volt";

  return (
    <form onSubmit={submit} className="rounded-[28px] border border-line bg-surface/70 p-6 backdrop-blur-sm sm:p-9">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm text-muted">Your name *</span>
          <input name="name" required className={field} placeholder="Jane Doe" autoComplete="name" />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm text-muted">Email *</span>
          <input name="email" type="email" required className={field} placeholder="jane@company.com" autoComplete="email" />
        </label>
      </div>
      <label className="mt-4 block">
        <span className="mb-2 block text-sm text-muted">Company or website</span>
        <input name="company" className={field} placeholder="Optional" />
      </label>

      <fieldset className="mt-7">
        <legend className="mb-3 text-sm text-muted">What do you need?</legend>
        <div className="flex flex-wrap gap-2">
          {types.map((t) => {
            const on = type.includes(t);
            return (
              <button
                type="button"
                key={t}
                aria-pressed={on}
                onClick={() => setType(on ? type.filter((x) => x !== t) : [...type, t])}
                className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                  on ? "border-volt bg-volt text-ink" : "border-line-2 text-text/80 hover:border-volt/60"
                }`}
              >
                {t}
              </button>
            );
          })}
        </div>
      </fieldset>

      <fieldset className="mt-7">
        <legend className="mb-3 text-sm text-muted">Estimated budget</legend>
        <div className="flex flex-wrap gap-2">
          {budgets.map((b) => (
            <button
              type="button"
              key={b}
              aria-pressed={budget === b}
              onClick={() => setBudget(budget === b ? "" : b)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                budget === b ? "border-volt bg-volt text-ink" : "border-line-2 text-text/80 hover:border-volt/60"
              }`}
            >
              {b}
            </button>
          ))}
        </div>
      </fieldset>

      <label className="mt-7 block">
        <span className="mb-2 block text-sm text-muted">Tell me about your project *</span>
        <textarea name="message" required rows={5} className={`${field} resize-none`} placeholder="Goals, timeline, links, anything that helps." />
      </label>

      <button
        type="submit"
        className="group mt-8 flex w-full items-center justify-between rounded-full bg-volt py-2 pl-6 pr-2 font-medium text-ink transition-colors hover:bg-volt-2"
      >
        Send message
        <span className="grid h-11 w-11 place-items-center rounded-full bg-ink text-volt transition-transform duration-500 group-hover:rotate-45">
          <ArrowUpRight size={18} />
        </span>
      </button>
      <p className="mt-4 text-center text-xs text-dim" aria-live="polite">
        {sent
          ? "Your email app should open with the message ready to send. If it didn't, write to " + profile.email
          : "Opens your email app with everything filled in. No spam, ever."}
      </p>
    </form>
  );
}
