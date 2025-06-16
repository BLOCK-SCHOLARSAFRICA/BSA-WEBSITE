import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Laptop2, Monitor, BookOpen } from "lucide-react";

const AboutSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const features = [
    {
      icon: <Monitor size={36} />,
      title: "Startup Project Experience",
    },
    {
      icon: <Laptop2 size={36} />,
      title: "Comprehensive Virtual Training",
      description:
        "Gain access to structured, industry-relevant courses delivered by top experts. Master blockchain, Web3, AI and other in-demand tech skills essential for success.",
    },
    {
      icon: <BookOpen size={36} />,
      title: "Hands-On Bootcamp",
    },
    {
      icon: <BookOpen size={36} />,
      title: "Post-Training Support",
    },
  ];

  return (
    <section
      
      className="py-16 px-6 md:px-14 bg-white mt-20 flex flex-col items-center text-center"
      data-aos="fade-up"
    >
      <p className="text-[16px] text-[#720034] mb-2">• Join Us •</p>
      <h2 className="text-3xl md:text-4xl font-bold text-[#720034] mb-4">
        <span className="text-[#242424]">We are</span> Empowering Africa’s
        Future
        <br className="hidden md:block" />{" "}
        <span className="text-[#242424]">Tech Leaders</span>
      </h2>
      <p className="max-w-2xl text-[#242424] text-sm md:text-base mb-10">
        Unlock your Tech Future with our dynamic training programs designed to
        equip young Africans with the skills, experience, and network needed to
        excel in the digital economy.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 text-left md:grid-cols-4 gap-6 w-full max-w-6xl mb-20">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-[#720034] text-white rounded-2xl p-6 flex flex-col gap-4 justify-between 
  transform transition-all duration-300 hover:scale-105 hover:h-[340px] h-[300px]"
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            <div className="text-white ">{feature.icon}</div>
            <h3 className="text-xl font-semibold">{feature.title}</h3>
            {feature.description && (
              <p className="text-sm text-white">{feature.description}</p>
            )}
            <button className="self-start text-white hover:scale-110 transition-transform">
              <span className="text-xl">➜</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
