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
            menuOpen ? "block" : "hidden"
          } md:flex md:items-center md:space-x-6 text-sm cursor-pointer`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6">
            {[
              // Define links in the desired order
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
              <li key={to}>
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
    </header>
  );
};

export default Header;
