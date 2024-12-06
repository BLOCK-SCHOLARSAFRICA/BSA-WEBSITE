import React, { useState, useEffect } from "react";
import VisionMission from "./VisionMission";
import Objectives from "./Objectives";
import CoreValues from "./CoreValues";

const AboutSection = () => {
  const fullText =
    "Block-Scholars Africa is a pioneering organization dedicated to revolutionizing education and innovation in Africa through the power of blockchain, Web3, emerging technologies, and artificial intelligence. We aim to create a continent-wide ecosystem of experts, entrepreneurs, and innovators who can harness these technologies to drive sustainable development, economic growth, and social impact."
   const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const words = fullText.split(" ");
    let index = 0;

    const interval = setInterval(() => {
      if (index < words.length) {
        setDisplayedText((prev) => `${prev} ${words[index]}`.trim());
        index++;
      } else {
        clearInterval(interval); // Stop the interval once the full text is displayed
      }
    }, 200); // Adjust typing speed here

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <section id="about-us" className="py-10 px-6 md:px-14 bg-white mt-20">
      <h2 className="text-3xl text-[#720034] font-bold">Who We Are</h2>
      <p className="mt-6 text-[16px]">{displayedText}</p>

      <VisionMission />
      <Objectives />
      <CoreValues />
    </section>
  );
};

export default AboutSection;
