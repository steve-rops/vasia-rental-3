import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { Amenities } from '@/components/Amenities'
import ContactForm from '@/components/ContactForm'
import { Features } from '@/components/Features'
import { Footer } from '@/components/Footer'
import Header from '@/components/Header'
import { Hero } from '@/components/Hero'
import { ImageGallery } from '@/components/ImageGallery'
import { NearByVenues } from '@/components/NearByVenues'
import { Dialog } from '@/components/ui/dialog'
import { CustomDialogContent } from '@/components/ui/customDialogContent'
import { Spinner } from '@/components/ui/spinner'

export const Route = createFileRoute('/')({
  component: App,
  pendingComponent: Loading,
})

function App() {
  const [openModal, setModalIsOpen] = useState(false)

  return (
    <div className="max-w-7xl mx-auto">
      <Dialog open={openModal} onOpenChange={setModalIsOpen}>
        <Header />
        <main className="space-y-8">
          <Hero setModalOpen={setModalIsOpen} />
          <Features />
          <Amenities />
          <NearByVenues />
          <ImageGallery setModalOpen={setModalIsOpen} />
          <ContactForm />
        </main>
        <Footer />

        <CustomDialogContent />
      </Dialog>
    </div>
  )
}

function Loading() {
  return (
    <div className="h-svh w-full grid place-items-center">
      <Spinner className="w-12 h-12" />
    </div>
  )
}
