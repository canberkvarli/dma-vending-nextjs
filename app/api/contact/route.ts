import { NextResponse } from 'next/server';

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

    const subject = `New inquiry from ${name} · DMA Healthy Vending`;
    const text = [
      message || '(no message)'
    ].filter(Boolean).join('\n');

    const fromAddress = process.env.CONTACT_FROM_EMAIL || 'DMA Healthy Vending <no-reply@web3forms.com>';

    // Only Web3Forms
    const web3formsKey = process.env.WEB3FORMS_ACCESS_KEY;
    if (!web3formsKey) {
      return NextResponse.json({ error: 'Server not configured: WEB3FORMS_ACCESS_KEY missing.' }, { status: 500 });
    }

    try {
      const params = new URLSearchParams();
      params.set('access_key', web3formsKey);
      // Email envelope & reply handling
      params.set('from_name', 'DMA Healthy Vending');
      params.set('from_email', 'no-reply@web3forms.com');
      params.set('replyto', email);
      // Primary fields shown in the email
      params.set('subject', subject);
      params.set('name', name);
      params.set('email', email);
      if (phone) params.set('phone', String(phone));
      if (company) params.set('company', String(company));
      // Keep message clean (no duplicated fields)
      params.set('message', message || '');
      // Let Web3Forms send to target recipient via templates/routing if configured,
      // or include recipient for dashboard routing if needed
      if (toEmail) params.set('recipients', toEmail);

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


