import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Reach out to The Quissett Landing with questions about the property, availability, or anything else.",
};

const HERO = "/images/hero.jpg";

export default function ContactPage() {
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
            Contact
          </h1>
        </div>
      </section>

      {/* ── CONTACT BODY ────────────────────────────────────────────────── */}
      <section className="section-padding" style={{ backgroundColor: "#F4EFE6" }}>
        <div className="container-wide grid grid-cols-1 md:grid-cols-12 gap-14 md:gap-20">

          {/* Left: info */}
          <div className="md:col-span-4">
            <p className="font-sans text-[10px] tracking-[0.3em] uppercase mb-8" style={{ color: "rgba(124,107,82,0.5)" }}>
              Get in touch
            </p>

            <div className="space-y-8">
              <div>
                <p className="font-sans text-[10px] tracking-widest uppercase mb-2" style={{ color: "rgba(124,107,82,0.4)" }}>Address</p>
                <p className="font-sans text-sm leading-relaxed" style={{ color: "#1D3A47" }}>
                  245 Woods Hole Road<br />
                  Falmouth, MA 02540
                </p>
              </div>
              <div>
                <p className="font-sans text-[10px] tracking-widest uppercase mb-2" style={{ color: "rgba(124,107,82,0.4)" }}>Phone</p>
                <a href="tel:6173475660" className="font-sans text-sm" style={{ color: "#1D3A47" }}>
                  617-347-5660
                </a>
              </div>
              <div>
                <p className="font-sans text-[10px] tracking-widest uppercase mb-2" style={{ color: "rgba(124,107,82,0.4)" }}>Email</p>
                <a href="mailto:thequissettlanding@gmail.com" className="font-sans text-sm break-all" style={{ color: "#1D3A47" }}>
                  thequissettlanding@gmail.com
                </a>
              </div>
              <div>
                <p className="font-sans text-[10px] tracking-widest uppercase mb-2" style={{ color: "rgba(124,107,82,0.4)" }}>Response time</p>
                <p className="font-sans text-sm leading-relaxed" style={{ color: "rgba(124,107,82,0.7)" }}>
                  We typically respond within a few hours. For urgent matters during your stay, call directly.
                </p>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="md:col-span-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
