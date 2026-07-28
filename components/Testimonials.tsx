import { Quote, PenLine } from 'lucide-react'

// ─────────────────────────────────────────────────────────────────────────────
// Social proof section — TEMPLATE STATE.
//
// These three cards are intentionally NOT real quotes. Each `prompt` field is
// an instruction for what to collect, not a claim to publish. Do not replace
// the dashed "placeholder" styling with solid quote cards until real reader
// or buyer feedback is dropped into the `quote` / `name` / `context` fields
// below — fabricated testimonials would break the "HONEST, no hype" brand
// rule and can create real legal exposure (FTC endorsement guidance).
//
// To activate a card: fill in quote/name/context and flip `isPlaceholder`
// to false. The card automatically switches from the dashed "add this"
// treatment to a solid, styled quote card once real content is present.
// ─────────────────────────────────────────────────────────────────────────────

type Testimonial = {
  isPlaceholder: boolean
  quote?: string
  name?: string
  context?: string
  prompt: string // what to go collect, shown only while isPlaceholder is true
}

const testimonials: Testimonial[] = [
  {
    isPlaceholder: true,
    prompt:
      'Add a line from someone who downloaded the free Roadmap — a DM, comment, or email reply works.',
  },
  {
    isPlaceholder: true,
    prompt:
      'Add a line from a Starter Kit & Implementation Vault buyer about what it helped them do.',
  },
  {
    // Sourced from the public testimonials section of beacons.ai/silvereconomy,
    // where it's already published for the same CFW course. Attributed as-is.
    // NOTE: confirm with Nancy Ayala / the CFW affiliate program that reusing
    // this reviewer's words here (a second site) is fine before this goes
    // live long-term — it's public content, but it's someone else's name.
    isPlaceholder: false,
    quote:
      "CFW is truly the ONLY course I stand by. With Nancy's tips, I continuously learn about all the traps in digital marketing. When I started, I had NO idea what I was doing.",
    name: 'Digital Reacher',
    context: 'CFW Student · shared via Beacons',
    prompt: '',
  },
]

export default function Testimonials() {
  const hasAnyReal = testimonials.some((t) => !t.isPlaceholder)

  return (
    <section className="bg-[#F5EFE6] py-20 md:py-24" id="reader-notes">
      <div className="max-w-5xl mx-auto px-6">
        <p className="font-sans text-[#2E865F] text-[11px] tracking-[0.3em] uppercase mb-4 text-center">
          {hasAnyReal ? 'In Their Own Words' : 'Reader Notes'}
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-[#2C2A28] leading-tight text-center mb-4">
          {hasAnyReal
            ? 'What people are saying'
            : 'Reader stories are just getting started'}
        </h2>
        <p className="font-sans text-[#2C2A28]/75 text-base text-center max-w-xl mx-auto mb-14 leading-relaxed">
          {hasAnyReal
            ? 'A few notes from women who took the first step.'
            : "We're a young hub, so this section is honest about that — real notes will replace these prompts as they come in."}
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) =>
            t.isPlaceholder ? (
              <div
                key={i}
                className="flex flex-col justify-between rounded-2xl border-2 border-dashed border-[#2C2A28]/20 bg-[#2C2A28]/[0.02] p-7 min-h-[200px]"
              >
                <PenLine size={18} className="text-[#2C2A28]/35 mb-4" />
                <p className="font-sans text-[#2C2A28]/55 text-sm leading-relaxed italic">
                  {t.prompt}
                </p>
                <p className="mt-6 font-sans text-[#2C2A28]/35 text-[10px] tracking-[0.15em] uppercase">
                  Placeholder — not shown as a real quote
                </p>
              </div>
            ) : (
              <div
                key={i}
                className="flex flex-col rounded-2xl bg-white border border-[#2C2A28]/8 shadow-md p-7"
              >
                <Quote size={20} className="text-[#D4AF37] mb-4" fill="currentColor" />
                <p className="font-serif text-[#2C2A28] text-base leading-relaxed mb-6 flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="h-px bg-[#2C2A28]/8 mb-4" />
                <p className="font-sans text-[#2C2A28] text-sm font-semibold">
                  {t.name}
                </p>
                <p className="font-sans text-[#2C2A28]/55 text-xs">{t.context}</p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  )
}
