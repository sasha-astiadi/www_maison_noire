import { CallToAction3 } from '@/components/CallToAction3'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import Exp from '@/components/Exp'
import { Community } from '@/components/Community'
import { Retreats } from '@/components/Retreats'
import { Events } from '@/components/Events'
import { Nomads } from '@/components/Nomads'

export default function Itinerary() {
  return (
    <>
      <Header />
      <main>
        <Exp/>
        <Community />
        <Retreats />
        <Events />
        <Nomads />
        <CallToAction3 />
      </main>
      <Footer />
    </>
  )
}