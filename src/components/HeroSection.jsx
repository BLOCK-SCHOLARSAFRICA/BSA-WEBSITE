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
    <section id="home" className="relative  font-sans py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2" data-aos="fade-right">
            <h1 className="text-[#242424] text-4xl md:text-5xl font-bold mb-6">
              Empowering Africa's Future Through Blockchain & Emerging Tech.
            </h1>
            <p className="mb-8 text-[#242424] font-medium leading-relaxed">
              Join Block-Scholars Africa and unlock opportunities in blockchain!
              Access exclusive scholarships, internships, and top jobs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 relative">
              <a
                href="https://tinyurl.com/BSA-Innovation-Lab-Cohort-1"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 text-white bg-[#720034] border-[#720034] rounded-full text-center transition-transform transform hover:scale-105"
              >
                APPLY NOW
              </a>
              <button
                onClick={toggleDropdown}
                className="px-6 py-3 border border-[#720034]  text-[#720034] rounded-full   transition-transform transform hover:scale-105"
              >
                LEARN MORE
              </button>

              {/* Dropdown */}
              {isDropdownOpen && (
                <div className="absolute top-16 w-52 bg-white text-[#720034] shadow-lg rounded-lg z-50">
                  <a
                    href="https://chat.whatsapp.com/FukMsAyCYLo6oryVEdQMTP"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 hover:bg-[#720034] hover:text-white"
                  >
                    Join WhatsApp Group
                  </a>
                  <hr />
                  <a
                    href="https://t.me/BlockScholars_Africa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-3 hover:bg-[#720034] hover:text-white"
                  >
                    Join Telegram Group
                  </a>
                </div>
              )}
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center" data-aos="fade-left">
            <img
              src={heroImage}
              alt="Hero"
              className="max-w-full h-auto rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
