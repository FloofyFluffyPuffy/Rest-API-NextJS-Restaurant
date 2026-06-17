"use client"
import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

const PARTNERS_DATA = [
  {
    id: 1,
    initials: 'HF',
    title: 'Green Valley Farms',
    subtitle: 'Organic Produce',
    description: 'Supplying our kitchen daily with heirloom vegetables and crisp microgreens harvested just dawn hours before service.',
  },
  {
    id: 2,
    initials: 'BC',
    title: 'Blue Anchor Coastline',
    subtitle: 'Sustainable Seafood',
    description: 'A family-owned dock providing line-caught fish and sustainably harvested shellfish from pristine coastal waters.',
  },
  {
    id: 3,
    initials: 'CR',
    title: 'Copper Ridge Creamery',
    subtitle: 'Artisanal Dairy',
    description: 'Crafting small-batch cheeses, cultured butter, and heavy creams that give our sauces and desserts their rich depth.',
  },
  {
    id: 4,
    initials: 'OW',
    title: 'Old Willow Vineyards',
    subtitle: 'Bespoke Wines',
    description: 'An independent valley vineyard cultivating native grapes, producing vintages selected for our pairings.',
  },
]

const Partners = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const updateSize = () => setIsMobile(window.innerWidth <= 640)
    updateSize()
    window.addEventListener('resize', updateSize)
    return () => window.removeEventListener('resize', updateSize)
  }, [])

  return (
    <section className="partners bg-neutral-950 py-24 text-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4" data-aos="fade-right">
            <span className="text-xs font-semibold tracking-widest text-[#CDA45E] uppercase">
              Community Sources
            </span>
            <h2 className="mt-2 text-3xl font-serif tracking-tight text-white sm:text-4xl">
              Our Local Partners
            </h2>
            <div className="mt-4 h-0.5 w-16 bg-[#CDA45E]"></div>
            <p className="mt-6 text-base leading-relaxed text-[#A0A0A0]">
              We believe exceptional dining starts at the source. By collaborating closely with local farmers, independent fisheries, and artisanal producers, we bring the freshest seasonal ingredients straight to your table while supporting our regional ecosystem.
            </p>
{/* If NOT mobile, render the logo */}
            {!isMobile && (
              <img 
                src="/assets/logo.svg" 
                alt="Downtown Bistro Logo" 
                className="justify-self-center self-center h-88 w-88 -mt-12"
              />
            )}
          </div>

          <div className="lg:col-span-8">
            {isMobile ? (
              <Swiper
                slidesPerView={1}
                spaceBetween={16}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                modules={[Autoplay]}
                className="partner-swiper"
              >
                {PARTNERS_DATA.map((partner, index) => (
                  <SwiperSlide key={partner.id}>
                    <div
                      className="rounded-xl border border-neutral-800 bg-neutral-900 p-6 shadow-sm transition-all duration-300 hover:shadow-md"
                      data-aos="fade-up"
                      data-aos-delay={100 + index * 100}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#CDA45E]/10 text-[#CDA45E] font-serif font-bold text-lg">
                          {partner.initials}
                        </div>
                        <div>
                          <h3 className="text-lg font-serif text-neutral-100">{partner.title}</h3>
                          <p className="text-xs font-medium text-[#CDA45E] uppercase tracking-wider">{partner.subtitle}</p>
                        </div>
                      </div>
                      <p className="mt-4 text-sm leading-relaxed text-[#A0A0A0]">
                        {partner.description}
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {PARTNERS_DATA.map((partner, index) => (
                  <div 
                    key={partner.id}
                    className="rounded-xl border border-neutral-800 bg-neutral-900 p-6 shadow-sm transition-all duration-300 hover:shadow-md"
                    data-aos="fade-up"
                    data-aos-delay={100 + index * 100}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#CDA45E]/10 text-[#CDA45E] font-serif font-bold text-lg">
                        {partner.initials}
                      </div>
                      <div>
                        <h3 className="text-lg font-serif text-neutral-100"> {partner.title}</h3>
                        <p className="text-xs font-medium text-[#CDA45E] uppercase tracking-wider">{partner.subtitle}</p>
                      </div>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-[#A0A0A0]">
                      {partner.description}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}

export default Partners