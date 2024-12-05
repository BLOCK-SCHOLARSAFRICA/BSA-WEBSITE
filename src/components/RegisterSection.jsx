import React, { useState, useEffect } from "react";
import scholarship1 from "../assets/scholarship1.png";
import scholarship2 from "../assets/scholarship2.png";
import scholarship3 from "../assets/scholarship3.png";
import scholarship4 from "../assets/CampusTech 1.png";
const RegisterSection = () => {
  const images = [scholarship1, scholarship2, scholarship3, scholarship4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // Change image every 10 seconds
    return () => clearInterval(interval); // Cleanup on component unmount
  }, [images.length]);

 
  

  return (
    <section id="register" className="py-20 px-6 bg-white mt-20">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-4xl text-[#720034] font-bold mb-4">
          Upcoming Event
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
          type=""
          className="px-6 py-3 bg-[#720034] rounded-lg text-white font-semibold hover:bg-[#5a0028]"
        >
          Register Now
        </button>
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
