import React from "react";
import Button from "../Ui/Button";
import eventImg1 from "../../assets/images/main-event1.png"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";





const EventDetails = () => {
  useEffect(() => {
         AOS.init({ duration: 1000, once: true });
       }, []);
  return (
    <section id="About" className="min-h-screen bg-black text-white">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14 py-16 md:py-24 lg:py-[180px]">
        <div className=" flex flex-col bg-text-white rounded-[24px] p-8 sm:p-12 md:p-16 lg:p-[68px] shadow-lg">
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
              <div
                className="flex flex-col gap-6 justify-start items-center w-full"
                data-aos="fade-left"
              >
                <p
                  className="text-lg sm:text-xl font-normal leading-[27px] sm:leading-[30px] text-text-primary w-full"
                  style={{ fontFamily: "Poppins" }}
                >
                  Abia Web3 & Digital Economy Conference (AWDEC) is one of
                  Africa’s biggest landmark gatherings-uniting voices, ideas,
                  and innovations from across the continent. It positions Abia
                  State, Nigeria as a central hub for blockchain, Web3, fintech,
                  and digital transformation, bringing together visionaries who
                  are shaping Africa’s tech-driven future. This one-day
                  conference will bring together delegates from over five
                  countries, including government leaders, tech founders,
                  investors, startups, developers, students, educators, and
                  young innovators, to explore how the digital economy can drive
                  inclusive growth, create new opportunities, and power Africa’s
                  sustainable development. Through keynotes, exhibitions, panel
                  discussions, fireside chat, workshops, and networking
                  sessions, participants will engage in meaningful conversations
                  and collaborations that inspire progress and long-term impact.
                  Hosted in Aba, Abia State, Nigeria, and streamed live
                  worldwide, AWDEC is not just an event-it’s a continental
                  movement driving innovation, partnership, and transformation.
                  The digital future of Africa starts here-in Abia.
                </p>
              </div>

              {/* Closing Paragraph */}
              {/* <p
                className="text-lg sm:text-xl font-normal leading-[27px] sm:leading-[30px] text-text-primary w-full"
                style={{ fontFamily: "Poppins" }}
              >
                The conference will be hosted in Aba and streamed live
                worldwide. AWDEC2025 is not just an event - it is the start of a
                recurring movement shaping Africa's digital future.
              </p> */}
            </div>

            {/* Image */}
            <div className="w-full lg:w-[40%] flex justify-center lg:justify-end">
              <img
                src={eventImg1}
                alt="Conference participants discussing digital innovation"
                className="w-full max-w-[468px] h-auto rounded-[16px] object-cover"
                data-aos="fade-up"
              />
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-8 lg:mt-12 text-center md:text-left">
            <Button text={"Confirm Your Seat"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
