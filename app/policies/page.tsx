import type { Metadata } from "next";
import Image from "next/image";
import Accordion from "@/components/Accordion";

export const metadata: Metadata = {
  title: "Policies & House Rules",
  description: "House rules, cancellation policy, and check-in/out details for The Quissett Landing.",
};

const HERO = "https://thequissettlanding.com/_assets/media/c4bf1db69652b7548e7fff1fbbae7a63.jpg";

const policies = [
  {
    title: "Check-in & Check-out",
    content: `Check-in is at 4:00 PM. Early check-in may be available on request — reach out at least 48 hours in advance and we'll do our best.\n\nCheck-out is at 10:00 AM. Late check-out is occasionally possible depending on same-day turnover. Ask and we'll let you know.`,
  },
  {
    title: "Guest Count & Occupancy",
    content: `The house sleeps up to 12 guests. Please book for the actual number of guests staying — do not exceed the stated maximum. Unauthorized guests beyond the booked count are not permitted and may result in cancellation without refund.`,
  },
  {
    title: "Pets",
    content: `We love pets — please ask before bringing one. Some stays may be approved for well-behaved dogs with an additional pet fee. Cats and other animals: reach out and we'll discuss. Pets must not be left unattended in the house.`,
  },
  {
    title: "Smoking & Vaping",
    content: `No smoking or vaping anywhere inside the house. Smoking is permitted outside in the yard, away from windows and doors. Please dispose of butts properly. A cleaning fee will be applied if the interior shows evidence of indoor smoking.`,
  },
  {
    title: "Noise & Neighbors",
    content: `The Quissett Landing is in a residential neighborhood. Please be mindful of noise after 10:00 PM, particularly outdoors. We want you to have a great time — and we want you to be able to come back.`,
  },
  {
    title: "Parking",
    content: `Off-street parking is available for up to 4 vehicles. Do not block the driveway access or park on the road in a way that obstructs neighbors.`,
  },
  {
    title: "Cancellation Policy",
    content: `Full refund if cancelled at least 14 days before check-in.\n\n50% refund if cancelled 7–14 days before check-in.\n\nNo refund for cancellations within 7 days of check-in.\n\nWe strongly recommend travel insurance for peace of mind, especially for longer stays in peak season.`,
  },
  {
    title: "Damage & Liability",
    content: `We ask that guests treat the house with the same care they'd want for their own home. Accidental damage happens — please report it promptly. Intentional damage or damage resulting from negligence will be charged at cost.\n\nGuests assume responsibility for their safety and the safety of their party while on the property.`,
  },
  {
    title: "Cleaning",
    content: `A cleaning fee is included in your booking. We ask that you leave the house in reasonable condition — dishes done or in the dishwasher, trash out, and nothing left behind that requires more than a standard clean. Excessive cleaning will be billed at cost.`,
  },
  {
    title: "House Rules Summary",
    content: `No shoes on the hardwood floors (slippers provided).\nNo parties or events without prior approval.\nNo candles — we have great lighting and would like to keep the house standing.\nTreat the original hardwood floors gently — no furniture dragging.\nReturn outdoor furniture to its original position before departure.\nAll recyclables in the correct bins.`,
  },
];

export default function PoliciesPage() {
  return (
    <>
      {/* ── HEADER ──────────────────────────────────────────────────────── */}
      <section className="relative pt-40 pb-20 md:pt-52 md:pb-28 overflow-hidden" style={{ backgroundColor: "#1D3A47" }}>
        <div className="absolute inset-0 opacity-15">
          <Image src={HERO} alt="" fill className="object-cover" sizes="100vw" aria-hidden />
        </div>
        <div className="relative container-wide">
          <p className="font-sans text-[10px] tracking-[0.35em] uppercase mb-5" style={{ color: "rgba(244,239,230,0.4)" }}>
            The Quissett Landing
          </p>
          <h1 className="font-display text-cream leading-tight" style={{ fontSize: "clamp(3rem, 8vw, 6rem)", letterSpacing: "-0.02em" }}>
            Policies &<br />House Rules
          </h1>
        </div>
      </section>

      {/* ── POLICIES ────────────────────────────────────────────────────── */}
      <section className="section-padding" style={{ backgroundColor: "#F4EFE6" }}>
        <div className="container-wide max-w-3xl">
          <p className="font-sans text-sm leading-relaxed mb-14" style={{ color: "rgba(124,107,82,0.7)" }}>
            We've tried to keep things reasonable. The rules below exist because
            they've mattered at some point — not as fine print, but as actual
            guidance for having a good stay.
          </p>
          <Accordion items={policies} />
        </div>
      </section>
    </>
  );
}
