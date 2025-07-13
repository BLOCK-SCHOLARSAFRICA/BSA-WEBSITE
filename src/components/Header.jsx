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
    <header className="bg-white fixed top-0 left-0 right-0 z-50 shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-2 px-6">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src={logo} alt="BSA Logo" className="h-[70px] w-[70px]" />
        </div>

        {/* Mobile menu  */}
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

        {/* Desktop navigation */}
        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center space-x-28">
          <ul className="flex items-center space-x-28 text-sm">
            {menuItems.map(({ to, label }) => (
              <li key={to} className="hover:text-[#720034]">
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `hover:text-[#720034] transition-colors ${
                      isActive
                        ? "text-[#720034] font-semibold border-b-2 border-[#720034] pb-1"
                        : "text-gray-700"
                    }`
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop contact button */}
        <div className="hidden md:flex items-center ml-auto">
          {isHomePage ? (
            <Link
              to="contact-us"
              smooth={true}
              duration={500}
              className="border border-[#720034] text-[#720034] px-4 py-2 rounded-full hover:bg-[#720034] hover:text-white transition-all cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          ) : (
            <span
              onClick={() => handleNavigateToSection("contact-us")}
              className="border border-[#720034] text-[#720034] px-4 py-2 rounded-full hover:bg-[#720034] hover:text-white cursor-pointer transition-all"
            >
              Contact
            </span>
          )}
        </div>
      </div>

      {/* Mobile menu  content */}
      {menuOpen && (
        <>
          {/* Backdrop overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-lg z-40 md:hidden"
            onClick={() => setMenuOpen(false)}
          ></div>

          {/* Mobile menu panel */}
          <div className="fixed top-0 right-0 w-64 h-full bg-white z-50 p-6 flex flex-col space-y-4 shadow-lg transition-transform transform translate-x-0 md:hidden">
          
            <div className="flex justify-end mb-4">
              <button
                onClick={() => setMenuOpen(false)}
                className="focus:outline-none"
              >
                <AiOutlineClose className="h-6 w-6 text-[#720034] hover:text-[#470020] transition-all" />
              </button>
            </div>

            {/* Mobile menu items */}
            {menuItems.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `hover:text-[#470020] cursor-pointer text-lg transition-colors py-2 ${
                    isActive
                      ? "text-[#720034] font-semibold border-l-4 border-[#720034] pl-4"
                      : "text-[#720034]"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}

            {/* Mobile contact button */}
            <div className="pt-4">
              {isHomePage ? (
                <Link
                  to="contact-us"
                  smooth={true}
                  duration={500}
                  className="border border-[#720034] text-[#720034] px-4 py-2 rounded-full hover:bg-[#720034] hover:text-white transition-all cursor-pointer block text-center"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact
                </Link>
              ) : (
                <span
                  onClick={() => handleNavigateToSection("contact-us")}
                  className="border border-[#720034] text-[#720034] px-4 py-2 rounded-full hover:bg-[#720034] hover:text-white cursor-pointer transition-all block text-center"
                >
                  Contact
                </span>
              )}
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;