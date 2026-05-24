import React from "react";

const About = () => {
  return (
    <div className="about flex justify-center">
      <div
        data-aos="fade-up"
        className=" about-content grid grid-cols-2 m-3 gap-4 text-white w-[90%] "
      >
        <div className="flex about-text justify-center flex-col">
          <h1
            data-aos="fade-right"
            data-aos-delay="100"
            className="mb-4 text-xl leading-relaxed"
          >
            Voluptatem dignissimos provident quasi corporis voluptates sit
            assumenda.
          </h1>

          <h2 className="leading-relaxed" data-aos="fade-right" data-aos-delay="200">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h2>
          <ol className="mt-4 mb-4 ml-4">
            <li className="leading-relaxed" data-aos="fade-up" data-aos-delay="300">
              ✔ Ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </li>
            <li className="leading-relaxed" data-aos="fade-up" data-aos-delay="400">
              ✔ Duis aute irure dolor in reprehenderit in voluptate velit.
            </li>
            <li className="leading-relaxed" data-aos="fade-up" data-aos-delay="500">
              ✔ Ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </li>
          </ol>
          <h2 className="leading-relaxed" data-aos="fade-up" data-aos-delay="600">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </h2>
        </div>
        <div className="aboutImgCon flex items-center justify-center">
          {/* This outer div handles the AOS Entrance because it overwrite transition transform of hover */}
          <div data-aos="zoom-in" data-aos-delay="400">
            {/* This inner div handles ONLY the Hover Transition, if keep same as the AOS div it wont work */}
            <div className="aboutImg">
              <img src="/assets/imgi_56_events-bg.59c0572d.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
