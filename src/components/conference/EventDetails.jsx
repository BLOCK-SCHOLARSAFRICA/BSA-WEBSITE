import React from "react";
import Button from "../Ui/Button";
import eventImg1 from "../../assets/images/main-event1.png"




const EventDetails = () => {
  return (
    <section className="min-h-screen bg-black text-white">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14 py-16 md:py-24 lg:py-[180px]">
        <div className="bg-text-white rounded-[24px] p-8 sm:p-12 md:p-16 lg:p-[68px] shadow-lg">
          {/* Section Header */}
          <div className="mb-6 md:mb-8 lg:mb-[24px]">
            <h2
              className="text-[24px] sm:text-[28px] md:text-[30px] lg:text-[32px] font-semibold leading-[36px] sm:leading-[42px] md:leading-[45px] lg:leading-[48px] text-center text-text-primary"
              style={{ fontFamily: "Poppins" }}
            >
              ABOUT THE CONFERENCE
            </h2>
          </div>

          {/* Main Content */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12">
            {/* Text Content */}
            <div className="flex flex-col gap-6 justify-start items-start w-full lg:w-[52%]">
              {/* Introduction Paragraphs */}
              <div className="flex flex-col gap-6 justify-start items-center w-full">
                <p
                  className="text-lg sm:text-xl font-normal leading-[27px] sm:leading-[30px] text-text-primary w-full"
                  style={{ fontFamily: "Poppins" }}
                >
                  The Abia Web3 & Digital Economy Conference (AWDEC 2025) will
                  be a landmark gathering positioning Abia as a hub for
                  blockchain, Web3, fintech, and digital innovation in Africa.
                </p>
                <p
                  className="text-lg sm:text-xl font-normal leading-[27px] sm:leading-[30px] text-text-primary w-full"
                  style={{ fontFamily: "Poppins" }}
                >
                  This one-day event will bring together government leaders,
                  investors, startups, developers, academics, and students to
                  explore how the digital economy can:
                </p>
              </div>

              {/* Key Points List */}
              <div
                className="text-lg sm:text-xl font-normal leading-[27px] sm:leading-[30px] text-text-primary"
                style={{ fontFamily: "Poppins" }}
              >
                <p>Drive inclusive growth</p>
                <p>Create jobs and opportunities</p>
                <p>Foster sustainable development</p>
                <p>Attract global investment</p>
              </div>

              {/* Closing Paragraph */}
              <p
                className="text-lg sm:text-xl font-normal leading-[27px] sm:leading-[30px] text-text-primary w-full"
                style={{ fontFamily: "Poppins" }}
              >
                The conference will be hosted in Aba and streamed live
                worldwide. AWDEC2025 is not just an event - it is the start of a
                recurring movement shaping Africa's digital future.
              </p>
            </div>

            {/* Image */}
            <div className="w-full lg:w-[40%] flex justify-center lg:justify-end">
              <img
                src={eventImg1}
                alt="Conference participants discussing digital innovation"
                className="w-full max-w-[468px] h-auto rounded-[16px] object-cover"
              />
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-8 lg:mt-12">
            <Button text={"Confirm Your Seat"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
