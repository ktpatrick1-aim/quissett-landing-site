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
        <div className="hidden sm:flex flex-col gap-0.5">
          <p className="font-sans text-xs font-medium" style={{ color: "#F4EFE6" }}>
            Book direct and keep the platform fee.
          </p>
          <p className="font-sans text-[11px]" style={{ color: "rgba(244,239,230,0.45)" }}>
            Airbnb and VRBO charge guests 14–16% on top. Here, that stays in your pocket.
          </p>
        </div>
        <div className="flex items-center gap-3 ml-auto">
          <Link
            href="/book"
            className="font-sans text-sm tracking-wide px-6 py-2.5 rounded-full shrink-0 font-medium"
            style={{ backgroundColor: "#4A7C8E", color: "#F4EFE6" }}
          >
            Book Direct →
          </Link>
        </div>
      </div>
    </div>
  );
}
