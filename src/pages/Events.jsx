import React from "react";
import { Plane } from "lucide-react";
import banner from "../assets/abiaEvent.png";

const Events = () => {
  return (
    <section className="py-20">
      <div className="w-fit p-6">
        {/* Main Banner */}
        <div>
          <img src={banner} alt="banner" />
        </div>

        {/* Event Details */}
        <div className="mt-2 bg-white rounded-lg shadow-lg p-4">
          <h3 className="text-lg font-semibold text-[#242424] mb-2">
            Web3 & Digital Economy
          </h3>
          <p className="text-[#242424] text-sm mb-2">Nov, 2025</p>
          <p className="text-[#242424] text-sm mb-2">Venue</p>

          <div className="flex items-center justify-center">
            <button className="bg-customBrown text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl">
              Become a volunteer
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
