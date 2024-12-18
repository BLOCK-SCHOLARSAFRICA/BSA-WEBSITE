import React, { useState, useEffect } from "react";
import aboutImage2 from "../assets/aboutImage2.png";
import AOS from "aos"; 
import "aos/dist/aos.css"; 

const Objectives = () => {
  const [visibleObjectives, setVisibleObjectives] = useState(1);

  const objectives = [
    "To provide world-class education and training programs in distributed ledger systems, Web3, and emerging technologies, empowering individuals and organizations with cutting-edge knowledge and skills.",
    "To foster a vibrant community of innovators, entrepreneurs, and experts committed to driving sustainable development and economic growth through the application of decentralized technologies and other advanced digital solutions.",
    "To promote the adoption and utilization of decentralized systems, Web3 innovations, and emerging tech solutions across Africa, aiming to enhance efficiency, transparency, and inclusivity in various sectors.",
    "To support the development of innovative technological solutions that address real-world challenges, with a focus on digital transformation and next-generation infrastructure.",
    "To facilitate collaboration and networking among enthusiasts and professionals in the decentralized tech space, encouraging knowledge sharing, partnerships, and the development of forward-thinking solutions.",
    "To drive positive social and economic impact by leveraging decentralized technologies and digital innovations for initiatives that foster community development, financial inclusion, and sustainable growth.",
  ];

  const handleButtonClick = () => {
    if (visibleObjectives < objectives.length) {
      // Gradually add objectives
      const timer = setInterval(() => {
        setVisibleObjectives((prev) => {
          if (prev < objectives.length) {
            return prev + 1;
          } else {
            clearInterval(timer);
            return prev;
          }
        });
      }, 500);
    } else {
      // Gradually remove objectives
      const timer = setInterval(() => {
        setVisibleObjectives((prev) => {
          if (prev > 1) {
            return prev - 1;
          } else {
            clearInterval(timer);
            return prev;
          }
        });
      }, 500);
    }
  };

  // Initialize AOS for animations
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center mt-32">
      {/* Image Section */}
      <div
        className="md:w-1/2 flex justify-center md:justify-start mb-6 md:mb-0"
        data-aos="fade-right"
      >
        <img
          src={aboutImage2}
          alt="Objectives"
          className="w-full md:w-[85%] lg:w-[75%] h-auto object-cover rounded-[40px]"
        />
      </div>

      {/* Objectives Section */}
      <div className="md:w-1/2 md:pl-10 space-y-6">
        <h2 className="text-3xl text-[#720034] font-bold" data-aos="fade-up">
          Objectives
        </h2>
        <ul className="list-decimal pl-5 space-y-4">
          {objectives.slice(0, visibleObjectives).map((objective, index) => (
            <li key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              {objective}
            </li>
          ))}
        </ul>
        <button
          onClick={handleButtonClick}
          className="mt-4 px-6 py-2 bg-[#720034] text-white font-semibold rounded-lg hover:bg-[#470020] transition-all"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {visibleObjectives < objectives.length ? "Read More" : "Show Less"}
        </button>
      </div>
    </div>
  );
};

export default Objectives;
