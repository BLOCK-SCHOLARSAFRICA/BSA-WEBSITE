import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../assets/BSA-Logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === "/";

  const menuItems = [
    { to: "/", label: "Home" },
    { to: "/about-us", label: "About" },
    { to: "/programs", label: "Program" },
    { to: "/events", label: "Events" },
    { to: "/block-champions", label: "BLOCKchampions" },
    { to: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  const handleNavigateToSection = (to) => {
    if (!isHomePage) {
      navigate(`/#${to}`);
    }
    setMenuOpen(false);
  };

  return (
    <header className="bg-white relative z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src={logo} alt="BSA Logo" className="h-[100px] w-auto" />
        </div>

        {/* Hamburger Menu Icon */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <AiOutlineClose className="h-8 w-8 text-[#720034] hover:text-[#470020] transition-all" />
          ) : (
            <FiMenu className="h-8 w-8 text-[#720034] hover:text-[#470020] transition-all" />
          )}
        </button>

        {/* Center Nav for desktop */}
        <ul className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center space-x-28 text-sm cursor-pointer">
          {menuItems.map(({ to, label }) => (
            <li key={to} className="hover:text-[#720034]">
              <NavLink
                to={to}
                className="hover:text-[#720034]"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Contact Button */}
        <ul className="hidden md:flex items-center space-x-6 text-sm cursor-pointer ml-auto">
          <li>
            {isHomePage ? (
              <NavLink
                to="contact-us"
                className="border border-[#720034] text-[#720034] px-4 py-2 rounded-full hover:bg-[#720034] hover:text-white transition-all"
                activeClass="font-bold"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </NavLink>
            ) : (
              <span
                onClick={() => handleNavigateToSection("contact-us")}
                className="border border-[#720034] text-[#720034] px-4 py-2 rounded-full hover:bg-[#720034] hover:text-white cursor-pointer transition-all"
              >
                Contact
              </span>
            )}
          </li>
        </ul>
      </div>

      {/* Mobile Overlay + Sidebar */}
      {menuOpen && (
        <>
          {/* Blurred Background */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setMenuOpen(false)}
          ></div>

          {/* Slide-in Menu from Right */}
          <div className="fixed top-0 right-0 w-64 h-full z-50 p-6 flex flex-col space-y-6 shadow-lg transition-transform transform translate-x-0 md:hidden bg-white">
            {menuItems.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setMenuOpen(false)}
                className="text-[#720034] hover:text-white cursor-pointer text-lg"
              >
                {label}
              </NavLink>
            ))}
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
