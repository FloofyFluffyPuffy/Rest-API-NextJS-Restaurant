import React from 'react'

const AboutHero = () => {
  return (
    <div className='aboutHero relative flex flex-col items-center justify-center  px-4 py-16 text-center bg-[#0c0b09] overflow-hidden'>
      {/* Optional: Subtle background overlay for texture */}
      <div className="relative z-10 max-w-4xl mx-auto space-y-4">
        <span 
          className="block text-xl font-semibold tracking-[0.2em] uppercase text-[#CDA45E]"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          Our Identity
        </span>
                   <img 
              src="/assets/logo.svg" 
              alt="Downtown Bistro Logo" 
              className="h-100 w-auto justify-self-center -mt-16 -mb-10"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom" 
            />
        
        <h2 
          className='text-lg md:text-xl -mb-12 text-[#A0A0A0] italic font-light leading-relaxed max-w-2xl mx-auto'
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-anchor-placement="top-bottom"
        >
          Driven by a passion for culinary excellence, we bring people together over plates that tell a story. 
          Every ingredient is chosen with purpose, and every dish made with love and passion.
        </h2>

        {/* Optional: Call to action button to complete the Hero feel */}
      </div>
    </div>
  )
}

export default AboutHero