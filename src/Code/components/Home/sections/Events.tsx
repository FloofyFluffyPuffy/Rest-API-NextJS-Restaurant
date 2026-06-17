"use client";
import { useState } from "react";
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Events = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const events = [
    {
      id: 1,
      title: "Birthday Celebrations",
      price: "From $350",
      description: "Celebrate your special day with an unforgettable, stress-free party experience. Our team handles every detail so you can focus on making memories.",
      image: "/assets/imgi_68_birthday-celebration-restaurant.jpg",
      features: [
        "Dedicated event coordinator and private service staff.",
        "Customizable multi-course menu options and signature welcome drinks.",
        "Complimentary high-end table settings and dynamic ambient lighting."
      ]
    },
    {
      id: 2,
      title: "Private Dinners & Galas",
      price: "From $1,200",
      description: "Host sophisticated corporate gatherings, rehearsal dinners, or intimate milestones in an elegant, private atmosphere tailored to your guests.",
      image: "/assets/imgi_5__hero_1200.jpg",
      features: [
        "Exclusive access to our premium, soundproofed private dining room.",
        "Bespoke wine and spirit pairings curated by our in-house sommelier.",
        "Full audiovisual support for presentations, speeches, or live music."
      ]
    },
    {
      id: 3,
      title: "Custom Curated Parties",
      price: "From $2,500",
      description: "Turn your unique vision into reality. From lavish wedding after-parties to themed galas, we design a completely personalized event from scratch.",
      image: "/assets/parlour-wedding-24_50_60473-159484841255281.webp",
      features: [
        "Full venue customization including structural decor and floral design.",
        "Tailor-made menu concepts crafted directly by our Executive Chef.",
        "Extended venue hours with dedicated security and concierge services."
      ]
    },
  ];

  return (
    <div id="events" className="events min-h-screen p-4 sm:p-8 md:p-12 flex flex-col justify-center">
      <div className="max-w-7xl w-full mx-auto">
        
        {/* Section Heading */}
        <div className="SectionSB flex flex-row items-center mb-2" data-aos="fade-up">
          <h2 className="sectionHeading">EVENTS</h2>
          <div className="h-px w-16 sm:w-30 bg-[#37332e] ml-2"></div>
        </div>
        
        <h1
          className="text-2xl sm:text-3xl font-bold text-[#CDA45E] mb-6 sm:mb-10"
          data-aos="fade-up"
          data-aos-delay="100">
          Organize Your Events
        </h1>

        {/* Swiper Container */}
        <div className="swiperCon w-full" data-aos="fade-up" data-aos-delay="200">
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            speed={1000}
            className=""
            style={{
              "--swiper-pagination-bottom": "0px", /* Pushes pagination outside the slide card area */
              "--swiper-theme-color": "#CDA45E",   /* Matches bullets to your accent gold color */
            } as React.CSSProperties}
          > 
            {events.map((event) => (
              <SwiperSlide key={event.id}>            
                <div className='eventCardCon flex justify-center items-center w-full py-4'> 
                  {/* Grid transforms from 1 column on mobile to 2 columns on medium screens */}
                  <div className='eventCard grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-center max-w-5xl mx-auto px-2'>
                    
                    {/* Image Container with Fixed Aspect Ratio constraints */}
                    <div className="flex justify-center w-full" data-aos="fade-right">
                      <div 
                        className="overflow-hidden rounded-lg shadow-lg w-full md:border-[#CDA45E] md:border-2 max-w-md md:w-600px md:h-420px bg-gray-900 group cursor-pointer"
                        onClick={() => setActiveImage(event.image)}
                      >
                        <img  
                          src={event.image} 
                          alt={event.title} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                        />
                      </div>
                    </div>

                    {/* Content Container */}
                    <div className="slideContent text-white" data-aos="fade-left">
                      <div className="flex flex-col gap-4 justify-center">
                        <div className="flex justify-between items-center flex-wrap gap-2">
                          <h1 className="text-xl sm:text-2xl font-bold text-[#CDA45E]">{event.title}</h1>
                          <span className="text-lg font-semibold border-b-2 border-[#CDA45E] text-gray-200">{event.price}</span>
                        </div>
                        
                        <p className="text-sm sm:text-base text-gray-300 italic">{event.description}</p>
                        
                        <ul className="space-y-3 sm:space-y-4">
                          {event.features.map((feature, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <span className="text-[#d4af37] text-lg leading-none">✔</span>
                              <span className="text-xs sm:text-sm text-gray-200">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 md:p-12">
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white text-3xl font-light z-50 transition-colors"
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
  );
};

export default Events;