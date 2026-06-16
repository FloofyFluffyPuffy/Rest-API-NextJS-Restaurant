import React from "react";
import getFood from "@/Code/typescript/api/GetFood";
import Link from "next/link";

const Menu = async () => {
  // Fetch only by the specific category ID to keep the network requests separate
  const Appetizers = await getFood(8)
  const Main = await getFood(9)
  const Desserts = await getFood(10)
  const Drink = await getFood(11)
  const Main_Menu = 12;

  // Reduced padding slightly and optimized spacing for the section header
  const menuSectionName = "flex justify-center text-xl font-semibold text-[#CDA45E] border-b border-[#37332e] pb-1.5 lg:col-span-2 my-3"
  
  // Reduced gap slightly (gap-x-12 to gap-x-10) to make it more compact like an IRL menu
  const menuFoodTypeCon = "grid grid-cols-1 gap-x-10 gap-y-6 lg:grid-cols-2 mb-8"
  
  return (
    // Base wrapper creates the background environment for the menu to sit on
    <div className="MenuCon bg-[#12110e] min-h-screen py-12 px-4 flex justify-center items-center" >
      
      {/* The Menu Board Container (Now serving as the main AOS trigger anchor):
        - w-90% keeps it constrained (roughly 10% tighter than full wide screens)
        - border-2 + outline details give it that "premium card/leather booklet" edge
        - shadow-2xl visually lifts the menu off the background floor
      */}
      <div 
        id="menu-card-trigger"
        className="w-full max-w-6xl MenuContentWrapper bg-[#1A1814] border-2 border-[#37332e] rounded-sm p-6 sm:p-10 shadow-[0_0_50px_rgba(0,0,0,0.8)] relative -translate-y-24 sm:-translate-y-32"
        data-aos="fade-up"
      >
        
        {/* Subtle decorative inner frame border for realism */}
        <div className="absolute inset-2 border border-[#37332e]/40 pointer-events-none rounded-sm"></div>

        {/* Header Elements */}
        <div 
          className="MenuContent relative z-10"
          data-aos="fade-up"
          data-aos-anchor="#menu-card-trigger"
          data-aos-delay="100"
        >
           <img 
              src="/assets/logo.svg" 
              alt="Downtown Bistro Logo" 
              className="h-44 w-full justify-self-center -mt-14 -mb-10"
               data-aos="fade-up" 
               data-aos-anchor="#menu-card-trigger"
               data-aos-delay="200"
            />
          {/* <h1
            className="text-2xl sm:text-3xl font-serif font-bold text-[#CDA45E] text-center mb-6"
            data-aos="fade-up"
            data-aos-anchor="#menu-card-trigger"
            data-aos-delay="200"
          >
            Every Flavors For Every Tastes
          </h1> */}

          {/* Menu Body content */}
          <div 
            className="menuBody text-white grid grid-cols-1 gap-y-4 pt-4" 
            data-aos="fade-up" 
            data-aos-anchor="#menu-card-trigger"
            data-aos-delay="300"
          >
            
            {/* Appetizers Section */}
            <div className={menuFoodTypeCon}>
              <h2 className={menuSectionName}>Appetizers</h2>
              {Array.isArray(Appetizers) && Appetizers.map((food: any, index: number) => (
                <div key={food.id} className="foodCardGrid flex items-start group" data-aos="fade-in" data-aos-anchor="#menu-card-trigger" data-aos-delay={index * 100}>
                  <div className="imageCircularCon w-14 h-14 rounded-full border-2 border-[#37332e] overflow-hidden shrink-0 bg-[#26231d]">
                     <img src={`${food.acf?.photo}`} className="w-full h-full object-cover" alt="" />
                  </div>
                  <div className="foodDetailCon ml-3 grow">
                    <div className="foodcardDetail flex items-center justify-between w-full">
                      <span className="foodCardTitle text-[#CDA45E]/80 font-bold text-base hover:text-[#CDA45E] hover:translate-x-0.5 transition-all duration-300 cursor-pointer">
                        {food.title?.rendered}
                      </span>
                      <div className="foodCarddLine grow mx-2 mb-1 border-b border-dotted border-[#777777]/60"></div>
                      <span className="foodCardPrice font-bold text-[#CDA45E] text-sm">
                        ${food.acf?.price}
                      </span>
                    </div>
                    <p className="foodCardDesc text-[#A0A0A0] text-xs italic mt-0.5 font-light leading-relaxed">
                      {food.acf?.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Main Course Section */}
            <div className={menuFoodTypeCon}>
              <h2 className={menuSectionName}>Main Course</h2>
              {Array.isArray(Main) && Main.map((food: any, index: number) => (
                <div key={food.id} className="foodCardGrid flex items-start group" data-aos="fade-in" data-aos-anchor="#menu-card-trigger" data-aos-delay={index * 100}>
                  <div className="imageCircularCon w-14 h-14 rounded-full border-2 border-[#37332e] overflow-hidden shrink-0 bg-[#26231d]">
                     <img src={`${food.acf?.photo}`} className="w-full h-full object-cover" alt="" />
                  </div>
                  <div className="foodDetailCon ml-3 grow">
                    <div className="foodcardDetail flex items-center justify-between w-full">
                      <span className="foodCardTitle text-[#CDA45E]/80 font-bold text-base hover:text-[#CDA45E] hover:translate-x-0.5 transition-all duration-300 cursor-pointer">
                        {food.title?.rendered}
                      </span>
                      <div className="foodCarddLine grow mx-2 mb-1 border-b border-dotted border-[#777777]/60"></div>
                      <span className="foodCardPrice font-bold text-[#CDA45E] text-sm">
                        ${food.acf?.price}
                      </span>
                    </div>
                    <p className="foodCardDesc text-[#A0A0A0] text-xs italic mt-0.5 font-light leading-relaxed">
                      {food.acf?.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Desserts Section */}
            <div className={menuFoodTypeCon}>
              <h2 className={menuSectionName}>Desserts</h2>
              {Array.isArray(Desserts) && Desserts.map((food: any, index: number) => (
                <div key={food.id} className="foodCardGrid flex items-start group" data-aos="fade-in" data-aos-anchor="#menu-card-trigger" data-aos-delay={index * 100}>
                  <div className="imageCircularCon w-14 h-14 rounded-full border-2 border-[#37332e] overflow-hidden shrink-0 bg-[#26231d]">
                     <img src={`${food.acf?.photo}`} className="w-full h-full object-cover" alt="" />
                  </div>
                  <div className="foodDetailCon ml-3 grow">
                    <div className="foodcardDetail flex items-center justify-between w-full">
                      <span className="foodCardTitle text-[#CDA45E]/80 font-bold text-base hover:text-[#CDA45E] hover:translate-x-0.5 transition-all duration-300 cursor-pointer">
                        {food.title?.rendered}
                      </span>
                      <div className="foodCarddLine grow mx-2 mb-1 border-b border-dotted border-[#777777]/60"></div>
                      <span className="foodCardPrice font-bold text-[#CDA45E] text-sm">
                        ${food.acf?.price}
                      </span>
                    </div>
                    <p className="foodCardDesc text-[#A0A0A0] text-xs italic mt-0.5 font-light leading-relaxed">
                      {food.acf?.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Drinks & Beverages Section */}
            <div className={menuFoodTypeCon}>
              <h2 className={menuSectionName}>Drinks & Beverages</h2>
              {Array.isArray(Drink) && Drink.map((food: any, index: number) => (
                <div key={food.id} className="foodCardGrid flex items-start group" data-aos="fade-in" data-aos-anchor="#menu-card-trigger" data-aos-delay={index * 100}>
                  <div className="imageCircularCon w-14 h-14 rounded-full border-2 border-[#37332e] overflow-hidden shrink-0 bg-[#26231d]">
                     <img src={`${food.acf?.photo}`} className="w-full h-full object-cover" alt="" />
                  </div>
                  <div className="foodDetailCon ml-3 grow">
                    <div className="foodcardDetail flex items-center justify-between w-full">
                      <span className="foodCardTitle text-[#CDA45E]/80 font-bold text-base hover:text-[#CDA45E] hover:translate-x-0.5 transition-all duration-300 cursor-pointer">
                        {food.title?.rendered}
                      </span>
                      <div className="foodCarddLine grow mx-2 mb-1 border-b border-dotted border-[#777777]/60"></div>
                      <span className="foodCardPrice font-bold text-[#CDA45E] text-sm">
                        ${food.acf?.price}
                      </span>
                    </div>
                    <p className="foodCardDesc text-[#A0A0A0] text-xs italic mt-0.5 font-light leading-relaxed">
                      {food.acf?.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Menu;