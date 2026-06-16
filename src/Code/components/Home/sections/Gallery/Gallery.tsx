import getGallery from '@/Code/typescript/api/GetGallery'
import React from 'react'
import Gallery2 from './Gallery2'
const Gallery = async () => {
    const galleryData = await getGallery() 
    console.log(galleryData)
  return (
    <div id="gallery" className="gallery bg-[#0C0B09] text-amber-50 px-4 py-8 sm:px-8" 
        /*
        no height cs so it grow naturally
        px-4 sm:px-8 so the side dont touch the screen
        */>
          <div 
            className="SectionSB flex flex-row items-center " 
            data-aos="fade-up"
            data-aos-anchor="#gallery"
          >
            <h2 className="sectionHeading">
              Gallery
            </h2>
            <div className="h-px w-30 bg-[#37332e] ml-2"></div>
          </div>
          <h1
            className="text-3xl font-bold text-[#CDA45E]"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-anchor="#gallery"
          >
            Photo Of Our Diner.
          </h1>
          <Gallery2 galleryData={galleryData} />
        </div>
  )
}

export default Gallery