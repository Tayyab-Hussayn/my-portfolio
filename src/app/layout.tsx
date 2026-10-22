import type { Metadata, Viewport } from "next";
import { Inter, Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { profile } from "@/lib/data";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const display = Inter_Tight({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://tayyabhussayn.vercel.app"),
  title: {
    default: `${profile.name}: AI & Automation Developer`,
    template: `%s · ${profile.name}`,
  },
  description: profile.intro,
  keywords: ["Tayyab Hussayn", "AI & Automation Developer", "Full Stack Developer", "Next.js", "AI automation", "n8n", "Lahore", "Pakistan"],
  authors: [{ name: profile.name, url: profile.github }],
  openGraph: {
    title: `${profile.name}: AI & Automation Developer`,
    description: profile.intro,
    images: ["/me/og.jpg"],
    type: "website",
  },
  twitter: { card: "summary_large_image", images: ["/me/og.jpg"] },
};

export const viewport: Viewport = { themeColor: "#ffffff" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable} ${mono.variable}`}>
      <body>
        <SmoothScroll />
        <Nav />
        <main>{children}</main>
        <Footer />
        <div className="grain" aria-hidden />
      </body>
    </html>
  );
}
