import React, { useState, useEffect } from "react";
import scholarship1 from "../assets/scholarship1.png";
import scholarship2 from "../assets/scholarship2.png";
import scholarship3 from "../assets/scholarship3.png";

const CommunitySection = () => {
  const images = [scholarship1, scholarship2, scholarship3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval); // Cleanup on component unmount
  }, [images.length]);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <section id="community" className="py-20 px-6 bg-white mt-20">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-4xl text-[#720034] font-bold mb-4">
          Become A Member
        </h1>
      </div>

      <div className="relative flex justify-center">
        <div
          className="flip-container w-full md:w-1/3 h-auto rounded-[40px] shadow-md"
          key={currentImageIndex} // Key forces re-render for smooth animation
        >
          <img
            src={images[currentImageIndex]}
            alt={`Scholarship ${currentImageIndex + 1}`}
            className="w-full h-auto object-cover rounded-[40px]"
          />
        </div>
      </div>

      <div className="text-center mt-8">
        <button
          onClick={toggleDropdown}
          className="px-6 py-3 bg-[#720034] rounded-lg text-white font-semibold hover:bg-[#5a0028]"
        >
          Join Our Community
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
              className="block px-4 py-3 text-[#720034] hover:bg-[#720034] hover:text-white"
            >
              Join Telegram Group
            </a>
          </div>
        )}
      </div>

      <style jsx>{`
        .flip-container {
          animation: flip-animation 1.5s ease-in-out;
        }

        @keyframes flip-animation {
          0% {
            transform: rotateY(0);
          }
          50% {
            transform: rotateY(90deg);
            opacity: 0.5;
          }
          100% {
            transform: rotateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default CommunitySection;
