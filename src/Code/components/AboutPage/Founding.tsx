import React from 'react'

const Founding = () => {
  return (
    <section id="founding-section" className="relative overflow-hidden bg-black py-24 text-[#A0A0A0]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(205,164,94,0.05),transparent_40%)]" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          
          <div className="relative order-2 lg:order-1 lg:col-span-6">
            <div className="grid grid-cols-12 gap-4">
              <div 
                className="col-span-8 overflow-hidden rounded-xl bg-zinc-900 aspect-3/4" 
                data-aos="fade-right" 
                data-aos-delay="200"
                data-aos-anchor="#founding-section"
              >
                <img
                  src="/assets/restaurantstaff.jpg"
                  alt="Founder cooking"
                  className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                />
              </div>
              
              <div className="col-span-4 flex flex-col gap-4 justify-end">
                <div 
                  className="rounded-xl bg-[#CDA45E]/5 border border-[#CDA45E]/20 p-6 text-center backdrop-blur-sm"
                  data-aos="fade-down"
                  data-aos-delay="400"
                  data-aos-anchor="#founding-section"
                >
                  <p className="font-serif text-3xl font-bold text-[#CDA45E] sm:text-4xl">8+</p>
                  <p className="mt-1 text-2xl font-serif text-white">Years</p>
                  <p className="mt-1 text-[10px] tracking-widest uppercase text-[#A0A0A0]">Established</p>
                </div>

                <div 
                  className="rounded-xl bg-zinc-900/80 border border-zinc-800 p-6 text-center backdrop-blur-sm"
                  data-aos="fade-up"
                  data-aos-delay="500"
                  data-aos-anchor="#founding-section"
                >
                  <p className="font-serif text-3xl font-bold text-[#CDA45E] sm:text-4xl">12</p>
                  <p className="mt-1 text-2xl font-serif text-white">Awards</p>
                  <p className="mt-1 text-[10px] tracking-widest uppercase text-[#A0A0A0]">Won</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8 order-1 lg:order-2 lg:col-span-6 lg:pl-8">
            <div className="space-y-3">
              <span 
                className="text-xs font-semibold tracking-widest text-[#CDA45E] uppercase block"
                data-aos="fade-left"
                data-aos-anchor="#founding-section"
              >
                Our Heritage
              </span>
              <h2 
                className="text-3xl font-serif tracking-tight text-white sm:text-5xl"
                data-aos="fade-left"
                data-aos-delay="100"
                data-aos-anchor="#founding-section"
              >
                Albuquerque's Favorite
              </h2>
              <div 
                className="h-0.5 w-40 bg-[#CDA45E]"
                data-aos="zoom-in"
                data-aos-delay="200"
                data-aos-anchor="#founding-section"
              ></div>
            </div>

            <div className="space-y-6 text-base leading-relaxed text-[#A0A0A0]">
              <p 
                data-aos="fade-left" 
                data-aos-delay="300"
                data-aos-anchor="#founding-section"
              >
                For over eight years, our diner has stood as a proud cornerstone of the local Albuquerque community. What began as a passionate culinary dream has grown into a trusted neighborhood gathering place where friends, families, and neighbors come together to share exceptional meals and build lasting connections.
              </p>
              
              <p 
                data-aos="fade-left" 
                data-aos-delay="400"
                data-aos-anchor="#founding-section"
              >
                Our unwavering commitment to local sourcing, community support, and genuine hospitality has earned us the profound trust of our guests. Backed by 12 prestigious culinary and community choice awards, we continue to anchor our neighborhood with the same dedication and meticulous attention to detail that defined our very first day.
              </p>
            </div>

            <div 
              className="border-l-2 border-[#CDA45E] pl-4 italic text-white font-serif text-lg bg-zinc-900/40 py-3 pr-4 rounded-r-lg"
              data-aos="fade-left"
              data-aos-delay="500"
              data-aos-anchor="#founding-section"
            >
              "We don't just serve our neighborhood; we are proudly shaped by the incredible community that gathers around our tables."
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Founding