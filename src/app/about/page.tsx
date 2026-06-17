import About from '@/Code/components/AboutPage/About'
import AboutHero from '@/Code/components/AboutPage/AboutHero'
import Founding from '@/Code/components/AboutPage/Founding'
import Chefs from '@/Code/components/AboutPage/Chefs'
import Partners from '@/Code/components/AboutPage/Partners'
import Reservation from '@/Code/components/Home/sections/Reservation/Revervation'
const AboutPage = () => {
  return (
    <div>
      <AboutHero />
      <Founding />
      <Chefs />
      <Partners />
      <Reservation />
    </div>
  )
}

export default AboutPage