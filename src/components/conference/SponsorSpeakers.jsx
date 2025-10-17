import React from "react";

import { useState, useEffect } from "react";

import comm1 from "../../assets/images/partners/velo-logo.png";
import media1 from "../../assets/images/partners/kether-logo.png";
import comm3 from "../../assets/images/partners/theGenesis-logo.png";
import comm4 from "../../assets/images/partners/block-logo.png";
import offi1 from "../../assets/images/partners/teen-logo.PNG";
import comm5 from "../../assets/images/partners/syncthesis-logo.png";
import eco1 from "../../assets/images/partners/ibom.png";
import eco2 from "../../assets/images/partners/eth-logo.png";
import comm2 from "../../assets/images/partners/fem-logo.png";
import media2 from "../../assets/images/partners/coingaba-logo.png";
import offi2 from "../../assets/images/partners/bsa-logo.png";


const communityLogos = [comm1, comm2, comm3, comm4, comm5];

const officialLogo = [offi1,offi2 ];

const ecosystemLogo = [eco1, eco2];

const mediaLogo = [media1, media2];

const SponsorSpeakers = (prop) => {
  const [current, setCurrent] = useState(0);
  const [ecosystem, setEcosystem] = useState(0);
  const [office, setOffice] = useState(0);
  
    const [media, setMedia] = useState(0);

  // Auto-change logo every 3 seconds
  useEffect(() => {
    
    // const ecosystemInt = setInterval(() => {
    //   setEcosystem((prev) => (prev + 1) % officialLogo.length);
    // }, 1000);

    // const intOfficial = setInterval(() => {
    //   setOffice((prev) => (prev + 1) % officialLogo.length);
    // }, 1000);

    // const intMedia = setInterval(() => {
    //   setMedia((prev) => (prev + 1) % mediaLogo.length);
    // }, 1000);


    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % communityLogos.length);
      setMedia((prev) => (prev + 1) % mediaLogo.length);
      setOffice((prev) => (prev + 1) % officialLogo.length);
      setEcosystem((prev) => (prev + 1) % officialLogo.length);
    }, 2000);


    return () => clearInterval(interval);
  }, []);

  console.log(media, current)

  return (
    <section className="bg-white">
      <div className="flex flex-col items-center ">
        {/* community partners */}
        <div
          className="flex flex-col justify-center gap-[70px] px-6 items-center bg-[#407AFB] text-white rounded rounded-3xl w-[340px]
         mx-10  my-10 h-[560px] md:flex-row md:w-5/6 md:h-96 md:justify-between"
        >
          <div className="flex flex-col items-center  gap-6 md:items-start md:pl[200px] md:pl-10 ">
            <p
              className="text-[26px]  font-extrabold md:text-left md:text-[35px] "
              style={{ fontFamily: "Poppins" }}
            >
              {" "}
              Community Partners
            </p>
            <p
              className="text-sm text-[14px] text-center md:w-[300px] md:text-left  md:ml[200px] "
              style={{ fontFamily: "Poppins" }}
            >
              Our community partners play a vital role in driving awareness,
              collaboration, and participation across the digital ecosystem.
              Together, they help connect innovators creators, and young people
              to opportunities within the Web3 and digital economy space.
            </p>
          </div>

          <div
            className="flex items-center justify-center bg-white h-[258px] w-[280px] rounded rounded-3xl mx-auto md:w-[370px] md:h-[300px]"
            data-aos="fade-up"
          >
            {communityLogos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                className={`absolute w-[199px] h-[180px] object-contain transition-opacity duration-1000 md:w-[250px] md:h-[200px] ${
                  index === current ? "opacity-100" : "opacity-0 "
                }`}
              />
            ))}
            {/* <img src={partner1}></img> */}
          </div>
        </div>

        {/* official partners */}
        <div
          className="flex flex-col justify-center gap-[70px] px-6 items-center bg-[#407AFB] text-white rounded rounded-3xl w-[340px]
         mx-10  my-10 h-[560px] md:flex-row md:w-5/6 md:h-96 md:justify-between"
        >
          <div className="flex flex-col items-center  gap-6 md:items-start md:pl[200px] md:pl-10 ">
            <p
              className="text-[26px]  font-extrabold md:text-left md:text-[35px] "
              style={{ fontFamily: "Poppins" }}
            >
              {" "}
              Official Partner
            </p>
            <p
              className="text-sm text-[14px] text-center md:w-[300px] md:text-left  md:ml[200px] "
              style={{ fontFamily: "Poppins" }}
            >
              Teen Girls in Blockchain serves as our official partner for
              AWDEC2025, championing the inclusion and empowerment of young
              women in blockchain, technology, and innovation across Africa
            </p>
          </div>

          <div
            className="flex items-center justify-center bg-white h-[258px] w-[280px] rounded rounded-3xl mx-auto md:w-[370px] md:h-[300px]"
            data-aos="fade-up"
          >
            {officialLogo.map((logo, index) => (
              <img
                key={index}
                src={logo}
                className={`absolute w-[199px] h-[180px] object-contain transition-opacity duration-1000 md:w-[250px] md:h-[200px] ${
                  index === office ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Ecosystem Partners */}
        <div
          className="flex flex-col justify-center gap-[70px] px-6 items-center bg-[#407AFB] text-white rounded rounded-3xl w-[340px]
         mx-10  my-10 h-[560px] md:flex-row md:w-5/6 md:h-96 md:justify-between"
        >
          <div className="flex flex-col items-center  gap-6 md:items-start md:pl[200px] md:pl-10 ">
            <p
              className="text-[26px]  font-extrabold md:text-left md:text-[35px] "
              style={{ fontFamily: "Poppins" }}
            >
              {" "}
              Ecosystem Partners
            </p>
            <p
              className="text-sm text-[14px] text-center md:w-[300px] md:text-left  md:ml[200px] "
              style={{ fontFamily: "Poppins" }}
            >
              Abia Web3 & Digital Economy Conference (AWDEC2025) brings together
              innovators, startups, educators, and policymakers to explore how
              Web3, fintech, and digital innovation are driving growth,
              education, and opportunity across Africa.
            </p>
          </div>

          <div
            className="flex items-center justify-center bg-white h-[258px] w-[280px] rounded rounded-3xl mx-auto md:w-[370px] md:h-[300px]"
            data-aos="fade-up"
          >
            {ecosystemLogo.map((logo, index) => (
              <img
                key={index}
                src={logo}
                className={`absolute w-[199px] h-[180px] object-contain transition-opacity duration-1000 md:w-[250px] md:h-[200px] ${
                  index === ecosystem ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
        </div>
        {/* Ecosystem Partners */}
        <div
          className="flex flex-col justify-center gap-[70px] px-6  items-center bg-[#407AFB] text-white rounded rounded-3xl w-[340px]
         mx-10  my-10 h-[560px] md:flex-row md:w-5/6 md:h-96 md:justify-between"
        >
          <div className="flex flex-col items-center  gap-6 md:items-start md:pl[200px] md:pl-10 ">
            <p
              className="text-[26px]  font-extrabold md:text-left md:text-[35px] "
              style={{ fontFamily: "Poppins" }}
            >
              {" "}
              Media Partners
            </p>
            <p
              className="text-sm text-[14px] text-center md:w-[300px] md:text-left  md:ml[200px] "
              style={{ fontFamily: "Poppins" }}
            >
              Abia Web3 & Digital Economy Conference (AWDEC2025) brings together
              innovators, startups, educators, and policymakers to explore how
              Web3, fintech, and digital innovation are driving growth,
              education, and opportunity across Africa.
            </p>
          </div>

          <div
            className="flex items-center justify-center bg-white h-[258px] w-[280px] rounded rounded-3xl mx-auto md:w-[370px] md:h-[300px]"
            data-aos="fade-up"
          >
            {mediaLogo.map((logo, index) => (
              <img
                key={index}
                src={logo}
                className={`absolute w-[199px] h-[180px] object-contain transition-opacity duration-1000 md:w-[250px] md:h-[200px] ${
                  index === media ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorSpeakers;

/* Frame 1000003195 */
