import { NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend with the API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY || "temp_key");

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Development/Local Fallback: If no API key is configured, log the message and simulate success
    if (!process.env.RESEND_API_KEY) {
      console.warn(
        "\x1b[33m%s\x1b[0m",
        "⚠️ WARNING: RESEND_API_KEY is not configured in your environment variables (.env.local)."
      );
      console.log("Simulating email transmission for contact form:");
      console.log(`- To: saishugale2005@gmail.com`);
      console.log(`- From Sender Name: ${name}`);
      console.log(`- From Sender Email: ${email}`);
      console.log(`- Message:\n${message}\n`);
      return NextResponse.json({
        success: true,
        message: "Simulated submission successful (development mode).",
      });
    }

    // Send email using Resend
    // Note: By default, Resend allows sending emails to your own registered account email (saishugale2005@gmail.com) 
    // even if you haven't verified a custom sending domain yet.
    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "saishugale2005@gmail.com",
      subject: `📬 New Portfolio Message from ${name}`,
      text: `You received a new message from your portfolio contact form:\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      replyTo: email,
    });

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error("Error in contact form API:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
