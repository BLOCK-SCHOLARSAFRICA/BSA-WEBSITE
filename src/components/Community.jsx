import React, { useEffect, useState } from "react";
import logo from "../assets/BSA-Logo.png";

const Community = () => {
  const [isVisible, setIsVisible] = useState(false);

  const stats = [
    { label: "Blockchain Cohorts", value: 2 },
    { label: "African Countries", value: 6 },
    { label: "Community Members", value: 7000 },
    { label: "Scholarships Awarded", value: 600 },
    { label: "Block-Scholars Africa Campus Tech Program (BSACTP)", value: 1 },
  ];

  // Custom CountUp component
  const CountUp = ({ end, duration = 2, delay = 0.5 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      const timer = setTimeout(() => {
        const increment = end / (duration * 60);
        let current = 0;

        const counter = setInterval(() => {
          current += increment;
          if (current >= end) {
            setCount(end);
            clearInterval(counter);
          } else {
            setCount(Math.floor(current));
          }
        }, 1000 / 60);

        return () => clearInterval(counter);
      }, delay * 1000);

      return () => clearTimeout(timer);
    }, [end, duration, delay, isVisible]);

    return count;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("community-stats");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center py-8  px-4 sm:px-6 bg-gray-50 w-full">
      {/* Stats Section */}
      <div id="community-stats" className="w-full max-w-7xl">
        {/* Mobile Layout */}
        <div className="block lg:hidden">
          {/* Center Logo and Title */}
          <div className="text-center mb-8">
            <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 rounded-lg flex items-center justify-center">
              <img
                src={logo}
                alt="logo"
                className="w-full h-full object-cover"
              />
            </div>

            <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-[#242424] mb-4">
              Our Reach So Far
            </h1>
          </div>

          {/* Stats Grid for Mobile/Tablet */}
          <div className="grid grid-cols-1 xs:grid-cols-2 gap-6 sm:gap-8 max-w-md sm:max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`transform transition-all duration-1000 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-6 opacity-0"
                } hover:scale-105 transition-transform duration-300`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                <div className="group cursor-default text-center duration-300">
                  <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#242424] flex items-center justify-center mb-2 group-hover:text-[#720034] transition-colors duration-300">
                    <span className="tabular-nums">
                      <CountUp
                        end={stat.value}
                        duration={2}
                        delay={0.5 + index * 0.2}
                      />
                    </span>
                    <span className="text-lg sm:text-xl md:text-2xl ml-1 opacity-80">
                      +
                    </span>
                  </p>

                  <p className="text-xs sm:text-sm text-[#242424] font-medium leading-tight group-hover:text-gray-800 transition-colors duration-300">
                    {stat.label}
                  </p>

                  <div className="w-6 h-0.5 bg-[#720034] opacity-30 mx-auto mt-2 group-hover:w-10 group-hover:opacity-60 transition-all duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Layout - Circular Design */}
        <div className="hidden lg:block">
          <div className="relative min-h-[500px] max-w-6xl mx-auto">
            {/* Center Logo and Title */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
              <div className="w-20 h-20 xl:w-24 xl:h-24 mx-auto mb-4 rounded-lg flex items-center justify-center">
                <img
                  src={logo}
                  alt="logo"
                  className="w-full h-full object-cover"
                />
              </div>

              <h1 className="text-2xl xl:text-3xl font-bold text-[#242424] mb-2">
                Our Reach So Far
              </h1>

              <div className="w-3 h-3 bg-[#720034] rounded-full mx-auto mt-6"></div>
            </div>

            {/* Stats positioned around the center */}
            {/* Top Left */}
            <div className="absolute top-8 left-8 xl:top-12 xl:left-12 w-64 text-center">
              <div
                className={`group cursor-default transform transition-all duration-1000 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                } hover:scale-105 transition-transform duration-300`}
              >
                <p className="text-4xl xl:text-5xl font-extrabold text-[#242424] flex items-center justify-center mb-2 group-hover:text-[#720034] transition-colors duration-300">
                  <span className="tabular-nums">
                    <CountUp end={stats[0].value} duration={2} delay={0.5} />
                  </span>
                  <span className="text-2xl xl:text-3xl ml-1 opacity-80">
                    +
                  </span>
                </p>
                <p className="text-sm xl:text-base text-[#242424] font-medium leading-tight max-w-48 mx-auto group-hover:text-gray-800 transition-colors duration-300">
                  {stats[0].label}
                </p>
                <div className="w-8 h-0.5 bg-[#720034] opacity-30 mx-auto mt-2 group-hover:w-12 group-hover:opacity-60 transition-all duration-300"></div>
              </div>
            </div>

            {/* Top Right */}
            <div className="absolute top-8 right-8 xl:top-12 xl:right-12 w-64 text-center">
              <div
                className={`group cursor-default transform transition-all duration-1000 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                } hover:scale-105 transition-transform duration-300`}
                style={{ transitionDelay: "200ms" }}
              >
                <p className="text-4xl xl:text-5xl font-extrabold text-[#242424] flex items-center justify-center mb-2 group-hover:text-[#720034] transition-colors duration-300">
                  <span className="tabular-nums">
                    <CountUp end={stats[3].value} duration={2} delay={0.7} />
                  </span>
                  <span className="text-2xl xl:text-3xl ml-1 opacity-80">
                    +
                  </span>
                </p>
                <p className="text-sm xl:text-base text-[#242424] font-medium leading-tight max-w-48 mx-auto group-hover:text-gray-800 transition-colors duration-300">
                  {stats[3].label}
                </p>
                <div className="w-8 h-0.5 bg-[#720034] opacity-30 mx-auto mt-2 group-hover:w-12 group-hover:opacity-60 transition-all duration-300"></div>
              </div>
            </div>

            {/* Bottom Left */}
            <div className="absolute bottom-8 left-8 xl:bottom-12 xl:left-12 w-64 text-center">
              <div
                className={`group cursor-default transform transition-all duration-1000 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                } hover:scale-105 transition-transform duration-300`}
                style={{ transitionDelay: "400ms" }}
              >
                <p className="text-4xl xl:text-5xl font-extrabold text-[#242424] flex items-center justify-center mb-2 group-hover:text-[#720034] transition-colors duration-300">
                  <span className="tabular-nums">
                    <CountUp end={stats[1].value} duration={2} delay={0.9} />
                  </span>
                  <span className="text-2xl xl:text-3xl ml-1 opacity-80">
                    +
                  </span>
                </p>
                <p className="text-sm xl:text-base text-[#242424] font-medium leading-tight max-w-48 mx-auto group-hover:text-gray-800 transition-colors duration-300">
                  {stats[1].label}
                </p>
                <div className="w-8 h-0.5 bg-[#720034] opacity-30 mx-auto mt-2 group-hover:w-12 group-hover:opacity-60 transition-all duration-300"></div>
              </div>
            </div>

            {/* Bottom Right */}
            <div className="absolute bottom-8 right-8 xl:bottom-12 xl:right-12 w-64 text-center">
              <div
                className={`group cursor-default transform transition-all duration-1000 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                } hover:scale-105 transition-transform duration-300`}
                style={{ transitionDelay: "600ms" }}
              >
                <p className="text-4xl xl:text-5xl font-extrabold text-[#242424] flex items-center justify-center mb-2 group-hover:text-[#720034] transition-colors duration-300">
                  <span className="tabular-nums">
                    <CountUp end={stats[4].value} duration={2} delay={1.1} />
                  </span>
                  <span className="text-2xl xl:text-3xl ml-1 opacity-80">
                    +
                  </span>
                </p>
                <p className="text-sm xl:text-base text-[#242424] font-medium leading-tight max-w-48 mx-auto group-hover:text-gray-800 transition-colors duration-300">
                  {stats[4].label}
                </p>
                <div className="w-8 h-0.5 bg-[#720034] opacity-30 mx-auto mt-2 group-hover:w-12 group-hover:opacity-60 transition-all duration-300"></div>
              </div>
            </div>

            {/* Bottom Center */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 xl:bottom-12 w-64 text-center">
              <div
                className={`group cursor-default transform transition-all duration-1000 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                } hover:scale-105 transition-transform duration-300`}
                style={{ transitionDelay: "800ms" }}
              >
                <p className="text-4xl xl:text-5xl font-extrabold text-[#242424] flex items-center justify-center mb-2 group-hover:text-[#720034] transition-colors duration-300">
                  <span className="tabular-nums">
                    <CountUp end={stats[2].value} duration={2} delay={1.3} />
                  </span>
                  <span className="text-2xl xl:text-3xl ml-1 opacity-80">
                    +
                  </span>
                </p>
                <p className="text-sm xl:text-base text-[#242424] font-medium leading-tight max-w-48 mx-auto group-hover:text-gray-800 transition-colors duration-300">
                  {stats[2].label}
                </p>
                <div className="w-8 h-0.5 bg-[#720034] opacity-30 mx-auto mt-2 group-hover:w-12 group-hover:opacity-60 transition-all duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
