import React from "react";


import attendeeIcon from "../../assets/icons/attend-svg.svg";
import countryIon from "../../assets/icons/country-svg.svg";

import schoolIcon from "../../assets/icons/school-svg.svg";
import speakerIcon from "../../assets/icons/speaker-svg.svg"


// "/images/img_vector_white_a700_44x58.svg",


const Statistics = () => {
  const stats = [
    {
      icon: attendeeIcon,
      value: "3000+",
      label: "Attendees (onsite & virtual)",
      iconWidth: "58px",
      iconHeight: "44px",
    },
    {
      icon: schoolIcon,
      value: "200+",
      label: "Schools represented",
      iconWidth: "63px",
      iconHeight: "44px",
    },
    {
      icon: speakerIcon,
      value: "20",
      label: "Speakers & Panelists",
      iconWidth: "63px",
      iconHeight: "44px",
    },
    {
      icon: countryIon,
      value: "7",
      label: "Countries",
      iconWidth: "63px",
      iconHeight: "44px",
    },
  ];

  return (
    <section className="w-full bg-white border-b-4 border-text-white md:mt-[-55px]" >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 md:py-[34px]">
          {/* Statistics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 md:gap-16 lg:gap-[146px] justify-items-center">
            {stats?.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col gap-2 justify-start items-center w-full max-w-[278px]"
              >
                {/* Icon Container */}
                <div className="flex flex-col gap-2 justify-start items-center w-full px-8 sm:px-12 md:px-14">
                  <div className="flex justify-center items-center border-3 border-text-white rounded-[50px] p-6 sm:p-7 md:p-[28px] bg-transparent">
                    <img
                      src={stat?.icon}
                      alt={`${stat?.label} icon`}
                      className="object-contain"
                      style={{
                        width: stat?.iconWidth,
                        height: stat?.iconHeight,
                      }}
                    />
                  </div>

                  {/* Value */}
                  <h3
                    className="text-[25px]  md:text-[30px] font-semibold leading-[48px] sm:leading-[54px] md:leading-[60px] text-center text-[#A306E4]"
                    style={{ fontFamily: "Poppins" }}
                  >
                    {stat?.value}
                  </h3>
                </div>

                {/* Label */}
                <p
                  className="text-lg sm:text-xl font-medium leading-[27px] sm:leading-[30px] text-center text-[#242424]"
                  style={{ fontFamily: "Poppins" }}
                >
                  {stat?.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
