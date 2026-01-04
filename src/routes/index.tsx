import { createFileRoute } from '@tanstack/react-router'
import Header from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Features } from '@/components/Features'
import { Amenities } from '@/components/Amenities'
import { NearByVenues } from '@/components/NearByVenues'
import { Footer } from '@/components/Footer'
import { ImageGallery } from '@/components/ImageGallery'
import ContactForm from '@/components/ContactForm'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      <main className="space-y-8">
        <Hero />
        <Features />
        <Amenities />
        <NearByVenues />
        <ImageGallery />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
