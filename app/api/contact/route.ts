import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // App password from Google
      },
    });

    // Email to CWS Nepal (notification)
    const notificationMailOptions = {
      from: `"CWS Nepal Contact Form" <${process.env.EMAIL_USER}>`,
      to: "cwsolutions2025@gmail.com",
      subject: `🚀 New Inquiry from ${name} — CWS Nepal`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: 'DM Sans', Arial, sans-serif; background: #f0f6ff; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 30px auto; background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 24px rgba(26,86,219,0.12); }
            .header { background: linear-gradient(135deg, #1a56db 0%, #06b6d4 100%); padding: 36px 40px; }
            .header h1 { color: white; margin: 0; font-size: 24px; font-weight: 700; }
            .header p { color: rgba(255,255,255,0.85); margin: 8px 0 0; font-size: 14px; }
            .body { padding: 40px; }
            .field { margin-bottom: 24px; }
            .label { font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: #6b7280; margin-bottom: 6px; }
            .value { font-size: 16px; color: #111827; font-weight: 500; }
            .message-box { background: #f0f6ff; border-left: 4px solid #1a56db; border-radius: 8px; padding: 20px; margin-top: 24px; }
            .message-box .value { font-size: 15px; line-height: 1.7; color: #374151; }
            .footer { background: #f9fafb; padding: 24px 40px; text-align: center; border-top: 1px solid #e5e7eb; }
            .footer p { color: #9ca3af; font-size: 13px; margin: 0; }
            .badge { display: inline-block; background: #dbeafe; color: #1a56db; padding: 4px 12px; border-radius: 999px; font-size: 12px; font-weight: 600; margin-top: 4px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>📬 New Contact Form Submission</h1>
              <p>Received on ${new Date().toLocaleString("en-NP", { timeZone: "Asia/Kathmandu" })} (NPT)</p>
            </div>
            <div class="body">
              <div class="field">
                <div class="label">Full Name</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">Email Address</div>
                <div class="value"><a href="mailto:${email}" style="color:#1a56db;">${email}</a></div>
              </div>
              ${phone ? `
              <div class="field">
                <div class="label">Phone Number</div>
                <div class="value"><a href="tel:${phone}" style="color:#1a56db;">${phone}</a></div>
              </div>` : ""}
              ${service ? `
              <div class="field">
                <div class="label">Service Interested In</div>
                <div class="value"><span class="badge">${service}</span></div>
              </div>` : ""}
              <div class="message-box">
                <div class="label">Message</div>
                <div class="value">${message.replace(/\n/g, "<br>")}</div>
              </div>
            </div>
            <div class="footer">
              <p>This email was sent from the contact form on <strong>completewebsolutionsnepal.com</strong></p>
              <p style="margin-top:8px;">Reply directly to this email to respond to ${name}.</p>
            </div>
          </div>
        </body>
        </html>
      `,
      replyTo: email,
    };

    // Auto-reply to the sender
    const autoReplyMailOptions = {
      from: `"Complete Web Solutions Nepal" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Thank you for reaching out, ${name}! — CWS Nepal`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: 'DM Sans', Arial, sans-serif; background: #f0f6ff; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 30px auto; background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 24px rgba(26,86,219,0.12); }
            .header { background: linear-gradient(135deg, #1a56db 0%, #06b6d4 100%); padding: 40px; text-align: center; }
            .logo { font-size: 28px; font-weight: 800; color: white; letter-spacing: -0.5px; }
            .logo span { color: #bae6fd; }
            .header p { color: rgba(255,255,255,0.85); margin: 12px 0 0; font-size: 15px; }
            .body { padding: 48px 40px; }
            .body h2 { font-size: 22px; color: #111827; margin: 0 0 16px; }
            .body p { color: #4b5563; line-height: 1.8; font-size: 15px; margin: 0 0 16px; }
            .highlight-box { background: linear-gradient(135deg, #eff6ff, #ecfeff); border-radius: 12px; padding: 24px; margin: 24px 0; border: 1px solid #bfdbfe; }
            .highlight-box p { margin: 0; color: #1e40af; font-weight: 500; }
            .contact-row { display: flex; align-items: center; gap: 12px; margin: 12px 0; color: #374151; font-size: 14px; }
            .cta-btn { display: block; width: fit-content; margin: 28px auto 0; background: linear-gradient(135deg, #1a56db, #06b6d4); color: white; text-decoration: none; padding: 14px 36px; border-radius: 999px; font-weight: 700; font-size: 15px; }
            .footer { background: #f9fafb; padding: 28px 40px; text-align: center; border-top: 1px solid #e5e7eb; }
            .footer p { color: #9ca3af; font-size: 12px; margin: 0; line-height: 1.8; }
            .social-links { margin: 12px 0; }
            .social-links a { color: #1a56db; text-decoration: none; margin: 0 8px; font-size: 13px; font-weight: 500; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="logo">CWS <span>Nepal</span></div>
              <p>Complete Web Solutions Nepal</p>
            </div>
            <div class="body">
              <h2>Hi ${name}, we've received your message! 🎉</h2>
              <p>Thank you for reaching out to <strong>Complete Web Solutions Nepal</strong>. We're excited to connect with you and explore how we can help bring your digital vision to life.</p>
              <div class="highlight-box">
                <p>⏱️ Our team will review your inquiry and get back to you within <strong>24–48 business hours</strong>. For urgent matters, feel free to call or WhatsApp us directly.</p>
              </div>
              <p>In the meantime, here's how you can reach us:</p>
              <div style="padding-left: 8px;">
                <div class="contact-row">📞 <a href="tel:+9779704738463" style="color:#1a56db;">+977-9704738463</a></div>
                <div class="contact-row">💬 <a href="https://wa.me/9779704738463" style="color:#1a56db;">WhatsApp: +977-9704738463</a></div>
                <div class="contact-row">📘 <a href="https://www.facebook.com/profile.php?id=61574606891054" style="color:#1a56db;">Facebook: Complete Web Solutions Nepal</a></div>
                <div class="contact-row">📍 Kathmandu, Nepal</div>
              </div>
              <a href="https://wa.me/9779704738463" class="cta-btn">Chat on WhatsApp →</a>
            </div>
            <div class="footer">
              <div class="social-links">
                <a href="https://www.facebook.com/profile.php?id=61574606891054">Facebook</a> |
                <a href="https://wa.me/9779704738463">WhatsApp</a> |
                <a href="mailto:cwsolutions2025@gmail.com">Email</a>
              </div>
              <p>© ${new Date().getFullYear()} Complete Web Solutions Nepal. All rights reserved.<br>
              This is an automated reply. Please do not reply to this message directly.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    await transporter.sendMail(notificationMailOptions);
    await transporter.sendMail(autoReplyMailOptions);

    return NextResponse.json(
      { message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
