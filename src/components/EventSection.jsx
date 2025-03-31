import React, { useState, useEffect } from "react";
import quizNight from "../assets/Quiz Night.png";
import techTour from "../assets/Tech tour 1.png";
import weeklyProgram from "../assets/Weekly engagement.png";

const EventSection = () => {
  const images = [quizNight, techTour, weeklyProgram];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 8000); 
    return () => clearInterval(interval); 
  }, [images.length]);

  return (
    <section id="events" className="py-10 px-6 md:px-14 bg-white mt-20">
      <h2 className="text-4xl text-[#720034] font-bold mb-6 text-center">
        Events
      </h2>

      <div className="relative flex justify-center">
        <div
          className="flip-container w-full md:w-1/3 h-auto rounded-[40px] shadow-md"
          key={currentImageIndex}
        >
          <img
            src={images[currentImageIndex]}
            alt={`Event ${currentImageIndex + 1}`}
            className="w-full h-auto object-cover rounded-[40px]"
          />
        </div>
      </div>

      <style jsx>{`
        .flip-container {
          animation: flip-right-to-left 1s ease-in-out;
        }

        @keyframes flip-right-to-left {
          0% {
            transform: rotateY(0);
          }
          50% {
            transform: rotateY(-90deg);
            opacity: 0.5;
          }
          100% {
            transform: rotateY(-180deg);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default EventSection;
