import React from "react";
import phoneIcon from "../../assets/icons/phone.svg";
import partnerIcon from "../../assets/icons/partner.svg";
import copyrightIcon from "../../assets/icons/copyright.svg";
import conferenImg from "../../assets/images/conference-logo.png";

import facebookIcon from "../../assets/icons/facebook.svg";
import xicon from "../../assets/icons/x.svg";
import tiktok from "../../assets/icons/tiktok.svg";
import telegram from "../../assets/icons/telegram.svg";
import indIcon from "../../assets/icons/ind.svg";
import youtubeIcon from "../../assets/icons/youtube.svg";

const Footer = () => {
  return (
    <footer id="Contact Us" className="w-full bg-black">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14">
        <div className="flex flex-col gap-[46px] justify-start items-center py-8 md:py-12">
          {/* Main Footer Content */}
          <div className="flex flex-col md:flex-row justify-start md:justify-evenly items-start  md w-full gap-8 lg:gap-0 ">
            {/* Left Section - Logo and Event Info */}
            <div className="flex flex-col gap-2 justify-start  items-start w-full lg:w-[32%] md:mt-[-40px] ">
              <div className="flex flex-col justify-start  w-full">
                <img
                  src={conferenImg}
                  alt="ABIA Web3 Conference Logo"
                  className="w-[258px] h-[220px] object-contain ml-[-58px] md:ml-0 "
                />
                <p
                  className="text-lg sm:text-xl font-medium leading-[26px] mdtext-center text-text-white opacity-90 mt-[-18px]"
                  style={{ fontFamily: "Poligon" }}
                >
                  Abia Web3 & digital economy conference 2025
                </p>
              </div>
              <p
                className="text-lg sm:text-xl font-medium leading-[26px] text-center text-text-white opacity-90"
                style={{ fontFamily: "Poligon" }}
              >
                Aba Town hall (Executive chamber)
              </p>
              <div className=" gap-4 items-left  hidden md:flex">
                <img
                  src={facebookIcon}
                  className="object-contain"
                  onClick={() =>
                    window.open(
                      "https://www.facebook.com/share/19uY8DwvcH/",
                      "_blank"
                    )
                  }
                />
                <img
                  src={xicon}
                  className="object-contain"
                  onClick={() =>
                    window.open("https://x.com/abia_web3", "_blank")
                  }
                />
                <img
                  src={tiktok}
                  className="object-contain"
                  onClick={() =>
                    window.open("https://www.tiktok.com/@awdec_", "_blank")
                  }
                />
                <img
                  src={telegram}
                  className="object-contain"
                  onClick={() => window.open("https://t.me/AWDEC25", "_blank")}
                />
                <img
                  src={indIcon}
                  className="object-contain"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/company/abia-web3-digital-economy-conference/",
                      "_blank"
                    )
                  }
                />
              </div>
            </div>

            {/* Right Section - Contact and Thanks */}
            <div className="flex flex-col sm:flex-row justify-between items-start w-full lg:w-[56%] gap-8 sm:gap-4">
              {/* Contact Section */}
              <div className="flex flex-col gap-[14px] justify-start items-start w-full sm:w-[46%]">
                <h3
                  className="text-2xl font-semibold leading-[29px] text-text-white"
                  style={{ fontFamily: "DM Sans" }}
                >
                  Contact
                </h3>
                <div className="flex flex-col gap-[6px] justify-start items-start w-full">
                  {/* Phone Numbers */}
                  <div className="p-[6px]">
                    <a
                      href="tel:+2348032741940"
                      className="flex gap-[6px] justify-center items-center hover:text-secondary-orange transition-colors duration-200"
                    >
                      <img src={phoneIcon} alt="Phone" className="w-3 h-3" />
                      <span
                        className="text-base font-medium leading-[24px] text-text-lightest"
                        style={{ fontFamily: "DM Sans" }}
                      >
                        +2348032741940
                      </span>
                    </a>
                  </div>
                  <div className="p-[6px]">
                    <a
                      href="tel:+2348107865121"
                      className="flex gap-[6px] justify-center items-center hover:text-secondary-orange transition-colors duration-200"
                    >
                      <img src={phoneIcon} alt="Phone" className="w-3 h-3" />
                      <span
                        className="text-base font-medium leading-[24px] text-text-lightest"
                        style={{ fontFamily: "DM Sans" }}
                      >
                        +2348107865121
                      </span>
                    </a>
                  </div>
                  {/* Email */}
                  <div className="p-[6px]">
                    <a
                      href="mailto:partnership@block-scholars.africa"
                      className="flex gap-[6px] justify-center items-start hover:text-secondary-orange transition-colors duration-200"
                    >
                      <img
                        src={partnerIcon}
                        alt="Email"
                        className="w-4 h-3 mt-1"
                      />
                      <span
                        className="text-base font-medium leading-[24px] text-text-lightest"
                        style={{ fontFamily: "DM Sans" }}
                      >
                        partnership@block-scholars.africa
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Thanks Section */}
              <div className=" flex-col gap-[14px] justify-start items-end w-auto hidden md:flex">
                <h3
                  className="text-2xl font-semibold leading-[29px] text-right text-text-white"
                  style={{ fontFamily: "DM Sans" }}
                >
                  With thanks to:
                </h3>
                <p
                  className="text-lg sm:text-xl font-medium leading-[26px] text-center text-text-white opacity-90"
                  style={{ fontFamily: "Poligon" }}
                >
                  Block-Scholars Africa
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-4 items-left ml-[-170px] md:hidden">
            <img
              src={facebookIcon}
              className="object-contain"
              onClick={() =>
                window.open(
                  "https://www.facebook.com/share/19uY8DwvcH/",
                  "_blank"
                )
              }
            />
            <img
              src={xicon}
              className="object-contain"
              onClick={() => window.open("https://x.com/abia_web3", "_blank")}
            />
            <img
              src={tiktok}
              className="object-contain"
              onClick={() =>
                window.open("https://www.tiktok.com/@awdec_", "_blank")
              }
            />
            <img
              src={telegram}
              className="object-contain"
              onClick={() => window.open("https://t.me/AWDEC25", "_blank")}
            />
            <img
              src={indIcon}
              className="object-contain"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/company/abia-web3-digital-economy-conference/",
                  "_blank"
                )
              }
            />
          </div>

          {/* Divider Line */}

          <div className="w-full h-[1px] bg-white"></div>

          {/* Copyright Section */}
          <div className="flex gap-1 justify-center items-center p-1">
            <img src={copyrightIcon} alt="Copyright" className="w-3 h-3" />
            <p
              className="text-base font-medium leading-[24px] text-text-lighter"
              style={{ fontFamily: "DM Sans" }}
            >
              2025 - All Rights Reserved - Abia Web3 & digital economy
              conference
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
