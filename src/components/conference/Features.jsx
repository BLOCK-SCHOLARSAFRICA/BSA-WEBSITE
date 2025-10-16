import React from "react";

const Features = () => {
  const features = [
    {
      title: "Masterclasses & Disruptive Panels",
      description:
        "Experts insights on Web3, fintech, policy, and digital transformation.",
    },
    {
      title: "Workshops & Masterclasses",
      description:
        "Hands-on learning in tech and digital skills, taught by experienced coaches, with certificates awarded.",
    },
    {
      title: "Startup Showcases",
      description:
        "Featuring innovative startups, digital solutions, and vendor booths.",
    },
    {
      title: "Blockchain Spelling Bee",
      description:
        "A creative side event engaging students in blockchain literacy",
    },
    {
      title: "Networking Sessions",
      description:
        "Connect with government leaders, investors, and innovators.",
    },
    {
      title: "Mentorship Sessions",
      description:
        "Learn from mentors in the tech space as they share stories, challenges, and growth strategies",
    },
    {
      title: "VIP Dinner",
      description:
        "An exclusive evening with mentors and special guests, offering a unique chance to ask questions and build valuable relationships.",
    },
  ];

  return (
    <section className="w-full bg-[] border-b-4 border-text-white">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14">
        <div className="py-12 md:py-16 lg:py-[68px]">
          {/* Content Container */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12">
            {/* Left Section - Title */}
            <div className="w-full lg:w-[24%] lg:mt-11">
              <h2
                className="text-[36px] sm:text-[45px] md:text-[54px] lg:text-[60px] font-medium leading-[54px] sm:leading-[67px] md:leading-[81px] lg:leading-[90px] text-text-white"
                style={{ fontFamily: "Poppins" }}
              >
                Key Features
              </h2>
            </div>

            {/* Right Section - Features Grid */}
            <div className="w-full lg:w-[76%] lg:ml-[198px]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
                {features?.map((feature, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-3 justify-start items-start"
                  >
                    <h3
                      className="text-[20px] sm:text-[21px] md:text-[23px] font-medium leading-[30px] sm:leading-[32px] md:leading-[35px] text-text-white"
                      style={{ fontFamily: "Poppins" }}
                    >
                      {feature?.title}
                    </h3>
                    <p
                      className="text-lg sm:text-xl font-normal leading-[27px] sm:leading-[30px] text-[#ffffffe5] w-full"
                      style={{ fontFamily: "Poppins" }}
                    >
                      {feature?.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
