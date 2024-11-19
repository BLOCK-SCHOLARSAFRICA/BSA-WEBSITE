import React, { useState } from "react";
import { Link } from "react-scroll";
import logo from "../assets/BSA-Logo.png";
import menuIcon from "../assets/menuIcon.png";
import closeIcon from "../assets/closeIcon.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white ">
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
            {[
              { to: "home", label: "Home" },
              { to: "about-us", label: "About Us" },
              { to: "contact-us", label: "Contact Us" },
              { to: "testimonies", label: "Testimonies" },
              { to: "sponsors", label: "Sponsors" },
              { to: "faq", label: "FAQ" },
              { to: "partners", label: "Partners" },
              { to: "register", label: "Register" },
            ].map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  smooth={true}
                  duration={500}
                  className={`${
                    label === "Register"
                      ? "bg-[#720034] text-white px-4 py-1 rounded-md hover:bg-[#470020]"
                      : "hover:text-[#720034]"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}

            {/* <li>
              <link
                to="home"
                smooth={true}
                duration={500}
                className="hover:text-[#720034]"
              >
                Home
              </link>
            </li>
            <li>
              <link
                to="about-us"
                smooth={true}
                duration={500}
                className="hover:text-[#720034]"
              >
                About Us
              </link>
            </li>
            <li>
              <link
                to="contact-us"
                smooth={true}
                duration={500}
                className="hover:text-[#720034]"
              >
                Contact Us
              </link>
            </li>
            <li>
              <link
                to="testimonies"
                smooth={true}
                duration={500}
                className="hover:text-[#720034]"
              >
                Testimonies
              </link>
            </li>
            <li>
              <link
                to="sponsors"
                smooth={true}
                duration={500}
                className="hover:text-[#720034]"
              >
                Sponsors
              </link>
            </li>
            <li>
              <link
                to="faq"
                smooth={true}
                duration={500}
                className="hover:text-[#720034]"
              >
                FAQ
              </link>
            </li>
            <li>
              <link
                to="partners"
                smooth={true}
                duration={500}
                className="hover:text-[#720034]"
              >
                Partners
              </link>
            </li>
            <li>
              <link
                to="register"
                smooth={true}
                duration={500}
                className="bg-[#720034] text-white px-4 py-1  rounded  hover:bg-[#470020]"
              >
                Register
              </link>
            </li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
