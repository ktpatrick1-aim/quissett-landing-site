import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Area",
  description:
    "A hand-curated guide to Woods Hole, Quissett Harbor, Falmouth, and the best of Cape Cod — from the people who know it best.",
};

const HERO = "/images/hero.jpg";

const sections = [
  {
    category: "On the Water",
    color: "#4A7C8E",
    places: [
      {
        name: "Quissett Harbor",
        distance: "½ mi",
        description:
          "A pocket harbor where the sailing families have kept the same moorings for generations. Walk down in the evening when the boats are coming in. It's the kind of place that makes you want to own a boat.",
      },
      {
        name: "The Knob",
        distance: "0.9 mi",
        description:
          "A short walk from the house leads to this rocky peninsula jutting into Buzzards Bay. Best at sunrise or the hour before sunset. No crowds. One of the most underrated views on the Cape.",
      },
      {
        name: "Old Silver Beach",
        distance: "5 mi",
        description:
          "The best family beach in Falmouth — calm, warm water, a snack bar that stays open late. Gets busy in peak July, but the mornings are yours.",
      },
      {
        name: "Martha's Vineyard Ferry",
        distance: "3.5 mi",
        description:
          "The Steamship Authority in Woods Hole runs ferries to the Vineyard year-round. Book ahead in summer — it fills fast. The crossing is 45 minutes and worth every one of them.",
      },
    ],
  },
  {
    category: "Things to Do",
    color: "#6B7C5E",
    places: [
      {
        name: "Woods Hole Oceanographic Institution",
        distance: "1.2 mi",
        description:
          "WHOI (pronounced hoo-ee, if you want to sound local) runs free exhibits open to the public. The history of ocean exploration is genuinely fascinating, even if science wasn't your subject.",
      },
      {
        name: "Nobska Lighthouse",
        distance: "0.8 mi",
        description:
          "One of the most photographed spots on the Cape, and for good reason — the lighthouse sits on a bluff above the sound with a view that reaches all the way to the Vineyard on a clear day.",
      },
      {
        name: "Shining Sea Bikeway",
        distance: "3 mi",
        description:
          "A 10.7-mile paved trail running from Falmouth to Woods Hole along the coast. Rent bikes in town. The stretch past Surf Drive is particularly good.",
      },
      {
        name: "Cape Cod Canal",
        distance: "22 mi",
        description:
          "A morning bike ride along the canal is a Cape Cod institution. Seven miles each way, flat, with serious boat traffic to watch. Bring coffee.",
      },
    ],
  },
  {
    category: "Eat & Drink",
    color: "#C4AA84",
    places: [
      {
        name: "The Captain Kidd",
        distance: "1.2 mi",
        description:
          "A proper waterfront bar in Woods Hole. Oysters, cold beer, and a back deck on Eel Pond. It's been there forever and it shows — in the best way.",
      },
      {
        name: "Quicks Hole Taproom",
        distance: "3 mi",
        description:
          "The best beer on the lower Cape, poured in a no-nonsense taproom in Falmouth. Local ingredients, rotating seasonal taps, and a food menu that over-delivers.",
      },
      {
        name: "RooBar",
        distance: "3 mi",
        description:
          "Falmouth's most consistent dinner spot. Creative small plates, excellent cocktails, and a wine list that doesn't phone it in. Make a reservation.",
      },
      {
        name: "Moonakis Café",
        distance: "4 mi",
        description:
          "The breakfast spot that has a line out the door by 8 AM on weekends for a reason. Get the Eggs Benedict and don't rush. Cash only.",
      },
    ],
  },
  {
    category: "Day Trips",
    color: "#7C6B52",
    places: [
      {
        name: "Provincetown",
        distance: "60 mi",
        description:
          "The wild end of the Cape. Spectacular dunes, a vibrant arts scene, and some of the best people-watching in New England. Go mid-week to avoid the weekend crowds.",
      },
      {
        name: "Nantucket Ferry",
        distance: "22 mi",
        description:
          "The high-speed ferry from Hyannis gets you to Nantucket in an hour. Rent bikes and spend the day on the island. The harbor town alone is worth the trip.",
      },
      {
        name: "Heritage Museums & Gardens",
        distance: "15 mi",
        description:
          "100 acres in Sandwich with a carousel, vintage cars, and gardens that peak in late spring. Underrated and genuinely beautiful.",
      },
    ],
  },
];

