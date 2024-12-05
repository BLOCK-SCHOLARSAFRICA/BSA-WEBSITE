import React from "react";
import CountUp from "react-countup";

const Community = () => {
  const stats = [
    { label: "Our Reach So Far", value: null, isHeader: true },
    { label: "Blockchain Cohorts", value: 1 },
    { label: "Community Members", value: 4000 },
    { label: "Scholarships Awarded", value: 200 },
    { label: "African Countries", value: 4 },
  ];

  return (
    <div className="flex flex-col items-center justify-center py-20 px-6 bg-[#720034]">
      {/* Stats Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20 w-full max-w-4xl">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`flex flex-col items-center text-center space-y-2 ${
              stat.isHeader
                ? "md:w-full md:flex-row md:justify-start md:items-center md:space-y-0 md:gap-4"
                : ""
            }`}
          >
            {stat.isHeader ? (
              <>
                <h1 className="text-3xl md:text-4xl font-bold text-white">
                  {stat.label}
                </h1>
                <div className="w-1 h-20 bg-white"></div>
              </>
            ) : (
              <>
                <p className="text-4xl font-extrabold text-white flex items-center">
                  <CountUp end={stat.value} duration={2} />
                  {stat.value !== 1 && <span className="text-xl ml-2">+</span>}
                </p>
                <p className="text-lg text-white">{stat.label}</p>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;
