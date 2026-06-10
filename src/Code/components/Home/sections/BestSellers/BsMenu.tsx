"use client"
import React from 'react'
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Link from 'next/link';
// Define a quick interface for clean props handling
interface BsMenuProps {
  foods: any[];
}


const BsMenu = ({ foods = [] }: BsMenuProps) => {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Pagination, Autoplay]}
        className=""
      >
        {/* Removed inline types from the map arguments to guarantee the parser won't drop tokens */}
        {foods.map((food, index) => (
          <SwiperSlide className='pb-8' key={index}>
            <div className="featuredSlideCon cursor-pointer scale-94 hover:scale-99 transform-all duration-250 hover:border-2 hover:border-[#CDA45E] bg-[#26231d] p-6 rounded-lg text-white border border-[#37332e]">
                
                {/* EDITED: Added aspect ratio, layout, and rounding constraints */}
                <div className='imageCardCon aspect-video mb-4 overflow-hidden rounded-md bg-[#1c1a15]'>
                    <img 
                      src={food.acf?.photo} 
                      alt={food.title.rendered || "Food item"} 
                      className="w-full h-full object-cover object-center transition-transform duration-300"
                    />
                </div>
                
              <h3 className="text-[#CDA45E] font-bold text-xl mb-2">{food.title.rendered}</h3>
              <div className="text-[#CDA45E] font-semibold mt-4">${food.acf?.price}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
        <div className="BsMenuBtn flex justify-center w-full mt-2 hover:border-x-px hover:border-t-px hover:border-px">
        <Link href="/menu" className="group relative px-6 py-3 text-sm font-medium tracking-widest text-[#CDA45E]/80 uppercase duration-300 hover:text-[#CDA45E] cursor-pointer hover:scale-105 transition-all" data-aos="fade-up" data-aos-anchor=".menuBody" data-aos-delay="400">
          View Full Menu
          <span className="absolute bottom-0 left-1/2 h-px w-8 -translate-x-1/2 bg-[#CDA45E]/40 transition-all duration-300 group-hover:w-full group-hover:bg-[#CDA45E]"></span>
          {/* -add group to btn so the span hover state can be manage
              -and relative bcuz absolute look for the closest relative in ancestry line, if we 
              dont have absolute, it will keep looking upward
              -left-1/2 cuz absolute start on left size of parents so left 1/2 make it
              look at itself and move it starting position to halfway mark of it parent
              - -translate-x-1/2 "look at your own width and shift urself backward cuz it -(minus)translate"
              */}
        </Link>
      </div>
    </div>
  )
}

export default BsMenu