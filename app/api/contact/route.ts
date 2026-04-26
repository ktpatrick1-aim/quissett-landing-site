import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { firstName, lastName, email, phone, arrival, departure, message } =
      await req.json();

    if (!email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const resendKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL ?? "thequissettlanding@gmail.com";

    if (!resendKey) {
      // In development without Resend configured, log and succeed
      console.log("Contact form submission:", { firstName, lastName, email, message });
      return NextResponse.json({ ok: true });
    }

    const body = `
New contact form submission from thequissettlanding.com

Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone || "—"}
Arrival: ${arrival || "—"}
Departure: ${departure || "—"}

Message:
${message}
    `.trim();

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "The Quissett Landing <noreply@thequissettlanding.com>",
        to: [toEmail],
        reply_to: email,
        subject: `Contact form — ${firstName} ${lastName}`,
        text: body,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Resend error:", err);
      return NextResponse.json({ error: "Email failed" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
