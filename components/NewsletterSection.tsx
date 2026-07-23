import KitForm from './KitForm'

export default function NewsletterSection() {
  return (
    <section className="relative bg-navy overflow-hidden py-24 md:py-32">
      {/* Soft gold ambient glow — same motif as hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 110%, rgba(212,175,55,0.10) 0%, transparent 70%)',
        }}
      />

      {/* Thin gold rule — top edge */}
      <div
        aria-hidden="true"
        className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"
      />

      <div className="relative max-w-2xl mx-auto px-6 text-center">
        {/* Eyebrow */}
        <p className="font-sans text-gold text-[11px] tracking-[0.3em] uppercase mb-5 opacity-80">
          Stay in the Loop
        </p>

        {/* Headline */}
        <h2 className="font-serif text-4xl md:text-5xl text-alabaster leading-tight mb-5">
          Join the{' '}
          <em className="text-gold not-italic">Second Act</em> Community.
        </h2>

        {/* Supporting copy */}
        <p className="font-sans text-alabaster/65 text-base md:text-lg leading-relaxed mb-10 max-w-lg mx-auto">
          Quiet strategies. Practical tools. No hustle, no hype — just calm,
          peer-level insight for women 50+ building a private digital income
          on their own terms.
        </p>

        {/* Kit form embed */}
        <KitForm />

        {/* Thin gold rule — bottom edge */}
        <div
          aria-hidden="true"
          className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"
        />
      </div>
    </section>
  )
}
