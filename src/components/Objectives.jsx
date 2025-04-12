import React, { useState, useEffect } from "react";
import aboutImage2 from "../assets/aboutImage2.png";
import AOS from "aos"; 
import "aos/dist/aos.css"; 

const Objectives = () => {
  

 
  // Initialize AOS for animations
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center mt-32">
      {/* Image Section */}
      <div
        className="md:w-1/2 flex justify-center md:justify-start mb-6 md:mb-0"
        data-aos="fade-right"
      >
        <img
          src={aboutImage2}
          alt="Objectives"
          className="w-full md:w-[85%] lg:w-[75%] h-auto object-cover rounded-[40px]"
        />
      </div>

      {/* Objectives Section */}
      <div className="md:w-1/2 md:pl-10 space-y-6">
        <h2 className="text-2xl text-[#720034] font-medium" data-aos="fade-up">
          Vision
        </h2>
        <p>
          To build a continent-wide ecosystem of innovators, entrepreneurs, and
          scholars who harness blockchain and emerging technologies for
          sustainable development, economic growth, and social impact in Africa.
        </p>
      </div>
    </div>
  );
};

export default Objectives;
