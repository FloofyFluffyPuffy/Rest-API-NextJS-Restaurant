"use client"
import React from 'react'
import { Pagination, Autoplay } from 'swiper/modules'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
    const slides = [
        {
            comment: "The atmosphere here is unmatched. The dry-aged steak was cooked to absolute perfection, and the wine pairing suggested by the staff was spot on.",
            name: "Sara Karlis",
            title: "Food Critic",
            profile: "/assets/imgi_19_testimonials-3.jpg" 
        },
        {
            comment: "A hidden gem! The attention to detail in every dish, from the appetizer to the dessert, shows true culinary craftsmanship.",
            name: "Jason Liu",
            title: "Regular Customer",
            profile: "/assets/imgi_20_testimonials-5.jpg"
        },
        {
            comment: "I've been to many upscale restaurants, but the service here is what sets them apart. They make you feel like royalty from the moment you walk in.",
            name: "Saul Goodman",
            title: "Local Entrepreneur",
            profile: "/assets/imgi_20_testimonials-1.jpg"
        },
        {
            comment: "The seafood platter was incredibly fresh. You can tell they source only the highest quality ingredients. Highly recommended for a date night.",
            name: "Matt Brandon",
            title: "Freelance Designer",
            profile: "/assets/imgi_23_testimonials-4.jpg"
        },
        {
            comment: "The desserts are a work of art. Not only do they look beautiful, but the flavors are complex and satisfying. I'll definitely be back.",
            name: "Sara Wang",
            title: "Pastry Chef",
            profile: "/assets/imgi_23_testimonials-2.jpg"
        },
    ]

    return (
        <section id="testimonials-section" className="testimonials bg-[#1A1814] p-8">
            <div className="">
                <div 
                    className="flex items-center gap-4 mb-2" 
                    data-aos="fade-up"
                    data-aos-anchor="#testimonials-section"
                >
                    <h2 className=" sectionHeading">TESTIMONIALS</h2>
                    <div className="h-px w-30 bg-[#37332e]"></div>
                </div>
                
                <h1 
                    className="text-4xl font-bold text-[#CDA45E] mb-12" 
                    data-aos="fade-up" 
                    data-aos-delay="100"
                    data-aos-anchor="#testimonials-section"
                >
                    Customers's Review
                </h1>

                <div 
                    className="swiperCon w-full" 
                    data-aos="fade-up" 
                    data-aos-delay="200"
                    data-aos-anchor="#testimonials-section"
                >
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        autoplay={{ delay: 1800, disableOnInteraction: false }}
                        // pagination={{
                        //     clickable: true,
                        //     dynamicBullets: true,
                        // }}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        modules={[Pagination, Autoplay]}
                        className=""
                    >
                        {slides.map((slide, index) => (
                            <SwiperSlide key={index} className="h-auto">
                              <div className='eventCardCon flex justify-center items-center w-full min-h-[324px]'>
                                <div className="eventCard bg-[#1a1814] p-8 rounded-lg border border-[#26231d] h-full flex flex-col justify-between hover:border-[#cda45e] transition-colors duration-300">
                                    <div className="relative">
                                        <span className="text-4xl text-[#cda45e]/30 absolute -top-4 -left-2">"</span>
                                        <p className="text-gray-300 italic leading-relaxed mb-8 relative z-10">
                                            {slide.comment}
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <img 
                                            src={slide.profile} 
                                            alt={slide.name} 
                                            className="w-14 h-14 rounded-full border-2 border-[#37332e] object-cover" 
                                        />
                                        <div>
                                            <h3 className="text-[#CDA45E] font-bold text-lg leading-tight">{slide.name}</h3>
                                            <p className="text-gray-500 text-sm">{slide.title}</p>
                                        </div>
                                    </div>
                                </div>
                              </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;