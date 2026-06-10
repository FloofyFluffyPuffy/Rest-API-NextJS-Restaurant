import { WUCard } from "@/Code/typescript/types";
import { WUCardList } from "./CardText";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { MdTableRestaurant } from "react-icons/md";
import { GrRestaurant } from "react-icons/gr";
import Link from "next/link";

const iconMap: Record<string, React.ComponentType> = {
  "<GiForkKnifeSpoon />": GiForkKnifeSpoon,
  "<MdTableRestaurant />": MdTableRestaurant,
  "<GrRestaurant />": GrRestaurant,
};

const WhyUs = () => {
  return (
    <div id="why-us-section" className="whyUs bg-[#0C0B09] text-amber-50 p-8">
      <div 
        className="SectionSB flex flex-row items-center " 
        data-aos="fade-up"
        data-aos-anchor="#why-us-section"
      >
        <h2 className="sectionHeading">
          WHY US
        </h2>
        <div className="h-px w-30 bg-[#37332e] ml-2"></div>
      </div>
      <h1
        className="text-3xl font-bold text-[#CDA45E]"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-anchor="#why-us-section"
      >
        Why Choose Us
      </h1>
      <div className="whyUsList">
        {WUCardList.map((card, index) => {
          const IconComponent = iconMap[card.icon];
          return (
            <div
              className="conToPreventAOSConflictWithCSSTransform"
              key={card.id}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              data-aos-anchor="#why-us-section"
            >
              <div className="whyUsCard">
                {IconComponent && (
                  <div className="iconContainer text-4xl text-[#CDA45E] my-2">
                    <IconComponent />
                  </div>
                )}
                <h2 className="text-2xl -mb-2 text-[#CDA45E]">{card.title}</h2>
                <br />
                <h2 className="leading-relaxed text-[#A0A0A0]">{card.reason}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhyUs;