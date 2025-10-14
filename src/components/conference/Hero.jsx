import React from "react";
import abiaImg from "../../assets/abia.png";
import { Calendar, Clock, MapPin } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

  const reserveLink = () => {
    // window.location.href ="https://luma.com/tdrxynqv"
    window.open("https://luma.com/tdrxynqv", "_blank");
}
  



const HeroSection = () => {
    useEffect(() => {
       AOS.init({ duration: 1000, once: true });
     }, []);
  return (
    <section
      id="Home"
      className="w-full bg-[#0c1725] relative flex items-center justify-center min-h-screen md:h-screen pt-8 "
      style={{
        fontFamily: "Poppins",
        backgroundImage: `url(${abiaImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[#191919bf]"></div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14 flex flex-col items-center justify-center text-center gap-6 md:gap-2">
        {/* Main Title and Hashtag */}
        <div
          className="flex flex-col gap-2 md:gap-3 items-center w-full max-w-[726px] md:mt-8 "
          data-aos="fade-left"
        >
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-semibold text-white leading-tight">
              ABIA <span className="text-[#791EEB]">WEB3 & </span>DIGITAL
            </h1>
            <h2 className="text-4xl md:text-6xl font-semibold text-white">
              ECONOMY Conference
            </h2>
          </div>
          <div className="text-2xl md:text-4xl font-medium text-[#00DEEF]">
            #AWDEC2025
          </div>
        </div>

        {/* Event Details */}
        <div
          className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-8 justify-center items-center mt-8"
          data-aos="fade-up"
        >
          <div className="flex gap-2 justify-center items-center p-2">
            <Calendar className="w-6 h-6  text-[#00DEEF]" />
            <span
              className="text-base sm:text-lg md:text-lg font-medium text-text-white"
              style={{ fontFamily: "Poppins" }}
            >
              November 27, 2025
            </span>
            <div className="flex gap-2 justify-center items-center p-2">
              <Clock className="w-6 h-6 text-[#00DEEF]" />
              <span
                className="text-base sm:text-lg  font-medium text-text-white"
                style={{ fontFamily: "Poppins" }}
              >
                9 am WAT
              </span>
            </div>
          </div>

          <div className="flex  justify-center items-center gap-2 text-center">
            <MapPin className="w-6 h-6 text-[#00DEEF]" />
            <span
              className="text-base text-sm  md:text-lg font-medium text-text-white"
              style={{ fontFamily: "Poppins" }}
            >
              ABA TOWN HALL (EXECUTIVE CHAMBER)
            </span>
          </div>
        </div>

        {/* Quote */}
        {/* Quote */}
        <div className="max-w-3xl mx-auto">
          <blockquote className="text-lg md:text-2xl text-white/90 italic leading-relaxed font-medium mt-8">
            "Africa is shaping the future of digital innovation, driving
            solutions that leapfrog growth and development"
          </blockquote>
        </div>

        {/* Description */}
        <p
          className="text-sm sm:text-base md:text-lg text-[#ffffffe5] max-w-3xl leading-relaxed mt-8"
          style={{ fontFamily: "Poppins" }}
        >
          Be part of the conversation at AWDEC 2025 — a one-day conference on
          collaboration, innovation, and opportunities in Web3 and the digital
          economy.
        </p>

        {/* CTA Button */}
        <div className="mt-8">
          <button
            onClick={() => window.open("https://luma.com/tdrxynqv", "_blank")}
            className="px-10 py-3 rounded-full bg-[#791EEB] text-white font-semibold shadow-lg hover:bg-[#00DEEF] transition-all duration-300"
            data-aos="zoom-in"
          >
            Reserve a seat
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
