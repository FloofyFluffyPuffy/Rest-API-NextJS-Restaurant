import React from "react";
import getFood from "@/Code/typescript/api/GetFood";
import Link from "next/link";

const HomeMenu = async () => {
  // Fetch only by the specific category ID to keep the network requests separate
  const rawAppetizers = await getFood(8)
  const rawMain = await getFood(9)
  const rawDesserts = await getFood(10)
  const rawDrink = await getFood(11)
  const Main_Menu = 12;

  // Filter out items on the server side so only items matching BOTH tags remain
  const Appetizers = Array.isArray(rawAppetizers) 
    ? rawAppetizers.filter((food: any) => food.food_tag?.includes(Main_Menu)) 
    : null;

  const Main = Array.isArray(rawMain) 
    ? rawMain.filter((food: any) => food.food_tag?.includes(Main_Menu)) 
    : null;

  const Desserts = Array.isArray(rawDesserts) 
    ? rawDesserts.filter((food: any) => food.food_tag?.includes(Main_Menu)) 
    : null;

  const Drink = Array.isArray(rawDrink) 
    ? rawDrink.filter((food: any) => food.food_tag?.includes(Main_Menu)) 
    : null;

  const menuSectionName = "flex justify-center text-2xl font-semibold text-[#CDA45E] border-b border-[#37332e] pb-2 lg:col-span-2 my-4"
  //so the reason why border-b take up the whole screen below the text without any width
  // is because it is a block which make it stretch whole screen,
  //also the css only look good bcuz we have lg: cols-span-2 if we remove it the border will only stretch one grid
  //and the placements of the rest of the grids will be messed up it hard to explain just go try removing it
  const menuFoodTypeCon = "grid grid-cols-1 gap-x-12 gap-y-8 lg:grid-cols-2"
  
  return (
    <div className="bg-[#1A1814] min-h-screen px-4 py-8 sm:px-8">
      <div className="SectionSB flex flex-row items-center"  data-aos="fade-up">
        <h2 className="text-[#A0A0A0]">
          OUR MENU
        </h2>
        <div className="h-px w-30 bg-[#37332e] ml-2"></div>
      </div>
      <h1
        className="text-3xl font-bold text-[#CDA45E]"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Customer's Favorite
      </h1>
      {/*
      So first make a the menu body as grid so we can have 2 colume same size
      then map out all the cards with flex start cuz obvious duh
      full rounded on the img con and overflow hidden to keep img from spilling out.
      make the cardd detail con have grow so it can suck off the grid width
      the card line have no size so we give it grow so it gain width base on CardDetailCOn and the border appear, 
      grow also help it stretch out to fill the Carddetailcon div
      */}
      <div className="menuBody text-white grid grid-cols-1 grid-rows-1 gap-x-12 gap-y-8 pt-8" data-aos="fade-up" data-aos-delay="100">
        {/* Appetizers Section - Max 1 Row (2 Items) */}
        <div className={menuFoodTypeCon}>
          <h2 className={menuSectionName}>Appetizers</h2>
        {Array.isArray(Appetizers) && Appetizers.slice(0, 2).map((food: any, index: number) => (
          <div key={food.id} className="foodCardGrid flex items-start group" data-aos="fade-in" data-aos-anchor=".menuBody" data-aos-delay={index * 100}>
            {/* image Bordered Circle */}
            <div className="imageCircularCon w-16 h-16 rounded-full border-4 border-[#37332e] overflow-hidden shrink-0 bg-[#26231d]">
               <img src={`${food.acf?.photo}`} className="w-full h-full object-cover" alt="" />
               {/* standard <img> tags don't automatically scale to fill their container dimensions nicely.
               They either default to their native pixel sizes or stretch awkwardly.
               Since the container imageCircularCon has fixed dimensions (w-16 h-16),
               we need to tell the image how to behave within that boundary. */}
            </div>
            <div className="foodDetailCon ml-4 grow">
              {/*this foodDetailCon have grow cuz it ssuck off the Grid*/}
              <div className="foodcardDetail flex items-center justify-between w-full">
                <span className="foodCardTitle text-[#CDA45E]/70 font-bold text-lg hover:text-[#CDA45E] hover:scale-105 transition-all duration-300 cursor-pointer">
                  {food.title?.rendered}
                </span>
                <div className="foodCarddLine grow mx-2 mb-1 border-b border-dotted border-[#777777]"></div>
                <span className="foodCardPrice font-bold text-[#CDA45E]">
                  ${food.acf?.price}
                </span>
              </div>
              <p className="foodCardDesc text-[#A0A0A0] text-sm italic mt-1 font-light">
                {food.acf?.description}
              </p>
            </div>
          </div>
        ))}
        </div>

        {/* Main Course Section - Max 2 Rows (4 Items) */}
        <div className={menuFoodTypeCon}>
          <h2 className={menuSectionName}>Main Course</h2>
        {Array.isArray(Main) && Main.slice(0, 4).map((food: any, index: number) => (
          <div key={food.id} className="foodCardGrid flex items-start group" data-aos="fade-in" data-aos-anchor=".menuBody" data-aos-delay={index * 100}>
            {/* image Bordered Circle */}
            <div className="imageCircularCon w-16 h-16 rounded-full border-4 border-[#37332e] overflow-hidden shrink-0 bg-[#26231d]">
               <img src={`${food.acf?.photo}`} className="w-full h-full object-cover" alt="" />
            </div>
            <div className="foodDetailCon ml-4 grow">
              <div className="foodcardDetail flex items-center justify-between w-full">
                <span className="foodCardTitle text-[#CDA45E]/70 font-bold text-lg hover:text-[#CDA45E] hover:scale-105 transition-all duration-300 cursor-pointer">
                  {food.title?.rendered}
                </span>
                <div className="foodCarddLine grow mx-2 mb-1 border-b border-dotted border-[#777777]"></div>
                <span className="foodCardPrice font-bold text-[#CDA45E]">
                  ${food.acf?.price}
                </span>
              </div>
              <p className="foodCardDesc text-[#A0A0A0] text-sm italic mt-1 font-light">
                {food.acf?.description}
              </p>
            </div>
          </div>
        ))}
        </div>

        {/* Desserts Section - Max 1 Row (2 Items) */}
        <div className={menuFoodTypeCon}>
          <h2 className={menuSectionName}>Desserts</h2>
        {Array.isArray(Desserts) && Desserts.slice(0, 2).map((food: any, index: number) => (
          <div key={food.id} className="foodCardGrid flex items-start group" data-aos="fade-in" data-aos-anchor=".menuBody" data-aos-delay={index * 100}>
            {/* image Bordered Circle */}
            <div className="imageCircularCon w-16 h-16 rounded-full border-4 border-[#37332e] overflow-hidden shrink-0 bg-[#26231d]">
               <img src={`${food.acf?.photo}`} className="w-full h-full object-cover" alt="" />
            </div>
            <div className="foodDetailCon ml-4 grow">
              <div className="foodcardDetail flex items-center justify-between w-full">
                <span className="foodCardTitle text-[#CDA45E]/70 font-bold text-lg hover:text-[#CDA45E] hover:scale-105 transition-all duration-300 cursor-pointer">
                  {food.title?.rendered}
                </span>
                <div className="foodCarddLine grow mx-2 mb-1 border-b border-dotted border-[#777777]"></div>
                <span className="foodCardPrice font-bold text-[#CDA45E]">
                  ${food.acf?.price}
                </span>
              </div>
              <p className="foodCardDesc text-[#A0A0A0] text-sm italic mt-1 font-light">
                {food.acf?.description}
              </p>
            </div>
          </div>
        ))}
        </div>

        {/* Drinks Section - Max 1 Row (2 Items) */}
        <div className={menuFoodTypeCon}>
          <h2 className={menuSectionName}>Drinks & Beverages</h2>
        {Array.isArray(Drink) && Drink.slice(0, 2).map((food: any, index: number) => (
          <div key={food.id} className="foodCardGrid flex items-start group" data-aos="fade-in" data-aos-anchor=".menuBody" data-aos-delay={index * 100}>
            {/* image Bordered Circle */}
            <div className="imageCircularCon w-16 h-16 rounded-full border-4 border-[#37332e] overflow-hidden shrink-0 bg-[#26231d]">
               <img src={`${food.acf?.photo}`} className="w-full h-full object-cover" alt="" />
            </div>
            <div className="foodDetailCon ml-4 grow">
              <div className="foodcardDetail flex items-center justify-between w-full">
                <span className="foodCardTitle text-[#CDA45E]/70 font-bold text-lg hover:text-[#CDA45E] hover:scale-105 transition-all duration-300 cursor-pointer">
                  {food.title?.rendered}
                </span>
                <div className="foodCarddLine grow mx-2 mb-1 border-b border-dotted border-[#777777]"></div>
                <span className="foodCardPrice font-bold text-[#CDA45E]">
                  ${food.acf?.price}
                </span>
              </div>
              <p className="foodCardDesc text-[#A0A0A0] text-sm italic mt-1 font-light">
                {food.acf?.description}
              </p>
            </div>
          </div>
        ))}
        </div>
      </div>

      <div className="BsMenuBtn flex justify-center w-full mt-8">
        <Link href="/menu" className="group relative px-6 py-3 text-sm font-medium tracking-widest text-[#CDA45E]/80 uppercase duration-300 hover:text-[#CDA45E] cursor-pointer hover:scale-110 transition-all" data-aos="fade-up" data-aos-anchor=".menuBody" data-aos-delay="400">
          Full Menu
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
  );
};

export default HomeMenu;