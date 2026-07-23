import { NextRequest, NextResponse } from 'next/server'

// ─── Kit.com Configuration ────────────────────────────────────────────────────
// 1. Go to kit.com → Settings → API → copy your "API Key" (v3 key)
// 2. Go to kit.com → Grow → Landing Pages & Forms → open your form → copy the
//    numeric Form ID from the URL (e.g. https://app.kit.com/forms/1234567 → "1234567")
// 3. Add both to .env.local:
//      KIT_API_KEY=your_kit_v3_api_key
//      KIT_FORM_ID=your_kit_form_id
// ─────────────────────────────────────────────────────────────────────────────

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { email } = body

    // ── Validation ──────────────────────────────────────────────
    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'An email address is required.' },
        { status: 400 }
      )
    }

    const trimmed = email.trim().toLowerCase()
    if (!EMAIL_REGEX.test(trimmed)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      )
    }

    // ── Kit.com submission ───────────────────────────────────────
    const apiKey = process.env.KIT_API_KEY
    const formId = process.env.KIT_FORM_ID

    if (!apiKey || !formId) {
      console.error(
        '[subscribe] KIT_API_KEY or KIT_FORM_ID env vars are not set.'
      )
      return NextResponse.json(
        { error: 'Server configuration error. Please try again later.' },
        { status: 500 }
      )
    }

    const kitRes = await fetch(
      `https://api.convertkit.com/v3/forms/${formId}/subscribe`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          api_key: apiKey,
          email: trimmed,
          tags: ['90-day-plan', 'landing-page'],
        }),
      }
    )

    if (!kitRes.ok) {
      const errBody = await kitRes.json().catch(() => ({}))
      console.error('[subscribe] Kit.com error:', kitRes.status, errBody)
      return NextResponse.json(
        { error: 'We could not save your details right now. Please try again.' },
        { status: 502 }
      )
    }

    // ── Success ──────────────────────────────────────────────────
    return NextResponse.json({ success: true }, { status: 200 })
  } catch (err) {
    console.error('[subscribe] Unexpected error:', err)
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    )
  }
}
