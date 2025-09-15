import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ProductsSection } from "@/components/products-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ProductsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
