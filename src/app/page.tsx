
import Hero from "../Code/components/Home/sections/Hero";
import WhyUs from "../Code/components/Home/sections/WhyUs/WhyUs";
import Events from "../Code/components/Home/sections/Events";
import Reservation from "../Code/components/Home/sections/Reservation/Revervation";
import Testimonials from "../Code/components/Home/sections/Testimonials";
import BestSellers from "@/Code/components/Home/sections/BestSellers/BestSellers";
import Gallery from "@/Code/components/Home/sections/Gallery/Gallery";
import SectionHashScrollHandler from "@/Code/components/utilities/SectionHashScrollHandler";
const HomePage = () => {
  // const fc = await getFoodBySlug('fried-chicken')
  return (
    <>
      <Hero />
      <BestSellers/>
      <WhyUs />
      <Testimonials/>
      <Gallery/>
      <Events/>
      <Reservation/>
      <SectionHashScrollHandler/>
    </>
  );
};

export default HomePage;
