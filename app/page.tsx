import Image from "next/image";
import Link from "next/link";
import TestimonialCarousel from "@/components/TestimonialCarousel";

const IMAGES = {
  hero:    "/images/hero.jpg",
  interior:"/images/interior.jpg",
  bedroom1:"/images/bedroom1.jpg",
  bedroom2:"/images/bedroom2.jpg",
  bedroom3:"/images/bedroom3.jpg",
  bunkroom:"/images/bunkroom.jpg",
  outdoor: "/images/outdoor.jpg",
  deck:    "/images/deck.jpg",
};

const testimonials = [
  {
    quote:
      "This house is absolutely amazing from top to bottom — we felt completely at home. The original wood floors are just incredible. You can tell that a lot of thought went into the property and the comfort of the guests. My only complaint is that we didn't book a long enough stay.",
    author: "Kimberly G.",
  },
  {
    quote:
      "Had a great stay with extended family. The house was perfect for both adults and kids with plenty of space for all. We will be back — especially for those with kids, the third floor bunk room was a highlight.",
    author: "Mike",
  },
];

export default function Home() {
  return (
    <>
      {/* ── HERO: full dark, giant type ────────────────────────────────── */}
      <section className="relative min-h-[100svh] bg-harbor overflow-hidden flex flex-col">

        {/* Photo — right half, bleeds to edge */}
        <div className="absolute inset-y-0 right-0 w-full md:w-[58%]">
          <Image
            src={IMAGES.hero}
            alt="The Quissett Landing, Falmouth MA"
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 58vw"
          />
          {/* Left fade so type is readable */}
          <div className="absolute inset-0 bg-gradient-to-r from-harbor via-harbor/70 to-transparent" />
          {/* Bottom vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-harbor/60 to-transparent" />
        </div>

        {/* Content layer */}
        <div className="relative flex flex-col justify-end min-h-[100svh] pb-14 md:pb-20">
          <div className="container-wide">
            {/* Eyebrow */}
            <p
              className="font-sans text-[10px] tracking-[0.35em] uppercase mb-6 md:mb-8"
              style={{ color: "rgba(244,239,230,0.45)" }}
            >
              Woods Hole · Falmouth · Cape Cod
            </p>

            {/* Giant display title */}
            <h1
              className="font-display text-cream leading-[0.88] tracking-tight mb-8 md:mb-10"
              style={{ fontSize: "clamp(4rem, 12vw, 9rem)" }}
            >
              The<br />
              Quissett<br />
              Landing
            </h1>

            {/* Horizontal rule + tagline in one line */}
            <div className="flex items-start gap-6 max-w-lg">
              <div className="w-8 h-px bg-tide mt-[0.6em] shrink-0" />
              <p className="font-sans text-sm md:text-base leading-relaxed" style={{ color: "rgba(244,239,230,0.65)" }}>
                Where the harbor bell rings at dusk and the morning ferry
                slips past before breakfast. A house that earns its keep
                in memories.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mt-10 md:mt-12">
              <Link
                href="/book"
                className="font-sans text-sm tracking-wide px-7 py-3.5 rounded-full transition-colors hover:opacity-85"
                style={{ backgroundColor: "#4A7C8E", color: "#F4EFE6" }}
              >
                Check Availability
              </Link>
              <Link
                href="/property"
                className="font-sans text-sm tracking-wide px-7 py-3.5 rounded-full border transition-colors"
                style={{ borderColor: "rgba(244,239,230,0.3)", color: "rgba(244,239,230,0.75)" }}
              >
                Tour the House
              </Link>
            </div>
          </div>
        </div>

        {/* Floating stat strip at the very bottom */}
        <div
          className="relative border-t"
          style={{ borderColor: "rgba(244,239,230,0.1)" }}
        >
          <div className="container-wide">
            <div className="grid grid-cols-2 md:grid-cols-4" style={{ borderTop: "none" }}>
              {[
                ["4", "Bedrooms"],
                ["12", "Guests"],
                ["2.5", "Baths"],
                ["½ mi", "To Quissett Harbor"],
              ].map(([val, label], i) => (
                <div key={label} className="py-5 px-4 md:px-6 text-center" style={i > 0 ? { borderLeft: "1px solid rgba(244,239,230,0.1)" } : {}}>
                  <p className="font-display text-cream text-2xl md:text-3xl">{val}</p>
                  <p className="font-sans text-[10px] tracking-widest uppercase mt-0.5" style={{ color: "rgba(244,239,230,0.35)" }}>
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STORY: cream, oversized pull quote ─────────────────────────── */}
      <section className="section-padding" style={{ backgroundColor: "#F4EFE6" }}>
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-6 items-start">

            {/* Left col: label + body */}
            <div className="md:col-span-4 md:pt-3">
              <p className="font-sans text-[10px] tracking-[0.3em] uppercase mb-6" style={{ color: "#7C6B52" }}>
                The House
              </p>
              <div className="font-sans text-sm leading-relaxed space-y-4 max-w-prose" style={{ color: "rgba(124,107,82,0.8)" }}>
                <p>
                  Tucked along Woods Hole Road a half-mile from the harbor,
                  The Quissett Landing is the kind of house people argue
                  about on the drive home — who gets which room next year,
                  which morning on the deck was better, whether the walk
                  to the Knob beat the ferry to the Vineyard.
                </p>
                <p>
                  Four bedrooms. A bunk room that sleeps ten on its own.
                  A kitchen made for actually cooking. Original wide-plank
                  floors that have survived a century of Cape Cod summers.
                </p>
              </div>
              <Link
                href="/property"
                className="inline-flex items-center gap-2 mt-8 font-sans text-xs tracking-widest uppercase"
                style={{ color: "#1D3A47" }}
              >
                Explore the property
                <span style={{ borderBottom: "1px solid #1D3A47", paddingBottom: "1px" }}>→</span>
              </Link>
            </div>

            {/* Right col: big pull quote + photo */}
            <div className="md:col-span-8 md:pl-12">
              <blockquote
                className="font-display italic leading-tight mb-10"
                style={{
                  fontSize: "clamp(2rem, 4.5vw, 3.75rem)",
                  color: "#1D3A47",
                  letterSpacing: "-0.01em",
                }}
              >
                "Some houses hold you.<br />This one keeps you."
              </blockquote>
              <div className="relative aspect-[16/9] overflow-hidden" style={{ borderRadius: "2px" }}>
                <Image
                  src={IMAGES.outdoor}
                  alt="Outdoor dining at The Quissett Landing"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 66vw"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── GALLERY: editorial strip ────────────────────────────────────── */}
      <section style={{ backgroundColor: "#1D3A47" }}>
        <div className="container-wide py-4 md:py-6">
          <div className="flex items-center justify-between mb-4">
            <p className="font-sans text-[10px] tracking-[0.3em] uppercase" style={{ color: "rgba(244,239,230,0.4)" }}>
              Inside
            </p>
            <Link
              href="/property"
              className="font-sans text-[10px] tracking-[0.2em] uppercase"
              style={{ color: "rgba(244,239,230,0.4)" }}
            >
              Full gallery →
            </Link>
          </div>
        </div>

        {/* Edge-to-edge horizontal strip — no container padding */}
        <div className="flex gap-1 overflow-x-auto pb-1 scrollbar-none px-4 md:px-10">
          {[
            { src: IMAGES.deck, label: "The deck", aspect: "aspect-[3/4]" },
            { src: IMAGES.bedroom2, label: "King bedroom", aspect: "aspect-[4/3]" },
            { src: IMAGES.bunkroom, label: "Bunk room", aspect: "aspect-[3/4]" },
            { src: IMAGES.bedroom1, label: "Queen bedroom", aspect: "aspect-[4/3]" },
            { src: IMAGES.interior, label: "Living area", aspect: "aspect-[3/4]" },
          ].map(({ src, label, aspect }) => (
            <div key={label} className={`relative shrink-0 ${aspect} w-56 md:w-72 overflow-hidden`} style={{ borderRadius: "2px" }}>
              <Image
                src={src}
                alt={label}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="300px"
              />
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-harbor/70 to-transparent">
                <p className="font-sans text-[10px] tracking-widest uppercase" style={{ color: "rgba(244,239,230,0.6)" }}>
                  {label}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="pb-6 md:pb-8" />
      </section>

      {/* ── LOCATION: split panel ───────────────────────────────────────── */}
      <section className="grid grid-cols-1 md:grid-cols-2" style={{ minHeight: "560px" }}>
        {/* Photo panel */}
        <div className="relative min-h-[380px] md:min-h-0">
          <Image
            src={IMAGES.bedroom3}
            alt="View from The Quissett Landing"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Text panel — dark */}
        <div
          className="flex flex-col justify-center px-8 md:px-16 py-16"
          style={{ backgroundColor: "#1A1A18", color: "#F4EFE6" }}
        >
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase mb-8" style={{ color: "rgba(244,239,230,0.35)" }}>
            The Location
          </p>

          <h2
            className="font-display leading-tight mb-8"
            style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", letterSpacing: "-0.01em" }}
          >
            Everything Cape Cod.
            <br />
            Nothing overdone.
          </h2>

          <div className="space-y-3 mb-10">
            {[
              ["½ mi", "Quissett Harbor"],
              ["0.8 mi", "Nobska Lighthouse"],
              ["1.2 mi", "Woods Hole Village + WHOI"],
              ["3 mi", "Falmouth Main Street"],
              ["3.5 mi", "Martha's Vineyard Ferry"],
            ].map(([dist, place]) => (
              <div key={place} className="flex gap-4 items-baseline border-b pb-3" style={{ borderColor: "rgba(244,239,230,0.08)" }}>
                <span className="font-sans text-xs w-14 shrink-0" style={{ color: "#4A7C8E" }}>{dist}</span>
                <span className="font-sans text-sm" style={{ color: "rgba(244,239,230,0.7)" }}>{place}</span>
              </div>
            ))}
          </div>

          <Link
            href="/area"
            className="font-sans text-xs tracking-widest uppercase self-start"
            style={{ color: "rgba(244,239,230,0.5)", borderBottom: "1px solid rgba(244,239,230,0.2)", paddingBottom: "2px" }}
          >
            Area guide →
          </Link>
        </div>
      </section>

      {/* ── TESTIMONIALS ────────────────────────────────────────────────── */}
      <section className="section-padding" style={{ backgroundColor: "#F4EFE6" }}>
        <div className="container-wide">
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase mb-12" style={{ color: "rgba(124,107,82,0.5)" }}>
            Guest Reviews
          </p>
          <TestimonialCarousel testimonials={testimonials} dark={false} />
        </div>
      </section>

      {/* ── BOOKING CTA: full-bleed dark ────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "#1D3A47" }}>
        {/* Subtle background photo */}
        <div className="absolute inset-0 opacity-10">
          <Image
            src={IMAGES.hero}
            alt=""
            fill
            className="object-cover object-top"
            sizes="100vw"
            aria-hidden
          />
        </div>

        <div className="relative container-wide py-24 md:py-36">
          <div className="max-w-xl">
            <p className="font-sans text-[10px] tracking-[0.3em] uppercase mb-6" style={{ color: "rgba(244,239,230,0.35)" }}>
              Book Direct
            </p>
            <h2
              className="font-display text-cream leading-tight mb-6"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", letterSpacing: "-0.02em" }}
            >
              Skip the platforms.
              <br />
              Book the house.
            </h2>
            <p className="font-sans text-sm leading-relaxed mb-10" style={{ color: "rgba(244,239,230,0.6)" }}>
              No service fees. No middleman. Direct access to the host,
              instant confirmation, and the same secure payment you'd
              expect anywhere.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/book"
                className="font-sans text-sm tracking-wide px-8 py-4 rounded-full"
                style={{ backgroundColor: "#F4EFE6", color: "#1D3A47" }}
              >
                Check Availability
              </Link>
              <Link
                href="/contact"
                className="font-sans text-sm tracking-wide px-8 py-4 rounded-full border"
                style={{ borderColor: "rgba(244,239,230,0.25)", color: "rgba(244,239,230,0.65)" }}
              >
                Ask a question
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
