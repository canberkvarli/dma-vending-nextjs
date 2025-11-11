import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, message } = body ?? {};

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 });
    }

    // Always send to Maryann's email as shown on the contact form
    const maryannEmail = 'maryann@dmahealthyvending.com';
    // Optionally CC to another email if configured (for testing/monitoring)
    const ccEmail = process.env.CONTACT_TO_EMAIL;
    // Combine recipients: primary to Maryann, CC to configured email if provided
    const recipients = ccEmail ? `${maryannEmail},${ccEmail}` : maryannEmail;

    const subject = `New inquiry from ${name} · DMA Healthy Vending`;
    const text = [
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : undefined,
      company ? `Location / Organization: ${company}` : undefined,
      '',
      'Message:',
      message || '(no message)'
    ].filter(Boolean).join('\n');

    // Web3Forms will handle the actual sender identity; we control Reply-To via 'replyto'.

    // Only Web3Forms
    const web3formsKey = process.env.WEB3FORMS_ACCESS_KEY;
    if (!web3formsKey) {
      return NextResponse.json({ error: 'Server not configured: WEB3FORMS_ACCESS_KEY missing.' }, { status: 500 });
    }

    try {
      const params = new URLSearchParams();
      params.set('access_key', web3formsKey);
      // Email envelope & reply handling (avoid adding extra From in email body)
      params.set('replyto', email);
      // Subject + single consolidated message to avoid duplicated field sections
      params.set('subject', subject);
      params.set('message', text);
      // Send to Maryann's email (and optionally CC to configured email)
      params.set('recipients', recipients);

      const endpoint = process.env.WEB3FORMS_ENDPOINT || 'https://api.web3forms.com/submit';
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json',
        },
        body: params.toString(),
      });

      const data = await response.json().catch(() => ({}));
      if (!response.ok || (data && data.success === false)) {
        const errorMessage = (data && (data.message || data.error)) || `Web3Forms error: ${response.status}`;
        return NextResponse.json({ error: errorMessage }, { status: 502 });
      }

      return NextResponse.json({ ok: true, provider: 'web3forms', id: data?.id || data?.data?.id });
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to submit to Web3Forms.';
      return NextResponse.json({ error: message }, { status: 502 });
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Invalid request.';
    return NextResponse.json({ error: message }, { status: 400 });
  }
}


