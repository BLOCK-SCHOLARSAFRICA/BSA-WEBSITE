import React from "react";

const AboutUsSection = () => {

    const joinOptions = [
        {
          title: "Join Our Team",
          description: "Work with us to drive impact and innovation.",
          buttonText: "GET INVOLVE",
          buttonAction: "#",
        },
        {
          title: "Become a Partner",
          description: "Collaborate to expand opportunities in tech.",
          buttonText: "SEND EMAIL",
          buttonAction: "#",
        },
        {
          title: "Join Our Advisory Board",
          description: "Guide and shape the future of blockchain education.",
          buttonText: "SEND EMAIL",
          buttonAction: "#",
        },
        {
          title: "Join Our Community",
          description: "Connect, learn, and grow with like-minded pioneers.",
          buttonText: "JOIN OUR COMMUNITY",
          buttonAction: "#",
        },
        {
            title: "Become a Sponsor",
            description: "Connect, learn, and grow with like-minded pioneers.",
            buttonText: "JOIN OUR COMMUNITY",
            buttonAction: "#"
          }
      ];


  const sponsorshipReasons = [
    "Empower youth with skills",
    "Spark innovation and startup",
    "Drive inclusion through tech",
  ];

  const supportImpact = [
    "Funds training and events",
    "Supports game-changing ideas",
  ];

  return (
    <div className="py-20">
      {/* About Us Section */}
      <section className="px-6 pb-20">
        <div className="text-center mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-[#720034] mb-8">
            Who We Are
          </h3>
          <p className="text-lg text-gray-800 max-w-4xl mx-auto leading-relaxed">
            Block-Scholars Africa is a leading education and innovation platform
            dedicated to equipping young Africans with knowledge and skills
            needed to excel in blockchain, Web3, and emerging technologies
          </p>
          <button className="mt-8 px-8 py-3 bg-[#720034] text-white rounded-full font-semibold hover:bg-[#8B0042] transition-colors duration-300 shadow-lg hover:shadow-xl">
            READ MORE
          </button>
        </div>
      </section>

      {/* How to Become Part of Us Section */}
      <section>
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="w-2 h-2 bg-[#720034] rounded-full mr-2"></div>
            <span className="text-[#720034] font-medium">
              To become part of us
            </span>
            <div className="w-2 h-2 bg-[#720034] rounded-full ml-2"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            How To Become Part of Us
          </h2>
          <p className="text-lg text-gray-800 max-w-3xl mx-auto">
            We welcome the best disruptors and free-minded innovators. Take your
            place in shaping Africa's tech future.
          </p>
        </div>

        {/* Join Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center md:gap-y-20 gap-y-10 gap-x-8 mb-16">
          {joinOptions.map((option, index) => (
            <div
              key={index}
              className={` ${
                index === 4 ? "md:col-span-2 md:max-w-2xl md:mx-auto" : ""
              }`}
            >
              {index === 4 ? (
                // Fifth card: "Become a Sponsor"
                <div className="bg-white rounded-2xl p-6 md:p-10 border-2 border-[#720034] hover:shadow-lg transition-all duration-300 relative">
                  {/* Title positioned at top border */}
                  <div className="absolute -top-[25px] left-1/2 transform -translate-x-1/2">
                    <div className="flex items-center justify-center min-w-max">
                      <h3 className="text-2xl font-medium text-[#242424] bg-white px-4 py-1 whitespace-nowrap">
                        {option.title}
                      </h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-left mb-8 mt-8">
                    <p className="text-lg font-semibold text-gray-800 mb-4">
                      BUILD AFRICA'S TECH FUTURE - Support Today.
                    </p>
                    <p className="text-gray-800 mb-8 max-w-2xl">
                      {option.description}
                    </p>
                  </div>

                  {/* Why Support and Support Impact */}
                  <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mb-8">
                    <div className="text-left">
                      <h4 className="text-xl font-bold text-gray-800 mb-4">
                        Why Support?
                      </h4>
                      <ul className="space-y-3 mb-6">
                        {sponsorshipReasons.map((reason, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="w-2 h-2 bg-[#720034] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-800">{reason}</span>
                          </li>
                        ))}
                      </ul>

                      <h4 className="text-xl font-bold text-gray-800 mb-4">
                        Your Support/Impact?
                      </h4>
                      <ul className="space-y-3 mb-8">
                        {supportImpact.map((impact, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="w-2 h-2 bg-[#720034] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-800">{impact}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Button */}
                  <div className="text-left">
                    <a
                      href={option.buttonAction}
                      className="px-8 py-3 bg-[#720034] text-white rounded-full font-medium text-sm md:text-base hover:bg-[#8B0042] transition-colors duration-300 hover:scale-105 transform shadow-lg"
                    >
                      {option.buttonText}
                    </a>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-xl border-2 border-[#720034] relative p-6 md:p-10">
                  {/* Title positioned at top border */}
                  <div className="absolute -top-[20px] md:-top-[25px] left-1/2 transform -translate-x-1/2">
                    <div className="flex items-center justify-center min-w-max">
                      <h2 className="text-xl md:text-2xl font-normal text-[#242424] bg-white px-4 py-1 whitespace-nowrap">
                        {option.title}
                      </h2>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center mb-16 mt-8">
                    <p className="text-gray-700 text-xl leading-relaxed max-w-2xl mx-auto">
                      {option.description}
                    </p>
                  </div>

                  {/* Button */}
                  <div className="flex justify-center">
                    <a
                      href={option.buttonAction}
                      className="bg-[#720034] hover:bg-[#720034]/80 text-white font-medium py-2 md:py-4 px-6 md:px-12  rounded-full transition-colors duration-200 uppercase tracking-wide text-sm"
                    >
                      {option.buttonText}
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

      </section>
    </div>
  );
};

export default AboutUsSection;
