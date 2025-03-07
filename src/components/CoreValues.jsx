import React, { useState, useEffect } from "react";
import coreValueImage from "../assets/coreValue.png";
import AOS from "aos";
import "aos/dist/aos.css";

const CoreValues = () => {
  const [visibleCount, setVisibleCount] = useState(3);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const coreValues = [
    "Brilliance - We foster a culture of excellence, curiosity, and innovation.",
    "Leadership - We empower individuals to lead change and drive transformation.",
    "Originality - We encourage bold ideas, creative problem-solving, and disruptive thinking.",
    "Collaboration - We believe in teamwork, partnerships, and collective progress.",
    "Knowledge - We are committed to continuous learning and intellectual growth.",
    "Scholarship - We promote academic excellence and research-driven innovation.",
    "Character - We uphold integrity, ethics, and responsibility in all we do.",
    "Heritage - We celebrate Africa’s rich diversity while shaping its digital future.",
    "Opportunity - We create access to education, mentorship, and career advancement.",
    "Legacy - We aim to build long-term impact, leaving a lasting footprint.",
    "Aspiration - We encourage young Africans to dream big and achieve greatness.",
    "Responsibility - We take ownership of our mission to transform Africa through tech.",
    "Success - We celebrate progress, achievements, and breakthrough innovations.",
  ];

  const handleReadMore = () => {
    setVisibleCount(coreValues.length);
  };

  const handleShowLess = () => {
    setVisibleCount(3);
  };

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
          <h2 className="text-2xl text-[#720034] font-medium mb-5">
            Core Values
          </h2>
          <p className=" mb-6">
            At Block-Scholars Africa, our values define our mission and guide
            our impact across the continent.
          </p>
          <ul className="list-decimal list-inside space-y-2">
            {coreValues.slice(0, visibleCount).map((value, index) => (
              <li key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                {value}
              </li>
            ))}
          </ul>
          <p className=" mt-6">
            These values shape BSA’s vision to empower Africa’s future through
            blockchain, Web3, AI, and emerging technologies.
          </p>

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

              {isDropdownOpen && (
                <div
                  className="absolute transform -translate-x-1/2 mt-2 bg-white shadow-lg rounded-lg w-52"
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
