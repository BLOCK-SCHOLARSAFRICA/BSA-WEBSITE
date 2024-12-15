import React, { useState } from "react";
import { Link } from "react-scroll";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/BSA-Logo.png";
import menuIcon from "../assets/menuIcon.png";
import closeIcon from "../assets/closeIcon.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const handleSetActive = (to) => {
    window.history.replaceState(null, "", `/#${to}`);
  };

  const isTeamPage = location.pathname === "/team";

  return (
    <header className="bg-white">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="BSA Logo" className="h-full w-auto" />
        </div>

        {/* Hamburger Menu Icon */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <img
            src={menuOpen ? closeIcon : menuIcon}
            alt="Menu Icon"
            className="h-6 w-6"
          />
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            menuOpen ? "fixed" : "hidden"
          } top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-40 text-white w-80 h-auto z-50 shadow-lg p-6 rounded-lg transition-all duration-300 ease-in-out md:static md:opacity-100 md:translate-x-0 md:translate-y-0 md:flex md:items-center md:space-x-6`}
        >
          <ul className="flex flex-col text-center space-y-4 md:flex-row md:space-y-0 md:space-x-6 text-sm cursor-pointer">
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
              <li key={to} className="py-2 md:py-0">
                {label === "Team" ? (
                  <NavLink
                    to="/team"
                    className="hover:text-[#720034]"
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </NavLink>
                ) : isTeamPage ? (
                  <NavLink
                    to={`/#${to}`}
                    className="hover:text-[#720034]"
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </NavLink>
                ) : (
                  <Link
                    to={to}
                    smooth={true}
                    duration={500}
                    onSetActive={handleSetActive}
                    className={`${
                      label === "Register"
                        ? "bg-[#720034] text-white px-4 py-1 rounded-md hover:bg-[#470020]"
                        : "hover:text-[#720034]"
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Background Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-md z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Header;
