import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaWhatsapp, 
} from "react-icons/fa";
import logo from "../assets/BSA-Logo.png";

const Footer = () => {
  return (
    <footer id="partners" className="bg-[#720034] mt-20 py-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        {/* Logo Section */}
        <div className="mb-6 md:mb-0">
          <img
            src={logo}
            alt="BSA Logo"
            className="h-[100px] w-auto bg-white"
          />
        </div>

        {/* Social Media Section */}
        <div className="text-center">
          <h1 className="text-2xl md:text-4xl text-white font-bold mb-4">
            Follow Us
          </h1>
          <div className="flex flex-row gap-6 justify-center items-center">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=100088750029788&mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#720034] hover:bg-white transition-transform duration-300 transform hover:scale-110"
            >
              <FaFacebookF className="w-6 h-6" />
            </a>
            {/* Twitter */}
            <a
              href="https://x.com/BlockScholars_A?t=v79CvnmGMEalSg_6PRvTbQ&s=09"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#720034] hover:bg-white transition-transform duration-300 transform hover:scale-110"
            >
              <FaTwitter className="w-6 h-6" />
            </a>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/block-scholars-africa/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#720034] hover:bg-white transition-transform duration-300 transform hover:scale-110"
            >
              <FaLinkedinIn className="w-6 h-6" />
            </a>
            {/* Instagram */}
            <a
              href="https://www.instagram.com/blockscholarsafrica/profilecard/?igsh=MXR3c24xMm41b2ZpaQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#720034] hover:bg-white transition-transform duration-300 transform hover:scale-110"
            >
              <FaInstagram className="w-6 h-6" />
            </a>
            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@blockscholarsafrica"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#720034] hover:bg-white transition-transform duration-300 transform hover:scale-110"
            >
              <FaTiktok className="w-6 h-6" />
            </a>
            {/* YouTube */}
            <a
              href="https://www.youtube.com/@Block_Scholars_Africa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#720034] hover:bg-white transition-transform duration-300 transform hover:scale-110"
            >
              <FaYoutube className="w-6 h-6" />
            </a>
            {/* WhatsApp */}
            <a
              href="https://wa.me/8107865121" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#720034] hover:bg-white transition-transform duration-300 transform hover:scale-110"
            >
              <FaWhatsapp className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      <div>
        <hr className="mt-10" />
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-10">
        <p className="text-white text-lg">
          &copy; {new Date().getFullYear()} Block Scholars Africa. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
