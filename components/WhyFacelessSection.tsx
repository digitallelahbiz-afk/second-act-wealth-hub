import { Type, Mic, FileText, Workflow, LucideIcon } from 'lucide-react'

interface Benefit {
  icon: LucideIcon
  title: string
  description: string
}

const benefits: Benefit[] = [
  {
    icon: Type,
    title: 'Text-First Video',
    description:
      'Words carry the weight. Bold on-screen text and stock B-roll do the work your face never had to.',
  },
  {
    icon: Mic,
    title: 'Voiceover Explainer',
    description:
      'Your voice, your pacing, your judgment — heard, not watched. No lighting, no ring light, no performance.',
  },
  {
    icon: FileText,
    title: 'Written Authority',
    description:
      'Guides, carousels, and long-form posts that sell your expertise quietly, while you are offline living your life.',
  },
  {
    icon: Workflow,
    title: 'Systems & Frameworks',
    description:
      "Repeatable structures so the next product doesn't start from a blank page. Build once, reuse always.",
  },
]

// "Why Faceless?" — four benefit cards explaining the content approach.
// Cream background, white cards with soft shadows and a gold hover accent.
export default function WhyFacelessSection() {
  return (
    <section className="bg-[#F5EFE6] py-20 md:py-28" id="why-faceless">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-sans text-[#2E865F] text-[11px] tracking-[0.3em] uppercase mb-4 text-center">
          The Faceless Advantage
        </p>
        <h2 className="font-serif text-3xl md:text-5xl text-[#2C2A28] leading-tight text-center mb-4 text-balance">
          You don&rsquo;t need a camera. You need a translator.
        </h2>
        <p className="font-sans text-[#2C2A28] text-base md:text-lg text-center max-w-xl mx-auto mb-14 leading-relaxed">
          Four ways decades of professional judgment become digital assets —
          none of them require you to be on screen.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group relative bg-white rounded-2xl border border-[#2C2A28]/8 shadow-sm hover:shadow-xl hover:shadow-[#2E865F]/10 p-7 transition-all duration-300 hover:-translate-y-1"
            >
              <div
                aria-hidden="true"
                className="absolute top-0 left-7 right-7 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <div className="w-12 h-12 rounded-xl bg-[#2E865F]/10 flex items-center justify-center mb-5 group-hover:bg-[#2E865F] transition-colors duration-300">
                <Icon
                  size={22}
                  className="text-[#2E865F] group-hover:text-[#F5EFE6] transition-colors duration-300"
                  strokeWidth={1.75}
                />
              </div>
              <h3 className="font-serif text-lg text-[#2C2A28] mb-2.5 leading-snug">
                {title}
              </h3>
              <p className="font-sans text-[#2C2A28] text-sm leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
