import React, { useState, useEffect } from "react";
import coreValueImage from "../assets/coreValue.png";
import AOS from "aos"; 
import "aos/dist/aos.css"; 

const CoreValues = () => {
  const [visibleCount, setVisibleCount] = useState(1);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const coreValues = [
    "B - Brilliance: Spark curiosity and excellence.",
    "L - Leadership: Inspire positive change.",
    "O - Originality: Think boldly, innovate.",
    "C - Collaboration: Work together, grow stronger.",
    "K - Knowledge: Pursue wisdom passionately.",
    "S - Scholarship: Strive for intellectual growth.",
    "C - Character: Build integrity and resilience.",
    "H - Heritage: Honor diversity, shape the future.",
    "O - Opportunity: Create access for all.",
    "L - Legacy: Leave a lasting impact.",
    "A - Aspiration: Dream big, achieve more.",
    "R - Responsibility: Own actions, inspire trust.",
    "S - Success: Celebrate growth and wins.",
  ];

  const handleReadMore = () => {
    if (visibleCount < coreValues.length) {
      const timer = setInterval(() => {
        setVisibleCount((prev) => {
          if (prev < coreValues.length) {
            return prev + 1;
          } else {
            clearInterval(timer);
            return prev;
          }
        });
      }, 300);
    }
  };

  const handleShowLess = () => {
    if (visibleCount > 1) {
      const timer = setInterval(() => {
        setVisibleCount((prev) => {
          if (prev > 1) {
            return prev - 1;
          } else {
            clearInterval(timer);
            return prev;
          }
        });
      }, 300);
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
    <div className="flex flex-col-reverse md:flex-row items-center mt-32">
      <div className="md:w-1/2 space-y-10">
        <div data-aos="fade-up">
          <h2 className="text-3xl text-[#720034] font-bold">Core Values</h2>
          <ul className="list-disc pl-5 mt-4 space-y-4">
            {coreValues.slice(0, visibleCount).map((value, index) => {
              const firstLetter = value.charAt(0);
              const restOfText = value.slice(1);
              return (
                <li
                  key={index}
                  className="flex hover:transform-none p-2"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <span className="text-2xl text-[#720034] font-bold transform-none">
                    {firstLetter}
                  </span>
                  <span className="ml-2 text-lg sm:text-justify text-left hyphens-auto transform-none">
                    {restOfText}
                  </span>
                </li>
              );
            })}
          </ul>
          <div className="flex items-center space-x-4 mt-4">
            {visibleCount < coreValues.length ? (
              <button
                onClick={handleReadMore}
                className="px-6 py-2 bg-[#720034] text-white font-semibold rounded-lg hover:bg-[#470020] transition-all"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                Read More
              </button>
            ) : (
              <button
                onClick={handleShowLess}
                className="px-6 py-2 bg-[#720034] text-white font-semibold rounded-lg hover:bg-[#470020] transition-all"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                Show Less
              </button>
            )}
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="px-6 py-2 bg-[#720034] rounded-lg text-white font-semibold hover:bg-[#5a0028] transition-all"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                Become a member
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div
                  className="absolute  transform -translate-x-1/2 mt-2 bg-white shadow-lg rounded-lg w-52"
                  data-aos="fade-down"
                >
                  <a
                    href="https://chat.whatsapp.com/FukMsAyCYLo6oryVEdQMTP"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-[#720034] hover:bg-[#720034] hover:text-white border rounded-lg"
                  >
                    Join WhatsApp Group
                  </a>
                  <hr />
                  <a
                    href="https://t.me/Block_Scholars_Africa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-[#720034] hover:bg-[#720034] hover:text-white border rounded-lg"
                  >
                    Join Telegram Group
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div
        className="md:w-1/2 flex justify-center md:justify-end mb-6 md:mb-0"
        data-aos="fade-left"
      >
        <img
          src={coreValueImage}
          alt="Core Values"
          className="w-full md:w-[85%] lg:w-[80%] h-auto object-cover rounded-[40px]"
        />
      </div>
    </div>
  );
};

export default CoreValues;
