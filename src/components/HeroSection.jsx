import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";


import heroImage1 from "../assets/heroImage.png";
import heroImage2 from "../assets/heroImage2.png";
import heroImage3 from "../assets/heroImage3.png";
import heroImage4 from "../assets/heroImage4.png";
import heroImage5 from "../assets/heroImage1.png";

const HeroSection = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  const images = [heroImage1, heroImage2, heroImage3,heroImage4,heroImage5];

  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    adaptiveHeight: true,
  };

  return (
    <section
      id="home"
      className="font-sans min-h-screen flex items-center pt-[100px] md:pt-[50px]"
    >
      <div className="w-full">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          {/* Left Text Content */}
          <div className="md:w-1/2 " data-aos="fade-right">
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

          {/* Right Image Carousel */}
          <div className="md:w-1/2 w-full" data-aos="fade-left">
            <Slider {...sliderSettings} className="w-full max-w-[600px]">
              {images.map((image, idx) => (
                <div key={idx} className="flex justify-center">
                  <div className="w-full md:h-[600px] h-[400px] overflow-hidden rounded-xl shadow-lg">
                    <img
                      src={image}
                      alt={`Hero Slide ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
