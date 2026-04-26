"use client";

import { useEffect, useRef } from "react";

interface Props {
  // Paste the full embed code HTML from OwnerRez → Websites → Widgets → Book Now → Embed Code
  embedCode?: string;
  propertyId?: string;
}

export default function BookingWidget({ embedCode, propertyId }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!embedCode || !containerRef.current) return;

    const container = containerRef.current;

    // Parse the embed code: extract <script> tags and the widget <div>
    const parser = new DOMParser();
    const doc = parser.parseFromString(embedCode, "text/html");

    // Inject non-script HTML (widget div) directly
    const nonScriptHTML = Array.from(doc.body.childNodes)
      .filter((n) => (n as Element).tagName !== "SCRIPT")
      .map((n) => (n as Element).outerHTML || "")
      .join("");
    container.innerHTML = nonScriptHTML;

    // Load each <script> properly so the browser executes it
    const scripts = Array.from(doc.querySelectorAll("script"));
    scripts.forEach((s) => {
      const script = document.createElement("script");
      if (s.src) {
        script.src = s.src;
        script.async = true;
      } else {
        script.textContent = s.textContent;
      }
      // Copy any data attributes
      Array.from(s.attributes).forEach((attr) => {
        if (attr.name !== "src") script.setAttribute(attr.name, attr.value);
      });
      document.body.appendChild(script);
    });

    return () => {
      // Clean up injected scripts on unmount
      scripts.forEach((s) => {
        if (s.src) {
          document.querySelectorAll(`script[src="${s.src}"]`).forEach((el) => el.remove());
        }
      });
    };
  }, [embedCode]);

  // ── Placeholder shown until embed code is added ────────────────────────
  if (!embedCode) {
    return (
      <div
        className="rounded-sm p-10"
        style={{
          backgroundColor: "#E8E0D2",
          border: "1px dashed rgba(124,107,82,0.3)",
        }}
      >
        <p
          className="font-display mb-3"
          style={{ fontSize: "1.25rem", color: "#1D3A47" }}
        >
          Booking widget
        </p>
        <p
          className="font-sans text-sm leading-relaxed mb-4"
          style={{ color: "rgba(124,107,82,0.7)" }}
        >
          To activate live booking:
        </p>
        <ol
          className="font-sans text-sm space-y-2 list-decimal list-inside"
          style={{ color: "rgba(124,107,82,0.65)" }}
        >
          <li>Log into OwnerRez → Websites → Widgets</li>
          <li>Add Widget → Book Now → select this property</li>
          <li>Scroll to "Embed Code" at the bottom and copy it</li>
          <li>
            Paste it as the <code className="text-xs px-1" style={{ backgroundColor: "rgba(124,107,82,0.12)" }}>embedCode</code> prop in{" "}
            <code className="text-xs px-1" style={{ backgroundColor: "rgba(124,107,82,0.12)" }}>app/book/page.tsx</code>
          </li>
        </ol>
        {propertyId && (
          <p
            className="font-sans text-xs mt-5"
            style={{ color: "rgba(124,107,82,0.35)" }}
          >
            Property ID: {propertyId}
          </p>
        )}
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="orwidget-container"
      style={{ minHeight: "400px" }}
    />
  );
}
