import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BookingWidget from "@/components/BookingWidget";

export const metadata: Metadata = {
  title: "Book Direct",
  description:
    "Check availability and book The Quissett Landing direct — no platform fees, instant confirmation, secure payment.",
};

const HERO = "/images/hero.jpg";

export default function BookPage() {
  return (
    <>
      {/* ── HEADER ──────────────────────────────────────────────────────── */}
      <section className="relative pt-40 pb-16 md:pt-52 md:pb-20 overflow-hidden" style={{ backgroundColor: "#1D3A47" }}>
        <div className="absolute inset-0 opacity-15">
          <Image src={HERO} alt="" fill className="object-cover" sizes="100vw" aria-hidden />
        </div>
        <div className="relative container-wide">
          <p className="font-sans text-[10px] tracking-[0.35em] uppercase mb-5" style={{ color: "rgba(244,239,230,0.4)" }}>
            The Quissett Landing
          </p>
          <h1 className="font-display text-cream leading-tight" style={{ fontSize: "clamp(3rem, 8vw, 6rem)", letterSpacing: "-0.02em" }}>
            Book Direct
          </h1>
          <p className="font-sans text-sm mt-6 max-w-md leading-relaxed" style={{ color: "rgba(244,239,230,0.55)" }}>
            No service fees. Secure payment. Direct access to the host.
            Same availability as Airbnb and VRBO — without the platform cut.
          </p>
        </div>
      </section>

      {/* ── BOOKING WIDGET ──────────────────────────────────────────────── */}
      <section className="section-padding" style={{ backgroundColor: "#F4EFE6" }}>
        <div className="container-wide grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Widget area */}
          <div className="lg:col-span-8">
            <BookingWidget />
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-28 space-y-8">
              <div>
                <p className="font-sans text-[10px] tracking-widest uppercase mb-4" style={{ color: "rgba(124,107,82,0.5)" }}>
                  The House
                </p>
                <div className="space-y-3">
                  {[
                    ["Bedrooms", "4"],
                    ["Max guests", "12"],
                    ["Bathrooms", "2.5"],
                    ["Check-in", "4:00 PM"],
                    ["Check-out", "10:00 AM"],
                  ].map(([label, val]) => (
                    <div key={label} className="flex justify-between border-b pb-2" style={{ borderColor: "rgba(124,107,82,0.12)" }}>
                      <span className="font-sans text-xs" style={{ color: "rgba(124,107,82,0.5)" }}>{label}</span>
                      <span className="font-sans text-xs" style={{ color: "#1D3A47" }}>{val}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="font-sans text-[10px] tracking-widest uppercase mb-4" style={{ color: "rgba(124,107,82,0.5)" }}>
                  Why book direct?
                </p>
                <ul className="space-y-3">
                  {[
                    "No Airbnb or VRBO service fees",
                    "Direct contact with the host",
                    "Same secure payment processing",
                    "Instant confirmation",
                    "Flexible communication",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 items-start">
                      <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: "#4A7C8E" }} />
                      <span className="font-sans text-xs leading-relaxed" style={{ color: "rgba(124,107,82,0.7)" }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2">
                <p className="font-sans text-xs leading-relaxed" style={{ color: "rgba(124,107,82,0.5)" }}>
                  Have questions before booking?{" "}
                  <Link href="/contact" className="underline underline-offset-2" style={{ color: "#1D3A47" }}>
                    Send us a note
                  </Link>
                  {" "}and we'll get back to you within a few hours.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* ── REASSURANCE ─────────────────────────────────────────────────── */}
      <section className="section-padding" style={{ backgroundColor: "#E8E0D2" }}>
        <div className="container-wide">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {[
              { heading: "Secure payment", body: "Processed by OwnerRez with the same security standards used by major booking platforms." },
              { heading: "Instant confirmation", body: "You'll receive a booking confirmation immediately. No waiting, no back-and-forth." },
              { heading: "Direct host access", body: "Joseph lives nearby and is reachable by phone or email throughout your stay." },
            ].map(({ heading, body }) => (
              <div key={heading}>
                <p className="font-display mb-3" style={{ fontSize: "1.25rem", color: "#1D3A47" }}>{heading}</p>
                <p className="font-sans text-xs leading-relaxed" style={{ color: "rgba(124,107,82,0.7)" }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
