import Btn from "../Code/components/utilities/Btn";
import About from "../Code/components/Home/sections/About";
import Hero from "../Code/components/Home/sections/Hero";
import WhyUs from "../Code/components/Home/sections/WhyUs/WhyUs";
import BestSellers from "../Code/components/Home/sections/BestSellers";
import Events from "../Code/components/Home/sections/Events";
import Reservation from "../Code/components/Home/sections/Reservation/Revervation";
import Testimonials from "../Code/components/Home/sections/Testimonials";
import Map from "../Code/components/utilities/Map";

const HomePage = async () => {
  console.log("server running successfully");
  // const fc = await getFoodBySlug('fried-chicken')
  return (
    <>
      <Hero />
      {/* <h1 className="hw">{`Hello World, i wanna eat ${fc?.acf?.name || `something`}`}</h1> */}
      <About />
      <WhyUs />
      <BestSellers/>
      <Events/>
      <Reservation/>
      <Testimonials/>
      {/* <Map/> */}
    </>
  );
};

export default HomePage;
