import React from "react";
import logo from "../assets/BSA-Logo.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import linkedin from "../assets/linkedin.png";
import instagram from "../assets/instagram.png";

const Footer = () => {
  return (
    <footer id="partners" className="bg-[#720034] mt-20 py-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        {/* Logo Section */}
        <div className="mb-6 md:mb-0">
          <img src={logo} alt="BSA Logo" className="h-full w-auto" />
        </div>

        {/* Social Media Section */}
        <div className="text-center">
          <h1 className="text-2xl md:text-4xl text-white font-bold mb-4">
            Follow Us
          </h1>
          <div className="flex flex-row gap-6 justify-center items-center">
            <a
              href="https://www.facebook.com/profile.php?id=100088750029788&mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={facebook}
                alt="Facebook"
                className="w-8 h-8 rounded-lg shadow-md hover:scale-110 transition-transform duration-300"
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
                className="w-8 h-8 rounded-lg shadow-md hover:scale-110 transition-transform duration-300"
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
                className="w-8 h-8 rounded-lg shadow-md hover:scale-110 transition-transform duration-300"
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
                className="w-8 h-8 rounded-lg shadow-md hover:scale-110 transition-transform duration-300"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
