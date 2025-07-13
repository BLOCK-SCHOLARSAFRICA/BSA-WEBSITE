import { Facebook, Linkedin, Youtube, Send, Phone, Mail } from "lucide-react";
import { FaXTwitter, FaWhatsapp } from "react-icons/fa6";
import { SiTiktok } from "react-icons/si";

import logo from "../assets/BSA-Logo.png";

export default function Footer() {
  const socialLinks = [
    { href: "#", icon: Facebook },
    { href: "#", icon: FaXTwitter },
    { href: "#", icon: Linkedin },
    { href: "#", icon: Youtube },
    { href: "#", icon: FaWhatsapp },
    { href: "#", icon: SiTiktok },
    { href: "#", icon: Send },
  ];

  return (
    <footer className="bg-[#222121] text-white py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:justify-between gap-10">
          {/* Logo and About */}
          <div className="md:w-1/2">
            <div className="w-28 h-28 mb-4">
              <img
                src={logo}
                alt="BSA Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-white text-base font-medium leading-relaxed max-w-md">
              Block-Scholars Africa is not just a platform – it's a movement
              empowering young Africans through blockchain, web3, and emerging
              tech.
            </p>

            {/* Socials */}
            <div className="hidden md:flex space-x-4 mt-6 flex-wrap">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={index}
                    href={link.href}
                    className="bg-[#720034] p-2 rounded-full hover:bg-[#720034]/80 transition-colors"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Grid Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-white">
            {/* Pages */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Pages</h3>
              <ul className="space-y-2">
                {["About Us", "Newsletter", "Blog", "FAQs", "Contact"].map(
                  (item, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="hover:text-gray-200 transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Programs */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Programs</h3>
              <ul className="space-y-2">
                {["Innovation Lab", "Blockchain Scholarship", "BSACTP"].map(
                  (item, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="hover:text-gray-200 transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="flex flex-col space-y-3">
                <div className="flex items-center">
                  <Phone size={18} className="mr-3 text-[#720034]" />
                  <span className="text-white">+234 810 786 5121</span>
                </div>
                <div className="flex items-center">
                  <Mail size={18} className="mr-3 text-[#720034]" />
                  <span className="text-white">
                    hello@block-scholars.africa
                  </span>
                </div>
              </div>
            </div>
            {/* Socials Mobile only */}
            <div className="md:hidden flex justify-center space-x-4">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={index}
                    href={link.href}
                    className="bg-[#720034] p-2 rounded-full hover:bg-[#720034]/80 transition-colors"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700"></div>

        {/* Copyright */}
        <div className="text-center text-white text-sm">
          © 2025 - All Rights Reserved - Block-Scholars Africa
        </div>
      </div>
    </footer>
  );
}
