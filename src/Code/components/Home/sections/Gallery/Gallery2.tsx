"use client"
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

interface GalleryProp {
  galleryData: any[]
}

const Gallery2 = ({ galleryData = [] }: GalleryProp) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false, // Re-animates every time you scroll back
      easing: 'ease-in-out',
    })
  }, [])

  // Filter out items without images first to keep the index and anchor logic accurate
  const validItems = galleryData.filter(item => item.acf?.image)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {validItems.map((item, index) => {
          const imageUrl = item.acf.image
          const isFirst = index === 0

          return (
            <div
              key={item.id || index}
              // 1. Give the first item a unique ID
              id={isFirst ? "gallery-anchor" : undefined}
              className="overflow-hidden rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 aspect-square bg-gray-100 group"
              data-aos="fade-up"
              // 2. Point all subsequent items to the first item's ID
              data-aos-anchor={!isFirst ? "#gallery-anchor" : undefined}
              data-aos-delay={index * 50} // Keeps the staggered ripple effect
            >
              <img
                src={imageUrl}
                alt={`Gallery image ${index + 1}`}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Gallery2