import { CallToAction } from '@/components/CallToAction'
import { CallToAction2 } from '@/components/CallToAction2'
import { CallToAction3 } from '@/components/CallToAction3'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import Route from '@/components/Route';
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import { Boat } from '@/components/Boat'
import { Experiences } from '@/components/Experiences'
import ThirdFeatures from '@/components/ThirdFeatures'
import NewFeatures from '@/components/NewFeatures'
import NewFeatures2 from '@/components/NewFeatures2'
import Activities from '@/components/Activities'
import Boats from '@/components/Boats'
import Carousel from '@/components/Carousel'
import CNNVIDEO from '@/components/CNNVIDEO'


export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CallToAction />
        <Experiences />
        <Boat />
        <NewFeatures />
        <NewFeatures2 />
        <CallToAction2 />
        <Carousel />
        <Route />
        <CNNVIDEO />
        <Testimonials />
        <CallToAction3 />
      </main>
      <Footer />
    </>
  )
}
