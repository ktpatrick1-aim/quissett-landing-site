"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Field label="First name" name="firstName" type="text" required />
        <Field label="Last name" name="lastName" type="text" required />
      </div>
      <Field label="Email" name="email" type="email" required />
      <Field label="Phone (optional)" name="phone" type="tel" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Field label="Arrival date" name="arrival" type="date" />
        <Field label="Departure date" name="departure" type="date" />
      </div>
      <div>
        <label className="block font-sans text-[10px] tracking-widest uppercase mb-2" style={{ color: "rgba(124,107,82,0.55)" }}>
          Message
        </label>
        <textarea
          name="message"
          rows={5}
          required
          className="w-full px-4 py-3 font-sans text-sm resize-none outline-none border focus:border-opacity-60 transition-colors"
          style={{
            backgroundColor: "#E8E0D2",
            borderColor: "rgba(124,107,82,0.2)",
            color: "#1D3A47",
            borderRadius: "2px",
          }}
          placeholder="Questions about the property, dates, group size — anything."
        />
      </div>

      <div className="flex items-center gap-6">
        <button
          type="submit"
          disabled={status === "sending"}
          className="font-sans text-sm tracking-wide px-8 py-4 rounded-full transition-opacity disabled:opacity-50"
          style={{ backgroundColor: "#1D3A47", color: "#F4EFE6" }}
        >
          {status === "sending" ? "Sending…" : "Send Message"}
        </button>

        {status === "success" && (
          <p className="font-sans text-sm" style={{ color: "#6B7C5E" }}>
            Sent — we'll be in touch shortly.
          </p>
        )}
        {status === "error" && (
          <p className="font-sans text-sm" style={{ color: "#c0392b" }}>
            Something went wrong. Please email us directly.
          </p>
        )}
      </div>
    </form>
  );
}

function Field({
  label, name, type, required,
}: {
  label: string; name: string; type: string; required?: boolean;
}) {
  return (
    <div>
      <label className="block font-sans text-[10px] tracking-widest uppercase mb-2" style={{ color: "rgba(124,107,82,0.55)" }}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full px-4 py-3 font-sans text-sm outline-none border transition-colors"
        style={{
          backgroundColor: "#E8E0D2",
          borderColor: "rgba(124,107,82,0.2)",
          color: "#1D3A47",
          borderRadius: "2px",
        }}
      />
    </div>
  );
}
