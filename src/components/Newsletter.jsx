import React, { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      console.log("Email submitted:", email);
      // You can integrate your API call here
      setEmail("");
    }
  };

  const features = [
    "Exclusive Bootcamps",
    "Expert-led Trainings",
    "Insightful Webinars",
    "Latest Tech Updates",
  ];

  return (
    <div className="bg-[#720034] py-12 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-4 sm:mb-6">
          Stay Ahead of the Curve!
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl text-white mb-8 sm:mb-10 font-medium">
          Be the first to know about our:
        </p>

        {/* Features list */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-12 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="text-white">
              <div className="flex items-center justify-center sm:justify-start">
                <div className="w-2 h-2 bg-white rounded-full mr-3 mt-1"></div>
                <span className="text-sm sm:text-base md:text-lg font-medium">
                  {feature}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Email form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-row flex-wrap gap-4 justify-center items-center max-w-xl mx-auto w-full"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
            className="flex-grow px-4 py-3 rounded-lg text-gray-700 text-sm placeholder-gray-400 min-w-[180px] focus:outline-none  focus:ring-white"
          />
          <button
            type="submit"
            className="bg-white text-[#720034] px-6 py-3 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors duration-200 whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}
