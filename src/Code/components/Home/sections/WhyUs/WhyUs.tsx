import { WUCard } from "@/app/typescript/types";
import { WUCardList } from "./CardText";

const WhyUs = () => {
  return (
    <div className="whyUs bg-[#0C0B09] text-amber-50 pb-20 px-8" 
    /*
    no height cs so it grow naturally
    p-8 so the side dont touch the screen
    no py but only pb so it look more even
     */>
      <div className="SectionSB flex flex-row items-center " data-aos="fade-up">
        <h2 className="sectionHeading">
          WHY US
        </h2>
        <div className="h-px w-30 bg-[#37332e] ml-2"></div>
      </div>
      <h1
        className="text-3xl font-bold text-[#CDA45E]"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Why Choose Us
      </h1>
      <div className="whyUsList">
        {WUCardList.map((card, index) => (
          <div
            className="whyUsCard"
            key={card.id}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <h1 className="text-2xl text-[#CDA45E]">{`0${card.id}`}</h1>
            <h2 className="text-2xl">{card.title}</h2>
            <br />
            <h2 className="leading-relaxed">{card.reason}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
