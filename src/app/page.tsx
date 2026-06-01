
import Hero from "../Code/components/Home/sections/Hero";
import WhyUs from "../Code/components/Home/sections/WhyUs/WhyUs";
import Events from "../Code/components/Home/sections/Events";
import Reservation from "../Code/components/Home/sections/Reservation/Revervation";
import Testimonials from "../Code/components/Home/sections/Testimonials";
import BestSellers from "@/Code/components/Home/sections/BestSellers/BestSellers";
import Map from "../Code/components/utilities/Map";
const HomePage = async () => {
  console.log("server running successfully");
  // const fc = await getFoodBySlug('fried-chicken')
  return (
    <>
      <Hero />
      <BestSellers/>
      <WhyUs />
      <Testimonials/>
      <Events/>
      <Reservation/>
    </>
  );
};

export default HomePage;
