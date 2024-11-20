// src/components/SponsorsSection.js
import React from "react";

const SponsorsSection = () => {
  return (
    <section id="sponsors" className="py-20 px-6 bg-white">
      <div className="text-center mb-10 py-5">
        <h1 className="text-4xl md:text-4xl text-[#720034] font-bold mb-2">
          Sponsor
        </h1>
        <p className="text-lg md:text-lg text-[#720034]">For Sponsorship</p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 mt-10">
        <div className="flex flex-col items-center bg-[#fcf5f5] text-[#720034] p-6 rounded-lg shadow-lg w-full md:w-[30%]">
          <p className="text-lg font-medium">Bank Transfer</p>
          <h1 className="text-xl font-semibold mb-4">
            Block-Scholars Africa LTD
          </h1>
          <p className="text-md mb-4">Moniepoint MFB</p>
          <button
            type="submit"
            className="px-6 py-3 bg-[#720034] rounded-lg text-white font-semibold hover:bg-[#5a0028]"
          >
            Sponsor
          </button>
        </div>
        <div className="flex flex-col items-center bg-[#720034] text-[#fcf5f5] p-6 rounded-lg shadow-lg w-full md:w-[30%]">
          <p className="text-lg font-medium">Via Crypto</p>
          <h1 className="text-xl font-semibold mb-4">
            0xcebA4E2f29F53f <br />
            C47775235094c548 <br /> 3EF864eB95
          </h1>
          <button
            type="submit"
            className="px-6 py-3 bg-[#fcf5f5] rounded-lg text-[#720034] font-semibold hover:bg-[#f2f2f2]"
          >
            Sponsor
          </button>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
