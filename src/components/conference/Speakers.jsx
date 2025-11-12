import React from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import lucky from "../../assets/images/speakers/lucky.jfif";

import franklin from "../../assets/images/speakers/franklin.jfif";

import Kingsley from "../../assets/images/speakers/kingsley.jfif";

import rume from "../../assets/images/speakers/rume.jfif";
import raph from "../../assets/images/speakers/raph.jfif";
import emma from "../../assets/images/speakers/emma.jfif";
import ekene from "../../assets/images/speakers/ekene.jfif";
import ibekwe from "../../assets/images/speakers/ibekwe.jfif";
import chukwu from "../../assets/images/speakers/chukwu.jfif";
import grace from "../../assets/images/speakers/grace.jfif";
import john from "../../assets/images/speakers/john.jfif";
import joshua from "../../assets/images/speakers/joshua.jfif";
import mbakwe from "../../assets/images/speakers/mbakwe.jfif";

import ebere from "../../assets/images/speakers/ebere.jfif";
import chidi from "../../assets/images/speakers/chidi.jfif";



const Speakers = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  // Generate 20 speaker placeholders
  // const speakers = Array.from({ length: 2 }, (_, index) => ({
  //   id: index + 1,
  //   name: "Lucky Uwakwe",
  //   title: " Cofounder Dexpay & CEO of SaBipay",
  //   organization:
  //     "Chairman,  BICCoN ",
  //   // image: index === 0 ?  speaker1: null,
  // }));

  const speakers = [
    {
      id: 1,
      name: "Raphael Omochor",
      title: "Convener AWDEC2025",

      // organization:
      //   "Chairman Blockchain Industry Coordinating Committee of Nigeria (BICCoN)",
      image: raph,
      link: "https://www.linkedin.com/in/raphael-omochor",
    },

    {
      id: 2,
      name: "Ekenekamchukwu Ezeala",
      title: "Founder  Teen Girls in Blockchain",

      // organization:
      //   "Chairman Blockchain Industry Coordinating Committee of Nigeria (BICCoN)",
      image: ekene,
      link: "https://www.linkedin.com/in/ekenekamchukwu-ezeala-6710b9274",
    },

    {
      id: 3,
      name: "HON. GODSLIGHT C. MBAKWE",
      title: "YOUTH ADVOCATE/ PRESIDENT ESEBE JNR FOUNDATION",

      // organization:
      //   "Chairman Blockchain Industry Coordinating Committee of Nigeria (BICCoN)",
      image: mbakwe,
      link: "https://www.linkedin.com/in/godslight-c-mbakwe-b37864395",
    },

    {
      id: 4,
      name: "Comr. Onyebuchi Chukwu",
      title: "SSA Youth Development Abia State",

      // organization:
      //   "Chairman Blockchain Industry Coordinating Committee of Nigeria (BICCoN)",
      image: chukwu,
      link: "#",
    },

    {
      id: 5,
      name: "Lucky Uwakwe",
      title: " Cofounder Dexpay & CEO  SaBipay",
      organization: "Chairman, BICCoN",
      image: lucky,
      link: "https://www.linkedin.com/in/lucky-uwakwe-a66949b7",
    },

    {
      id: 6,
      name: "Kingsley Ekwuruke",
      title:
        "Founder Network Of Blockchain Solutions Advocates Association(NOBSAA)",
      // organization:
      //   "Founder Network Of Blockchain Solutions Advocates Association(NOBSAA)",
      image: Kingsley,
      link: "https://www.linkedin.com/in/kingsley-ekwuruke-85392a109",
    },

    {
      id: 7,
      name: "Franklin Peters",
      title: "Founder & CEO  Boundlesspay",
      // organization:
      //   "Chairman Blockchain Industry Coordinating Committee of Nigeria (BICCoN)",
      image: franklin,
      link: "https://www.linkedin.com/in/franklin-peters-fims-b5452795",
    },

    // {
    //   id: 8,
    //   name: "Onyedikachi John ",
    //   title: "Founder & CEO iTele Media",

    //   image: john,
    //   link: "https://www.linkedin.com/in/onyedikachi-john-0a8aa0328",
    // },

    {
      id: 9,
      name: "Rume Ophi",
      title:
        "Foremost Crypto Market Analyst. Convener Decentralized Nigeria Conference ",

      // organization:
      //   "Chairman Blockchain Industry Coordinating Committee of Nigeria (BICCoN)",
      image: rume,
      link: "https://www.linkedin.com/in/rume-ophi-252a3aa4",
    },

    {
      id: 10,
      name: "Ibekwe Onyedikachi",
      title: "Lead Ambassador Lambatoken. Panelist ",

      // organization:
      //   "Chairman Blockchain Industry Coordinating Committee of Nigeria (BICCoN)",
      image: ibekwe,
      link: "https://www.linkedin.com/in/dikachi-ibekwe-b3b918161",
    },

    {
      id: 11,
      name: "Dr. Emmanuel Elchijo Joseph",
      title: "Broadcaster/ Youth Advocate",

      // organization:
      //   "Chairman Blockchain Industry Coordinating Committee of Nigeria (BICCoN)",
      image: emma,
      link: "https://www.linkedin.com/in/emmanuelelchijo",
    },

    {
      id: 12,
      name: "Joshua Ehizibue Mo’jeezy",
      title: "Founder & CEO Streamlivr. Panelistt  ",
      image: joshua,
      link: "https://www.linkedin.com/in/joshua-ehizibue-cco-4b604a150",
    },

    {
      id: 13,
      name: "Ebere Chiemela ",
      title: "Founder TechRookies & Convener, Edtech Xperience ",
      image: ebere,
      link: "https://www.linkedin.com/in/ebere-chiemela-199893a7",
    },

    {
      id: 14,
      name: "Vindicated Chidi",
      title: "Global Ambassador Asset Chain and Founder of Shalom Movement ",
      image: chidi,
      link: "https://www.linkedin.com/in/vindicated-chidi-ab5175165",
    },
  ];

  return (
    <section id="Speakers" className="w-full bg-background-primary">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14 py-16 md:py-24 lg:py-[94px]">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-[90px]">
          <h2
            className="text-[24px] sm:text-[26px] md:text-[28px] lg:text-[30px] font-medium leading-[36px] sm:leading-[39px] md:leading-[42px] lg:leading-[45px] text-text-primary"
            style={{ fontFamily: "Poppins" }}
          >
            Our Speakers
          </h2>
        </div>

        {/* Speakers Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12 lg:mb-[118px]"
          data-aos="fade-right"
        >
          {speakers?.map((speaker) => (
            <div
              key={speaker?.id}
              className="flex flex-col justify-start items-center w-full border-b-2 border-r-2 border-[#939191] p-3 md:p-[14px] hover:shadow-lg transition-shadow duration-200"
              data-aos="fade-up"
            >
              {/* Speaker Image */}
              <div className="w-full flex justify-center mb-6 md:mb-8">
                {speaker?.image ? (
                  <img
                    src={speaker?.image}
                    alt={`${speaker?.name} - ${speaker?.title}`}
                    className="w-[240px] sm:w-[240px] md:w-[286px] h-[240px] sm:h-[240px] md:h-[286px] rounded-full object-cover object-top "
                  />
                ) : (
                  <div className="w-[200px] sm:w-[240px] md:w-[286px] h-[200px] sm:h-[240px] md:h-[286px] rounded-full bg-[#ccc4c4]"></div>
                )}
              </div>

              {/* Speaker Info */}
              <div className="text-center space-y-2">
                <h3
                  className="text-lg sm:text-xl font-medium leading-[27px] sm:leading-[30px] text-text-primary"
                  style={{ fontFamily: "Poppins" }}
                >
                  {speaker?.name}
                </h3>
                <p
                  className="text-sm sm:text-sm font- leading-[27px] sm:leading-[30px] text-[#242424b2]"
                  style={{ fontFamily: "Poppins" }}
                >
                  {speaker?.title}
                </p>
                <p
                  className="text-sm sm:text-sm font-medi leading-[27px] sm:leading-[30px] text-[#242424b2]"
                  style={{ fontFamily: "Poppins" }}
                >
                  {speaker?.organization}
                </p>
              </div>
              <button
                onClick={() => window.open(`${speaker.link}`, "_blank")}
                class="flex items-center gap-2 mt-10 bg-[#791EEB] hover:bg-[#6a1bd3] text-white px-4 py-2 rounded-sm font-medium transition duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  class="w-5 h-5"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.473 0 16 .513 16 1.146v13.708c0 .633-.527 1.146-1.175 1.146H1.175A1.163 1.163 0 0 1 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.214c.837 0 1.358-.554 1.358-1.248-.015-.708-.52-1.248-1.342-1.248-.822 0-1.357.54-1.357 1.248 0 .694.52 1.248 1.326 1.248h.015zM13.458 13.394v-3.996c0-2.137-1.14-3.128-2.662-3.128-1.225 0-1.774.676-2.082 1.15v-0.985H6.313c.03.647 0 7.225 0 7.225h2.401v-4.035c0-.216.015-.431.08-.586.174-.431.57-.878 1.235-.878.87 0 1.22.662 1.22 1.634v3.865h2.209z" />
                </svg>
                Connect
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
