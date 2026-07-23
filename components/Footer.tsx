const currentYear = new Date().getFullYear()

// Footer — deep espresso background, gold hairline top border, warm cream
// text at reduced opacity for hierarchy.
export default function Footer() {
  return (
    <footer className="bg-[#2C2A28] border-t border-[#D4AF37]/25">
      <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <p className="font-serif text-[#D4AF37] text-xl mb-3 leading-snug">
              Second Act Wealth Hub
            </p>
            <p className="text-[#F5EFE6]/55 text-sm leading-relaxed mb-4">
              Helping women 50+ build a private digital estate using the life
              experience they already have.
            </p>
            <p className="text-[#F5EFE6]/35 text-xs italic leading-relaxed">
              &ldquo;Your analog life experience is a digital asset.
              <br />
              You just need a translator.&rdquo;
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="font-sans text-[#F5EFE6]/40 text-[10px] tracking-[0.25em] uppercase mb-5">
              Follow Along
            </p>
            <nav className="space-y-3" aria-label="Social links">
              <a
                href="https://instagram.com/secondactwealth"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[#F5EFE6]/65 hover:text-[#D4AF37] text-sm transition-colors duration-200"
              >
                Instagram — @secondactwealth
              </a>
              <a
                href="https://beacons.ai/silvereconomy"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[#F5EFE6]/65 hover:text-[#D4AF37] text-sm transition-colors duration-200"
              >
                Beacons — All Links
              </a>
            </nav>
          </div>

          {/* Legal */}
          <div>
            <p className="font-sans text-[#F5EFE6]/40 text-[10px] tracking-[0.25em] uppercase mb-5">
              Disclosures
            </p>
            <div className="space-y-3">
              <p className="text-[#F5EFE6]/40 text-xs leading-relaxed">
                This site contains affiliate links. We may earn a commission
                on qualifying purchases at no extra cost to you.
              </p>
              <p className="text-[#F5EFE6]/40 text-xs leading-relaxed">
                Results shown are not typical or guaranteed. Any income
                figures mentioned are examples only, not promises.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-[#F5EFE6]/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#F5EFE6]/30 text-xs">
            © {currentYear} Second Act Wealth Hub
          </p>
          <p className="text-[#F5EFE6]/25 text-xs">
            Built with care. No spam. No pressure.
          </p>
        </div>
      </div>
    </footer>
  )
}
