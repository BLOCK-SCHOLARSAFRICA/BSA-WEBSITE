import React, { useState, useEffect } from "react";
import heroImage from "../assets/heroImage.png";
import AOS from "aos"; 
import "aos/dist/aos.css"; 

const HeroSection = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,
    });
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <section
      id="home"
      className="relative bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-80"></div>

      {/* Content */}
      <div className="relative text-center text-white px-6" data-aos="fade-up">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Empowering decentralized leaders of tomorrow through Blockchain
        </h1>
        <p className="mt-5" data-aos="fade-up" data-aos-delay="200">
          Join Block Scholars Africa and unlock opportunities in blockchain!
          <br /> Access exclusive scholarships, internships, and top jobs. Start
          your journey today!
        </p>
        {/* Join Our Community Button */}
        <div className="relative mt-6" data-aos="fade-up" data-aos-delay="400">
          <button
            onClick={toggleDropdown}
            className="px-6 py-3 bg-[#720034] rounded-lg text-white font-semibold hover:bg-[#5a0028] transform transition-all duration-200 hover:scale-105"
          >
            Join Our Community
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-white shadow-lg rounded-lg w-52 transition-transform duration-300 ease-in-out">
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
                className="block px-4 py-3 text-[#720034] hover:bg-[#720034] hover:text-white"
              >
                Join Telegram Group
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
