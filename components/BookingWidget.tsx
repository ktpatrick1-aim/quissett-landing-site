"use client";

import { useEffect } from "react";

interface Props {
  propertyId: string;
  widgetAccountId?: string;
}

export default function BookingWidget({ propertyId, widgetAccountId }: Props) {
  const accountId = widgetAccountId ?? process.env.NEXT_PUBLIC_OWNERREZ_WIDGET_ID;

  useEffect(() => {
    if (!accountId) return;

    // Load the OwnerRez widget script once
    if (document.getElementById("ownerrez-widget-script")) return;
    const script = document.createElement("script");
    script.id = "ownerrez-widget-script";
    script.src = "https://secure.ownerreservations.com/js/widgets/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, [accountId]);

  if (!accountId) {
    return (
      <div
        className="rounded-sm p-10 text-center"
        style={{ backgroundColor: "#E8E0D2", border: "1px dashed rgba(124,107,82,0.3)" }}
      >
        <p className="font-display mb-2" style={{ fontSize: "1.25rem", color: "#1D3A47" }}>
          Booking Widget
        </p>
        <p className="font-sans text-sm mb-1" style={{ color: "rgba(124,107,82,0.7)" }}>
          Add your OwnerRez Widget Account ID to enable live availability and booking.
        </p>
        <p className="font-sans text-xs" style={{ color: "rgba(124,107,82,0.4)" }}>
          Set <code className="bg-driftwood px-1">NEXT_PUBLIC_OWNERREZ_WIDGET_ID</code> in your environment variables.
        </p>
        <p className="font-sans text-xs mt-2" style={{ color: "rgba(124,107,82,0.35)" }}>
          Property ID: {propertyId}
        </p>
      </div>
    );
  }

  return (
    <div className="orwidget">
      {/* OwnerRez booking widget — styled via CSS in globals.css */}
      <div
        className="orwidget-booking"
        data-propertyid={propertyId}
        data-accountid={accountId}
        data-widgettype="booking"
        style={{ minHeight: "500px" }}
      />
    </div>
  );
}
