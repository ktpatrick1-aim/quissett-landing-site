import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Property",
  description:
    "Four bedrooms, a bunk room that sleeps ten, and a back deck facing nothing but sky. Explore every corner of The Quissett Landing.",
};

const IMAGES = {
  hero:    "https://thequissettlanding.com/_assets/media/c4bf1db69652b7548e7fff1fbbae7a63.jpg",
  interior:"https://thequissettlanding.com/_assets/media/d20b883311389c616a325fd9acd188c4.jpg",
  bedroom1:"https://thequissettlanding.com/_assets/media/192f18ac6509d4c8104acce841d295f8.jpg",
  bedroom2:"https://thequissettlanding.com/_assets/media/b92d4d7e86781c9198311f53e21a0019.jpg",
  bedroom3:"https://thequissettlanding.com/_assets/media/9352a6abd9fc304f24647bf5d2965b0c.jpg",
  bunkroom:"https://thequissettlanding.com/_assets/media/ba9e32c416898d83572bc9812f93c260.jpg",
  outdoor: "https://thequissettlanding.com/_assets/media/d6f24877a321b646ed8c04841a9a6c41.jpg",
  deck:    "https://thequissettlanding.com/_assets/media/a411d1d942bd983ed10563609e6c03d4.jpg",
};

const amenities = [
  {
    category: "Sleeping",
    items: ["King bedroom", "Queen bedroom (×2)", "Bunk room — sleeps 10", "Luxury linens", "Blackout curtains"],
  },
  {
    category: "Kitchen",
    items: ["Fully equipped kitchen", "Drip & espresso coffee", "Dishwasher", "Gas range", "All cookware & dishes"],
  },
  {
    category: "Living",
    items: ["Original wide-plank hardwood floors", "Smart TV", "High-speed Wi-Fi", "Central A/C & heat", "Board games & books"],
  },
  {
    category: "Outdoor",
    items: ["Spacious back deck", "Outdoor dining table", "Plush deck furniture", "Cornhole & giant Jenga", "Landscaped yard"],
  },
  {
    category: "Practical",
    items: ["In-unit washer & dryer", "Off-street parking (4 cars)", "Baby gear available on request", "Keyless entry", "Pack-n-play crib"],
  },
];

const gallery = [
  { src: IMAGES.hero,     alt: "Exterior — front of house", wide: true },
  { src: IMAGES.interior, alt: "Interior living area",       wide: false },
  { src: IMAGES.outdoor,  alt: "Al fresco dining",           wide: false },
  { src: IMAGES.deck,     alt: "Back deck lounge",           wide: true },
  { src: IMAGES.bedroom2, alt: "King bedroom",               wide: false },
  { src: IMAGES.bedroom1, alt: "Queen bedroom",              wide: false },
  { src: IMAGES.bedroom3, alt: "Second queen bedroom",       wide: false },
  { src: IMAGES.bunkroom, alt: "Third-floor bunk room",      wide: false },
];

