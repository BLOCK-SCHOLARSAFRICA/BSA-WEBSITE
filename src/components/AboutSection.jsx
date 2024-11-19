import React from "react";
import aboutImage from "../assets/aboutImage.png";
import aboutImage2 from "../assets/aboutImage2.png";

const AboutSection = () => {
  return (
    <section id="about-us" className="py-10 px-6 md:px-14 bg-white">
      {/* Title */}
      <h2 className="text-3xl text-[#720034] font-bold">About Us</h2>

      {/* Description */}
      <p className="mt-6 text-[16px]">
        Block-Scholars Africa is a pioneering organization dedicated to
        revolutionizing education and innovation in Africa through the power of
        blockchain, Web3, emerging technologies, and artificial intelligence. We
        aim to create a continent-wide ecosystem of experts, entrepreneurs, and
        innovators who can harness these technologies to drive sustainable
        development, economic growth, and social impact.
      </p>

      {/* Content Section */}
      <div className="flex flex-col-reverse md:flex-row items-center mt-10">
        {/* Text Content */}
        <div className="md:w-1/2 space-y-10">
          {/* Vision */}
          <div>
            <h2 className="text-3xl text-[#720034] font-bold">Vision</h2>
            <p className="mt-5">
              Empowering Africa's future through blockchain, Web3, emerging
              technologies, and artificial intelligence, creating a
              continent-wide ecosystem of innovators, entrepreneurs, and experts
              who drive sustainable development, economic growth, and social
              impact.
            </p>
          </div>

          {/* Mission */}
          <div>
            <h2 className="text-3xl text-[#720034] font-bold">Mission</h2>
            <p className="mt-5">
              Equipping young Africans with the knowledge, skills, and resources
              to succeed in the blockchain and emerging tech industries,
              fostering a community of scholars, innovators, and leaders who
              advance education, develop innovative solutions, promote adoption,
              and drive positive impact through:
              <br /> <br />- Blockchain technology <br />
              - Web3 innovations <br />- Emerging technologies <br />-
              Artificial intelligence applications
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end mb-6 md:mb-0">
          <img
            src={aboutImage}
            alt="About Us"
            className="w-full md:w-[85%] lg:w-[75%] h-auto object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center mt-10">
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center md:justify-start mb-6 md:mb-0">
          <img
            src={aboutImage2}
            alt="Objectives"
            className="w-full md:w-[85%] lg:w-[75%] h-auto object-cover"
          />
        </div>

        {/* Objectives Section */}
        <div className="md:w-1/2 md:pl-10 space-y-6">
          <h2 className="text-3xl text-[#720034] font-bold">Objectives</h2>
          <p className="mt-4">
            1. To provide world-class education and training programs in
            distributed ledger systems, Web3, and emerging technologies,
            empowering individuals and organizations with cutting-edge knowledge
            and skills.
            <br />
            <br />
            2. To foster a vibrant community of innovators, entrepreneurs, and
            experts committed to driving sustainable development and economic
            growth through the application of decentralized technologies and
            other advanced digital solutions.
            <br />
            <br />
            3. To promote the adoption and utilization of decentralized systems,
            Web3 innovations, and emerging tech solutions across Africa, aiming
            to enhance efficiency, transparency, and inclusivity in various
            sectors.
            <br />
            <br />
            4. To support the development of innovative technological solutions
            that address real-world challenges, with a focus on digital
            transformation and next-generation infrastructure.
            <br />
            <br />
            5. To facilitate collaboration and networking among enthusiasts and
            professionals in the decentralized tech space, encouraging knowledge
            sharing, partnerships, and the development of forward-thinking
            solutions.
            <br />
            <br />
            6. To drive positive social and economic impact by leveraging
            decentralized technologies and digital innovations for initiatives
            that foster community development, financial inclusion, and
            sustainable growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