export default function AreaPage() {
  return (
    <>
      {/* ── HEADER ──────────────────────────────────────────────────────── */}
      <section className="relative pt-40 pb-20 md:pt-52 md:pb-28 overflow-hidden" style={{ backgroundColor: "#1D3A47" }}>
        <div className="absolute inset-0 opacity-15">
          <Image src={HERO} alt="" fill className="object-cover object-center" sizes="100vw" aria-hidden />
        </div>
        <div className="relative container-wide">
          <p className="font-sans text-[10px] tracking-[0.35em] uppercase mb-5" style={{ color: "rgba(244,239,230,0.4)" }}>
            The Quissett Landing
          </p>
          <h1 className="font-display text-cream leading-tight" style={{ fontSize: "clamp(3rem, 8vw, 6rem)", letterSpacing: "-0.02em" }}>
            The Area
          </h1>
          <p className="font-sans text-sm mt-6 max-w-md leading-relaxed" style={{ color: "rgba(244,239,230,0.55)" }}>
            A hand-curated guide to Woods Hole, Quissett Harbor, and the
            best of the lower Cape — written by people who know it well.
          </p>
        </div>
      </section>

      {/* ── INTRO ───────────────────────────────────────────────────────── */}
      <section className="section-padding" style={{ backgroundColor: "#F4EFE6" }}>
        <div className="container-wide max-w-2xl">
          <p className="font-display italic leading-snug" style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", color: "#1D3A47", letterSpacing: "-0.01em" }}>
            "Quissett is the quieter side of Falmouth. No traffic, no T-shirt
            shops. Just a pocket harbor where sailing families have kept the
            same moorings for generations, and a hiking trail to the Knob
            that earns its view."
          </p>
        </div>
      </section>

      {/* ── GUIDE SECTIONS ──────────────────────────────────────────────── */}
      {sections.map(({ category, color, places }, si) => (
        <section
          key={category}
          className="section-padding"
          style={{ backgroundColor: si % 2 === 0 ? "#E8E0D2" : "#F4EFE6" }}
        >
          <div className="container-wide">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-6 h-px" style={{ backgroundColor: color }} />
              <p className="font-sans text-[10px] tracking-[0.3em] uppercase" style={{ color }}>
                {category}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
              {places.map(({ name, distance, description }) => (
                <div key={name} className="border-t pt-6" style={{ borderColor: "rgba(124,107,82,0.15)" }}>
                  <div className="flex items-baseline justify-between gap-4 mb-3">
                    <h3 className="font-display" style={{ fontSize: "1.25rem", color: "#1D3A47" }}>
                      {name}
                    </h3>
                    <span className="font-sans text-xs shrink-0" style={{ color }}>
                      {distance}
                    </span>
                  </div>
                  <p className="font-sans text-sm leading-relaxed" style={{ color: "rgba(124,107,82,0.75)" }}>
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ── BOOK CTA ────────────────────────────────────────────────────── */}
      <section className="section-padding" style={{ backgroundColor: "#1D3A47" }}>
        <div className="container-wide flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <div>
            <p className="font-sans text-[10px] tracking-[0.3em] uppercase mb-4" style={{ color: "rgba(244,239,230,0.35)" }}>
              Ready?
            </p>
            <h2 className="font-display text-cream leading-tight" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", letterSpacing: "-0.02em" }}>
              Put yourself here.
            </h2>
          </div>
          <Link
            href="/book"
            className="font-sans text-sm tracking-wide px-8 py-4 rounded-full shrink-0"
            style={{ backgroundColor: "#F4EFE6", color: "#1D3A47" }}
          >
            Check Availability
          </Link>
        </div>
      </section>
    </>
  );
}
