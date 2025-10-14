import React from "react";
import speaker1 from "../../assets/images/speaker1.png";

const Speakers = () => {
  // Generate 20 speaker placeholders
  const speakers = Array.from({ length: 4 }, (_, index) => ({
    id: index + 1,
    name: "John Doe",
    title: "Convener",
    organization: "AWDEC",
    // image: index === 0 ?  speaker1: null,
  }));

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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12 lg:mb-[118px]">
          {speakers?.map((speaker) => (
            <div
              key={speaker?.id}
              className="flex flex-col justify-start items-center w-full border-b-2 border-r-2 border-[#939191] p-3 md:p-[14px] hover:shadow-lg transition-shadow duration-200"
            >
              {/* Speaker Image */}
              <div
                className="w-full flex justify-center mb-6 md:mb-8"
                data-aos="fade-right"
              >
                {speaker?.image ? (
                  <img
                    src={speaker?.image}
                    alt={`${speaker?.name} - ${speaker?.title}`}
                    className="w-[200px] sm:w-[240px] md:w-[286px] h-[200px] sm:h-[240px] md:h-[286px] rounded-full object-cover"
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
                  className="text-lg sm:text-xl font-medium leading-[27px] sm:leading-[30px] text-[#242424b2]"
                  style={{ fontFamily: "Poppins" }}
                >
                  {speaker?.title}
                </p>
                <p
                  className="text-lg sm:text-xl font-medium leading-[27px] sm:leading-[30px] text-[#242424b2]"
                  style={{ fontFamily: "Poppins" }}
                >
                  {speaker?.organization}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
