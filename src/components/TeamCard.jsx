import { Linkedin } from "lucide-react";
import React from "react";

const TeamCard = ({ member, index, animation }) => {
  return (
    <div
      key={index}
      data-aos={animation}
      className="bg-white  rounded-t-[40px] hover:shadow-xl transition-all duration-300 hover:scale-100 group"
    >
      {/* Profile Image */}
      <div className="mb-4">
        <div className="w-full h-48 md:h-72">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover rounded-t-[40px]"
          />
        </div>
      </div>

      {/* Member Info */}
      <div className="text-center px-2 sm:px-4 md:py-2 py-5">
        <h3 className="font-semibold text-base sm:text-lg flex items-center justify-center gap-2 text-customBrown mb-2 group-hover:text-customBrown/80 transition-colors duration-300">
          {member.name}
          {member.hasLinkedIn && (
            <a
              href={member.linkedInUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 sm:w-8 h-6 sm:h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200"
            >
              <Linkedin className="w-3 sm:w-4 h-3 sm:h-4 text-white" />
            </a>
          )}
        </h3>
        {member.role && (
          <p className="text-xs sm:text-sm text-customBrown font-medium leading-relaxed mb-2">
            {member.role}
          </p>
        )}
      </div>
    </div>
  );
};

export default TeamCard;
