import React, { useEffect } from "react";
import CountUp from "react-countup";
import board1 from "../assets/board1.png";
import board2 from "../assets/board2.png";
import board4 from "../assets/board4.png";
import board5 from "../assets/board5.png";
import board6 from "../assets/board6.png";
import In from "../assets/In.png";
import AOS from "aos";
import "aos/dist/aos.css";

const AdvisoryBoard = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  const boardMembers = [
    {
      image: board1,
      name: "Osinakachi Akuma Kalu",
      role: "Strategic Partnership Advisor ",
      linkedin: "https://www.linkedin.com/in/osinakachi-akuma-kalu/",
    },
    {
      image: board2,
      name: "Fredrick Nonde Jr.",
      role: "Innovation & Technology Advisor ",
      linkedin: "https://www.linkedin.com/in/fredrick-nonde-jr-730b16105/",
    },
    {
      // image: board2,
      // name: "Prof Amando Boncales",
      // role: "Blockchain & WEB3 Advisor ",
      // linkedin: "https://www.linkedin.com/in/",
    },

    {
      image: board4,
      name: "Dr. Tammy Francis",
      role: "Education & Training Advisor ",
      linkedin: "https://www.linkedin.com/in/drtammyfrancis/",
    },
    {
      image: board5,
      name: "Dr. Bethel Nwakaku",
      role: "Community Development Advisor",
      linkedin: "",
    },
    {
      image: board6,
      name: "Dr. Sindhu Bhaskar",
      role: "Economic Development Advisor",
      linkedin: "https://www.linkedin.com/in/dr-sindhu-bhaskar-55a84568/",
    },
  ];

  return (
    <div className="py-20 px-6 bg-white">
      <div>
        <h1 className="text-4xl text-[#720034] text-center font-semibold mt-16 opacity-0 animate-fadeIn">
          Advisory Board
        </h1>
        <p className="text-center mt-5 opacity-0 animate-fadeIn delay-100">
          Our board of Advisors.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {boardMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center opacity-0 animate-fadeInUp delay-200"
          >
            <img
              src={member.image}
              alt={`Team member ${index + 1}`}
              className="w-24 h-24 object-cover rounded-full border-2 border-[#720034] transform transition duration-300 hover:scale-110 hover:rotate-3"
            />
            <div className="flex items-center mt-3">
              <h1 className="text-lg font-semibold">{member.name}</h1>
              {/* LinkedIn Icon */}
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2"
              >
                <img
                  src={In}
                  alt="LinkedIn"
                  className="w-6 h-6 sm:w-4 sm:h-4 lg:w-6 lg:h-6 hover:opacity-80"
                />
              </a>
            </div>
            <p className="text-sm text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdvisoryBoard;
