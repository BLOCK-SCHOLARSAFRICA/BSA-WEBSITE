import React from "react";
import board1 from "../assets/board1.png";
import board2 from "../assets/board2.png";
import board3 from "../assets/board3.png";
import board4 from "../assets/board4.png";
import In from "../assets/In.png"; 
const AdvisoryBoard = () => {
  const boardMembers = [
    {
      image: board1,
      name: "Osinakachi Akum Kalu",
      role: "Strategic Partner Advisor ",
      linkedin: "https://www.linkedin.com/in/osinakachi-akuma-kalu/",
    },
    {
      image: board2,
      name: "Fredrick Nonde Jr.",
      role: "Innovation & Technology Advisor ",
      linkedin: "https://www.linkedin.com/in/fredrick-nonde-jr-730b16105/",
    },
    {
      image: board3,
      name: "Sudhakar Lakshmanaraja",
      role: "Social Impact Advisor ",
      linkedin: "https://www.linkedin.com/in/sudhakarlakshman/",
    },
    {
      image: board4,
      name: "Dr. Tammy Francis",
      role: "Education & Training Advisor ",
      linkedin: "https://www.linkedin.com/in/drtammyfrancis/",
    },
  ];

  return (
    <div className="py-20 px-6 bg-white">
      <div>
        <h1 className="text-4xl text-[#720034] text-center font-semibold mt-16">
          Advisory Board
        </h1>
        <p className="text-center mt-5">Our board of Advisors.</p>
      </div>
      <div className="mt-10   grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {boardMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={member.image}
              alt={`Team member ${index + 1}`}
              className="w-24 h-24 object-cover rounded-full border-2 border-[#720034]"
            />
            <div className="flex items-center mt-3 ">
              <h1 className="text-lg  font-semibold">{member.name}</h1>
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
