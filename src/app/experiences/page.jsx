import { CallToAction3 } from '@/components/CallToAction3'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import Exp from '@/components/Exp'

export default function Itinerary() {
  return (
    <>
      <Header />
      <main>
        <Exp/>
        <CallToAction3 />
      </main>
      <Footer />
    </>
  )
}