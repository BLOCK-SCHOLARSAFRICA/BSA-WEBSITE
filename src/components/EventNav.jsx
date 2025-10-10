import React, { useState, useEffect } from "react";
import logo from "../assets/images/conference-logo.png";
import { Menu, X } from "lucide-react";

const EventNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Home", "About", "Speakers", "Contact Us"];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setActiveItem(id);
  };

  return (
    <nav className="fixed w-full top-0 left-0 z-50">
      <div
        className={`max-w-7xl mx-auto px-6 lg:px-8 py-4 transition-colors duration-300 ${
          isScrolled
            ? "bg-black/40 backdrop-blur-md shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={logo} alt="logo" className="h-[258px] w-auto" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`relative px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 group ${
                    activeItem === item
                      ? "text-white bg-white/20 shadow-lg"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <span className="relative z-10">{item}</span>
                  {activeItem === item && (
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse" />
                  )}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              ))}
            </div>
          </div>

          {/* Register Button (Desktop) */}
          <div className="hidden md:block">
            <button
              className="px-8 py-2 rounded-full bg-[#791EEB] text-white font-semibold shadow-lg 
             
             transition-all duration-300 
             hover:bg-[#00DEEF] hover:scale-105 hover:shadow-xl"
            >
              Register
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 transition-colors duration-200"
            >
              <Menu className="w-8 h-8" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Side Drawer */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Background Overlay */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Drawer */}
          <div className="relative ml-auto w-1/2 max-w-xs h-full bg-black/70 backdrop-blur-md border-l border-white/20 p-6 transform transition-transform duration-300 ease-in-out">
            {/* Close button */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-4 right-4 text-gray-300 hover:text-white"
            >
              <X className="w-8 h-8" />
            </button>

            <div className="mt-12 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => {
                   scrollToSection(item);
                    setIsMenuOpen(false);
                  }}
                  className={`relative block w-full text-left px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 group ${
                    activeItem === item
                      ? "text-white bg-white/20 shadow-lg"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <span className="relative z-10">{item}</span>
                  {activeItem === item && (
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse" />
                  )}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              ))}

              {/* Mobile Register Button */}
              <div className="pt-4">
                <button
                  className="w-full px-6 py-3 rounded-full bg-[#791EEB] text-white font-semibold shadow-lg 
                 border-2 border-white 
                 transition-all duration-300 
                 hover:bg-[#e45c05] hover:scale-105 hover:shadow-xl"
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default EventNav;
