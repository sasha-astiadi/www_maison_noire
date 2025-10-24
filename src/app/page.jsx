
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero';
import AudioPlayer from '@/components/ui/AudioPlayer';




export default function Home() {
  return (
    <>
      <Header />
      <main>
        <AudioPlayer />
        <Hero />
      </main>
      <Footer />
    </>
  )
}