import React from "react";
import aboutImage from "../assets/aboutImage.png";
import AOS from "aos";
import "aos/dist/aos.css"; 

const VisionMission = () => {
  // Initialize AOS for animations
  React.useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);

  return (
    <div
      className="flex flex-col-reverse md:flex-row items-center mt-20"
      data-aos="fade-up"
    >
      {/* Left side content with vision and mission */}
      <div className="md:w-1/2 space-y-10">
        {/* Vision */}
        <div data-aos="fade-up" data-aos-delay="200">
          <h2 className="text-3xl text-[#720034] font-bold">Vision</h2>
          <p className="mt-5">
            Empowering Africa's future through blockchain, Web3, emerging
            technologies, and artificial intelligence, creating a continent-wide
            ecosystem of innovators, entrepreneurs, and experts who drive
            sustainable development, economic growth, and social impact.
          </p>
        </div>

        {/* Mission */}
        <div data-aos="fade-up" data-aos-delay="400">
          <h2 className="text-3xl text-[#720034] font-bold">Mission</h2>
          <p className="mt-5">
            Equipping young Africans with the knowledge, skills, and resources
            to succeed in the blockchain and emerging tech industries, fostering
            a community of scholars, innovators, and leaders who advance
            education, develop innovative solutions, promote adoption, and drive
            positive impact through:
            <br /> <br />- Blockchain technology. <br />
            - Web3 innovations. <br />- Emerging technologies. <br />- Artificial
            intelligence applications. <br />- Distributed Economy.
          </p>
        </div>
      </div>

      {/* Right side image */}
      <div
        className="md:w-1/2 flex justify-center md:justify-end mb-6 md:mb-0"
        data-aos="slide-left"
        data-aos-delay="600" // Delay for a smooth sequence
      >
        <img
          src={aboutImage}
          alt="About Us"
          className="w-full md:w-[85%] lg:w-[75%] h-auto object-cover rounded-[40px]"
        />
      </div>
    </div>
  );
};

export default VisionMission;
