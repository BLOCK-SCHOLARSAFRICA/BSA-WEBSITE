import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ArrowRight, Code, GraduationCap, Blocks } from "lucide-react";
import { Link } from "react-router-dom";

const OurPrograms = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const programs = [
    {
      title: "Innovation Lab",
      subtitle: "Master In-Demand Tech Skills",
      description:
        "Comprehensive training in cutting-edge technologies including AI, blockchain, and web development with hands-on projects.",
      icon: <Code size={32} />,
      link: "programs",
    },
    {
      title: "Blockchain Scholarship",
      subtitle: "Learn Blockchain & Smart Contracts",
      description:
        "Deep dive into blockchain technology, smart contract development, and decentralized applications with expert mentorship.",
      icon: <Blocks size={32} />,
      link: "#",
    },
    {
      title: "BSACTP",
      subtitle: "Campus Tech Program for Undergraduates",
      description:
        "Specialized program designed for undergraduate students to bridge academic knowledge with industry-ready skills.",
      icon: <GraduationCap size={32} />,
      link: "#",
    },
  ];

  return (
    <section
      id="about-us"
      className="py-20 bg-white flex flex-col items-center text-center"
      data-aos="fade-up"
    >
      {/* Header Section */}
      <div className="mb-16" data-aos="fade-up">
        <h4 className="text-3xl md:text-4xl font-bold text-[#720034] mb-4">
          <span className="text-[#242424]">Our</span> Programs
        </h4>
        <p className="text-lg text-[#242424] max-w-2xl mx-auto leading-relaxed">
          Shaping Africa’s Future Tech Leaders
        </p>
      </div>

      {/* Programs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        {programs.map((program, index) => (
          <div
            key={index}
            className={`group bg-[#720034] text-white rounded-2xl p-8 overflow-hidden min-h-[320px] transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20 cursor-pointer`}
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            {/* Content */}
            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-6 transform transition-transform duration-300 group-hover:scale-110 flex justify-center">
                {program.icon}
              </div>

              <h3 className="text-2xl font-bold mb-2 leading-tight">
                {program.title}
              </h3>

              <p className="text-white/90 font-medium mb-4 text-sm">
                {program.subtitle}
              </p>

              <p className="text-white/80 text-sm leading-relaxed mb-6 flex-grow transition-all duration-300 group-hover:text-white">
                {program.description}
              </p>

              <div className="mt-auto">
                <Link
                  to={program.link}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105 group-hover:translate-x-1"
                >
                  VIEW MORE
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurPrograms;
