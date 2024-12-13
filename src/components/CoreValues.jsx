import React, { useState } from "react";
import coreValueImage from "../assets/coreValue.png";

const CoreValues = () => {
  const [visibleCount, setVisibleCount] = useState(1);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const coreValues = [
    "B - Brilliance: Embracing curiosity and creativity to achieve academic excellence.",
    "L - Leadership: Empowering individuals to take charge of their learning and make a positive impact.",
    "O - Originality: Fostering innovative thinking and unique perspectives.",
    "C - Collaboration: Building a supportive community that values teamwork, mutual respect, open communication, and knowledge-sharing.",
    "K - Knowledge: Pursuing wisdom and understanding with passion and dedication.",
    "S - Scholarship: Striving for academic rigor, critical thinking, and intellectual growth.",
    "C - Character: Developing integrity, resilience, and social responsibility.",
    "H - Heritage: Honoring the past, celebrating diversity, and shaping a brighter future.",
    "O - Opportunity: Creating access and inclusivity for all to reach their full potential.",
    "L - Legacy: Striving to make a lasting, positive impact.",
    "A - Aspiration: Inspiring individuals to set ambitious goals and strive for excellence.",
    "R - Responsibility: Taking ownership, accountability, and stewardship.",
    "S - Success: Celebrating achievements and progress along the academic journey.",
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

  return (
    <div className="flex flex-col-reverse md:flex-row items-center mt-32">
      <div className="md:w-1/2 space-y-10">
        <div>
          <h2 className="text-3xl text-[#720034] font-bold">Core Values</h2>
          <ul className="list-disc pl-5 mt-4 space-y-4">
            {coreValues.slice(0, visibleCount).map((value, index) => {
              const firstLetter = value.charAt(0); // Extract the first letter
              const restOfText = value.slice(1); // Extract the rest of the text
              return (
                <li key={index} className="flex items-center">
                  <span className="text-2xl text-[#720034] font-bold">
                    {firstLetter}
                  </span>
                  <span className="ml-2 text-lg text-justify">
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
                className="px-6 py-2 bg-[#720034] text-white font-semibold rounded-lg hover:bg-[#470020]"
              >
                Read More
              </button>
            ) : (
              <button
                onClick={handleShowLess}
                className="px-6 py-2 bg-[#720034] text-white font-semibold rounded-lg hover:bg-[#470020]"
              >
                Show Less
              </button>
            )}
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="px-6 py-2 bg-[#720034] rounded-lg text-white font-semibold hover:bg-[#5a0028]"
              >
                Become a member
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-white shadow-lg rounded-lg w-52">
                  <a
                    href="https://chat.whatsapp.com/FukMsAyCYLo6oryVEdQMTP"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-[#720034] hover:bg-[#720034] hover:text-white"
                  >
                    Join WhatsApp Group
                  </a>
                  <hr />
                  <a
                    href="https://t.me/Block_Scholars_Africa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-[#720034] hover:bg-[#720034] hover:text-white"
                  >
                    Join Telegram Group
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Image */}
      <div className="md:w-1/2 flex justify-center md:justify-end mb-6 md:mb-0">
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
