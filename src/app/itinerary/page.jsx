import { CallToAction3 } from '@/components/CallToAction3'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import Iti1 from '@/components/Iti1'
import Timeline from '@/components/Timeline'

export default function Itinerary() {
  return (
    <>
      <Header />
      <main>
        <Iti1 />
        <Timeline />
        <CallToAction3 />
      </main>
      <Footer />
    </>
  )
}