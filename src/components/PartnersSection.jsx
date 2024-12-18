import React from "react";
import DigitalSouth from "../assets/digital.png";
import MIBT from "../assets/MIBTLogo.png";
import Optimus from "../assets/OptimusLogo.png";
import Bravpuls from "../assets/Bravpuls.png";

const PartnersSection = () => {
  return (
    <section id="partners" className="py-20 px-6 bg-white mt-20">
      <div className="text-center mb-10 bg-[#720034] py-5 w-full">
        <h1 className="text-2xl md:text-4xl text-white font-bold mb-4">
          Partners
        </h1>

        {/* Partners Logos */}
        <div className="overflow-hidden w-full relative">
          <div className="flex flex-row flex-nowrap justify-center items-center animate-scroll w-max">
            {/* Original Logos */}
            <img
              src={MIBT}
              alt="MIBT"
              className="w-16 sm:w-20 md:w-24 h-auto object-contain rounded-lg shadow-md mx-4"
            />
            <img
              src={DigitalSouth}
              alt="Digital South"
              className="w-16 sm:w-20 md:w-24 h-auto object-contain rounded-lg shadow-md mx-4"
            />
            <img
              src={Optimus}
              alt="Optimus"
              className="w-16 sm:w-20 md:w-24 h-auto object-contain rounded-lg shadow-md mx-4"
            />
            <img
              src={Bravpuls}
              alt="Bravpuls"
              className="w-16 sm:w-20 md:w-24 h-auto object-contain rounded-lg shadow-md mx-4"
            />
            {/* Duplicate Logos for Seamless Scrolling */}
            <img
              src={MIBT}
              alt="MIBT"
              className="w-16 sm:w-20 md:w-24 h-auto object-contain rounded-lg shadow-md mx-4"
            />
            <img
              src={DigitalSouth}
              alt="Digital South"
              className="w-16 sm:w-20 md:w-24 h-auto object-contain rounded-lg shadow-md mx-4"
            />
            <img
              src={Optimus}
              alt="Optimus"
              className="w-16 sm:w-20 md:w-24 h-auto object-contain rounded-lg shadow-md mx-4"
            />
            <img
              src={Bravpuls}
              alt="Bravpuls"
              className="w-16 sm:w-20 md:w-24 h-auto object-contain rounded-lg shadow-md mx-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
