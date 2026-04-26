"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function StickyBookingBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300"
      style={{
        transform: visible ? "translateY(0)" : "translateY(100%)",
        backgroundColor: "#1D3A47",
        borderTop: "1px solid rgba(244,239,230,0.1)",
      }}
    >
      <div className="container-wide py-3 flex items-center justify-between gap-4">
        <div className="hidden sm:block">
          <p className="font-sans text-xs" style={{ color: "rgba(244,239,230,0.5)" }}>
            Book direct — no Airbnb or VRBO service fees
          </p>
        </div>
        <div className="flex items-center gap-3 ml-auto">
          <p className="font-sans text-xs" style={{ color: "rgba(244,239,230,0.4)" }}>
            The Quissett Landing
          </p>
          <Link
            href="/book"
            className="font-sans text-sm tracking-wide px-6 py-2.5 rounded-full shrink-0"
            style={{ backgroundColor: "#4A7C8E", color: "#F4EFE6" }}
          >
            Check Availability →
          </Link>
        </div>
      </div>
    </div>
  );
}
