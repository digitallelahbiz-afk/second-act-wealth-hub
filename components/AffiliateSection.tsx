import { Sparkles, PlayCircle } from 'lucide-react'
import { CFW_AFFILIATE_LINK } from '@/lib/links'

// Sneak Peek Spotlight — featured recommendation for Nancy Ayala's
// "Create Faceless Wealth" course. Deep espresso card on the cream page so
// the gold badge and CTA read as the premium, high-energy focal point.
const curriculum = [
  'Step-by-step faceless content system',
  'Backend monetization framework',
  'No camera. No personal brand required.',
  'Built for experienced, thoughtful women',
  'Lifetime access to all materials',
]

export default function AffiliateSection() {
  return (
    <section className="bg-[#F5EFE6] py-20 md:py-28" id="sneak-peek">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex justify-center mb-10">
          <p className="inline-flex items-center gap-2 font-sans text-[10px] tracking-[0.25em] uppercase text-[#B8971E] bg-[#D4AF37]/15 border border-[#D4AF37]/40 rounded-full px-4 py-1.5">
            <Sparkles size={12} /> Featured Recommendation
          </p>
        </div>

        <div className="relative bg-[#2C2A28] rounded-3xl overflow-hidden ring-1 ring-[#D4AF37]/30 shadow-2xl shadow-[#2C2A28]/25">
          <div
            aria-hidden="true"
            className="absolute left-0 top-10 bottom-10 w-[3px] bg-gradient-to-b from-transparent via-[#D4AF37] to-transparent rounded-full"
          />

          <div className="grid md:grid-cols-2">
            {/* ── Left: course image + sneak peek badge ── */}
            <div className="relative flex items-center justify-center p-10 md:p-14">
              <div className="relative w-full max-w-sm">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-3 rounded-[1.75rem] opacity-30"
                  style={{
                    background:
                      'radial-gradient(ellipse at center, #D4AF37 0%, transparent 70%)',
                    filter: 'blur(16px)',
                  }}
                />
                <img
                  src="/cfw-course.jpg"
                  alt="Create Faceless Wealth course by Nancy Ayala"
                  className="relative w-full rounded-2xl ring-1 ring-[#D4AF37]/30 shadow-2xl shadow-black/40 object-cover aspect-square"
                  loading="lazy"
                />
                <span className="absolute -top-3 -left-3 inline-flex items-center gap-1.5 font-sans text-[10px] tracking-[0.15em] uppercase text-[#2C2A28] bg-[#D4AF37] rounded-full px-3.5 py-1.5 shadow-lg">
                  <PlayCircle size={13} /> Full Course Overview
                </span>
              </div>
            </div>

            {/* ── Right: copy + curriculum + CTA ── */}
            <div className="p-10 md:p-14 border-t border-[#F5EFE6]/10 md:border-t-0 md:border-l md:border-[#F5EFE6]/10">
              <p className="font-sans text-[#D4AF37] text-[10px] tracking-[0.25em] uppercase mb-5">
                ◆ Personally Recommended by Second Act Wealth Hub
              </p>

              <h2 className="font-serif text-3xl md:text-4xl text-[#F5EFE6] leading-tight mb-2">
                Create Faceless Wealth
              </h2>
              <p className="font-serif text-[#D4AF37] text-lg md:text-xl font-normal mb-6">
                by Nancy Ayala
              </p>

              <p className="text-[#F5EFE6]/90 text-base leading-relaxed mb-4">
                The Roadmap gives you the map. Nancy&rsquo;s course is the
                engine — the exact system for building a faceless digital
                presence from first product through to monetization, without
                a personal brand and without years of technical experience.
              </p>
              <p className="text-[#F5EFE6]/90 text-base leading-relaxed mb-5">
                Below is a preview of what&rsquo;s inside the full framework.
              </p>

              <p className="font-serif text-[#F5EFE6] text-lg mb-4">
                What&rsquo;s Inside
              </p>
              <ul className="space-y-3 mb-8">
                {curriculum.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="text-[#D4AF37] text-[10px] mt-[5px] shrink-0"
                    >
                      ◆
                    </span>
                    <span className="text-[#F5EFE6]/90 text-sm leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={CFW_AFFILIATE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-[#D4AF37] hover:bg-[#E8C547] text-[#2C2A28] font-semibold text-base py-4 px-8 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-[#D4AF37]/25 hover:-translate-y-0.5"
              >
                Watch the Full Course
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <p className="mt-5 text-[#F5EFE6]/55 text-xs leading-relaxed max-w-sm">
                Affiliate disclosure: I may earn a commission if you enroll
                through this link, at no additional cost to you. I only
                recommend what I use myself.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
