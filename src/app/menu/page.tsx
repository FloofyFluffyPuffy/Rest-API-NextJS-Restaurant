import MenuHero from "@/Code/components/MenuPage/MenuHero";
import Menu from "@/Code/components/MenuPage/Menu";
import Reservation from "@/Code/components/Home/sections/Reservation/Revervation";
import SectionHashScrollHandler from "@/Code/components/utilities/SectionHashScrollHandler";
const MenuPage = () => {
  return <div>
    <MenuHero/>
    <Menu/>
    <Reservation/>
    <SectionHashScrollHandler/>
  </div>;
};

export default MenuPage;
