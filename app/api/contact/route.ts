import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const turnstileToken = formData.get("turnstileToken") as string;
    const firstName = formData.get("firstName") as string;
    const surname = formData.get("surname") as string;
    const email = formData.get("email") as string;
    const telephone = formData.get("telephone") as string;
    const message = formData.get("message") as string;

    // Server-side Turnstile verification
    const verifyRes = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: process.env.TURNSTILE_SECRET_KEY || "",
        response: turnstileToken || "",
      }),
    });
    const verifyData = await verifyRes.json();
    if (!verifyData.success) {
      return NextResponse.json({ error: "Invalid verification token" }, { status: 400 });
    }

    // Send via Resend
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "MCS Solicitors <enquiries@mcssolicitors.net>",
      to: "Enquiries@mcssolicitors.net",
      subject: `New enquiry from ${firstName} ${surname}`,
      html: `<p><strong>From:</strong> ${firstName} ${surname}</p><p><strong>Email:</strong> ${email}</p><p><strong>Phone:</strong> ${telephone || "Not provided"}</p><p><strong>Message:</strong></p><p>${message}</p>`,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
