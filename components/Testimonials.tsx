import { Quote } from 'lucide-react'

// ─────────────────────────────────────────────────────────────────────────────
// Social proof section.
//
// Only entries with isPlaceholder: false are ever rendered — a live site
// should never show an unfinished "add a quote here" card. Add real
// quotes below as they come in; the grid sizes itself to however many
// real testimonials currently exist (1–3 columns).
//
// Current gap worth closing: every quote below is about the CFW course
// (Nancy Ayala's affiliate product), not the Roadmap or the $17 Vault —
// so there's still zero direct social proof for Leila's own products.
// Swap in a Roadmap/Vault quote here the moment one exists.
// ─────────────────────────────────────────────────────────────────────────────

type Testimonial = {
  isPlaceholder: boolean
  quote?: string
  name?: string
  context?: string
}

const testimonials: Testimonial[] = [
  {
    // Sourced from the public testimonials section of beacons.ai/silvereconomy,
    // where it's already published for the same CFW course. Attributed as-is.
    // NOTE: confirm with Nancy Ayala / the CFW affiliate program that reusing
    // this reviewer's words here (a second site) is fine before this stays
    // live long-term — it's public content, but it's someone else's name.
    isPlaceholder: false,
    quote:
      "CFW is truly the ONLY course I stand by. With Nancy's tips, I continuously learn about all the traps in digital marketing. When I started, I had NO idea what I was doing.",
    name: 'Digital Reacher',
    context: 'CFW Student · shared via Beacons',
  },
  {
    // Trimmed to the complete sentence — source screenshot cut off after
    // "...I'm". Get the full original from Leila if the rest matters.
    isPlaceholder: false,
    quote:
      "I was a teacher for 13 years as of this past year. They say teachers make the worst students, lol — there may be some truth to that. On the contrary, I'm currently enjoying learning!",
    name: 'Kellye Woodard',
    context: 'CFW Student',
  },
  {
    // Trimmed to the complete sentence — source screenshot cut off after
    // "...It came". Income claim: keep paired with the site-wide results
    // disclaimer in the footer ("results not typical or guaranteed").
    isPlaceholder: false,
    quote:
      "I wanted to share a little win because I think it's important for people to know... CFW isn't just about reselling a course. In June, I generated just over $1,200, and none of it came from selling CFW.",
    name: 'Tori Crosby',
    context: 'CFW Student',
  },
]

export default function Testimonials() {
  const real = testimonials.filter((t) => !t.isPlaceholder)

  if (real.length === 0) return null

  const gridColsClass =
    real.length === 1
      ? 'md:grid-cols-1 max-w-md'
      : real.length === 2
        ? 'md:grid-cols-2 max-w-3xl'
        : 'md:grid-cols-3'

  return (
    <section className="bg-[#F5EFE6] py-20 md:py-24" id="reader-notes">
      <div className="max-w-5xl mx-auto px-6">
        <p className="font-sans text-[#2E865F] text-[11px] tracking-[0.3em] uppercase mb-4 text-center">
          In Their Own Words
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-[#2C2A28] leading-tight text-center mb-4">
          What people are saying
        </h2>
        <p className="font-sans text-[#2C2A28]/75 text-base text-center max-w-xl mx-auto mb-14 leading-relaxed">
          A few notes from women in the CFW community.
        </p>

        <div className={`grid gap-6 mx-auto ${gridColsClass}`}>
          {real.map((t, i) => (
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
          ))}
        </div>
      </div>
    </section>
  )
}
