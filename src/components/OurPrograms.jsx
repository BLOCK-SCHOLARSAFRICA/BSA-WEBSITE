import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const OurPrograms = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const programs = [
    {
      title: "Innovation Lab (Master In-Demand Tech Skills)",
      link: "#",
    },
    {
      title: "Blockchain Scholarship (Learn Blockchain & Smart Contracts)",
      link: "#",
    },
    {
      title:
        "BSACTP (Block-Scholars Africa Campus Tech Program) (For Undergraduate Students)",
      link: "#",
    },
  ];

  return (
    <section
      id="about-us"
      className="py-16 px-6 md:px-14 bg-white mt-20 flex flex-col items-center text-center"
      data-aos="fade-up"
    >
      <div className="relative mb-4" data-aos="fade-up">
        <h4 className="text-2xl font-bold text-[#720034] z-10 mb-4">
          <span className="text-[#242424]">Our</span> Programs
        </h4>
        <p className="text-sm text-[#242424] mb-10">
          Shaping Africa’s Future Tech Leaders
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {programs.map((program, index) => (
          <div
            key={index}
            className="relative bg-[#EC87B5] border-2 border-white bg-[url('/Ellipse-1898.png')] bg-cover bg-center bg-no-repeat 
  text-white rounded-2xl p-6 overflow-hidden 
  h-[200px] hover:h-[240px] transition-all duration-300 transform hover:scale-105"
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            <p className="font-medium text-sm mb-6">{program.title}</p>
            <a
              href={program.link}
              className="px-4 py-2 bg-[#6C0031]  rounded-full text-sm font-semibold hover:scale-105 transition-transform"
            >
              VIEW MORE
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurPrograms;
