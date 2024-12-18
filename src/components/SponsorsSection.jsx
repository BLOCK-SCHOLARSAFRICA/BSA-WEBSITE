import React, { useState } from "react";
import { FaRegCopy } from "react-icons/fa";

const SponsorsSection = () => {
  const [isSupportVisible, setIsSupportVisible] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const toggleSupportVisibility = () => {
    setIsSupportVisible((prev) => !prev);
    setActiveSection(null);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard: " + text);
  };

  return (
    <section
      id="sponsors"
      className="py-20 px-6 bg-white opacity-0 animate-fadeIn"
    >
      <div className="text-center mb-10 py-5">
        <h1 className="text-4xl md:text-4xl text-[#720034] font-bold mb-2">
          Support
        </h1>
        <p className="text-lg md:text-lg text-[#720034] mt-5">
          Empower the next generation of tech leaders. Support Block-Scholars
          Africa's mission to educate <br /> and empower young African’s in
          blockchain technology
        </p>
        <button
          onClick={toggleSupportVisibility}
          className="px-6 py-3 mt-10 bg-[#720034] rounded-lg text-white font-semibold hover:bg-[#5a0028] transition-all duration-300"
        >
          {isSupportVisible ? "Hide Options" : "Get Involved"}
        </button>
      </div>

      {/* Overlay Section */}
      {isSupportVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-[#fcf5f5] text-[#720034] p-10 rounded-lg shadow-lg w-full md:w-[80%] lg:w-[60%] relative">
            {/* Close Button */}
            <button
              onClick={toggleSupportVisibility}
              className="absolute top-4 right-4 text-2xl text-[#720034] hover:text-[#5a0028] focus:outline-none"
            >
              &times;
            </button>

            {/* Content */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-20">
              {/* Bank Transfer Section */}
              <div className="flex flex-col items-center w-full md:w-[30%]">
                <button
                  onClick={() =>
                    setActiveSection((prev) =>
                      prev === "bank" ? null : "bank"
                    )
                  }
                  className="px-6 py-3 bg-[#720034] rounded-lg text-white font-semibold hover:bg-[#5a0028] transition-all duration-300"
                >
                  Bank Transfer
                </button>
                {activeSection === "bank" && (
                  <div className="mt-5 text-center animate-slideIn">
                    <p className="text-lg font-medium">
                      Send money to Block-Scholars Africa LTD <br /> Moneipoint
                      Microfinance Bank
                    </p>
                    <div className="flex items-center justify-center gap-2 mt-2">
                      <span className="text-xl font-semibold text-[#720034]">
                        6566764321
                      </span>
                      <FaRegCopy
                        className="text-xl cursor-pointer hover:text-[#5a0028] transition-all duration-300"
                        onClick={() => copyToClipboard("6566764321")}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Cryptocurrency Section */}
              <div className="flex flex-col items-center w-full md:w-[30%]">
                <button
                  onClick={() =>
                    setActiveSection((prev) =>
                      prev === "crypto" ? null : "crypto"
                    )
                  }
                  className="px-4 py-2 md:px-6 md:py-3 bg-[#720034] rounded-lg text-white font-semibold text-sm md:text-base hover:bg-[#5a0028] transition-all duration-300"
                >
                  Cryptocurrency
                </button>
                {activeSection === "crypto" && (
                  <div className="mt-4 text-center animate-slideIn px-2">
                    <p className="text-sm md:text-lg font-medium leading-snug">
                      Wallet address: <br />
                      USDT/USDC ERC20 & BEP20 to this address
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-2 mt-2">
                      <span className="text-xs md:text-sm lg:text-base font-semibold text-[#720034] break-words max-w-[90%] md:max-w-full">
                        0xcebA4E2f29F53fC47775235094c5483EF864eB95
                      </span>
                      <FaRegCopy
                        className="text-lg md:text-xl cursor-pointer hover:text-[#5a0028] transition-all duration-300"
                        onClick={() =>
                          copyToClipboard(
                            "0xcebA4E2f29F53fC47775235094c5483EF864eB95"
                          )
                        }
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SponsorsSection;
