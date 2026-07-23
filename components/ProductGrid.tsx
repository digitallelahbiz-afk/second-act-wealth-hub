import { Check, Star } from 'lucide-react'
import { BEACONS_CAPTURE_LINK, GUMROAD_CHECKOUT_LINK } from '@/lib/links'

// The Product Suite — free Roadmap and $17 Starter Kit & Implementation
// Vault, presented side by side with clear badges and a shared visual system.
const vaultIncludes = [
  'The Quiet Luxury Video Vault',
  "The Modern Professional's Digital Asset Blueprint",
  'The Quiet Wealth Strategic Planner',
  'Executive Hook Matrix & Copywriting Prompts',
]

export default function ProductGrid() {
  return (
    <section className="bg-[#F5EFE6] py-20 md:py-28" id="toolkit">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-sans text-[#2E865F] text-[11px] tracking-[0.3em] uppercase mb-4 text-center">
          Product Suite
        </p>
        <h2 className="font-serif text-3xl md:text-5xl text-[#2C2A28] leading-tight text-center mb-4">
          Start free. Upgrade when you&rsquo;re ready.
        </h2>
        <p className="font-sans text-[#2C2A28] text-base md:text-lg text-center max-w-xl mx-auto mb-16 leading-relaxed">
          Two tools, one path — for women 50+ building quietly, intentionally,
          and on their own terms.
        </p>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* ── Card 1: Free Roadmap ── */}
          <div
            id="roadmap"
            className="relative flex flex-col bg-white rounded-3xl border border-[#2C2A28]/8 shadow-md overflow-hidden scroll-mt-24"
          >
            <div className="h-1.5 w-full bg-[#2E865F]" />

            <div className="absolute top-7 right-7">
              <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#2E865F] border border-[#2E865F]/40 rounded-full px-3 py-1 bg-[#2E865F]/8">
                Free Guide
              </span>
            </div>

            <div className="flex items-center justify-center pt-12 px-10">
              <div className="relative w-full max-w-[220px] aspect-square">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-3 rounded-xl opacity-20"
                  style={{
                    background:
                      'radial-gradient(ellipse at center, #2E865F 0%, transparent 70%)',
                    filter: 'blur(16px)',
                  }}
                />
                <img
                  src="/roadmap-v2.png"
                  alt="The Second Act Wealth Roadmap cover"
                  className="relative w-full h-full object-cover rounded-lg ring-1 ring-[#2C2A28]/10 shadow-lg shadow-[#2C2A28]/10"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="flex flex-col flex-1 p-8 md:p-9">
              <p className="font-sans text-[#2E865F] text-[10px] tracking-[0.25em] uppercase mb-3">
                Lead Magnet
              </p>
              <h3 className="font-serif text-xl md:text-2xl text-[#2C2A28] leading-snug mb-3">
                The Second Act Wealth Roadmap
              </h3>
              <p className="font-sans text-[#2C2A28] text-sm leading-relaxed mb-8 flex-1">
                A mature professional&rsquo;s guide to faceless digital
                products — the strategic overview that shows you exactly
                where to start, in plain language, with zero pressure to
                decide today.
              </p>

              <div className="mt-auto">
                <div className="mb-6 h-px bg-[#2C2A28]/8" />
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-serif text-[#2E865F] text-3xl font-bold leading-none">
                      Free
                    </p>
                    <p className="text-[#2C2A28]/60 text-[11px] tracking-wide mt-1">
                      Instant download
                    </p>
                  </div>
                  <a
                    href={BEACONS_CAPTURE_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 bg-[#2E865F] hover:bg-[#20613F] text-[#F5EFE6] font-semibold text-sm py-3 px-6 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-[#2E865F]/25 hover:-translate-y-0.5 shrink-0"
                  >
                    Get the Roadmap
                    <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ── Card 2: $17 Starter Kit & Implementation Vault ── */}
          <div className="relative flex flex-col bg-white rounded-3xl border-2 border-[#D4AF37]/60 shadow-xl shadow-[#D4AF37]/10 overflow-hidden">
            <div className="h-1.5 w-full bg-gradient-to-r from-[#D4AF37] via-[#E8C547] to-[#D4AF37]" />

            <div className="absolute top-7 right-7">
              <span className="inline-flex items-center gap-1 font-sans text-[10px] tracking-[0.2em] uppercase text-[#2C2A28] rounded-full px-3 py-1 bg-[#D4AF37]">
                <Star size={11} fill="currentColor" />
                Best Value — $17
              </span>
            </div>

            <div className="flex items-center justify-center pt-12 px-10">
              <div className="relative w-full max-w-[220px] aspect-square">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-3 rounded-xl opacity-25"
                  style={{
                    background:
                      'radial-gradient(ellipse at center, #D4AF37 0%, transparent 70%)',
                    filter: 'blur(16px)',
                  }}
                />
                <img
                  src="/starter-kit-v2.png"
                  alt="The Digital Products Starter Kit & Implementation Vault"
                  className="relative w-full h-full object-cover rounded-lg ring-1 ring-[#2C2A28]/10 shadow-lg shadow-[#2C2A28]/10"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="flex flex-col flex-1 p-8 md:p-9">
              <p className="font-sans text-[#B8971E] text-[10px] tracking-[0.25em] uppercase mb-3">
                Implementation Vault
              </p>
              <h3 className="font-serif text-xl md:text-2xl text-[#2C2A28] leading-snug mb-3">
                The Digital Products Starter Kit &amp; Implementation Vault
              </h3>
              <p className="font-sans text-[#2C2A28] text-sm leading-relaxed mb-5">
                Your infrastructure in a box — everything you need to go from
                roadmap to real, published digital products.
              </p>

              <ul className="space-y-2.5 mb-8">
                {vaultIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check
                      size={16}
                      className="text-[#2E865F] shrink-0 mt-0.5"
                      strokeWidth={2.5}
                    />
                    <span className="text-[#2C2A28] text-sm leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <div className="mb-6 h-px bg-[#2C2A28]/8" />
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-serif text-[#2C2A28] text-3xl font-bold leading-none">
                      $17
                    </p>
                    <p className="text-[#2C2A28]/60 text-[11px] tracking-wide mt-1">
                      Lifetime access
                    </p>
                  </div>
                  <a
                    href={GUMROAD_CHECKOUT_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#B8971E] text-[#2C2A28] font-semibold text-sm py-3 px-6 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-[#D4AF37]/30 hover:-translate-y-0.5 shrink-0"
                  >
                    Get Instant Access
                    <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
