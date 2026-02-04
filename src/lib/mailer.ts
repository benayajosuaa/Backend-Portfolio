import nodemailer from "nodemailer"
import { marked } from "marked"

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

/**
 * Default email signature
 * HTML-safe & email-client friendly
 */
function emailSignature() {
    return `
    <br><br>
    <hr style="border:none;border-top:1px solid #ddd;margin:16px 0;">
    <p style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#444;">
    Regards,<br>
    <strong>Ben</strong><br>
    Software Engineer<br>
    <a href="mailto:${process.env.SMTP_USER}" style="color:#1a73e8;text-decoration:none;">
        ${process.env.SMTP_USER}
    </a>
    </p>
    `
}

export async function sendEmail(
  to: string,
  subject: string,
  markdown: string
) {
  // gabung konten + signature
  const html = await marked.parse(markdown) + emailSignature();

  return transporter.sendMail({
    from: `"Ben" <${process.env.SMTP_USER}>`,
    to,
    subject,
    html,
  });
}
