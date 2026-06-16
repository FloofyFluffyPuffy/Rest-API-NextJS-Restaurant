import React from 'react'

const Chefs = () => {
  return (
    <section id='chefs' className="chefs bg-stone-900 py-24 text-stone-100 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span 
            className="text-xs font-semibold tracking-widest text-[#CDA45E] uppercase"
            data-aos="fade-up"
          >
            Culinary Team
          </span>
          <h2 
            className="mt-2 text-3xl font-serif tracking-tight text-white sm:text-5xl"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Meet Our Chefs
          </h2>
          <div 
            className="mx-auto mt-4 h-0.5 w-16 bg-[#CDA45E]"
            data-aos="zoom-in"
            data-aos-delay="200"
          ></div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="group space-y-4" data-aos="fade-up" data-aos-delay="300">
            <div className="relative aspect-3/4 overflow-hidden rounded-xl bg-stone-800">
              <img
                src="/assets/malechef.jpg"
                alt="Executive Chef"
                className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-stone-950/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-serif text-white">Julian Mercer</h3>
              <p className="text-sm font-medium text-[#CDA45E] uppercase tracking-wider">Executive Chef / Partner</p>
              <p className="pt-2 text-sm text-stone-400 leading-relaxed">
                Julian oversees daily operations, blending classical background foundations with innovative techniques to elevate every plate.
              </p>
            </div>
          </div>

          <div className="group space-y-4" data-aos="fade-up" data-aos-delay="400">
            <div className="relative aspect-3/4 overflow-hidden rounded-xl bg-stone-800">
              <img
                src="/assets/headchef.jpg"
                alt="Head Chef"
                className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-stone-950/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-serif text-white"> Marcus Vance</h3>
              <p className="text-sm font-medium text-[#CDA45E] uppercase tracking-wider">Head Chef</p>
              <p className="pt-2 text-sm text-stone-400 leading-relaxed">
                With over fifteen years in Michelin-starred kitchens, Marcus guides our culinary direction with an emphasis on locally sourced heritage ingredients.
              </p>
            </div>
          </div>

          <div className="group space-y-4" data-aos="fade-up" data-aos-delay="500">
            <div className="relative aspect-3/4 overflow-hidden rounded-xl bg-stone-800">
              <img
                src="assets/femalechef.jpg"
                alt="Pastry Chef"
                className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-stone-950/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-serif text-white">Elena Rostova</h3>
              <p className="text-sm font-medium text-[#CDA45E] uppercase tracking-wider">Pastry Chef</p>
              <p className="pt-2 text-sm text-stone-400 leading-relaxed">
                Elena brings an artistic structural eye to our dessert menu, closing out the dining experience with delicate textures and balanced sweetness.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Chefs