import React from "react";

import {useState, useEffect} from "react"


import comm1 from "../../assets/images/partners/velo-logo.png";
import partner1 from "../../assets/images/partners/kether-logo.png";
import comm3 from "../../assets/images/partners/theGenesis-logo.png";
import comm4 from "../../assets/images/partners/block-logo.png";
import partner4 from "../../assets/images/partners/teen-logo.PNG";
import comm5 from "../../assets/images/partners/syncthesis-logo.png";
import partner6 from "../../assets/images/partners/ibom.png";
import partner7 from "../../assets/images/partners/velo-logo.png";
import comm2 from "../../assets/images/partners/fem-logo.png";

const communityLogos = [
    comm1,
    comm2,
    comm3,
    comm4
    
]

const SponsorSpeakers = (prop) => {
    const [current, setCurrent] = useState(0);

  // Auto-change logo every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % communityLogos.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white">
      <div className="flex flex-col items-center ">
        {/* official partners */}
        <div
          className="flex flex-col justify-center gap-[70px] items-center bg-[#407AFB] text-white rounded rounded-3xl w-[340px]
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

          <div className="flex items-center justify-center bg-white h-[258px] w-[280px] rounded rounded-3xl mx-auto md:w-[370px] md:h-[300px]">
            {communityLogos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                className={`absolute w-[199px] h-[180px] object-contain transition-opacity duration-1000 md:w-[250px] md:h-[200px] ${
                  index === current ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
            {/* <img src={partner1}></img> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorSpeakers;

/* Frame 1000003195 */
