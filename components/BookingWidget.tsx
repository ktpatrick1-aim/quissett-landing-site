"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";

export default function BookingWidget() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    // Set attributes with original casing — React would lowercase them otherwise
    ref.current.setAttribute("data-propertyId", "31ad8c979a6242968f3f0c24ec94758f");
    ref.current.setAttribute("data-widgetId", "faf7ad0ef519440aabb8ce81f0feed81");
  }, []);

  return (
    <>
      <div
        ref={ref}
        className="ownerrez-widget"
        data-widget-type="The Quissett Landing - Booking/Inquiry"
      />
      <Script
        src="https://app.ownerrez.com/widget.js"
        strategy="afterInteractive"
      />
    </>
  );
}
