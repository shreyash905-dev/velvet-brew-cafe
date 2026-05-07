import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'
import { MenuSection } from '@/components/menu-section'
import { ConciergeSection } from '@/components/concierge-section'
import { ExperienceSection } from '@/components/experience-section'
import { GallerySection } from '@/components/gallery-section'
import { ReservationsSection } from '@/components/reservations-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <MenuSection />
      <ConciergeSection />
      <ExperienceSection />
      <GallerySection />
      <ReservationsSection />
      <TestimonialsSection />
      <Footer />
    </>
  )
}

