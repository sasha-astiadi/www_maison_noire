import Image from 'next/image'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import BgNoise from '@/components/BgNoise'

export function Hero() {
  return (
        <div className="relative -mt-20 min-h-screen">
      <div
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        style={{ backgroundImage: 'url(/images/hero.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <BgNoise />
      <Container className="flex min-h-screen items-center pb-16 pt-20 text-center lg:pt-32">
        <div className="relative z-10 mx-auto flex justify-center">
          <Image
            src="/images/noire_logo.png"
            alt="Maison Noire"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>
      </Container>
    </div>
  )
}
