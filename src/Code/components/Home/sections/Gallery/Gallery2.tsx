"use client"
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

interface GalleryProp {
  galleryData: any[]
}

const Gallery2 = ({ galleryData = [] }: GalleryProp) => {
  const [isMobile, setIsMobile] = useState(false)
  const [activeImage, setActiveImage] = useState<string | null>(null)

  useEffect(() => {
    const updateSize = () => {
      setIsMobile(window.innerWidth <= 640)
    }

    updateSize()
    window.addEventListener('resize', updateSize)
    return () => window.removeEventListener('resize', updateSize)
  }, [])

  const validItems = galleryData.filter(item => item.acf?.image)

  return (
    <div className="container mx-auto px-4 py-8">
      {isMobile ? (
        <Swiper
          slidesPerView={1}
          spaceBetween={16}
          pagination={{ clickable: true, dynamicBullets: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          modules={[Pagination, Autoplay]}
          className="sm:hidden"
          onClick={(swiper) => {
            const clickedIndex = swiper.clickedIndex;
            if (typeof clickedIndex !== 'undefined' && validItems[clickedIndex]) {
              setActiveImage(validItems[clickedIndex].acf.image)
            }
          }}
        >
          {validItems.map((item, index) => {
            const imageUrl = item.acf.image
            return (
              <SwiperSlide key={item.id || index}>
                <div className="overflow-hidden rounded-lg shadow-sm aspect-square bg-gray-100 group cursor-pointer">
                  <img
                    src={imageUrl}
                    alt={`Gallery image ${index + 1}`}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      ) : (
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {validItems.map((item, index) => {
            const imageUrl = item.acf.image

            return (
              <div
                key={item.id || index}
                className="overflow-hidden rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 aspect-square bg-gray-100 group cursor-pointer"
                onClick={() => setActiveImage(imageUrl)}
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
      )}

      {/* Lightbox Modal */}
      {activeImage && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 md:p-12">
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 text-white/70 cursor-pointer hover:text-white text-3xl font-light z-50 transition-colors"
            onClick={() => setActiveImage(null)}
          >
            ✕
          </button>

          {/* Centered Image Container with Fixed Constraints */}
          <div className="relative max-w-5xl max-h-[85vh] w-full h-full flex items-center justify-center z-40">
            <img
              src={activeImage}
              alt="Enlarged view"
              className="max-w-full max-h-[80vh] object-contain rounded select-none"
            />
          </div>

          {/* Background Closer Overlay */}
          <div 
            className="absolute inset-0 z-30 cursor-zoom-out" 
            onClick={() => setActiveImage(null)}
          />
        </div>
      )}
    </div>
  )
}

export default Gallery2