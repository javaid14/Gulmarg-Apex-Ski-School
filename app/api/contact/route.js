// app/api/contact/route.js
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, phone, email, message } = await request.json();

    if (!name || !phone || !email || !message) {
      return Response.json(
        { error: "All fields are required." },
        { status: 400 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Gulmarg Apex Ski School" <${process.env.SMTP_USER}>`,
      to: "admin@gulmargapexskischool.com",
      replyTo: email,
      subject: `New enquiry from ${name}`,
      text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error("Email send error:", err);
    return Response.json({ error: "Failed to send message." }, { status: 500 });
  }
}
