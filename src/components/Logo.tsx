import Link from "next/link";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`font-display text-[19px] font-semibold tracking-tight ${className}`} aria-label="Tayyab Hussain, home">
      tayyab<span className="text-volt-ink">.</span>
      <sup className="ml-0.5 text-[9px] font-medium text-muted">®</sup>
    </Link>
  );
}
