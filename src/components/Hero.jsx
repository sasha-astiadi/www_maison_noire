import Image from 'next/image'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import BgNoise from '@/components/BgNoise'

export function Hero() {
  return (
    <>
      <div className="relative -mt-20 min-h-screen">
      <div
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        style={{ backgroundImage: 'url(/images/hero.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <BgNoise />
      <Container className="flex min-h-screen items-center justify-center text-center">
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
      <div className="relative">
        <Image
          unoptimized
          src="/images/booktear.png"
          alt="Page divider"
          width={1080}
          height={200}
          className="relative z-10 -mt-14 w-full h-auto"
        />
      </div>
      <div className="relative">
        <div
          className="bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/paper.jpg)' }}
        >
          <div className="px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl text-left">
              <p className="font-script text-2xl text-love-red mb-2 font-typewriter">Mon cher,</p>
              <p className="font-typewriter text-xl max-w-2xl mx-auto leading-relaxed">
                If you find yourself here, you’ve survived the noise.<br />
                Sit, let the glass sweat a little.<br />
                The band will start soon, and perhaps someone will meet your eyes before the chorus ends.<br />
                If not, the night still owes you a dance.
              </p>
              <p className="font-script text-xl text-love-red mt-6 font-typewriter">— M.N.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
