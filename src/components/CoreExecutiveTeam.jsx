import React, { useEffect } from "react";
import CountUp from "react-countup";
import team1 from "../assets/team1.png";
import team4 from "../assets/team2.png";
import team5 from "../assets/team6.png";
import team2 from "../assets/team12.png";
import team17 from "../assets/team17.png";
import In from "../assets/In.png";
import AOS from "aos";
import "aos/dist/aos.css";

const CoreExecutiveTeam = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const teamMembers = [
    {
      image: team1,
      name: "Raphael Omochor",
      role: "Executive Board Chairman & CEO",
      linkedin: "https://www.linkedin.com/in/raphael-omochor/",
    },
    {
      image: team2,
      name: "Christopher Enyeribe.",
      role: "Chief Operating Officer(COO)",
      linkedin: "https://www.linkedin.com/in/christopher-enyeribe-483823230/",
    },

    {
      image: team4,
      name: "Babatunde Maryam F.",
      role: "Chief Technology Officer (CTO)",
      linkedin: "https://www.linkedin.com/in/maryam-babatunde-659684198/",
    },
    {
      image: team5,
      name: "Favour Peter",
      role: "Chief Marketing Officer (CMO)",
      linkedin:
        "https://www.linkedin.com/in/favour-peter-1319982b5/?originalSubdomain=ng/",
    },
    {
      image: team17,
      name: "Kabiru Sunkanmi Kabirat",
      role: "Chief Diversity & Inclusion Officer (CDIO)",
      linkedin: "https://www.linkedin.com/in/kabiru-kabirat-437b3b291/",
    },
  ];

  return (
    <div className="py-20 px-6 bg-white">
      <div>
        <h1 className="text-4xl text-[#720034] text-center font-semibold mt-16">
          Core Executive Team
        </h1>
        <p className="text-center mt-5 opacity-0 animate-fadeIn delay-100">
          Our executive team.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center"
            data-aos="fade-up"
          >
            <div className="transform transition-transform duration-300 hover:scale-110">
              <img
                src={member.image}
                alt={`Team member ${index + 1}`}
                className="w-24 h-24 object-cover rounded-full border-2 border-[#720034]"
              />
            </div>
            {/* Flex container to align name and LinkedIn icon side by side */}
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
      {/* <Footer /> */}
    </div>
  );
};

export default CoreExecutiveTeam;
