import React from "react";
import DigitalSouth from "../assets/digital 1.png";
import MIBT from "../assets/MIBTLogo.png";
import Optimus from "../assets/OptimusLogo.png";

const PartnersSection = () => {
  return (
    <section id="partners" className="py-20 px-6 bg-white mt-20">
      <div className="text-center mb-10 bg-[#720034] py-5 w-full">
        <h1 className="text-2xl md:text-4xl text-white font-bold mb-2">
          Partners
        </h1>

        <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
          <img
            src={DigitalSouth}
            alt="IBA"
            className="w-16 h-auto object-contain rounded-[10px] shadow-md"
          />
          <img
            src={MIBT}
            alt="MIBT"
            className="w-16 h-auto object-contain rounded-[10px] shadow-md"
          />
          <img
            src={Optimus}
            alt="Optimus"
            className="w-16 h-auto object-contain rounded-[10px] shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
