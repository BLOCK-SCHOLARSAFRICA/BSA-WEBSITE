import React, { useState, useEffect } from "react";
import scholarship1 from "../assets/scholarship1.png";
import scholarship2 from "../assets/scholarship2.png";
import scholarship3 from "../assets/scholarship3.png";
import scholarship4 from "../assets/CampusTech 1.png";

const RegisterSection = () => {
  const images = [scholarship1, scholarship2, scholarship3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // Change image every 10 seconds
    return () => clearInterval(interval); // Cleanup on component unmount
  }, [images.length]);

  const handleRegisterClick1 = () => {
    // Replace the URL below with your Google Form link
    window.open(
      "https://forms.gle/5gHdnxQ9wxa83zYz8",
      "_blank"
    );
  };
  const handleRegisterClick2 = () => {
    // Replace the URL below with your Google Form link
    window.open(
      "https:///forms.gle/Yn5QnMd2B4Lyz44V6",
      "_blank"
    );
  };

  return (
    <section id="register" className="py-20 px-6 bg-white mt-20">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-3xl text-[#720034] font-bold mb-4">
          Scholarship Programs & Campus Tech Program
        </h1>
      </div>

      {/* Center the image sections */}
      <div className="flex flex-col md:flex-row justify-center items-center mt-24 gap-20">
        {/* Flipping Images Section */}
        <div className="flex flex-col items-center gap-6 md:w-1/3">
          <div
            className="flip-container w-full h-auto rounded-[40px] shadow-md"
            key={currentImageIndex}
          >
            <img
              src={images[currentImageIndex]}
              alt={`Scholarship ${currentImageIndex + 1}`}
              className="w-full h-auto object-cover rounded-[40px]"
            />
          </div>
          <div className="text-center mt-8">
            <button
              onClick={handleRegisterClick1}
              className="px-6 py-3 bg-[#720034] rounded-lg text-white font-semibold hover:bg-[#5a0028]"
            >
              Register Now
            </button>
          </div>
        </div>

        {/* Static Image Section */}
        <div className="flex flex-col items-center gap-6 md:w-1/3">
          <div className="w-full h-auto rounded-[40px] shadow-md">
            <img
              src={scholarship4}
              alt="Scholarship 4"
              className="w-full h-auto object-cover rounded-[40px]"
            />
          </div>
          <div className="text-center mt-8">
            <button
              onClick={handleRegisterClick2}
              className="px-6 py-3 bg-[#720034] rounded-lg text-white font-semibold hover:bg-[#5a0028]"
            >
              Register Now
            </button>
          </div>
        </div>
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

export default RegisterSection;
