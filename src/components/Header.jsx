import React, { useState } from "react";
import { Link } from "react-scroll";
import { NavLink, useLocation } from "react-router-dom"; // For navigation and location detection
import logo from "../assets/BSA-Logo.png";
import menuIcon from "../assets/menuIcon.png";
import closeIcon from "../assets/closeIcon.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // Get the current location

  const isTeamPage = location.pathname === "/team"; // Check if on the Team page

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
            menuOpen ? "block" : "hidden"
          } md:flex md:items-center md:space-x-6 text-sm`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6">
            {/* Main Page Links */}
            {[
              { to: "home", label: "Home" },
              { to: "about-us", label: "About Us" },
              { to: "events", label: "Events" },
              { to: "contact-us", label: "Contact Us" },
              { to: "partnership", label: "Partnership" },
              { to: "testimonies", label: "Testimonies" },
              { to: "sponsors", label: "Sponsors" },
              { to: "partners", label: "Partners" },
              { to: "faq", label: "FAQ" },
              { to: "register", label: "Register" },
            ].map(({ to, label }) => (
              <li key={to}>
                {/* Conditional Link Rendering */}
                {isTeamPage ? (
                  <NavLink
                    to={`/#${to}`} // Route to the main page with section hash
                    className="hover:text-[#720034]"
                    onClick={() => setMenuOpen(false)} // Close menu after navigation
                  >
                    {label}
                  </NavLink>
                ) : (
                  <Link
                    to={to}
                    smooth={true}
                    duration={500}
                    className={`${
                      label === "Register"
                        ? "bg-[#720034] text-white px-4 py-1 rounded-md hover:bg-[#470020]"
                        : "hover:text-[#720034]"
                    }`}
                    onClick={() => setMenuOpen(false)} // Close menu after navigation
                  >
                    {label}
                  </Link>
                )}
              </li>
            ))}

            {/* Team Page Link */}
            <li>
              <NavLink
                to="/team"
                className="hover:text-[#720034]"
                onClick={() => setMenuOpen(false)} // Close menu after navigation
              >
                Team
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
