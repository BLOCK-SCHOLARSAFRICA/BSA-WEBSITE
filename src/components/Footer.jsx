import React from "react";
import logo from "../assets/BSA-Logo.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import linkedin from "../assets/linkedin.png";
import instagram from "../assets/instagram.png";

const Footer = () => {
  return (
    <footer id="partners" className="px-6 bg-[#720034] mt-20">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="BSA Logo" className="h-full w-auto" />
        </div>

        <div className="text-center mb-10 bg-[#720034] py-5 w-full">
          <h1 className="text-2xl md:text-4xl text-white font-bold mb-2">
            Follow Us
          </h1>
          <div className="flex flex-col md:flex-row gap-6 items-center justify-center mt-10">
            <a
              href="https://www.facebook.com/profile.php?id=100088750029788&mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={facebook}
                alt="Facebook"
                className="w-8 h-auto object-contain rounded-[10px] shadow-md hover:scale-110 transition-transform duration-300"
              />
            </a>
            <a
              href="https://x.com/BlockScholars_A?t=v79CvnmGMEalSg_6PRvTbQ&s=09"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={twitter}
                alt="Twitter"
                className="w-8 h-auto object-contain rounded-[10px] shadow-md hover:scale-110 transition-transform duration-300"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/block-scholars-africa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkedin}
                alt="LinkedIn"
                className="w-8 h-auto object-contain rounded-[10px] shadow-md hover:scale-110 transition-transform duration-300"
              />
            </a>
            <a
              href="https://www.instagram.com/blockscholarsafrica/profilecard/?igsh=MXR3c24xMm41b2ZpaQ=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={instagram}
                alt="Instagram"
                className="w-8 h-auto object-contain rounded-[10px] shadow-md hover:scale-110 transition-transform duration-300"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
