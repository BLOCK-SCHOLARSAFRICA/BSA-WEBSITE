import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { NavLink, useLocation } from "react-router-dom";
import { FiMenu } from "react-icons/fi"; 
import { AiOutlineClose } from "react-icons/ai"; 
import logo from "../assets/BSA-Logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const handleSetActive = (to) => {
    window.history.replaceState(null, "", `/#${to}`);
  };

  const isTeamPage = location.pathname === "/team";

 useEffect(() => {
   if (menuOpen) {
     // Disable scrolling
     document.body.style.overflow = "hidden";
   } else {
     // Enable scrolling
     document.body.style.overflow = "auto";
   }
   // Clean up the effect when component unmounts or menu is closed
   return () => {
     document.body.style.overflow = "auto";
   };
 }, [menuOpen]);

   
   
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
          {/* Close Icon Inside Navigation */}
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
                        ? "bg-[#720034] text-white px-4 py-2 rounded-md hover:bg-[#470020] transition-all"
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
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Header;
