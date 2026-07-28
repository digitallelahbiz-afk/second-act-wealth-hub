import { ArrowUpRight } from 'lucide-react'
import { BEACONS_CAPTURE_LINK } from '@/lib/links'

// Sticky top navigation — warm cream background with a soft gold hairline
// separating it from the page content beneath.
export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 bg-[#F5EFE6]/90 backdrop-blur-md border-b border-[#2C2A28]/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#hero"
          className="font-serif text-[#2E865F] text-lg md:text-xl tracking-tight leading-none"
        >
          Second Act Wealth Hub
        </a>

        <nav
          className="hidden md:flex items-center gap-8"
          aria-label="Primary"
        >
          <a
            href="#roadmap"
            className="font-sans text-[#2C2A28]/70 hover:text-[#2E865F] text-sm transition-colors duration-200"
          >
            Free Roadmap
          </a>
          <a
            href="#toolkit"
            className="font-sans text-[#2C2A28]/70 hover:text-[#2E865F] text-sm transition-colors duration-200"
          >
            The Vault
          </a>
          <a
            href="#sneak-peek"
            className="font-sans text-[#2C2A28]/70 hover:text-[#2E865F] text-sm transition-colors duration-200"
          >
            Recommended Course
          </a>
        </nav>

        <a
          href={BEACONS_CAPTURE_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-1.5 bg-[#2E865F] hover:bg-[#20613F] text-[#F5EFE6] font-semibold text-sm py-2.5 px-5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-[#2E865F]/25 hover:-translate-y-0.5"
        >
          Get the Roadmap
          <ArrowUpRight
            size={16}
            className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>
      </div>
    </header>
  )
}
