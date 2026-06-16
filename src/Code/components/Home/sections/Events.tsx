"use client"
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Events = () => { 
  const events = [
    {
      id: 1,
      title: "Birthday Parties",
      price: "$189",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/assets/imgi_68_birthday-celebration-restaurant.jpg",
      features: ["Ullamco laboris nisi ut aliquip ex ea commodo consequat.", "Duis aute irure dolor in reprehenderit in voluptate velit.", "Ullamco laboris nisi ut aliquip ex ea commodo consequat."]
    },
    {
      id: 3,
      title: "Custom Parties",
      price: "$189",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/assets/parlour-wedding-24_50_60473-159484841255281.webp",
      features: ["Ullamco laboris nisi ut aliquip ex ea commodo consequat.", "Duis aute irure dolor in reprehenderit in voluptate velit.", "Ullamco laboris nisi ut aliquip ex ea commodo consequat."]
    },
    {
      id: 2,
      title: "Private Parties",
      price: "$189",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/assets/imgi_5__hero_1200.jpg",
      features: ["Ullamco laboris nisi ut aliquip ex ea commodo consequat.", "Duis aute irure dolor in reprehenderit in voluptate velit.", "Ullamco laboris nisi ut aliquip ex ea commodo consequat."]
    },
  ];

  return (
    <div id="events" className="events min-h-screen p-8">
      <div className="SectionSB flex flex-row items-center" data-aos="fade-up">
        <h2 className="sectionHeading">EVENTS</h2>
        <div className="h-px w-30 bg-[#37332e] ml-2"></div>
      </div>
      <h1
        className="text-3xl font-bold text-[#CDA45E] mb-10"
        data-aos="fade-up"
        data-aos-delay="100">
        Organize Your Events</h1>
      <div className="swiperCon h-[70%] w-full justify-self-center flex justify-center items-center" data-aos="fade-up" data-aos-delay="200">
        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          pagination={{ clickable: true, dynamicBullets: true }}
          autoplay={{ delay: 3000 }}
          speed={1000}
          onSwiper={() => AOS.refresh()}
          onSlideChange={() => AOS.refresh()}
          className="" 
          > 
          {events.map((event) => (
            <SwiperSlide key={event.id}>            
              <div className='eventCardCon flex justify-center items-center w-full h-[420px]'> 
                <div className='eventCard grid grid-cols-1 md:grid-cols-2'>
                  <img  
                    src={event.image} 
                    alt={event.title} 
                    className="aboutImg w-full md:w-[520px] h-auto md:h-80 ml-0 md:ml-6 object-cover"
                    data-aos="fade-right"
                  />
                  <div className="slideContent text-white" data-aos="fade-left">
                    <div className="flex h-full flex-col leading-relaxed justify-around">
                      <h1 className="text-2xl font-bold text-[#CDA45E]">{event.title}</h1>
                
                    <h2>{event.description}</h2>
                    <ol className="space-y-4">
                    {event.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-[#d4af37] text-xl">✔</span>
                        <span className="text-sm text-gray-200">{feature}</span>
                      </li>
                    ))}
                  </ol>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Events;