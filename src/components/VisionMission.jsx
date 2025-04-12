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
          <h2 className="text-2xl text-[#720034] font-medium">Who We Are</h2>
          <p className="mt-5">
            We are a community-driven, for-profit tech education initiative
            committed to fostering a new generation of African innovators,
            entrepreneurs, and experts. Through structured learning programs,
            mentorship, and industry collaborations, we empower individuals to
            create impactful solutions using decentralized technologies.
          </p>
        </div>

        {/* Mission */}
        <div data-aos="fade-up" data-aos-delay="400">
          <h2 className="text-2xl text-[#720034] font-medium">What We Do</h2>

          <ul className="text-lg my-5     list-disc">
            <li>
              {" "}
              Deliver cutting-edge education in blockchain, Web3, AI, and
              emerging technologies.
            </li>
            <li>
              {" "}
              Establish campus communities across Africa to nurture young
              talents.
            </li>
            <li>
              {" "}
              Organize events, hackathons, and tech summits to drive engagement.
            </li>
            <li>
              {" "}
              Provide mentorship, networking, and funding opportunities for
              African innovators.
            </li>
            <li>
              Develop a Learning Management System (LMS) for seamless digital
              learning.
            </li>
            <li>
              {" "}
              Advocate for finance inclusion and decentralized solutions across
              the continent.
            </li>
          </ul>
         
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
