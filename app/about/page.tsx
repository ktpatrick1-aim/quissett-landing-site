import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "The history of The Quissett Landing — a Woods Hole home that has sheltered Cape Cod summers for over a century.",
};

const HERO = "https://thequissettlanding.com/_assets/media/c4bf1db69652b7548e7fff1fbbae7a63.jpg";
const OUTDOOR = "https://thequissettlanding.com/_assets/media/d6f24877a321b646ed8c04841a9a6c41.jpg";

export default function AboutPage() {
  return (
    <>
      {/* ── HEADER ──────────────────────────────────────────────────────── */}
      <section className="relative pt-40 pb-20 md:pt-52 md:pb-28 overflow-hidden" style={{ backgroundColor: "#1A1A18" }}>
        <div className="absolute inset-0 opacity-20">
          <Image src={HERO} alt="" fill className="object-cover object-top" sizes="100vw" aria-hidden />
        </div>
        <div className="relative container-wide">
          <p className="font-sans text-[10px] tracking-[0.35em] uppercase mb-5" style={{ color: "rgba(244,239,230,0.4)" }}>
            The Quissett Landing
          </p>
          <h1 className="font-display text-cream leading-tight" style={{ fontSize: "clamp(3rem, 8vw, 6rem)", letterSpacing: "-0.02em" }}>
            Our Story
          </h1>
        </div>
      </section>

      {/* ── STORY BODY ──────────────────────────────────────────────────── */}
      <section className="section-padding" style={{ backgroundColor: "#F4EFE6" }}>
        <div className="container-wide grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">

          {/* Pull quote */}
          <div className="md:col-span-5">
            <blockquote
              className="font-display italic leading-snug sticky top-28"
              style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", color: "#1D3A47", letterSpacing: "-0.01em" }}
            >
              "A house that has sheltered Cape Cod summers for over a century — and has no intention of stopping."
            </blockquote>
          </div>

          {/* Story text */}
          <div className="md:col-span-7 font-sans text-sm leading-relaxed space-y-6" style={{ color: "rgba(124,107,82,0.8)" }}>
            <p>
              The Quissett Landing sits on a stretch of Woods Hole Road that hasn't
              changed much in fifty years. The stone wall along the front is original.
              The wide-plank floors inside have held up through generations of Cape Cod
              summers, and the kitchen has been used by enough good cooks that it's earned
              its keep many times over.
            </p>
            <p>
              Quissett is the corner of Falmouth that the rest of the world hasn't entirely
              found yet. The harbor is small and serious — not a party spot, not a tourist
              destination, just boats and water and people who have been coming here their
              whole lives. The trail out to the Knob takes twenty minutes and delivers one
              of the most quietly spectacular views on the lower Cape.
            </p>
            <p>
              The house was made available as a vacation rental because it deserves to be
              used — and because the people who have stayed here have made it better. Every
              group leaves something behind: a recipe card tucked in the kitchen drawer,
              a trail recommendation in the guest book, flowers from the garden. That's not
              sentimentality. It's just how good houses work.
            </p>
            <p>
              We've put thought into every detail — the linens, the kitchen equipment, the
              outdoor furniture, the things you don't notice until you don't have them.
              Joseph lives nearby and is genuinely reachable. If something isn't right,
              he wants to know.
            </p>
            <p>
              The bunk room on the third floor was not planned as the defining feature of
              the house. It just turned out that way.
            </p>
          </div>
        </div>
      </section>

      {/* ── PHOTO ───────────────────────────────────────────────────────── */}
      <section className="relative" style={{ height: "50vh", minHeight: "320px" }}>
        <Image src={OUTDOOR} alt="The back deck at The Quissett Landing" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </section>

      {/* ── HOST NOTE ───────────────────────────────────────────────────── */}
      <section className="section-padding" style={{ backgroundColor: "#1D3A47" }}>
        <div className="container-wide max-w-2xl">
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase mb-8" style={{ color: "rgba(244,239,230,0.35)" }}>
            A note from Joseph
          </p>
          <p className="font-display italic leading-snug mb-8" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", color: "rgba(244,239,230,0.9)", letterSpacing: "-0.01em" }}>
            "This is a house meant to be lived in. Use the kitchen. Sit on the deck.
            Walk to the Knob at sunrise. Take the ferry. I'm nearby if you need anything —
            but mostly, I hope you won't."
          </p>
          <p className="font-sans text-xs" style={{ color: "rgba(244,239,230,0.35)" }}>— Joseph, host</p>

          <div className="flex flex-wrap gap-4 mt-12">
            <Link href="/contact" className="font-sans text-sm tracking-wide px-8 py-4 rounded-full" style={{ backgroundColor: "#F4EFE6", color: "#1D3A47" }}>
              Get in Touch
            </Link>
            <Link href="/book" className="font-sans text-sm tracking-wide px-8 py-4 rounded-full border" style={{ borderColor: "rgba(244,239,230,0.25)", color: "rgba(244,239,230,0.65)" }}>
              Check Availability
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
