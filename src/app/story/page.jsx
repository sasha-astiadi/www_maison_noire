import { CallToAction3 } from '@/components/CallToAction3'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import Story from '@/components/Story'
import Story2 from '@/components/Story2'
import Team from '@/components/Team'


export default function OurStory() {
  return (
    <>
      <Header />
      <main>
        <Story />
        <Story2 />
        <Team />
        <CallToAction3 />
      </main>
      <Footer />
    </>
  )
}
