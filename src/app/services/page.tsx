import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { ServiceCard } from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Faq from "@/components/sections/Faq";
import Cta from "@/components/sections/Cta";
import StackStrip from "@/components/sections/StackStrip";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description: "Full-stack development, AI automation, chatbots, scraping, databases and SaaS builds.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Services"
        big="build"
        title={"Complete technical\nsolutions, end to end."}
        sub="Whether you need a product built from scratch, an automation that saves your team hours every week, or an extra senior pair of hands, here's how I can help."
      />
      <section className="pb-24 sm:pb-32">
        <div className="wrap grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <ServiceCard key={s.slug} s={s} i={i} />
          ))}
        </div>
      </section>
      <StackStrip />
      <Process />
      <Faq />
      <Cta />
    </>
  );
}
