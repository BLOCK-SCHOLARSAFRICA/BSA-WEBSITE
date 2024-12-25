import React, { useEffect } from "react";
import VisionMission from "./VisionMission";
import Objectives from "./Objectives";
import CoreValues from "./CoreValues";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutSection = () => {
  const fullText =
    "Block-Scholars Africa is a pioneering organization dedicated to revolutionizing education and innovation in Africa through the power of blockchain, Web3, emerging technologies, distributed economy, and artificial intelligence. We aim to create a continent-wide ecosystem of experts, entrepreneurs, and innovators who can harness these technologies to drive sustainable development, economic growth, and social impact.";

  useEffect(() => {
    // Initialize AOS for scroll animations
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section
      id="about-us"
      className="py-10 px-6 md:px-14 bg-white mt-20"
      data-aos="fade-up"
    >
      <h2 className="text-3xl text-[#720034] font-bold" data-aos="fade-up">
        Who We Are
      </h2>
      <p className="mt-6 text-[16px]" data-aos="fade-up" data-aos-delay="200">
        {fullText}
      </p>

      {/* Add animation effects to the child components */}
      <VisionMission data-aos="fade-up" data-aos-delay="300" />
      <Objectives data-aos="fade-up" data-aos-delay="400" />
      <CoreValues data-aos="fade-up" data-aos-delay="500" />
    </section>
  );
};

export default AboutSection;
