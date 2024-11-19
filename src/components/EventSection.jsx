import React from "react";
import quizNight from "../assets/Quiz Night.png";
import techTour from "../assets/Tech tour 1.png";
import weeklyProgram from "../assets/Weekly engagement.png";

const EventSection = () => {
  return (
    <section id="events" className="py-10 px-6 md:px-14 bg-white">
      <h2 className="text-3xl text-[#720034] font-bold mb-6">Events</h2>
      <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
        <img
          src={quizNight}
          alt="Quiz Night"
          className="w-full md:w-1/3 h-auto object-cover rounded-[40px] shadow-md"
        />
        <img
          src={techTour}
          alt="Tech Tour"
          className="w-full md:w-1/3 h-auto object-cover rounded-[40px] shadow-md"
        />
        <img
          src={weeklyProgram}
          alt="Weekly Program"
          className="w-full md:w-1/3 h-auto object-cover rounded-[40px] shadow-md"
        />
      </div>
    </section>
  );
};

export default EventSection;