export default function PropertyPage() {
  return (
    <>
      {/* ── PAGE HEADER ─────────────────────────────────────────────────── */}
      <section
        className="relative pt-40 pb-20 md:pt-52 md:pb-28 overflow-hidden"
        style={{ backgroundColor: "#1D3A47" }}
      >
        <div className="absolute inset-0 opacity-15">
          <Image src={IMAGES.hero} alt="" fill className="object-cover object-top" sizes="100vw" aria-hidden />
        </div>
        <div className="relative container-wide">
          <p className="font-sans text-[10px] tracking-[0.35em] uppercase mb-5" style={{ color: "rgba(244,239,230,0.4)" }}>
            The Quissett Landing
          </p>
          <h1
            className="font-display text-cream leading-tight"
            style={{ fontSize: "clamp(3rem, 8vw, 6rem)", letterSpacing: "-0.02em" }}
          >
            The Property
          </h1>
        </div>
      </section>

      {/* ── OVERVIEW ────────────────────────────────────────────────────── */}
      <section className="section-padding" style={{ backgroundColor: "#F4EFE6" }}>
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-7">
              <p
                className="font-display italic leading-snug mb-8"
                style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)", color: "#1D3A47", letterSpacing: "-0.01em" }}
              >
                "Four bedrooms. A bunk room that sleeps ten. A kitchen
                made for actually cooking. And a back deck facing
                nothing but sky."
              </p>
              <div className="font-sans text-sm leading-relaxed space-y-4" style={{ color: "rgba(124,107,82,0.8)" }}>
                <p>
                  The Quissett Landing is a three-story New England home on Woods Hole Road,
                  a five-minute walk from Quissett Harbor and a half-mile from the trails
                  that wind out to the Knob. It sleeps twelve comfortably — and it's been
                  designed to make twelve feel easy.
                </p>
                <p>
                  The original wide-plank hardwood floors run through the main living areas.
                  The kitchen is genuinely equipped — not just a coffee maker and a
                  corkscrew. The bunk room on the third floor has become the stuff of family
                  legend: every group that's stayed here argues about who gets it next time.
                </p>
                <p>
                  Outside, the back deck and yard are where the days actually end — outdoor
                  dining, plush seating, lawn games, and the kind of quiet that's hard to
                  find this close to the water on Cape Cod.
                </p>
              </div>
            </div>
            <div className="md:col-span-5 md:pl-8">
              <div className="sticky top-28 space-y-6">
                {[
                  ["Bedrooms", "4 (1 King, 2 Queens, 1 Bunk room)"],
                  ["Guests", "Up to 12"],
                  ["Bathrooms", "2.5"],
                  ["Floors", "3"],
                  ["Parking", "4 cars, off-street"],
                  ["Check-in", "4:00 PM"],
                  ["Check-out", "10:00 AM"],
                ].map(([label, val]) => (
                  <div key={label} className="flex justify-between items-baseline border-b pb-3" style={{ borderColor: "rgba(124,107,82,0.15)" }}>
                    <span className="font-sans text-xs tracking-widest uppercase" style={{ color: "rgba(124,107,82,0.5)" }}>{label}</span>
                    <span className="font-sans text-sm" style={{ color: "#1D3A47" }}>{val}</span>
                  </div>
                ))}
                <Link
                  href="/book"
                  className="block w-full text-center font-sans text-sm tracking-wide py-4 rounded-full mt-4"
                  style={{ backgroundColor: "#1D3A47", color: "#F4EFE6" }}
                >
                  Check Availability
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PHOTO GALLERY ───────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#1A1A18" }} className="py-6 md:py-10">
        <div className="container-wide mb-5">
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase" style={{ color: "rgba(244,239,230,0.35)" }}>
            Gallery
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1 px-4 md:px-10">
          {gallery.map(({ src, alt, wide }) => (
            <div
              key={alt}
              className={`relative overflow-hidden ${wide ? "col-span-2" : "col-span-1"}`}
              style={{ aspectRatio: wide ? "16/7" : "4/3", borderRadius: "1px" }}
            >
              <Image
                src={src}
                alt={alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes={wide ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}
              />
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
                <p className="font-sans text-[10px] tracking-widest uppercase" style={{ color: "rgba(244,239,230,0.55)" }}>
                  {alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SLEEPING ARRANGEMENTS ───────────────────────────────────────── */}
      <section className="section-padding" style={{ backgroundColor: "#F4EFE6" }}>
        <div className="container-wide">
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase mb-10" style={{ color: "rgba(124,107,82,0.5)" }}>
            Sleeping Arrangements
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-1">
            {[
              { floor: "2nd Floor", name: "King Bedroom", detail: "King bed · en suite bath" },
              { floor: "2nd Floor", name: "Queen Bedroom", detail: "Queen bed · shared bath" },
              { floor: "2nd Floor", name: "Queen Bedroom", detail: "Queen bed · shared bath" },
              { floor: "3rd Floor", name: "The Bunk Room", detail: "5 bunk beds · sleeps 10 · half bath" },
            ].map(({ floor, name, detail }) => (
              <div
                key={name + floor}
                className="p-6 flex flex-col gap-2"
                style={{ backgroundColor: "#E8E0D2" }}
              >
                <p className="font-sans text-[10px] tracking-widest uppercase" style={{ color: "rgba(124,107,82,0.5)" }}>{floor}</p>
                <p className="font-display text-lg" style={{ color: "#1D3A47" }}>{name}</p>
                <p className="font-sans text-xs leading-relaxed" style={{ color: "rgba(124,107,82,0.7)" }}>{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AMENITIES ───────────────────────────────────────────────────── */}
      <section className="section-padding" style={{ backgroundColor: "#1D3A47" }}>
        <div className="container-wide">
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase mb-12" style={{ color: "rgba(244,239,230,0.35)" }}>
            Amenities
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
            {amenities.map(({ category, items }) => (
              <div key={category}>
                <p className="font-sans text-[10px] tracking-widest uppercase mb-4" style={{ color: "#4A7C8E" }}>
                  {category}
                </p>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item} className="font-sans text-xs leading-relaxed" style={{ color: "rgba(244,239,230,0.6)" }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BUNK ROOM CALLOUT ───────────────────────────────────────────── */}
      <section className="grid grid-cols-1 md:grid-cols-2" style={{ minHeight: "440px" }}>
        <div className="relative min-h-[300px] md:min-h-0">
          <Image src={IMAGES.bunkroom} alt="The bunk room" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
        </div>
        <div className="flex flex-col justify-center px-8 md:px-16 py-14" style={{ backgroundColor: "#F4EFE6" }}>
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase mb-5" style={{ color: "rgba(124,107,82,0.5)" }}>
            Third Floor
          </p>
          <h2 className="font-display leading-tight mb-5" style={{ fontSize: "clamp(2rem, 3vw, 2.75rem)", color: "#1D3A47", letterSpacing: "-0.01em" }}>
            The Bunk Room
          </h2>
          <p className="font-sans text-sm leading-relaxed max-w-sm" style={{ color: "rgba(124,107,82,0.75)" }}>
            Five bunk beds on the entire third floor. Sleeps ten. Every group
            that stays here has the same argument: who gets the bunk room, and
            why didn't they book more nights. It has become, by general
            consensus, the best part of the house.
          </p>
        </div>
      </section>

      {/* ── BOOK CTA ────────────────────────────────────────────────────── */}
      <section className="section-padding" style={{ backgroundColor: "#1A1A18" }}>
        <div className="container-wide flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <h2
            className="font-display text-cream leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", letterSpacing: "-0.02em" }}
          >
            Ready to book<br />the house?
          </h2>
          <div className="flex flex-col sm:flex-row gap-3">
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
              style={{ borderColor: "rgba(244,239,230,0.2)", color: "rgba(244,239,230,0.6)" }}
            >
              Ask a question
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
