import Image from 'next/image'
import logo1 from '@/images/logos/1.svg'
import logo2 from '@/images/logos/2.svg'
import logo3 from '@/images/logos/3.svg'
import logo4 from '@/images/logos/4.svg'
import logo5 from '@/images/logos/5.svg'
import logo6 from '@/images/logos/6.svg'

export function FeaturedOn() {
  return (
    <div className="relative z-10 pt-10">
      <p className="mt-10 font-display text-large lg:text-2xl font-semibold italic text-slate-900">
        As seen and featured on
      </p>
      <ul
        role="list"
        className="mt-8 flex items-center flex-wrap justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0"
      >
        {[
          [
            { name: 'CNN', logo: logo1 },
            { name: 'HLS', logo: logo2 },
            { name: 'Bookretreats', logo: logo3 },
          ],
          [
            { name: 'Beaviajera', logo: logo4 },
            { name: 'Egytalloyd', logo: logo5 },
            { name: 'AST', logo: logo6 },
          ],
        ].map((group, groupIndex) => (
          <li key={groupIndex}>
            <ul
              role="list"
              className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0"
            >
              {group.map((company) => (
                <li key={company.name} className="flex">
                  <Image src={company.logo} alt={company.name} unoptimized />
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}
