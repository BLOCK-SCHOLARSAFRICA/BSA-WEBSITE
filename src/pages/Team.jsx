import React from "react";
import team1 from "../assets/team1.png";
import team3 from "../assets/team2.png";
import team9 from "../assets/team3.png";
import team2 from "../assets/team4.png";
import team7 from "../assets/team5.png";
import team4 from "../assets/team6.png";
import team5 from "../assets/team7.png";
import team8 from "../assets/team8.png";
import team6 from "../assets/team9.png";
import team10 from "../assets/team10.png";
import In from "../assets/In.png"; 
import AdvisoryBoard from "../components/advisoryBoard";

const Team = () => {
  const teamMembers = [
    {
      image: team1,
      name: "Raphael Omochor",
      role: "Founder & Board Chairman",
      linkedin: "https://www.linkedin.com/in/raphael-omochor/",
    },
    {
      image: team2,
      name: "Onyenwe Annastessia ",
      role: "Board Secretary/CFO",
      linkedin: "https://www.linkedin.com/in/annastessia-c/",
    },
    {
      image: team3,
      name: "Babatunde Maryam F.",
      role: "Chief Technology Officer (CTO)",
      linkedin: "https://www.linkedin.com/in/maryam-babatunde-659684198/",
    },
    {
      image: team4,
      name: "Favourite Peter",
      role: "Chief Marketing Officer (CMO)",
      linkedin:
        "https://www.linkedin.com/in/favour-peter-1319982b5/?originalSubdomain=ng/",
    },
    {
      image: team5,
      name: "Ezekiel O. Obasanya",
      role: "Chief Product Officer",
      linkedin: "https://www.linkedin.com/in/ezekielobasanya",
    },
    {
      image: team6,
      name: "Osawaru Josephine O.",
      role: "Head Of Creativity & design",
      linkedin: "https://www.linkedin.com/in/osarumen-henry-398773336/",
    },

    {
      image: team7,
      name: "Odion Emmanuel",
      role: "Content Writer",
      linkedin: "https://www.linkedin.com/in/odion-emmanuel-374a52320/",
    },
    {
      image: team8,
      name: "Ufere Stephen U.",
      role: "Graphics Designer",
      linkedin: "https://www.linkedin.com/in/stephen-ugochukwu-008913203/",
    },
    {
      image: team9,
      name: "Olaniran Samad B.",
      role: "Frontend Developer",
      linkedin: "https://www.linkedin.com/in/samad-olaniran-208b57335/",
    },
    {
      image: team10,
      name: "Dickson Goodness.",
      role: "Graphic Designer",
      linkedin: "https://www.linkedin.com/in/goodnessosei/",
    },
  ];

  return (
    <div className="py-20 px-6 bg-white">
      <h1 className="text-4xl text-[#720034] text-center font-bold mb-8">
        Meet The Exceptional Team Members
      </h1>
      <div>
        <h1 className="text-4xl text-[#720034] text-center font-semibold mt-16">
          Executive Board
        </h1>
        <p className="text-center mt-5">
          Meet the Management and Staff of BSA.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={member.image}
              alt={`Team member ${index + 1}`}
              className="w-24 h-24 object-cover rounded-full border-2 border-[#720034]"
            />
            {/* Flex container to align name and LinkedIn icon side by side */}
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
      <AdvisoryBoard />
    </div>
  );
};

export default Team;
