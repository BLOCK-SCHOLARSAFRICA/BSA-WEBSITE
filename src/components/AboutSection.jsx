import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {  Monitor, BookOpen, Briefcase, Handshake } from "lucide-react";

const AboutSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const features = [
    {
      icon: <Monitor size={36} />,
      title: "Comprehensive Virtual Training",
      description:
        "Gain access to structured, industry-relevant courses delivered by top experts. Master blockchain, Web3, AI, and other in-demand tech skills essential for success.",
    },
    {
      icon: <Briefcase size={36} />,
      title: "Startup Project Experience",
      description:
        "Work on real-world startup projects, collaborate with peers, and develop innovative solutions-nurturing creativity, teamwork, and an entrepreneurial mindset.",
    },
    {
      icon: <Handshake size={36} />,
      title: "Post-Training Support",
      description:
        "Access continuous mentorship, internship opportunities, and a powerful network of partners and sponsors committed to helping you thrive in the tech industry.",
    },
    {
      icon: <BookOpen size={36} />,
      title: "Hands-On Bootcamp",
      description:
        "Engage in immersive monthly bootcamps that blend theoretical learning with real-world applications, ensuring you gain practical expertise in cutting-edge technologies.",
    },
  ];

  return (
    <section
      className="py-16  bg-white flex flex-col items-center text-center"
      data-aos="fade-up"
    >
      {/* Header Section */}
      <div className="mb-16">
        <p className="text-base text-[#720034] mb-3 font-medium tracking-wide">
          • Join Us •
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#720034] mb-6 leading-tight">
          <span className="text-[#242424]">We are</span> Empowering Africa's
          Future
          <br className="hidden md:block" />
          <span className="text-[#242424]"> Tech Leaders</span>
        </h2>
        <p className="max-w-3xl text-[#242424] text-base md:text-lg mb-4 leading-relaxed mx-auto">
          Unlock your Tech Future with our dynamic training programs designed to
          equip young Africans with the skills, experience, and network needed
          to excel in the digital economy.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group bg-[#720034] text-white rounded-2xl p-6 flex flex-col gap-4 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#720034]/20 min-h-[320px] relative overflow-hidden"
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            {/* Background accent */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-full -translate-y-8 translate-x-8 transition-all duration-300 group-hover:scale-150 group-hover:bg-white/10"></div>

            {/* Icon */}
            <div className="text-white mb-2 relative z-10 transform transition-transform duration-300 group-hover:scale-110">
              {feature.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold mb-3 relative z-10 leading-tight">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-white/90 leading-relaxed flex-grow relative z-10 transition-all duration-300 group-hover:text-white">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
