import NavBar from '@/components/NavBar'
import HeroSection from '@/components/HeroSection'
import WhyFacelessSection from '@/components/WhyFacelessSection'
import ProductGrid from '@/components/ProductGrid'
import AffiliateSection from '@/components/AffiliateSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="bg-[#F5EFE6] min-h-screen text-[#2C2A28] font-sans antialiased">
      <NavBar />
      <main>
        <HeroSection />
        <WhyFacelessSection />
        <ProductGrid />
        <AffiliateSection />
      </main>
      <Footer />
    </div>
  )
}
