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
    <section id="sponsors" className="py-20 px-6 bg-white">
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
          className="px-6 py-3 mt-10 bg-[#720034] rounded-lg text-white font-semibold hover:bg-[#5a0028]"
        >
          {isSupportVisible ? "Hide Options" : "Get Involved"}
        </button>
      </div>
      {isSupportVisible && (
        <div className="mt-10 bg-[#fcf5f5] text-[#720034] p-20 rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-center gap-10">
            {/* Bank Transfer Section */}
            <div className="flex flex-col items-center w-full md:w-[30%]">
              <button
                onClick={() =>
                  setActiveSection((prev) => (prev === "bank" ? null : "bank"))
                }
                className="px-6 py-3 bg-[#720034] rounded-lg text-white font-semibold hover:bg-[#5a0028]"
              >
                Bank Transfer
              </button>
              {activeSection === "bank" && (
                <div className="mt-5 text-center">
                  <p className="text-lg font-medium">
                    Send money to Block-Scholars Africa LTD <br /> Moneipoint
                    Microfinance Bank
                  </p>
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <span className="text-xl font-semibold text-[#720034]">
                      6566764321
                    </span>
                    <FaRegCopy
                      className="text-xl cursor-pointer hover:text-[#5a0028]"
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
                className="px-6 py-3 bg-[#720034] rounded-lg text-white font-semibold hover:bg-[#5a0028]"
              >
                Cryptocurrency
              </button>
              {activeSection === "crypto" && (
                <div className="mt-5 text-center">
                  <p className="text-lg font-medium">
                    Wallet address: <br /> USDT/USDC ERC20 & BEP20 to this
                    address
                  </p>
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <span className="text-xl font-semibold text-[#720034]">
                      0xcebA4E2f29F53fC47775235094c5483EF864eB95
                    </span>
                    <FaRegCopy
                      className="text-xl cursor-pointer hover:text-[#5a0028]"
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
      )}
    </section>
  );
};

export default SponsorsSection;
