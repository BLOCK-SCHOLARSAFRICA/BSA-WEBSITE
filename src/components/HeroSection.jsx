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
    <section id="home" className="font-sans min-h-screen flex items-center pt-[132px] md:pt-[10px]">
      <div className="">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2" data-aos="fade-right">
            <h1 className="text-[#242424] text-4xl md:text-5xl font-bold mb-6">
              Empowering Africa's Future Through Blockchain & Emerging Tech.
            </h1>
            <p className="mb-8 text-[#242424] font-medium leading-relaxed">
              Join Block-Scholars Africa and unlock opportunities in blockchain!
              Access exclusive scholarships, internships, and top jobs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href="https://tinyurl.com/BSA-Innovation-Lab-Cohort-1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 text-white bg-[#720034] border-[#720034] rounded-full text-center transition-transform transform hover:scale-105"
              >
                APPLY NOW
              </a>

              <div className="relative w-full sm:w-auto">
                <button
                  onClick={toggleDropdown}
                  className="w-full sm:w-auto px-6 py-3 border border-[#720034] text-[#720034] rounded-full transition-transform transform hover:scale-105"
                >
                  LEARN MORE
                </button>

                {isDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-full sm:w-52 bg-white text-[#720034] shadow-lg rounded-lg z-50 overflow-hidden">
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