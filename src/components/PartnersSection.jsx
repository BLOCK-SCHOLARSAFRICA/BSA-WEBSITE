import React from "react";

const PartnersSection = () => {
  return (
    <section id="partners" className="py-20 px-6 bg-gray-100">
      <div className="text-center mb-10 bg-[#720034] py-5 w-full">
        <h1 className="text-2xl md:text-4xl text-white font-bold mb-2">
          Partners
        </h1>

        <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
          <img
            src="../assets/iba.JPG"
            alt="IBA"
            className="w-1/2 md:w-1/4 lg:w-1/6 h-auto object-cover rounded-[20px] shadow-md"
          />
          <img
            src="../assets/mibt.JPG"
            alt="MIBT"
            className="w-1/2 md:w-1/4 lg:w-1/6 h-auto object-cover rounded-[20px] shadow-md"
          />
          <img
            src="../assets/diditalSouth.JPG"
            alt="Digital South"
            className="w-1/2 md:w-1/4 lg:w-1/6 h-auto object-cover rounded-[20px] shadow-md"
          />
          <img
            src="../assets/optimus.JPG"
            alt="Optimus"
            className="w-1/2 md:w-1/4 lg:w-1/6 h-auto object-cover rounded-[20px] shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
