import Image from 'next/image'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import React from 'react'


const CNNVIDEO = () => {
    return (
        <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="bg-creme-600 pt-6 pb-24"
    >
      <Container>
        <div className="mx-auto max-w-4xl md:text-center">
          <h2 className="font-display mt-2 text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">
          VEDA ON CNN 
          </h2>
          <p className="mt-4 text-lg pb-6 tracking-tight text-slate-700">
          CNN Travel visited the Veda boats to give you a first hand impression of what awaits you when cruising the Nile.
          </p>
        </div>
      <div className="video-container">
        <video className="video-player" autoPlay muted loop>
          <source src="/videos/veda_cnn.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
        </Container>
        </section>
    );
  };
  
  export default CNNVIDEO;