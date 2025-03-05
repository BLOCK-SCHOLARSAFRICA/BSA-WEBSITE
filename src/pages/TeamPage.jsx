import React, { useEffect } from "react";
import CountUp from "react-countup";
import team7 from "../assets/team3.png";
import team9 from "../assets/team11.png";
import team11 from "../assets/team7.png";
import team6 from "../assets/team8.png";
import team10 from "../assets/team9.png";
import team1 from "../assets/team10.png";
import team5 from "../assets/team14.png";
import team8 from "../assets/team16.png";
import In from "../assets/In.png";
import BoardOfDirectors from "../components/BoardOfDirectors";
import AdvisoryBoard from "../components/advisoryBoard";
import CoreExecutiveTeam from "../components/CoreExecutiveTeam";
import AOS from "aos";
import "aos/dist/aos.css";

const Team = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const teamMembers = [
    {
      image: team1,
      name: "Dickson Goodness.",
      role: "Executive Secretary Graphic Designer",
      linkedin: "https://www.linkedin.com/in/goodnessosei/",
    },
    // {
    //   image: team2,
    //   name: "Oluwatosin Adesoro A.",
    //   role: "UI/UX Mobile App Designer",
    //   linkedin: "https://www.linkedin.com/in/goodnessosei/",
    // },
    // {
    //   image: team3,
    //   name: "Timothy O. Olaniyan.",
    //   role: "Content/Copywriter",
    //   linkedin: "https://www.linkedin.com/in/goodnessosei/",
    // },
    // {
    //   image: team4,
    //   name: "Suleimon Attahiru.",
    //   role: "Graphic Designer",
    //   linkedin: "https://www.linkedin.com/in/goodnessosei/",
    // },
    {
      image: team5,
      name: "Koffi Elom Josué T.",
      role: "Community manager Francophone Countries ",
      linkedin:
        "https://www.linkedin.com/in/koffi-elom-josu%C3%A9-tonougba-915554158/",
    },
    {
      image: team6,
      name: "Ufere Stephen U.",
      role: "Graphics Designer",
      linkedin: "https://www.linkedin.com/in/stephen-ugochukwu-008913203/",
    },
    {
      image: team7,
      name: "Olaniran Samad B.",
      role: "Frontend Developer",
      linkedin: "https://www.linkedin.com/in/samad-olaniran-208b57335/",
    },
    {
      image: team8,
      name: "ETCHE Tine Antonio",
      role: "Partnership manager Francophone Countries",
      linkedin: "https://www.linkedin.com/in/tine-antonio-etche-a017a5195/",
    },
    {
      image: team9,
      name: "Benefactor Emmanuel C.",
      role: "Chief Information Officer (CIO)",
      linkedin: "https://www.linkedin.com/in/?/",
    },
    {
      image: team10,
      name: "Osawaru Josephine O.",
      role: "Head Of Creativity & design",
      linkedin: "https://www.linkedin.com/in/osawaru-josephine-398773336/",
    },
    {
      image: team11,
      name: "Ezekiel O. Obasanya",
      role: "UI/UX Mobile App Designer",
      linkedin: "https://www.linkedin.com/in/ezekielobasanya",
    },
  ];

  return (
    <div className="py-20 px-6 bg-white">
      <h1 className="text-4xl text-[#720034] text-center font-bold mb-8">
        Meet The Exceptional Team Members
      </h1>
      <BoardOfDirectors />
      <AdvisoryBoard />
      <CoreExecutiveTeam />

      <div>
        <h1 className="text-4xl text-[#720034] text-center font-semibold mt-16">
          Support & Staff Team
        </h1>
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

export default Team;
