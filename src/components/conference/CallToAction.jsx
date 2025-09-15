import React from "react";
import Button from ".../../components/ui/Button";

const CallToAction = () => {
  return (
    <section className="w-full bg-[#720034]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14">
        <div className="py-16 md:py-20 lg:py-[80px]">
          {/* Content Container */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-8 lg:gap-12">
            {/* Left Section - Text */}
            <div className="w-full sm:w-auto flex-1 text-center sm:text-left">
              <p
                className="text-[18px] sm:text-[19px] md:text-[20px] lg:text-[21px] font-medium leading-[27px] sm:leading-[29px] md:leading-[30px] lg:leading-[32px] text-text-white"
                style={{ fontFamily: "Poppins" }}
              >
                Ready to take your Web3 experience to the next level?
              </p>
            </div>

            {/* Right Section - Button */}
            <div className="w-full sm:w-auto">
              <Button
                text="Register"
               
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
