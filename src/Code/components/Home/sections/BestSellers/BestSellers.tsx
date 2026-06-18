import React from 'react'
import { Pagination, Autoplay } from 'swiper/modules'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import getFood from '@/Code/typescript/api/GetFood';
import BsMenu from './BsMenu';

const BestSellers = async () => {
    const foods = await getFood(12)
    return ( 
        <section id="best-sellers-section" className="testimonials bg-[#1A1814] p-8">
            <div className="">
                <div 
                    className="flex items-center gap-4 mb-2" 
                    data-aos="fade-up"
                    data-aos-anchor="#best-sellers-section"
                >
                    <h2 className=" sectionHeading">BEST SELLERS</h2>
                    <div className="h-px w-30 bg-[#37332e]"></div>
                </div>
                
                <h1 
                    className="text-4xl font-bold text-[#CDA45E] mb-12" 
                    data-aos="fade-up" 
                    data-aos-delay="100"
                    data-aos-anchor="#best-sellers-section"
                >
                    Customers' Favorites
                </h1>

                <div 
                    className="swiperCon w-full" 
                    data-aos="fade-up" 
                    data-aos-delay="200"
                    data-aos-anchor="#best-sellers-section"
                >
                  <BsMenu foods={foods}/>
                </div>
            </div>
        </section>
    );
};

export default BestSellers;