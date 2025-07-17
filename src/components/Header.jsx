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
      <div className="container mx-auto flex items-center justify-between py-2 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <NavLink to={'/'} className="flex-shrink-0">
          <img 
            src={logo} 
            alt="BSA Logo" 
            className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 xl:h-[70px] xl:w-[70px]" 
          />
        </NavLink>

        {/* Mobile menu button */}
        <button
          className="lg:hidden focus:outline-none z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <AiOutlineClose className="h-6 w-6 sm:h-8 sm:w-8 text-[#720034] hover:text-[#470020] transition-all" />
          ) : (
            <FiMenu className="h-6 w-6 sm:h-8 sm:w-8 text-[#720034] hover:text-[#470020] transition-all" />
          )}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden lg:flex items-center justify-center flex-1 mx-8">
          <ul className="flex items-center space-x-6 xl:space-x-8 2xl:space-x-12 text-sm lg:text-base">
            {menuItems.map(({ to, label }) => (
              <li key={to} className="hover:text-[#720034]">
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `hover:text-[#720034] transition-colors whitespace-nowrap ${
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
        <div className="hidden lg:flex items-center">
          {isHomePage ? (
            <Link
              to="contact-us"
              smooth={true}
              duration={500}
              className="border border-[#720034] text-[#720034] px-3 py-1.5 lg:px-4 lg:py-2 xl:px-5 xl:py-2.5 rounded-full hover:bg-[#720034] hover:text-white transition-all cursor-pointer text-sm lg:text-base whitespace-nowrap"
              onClick={() => setMenuOpen(false)}
            >
              Contact Us
            </Link>
          ) : (
            <span
              onClick={() => handleNavigateToSection("contact-us")}
              className="border border-[#720034] text-[#720034] px-3 py-1.5 lg:px-4 lg:py-2 xl:px-5 xl:py-2.5 rounded-full hover:bg-[#720034] hover:text-white cursor-pointer transition-all text-sm lg:text-base whitespace-nowrap"
            >
              Contact Us
            </span>
          )}
        </div>
      </div>

      {/* Mobile menu content */}
      {menuOpen && (
        <>
          {/* Backdrop overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-lg z-40 lg:hidden"
            onClick={() => setMenuOpen(false)}
          ></div>

          {/* Mobile menu panel */}
          <div className="fixed top-0 right-0 w-72 sm:w-80 h-full bg-white z-50 p-4 sm:p-6 flex flex-col space-y-4 shadow-lg transition-transform transform translate-x-0 lg:hidden">
            
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
                  `hover:text-[#470020] cursor-pointer text-base sm:text-lg transition-colors py-2 sm:py-3 ${
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
                  className="border border-[#720034] text-[#720034] px-4 py-2 sm:px-6 sm:py-3 rounded-full hover:bg-[#720034] hover:text-white transition-all cursor-pointer block text-center text-sm sm:text-base"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact Us
                </Link>
              ) : (
                <span
                  onClick={() => handleNavigateToSection("contact-us")}
                  className="border border-[#720034] text-[#720034] px-4 py-2 sm:px-6 sm:py-3 rounded-full hover:bg-[#720034] hover:text-white cursor-pointer transition-all block text-center text-sm sm:text-base"
                >
                  Contact Us
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