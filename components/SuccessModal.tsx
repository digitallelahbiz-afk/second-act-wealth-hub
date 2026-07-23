'use client'

import { useEffect } from 'react'

interface SuccessModalProps {
  isOpen: boolean
  onClose: () => void
  affiliateLink: string
}

export default function SuccessModal({
  isOpen,
  onClose,
  affiliateLink,
}: SuccessModalProps) {
  // Lock body scroll while modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-charcoal/95 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Card */}
      <div className="relative z-10 w-full max-w-lg bg-navy border border-gold/25 rounded-2xl shadow-2xl overflow-hidden">
        {/* Gold top bar */}
        <div className="h-1 w-full bg-gradient-to-r from-gold-dark via-gold to-gold-light" />

        <div className="p-8 md:p-10">
          {/* Eyebrow */}
          <p className="font-sans text-gold text-[11px] tracking-[0.25em] uppercase mb-4">
            Your guide is on its way ✦
          </p>

          {/* Headline */}
          <h2
            id="modal-title"
            className="font-serif text-3xl md:text-4xl text-alabaster leading-tight mb-5"
          >
            Now — about the engine that runs the whole thing.
          </h2>

          {/* Body */}
          <p className="text-alabaster/70 text-base leading-relaxed mb-4">
            The 90-Day Plan shows you the map. But every woman who has actually
            built a faceless digital income stream has one system underneath it
            all.
          </p>
          <p className="text-alabaster/70 text-base leading-relaxed mb-4">
            It's called{' '}
            <strong className="text-alabaster">Create Faceless Wealth</strong>{' '}
            by Nancy Ayala — and it is the exact masterclass that powers our
            entire backend.
          </p>
          <p className="border-l-2 border-gold/40 pl-4 text-alabaster/80 text-base italic leading-relaxed mb-8">
            "I don't recommend things lightly. This is the one I point every
            woman in our community toward when she's ready to build the real
            thing."
          </p>

          {/* Primary CTA */}
          <a
            href={affiliateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 w-full bg-gold hover:bg-gold-light text-navy font-semibold text-base py-4 px-6 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-gold/20 hover:-translate-y-0.5"
          >
            Show Me the Full Masterclass
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </a>

          {/* Dismiss */}
          <button
            onClick={onClose}
            className="mt-4 w-full text-center text-alabaster/35 hover:text-alabaster/60 text-sm transition-colors duration-200"
          >
            I'll explore this later
          </button>
        </div>
      </div>
    </div>
  )
}
