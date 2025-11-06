import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, message } = body ?? {};

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 });
    }

    const toEmail = process.env.CONTACT_TO_EMAIL;
    if (!toEmail) {
      return NextResponse.json({ error: 'Server not configured: CONTACT_TO_EMAIL missing.' }, { status: 500 });
    }

    const subject = `New contact form submission from ${name}`;
    const text = [
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : undefined,
      company ? `Company: ${company}` : undefined,
      '',
      'Message:',
      message || '(no message)'
    ].filter(Boolean).join('\n');

    const fromAddress = process.env.CONTACT_FROM_EMAIL || 'website@onresend.com';

    const sendResult = await resend.emails.send({
      from: fromAddress,
      to: toEmail,
      replyTo: email,
      subject,
      text,
    });

    if ((sendResult as any)?.error) {
      return NextResponse.json({ error: 'Failed to send email.' }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }
}


