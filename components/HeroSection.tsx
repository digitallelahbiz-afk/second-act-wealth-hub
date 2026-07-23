import { ArrowRight, Sparkles } from 'lucide-react'
import { BEACONS_CAPTURE_LINK } from '@/lib/links'

// HeroSection — warm cream background, forest-green headline, gold accents.
// Server Component: the primary CTA is a plain link out to the Beacons
// welcome page / email capture flow, so no client-side form is needed here.
export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[#F5EFE6] pt-16 pb-24 md:pt-24 md:pb-32"
    >
      {/* Ambient forest-green glow, top left */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full opacity-[0.12]"
        style={{
          background: 'radial-gradient(circle at center, #2E865F 0%, transparent 70%)',
        }}
      />
      {/* Ambient gold glow, right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 -right-24 w-[420px] h-[420px] rounded-full opacity-[0.14]"
        style={{
          background: 'radial-gradient(circle at center, #D4AF37 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 md:gap-10 items-center">
        {/* ── Left: copy + CTA ── */}
        <div className="text-center md:text-left">
          <p className="inline-flex items-center gap-2 font-sans text-[#2E865F] text-xs tracking-[0.25em] uppercase mb-7 bg-[#2E865F]/8 border border-[#2E865F]/20 rounded-full px-4 py-1.5">
            <Sparkles size={13} className="text-[#D4AF37]" />
            Free Roadmap · Second Act Wealth Hub
          </p>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#2C2A28] leading-[1.1] mb-6 text-balance">
            You already know what works.{' '}
            <span className="text-[#2E865F]">
              Now learn where to put it.
            </span>
          </h1>

          <p className="font-sans text-lg md:text-xl text-[#2C2A28] max-w-xl mx-auto md:mx-0 leading-relaxed mb-10">
            <strong className="font-semibold text-[#2C2A28]">
              The Second Act Wealth Roadmap
            </strong>{' '}
            is a mature professional&rsquo;s guide to faceless digital
            products — the map for translating decades of judgment into
            online assets, without ever stepping in front of a camera.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <a
              href={BEACONS_CAPTURE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-[#2E865F] hover:bg-[#20613F] text-[#F5EFE6] font-semibold text-base py-4 px-8 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-[#2E865F]/25 hover:-translate-y-0.5 w-full sm:w-auto justify-center"
            >
              Get the Free Roadmap
              <ArrowRight
                size={18}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </a>
            <span className="font-sans text-[#2C2A28]/65 text-xs tracking-wide">
              Instant download. No spam, ever.
            </span>
          </div>

          {/* Quiet credibility strip */}
          <div className="mt-14 flex items-center justify-center md:justify-start gap-6 md:gap-10 flex-wrap">
            {[
              { stat: 'Faceless', label: 'No Camera Required' },
              { stat: 'Peer-Level', label: 'Not a "Guru" System' },
              { stat: 'Your Pace', label: 'Zero Hustle Culture' },
            ].map(({ stat, label }, i) => (
              <div key={stat} className="flex items-center gap-6 md:gap-10">
                {i > 0 && (
                  <div
                    aria-hidden="true"
                    className="h-8 w-px bg-[#2C2A28]/10 hidden sm:block"
                  />
                )}
                <div className="text-center md:text-left">
                  <p className="font-serif text-[#2E865F] text-xl font-bold leading-none mb-1">
                    {stat}
                  </p>
                  <p className="text-[#2C2A28]/70 text-[11px] tracking-[0.12em] uppercase">
                    {label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: layered mockup cards ── */}
        <div className="relative hidden md:block h-[460px]">
          {/* Back card — Starter Kit vault */}
          <div className="absolute top-8 right-4 w-56 rotate-6 rounded-2xl overflow-hidden ring-1 ring-[#D4AF37]/30 shadow-2xl shadow-[#2C2A28]/20 bg-white">
            <img
              src="/starter-kit-v2.png"
              alt="The Digital Products Starter Kit & Implementation Vault"
              className="w-full aspect-square object-cover"
              loading="eager"
            />
          </div>

          {/* Middle card — CFW course */}
          <div className="absolute top-24 left-2 w-52 -rotate-6 rounded-2xl overflow-hidden ring-1 ring-[#2E865F]/25 shadow-2xl shadow-[#2C2A28]/20 bg-white">
            <img
              src="/cfw-course.jpg"
              alt="Create Faceless Wealth course by Nancy Ayala"
              className="w-full aspect-square object-cover"
              loading="eager"
            />
          </div>

          {/* Front card — Free Roadmap, largest + centered */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-64 rounded-2xl overflow-hidden ring-2 ring-[#D4AF37]/50 shadow-2xl shadow-[#2C2A28]/25 bg-white">
            <div className="relative">
              <img
                src="/roadmap-v2.png"
                alt="The Second Act Wealth Roadmap cover"
                className="w-full aspect-square object-cover"
                loading="eager"
              />
              <span className="absolute top-3 right-3 font-sans text-[10px] tracking-[0.2em] uppercase text-[#2C2A28] bg-[#D4AF37] rounded-full px-3 py-1 shadow">
                Free
              </span>
            </div>
          </div>

          {/* Soft glow anchoring the stack */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              background:
                'radial-gradient(ellipse 60% 50% at 50% 70%, #D4AF37 0%, transparent 70%)',
              filter: 'blur(30px)',
            }}
          />
        </div>
      </div>
    </section>
  )
}
