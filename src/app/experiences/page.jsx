import { CallToAction3 } from '@/components/CallToAction3'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import Exp from '@/components/Exp'
import { Community } from '@/components/Community'
import { Retreats } from '@/components/Retreats'
import { Events } from '@/components/Events'
import { Nomads } from '@/components/Nomads'
import { Experience } from '@/components/Exp2'
import FFVid from '@/components/FreeflowVideo'

export default function Experiences() {
  return (
    <>
      <Header />
      <main>
      <Experience/>
      <Community />
        <Retreats />
        <Events />
        <Nomads />
        <FFVid/>
        <Exp/>
        <CallToAction3 />
      </main>
      <Footer />
    </>
  )
}