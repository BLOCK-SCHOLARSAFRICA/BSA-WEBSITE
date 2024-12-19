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

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  const handleNavigateToSection = (to) => {
    if (!isHomePage) {
      // Navigate to the home page with hash
      navigate(`/#${to}`);
    }
    setMenuOpen(false);
  };

  return (
    <header className="bg-white">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center">
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

        {/* Navigation Links */}
        <nav
          className={`${
            menuOpen
              ? "fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 text-white z-50 flex justify-center items-center"
              : "hidden"
          } md:flex md:items-center md:space-x-6`}
        >
          <button
            className="absolute top-6 right-6 text-white text-3xl md:hidden focus:outline-none"
            onClick={() => setMenuOpen(false)}
          >
            <AiOutlineClose />
          </button>

          {/* Menu Items */}
          <ul className="flex flex-col text-center space-y-6 md:flex-row md:space-y-0 md:space-x-6 text-sm cursor-pointer">
            {[
              { to: "home", label: "Home" },
              { to: "about-us", label: "About Us" },
              { to: "events", label: "Events" },
              { to: "contact-us", label: "Contact Us" },
              { to: "partnership", label: "Partnership" },
              { to: "testimonies", label: "Testimonies" },
              { to: "sponsors", label: "Sponsors" },
              { to: "faq", label: "FAQ" },
              { to: "team", label: "Team" },
              { to: "register", label: "Register" },
            ].map(({ to, label }) => (
              <li
                key={to}
                className={`py-2 md:py-0 ${
                  label === "Register"
                    ? "bg-[#720034] text-white rounded-md px-6  "
                    : ""
                }`}
              >
                {label === "Team" || label === "Register" ? (
                  <NavLink
                    to={`/${to}`}
                    className={`hover:text-[#720034] ${
                      label === "Register" ? "text-white hover:text-white" : ""
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </NavLink>
                ) : isHomePage ? (
                  <Link
                    to={to}
                    smooth={true}
                    duration={500}
                    className="hover:text-[#720034]"
                    activeClass="font-bold"
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </Link>
                ) : (
                  <span
                    onClick={() => handleNavigateToSection(to)}
                    className="hover:text-[#720034] cursor-pointer"
                  >
                    {label}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Header;
