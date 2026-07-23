// ─── Update this to your specific CFW affiliate link when ready ───────────────
const CFW_AFFILIATE_LINK = 'https://beacons.ai/silvereconomy'

// ─── Course modules from Create Faceless Wealth ───────────────────────────────
const CFW_MODULES = [
  { name: 'Introduction', desc: 'Welcome to Create Faceless Wealth' },
  { name: 'Fast Track to Selling CFW', desc: 'Start selling Create Faceless Wealth' },
  { name: 'The Basics', desc: 'Understand the Terms, Models & Foundation' },
  { name: 'Boss Bot', desc: 'Move faster, sell smarter, and confidently grow your business' },
  { name: 'Purpose Driven', desc: 'Build Your Business With Purpose' },
  { name: 'Understand Digital Products', desc: 'Your first step to building passive income online' },
  { name: 'Digital Product Creation in Canva', desc: 'Design and launch high-converting digital products' },
  { name: 'Building Your Brand', desc: "Let's Build Your Profitable Faceless Brand" },
  { name: 'Faceless Insta Launchpad', desc: 'Setup the Face of Your Faceless Instagram Account' },
  { name: 'Content Strategy', desc: 'Maximize Your Profits Through Your Faceless Content' },
  { name: 'Insta Stories Success System', desc: 'Transform Your Instagram Stories Into a Sales Powerhouse' },
  { name: 'DM Mastery', desc: 'Confidently close sales in your DMs' },
  { name: 'Freebie to Funnel', desc: 'Create, Attract, Nurture, and Convert' },
  { name: 'Instagram Growth', desc: 'Growing Your Faceless Instagram Account' },
  { name: 'AI x Faceless Formula', desc: 'Discover a new way to be faceless online with AI' },
  { name: 'Affiliate Marketing', desc: 'Learn how to find, promote, and profit from affiliate offers' },
]

