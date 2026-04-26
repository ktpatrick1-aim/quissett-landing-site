"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
}

export default function TestimonialCarousel({
  testimonials,
  dark = true,
}: {
  testimonials: Testimonial[];
  dark?: boolean;
}) {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIdx((i) => (i + 1) % testimonials.length);
  const t = testimonials[idx];

  const quoteColor = dark ? "rgba(244,239,230,0.9)" : "#1D3A47";
  const authorColor = dark ? "rgba(244,239,230,0.35)" : "rgba(124,107,82,0.55)";
  const btnBorder = dark ? "rgba(244,239,230,0.15)" : "rgba(29,58,71,0.2)";
  const btnText = dark ? "rgba(244,239,230,0.4)" : "rgba(29,58,71,0.4)";
  const dotActive = dark ? "#F4EFE6" : "#1D3A47";
  const dotInactive = dark ? "rgba(244,239,230,0.2)" : "rgba(29,58,71,0.15)";

  return (
    <div className="max-w-3xl">
      <blockquote
        className="font-display italic leading-snug mb-8 text-balance"
        style={{
          fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
          color: quoteColor,
          letterSpacing: "-0.01em",
        }}
      >
        &ldquo;{t.quote}&rdquo;
      </blockquote>
      <p className="font-sans text-[10px] tracking-[0.25em] uppercase" style={{ color: authorColor }}>
        — {t.author}
      </p>

      {testimonials.length > 1 && (
        <div className="flex items-center gap-5 mt-10">
          <button
            onClick={prev}
            className="p-2 rounded-full border transition-colors"
            style={{ borderColor: btnBorder, color: btnText }}
            aria-label="Previous review"
          >
            <ChevronLeft size={16} />
          </button>
          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className="w-1.5 h-1.5 rounded-full transition-colors"
                style={{ backgroundColor: i === idx ? dotActive : dotInactive }}
                aria-label={`Review ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="p-2 rounded-full border transition-colors"
            style={{ borderColor: btnBorder, color: btnText }}
            aria-label="Next review"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      )}
    </div>
  );
}
