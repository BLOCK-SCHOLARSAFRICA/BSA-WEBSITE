import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import logo from "../assets/BSA-Logo.png";

const Footer = () => {
  return (

            <a
              href="https://www.facebook.com/profile.php?id=100088750029788&mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="hover:text-[#720034]" />
            </a>
            <a
              href="https://x.com/BlockScholars_A?t=v79CvnmGMEalSg_6PRvTbQ&s=09"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="hover:text-[#720034]" />
            </a>
            <a
              href="https://www.linkedin.com/company/block-scholars-africa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="hover:text-[#720034]" />
            </a>
            <a
              href="https://www.instagram.com/blockscholarsafrica/profilecard/?igsh=MXR3c24xMm41b2ZpaQ=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="hover:text-[#720034]" />
            </a>
            <a
              href="https://www.tiktok.com/@blockscholarsafrica"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok className="hover:text-[#720034]" />
            </a>
            <a
              href="https://www.youtube.com/@Block_Scholars_Africa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="hover:text-[#720034]" />
            </a>
            <a
              href="https://wa.me/2348107865121"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="hover:text-[#720034]" />
            </a>
          </div>
        </div>

        {/* Pages */}
        <div>
          <h4 className="font-semibold mb-4 text-white">Pages</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="about-us" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#newsletter" className="hover:text-white">
                Newsletter
              </a>
            </li>
            <li>
              <a href="#blog" className="hover:text-white">
                Blog
              </a>
            </li>
            <li>
              <a href="#faqs" className="hover:text-white">
                FAQs
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Programs */}
        <div>
          <h4 className="font-semibold mb-4 text-white">Programs</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="#" className="hover:text-white">
                Innovation Lab
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Blockchain Scholarship
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                BSACTP
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-4 text-white">Contact</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-center gap-2">
              <FaPhone /> +2348107865121
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope /> hello@block-scholars.africa
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-t border-gray-600 mt-10" />

      {/* Copyright */}
      <div className="text-center py-4 text-sm text-gray-400">
        &copy; {new Date().getFullYear()} – All Rights Reserved – Block-Scholars
        Africa
      </div>
    </footer>
  );
};

export default Footer;