// ─── DIY Instagram Audit Checklist from the CFW freebie ──────────────────────
const AUDIT_CHECKLIST = [
  {
    category: '1. Profile Optimization',
    items: [
      'Is your profile picture clear and on-brand?',
      'Is your bio informative, engaging, and includes relevant keywords?',
      'Are your contact details up to date?',
    ],
  },
  {
    category: '2. Content Quality',
    items: [
      'Are your posts visually appealing and consistent in style?',
      'Do your captions resonate with your audience and encourage engagement?',
      'Are you using a mix of content formats (photos, videos, stories, reels)?',
    ],
  },
  {
    category: '3. Audience Engagement',
    items: [
      'Are you responding to comments and messages in a timely manner?',
      'Do you actively engage with your followers through likes, comments, and shares?',
      'Are you using Instagram features like polls, questions, and quizzes to interact with your audience?',
    ],
  },
  {
    category: '4. Hashtag Strategy',
    items: [
      'Are you using relevant and trending hashtags in your posts?',
      'Have you created a mix of niche-specific and broader hashtags?',
      'Are you monitoring the performance of your hashtags and adjusting them accordingly?',
    ],
  },
  {
    category: '5. Analytics Review',
    items: [
      'Are you regularly reviewing your Instagram Insights to track your performance?',
      'Do you analyze key metrics such as reach, engagement, and follower growth?',
      'Are you using data to optimize your content strategy and posting schedule?',
    ],
  },
  {
    category: '6. Collaborations & Partnerships',
    items: [
      'Have you collaborated with others to expand your reach? Like LIVES!',
    ],
  },
  {
    category: '7. Call-to-Action (CTA)',
    items: [
      'Do your posts include clear CTAs to encourage user interaction (e.g., like, comment, share, visit link, comment "INFO")?',
      'Are you directing followers to take specific actions such as grabbing your freebie or visiting your website?',
      'Are you testing different CTAs to see what resonates best with your audience?',
    ],
  },
]

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-alabaster font-sans">

      {/* ── Nav ─────────────────────────────────────────────────────────────── */}
      <header className="bg-navy border-b border-white/8">
        <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
          <p className="font-serif text-gold text-lg leading-none">
            Second Act Wealth Hub
          </p>
          <p className="text-alabaster/30 text-xs tracking-widest uppercase hidden sm:block">
            Second Act Wealth Hub
          </p>
        </div>
      </header>

      {/* ── 1. CONFIRMATION HERO ─────────────────────────────────────────────── */}
      <section className="bg-navy pb-24 pt-20 text-center px-6">
        {/* Checkmark */}
        <div className="w-16 h-16 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center mx-auto mb-7">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#D4AF37"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-7 h-7"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>

        <h1 className="font-serif text-4xl md:text-5xl text-alabaster leading-tight mb-5 max-w-xl mx-auto">
          You&apos;re in.{' '}
          <span className="text-gold">Your Blueprint is on its way.</span>
        </h1>

        <p className="text-alabaster/60 text-lg max-w-md mx-auto leading-relaxed mb-3">
          Check your inbox — your free{' '}
          <strong className="text-alabaster/85 font-medium">
            90-Day Second Act Blueprint
          </strong>{' '}
          will arrive within the next few minutes.
        </p>
        <p className="text-alabaster/35 text-sm max-w-xs mx-auto">
          Don&apos;t see it? Check your spam folder and mark us as a trusted
          sender.
        </p>

        <div aria-hidden="true" className="w-16 h-px bg-gold/40 mx-auto mt-14" />
      </section>

      {/* ── 2. CFW SNEAK PEEK INTRO ──────────────────────────────────────────── */}
      <section className="bg-alabaster py-20 md:py-28 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-sans text-gold text-[11px] tracking-[0.3em] uppercase mb-5">
            While You Wait — One More Thing
          </p>
          <p className="font-serif text-navy text-2xl md:text-3xl mb-3">
            Here&apos;s Your Sneak Peek Into...
          </p>
          {/* CFW title treatment */}
          <div className="inline-block mb-8">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-navy font-bold leading-tight">
              Create Faceless Wealth
            </h2>
            <p className="font-sans text-gold text-lg tracking-widest uppercase mt-2">
              (CFW)
            </p>
          </div>
          <div className="w-16 h-[3px] bg-gold mx-auto mb-8" />
          <p className="text-charcoal/60 text-lg leading-relaxed max-w-2xl mx-auto mb-4">
            We&apos;re so excited to give you this behind-the-scenes look at
            Create Faceless Wealth. This guide is more than just a sneak
            peek — it&apos;s your first step toward building a profitable brand
            without ever showing your face.
          </p>
          <div className="bg-navy/5 border-l-4 border-gold rounded-r-xl px-6 py-4 text-left max-w-2xl mx-auto">
            <p className="text-navy text-base leading-relaxed font-medium">
              Whether you&apos;re new to faceless creation, reselling
              done-for-you courses, or selling your own digital products, this
              is here to give you a head start.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. WHAT IS CFW ───────────────────────────────────────────────────── */}
      <section className="bg-navy py-20 md:py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="font-sans text-gold text-[11px] tracking-[0.3em] uppercase mb-4">
              The Ultimate Course for Faceless Creators
            </p>
            <h3 className="font-serif text-3xl md:text-4xl text-alabaster leading-tight">
              What is CFW?
            </h3>
          </div>

          <p className="text-alabaster/70 text-base leading-relaxed text-center mb-5 max-w-2xl mx-auto">
            Create Faceless Wealth is a course designed specifically for people
            who want to grow a brand without showing their face. It&apos;s not
            just about selling — it&apos;s about creating a brand, building
            trust, and using proven strategies to grow a profitable business
            online.
          </p>
          <p className="text-alabaster/70 text-base leading-relaxed text-center mb-10 max-w-2xl mx-auto">
            Whether you&apos;re reselling a done-for-you course, selling
            digital products, or promoting Create Faceless Wealth, this course
            is your complete roadmap.
          </p>

          {/* What makes it different */}
          <div className="bg-white/5 border border-gold/20 rounded-2xl p-8">
            <p className="font-serif text-gold text-lg mb-6 text-center">
              What makes this course different?
            </p>
            <div className="space-y-4">
              {[
                {
                  title: 'Step-by-step guidance',
                  desc: "You'll know exactly what to do, from setting up your Instagram account to selling your products effectively.",
                },
                {
                  title: 'Done-for-you tools',
                  desc: 'No guesswork — we give you templates, flows, and frameworks to help you save time and build faster.',
                },
                {
                  title: 'Support at every step',
                  desc: 'Join a community of like-minded creators who are growing their brands, just like you.',
                },
              ].map(({ title, desc }) => (
                <div key={title} className="flex items-start gap-4">
                  <span className="text-gold text-[10px] mt-1.5 shrink-0">◆</span>
                  <p className="text-alabaster/70 text-sm leading-relaxed">
                    <strong className="text-alabaster">{title}:</strong>{' '}
                    {desc}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-alabaster/60 text-sm leading-relaxed text-center mt-6 italic">
              "Your faceless journey doesn&apos;t have to be complicated. With
              this course, you have everything you need to grow and succeed."
            </p>
          </div>
        </div>
      </section>

      {/* ── 4. WHY FACELESS CREATION ─────────────────────────────────────────── */}
      <section className="bg-cream py-20 md:py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="font-sans text-gold text-[11px] tracking-[0.3em] uppercase mb-4">
              Your Brand. Your Rules.
            </p>
            <h3 className="font-serif text-3xl md:text-4xl text-navy leading-tight">
              Why Faceless Creation?
            </h3>
          </div>

          <p className="text-charcoal/60 text-base leading-relaxed text-center mb-4 max-w-2xl mx-auto">
            Faceless creation means building your brand and business without
            showing your face in your content. Instead of relying on your
            appearance to connect with your audience, you focus on delivering
            value, sharing knowledge, and providing solutions.
          </p>
          <p className="text-charcoal/60 text-base leading-relaxed text-center mb-10 max-w-xl mx-auto">
            Not everyone feels comfortable showing their face online — and
            that&apos;s perfectly okay.
          </p>

          <div className="bg-navy rounded-2xl p-8 ring-1 ring-gold/20">
            <p className="font-serif text-gold text-lg mb-6 text-center">
              Here&apos;s why faceless creation is such a game-changer:
            </p>
            <div className="space-y-5">
              {[
                {
                  heading: 'More freedom, less pressure',
                  body: 'Focus on your content and message instead of how you look.',
                },
                {
                  heading: 'Your audience connects with value, not vanity',
                  body: "It's not about appearances — it's about the transformation you offer.",
                },
                {
                  heading: 'Anyone can start',
                  body: "Whether you're camera-shy or simply prefer privacy, faceless creation is for anyone ready to share value and build wealth online.",
                },
              ].map(({ heading, body }) => (
                <div key={heading} className="flex items-start gap-4">
                  <span className="text-gold text-[10px] mt-1.5 shrink-0">◆</span>
                  <p className="text-alabaster/70 text-sm leading-relaxed">
                    <strong className="text-alabaster">{heading}:</strong>{' '}
                    {body}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-alabaster/55 text-sm leading-relaxed text-center mt-6 italic border-t border-white/10 pt-6">
              With Create Faceless Wealth, you&apos;ll learn how to master this
              unique strategy and turn your vision into profit.
            </p>
          </div>
        </div>
      </section>

      {/* ── 5. WHAT'S INSIDE THE COURSE ──────────────────────────────────────── */}
      <section className="bg-alabaster py-20 md:py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-sans text-gold text-[11px] tracking-[0.3em] uppercase mb-4">
              Sneak Peek
            </p>
            <h3 className="font-serif text-3xl md:text-4xl text-navy leading-tight">
              What&apos;s Inside the Course
            </h3>
            <p className="text-charcoal/50 text-base mt-4 max-w-lg mx-auto">
              A complete, end-to-end system built entirely around faceless
              creation. Here&apos;s just some of what&apos;s waiting for you:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CFW_MODULES.map((mod) => (
              <div
                key={mod.name}
                className="bg-navy/5 border border-navy/10 rounded-xl p-5 hover:border-gold/30 hover:bg-navy/8 transition-all duration-200"
              >
                <span className="text-gold text-[10px]">◆</span>
                <p className="font-serif text-navy text-[15px] leading-snug mt-2 mb-1">
                  {mod.name}
                </p>
                <p className="text-charcoal/45 text-xs leading-relaxed">
                  {mod.desc}
                </p>
              </div>
            ))}
            {/* Overflow teaser */}
            <div className="bg-gold/10 border border-gold/25 rounded-xl p-5 flex items-center justify-center text-center">
              <p className="font-serif text-navy text-[15px] leading-snug">
                + Many more modules inside
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. DIY INSTAGRAM AUDIT CHECKLIST ─────────────────────────────────── */}
      <section className="bg-navy py-20 md:py-28 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Free Resource badge */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-gold/15 border border-gold/30 rounded-full px-5 py-2 mb-6">
              <span className="text-gold text-[10px]">✦</span>
              <span className="font-sans text-gold text-[11px] tracking-[0.2em] uppercase font-semibold">
                Free Resource — Included with CFW
              </span>
            </div>
            <h3 className="font-serif text-3xl md:text-4xl text-alabaster leading-tight mb-4">
              DIY Instagram Audit Checklist
            </h3>
            <p className="text-alabaster/55 text-base max-w-lg mx-auto leading-relaxed">
              Use this ready-to-use checklist to audit your Instagram profile
              right now — then imagine what you could build with the full
              course in your hands.
            </p>
          </div>

          {/* Checklist card */}
          <div className="bg-alabaster rounded-2xl overflow-hidden ring-1 ring-gold/20">
            {/* Gold top bar */}
            <div className="h-1 bg-gradient-to-r from-gold-dark via-gold to-gold-light" />

            <div className="p-8 md:p-10 space-y-7">
              {AUDIT_CHECKLIST.map((section) => (
                <div key={section.category}>
                  <p className="font-serif text-navy text-base font-semibold mb-3">
                    {section.category}
                  </p>
                  <ul className="space-y-2 pl-1">
                    {section.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3"
                      >
                        {/* Checkbox */}
                        <span className="mt-[3px] shrink-0 w-4 h-4 rounded border border-gold/50 bg-gold/5 flex items-center justify-center">
                          <span className="text-gold text-[8px]">○</span>
                        </span>
                        <span className="text-charcoal/65 text-sm leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Bottom note */}
            <div className="px-8 pb-6 md:px-10 md:pb-8">
              <div className="border-t border-navy/10 pt-5">
                <p className="text-charcoal/40 text-xs text-center italic">
                  This checklist is a free resource from Create Faceless Wealth
                  by Nancy Ayala.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. MAIN CTA ──────────────────────────────────────────────────────── */}
      <section className="bg-cream py-20 md:py-28 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-sans text-gold text-[11px] tracking-[0.3em] uppercase mb-5">
            Your Next Step
          </p>
          <h3 className="font-serif text-3xl md:text-4xl text-navy leading-tight mb-5">
            This guide is just the beginning.
            <span className="block text-charcoal/60 font-normal text-2xl md:text-3xl mt-2">
              Imagine what&apos;s possible with the full course in your hands.
            </span>
          </h3>
          <p className="text-charcoal/55 text-base leading-relaxed mb-10 max-w-lg mx-auto">
            If you&apos;re ready to transform your brand, grow your income, and
            finally master faceless creation — here&apos;s your next step.
          </p>

          {/* CTA Button */}
          <a
            href={CFW_AFFILIATE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 bg-gold hover:bg-gold-light text-navy font-semibold text-base md:text-lg py-5 px-10 rounded-xl transition-all duration-200 hover:shadow-2xl hover:shadow-gold/25 hover:-translate-y-0.5 w-full sm:w-auto"
          >
            Learn How to Build Your Faceless Brand &amp; Start Earning
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </a>

          <p className="mt-5 text-charcoal/35 text-xs">
            No pressure. Take your time. This will still be here when
            you&apos;re ready.
          </p>
        </div>
      </section>

      {/* ── 8. AFFILIATE DISCLOSURE + FOOTER ─────────────────────────────────── */}
      <footer className="bg-navy border-t border-white/8">
        <div className="max-w-5xl mx-auto px-6 py-12">
          {/* Disclosure */}
          <p className="text-alabaster/30 text-xs text-center leading-relaxed max-w-md mx-auto mb-10">
            Affiliate disclosure: I may earn a commission if you sign up
            through this link, at no additional cost to you. I only recommend
            tools and programs I personally trust.
          </p>
          <div className="border-t border-white/8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <p className="font-serif text-gold/50 text-sm">
              Second Act Wealth Hub
            </p>
            <p className="text-alabaster/18 text-xs">
              No spam. No pressure. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </footer>

    </div>
  )
}
