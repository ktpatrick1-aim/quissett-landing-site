"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface AccordionItem {
  title: string;
  content: string;
}

export default function Accordion({ items }: { items: AccordionItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="divide-y" style={{ borderColor: "rgba(124,107,82,0.15)", borderTop: "1px solid rgba(124,107,82,0.15)", borderBottom: "1px solid rgba(124,107,82,0.15)" }}>
      {items.map(({ title, content }, i) => (
        <div key={title}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between gap-6 py-5 text-left"
          >
            <span className="font-sans text-sm" style={{ color: "#1D3A47" }}>{title}</span>
            <span style={{ color: "rgba(124,107,82,0.4)", flexShrink: 0 }}>
              {open === i ? <Minus size={14} /> : <Plus size={14} />}
            </span>
          </button>
          {open === i && (
            <div className="pb-6">
              {content.split("\n\n").map((para, pi) => (
                <p key={pi} className="font-sans text-sm leading-relaxed mb-3 last:mb-0" style={{ color: "rgba(124,107,82,0.75)" }}>
                  {para}
                </p>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
