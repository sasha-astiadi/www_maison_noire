'use client'

import { BuildingOffice2Icon, EnvelopeIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import Image from 'next/image'

export function ContactHero() {
  return (
    <div className="relative isolate bg-gray-100">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        {/* Left container (unchanged) */}
        <div className="relative px-6 pt-24 pb-20 lg:static lg:px-8 lg:py-32">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
              <svg
                aria-hidden="true"
                className="absolute inset-0 size-full mask-[radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-gray-200"
              >
                <defs>
                  <pattern
                    x="100%"
                    y={-1}
                    id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                    width={200}
                    height={200}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M130 200V.5M.5 .5H200" fill="none" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" strokeWidth={0} className="fill-white" />
                <svg x="100%" y={-1} className="overflow-visible fill-gray-50">
                  <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                </svg>
                <rect fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" width="100%" height="100%" strokeWidth={0} />
              </svg>
              <div
                aria-hidden="true"
                className="absolute top-[calc(100%-13rem)] -left-56 hidden transform-gpu blur-3xl lg:top-[calc(50%-7rem)] lg:left-[max(-14rem,calc(100%-59rem))]"
              >
                <div
                  style={{
                    clipPath:
                      'polygon(74.1% 56.1%, 100% 38.6%, 97.5% 73.3%, 85.5% 100%, 80.7% 98.2%, 72.5% 67.7%, 60.2% 37.8%, 52.4% 32.2%, 47.5% 41.9%, 45.2% 65.8%, 27.5% 23.5%, 0.1% 35.4%, 17.9% 0.1%, 27.6% 23.5%, 76.1% 2.6%, 74.1% 56.1%)',
                  }}
                  className="aspect-1155/678 w-288.75 bg-linear-to-br from-[#80caff] to-[#4f46e5] opacity-10"
                />
              </div>
            </div>
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              Get in Touch
            </h2>
            <p className="mt-6 text-lg/8 text-gray-600">
              At OurWorld, we value your feedback and inquiries. Whether you're interested in our ventures, have
              questions about our technologies, or want to collaborate, we're here to connect. Reach out to us today
              and let's build a better digital future together.
            </p>
            <dl className="mt-10 space-y-4 text-base/7 text-gray-600">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <BuildingOffice2Icon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                </dt>
                <dd>
                  Nexus Global Financial Services Limited,
                  <br />
                  Ebene, Mauritius.
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                </dt>
                <dd>
                  <a href="mailto:info@ourworld.tf" className="hover:text-gray-900">
                    info@ourworld.tf
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Right container (image) */}
        <div className="relative flex items-center justify-center bg-gray-100 px-6 lg:py-24 pt-12 pb-24 lg:px-8">
          <div className="w-full max-w-md overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/images/contact/contact.png"
              alt="sunset"
              width={900}
              height={600}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
