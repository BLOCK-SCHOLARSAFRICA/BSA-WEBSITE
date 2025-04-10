import React, { useEffect } from "react";
import VisionMission from "./VisionMission";
import Objectives from "./Objectives";
import CoreValues from "./CoreValues";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutSection = () => {
  const fullText =
    "Block-Scholars Africa (BSA) is a pioneering organization dedicated to revolutionizing education and innovation in Africa through blockchain, Web3,  emerging technologies, the distributed economy, and artificial intelligence (AI). Our mission is to equip young Africans with the knowledge, skills, and opportunities needed to thrive in the global tech ecosystem.";

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
        About Us
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
