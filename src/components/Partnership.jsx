import React, { useEffect } from "react";
import partnership from "../assets/partner.png";
import AOS from "aos"; 
import "aos/dist/aos.css"; 

const Partnership = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);

  return (
    <section id="partnership" className="py-10 px-6 md:px-14 bg-white mt-20">
      <div
        className="flex flex-col md:flex-row items-center mt-20 gap-10"
        data-aos="fade-up" 
      >
        {/* Image Section */}
        <div
          className="md:w-1/2 flex justify-center md:justify-start"
          data-aos="fade-left" 
          data-aos-delay="200"
        >
          <img
            src={partnership}
            alt="Partnership"
            className="w-full md:w-[85%] lg:w-[75%] h-auto object-cover rounded-[40px] transition-transform transform hover:scale-105"
          />
        </div>

        {/* Text Section */}
        <div
          className="md:w-1/2"
          data-aos="fade-right" 
          data-aos-delay="400"
        >
          <h2 className="text-3xl text-[#720034] font-bold">
            Embracing Partnerships and Collaborations
          </h2>
          <p className="mt-5">
            We're excited to forge strategic partnerships and collaborations
            with like-minded organizations and individuals that share our vision
            and mission. Together, let's empower the next generation of tech
            leaders and shape a brighter future.
          </p>
          <a
            href="mailto:partnership@block-scholars.africa"
            className="inline-block px-6 py-3 bg-[#720034] rounded-lg text-white font-semibold hover:bg-[#5a0028] mt-5 transition-all transform hover:scale-105"
            data-aos="fade-up" 
            data-aos-delay="600"
          >
            Partner With Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Partnership;
