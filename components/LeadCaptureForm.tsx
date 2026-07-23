'use client'

import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'

// ── Kit.com connection ────────────────────────────────────────────────────────
// Form submissions are sent to /api/subscribe, which calls Kit.com's v3 API.
// Set KIT_API_KEY and KIT_FORM_ID in .env.local to activate.
// On success, the user is redirected to /thank-you.
// ─────────────────────────────────────────────────────────────────────────────

type Status = 'idle' | 'loading' | 'error'

export default function LeadCaptureForm() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (status === 'loading') return

    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      })

      const data = await res.json()

      if (!res.ok) {
        setErrorMsg(data.error ?? 'Something went wrong. Please try again.')
        setStatus('error')
        return
      }

      router.push('/thank-you')
    } catch {
      setErrorMsg('Could not reach the server. Please check your connection.')
      setStatus('error')
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-label="Download the free Second Act Plan"
      className="w-full max-w-md mx-auto md:mx-0"
    >
      {/* Input + button row */}
      <div className="flex flex-col sm:flex-row gap-3">
        <label htmlFor="lead-email" className="sr-only">
          Your email address
        </label>
        <input
          id="lead-email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address..."
          required
          autoComplete="email"
          disabled={status === 'loading'}
          className="
            flex-1 min-w-0
            bg-[#0B192E] border border-[#F7F5F0]/25 hover:border-[#F7F5F0]/40
            focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]/40
            text-[#F7F5F0] placeholder-[#F7F5F0]/40
            font-sans text-base
            px-5 py-4 rounded-xl
            transition-colors duration-200
            disabled:opacity-50
          "
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="
            shrink-0
            bg-[#D4AF37] hover:bg-[#C5A059] active:bg-[#B8944A]
            text-[#0B192E] font-semibold text-base
            px-7 py-4 rounded-xl
            transition-all duration-200
            hover:shadow-lg hover:shadow-[#D4AF37]/25 hover:-translate-y-0.5
            disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0
            whitespace-nowrap
          "
        >
          {status === 'loading' ? 'Sending…' : 'Download the Free Plan'}
        </button>
      </div>

      {/* Privacy note */}
      <p className="mt-3 text-[#F7F5F0]/40 text-[11px] text-center md:text-left tracking-wide">
        No spam. No pressure. Unsubscribe at any time.
      </p>

      {/* Error message */}
      {status === 'error' && (
        <p role="alert" className="mt-3 text-center md:text-left text-sm text-red-300/80">
          {errorMsg}
        </p>
      )}
    </form>
  )
}
